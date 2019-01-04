import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    EntityWithServiceImplAndPaginationComponent,
    EntityWithServiceImplAndPaginationDetailComponent,
    EntityWithServiceImplAndPaginationUpdateComponent,
    EntityWithServiceImplAndPaginationDeletePopupComponent,
    EntityWithServiceImplAndPaginationDeleteDialogComponent,
    entityWithServiceImplAndPaginationRoute,
    entityWithServiceImplAndPaginationPopupRoute
} from './';

const ENTITY_STATES = [...entityWithServiceImplAndPaginationRoute, ...entityWithServiceImplAndPaginationPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EntityWithServiceImplAndPaginationComponent,
        EntityWithServiceImplAndPaginationDetailComponent,
        EntityWithServiceImplAndPaginationUpdateComponent,
        EntityWithServiceImplAndPaginationDeleteDialogComponent,
        EntityWithServiceImplAndPaginationDeletePopupComponent
    ],
    entryComponents: [
        EntityWithServiceImplAndPaginationComponent,
        EntityWithServiceImplAndPaginationUpdateComponent,
        EntityWithServiceImplAndPaginationDeleteDialogComponent,
        EntityWithServiceImplAndPaginationDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityWithServiceImplAndPaginationModule {}
