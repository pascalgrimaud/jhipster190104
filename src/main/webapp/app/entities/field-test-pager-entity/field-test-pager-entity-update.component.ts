import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiDataUtils } from 'ng-jhipster';
import { IFieldTestPagerEntity } from 'app/shared/model/field-test-pager-entity.model';
import { FieldTestPagerEntityService } from './field-test-pager-entity.service';

@Component({
    selector: 'my-prefix-field-test-pager-entity-update',
    templateUrl: './field-test-pager-entity-update.component.html'
})
export class FieldTestPagerEntityUpdateComponent implements OnInit {
    fieldTestPagerEntity: IFieldTestPagerEntity;
    isSaving: boolean;
    localDateJadeDp: any;
    localDateRequiredJadeDp: any;
    instantJade: string;
    instanteRequiredJade: string;
    zonedDateTimeJade: string;
    zonedDateTimeRequiredJade: string;

    constructor(
        protected dataUtils: JhiDataUtils,
        protected fieldTestPagerEntityService: FieldTestPagerEntityService,
        protected elementRef: ElementRef,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ fieldTestPagerEntity }) => {
            this.fieldTestPagerEntity = fieldTestPagerEntity;
            this.instantJade =
                this.fieldTestPagerEntity.instantJade != null ? this.fieldTestPagerEntity.instantJade.format(DATE_TIME_FORMAT) : null;
            this.instanteRequiredJade =
                this.fieldTestPagerEntity.instanteRequiredJade != null
                    ? this.fieldTestPagerEntity.instanteRequiredJade.format(DATE_TIME_FORMAT)
                    : null;
            this.zonedDateTimeJade =
                this.fieldTestPagerEntity.zonedDateTimeJade != null
                    ? this.fieldTestPagerEntity.zonedDateTimeJade.format(DATE_TIME_FORMAT)
                    : null;
            this.zonedDateTimeRequiredJade =
                this.fieldTestPagerEntity.zonedDateTimeRequiredJade != null
                    ? this.fieldTestPagerEntity.zonedDateTimeRequiredJade.format(DATE_TIME_FORMAT)
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
        this.dataUtils.clearInputImage(this.fieldTestPagerEntity, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.fieldTestPagerEntity.instantJade = this.instantJade != null ? moment(this.instantJade, DATE_TIME_FORMAT) : null;
        this.fieldTestPagerEntity.instanteRequiredJade =
            this.instanteRequiredJade != null ? moment(this.instanteRequiredJade, DATE_TIME_FORMAT) : null;
        this.fieldTestPagerEntity.zonedDateTimeJade =
            this.zonedDateTimeJade != null ? moment(this.zonedDateTimeJade, DATE_TIME_FORMAT) : null;
        this.fieldTestPagerEntity.zonedDateTimeRequiredJade =
            this.zonedDateTimeRequiredJade != null ? moment(this.zonedDateTimeRequiredJade, DATE_TIME_FORMAT) : null;
        if (this.fieldTestPagerEntity.id !== undefined) {
            this.subscribeToSaveResponse(this.fieldTestPagerEntityService.update(this.fieldTestPagerEntity));
        } else {
            this.subscribeToSaveResponse(this.fieldTestPagerEntityService.create(this.fieldTestPagerEntity));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IFieldTestPagerEntity>>) {
        result.subscribe(
            (res: HttpResponse<IFieldTestPagerEntity>) => this.onSaveSuccess(),
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
