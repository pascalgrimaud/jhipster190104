import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IEntityWithServiceClassAndPagination } from 'app/shared/model/entity-with-service-class-and-pagination.model';
import { EntityWithServiceClassAndPaginationService } from './entity-with-service-class-and-pagination.service';

@Component({
    selector: 'my-prefix-entity-with-service-class-and-pagination-update',
    templateUrl: './entity-with-service-class-and-pagination-update.component.html'
})
export class EntityWithServiceClassAndPaginationUpdateComponent implements OnInit {
    entityWithServiceClassAndPagination: IEntityWithServiceClassAndPagination;
    isSaving: boolean;

    constructor(
        protected entityWithServiceClassAndPaginationService: EntityWithServiceClassAndPaginationService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ entityWithServiceClassAndPagination }) => {
            this.entityWithServiceClassAndPagination = entityWithServiceClassAndPagination;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.entityWithServiceClassAndPagination.id !== undefined) {
            this.subscribeToSaveResponse(this.entityWithServiceClassAndPaginationService.update(this.entityWithServiceClassAndPagination));
        } else {
            this.subscribeToSaveResponse(this.entityWithServiceClassAndPaginationService.create(this.entityWithServiceClassAndPagination));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IEntityWithServiceClassAndPagination>>) {
        result.subscribe(
            (res: HttpResponse<IEntityWithServiceClassAndPagination>) => this.onSaveSuccess(),
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
