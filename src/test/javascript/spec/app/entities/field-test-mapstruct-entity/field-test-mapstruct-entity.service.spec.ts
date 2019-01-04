/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT, DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { FieldTestMapstructEntityService } from 'app/entities/field-test-mapstruct-entity/field-test-mapstruct-entity.service';
import {
    IFieldTestMapstructEntity,
    FieldTestMapstructEntity,
    EnumFieldClass,
    EnumRequiredFieldClass
} from 'app/shared/model/field-test-mapstruct-entity.model';

describe('Service Tests', () => {
    describe('FieldTestMapstructEntity Service', () => {
        let injector: TestBed;
        let service: FieldTestMapstructEntityService;
        let httpMock: HttpTestingController;
        let elemDefault: IFieldTestMapstructEntity;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(FieldTestMapstructEntityService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new FieldTestMapstructEntity(
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
                        localDateEva: currentDate.format(DATE_FORMAT),
                        localDateRequiredEva: currentDate.format(DATE_FORMAT),
                        instantEva: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredEva: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeEva: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredEva: currentDate.format(DATE_TIME_FORMAT)
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

            it('should create a FieldTestMapstructEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        localDateEva: currentDate.format(DATE_FORMAT),
                        localDateRequiredEva: currentDate.format(DATE_FORMAT),
                        instantEva: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredEva: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeEva: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredEva: currentDate.format(DATE_TIME_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        localDateEva: currentDate,
                        localDateRequiredEva: currentDate,
                        instantEva: currentDate,
                        instanteRequiredEva: currentDate,
                        zonedDateTimeEva: currentDate,
                        zonedDateTimeRequiredEva: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new FieldTestMapstructEntity(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a FieldTestMapstructEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        stringEva: 'BBBBBB',
                        stringRequiredEva: 'BBBBBB',
                        stringMinlengthEva: 'BBBBBB',
                        stringMaxlengthEva: 'BBBBBB',
                        stringPatternEva: 'BBBBBB',
                        integerEva: 1,
                        integerRequiredEva: 1,
                        integerMinEva: 1,
                        integerMaxEva: 1,
                        longEva: 1,
                        longRequiredEva: 1,
                        longMinEva: 1,
                        longMaxEva: 1,
                        floatEva: 1,
                        floatRequiredEva: 1,
                        floatMinEva: 1,
                        floatMaxEva: 1,
                        doubleRequiredEva: 1,
                        doubleMinEva: 1,
                        doubleMaxEva: 1,
                        bigDecimalRequiredEva: 1,
                        bigDecimalMinEva: 1,
                        bigDecimalMaxEva: 1,
                        localDateEva: currentDate.format(DATE_FORMAT),
                        localDateRequiredEva: currentDate.format(DATE_FORMAT),
                        instantEva: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredEva: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeEva: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredEva: currentDate.format(DATE_TIME_FORMAT),
                        booleanEva: true,
                        booleanRequiredEva: true,
                        enumEva: 'BBBBBB',
                        enumRequiredEva: 'BBBBBB',
                        byteImageEva: 'BBBBBB',
                        byteImageRequiredEva: 'BBBBBB',
                        byteImageMinbytesEva: 'BBBBBB',
                        byteImageMaxbytesEva: 'BBBBBB',
                        byteAnyEva: 'BBBBBB',
                        byteAnyRequiredEva: 'BBBBBB',
                        byteAnyMinbytesEva: 'BBBBBB',
                        byteAnyMaxbytesEva: 'BBBBBB',
                        byteTextEva: 'BBBBBB',
                        byteTextRequiredEva: 'BBBBBB',
                        byteTextMinbytesEva: 'BBBBBB',
                        byteTextMaxbytesEva: 'BBBBBB'
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        localDateEva: currentDate,
                        localDateRequiredEva: currentDate,
                        instantEva: currentDate,
                        instanteRequiredEva: currentDate,
                        zonedDateTimeEva: currentDate,
                        zonedDateTimeRequiredEva: currentDate
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

            it('should return a list of FieldTestMapstructEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        stringEva: 'BBBBBB',
                        stringRequiredEva: 'BBBBBB',
                        stringMinlengthEva: 'BBBBBB',
                        stringMaxlengthEva: 'BBBBBB',
                        stringPatternEva: 'BBBBBB',
                        integerEva: 1,
                        integerRequiredEva: 1,
                        integerMinEva: 1,
                        integerMaxEva: 1,
                        longEva: 1,
                        longRequiredEva: 1,
                        longMinEva: 1,
                        longMaxEva: 1,
                        floatEva: 1,
                        floatRequiredEva: 1,
                        floatMinEva: 1,
                        floatMaxEva: 1,
                        doubleRequiredEva: 1,
                        doubleMinEva: 1,
                        doubleMaxEva: 1,
                        bigDecimalRequiredEva: 1,
                        bigDecimalMinEva: 1,
                        bigDecimalMaxEva: 1,
                        localDateEva: currentDate.format(DATE_FORMAT),
                        localDateRequiredEva: currentDate.format(DATE_FORMAT),
                        instantEva: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredEva: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeEva: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredEva: currentDate.format(DATE_TIME_FORMAT),
                        booleanEva: true,
                        booleanRequiredEva: true,
                        enumEva: 'BBBBBB',
                        enumRequiredEva: 'BBBBBB',
                        byteImageEva: 'BBBBBB',
                        byteImageRequiredEva: 'BBBBBB',
                        byteImageMinbytesEva: 'BBBBBB',
                        byteImageMaxbytesEva: 'BBBBBB',
                        byteAnyEva: 'BBBBBB',
                        byteAnyRequiredEva: 'BBBBBB',
                        byteAnyMinbytesEva: 'BBBBBB',
                        byteAnyMaxbytesEva: 'BBBBBB',
                        byteTextEva: 'BBBBBB',
                        byteTextRequiredEva: 'BBBBBB',
                        byteTextMinbytesEva: 'BBBBBB',
                        byteTextMaxbytesEva: 'BBBBBB'
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        localDateEva: currentDate,
                        localDateRequiredEva: currentDate,
                        instantEva: currentDate,
                        instanteRequiredEva: currentDate,
                        zonedDateTimeEva: currentDate,
                        zonedDateTimeRequiredEva: currentDate
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

            it('should delete a FieldTestMapstructEntity', async () => {
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
