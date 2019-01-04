import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IEntityWithPaginationAndDTO } from 'app/shared/model/entity-with-pagination-and-dto.model';
import { EntityWithPaginationAndDTOService } from './entity-with-pagination-and-dto.service';

@Component({
    selector: 'my-prefix-entity-with-pagination-and-dto-update',
    templateUrl: './entity-with-pagination-and-dto-update.component.html'
})
export class EntityWithPaginationAndDTOUpdateComponent implements OnInit {
    entityWithPaginationAndDTO: IEntityWithPaginationAndDTO;
    isSaving: boolean;

    constructor(protected entityWithPaginationAndDTOService: EntityWithPaginationAndDTOService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ entityWithPaginationAndDTO }) => {
            this.entityWithPaginationAndDTO = entityWithPaginationAndDTO;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.entityWithPaginationAndDTO.id !== undefined) {
            this.subscribeToSaveResponse(this.entityWithPaginationAndDTOService.update(this.entityWithPaginationAndDTO));
        } else {
            this.subscribeToSaveResponse(this.entityWithPaginationAndDTOService.create(this.entityWithPaginationAndDTO));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IEntityWithPaginationAndDTO>>) {
        result.subscribe(
            (res: HttpResponse<IEntityWithPaginationAndDTO>) => this.onSaveSuccess(),
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
