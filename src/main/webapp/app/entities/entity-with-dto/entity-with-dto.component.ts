import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IEntityWithDTO } from 'app/shared/model/entity-with-dto.model';
import { AccountService } from 'app/core';
import { EntityWithDTOService } from './entity-with-dto.service';

@Component({
    selector: 'my-prefix-entity-with-dto',
    templateUrl: './entity-with-dto.component.html'
})
export class EntityWithDTOComponent implements OnInit, OnDestroy {
    entityWithDTOS: IEntityWithDTO[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected entityWithDTOService: EntityWithDTOService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.entityWithDTOService
            .query()
            .pipe(
                filter((res: HttpResponse<IEntityWithDTO[]>) => res.ok),
                map((res: HttpResponse<IEntityWithDTO[]>) => res.body)
            )
            .subscribe(
                (res: IEntityWithDTO[]) => {
                    this.entityWithDTOS = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInEntityWithDTOS();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IEntityWithDTO) {
        return item.id;
    }

    registerChangeInEntityWithDTOS() {
        this.eventSubscriber = this.eventManager.subscribe('entityWithDTOListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
