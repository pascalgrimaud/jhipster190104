import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IOperation } from 'app/shared/model/test-root/operation.model';

@Component({
    selector: 'my-prefix-operation-detail',
    templateUrl: './operation-detail.component.html'
})
export class OperationDetailComponent implements OnInit {
    operation: IOperation;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ operation }) => {
            this.operation = operation;
        });
    }

    previousState() {
        window.history.back();
    }
}
