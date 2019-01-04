import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IEntityWithServiceImpl } from 'app/shared/model/entity-with-service-impl.model';
import { EntityWithServiceImplService } from './entity-with-service-impl.service';

@Component({
    selector: 'my-prefix-entity-with-service-impl-update',
    templateUrl: './entity-with-service-impl-update.component.html'
})
export class EntityWithServiceImplUpdateComponent implements OnInit {
    entityWithServiceImpl: IEntityWithServiceImpl;
    isSaving: boolean;

    constructor(protected entityWithServiceImplService: EntityWithServiceImplService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ entityWithServiceImpl }) => {
            this.entityWithServiceImpl = entityWithServiceImpl;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.entityWithServiceImpl.id !== undefined) {
            this.subscribeToSaveResponse(this.entityWithServiceImplService.update(this.entityWithServiceImpl));
        } else {
            this.subscribeToSaveResponse(this.entityWithServiceImplService.create(this.entityWithServiceImpl));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IEntityWithServiceImpl>>) {
        result.subscribe(
            (res: HttpResponse<IEntityWithServiceImpl>) => this.onSaveSuccess(),
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
