import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiDataUtils } from 'ng-jhipster';
import { IFieldTestMapstructEntity } from 'app/shared/model/field-test-mapstruct-entity.model';
import { FieldTestMapstructEntityService } from './field-test-mapstruct-entity.service';

@Component({
    selector: 'my-prefix-field-test-mapstruct-entity-update',
    templateUrl: './field-test-mapstruct-entity-update.component.html'
})
export class FieldTestMapstructEntityUpdateComponent implements OnInit {
    fieldTestMapstructEntity: IFieldTestMapstructEntity;
    isSaving: boolean;
    localDateEvaDp: any;
    localDateRequiredEvaDp: any;
    instantEva: string;
    instanteRequiredEva: string;
    zonedDateTimeEva: string;
    zonedDateTimeRequiredEva: string;

    constructor(
        protected dataUtils: JhiDataUtils,
        protected fieldTestMapstructEntityService: FieldTestMapstructEntityService,
        protected elementRef: ElementRef,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ fieldTestMapstructEntity }) => {
            this.fieldTestMapstructEntity = fieldTestMapstructEntity;
            this.instantEva =
                this.fieldTestMapstructEntity.instantEva != null ? this.fieldTestMapstructEntity.instantEva.format(DATE_TIME_FORMAT) : null;
            this.instanteRequiredEva =
                this.fieldTestMapstructEntity.instanteRequiredEva != null
                    ? this.fieldTestMapstructEntity.instanteRequiredEva.format(DATE_TIME_FORMAT)
                    : null;
            this.zonedDateTimeEva =
                this.fieldTestMapstructEntity.zonedDateTimeEva != null
                    ? this.fieldTestMapstructEntity.zonedDateTimeEva.format(DATE_TIME_FORMAT)
                    : null;
            this.zonedDateTimeRequiredEva =
                this.fieldTestMapstructEntity.zonedDateTimeRequiredEva != null
                    ? this.fieldTestMapstructEntity.zonedDateTimeRequiredEva.format(DATE_TIME_FORMAT)
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
        this.dataUtils.clearInputImage(this.fieldTestMapstructEntity, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.fieldTestMapstructEntity.instantEva = this.instantEva != null ? moment(this.instantEva, DATE_TIME_FORMAT) : null;
        this.fieldTestMapstructEntity.instanteRequiredEva =
            this.instanteRequiredEva != null ? moment(this.instanteRequiredEva, DATE_TIME_FORMAT) : null;
        this.fieldTestMapstructEntity.zonedDateTimeEva =
            this.zonedDateTimeEva != null ? moment(this.zonedDateTimeEva, DATE_TIME_FORMAT) : null;
        this.fieldTestMapstructEntity.zonedDateTimeRequiredEva =
            this.zonedDateTimeRequiredEva != null ? moment(this.zonedDateTimeRequiredEva, DATE_TIME_FORMAT) : null;
        if (this.fieldTestMapstructEntity.id !== undefined) {
            this.subscribeToSaveResponse(this.fieldTestMapstructEntityService.update(this.fieldTestMapstructEntity));
        } else {
            this.subscribeToSaveResponse(this.fieldTestMapstructEntityService.create(this.fieldTestMapstructEntity));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IFieldTestMapstructEntity>>) {
        result.subscribe(
            (res: HttpResponse<IFieldTestMapstructEntity>) => this.onSaveSuccess(),
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
