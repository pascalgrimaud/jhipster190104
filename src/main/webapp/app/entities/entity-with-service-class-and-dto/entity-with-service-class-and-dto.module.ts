import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    EntityWithServiceClassAndDTOComponent,
    EntityWithServiceClassAndDTODetailComponent,
    EntityWithServiceClassAndDTOUpdateComponent,
    EntityWithServiceClassAndDTODeletePopupComponent,
    EntityWithServiceClassAndDTODeleteDialogComponent,
    entityWithServiceClassAndDTORoute,
    entityWithServiceClassAndDTOPopupRoute
} from './';

const ENTITY_STATES = [...entityWithServiceClassAndDTORoute, ...entityWithServiceClassAndDTOPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EntityWithServiceClassAndDTOComponent,
        EntityWithServiceClassAndDTODetailComponent,
        EntityWithServiceClassAndDTOUpdateComponent,
        EntityWithServiceClassAndDTODeleteDialogComponent,
        EntityWithServiceClassAndDTODeletePopupComponent
    ],
    entryComponents: [
        EntityWithServiceClassAndDTOComponent,
        EntityWithServiceClassAndDTOUpdateComponent,
        EntityWithServiceClassAndDTODeleteDialogComponent,
        EntityWithServiceClassAndDTODeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityWithServiceClassAndDTOModule {}
