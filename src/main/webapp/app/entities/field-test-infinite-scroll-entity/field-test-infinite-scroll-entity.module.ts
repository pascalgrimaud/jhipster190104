import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    FieldTestInfiniteScrollEntityComponent,
    FieldTestInfiniteScrollEntityDetailComponent,
    FieldTestInfiniteScrollEntityUpdateComponent,
    FieldTestInfiniteScrollEntityDeletePopupComponent,
    FieldTestInfiniteScrollEntityDeleteDialogComponent,
    fieldTestInfiniteScrollEntityRoute,
    fieldTestInfiniteScrollEntityPopupRoute
} from './';

const ENTITY_STATES = [...fieldTestInfiniteScrollEntityRoute, ...fieldTestInfiniteScrollEntityPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        FieldTestInfiniteScrollEntityComponent,
        FieldTestInfiniteScrollEntityDetailComponent,
        FieldTestInfiniteScrollEntityUpdateComponent,
        FieldTestInfiniteScrollEntityDeleteDialogComponent,
        FieldTestInfiniteScrollEntityDeletePopupComponent
    ],
    entryComponents: [
        FieldTestInfiniteScrollEntityComponent,
        FieldTestInfiniteScrollEntityUpdateComponent,
        FieldTestInfiniteScrollEntityDeleteDialogComponent,
        FieldTestInfiniteScrollEntityDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationFieldTestInfiniteScrollEntityModule {}
