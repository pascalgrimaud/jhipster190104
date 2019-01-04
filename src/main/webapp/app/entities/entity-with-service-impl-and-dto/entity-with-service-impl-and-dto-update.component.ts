import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IEntityWithServiceImplAndDTO } from 'app/shared/model/entity-with-service-impl-and-dto.model';
import { EntityWithServiceImplAndDTOService } from './entity-with-service-impl-and-dto.service';

@Component({
    selector: 'my-prefix-entity-with-service-impl-and-dto-update',
    templateUrl: './entity-with-service-impl-and-dto-update.component.html'
})
export class EntityWithServiceImplAndDTOUpdateComponent implements OnInit {
    entityWithServiceImplAndDTO: IEntityWithServiceImplAndDTO;
    isSaving: boolean;

    constructor(
        protected entityWithServiceImplAndDTOService: EntityWithServiceImplAndDTOService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ entityWithServiceImplAndDTO }) => {
            this.entityWithServiceImplAndDTO = entityWithServiceImplAndDTO;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.entityWithServiceImplAndDTO.id !== undefined) {
            this.subscribeToSaveResponse(this.entityWithServiceImplAndDTOService.update(this.entityWithServiceImplAndDTO));
        } else {
            this.subscribeToSaveResponse(this.entityWithServiceImplAndDTOService.create(this.entityWithServiceImplAndDTO));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IEntityWithServiceImplAndDTO>>) {
        result.subscribe(
            (res: HttpResponse<IEntityWithServiceImplAndDTO>) => this.onSaveSuccess(),
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
