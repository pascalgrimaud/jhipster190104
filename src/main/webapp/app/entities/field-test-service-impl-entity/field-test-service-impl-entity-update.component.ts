import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiDataUtils } from 'ng-jhipster';
import { IFieldTestServiceImplEntity } from 'app/shared/model/field-test-service-impl-entity.model';
import { FieldTestServiceImplEntityService } from './field-test-service-impl-entity.service';

@Component({
    selector: 'my-prefix-field-test-service-impl-entity-update',
    templateUrl: './field-test-service-impl-entity-update.component.html'
})
export class FieldTestServiceImplEntityUpdateComponent implements OnInit {
    fieldTestServiceImplEntity: IFieldTestServiceImplEntity;
    isSaving: boolean;
    localDateMikaDp: any;
    localDateRequiredMikaDp: any;
    instantMika: string;
    instanteRequiredMika: string;
    zonedDateTimeMika: string;
    zonedDateTimeRequiredMika: string;

    constructor(
        protected dataUtils: JhiDataUtils,
        protected fieldTestServiceImplEntityService: FieldTestServiceImplEntityService,
        protected elementRef: ElementRef,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ fieldTestServiceImplEntity }) => {
            this.fieldTestServiceImplEntity = fieldTestServiceImplEntity;
            this.instantMika =
                this.fieldTestServiceImplEntity.instantMika != null
                    ? this.fieldTestServiceImplEntity.instantMika.format(DATE_TIME_FORMAT)
                    : null;
            this.instanteRequiredMika =
                this.fieldTestServiceImplEntity.instanteRequiredMika != null
                    ? this.fieldTestServiceImplEntity.instanteRequiredMika.format(DATE_TIME_FORMAT)
                    : null;
            this.zonedDateTimeMika =
                this.fieldTestServiceImplEntity.zonedDateTimeMika != null
                    ? this.fieldTestServiceImplEntity.zonedDateTimeMika.format(DATE_TIME_FORMAT)
                    : null;
            this.zonedDateTimeRequiredMika =
                this.fieldTestServiceImplEntity.zonedDateTimeRequiredMika != null
                    ? this.fieldTestServiceImplEntity.zonedDateTimeRequiredMika.format(DATE_TIME_FORMAT)
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
        this.dataUtils.clearInputImage(this.fieldTestServiceImplEntity, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.fieldTestServiceImplEntity.instantMika = this.instantMika != null ? moment(this.instantMika, DATE_TIME_FORMAT) : null;
        this.fieldTestServiceImplEntity.instanteRequiredMika =
            this.instanteRequiredMika != null ? moment(this.instanteRequiredMika, DATE_TIME_FORMAT) : null;
        this.fieldTestServiceImplEntity.zonedDateTimeMika =
            this.zonedDateTimeMika != null ? moment(this.zonedDateTimeMika, DATE_TIME_FORMAT) : null;
        this.fieldTestServiceImplEntity.zonedDateTimeRequiredMika =
            this.zonedDateTimeRequiredMika != null ? moment(this.zonedDateTimeRequiredMika, DATE_TIME_FORMAT) : null;
        if (this.fieldTestServiceImplEntity.id !== undefined) {
            this.subscribeToSaveResponse(this.fieldTestServiceImplEntityService.update(this.fieldTestServiceImplEntity));
        } else {
            this.subscribeToSaveResponse(this.fieldTestServiceImplEntityService.create(this.fieldTestServiceImplEntity));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IFieldTestServiceImplEntity>>) {
        result.subscribe(
            (res: HttpResponse<IFieldTestServiceImplEntity>) => this.onSaveSuccess(),
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
