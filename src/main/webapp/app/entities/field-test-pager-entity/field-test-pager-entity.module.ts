import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    FieldTestPagerEntityComponent,
    FieldTestPagerEntityDetailComponent,
    FieldTestPagerEntityUpdateComponent,
    FieldTestPagerEntityDeletePopupComponent,
    FieldTestPagerEntityDeleteDialogComponent,
    fieldTestPagerEntityRoute,
    fieldTestPagerEntityPopupRoute
} from './';

const ENTITY_STATES = [...fieldTestPagerEntityRoute, ...fieldTestPagerEntityPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        FieldTestPagerEntityComponent,
        FieldTestPagerEntityDetailComponent,
        FieldTestPagerEntityUpdateComponent,
        FieldTestPagerEntityDeleteDialogComponent,
        FieldTestPagerEntityDeletePopupComponent
    ],
    entryComponents: [
        FieldTestPagerEntityComponent,
        FieldTestPagerEntityUpdateComponent,
        FieldTestPagerEntityDeleteDialogComponent,
        FieldTestPagerEntityDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationFieldTestPagerEntityModule {}
