import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    EntityWithServiceClassComponent,
    EntityWithServiceClassDetailComponent,
    EntityWithServiceClassUpdateComponent,
    EntityWithServiceClassDeletePopupComponent,
    EntityWithServiceClassDeleteDialogComponent,
    entityWithServiceClassRoute,
    entityWithServiceClassPopupRoute
} from './';

const ENTITY_STATES = [...entityWithServiceClassRoute, ...entityWithServiceClassPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EntityWithServiceClassComponent,
        EntityWithServiceClassDetailComponent,
        EntityWithServiceClassUpdateComponent,
        EntityWithServiceClassDeleteDialogComponent,
        EntityWithServiceClassDeletePopupComponent
    ],
    entryComponents: [
        EntityWithServiceClassComponent,
        EntityWithServiceClassUpdateComponent,
        EntityWithServiceClassDeleteDialogComponent,
        EntityWithServiceClassDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityWithServiceClassModule {}
