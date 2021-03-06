import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEntityWithServiceImplAndPagination } from 'app/shared/model/entity-with-service-impl-and-pagination.model';

@Component({
    selector: 'my-prefix-entity-with-service-impl-and-pagination-detail',
    templateUrl: './entity-with-service-impl-and-pagination-detail.component.html'
})
export class EntityWithServiceImplAndPaginationDetailComponent implements OnInit {
    entityWithServiceImplAndPagination: IEntityWithServiceImplAndPagination;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ entityWithServiceImplAndPagination }) => {
            this.entityWithServiceImplAndPagination = entityWithServiceImplAndPagination;
        });
    }

    previousState() {
        window.history.back();
    }
}
