import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { IEntityWithServiceImplPaginationAndDTO } from 'app/shared/model/entity-with-service-impl-pagination-and-dto.model';
import { AccountService } from 'app/core';

import { ITEMS_PER_PAGE } from 'app/shared';
import { EntityWithServiceImplPaginationAndDTOService } from './entity-with-service-impl-pagination-and-dto.service';

@Component({
    selector: 'my-prefix-entity-with-service-impl-pagination-and-dto',
    templateUrl: './entity-with-service-impl-pagination-and-dto.component.html'
})
export class EntityWithServiceImplPaginationAndDTOComponent implements OnInit, OnDestroy {
    currentAccount: any;
    entityWithServiceImplPaginationAndDTOS: IEntityWithServiceImplPaginationAndDTO[];
    error: any;
    success: any;
    eventSubscriber: Subscription;
    routeData: any;
    links: any;
    totalItems: any;
    queryCount: any;
    itemsPerPage: any;
    page: any;
    predicate: any;
    previousPage: any;
    reverse: any;

    constructor(
        protected entityWithServiceImplPaginationAndDTOService: EntityWithServiceImplPaginationAndDTOService,
        protected parseLinks: JhiParseLinks,
        protected jhiAlertService: JhiAlertService,
        protected accountService: AccountService,
        protected activatedRoute: ActivatedRoute,
        protected router: Router,
        protected eventManager: JhiEventManager
    ) {
        this.itemsPerPage = ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(data => {
            this.page = data.pagingParams.page;
            this.previousPage = data.pagingParams.page;
            this.reverse = data.pagingParams.ascending;
            this.predicate = data.pagingParams.predicate;
        });
    }

    loadAll() {
        this.entityWithServiceImplPaginationAndDTOService
            .query({
                page: this.page - 1,
                size: this.itemsPerPage,
                sort: this.sort()
            })
            .subscribe(
                (res: HttpResponse<IEntityWithServiceImplPaginationAndDTO[]>) =>
                    this.paginateEntityWithServiceImplPaginationAndDTOS(res.body, res.headers),
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    loadPage(page: number) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    }

    transition() {
        this.router.navigate(['/entity-with-service-impl-pagination-and-dto'], {
            queryParams: {
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    }

    clear() {
        this.page = 0;
        this.router.navigate([
            '/entity-with-service-impl-pagination-and-dto',
            {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        ]);
        this.loadAll();
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInEntityWithServiceImplPaginationAndDTOS();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IEntityWithServiceImplPaginationAndDTO) {
        return item.id;
    }

    registerChangeInEntityWithServiceImplPaginationAndDTOS() {
        this.eventSubscriber = this.eventManager.subscribe('entityWithServiceImplPaginationAndDTOListModification', response =>
            this.loadAll()
        );
    }

    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }

    protected paginateEntityWithServiceImplPaginationAndDTOS(data: IEntityWithServiceImplPaginationAndDTO[], headers: HttpHeaders) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        this.queryCount = this.totalItems;
        this.entityWithServiceImplPaginationAndDTOS = data;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
