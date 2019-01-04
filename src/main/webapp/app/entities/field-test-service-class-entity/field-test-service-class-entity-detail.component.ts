import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { IFieldTestServiceClassEntity } from 'app/shared/model/field-test-service-class-entity.model';

@Component({
    selector: 'my-prefix-field-test-service-class-entity-detail',
    templateUrl: './field-test-service-class-entity-detail.component.html'
})
export class FieldTestServiceClassEntityDetailComponent implements OnInit {
    fieldTestServiceClassEntity: IFieldTestServiceClassEntity;

    constructor(protected dataUtils: JhiDataUtils, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ fieldTestServiceClassEntity }) => {
            this.fieldTestServiceClassEntity = fieldTestServiceClassEntity;
        });
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    previousState() {
        window.history.back();
    }
}
