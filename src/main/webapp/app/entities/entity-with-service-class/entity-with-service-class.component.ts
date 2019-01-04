import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IEntityWithServiceClass } from 'app/shared/model/entity-with-service-class.model';
import { AccountService } from 'app/core';
import { EntityWithServiceClassService } from './entity-with-service-class.service';

@Component({
    selector: 'my-prefix-entity-with-service-class',
    templateUrl: './entity-with-service-class.component.html'
})
export class EntityWithServiceClassComponent implements OnInit, OnDestroy {
    entityWithServiceClasses: IEntityWithServiceClass[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected entityWithServiceClassService: EntityWithServiceClassService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.entityWithServiceClassService
            .query()
            .pipe(
                filter((res: HttpResponse<IEntityWithServiceClass[]>) => res.ok),
                map((res: HttpResponse<IEntityWithServiceClass[]>) => res.body)
            )
            .subscribe(
                (res: IEntityWithServiceClass[]) => {
                    this.entityWithServiceClasses = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInEntityWithServiceClasses();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IEntityWithServiceClass) {
        return item.id;
    }

    registerChangeInEntityWithServiceClasses() {
        this.eventSubscriber = this.eventManager.subscribe('entityWithServiceClassListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
