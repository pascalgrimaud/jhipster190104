import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ILabel } from 'app/shared/model/test-root/label.model';

@Component({
    selector: 'my-prefix-label-detail',
    templateUrl: './label-detail.component.html'
})
export class LabelDetailComponent implements OnInit {
    label: ILabel;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ label }) => {
            this.label = label;
        });
    }

    previousState() {
        window.history.back();
    }
}
