import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiDataUtils } from 'ng-jhipster';
import { IFieldTestServiceClassEntity } from 'app/shared/model/field-test-service-class-entity.model';
import { FieldTestServiceClassEntityService } from './field-test-service-class-entity.service';

@Component({
    selector: 'my-prefix-field-test-service-class-entity-update',
    templateUrl: './field-test-service-class-entity-update.component.html'
})
export class FieldTestServiceClassEntityUpdateComponent implements OnInit {
    fieldTestServiceClassEntity: IFieldTestServiceClassEntity;
    isSaving: boolean;
    localDateBobDp: any;
    localDateRequiredBobDp: any;
    instantBob: string;
    instanteRequiredBob: string;
    zonedDateTimeBob: string;
    zonedDateTimeRequiredBob: string;

    constructor(
        protected dataUtils: JhiDataUtils,
        protected fieldTestServiceClassEntityService: FieldTestServiceClassEntityService,
        protected elementRef: ElementRef,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ fieldTestServiceClassEntity }) => {
            this.fieldTestServiceClassEntity = fieldTestServiceClassEntity;
            this.instantBob =
                this.fieldTestServiceClassEntity.instantBob != null
                    ? this.fieldTestServiceClassEntity.instantBob.format(DATE_TIME_FORMAT)
                    : null;
            this.instanteRequiredBob =
                this.fieldTestServiceClassEntity.instanteRequiredBob != null
                    ? this.fieldTestServiceClassEntity.instanteRequiredBob.format(DATE_TIME_FORMAT)
                    : null;
            this.zonedDateTimeBob =
                this.fieldTestServiceClassEntity.zonedDateTimeBob != null
                    ? this.fieldTestServiceClassEntity.zonedDateTimeBob.format(DATE_TIME_FORMAT)
                    : null;
            this.zonedDateTimeRequiredBob =
                this.fieldTestServiceClassEntity.zonedDateTimeRequiredBob != null
                    ? this.fieldTestServiceClassEntity.zonedDateTimeRequiredBob.format(DATE_TIME_FORMAT)
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
        this.dataUtils.clearInputImage(this.fieldTestServiceClassEntity, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.fieldTestServiceClassEntity.instantBob = this.instantBob != null ? moment(this.instantBob, DATE_TIME_FORMAT) : null;
        this.fieldTestServiceClassEntity.instanteRequiredBob =
            this.instanteRequiredBob != null ? moment(this.instanteRequiredBob, DATE_TIME_FORMAT) : null;
        this.fieldTestServiceClassEntity.zonedDateTimeBob =
            this.zonedDateTimeBob != null ? moment(this.zonedDateTimeBob, DATE_TIME_FORMAT) : null;
        this.fieldTestServiceClassEntity.zonedDateTimeRequiredBob =
            this.zonedDateTimeRequiredBob != null ? moment(this.zonedDateTimeRequiredBob, DATE_TIME_FORMAT) : null;
        if (this.fieldTestServiceClassEntity.id !== undefined) {
            this.subscribeToSaveResponse(this.fieldTestServiceClassEntityService.update(this.fieldTestServiceClassEntity));
        } else {
            this.subscribeToSaveResponse(this.fieldTestServiceClassEntityService.create(this.fieldTestServiceClassEntity));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IFieldTestServiceClassEntity>>) {
        result.subscribe(
            (res: HttpResponse<IFieldTestServiceClassEntity>) => this.onSaveSuccess(),
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
