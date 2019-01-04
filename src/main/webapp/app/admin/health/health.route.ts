import { Route } from '@angular/router';

import { MyPrefixHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
    path: 'my-prefix-health',
    component: MyPrefixHealthCheckComponent,
    data: {
        pageTitle: 'health.title'
    }
};
