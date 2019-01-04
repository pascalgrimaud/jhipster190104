import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IEntityWithServiceClass } from 'app/shared/model/entity-with-service-class.model';
import { EntityWithServiceClassService } from './entity-with-service-class.service';

@Component({
    selector: 'my-prefix-entity-with-service-class-update',
    templateUrl: './entity-with-service-class-update.component.html'
})
export class EntityWithServiceClassUpdateComponent implements OnInit {
    entityWithServiceClass: IEntityWithServiceClass;
    isSaving: boolean;

    constructor(protected entityWithServiceClassService: EntityWithServiceClassService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ entityWithServiceClass }) => {
            this.entityWithServiceClass = entityWithServiceClass;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.entityWithServiceClass.id !== undefined) {
            this.subscribeToSaveResponse(this.entityWithServiceClassService.update(this.entityWithServiceClass));
        } else {
            this.subscribeToSaveResponse(this.entityWithServiceClassService.create(this.entityWithServiceClass));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IEntityWithServiceClass>>) {
        result.subscribe(
            (res: HttpResponse<IEntityWithServiceClass>) => this.onSaveSuccess(),
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
