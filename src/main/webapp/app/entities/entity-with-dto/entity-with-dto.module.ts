import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    EntityWithDTOComponent,
    EntityWithDTODetailComponent,
    EntityWithDTOUpdateComponent,
    EntityWithDTODeletePopupComponent,
    EntityWithDTODeleteDialogComponent,
    entityWithDTORoute,
    entityWithDTOPopupRoute
} from './';

const ENTITY_STATES = [...entityWithDTORoute, ...entityWithDTOPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EntityWithDTOComponent,
        EntityWithDTODetailComponent,
        EntityWithDTOUpdateComponent,
        EntityWithDTODeleteDialogComponent,
        EntityWithDTODeletePopupComponent
    ],
    entryComponents: [
        EntityWithDTOComponent,
        EntityWithDTOUpdateComponent,
        EntityWithDTODeleteDialogComponent,
        EntityWithDTODeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityWithDTOModule {}
