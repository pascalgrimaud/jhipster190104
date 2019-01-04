import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiDataUtils } from 'ng-jhipster';
import { IFieldTestPaginationEntity } from 'app/shared/model/field-test-pagination-entity.model';
import { FieldTestPaginationEntityService } from './field-test-pagination-entity.service';

@Component({
    selector: 'my-prefix-field-test-pagination-entity-update',
    templateUrl: './field-test-pagination-entity-update.component.html'
})
export class FieldTestPaginationEntityUpdateComponent implements OnInit {
    fieldTestPaginationEntity: IFieldTestPaginationEntity;
    isSaving: boolean;
    localDateAliceDp: any;
    localDateRequiredAliceDp: any;
    instantAlice: string;
    instanteRequiredAlice: string;
    zonedDateTimeAlice: string;
    zonedDateTimeRequiredAlice: string;

    constructor(
        protected dataUtils: JhiDataUtils,
        protected fieldTestPaginationEntityService: FieldTestPaginationEntityService,
        protected elementRef: ElementRef,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ fieldTestPaginationEntity }) => {
            this.fieldTestPaginationEntity = fieldTestPaginationEntity;
            this.instantAlice =
                this.fieldTestPaginationEntity.instantAlice != null
                    ? this.fieldTestPaginationEntity.instantAlice.format(DATE_TIME_FORMAT)
                    : null;
            this.instanteRequiredAlice =
                this.fieldTestPaginationEntity.instanteRequiredAlice != null
                    ? this.fieldTestPaginationEntity.instanteRequiredAlice.format(DATE_TIME_FORMAT)
                    : null;
            this.zonedDateTimeAlice =
                this.fieldTestPaginationEntity.zonedDateTimeAlice != null
                    ? this.fieldTestPaginationEntity.zonedDateTimeAlice.format(DATE_TIME_FORMAT)
                    : null;
            this.zonedDateTimeRequiredAlice =
                this.fieldTestPaginationEntity.zonedDateTimeRequiredAlice != null
                    ? this.fieldTestPaginationEntity.zonedDateTimeRequiredAlice.format(DATE_TIME_FORMAT)
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
        this.dataUtils.clearInputImage(this.fieldTestPaginationEntity, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.fieldTestPaginationEntity.instantAlice = this.instantAlice != null ? moment(this.instantAlice, DATE_TIME_FORMAT) : null;
        this.fieldTestPaginationEntity.instanteRequiredAlice =
            this.instanteRequiredAlice != null ? moment(this.instanteRequiredAlice, DATE_TIME_FORMAT) : null;
        this.fieldTestPaginationEntity.zonedDateTimeAlice =
            this.zonedDateTimeAlice != null ? moment(this.zonedDateTimeAlice, DATE_TIME_FORMAT) : null;
        this.fieldTestPaginationEntity.zonedDateTimeRequiredAlice =
            this.zonedDateTimeRequiredAlice != null ? moment(this.zonedDateTimeRequiredAlice, DATE_TIME_FORMAT) : null;
        if (this.fieldTestPaginationEntity.id !== undefined) {
            this.subscribeToSaveResponse(this.fieldTestPaginationEntityService.update(this.fieldTestPaginationEntity));
        } else {
            this.subscribeToSaveResponse(this.fieldTestPaginationEntityService.create(this.fieldTestPaginationEntity));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IFieldTestPaginationEntity>>) {
        result.subscribe(
            (res: HttpResponse<IFieldTestPaginationEntity>) => this.onSaveSuccess(),
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
