import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import {
    JhipsterSampleApplicationSharedLibsModule,
    JhipsterSampleApplicationSharedCommonModule,
    MyPrefixLoginModalComponent,
    HasAnyAuthorityDirective
} from './';

@NgModule({
    imports: [JhipsterSampleApplicationSharedLibsModule, JhipsterSampleApplicationSharedCommonModule],
    declarations: [MyPrefixLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [MyPrefixLoginModalComponent],
    exports: [JhipsterSampleApplicationSharedCommonModule, MyPrefixLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationSharedModule {
    static forRoot() {
        return {
            ngModule: JhipsterSampleApplicationSharedModule
        };
    }
}
