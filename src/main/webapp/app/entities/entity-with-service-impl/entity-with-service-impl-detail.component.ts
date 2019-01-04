import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEntityWithServiceImpl } from 'app/shared/model/entity-with-service-impl.model';

@Component({
    selector: 'my-prefix-entity-with-service-impl-detail',
    templateUrl: './entity-with-service-impl-detail.component.html'
})
export class EntityWithServiceImplDetailComponent implements OnInit {
    entityWithServiceImpl: IEntityWithServiceImpl;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ entityWithServiceImpl }) => {
            this.entityWithServiceImpl = entityWithServiceImpl;
        });
    }

    previousState() {
        window.history.back();
    }
}
