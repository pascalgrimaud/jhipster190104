import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MyPrefixMetricsService } from './metrics.service';

@Component({
    selector: 'my-prefix-metrics',
    templateUrl: './metrics.component.html'
})
export class MyPrefixMetricsMonitoringComponent implements OnInit {
    metrics: any = {};
    threadData: any = {};
    updatingMetrics = true;
    JCACHE_KEY: string;

    constructor(private modalService: NgbModal, private metricsService: MyPrefixMetricsService) {
        this.JCACHE_KEY = 'jcache.statistics';
    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.updatingMetrics = true;
        this.metricsService.getMetrics().subscribe(metrics => {
            this.metrics = metrics;
            this.metricsService.threadDump().subscribe(data => {
                this.threadData = data.threads;
                this.updatingMetrics = false;
            });
        });
    }
}
