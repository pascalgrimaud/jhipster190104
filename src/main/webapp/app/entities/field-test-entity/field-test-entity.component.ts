import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService, JhiDataUtils } from 'ng-jhipster';

import { IFieldTestEntity } from 'app/shared/model/field-test-entity.model';
import { AccountService } from 'app/core';
import { FieldTestEntityService } from './field-test-entity.service';

@Component({
    selector: 'my-prefix-field-test-entity',
    templateUrl: './field-test-entity.component.html'
})
export class FieldTestEntityComponent implements OnInit, OnDestroy {
    fieldTestEntities: IFieldTestEntity[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected fieldTestEntityService: FieldTestEntityService,
        protected jhiAlertService: JhiAlertService,
        protected dataUtils: JhiDataUtils,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.fieldTestEntityService
            .query()
            .pipe(
                filter((res: HttpResponse<IFieldTestEntity[]>) => res.ok),
                map((res: HttpResponse<IFieldTestEntity[]>) => res.body)
            )
            .subscribe(
                (res: IFieldTestEntity[]) => {
                    this.fieldTestEntities = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInFieldTestEntities();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IFieldTestEntity) {
        return item.id;
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    registerChangeInFieldTestEntities() {
        this.eventSubscriber = this.eventManager.subscribe('fieldTestEntityListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
