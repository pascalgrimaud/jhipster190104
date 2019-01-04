import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEntityWithPaginationAndDTO } from 'app/shared/model/entity-with-pagination-and-dto.model';

@Component({
    selector: 'my-prefix-entity-with-pagination-and-dto-detail',
    templateUrl: './entity-with-pagination-and-dto-detail.component.html'
})
export class EntityWithPaginationAndDTODetailComponent implements OnInit {
    entityWithPaginationAndDTO: IEntityWithPaginationAndDTO;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ entityWithPaginationAndDTO }) => {
            this.entityWithPaginationAndDTO = entityWithPaginationAndDTO;
        });
    }

    previousState() {
        window.history.back();
    }
}
