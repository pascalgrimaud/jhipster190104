import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    EntityWithServiceClassPaginationAndDTOComponent,
    EntityWithServiceClassPaginationAndDTODetailComponent,
    EntityWithServiceClassPaginationAndDTOUpdateComponent,
    EntityWithServiceClassPaginationAndDTODeletePopupComponent,
    EntityWithServiceClassPaginationAndDTODeleteDialogComponent,
    entityWithServiceClassPaginationAndDTORoute,
    entityWithServiceClassPaginationAndDTOPopupRoute
} from './';

const ENTITY_STATES = [...entityWithServiceClassPaginationAndDTORoute, ...entityWithServiceClassPaginationAndDTOPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EntityWithServiceClassPaginationAndDTOComponent,
        EntityWithServiceClassPaginationAndDTODetailComponent,
        EntityWithServiceClassPaginationAndDTOUpdateComponent,
        EntityWithServiceClassPaginationAndDTODeleteDialogComponent,
        EntityWithServiceClassPaginationAndDTODeletePopupComponent
    ],
    entryComponents: [
        EntityWithServiceClassPaginationAndDTOComponent,
        EntityWithServiceClassPaginationAndDTOUpdateComponent,
        EntityWithServiceClassPaginationAndDTODeleteDialogComponent,
        EntityWithServiceClassPaginationAndDTODeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityWithServiceClassPaginationAndDTOModule {}
