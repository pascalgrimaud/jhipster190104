import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleApplicationBankAccountMySuffixModule } from './test-root/bank-account-my-suffix/bank-account-my-suffix.module';
import { JhipsterSampleApplicationLabelModule } from './test-root/label/label.module';
import { JhipsterSampleApplicationOperationModule } from './test-root/operation/operation.module';
import { JhipsterSampleApplicationFieldTestEntityModule } from './field-test-entity/field-test-entity.module';
import { JhipsterSampleApplicationFieldTestPagerEntityModule } from './field-test-pager-entity/field-test-pager-entity.module';
import { JhipsterSampleApplicationFieldTestMapstructEntityModule } from './field-test-mapstruct-entity/field-test-mapstruct-entity.module';
import { JhipsterSampleApplicationFieldTestServiceImplEntityModule } from './field-test-service-impl-entity/field-test-service-impl-entity.module';
import { JhipsterSampleApplicationFieldTestInfiniteScrollEntityModule } from './field-test-infinite-scroll-entity/field-test-infinite-scroll-entity.module';
import { JhipsterSampleApplicationFieldTestServiceClassEntityModule } from './field-test-service-class-entity/field-test-service-class-entity.module';
import { JhipsterSampleApplicationFieldTestPaginationEntityModule } from './field-test-pagination-entity/field-test-pagination-entity.module';
import { JhipsterSampleApplicationEntityWithDTOModule } from './entity-with-dto/entity-with-dto.module';
import { JhipsterSampleApplicationEntityWithServiceClassModule } from './entity-with-service-class/entity-with-service-class.module';
import { JhipsterSampleApplicationEntityWithServiceImplModule } from './entity-with-service-impl/entity-with-service-impl.module';
import { JhipsterSampleApplicationEntityWithPaginationModule } from './entity-with-pagination/entity-with-pagination.module';
import { JhipsterSampleApplicationEntityWithServiceClassAndPaginationModule } from './entity-with-service-class-and-pagination/entity-with-service-class-and-pagination.module';
import { JhipsterSampleApplicationEntityWithServiceImplAndPaginationModule } from './entity-with-service-impl-and-pagination/entity-with-service-impl-and-pagination.module';
import { JhipsterSampleApplicationEntityWithServiceClassAndDTOModule } from './entity-with-service-class-and-dto/entity-with-service-class-and-dto.module';
import { JhipsterSampleApplicationEntityWithServiceImplAndDTOModule } from './entity-with-service-impl-and-dto/entity-with-service-impl-and-dto.module';
import { JhipsterSampleApplicationEntityWithPaginationAndDTOModule } from './entity-with-pagination-and-dto/entity-with-pagination-and-dto.module';
// prettier-ignore
import {
    JhipsterSampleApplicationEntityWithServiceClassPaginationAndDTOModule
} from './entity-with-service-class-pagination-and-dto/entity-with-service-class-pagination-and-dto.module';
// prettier-ignore
import {
    JhipsterSampleApplicationEntityWithServiceImplPaginationAndDTOModule
} from './entity-with-service-impl-pagination-and-dto/entity-with-service-impl-pagination-and-dto.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterSampleApplicationBankAccountMySuffixModule,
        JhipsterSampleApplicationLabelModule,
        JhipsterSampleApplicationOperationModule,
        JhipsterSampleApplicationFieldTestEntityModule,
        JhipsterSampleApplicationFieldTestPagerEntityModule,
        JhipsterSampleApplicationFieldTestMapstructEntityModule,
        JhipsterSampleApplicationFieldTestServiceImplEntityModule,
        JhipsterSampleApplicationFieldTestInfiniteScrollEntityModule,
        JhipsterSampleApplicationFieldTestServiceClassEntityModule,
        JhipsterSampleApplicationFieldTestPaginationEntityModule,
        JhipsterSampleApplicationEntityWithDTOModule,
        JhipsterSampleApplicationEntityWithServiceClassModule,
        JhipsterSampleApplicationEntityWithServiceImplModule,
        JhipsterSampleApplicationEntityWithPaginationModule,
        JhipsterSampleApplicationEntityWithServiceClassAndPaginationModule,
        JhipsterSampleApplicationEntityWithServiceImplAndPaginationModule,
        JhipsterSampleApplicationEntityWithServiceClassAndDTOModule,
        JhipsterSampleApplicationEntityWithServiceImplAndDTOModule,
        JhipsterSampleApplicationEntityWithPaginationAndDTOModule,
        JhipsterSampleApplicationEntityWithServiceClassPaginationAndDTOModule,
        JhipsterSampleApplicationEntityWithServiceImplPaginationAndDTOModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityModule {}
