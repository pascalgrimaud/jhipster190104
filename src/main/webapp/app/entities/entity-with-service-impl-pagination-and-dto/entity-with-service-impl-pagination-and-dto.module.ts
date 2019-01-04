import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    EntityWithServiceImplPaginationAndDTOComponent,
    EntityWithServiceImplPaginationAndDTODetailComponent,
    EntityWithServiceImplPaginationAndDTOUpdateComponent,
    EntityWithServiceImplPaginationAndDTODeletePopupComponent,
    EntityWithServiceImplPaginationAndDTODeleteDialogComponent,
    entityWithServiceImplPaginationAndDTORoute,
    entityWithServiceImplPaginationAndDTOPopupRoute
} from './';

const ENTITY_STATES = [...entityWithServiceImplPaginationAndDTORoute, ...entityWithServiceImplPaginationAndDTOPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EntityWithServiceImplPaginationAndDTOComponent,
        EntityWithServiceImplPaginationAndDTODetailComponent,
        EntityWithServiceImplPaginationAndDTOUpdateComponent,
        EntityWithServiceImplPaginationAndDTODeleteDialogComponent,
        EntityWithServiceImplPaginationAndDTODeletePopupComponent
    ],
    entryComponents: [
        EntityWithServiceImplPaginationAndDTOComponent,
        EntityWithServiceImplPaginationAndDTOUpdateComponent,
        EntityWithServiceImplPaginationAndDTODeleteDialogComponent,
        EntityWithServiceImplPaginationAndDTODeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityWithServiceImplPaginationAndDTOModule {}
