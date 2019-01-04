import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IEntityWithServiceImpl } from 'app/shared/model/entity-with-service-impl.model';
import { AccountService } from 'app/core';
import { EntityWithServiceImplService } from './entity-with-service-impl.service';

@Component({
    selector: 'my-prefix-entity-with-service-impl',
    templateUrl: './entity-with-service-impl.component.html'
})
export class EntityWithServiceImplComponent implements OnInit, OnDestroy {
    entityWithServiceImpls: IEntityWithServiceImpl[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected entityWithServiceImplService: EntityWithServiceImplService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.entityWithServiceImplService
            .query()
            .pipe(
                filter((res: HttpResponse<IEntityWithServiceImpl[]>) => res.ok),
                map((res: HttpResponse<IEntityWithServiceImpl[]>) => res.body)
            )
            .subscribe(
                (res: IEntityWithServiceImpl[]) => {
                    this.entityWithServiceImpls = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInEntityWithServiceImpls();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IEntityWithServiceImpl) {
        return item.id;
    }

    registerChangeInEntityWithServiceImpls() {
        this.eventSubscriber = this.eventManager.subscribe('entityWithServiceImplListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
