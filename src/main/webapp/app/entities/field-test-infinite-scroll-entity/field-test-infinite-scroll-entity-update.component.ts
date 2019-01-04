import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiDataUtils } from 'ng-jhipster';
import { IFieldTestInfiniteScrollEntity } from 'app/shared/model/field-test-infinite-scroll-entity.model';
import { FieldTestInfiniteScrollEntityService } from './field-test-infinite-scroll-entity.service';

@Component({
    selector: 'my-prefix-field-test-infinite-scroll-entity-update',
    templateUrl: './field-test-infinite-scroll-entity-update.component.html'
})
export class FieldTestInfiniteScrollEntityUpdateComponent implements OnInit {
    fieldTestInfiniteScrollEntity: IFieldTestInfiniteScrollEntity;
    isSaving: boolean;
    localDateHugoDp: any;
    localDateRequiredHugoDp: any;
    instantHugo: string;
    instanteRequiredHugo: string;
    zonedDateTimeHugo: string;
    zonedDateTimeRequiredHugo: string;

    constructor(
        protected dataUtils: JhiDataUtils,
        protected fieldTestInfiniteScrollEntityService: FieldTestInfiniteScrollEntityService,
        protected elementRef: ElementRef,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ fieldTestInfiniteScrollEntity }) => {
            this.fieldTestInfiniteScrollEntity = fieldTestInfiniteScrollEntity;
            this.instantHugo =
                this.fieldTestInfiniteScrollEntity.instantHugo != null
                    ? this.fieldTestInfiniteScrollEntity.instantHugo.format(DATE_TIME_FORMAT)
                    : null;
            this.instanteRequiredHugo =
                this.fieldTestInfiniteScrollEntity.instanteRequiredHugo != null
                    ? this.fieldTestInfiniteScrollEntity.instanteRequiredHugo.format(DATE_TIME_FORMAT)
                    : null;
            this.zonedDateTimeHugo =
                this.fieldTestInfiniteScrollEntity.zonedDateTimeHugo != null
                    ? this.fieldTestInfiniteScrollEntity.zonedDateTimeHugo.format(DATE_TIME_FORMAT)
                    : null;
            this.zonedDateTimeRequiredHugo =
                this.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo != null
                    ? this.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo.format(DATE_TIME_FORMAT)
                    : null;
        });
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData(event, entity, field, isImage) {
        this.dataUtils.setFileData(event, entity, field, isImage);
    }

    clearInputImage(field: string, fieldContentType: string, idInput: string) {
        this.dataUtils.clearInputImage(this.fieldTestInfiniteScrollEntity, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.fieldTestInfiniteScrollEntity.instantHugo = this.instantHugo != null ? moment(this.instantHugo, DATE_TIME_FORMAT) : null;
        this.fieldTestInfiniteScrollEntity.instanteRequiredHugo =
            this.instanteRequiredHugo != null ? moment(this.instanteRequiredHugo, DATE_TIME_FORMAT) : null;
        this.fieldTestInfiniteScrollEntity.zonedDateTimeHugo =
            this.zonedDateTimeHugo != null ? moment(this.zonedDateTimeHugo, DATE_TIME_FORMAT) : null;
        this.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo =
            this.zonedDateTimeRequiredHugo != null ? moment(this.zonedDateTimeRequiredHugo, DATE_TIME_FORMAT) : null;
        if (this.fieldTestInfiniteScrollEntity.id !== undefined) {
            this.subscribeToSaveResponse(this.fieldTestInfiniteScrollEntityService.update(this.fieldTestInfiniteScrollEntity));
        } else {
            this.subscribeToSaveResponse(this.fieldTestInfiniteScrollEntityService.create(this.fieldTestInfiniteScrollEntity));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IFieldTestInfiniteScrollEntity>>) {
        result.subscribe(
            (res: HttpResponse<IFieldTestInfiniteScrollEntity>) => this.onSaveSuccess(),
            (res: HttpErrorResponse) => this.onSaveError()
        );
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
