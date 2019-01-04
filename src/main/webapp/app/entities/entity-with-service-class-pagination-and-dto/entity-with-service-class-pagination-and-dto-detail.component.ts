import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEntityWithServiceClassPaginationAndDTO } from 'app/shared/model/entity-with-service-class-pagination-and-dto.model';

@Component({
    selector: 'my-prefix-entity-with-service-class-pagination-and-dto-detail',
    templateUrl: './entity-with-service-class-pagination-and-dto-detail.component.html'
})
export class EntityWithServiceClassPaginationAndDTODetailComponent implements OnInit {
    entityWithServiceClassPaginationAndDTO: IEntityWithServiceClassPaginationAndDTO;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ entityWithServiceClassPaginationAndDTO }) => {
            this.entityWithServiceClassPaginationAndDTO = entityWithServiceClassPaginationAndDTO;
        });
    }

    previousState() {
        window.history.back();
    }
}
