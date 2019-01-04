import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    EntityWithServiceImplAndDTOComponent,
    EntityWithServiceImplAndDTODetailComponent,
    EntityWithServiceImplAndDTOUpdateComponent,
    EntityWithServiceImplAndDTODeletePopupComponent,
    EntityWithServiceImplAndDTODeleteDialogComponent,
    entityWithServiceImplAndDTORoute,
    entityWithServiceImplAndDTOPopupRoute
} from './';

const ENTITY_STATES = [...entityWithServiceImplAndDTORoute, ...entityWithServiceImplAndDTOPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EntityWithServiceImplAndDTOComponent,
        EntityWithServiceImplAndDTODetailComponent,
        EntityWithServiceImplAndDTOUpdateComponent,
        EntityWithServiceImplAndDTODeleteDialogComponent,
        EntityWithServiceImplAndDTODeletePopupComponent
    ],
    entryComponents: [
        EntityWithServiceImplAndDTOComponent,
        EntityWithServiceImplAndDTOUpdateComponent,
        EntityWithServiceImplAndDTODeleteDialogComponent,
        EntityWithServiceImplAndDTODeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityWithServiceImplAndDTOModule {}
