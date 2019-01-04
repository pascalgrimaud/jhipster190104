import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import { JhipsterSampleApplicationAdminModule } from 'app/admin/admin.module';
import {
    BankAccountMySuffixComponent,
    BankAccountMySuffixDetailComponent,
    BankAccountMySuffixUpdateComponent,
    BankAccountMySuffixDeletePopupComponent,
    BankAccountMySuffixDeleteDialogComponent,
    bankAccountRoute,
    bankAccountPopupRoute
} from './';

const ENTITY_STATES = [...bankAccountRoute, ...bankAccountPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, JhipsterSampleApplicationAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        BankAccountMySuffixComponent,
        BankAccountMySuffixDetailComponent,
        BankAccountMySuffixUpdateComponent,
        BankAccountMySuffixDeleteDialogComponent,
        BankAccountMySuffixDeletePopupComponent
    ],
    entryComponents: [
        BankAccountMySuffixComponent,
        BankAccountMySuffixUpdateComponent,
        BankAccountMySuffixDeleteDialogComponent,
        BankAccountMySuffixDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationBankAccountMySuffixModule {}
