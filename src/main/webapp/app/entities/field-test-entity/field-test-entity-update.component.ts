import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiDataUtils } from 'ng-jhipster';
import { IFieldTestEntity } from 'app/shared/model/field-test-entity.model';
import { FieldTestEntityService } from './field-test-entity.service';

@Component({
    selector: 'my-prefix-field-test-entity-update',
    templateUrl: './field-test-entity-update.component.html'
})
export class FieldTestEntityUpdateComponent implements OnInit {
    fieldTestEntity: IFieldTestEntity;
    isSaving: boolean;
    localDateTomDp: any;
    localDateRequiredTomDp: any;
    instantTom: string;
    instantRequiredTom: string;
    zonedDateTimeTom: string;
    zonedDateTimeRequiredTom: string;

    constructor(
        protected dataUtils: JhiDataUtils,
        protected fieldTestEntityService: FieldTestEntityService,
        protected elementRef: ElementRef,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ fieldTestEntity }) => {
            this.fieldTestEntity = fieldTestEntity;
            this.instantTom = this.fieldTestEntity.instantTom != null ? this.fieldTestEntity.instantTom.format(DATE_TIME_FORMAT) : null;
            this.instantRequiredTom =
                this.fieldTestEntity.instantRequiredTom != null ? this.fieldTestEntity.instantRequiredTom.format(DATE_TIME_FORMAT) : null;
            this.zonedDateTimeTom =
                this.fieldTestEntity.zonedDateTimeTom != null ? this.fieldTestEntity.zonedDateTimeTom.format(DATE_TIME_FORMAT) : null;
            this.zonedDateTimeRequiredTom =
                this.fieldTestEntity.zonedDateTimeRequiredTom != null
                    ? this.fieldTestEntity.zonedDateTimeRequiredTom.format(DATE_TIME_FORMAT)
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
        this.dataUtils.clearInputImage(this.fieldTestEntity, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.fieldTestEntity.instantTom = this.instantTom != null ? moment(this.instantTom, DATE_TIME_FORMAT) : null;
        this.fieldTestEntity.instantRequiredTom =
            this.instantRequiredTom != null ? moment(this.instantRequiredTom, DATE_TIME_FORMAT) : null;
        this.fieldTestEntity.zonedDateTimeTom = this.zonedDateTimeTom != null ? moment(this.zonedDateTimeTom, DATE_TIME_FORMAT) : null;
        this.fieldTestEntity.zonedDateTimeRequiredTom =
            this.zonedDateTimeRequiredTom != null ? moment(this.zonedDateTimeRequiredTom, DATE_TIME_FORMAT) : null;
        if (this.fieldTestEntity.id !== undefined) {
            this.subscribeToSaveResponse(this.fieldTestEntityService.update(this.fieldTestEntity));
        } else {
            this.subscribeToSaveResponse(this.fieldTestEntityService.create(this.fieldTestEntity));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IFieldTestEntity>>) {
        result.subscribe((res: HttpResponse<IFieldTestEntity>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
