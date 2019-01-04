import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEntityWithServiceClassAndPagination } from 'app/shared/model/entity-with-service-class-and-pagination.model';

@Component({
    selector: 'my-prefix-entity-with-service-class-and-pagination-detail',
    templateUrl: './entity-with-service-class-and-pagination-detail.component.html'
})
export class EntityWithServiceClassAndPaginationDetailComponent implements OnInit {
    entityWithServiceClassAndPagination: IEntityWithServiceClassAndPagination;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ entityWithServiceClassAndPagination }) => {
            this.entityWithServiceClassAndPagination = entityWithServiceClassAndPagination;
        });
    }

    previousState() {
        window.history.back();
    }
}
