/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT, DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { FieldTestPaginationEntityService } from 'app/entities/field-test-pagination-entity/field-test-pagination-entity.service';
import {
    IFieldTestPaginationEntity,
    FieldTestPaginationEntity,
    EnumFieldClass,
    EnumRequiredFieldClass
} from 'app/shared/model/field-test-pagination-entity.model';

describe('Service Tests', () => {
    describe('FieldTestPaginationEntity Service', () => {
        let injector: TestBed;
        let service: FieldTestPaginationEntityService;
        let httpMock: HttpTestingController;
        let elemDefault: IFieldTestPaginationEntity;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(FieldTestPaginationEntityService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new FieldTestPaginationEntity(
                0,
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                currentDate,
                currentDate,
                currentDate,
                currentDate,
                currentDate,
                currentDate,
                false,
                false,
                EnumFieldClass.ENUM_VALUE_1,
                EnumRequiredFieldClass.ENUM_VALUE_1,
                'image/png',
                'AAAAAAA',
                'image/png',
                'AAAAAAA',
                'image/png',
                'AAAAAAA',
                'image/png',
                'AAAAAAA',
                'image/png',
                'AAAAAAA',
                'image/png',
                'AAAAAAA',
                'image/png',
                'AAAAAAA',
                'image/png',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA'
            );
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign(
                    {
                        localDateAlice: currentDate.format(DATE_FORMAT),
                        localDateRequiredAlice: currentDate.format(DATE_FORMAT),
                        instantAlice: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredAlice: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeAlice: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredAlice: currentDate.format(DATE_TIME_FORMAT)
                    },
                    elemDefault
                );
                service
                    .find(123)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: elemDefault }));

                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should create a FieldTestPaginationEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        localDateAlice: currentDate.format(DATE_FORMAT),
                        localDateRequiredAlice: currentDate.format(DATE_FORMAT),
                        instantAlice: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredAlice: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeAlice: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredAlice: currentDate.format(DATE_TIME_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        localDateAlice: currentDate,
                        localDateRequiredAlice: currentDate,
                        instantAlice: currentDate,
                        instanteRequiredAlice: currentDate,
                        zonedDateTimeAlice: currentDate,
                        zonedDateTimeRequiredAlice: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new FieldTestPaginationEntity(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a FieldTestPaginationEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        stringAlice: 'BBBBBB',
                        stringRequiredAlice: 'BBBBBB',
                        stringMinlengthAlice: 'BBBBBB',
                        stringMaxlengthAlice: 'BBBBBB',
                        stringPatternAlice: 'BBBBBB',
                        integerAlice: 1,
                        integerRequiredAlice: 1,
                        integerMinAlice: 1,
                        integerMaxAlice: 1,
                        longAlice: 1,
                        longRequiredAlice: 1,
                        longMinAlice: 1,
                        longMaxAlice: 1,
                        floatAlice: 1,
                        floatRequiredAlice: 1,
                        floatMinAlice: 1,
                        floatMaxAlice: 1,
                        doubleRequiredAlice: 1,
                        doubleMinAlice: 1,
                        doubleMaxAlice: 1,
                        bigDecimalRequiredAlice: 1,
                        bigDecimalMinAlice: 1,
                        bigDecimalMaxAlice: 1,
                        localDateAlice: currentDate.format(DATE_FORMAT),
                        localDateRequiredAlice: currentDate.format(DATE_FORMAT),
                        instantAlice: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredAlice: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeAlice: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredAlice: currentDate.format(DATE_TIME_FORMAT),
                        booleanAlice: true,
                        booleanRequiredAlice: true,
                        enumAlice: 'BBBBBB',
                        enumRequiredAlice: 'BBBBBB',
                        byteImageAlice: 'BBBBBB',
                        byteImageRequiredAlice: 'BBBBBB',
                        byteImageMinbytesAlice: 'BBBBBB',
                        byteImageMaxbytesAlice: 'BBBBBB',
                        byteAnyAlice: 'BBBBBB',
                        byteAnyRequiredAlice: 'BBBBBB',
                        byteAnyMinbytesAlice: 'BBBBBB',
                        byteAnyMaxbytesAlice: 'BBBBBB',
                        byteTextAlice: 'BBBBBB',
                        byteTextRequiredAlice: 'BBBBBB',
                        byteTextMinbytesAlice: 'BBBBBB',
                        byteTextMaxbytesAlice: 'BBBBBB'
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        localDateAlice: currentDate,
                        localDateRequiredAlice: currentDate,
                        instantAlice: currentDate,
                        instanteRequiredAlice: currentDate,
                        zonedDateTimeAlice: currentDate,
                        zonedDateTimeRequiredAlice: currentDate
                    },
                    returnedFromService
                );
                service
                    .update(expected)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'PUT' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should return a list of FieldTestPaginationEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        stringAlice: 'BBBBBB',
                        stringRequiredAlice: 'BBBBBB',
                        stringMinlengthAlice: 'BBBBBB',
                        stringMaxlengthAlice: 'BBBBBB',
                        stringPatternAlice: 'BBBBBB',
                        integerAlice: 1,
                        integerRequiredAlice: 1,
                        integerMinAlice: 1,
                        integerMaxAlice: 1,
                        longAlice: 1,
                        longRequiredAlice: 1,
                        longMinAlice: 1,
                        longMaxAlice: 1,
                        floatAlice: 1,
                        floatRequiredAlice: 1,
                        floatMinAlice: 1,
                        floatMaxAlice: 1,
                        doubleRequiredAlice: 1,
                        doubleMinAlice: 1,
                        doubleMaxAlice: 1,
                        bigDecimalRequiredAlice: 1,
                        bigDecimalMinAlice: 1,
                        bigDecimalMaxAlice: 1,
                        localDateAlice: currentDate.format(DATE_FORMAT),
                        localDateRequiredAlice: currentDate.format(DATE_FORMAT),
                        instantAlice: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredAlice: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeAlice: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredAlice: currentDate.format(DATE_TIME_FORMAT),
                        booleanAlice: true,
                        booleanRequiredAlice: true,
                        enumAlice: 'BBBBBB',
                        enumRequiredAlice: 'BBBBBB',
                        byteImageAlice: 'BBBBBB',
                        byteImageRequiredAlice: 'BBBBBB',
                        byteImageMinbytesAlice: 'BBBBBB',
                        byteImageMaxbytesAlice: 'BBBBBB',
                        byteAnyAlice: 'BBBBBB',
                        byteAnyRequiredAlice: 'BBBBBB',
                        byteAnyMinbytesAlice: 'BBBBBB',
                        byteAnyMaxbytesAlice: 'BBBBBB',
                        byteTextAlice: 'BBBBBB',
                        byteTextRequiredAlice: 'BBBBBB',
                        byteTextMinbytesAlice: 'BBBBBB',
                        byteTextMaxbytesAlice: 'BBBBBB'
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        localDateAlice: currentDate,
                        localDateRequiredAlice: currentDate,
                        instantAlice: currentDate,
                        instanteRequiredAlice: currentDate,
                        zonedDateTimeAlice: currentDate,
                        zonedDateTimeRequiredAlice: currentDate
                    },
                    returnedFromService
                );
                service
                    .query(expected)
                    .pipe(
                        take(1),
                        map(resp => resp.body)
                    )
                    .subscribe(body => expect(body).toContainEqual(expected));
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify([returnedFromService]));
                httpMock.verify();
            });

            it('should delete a FieldTestPaginationEntity', async () => {
                const rxPromise = service.delete(123).subscribe(resp => expect(resp.ok));

                const req = httpMock.expectOne({ method: 'DELETE' });
                req.flush({ status: 200 });
            });
        });

        afterEach(() => {
            httpMock.verify();
        });
    });
});
