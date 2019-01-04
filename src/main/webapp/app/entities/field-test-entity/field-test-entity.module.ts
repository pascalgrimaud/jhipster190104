import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    FieldTestEntityComponent,
    FieldTestEntityDetailComponent,
    FieldTestEntityUpdateComponent,
    FieldTestEntityDeletePopupComponent,
    FieldTestEntityDeleteDialogComponent,
    fieldTestEntityRoute,
    fieldTestEntityPopupRoute
} from './';

const ENTITY_STATES = [...fieldTestEntityRoute, ...fieldTestEntityPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        FieldTestEntityComponent,
        FieldTestEntityDetailComponent,
        FieldTestEntityUpdateComponent,
        FieldTestEntityDeleteDialogComponent,
        FieldTestEntityDeletePopupComponent
    ],
    entryComponents: [
        FieldTestEntityComponent,
        FieldTestEntityUpdateComponent,
        FieldTestEntityDeleteDialogComponent,
        FieldTestEntityDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationFieldTestEntityModule {}
