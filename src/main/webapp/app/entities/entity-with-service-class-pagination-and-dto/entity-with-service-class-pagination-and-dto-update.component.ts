import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IEntityWithServiceClassPaginationAndDTO } from 'app/shared/model/entity-with-service-class-pagination-and-dto.model';
import { EntityWithServiceClassPaginationAndDTOService } from './entity-with-service-class-pagination-and-dto.service';

@Component({
    selector: 'my-prefix-entity-with-service-class-pagination-and-dto-update',
    templateUrl: './entity-with-service-class-pagination-and-dto-update.component.html'
})
export class EntityWithServiceClassPaginationAndDTOUpdateComponent implements OnInit {
    entityWithServiceClassPaginationAndDTO: IEntityWithServiceClassPaginationAndDTO;
    isSaving: boolean;

    constructor(
        protected entityWithServiceClassPaginationAndDTOService: EntityWithServiceClassPaginationAndDTOService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ entityWithServiceClassPaginationAndDTO }) => {
            this.entityWithServiceClassPaginationAndDTO = entityWithServiceClassPaginationAndDTO;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.entityWithServiceClassPaginationAndDTO.id !== undefined) {
            this.subscribeToSaveResponse(
                this.entityWithServiceClassPaginationAndDTOService.update(this.entityWithServiceClassPaginationAndDTO)
            );
        } else {
            this.subscribeToSaveResponse(
                this.entityWithServiceClassPaginationAndDTOService.create(this.entityWithServiceClassPaginationAndDTO)
            );
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IEntityWithServiceClassPaginationAndDTO>>) {
        result.subscribe(
            (res: HttpResponse<IEntityWithServiceClassPaginationAndDTO>) => this.onSaveSuccess(),
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
