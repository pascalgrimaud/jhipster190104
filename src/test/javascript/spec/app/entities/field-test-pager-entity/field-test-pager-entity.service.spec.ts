/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT, DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { FieldTestPagerEntityService } from 'app/entities/field-test-pager-entity/field-test-pager-entity.service';
import {
    IFieldTestPagerEntity,
    FieldTestPagerEntity,
    EnumFieldClass,
    EnumRequiredFieldClass
} from 'app/shared/model/field-test-pager-entity.model';

describe('Service Tests', () => {
    describe('FieldTestPagerEntity Service', () => {
        let injector: TestBed;
        let service: FieldTestPagerEntityService;
        let httpMock: HttpTestingController;
        let elemDefault: IFieldTestPagerEntity;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(FieldTestPagerEntityService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new FieldTestPagerEntity(
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
                        localDateJade: currentDate.format(DATE_FORMAT),
                        localDateRequiredJade: currentDate.format(DATE_FORMAT),
                        instantJade: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredJade: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeJade: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredJade: currentDate.format(DATE_TIME_FORMAT)
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

            it('should create a FieldTestPagerEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        localDateJade: currentDate.format(DATE_FORMAT),
                        localDateRequiredJade: currentDate.format(DATE_FORMAT),
                        instantJade: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredJade: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeJade: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredJade: currentDate.format(DATE_TIME_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        localDateJade: currentDate,
                        localDateRequiredJade: currentDate,
                        instantJade: currentDate,
                        instanteRequiredJade: currentDate,
                        zonedDateTimeJade: currentDate,
                        zonedDateTimeRequiredJade: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new FieldTestPagerEntity(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a FieldTestPagerEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        stringJade: 'BBBBBB',
                        stringRequiredJade: 'BBBBBB',
                        stringMinlengthJade: 'BBBBBB',
                        stringMaxlengthJade: 'BBBBBB',
                        stringPatternJade: 'BBBBBB',
                        integerJade: 1,
                        integerRequiredJade: 1,
                        integerMinJade: 1,
                        integerMaxJade: 1,
                        longJade: 1,
                        longRequiredJade: 1,
                        longMinJade: 1,
                        longMaxJade: 1,
                        floatJade: 1,
                        floatRequiredJade: 1,
                        floatMinJade: 1,
                        floatMaxJade: 1,
                        doubleRequiredJade: 1,
                        doubleMinJade: 1,
                        doubleMaxJade: 1,
                        bigDecimalRequiredJade: 1,
                        bigDecimalMinJade: 1,
                        bigDecimalMaxJade: 1,
                        localDateJade: currentDate.format(DATE_FORMAT),
                        localDateRequiredJade: currentDate.format(DATE_FORMAT),
                        instantJade: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredJade: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeJade: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredJade: currentDate.format(DATE_TIME_FORMAT),
                        booleanJade: true,
                        booleanRequiredJade: true,
                        enumJade: 'BBBBBB',
                        enumRequiredJade: 'BBBBBB',
                        byteImageJade: 'BBBBBB',
                        byteImageRequiredJade: 'BBBBBB',
                        byteImageMinbytesJade: 'BBBBBB',
                        byteImageMaxbytesJade: 'BBBBBB',
                        byteAnyJade: 'BBBBBB',
                        byteAnyRequiredJade: 'BBBBBB',
                        byteAnyMinbytesJade: 'BBBBBB',
                        byteAnyMaxbytesJade: 'BBBBBB',
                        byteTextJade: 'BBBBBB',
                        byteTextRequiredJade: 'BBBBBB',
                        byteTextMinbytesJade: 'BBBBBB',
                        byteTextMaxbytesJade: 'BBBBBB'
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        localDateJade: currentDate,
                        localDateRequiredJade: currentDate,
                        instantJade: currentDate,
                        instanteRequiredJade: currentDate,
                        zonedDateTimeJade: currentDate,
                        zonedDateTimeRequiredJade: currentDate
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

            it('should return a list of FieldTestPagerEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        stringJade: 'BBBBBB',
                        stringRequiredJade: 'BBBBBB',
                        stringMinlengthJade: 'BBBBBB',
                        stringMaxlengthJade: 'BBBBBB',
                        stringPatternJade: 'BBBBBB',
                        integerJade: 1,
                        integerRequiredJade: 1,
                        integerMinJade: 1,
                        integerMaxJade: 1,
                        longJade: 1,
                        longRequiredJade: 1,
                        longMinJade: 1,
                        longMaxJade: 1,
                        floatJade: 1,
                        floatRequiredJade: 1,
                        floatMinJade: 1,
                        floatMaxJade: 1,
                        doubleRequiredJade: 1,
                        doubleMinJade: 1,
                        doubleMaxJade: 1,
                        bigDecimalRequiredJade: 1,
                        bigDecimalMinJade: 1,
                        bigDecimalMaxJade: 1,
                        localDateJade: currentDate.format(DATE_FORMAT),
                        localDateRequiredJade: currentDate.format(DATE_FORMAT),
                        instantJade: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredJade: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeJade: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredJade: currentDate.format(DATE_TIME_FORMAT),
                        booleanJade: true,
                        booleanRequiredJade: true,
                        enumJade: 'BBBBBB',
                        enumRequiredJade: 'BBBBBB',
                        byteImageJade: 'BBBBBB',
                        byteImageRequiredJade: 'BBBBBB',
                        byteImageMinbytesJade: 'BBBBBB',
                        byteImageMaxbytesJade: 'BBBBBB',
                        byteAnyJade: 'BBBBBB',
                        byteAnyRequiredJade: 'BBBBBB',
                        byteAnyMinbytesJade: 'BBBBBB',
                        byteAnyMaxbytesJade: 'BBBBBB',
                        byteTextJade: 'BBBBBB',
                        byteTextRequiredJade: 'BBBBBB',
                        byteTextMinbytesJade: 'BBBBBB',
                        byteTextMaxbytesJade: 'BBBBBB'
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        localDateJade: currentDate,
                        localDateRequiredJade: currentDate,
                        instantJade: currentDate,
                        instanteRequiredJade: currentDate,
                        zonedDateTimeJade: currentDate,
                        zonedDateTimeRequiredJade: currentDate
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

            it('should delete a FieldTestPagerEntity', async () => {
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
