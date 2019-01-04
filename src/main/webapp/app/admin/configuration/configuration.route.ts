import { Route } from '@angular/router';

import { MyPrefixConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'my-prefix-configuration',
    component: MyPrefixConfigurationComponent,
    data: {
        pageTitle: 'configuration.title'
    }
};
