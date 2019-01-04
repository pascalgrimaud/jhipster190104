import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IEntityWithDTO } from 'app/shared/model/entity-with-dto.model';
import { EntityWithDTOService } from './entity-with-dto.service';

@Component({
    selector: 'my-prefix-entity-with-dto-update',
    templateUrl: './entity-with-dto-update.component.html'
})
export class EntityWithDTOUpdateComponent implements OnInit {
    entityWithDTO: IEntityWithDTO;
    isSaving: boolean;

    constructor(protected entityWithDTOService: EntityWithDTOService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ entityWithDTO }) => {
            this.entityWithDTO = entityWithDTO;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.entityWithDTO.id !== undefined) {
            this.subscribeToSaveResponse(this.entityWithDTOService.update(this.entityWithDTO));
        } else {
            this.subscribeToSaveResponse(this.entityWithDTOService.create(this.entityWithDTO));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IEntityWithDTO>>) {
        result.subscribe((res: HttpResponse<IEntityWithDTO>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
