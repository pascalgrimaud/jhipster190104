import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    FieldTestServiceImplEntityComponent,
    FieldTestServiceImplEntityDetailComponent,
    FieldTestServiceImplEntityUpdateComponent,
    FieldTestServiceImplEntityDeletePopupComponent,
    FieldTestServiceImplEntityDeleteDialogComponent,
    fieldTestServiceImplEntityRoute,
    fieldTestServiceImplEntityPopupRoute
} from './';

const ENTITY_STATES = [...fieldTestServiceImplEntityRoute, ...fieldTestServiceImplEntityPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        FieldTestServiceImplEntityComponent,
        FieldTestServiceImplEntityDetailComponent,
        FieldTestServiceImplEntityUpdateComponent,
        FieldTestServiceImplEntityDeleteDialogComponent,
        FieldTestServiceImplEntityDeletePopupComponent
    ],
    entryComponents: [
        FieldTestServiceImplEntityComponent,
        FieldTestServiceImplEntityUpdateComponent,
        FieldTestServiceImplEntityDeleteDialogComponent,
        FieldTestServiceImplEntityDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationFieldTestServiceImplEntityModule {}
