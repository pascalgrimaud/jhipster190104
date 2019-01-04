import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    FieldTestServiceClassEntityComponent,
    FieldTestServiceClassEntityDetailComponent,
    FieldTestServiceClassEntityUpdateComponent,
    FieldTestServiceClassEntityDeletePopupComponent,
    FieldTestServiceClassEntityDeleteDialogComponent,
    fieldTestServiceClassEntityRoute,
    fieldTestServiceClassEntityPopupRoute
} from './';

const ENTITY_STATES = [...fieldTestServiceClassEntityRoute, ...fieldTestServiceClassEntityPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        FieldTestServiceClassEntityComponent,
        FieldTestServiceClassEntityDetailComponent,
        FieldTestServiceClassEntityUpdateComponent,
        FieldTestServiceClassEntityDeleteDialogComponent,
        FieldTestServiceClassEntityDeletePopupComponent
    ],
    entryComponents: [
        FieldTestServiceClassEntityComponent,
        FieldTestServiceClassEntityUpdateComponent,
        FieldTestServiceClassEntityDeleteDialogComponent,
        FieldTestServiceClassEntityDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationFieldTestServiceClassEntityModule {}
