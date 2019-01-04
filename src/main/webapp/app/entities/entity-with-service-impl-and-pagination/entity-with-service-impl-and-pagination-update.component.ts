import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IEntityWithServiceImplAndPagination } from 'app/shared/model/entity-with-service-impl-and-pagination.model';
import { EntityWithServiceImplAndPaginationService } from './entity-with-service-impl-and-pagination.service';

@Component({
    selector: 'my-prefix-entity-with-service-impl-and-pagination-update',
    templateUrl: './entity-with-service-impl-and-pagination-update.component.html'
})
export class EntityWithServiceImplAndPaginationUpdateComponent implements OnInit {
    entityWithServiceImplAndPagination: IEntityWithServiceImplAndPagination;
    isSaving: boolean;

    constructor(
        protected entityWithServiceImplAndPaginationService: EntityWithServiceImplAndPaginationService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ entityWithServiceImplAndPagination }) => {
            this.entityWithServiceImplAndPagination = entityWithServiceImplAndPagination;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.entityWithServiceImplAndPagination.id !== undefined) {
            this.subscribeToSaveResponse(this.entityWithServiceImplAndPaginationService.update(this.entityWithServiceImplAndPagination));
        } else {
            this.subscribeToSaveResponse(this.entityWithServiceImplAndPaginationService.create(this.entityWithServiceImplAndPagination));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IEntityWithServiceImplAndPagination>>) {
        result.subscribe(
            (res: HttpResponse<IEntityWithServiceImplAndPagination>) => this.onSaveSuccess(),
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
