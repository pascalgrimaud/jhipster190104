import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService, JhiDataUtils } from 'ng-jhipster';

import { IFieldTestMapstructEntity } from 'app/shared/model/field-test-mapstruct-entity.model';
import { AccountService } from 'app/core';
import { FieldTestMapstructEntityService } from './field-test-mapstruct-entity.service';

@Component({
    selector: 'my-prefix-field-test-mapstruct-entity',
    templateUrl: './field-test-mapstruct-entity.component.html'
})
export class FieldTestMapstructEntityComponent implements OnInit, OnDestroy {
    fieldTestMapstructEntities: IFieldTestMapstructEntity[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected fieldTestMapstructEntityService: FieldTestMapstructEntityService,
        protected jhiAlertService: JhiAlertService,
        protected dataUtils: JhiDataUtils,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.fieldTestMapstructEntityService
            .query()
            .pipe(
                filter((res: HttpResponse<IFieldTestMapstructEntity[]>) => res.ok),
                map((res: HttpResponse<IFieldTestMapstructEntity[]>) => res.body)
            )
            .subscribe(
                (res: IFieldTestMapstructEntity[]) => {
                    this.fieldTestMapstructEntities = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInFieldTestMapstructEntities();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IFieldTestMapstructEntity) {
        return item.id;
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    registerChangeInFieldTestMapstructEntities() {
        this.eventSubscriber = this.eventManager.subscribe('fieldTestMapstructEntityListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
