import { Route } from '@angular/router';

import { MyPrefixMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
    path: 'my-prefix-metrics',
    component: MyPrefixMetricsMonitoringComponent,
    data: {
        pageTitle: 'metrics.title'
    }
};
