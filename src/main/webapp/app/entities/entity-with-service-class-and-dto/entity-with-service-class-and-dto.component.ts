import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IEntityWithServiceClassAndDTO } from 'app/shared/model/entity-with-service-class-and-dto.model';
import { AccountService } from 'app/core';
import { EntityWithServiceClassAndDTOService } from './entity-with-service-class-and-dto.service';

@Component({
    selector: 'my-prefix-entity-with-service-class-and-dto',
    templateUrl: './entity-with-service-class-and-dto.component.html'
})
export class EntityWithServiceClassAndDTOComponent implements OnInit, OnDestroy {
    entityWithServiceClassAndDTOS: IEntityWithServiceClassAndDTO[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected entityWithServiceClassAndDTOService: EntityWithServiceClassAndDTOService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.entityWithServiceClassAndDTOService
            .query()
            .pipe(
                filter((res: HttpResponse<IEntityWithServiceClassAndDTO[]>) => res.ok),
                map((res: HttpResponse<IEntityWithServiceClassAndDTO[]>) => res.body)
            )
            .subscribe(
                (res: IEntityWithServiceClassAndDTO[]) => {
                    this.entityWithServiceClassAndDTOS = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInEntityWithServiceClassAndDTOS();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IEntityWithServiceClassAndDTO) {
        return item.id;
    }

    registerChangeInEntityWithServiceClassAndDTOS() {
        this.eventSubscriber = this.eventManager.subscribe('entityWithServiceClassAndDTOListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
