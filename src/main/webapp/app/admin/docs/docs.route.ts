import { Route } from '@angular/router';

import { MyPrefixDocsComponent } from './docs.component';

export const docsRoute: Route = {
    path: 'docs',
    component: MyPrefixDocsComponent,
    data: {
        pageTitle: 'global.menu.admin.apidocs'
    }
};
