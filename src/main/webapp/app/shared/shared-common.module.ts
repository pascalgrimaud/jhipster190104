import { NgModule } from '@angular/core';

import {
    JhipsterSampleApplicationSharedLibsModule,
    FindLanguageFromKeyPipe,
    MyPrefixAlertComponent,
    MyPrefixAlertErrorComponent
} from './';

@NgModule({
    imports: [JhipsterSampleApplicationSharedLibsModule],
    declarations: [FindLanguageFromKeyPipe, MyPrefixAlertComponent, MyPrefixAlertErrorComponent],
    exports: [JhipsterSampleApplicationSharedLibsModule, FindLanguageFromKeyPipe, MyPrefixAlertComponent, MyPrefixAlertErrorComponent]
})
export class JhipsterSampleApplicationSharedCommonModule {}
