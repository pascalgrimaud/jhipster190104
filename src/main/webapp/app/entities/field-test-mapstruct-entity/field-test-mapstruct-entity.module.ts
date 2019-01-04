import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    FieldTestMapstructEntityComponent,
    FieldTestMapstructEntityDetailComponent,
    FieldTestMapstructEntityUpdateComponent,
    FieldTestMapstructEntityDeletePopupComponent,
    FieldTestMapstructEntityDeleteDialogComponent,
    fieldTestMapstructEntityRoute,
    fieldTestMapstructEntityPopupRoute
} from './';

const ENTITY_STATES = [...fieldTestMapstructEntityRoute, ...fieldTestMapstructEntityPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        FieldTestMapstructEntityComponent,
        FieldTestMapstructEntityDetailComponent,
        FieldTestMapstructEntityUpdateComponent,
        FieldTestMapstructEntityDeleteDialogComponent,
        FieldTestMapstructEntityDeletePopupComponent
    ],
    entryComponents: [
        FieldTestMapstructEntityComponent,
        FieldTestMapstructEntityUpdateComponent,
        FieldTestMapstructEntityDeleteDialogComponent,
        FieldTestMapstructEntityDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationFieldTestMapstructEntityModule {}
