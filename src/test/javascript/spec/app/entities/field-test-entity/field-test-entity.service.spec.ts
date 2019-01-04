/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT, DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { FieldTestEntityService } from 'app/entities/field-test-entity/field-test-entity.service';
import { IFieldTestEntity, FieldTestEntity, EnumFieldClass, EnumRequiredFieldClass } from 'app/shared/model/field-test-entity.model';

describe('Service Tests', () => {
    describe('FieldTestEntity Service', () => {
        let injector: TestBed;
        let service: FieldTestEntityService;
        let httpMock: HttpTestingController;
        let elemDefault: IFieldTestEntity;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(FieldTestEntityService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new FieldTestEntity(
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
                        localDateTom: currentDate.format(DATE_FORMAT),
                        localDateRequiredTom: currentDate.format(DATE_FORMAT),
                        instantTom: currentDate.format(DATE_TIME_FORMAT),
                        instantRequiredTom: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeTom: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredTom: currentDate.format(DATE_TIME_FORMAT)
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

            it('should create a FieldTestEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        localDateTom: currentDate.format(DATE_FORMAT),
                        localDateRequiredTom: currentDate.format(DATE_FORMAT),
                        instantTom: currentDate.format(DATE_TIME_FORMAT),
                        instantRequiredTom: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeTom: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredTom: currentDate.format(DATE_TIME_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        localDateTom: currentDate,
                        localDateRequiredTom: currentDate,
                        instantTom: currentDate,
                        instantRequiredTom: currentDate,
                        zonedDateTimeTom: currentDate,
                        zonedDateTimeRequiredTom: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new FieldTestEntity(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a FieldTestEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        stringTom: 'BBBBBB',
                        stringRequiredTom: 'BBBBBB',
                        stringMinlengthTom: 'BBBBBB',
                        stringMaxlengthTom: 'BBBBBB',
                        stringPatternTom: 'BBBBBB',
                        integerTom: 1,
                        integerRequiredTom: 1,
                        integerMinTom: 1,
                        integerMaxTom: 1,
                        longTom: 1,
                        longRequiredTom: 1,
                        longMinTom: 1,
                        longMaxTom: 1,
                        floatTom: 1,
                        floatRequiredTom: 1,
                        floatMinTom: 1,
                        floatMaxTom: 1,
                        doubleRequiredTom: 1,
                        doubleMinTom: 1,
                        doubleMaxTom: 1,
                        bigDecimalRequiredTom: 1,
                        bigDecimalMinTom: 1,
                        bigDecimalMaxTom: 1,
                        localDateTom: currentDate.format(DATE_FORMAT),
                        localDateRequiredTom: currentDate.format(DATE_FORMAT),
                        instantTom: currentDate.format(DATE_TIME_FORMAT),
                        instantRequiredTom: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeTom: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredTom: currentDate.format(DATE_TIME_FORMAT),
                        booleanTom: true,
                        booleanRequiredTom: true,
                        enumTom: 'BBBBBB',
                        enumRequiredTom: 'BBBBBB',
                        byteImageTom: 'BBBBBB',
                        byteImageRequiredTom: 'BBBBBB',
                        byteImageMinbytesTom: 'BBBBBB',
                        byteImageMaxbytesTom: 'BBBBBB',
                        byteAnyTom: 'BBBBBB',
                        byteAnyRequiredTom: 'BBBBBB',
                        byteAnyMinbytesTom: 'BBBBBB',
                        byteAnyMaxbytesTom: 'BBBBBB',
                        byteTextTom: 'BBBBBB',
                        byteTextRequiredTom: 'BBBBBB',
                        byteTextMinbytesTom: 'BBBBBB',
                        byteTextMaxbytesTom: 'BBBBBB'
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        localDateTom: currentDate,
                        localDateRequiredTom: currentDate,
                        instantTom: currentDate,
                        instantRequiredTom: currentDate,
                        zonedDateTimeTom: currentDate,
                        zonedDateTimeRequiredTom: currentDate
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

            it('should return a list of FieldTestEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        stringTom: 'BBBBBB',
                        stringRequiredTom: 'BBBBBB',
                        stringMinlengthTom: 'BBBBBB',
                        stringMaxlengthTom: 'BBBBBB',
                        stringPatternTom: 'BBBBBB',
                        integerTom: 1,
                        integerRequiredTom: 1,
                        integerMinTom: 1,
                        integerMaxTom: 1,
                        longTom: 1,
                        longRequiredTom: 1,
                        longMinTom: 1,
                        longMaxTom: 1,
                        floatTom: 1,
                        floatRequiredTom: 1,
                        floatMinTom: 1,
                        floatMaxTom: 1,
                        doubleRequiredTom: 1,
                        doubleMinTom: 1,
                        doubleMaxTom: 1,
                        bigDecimalRequiredTom: 1,
                        bigDecimalMinTom: 1,
                        bigDecimalMaxTom: 1,
                        localDateTom: currentDate.format(DATE_FORMAT),
                        localDateRequiredTom: currentDate.format(DATE_FORMAT),
                        instantTom: currentDate.format(DATE_TIME_FORMAT),
                        instantRequiredTom: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeTom: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredTom: currentDate.format(DATE_TIME_FORMAT),
                        booleanTom: true,
                        booleanRequiredTom: true,
                        enumTom: 'BBBBBB',
                        enumRequiredTom: 'BBBBBB',
                        byteImageTom: 'BBBBBB',
                        byteImageRequiredTom: 'BBBBBB',
                        byteImageMinbytesTom: 'BBBBBB',
                        byteImageMaxbytesTom: 'BBBBBB',
                        byteAnyTom: 'BBBBBB',
                        byteAnyRequiredTom: 'BBBBBB',
                        byteAnyMinbytesTom: 'BBBBBB',
                        byteAnyMaxbytesTom: 'BBBBBB',
                        byteTextTom: 'BBBBBB',
                        byteTextRequiredTom: 'BBBBBB',
                        byteTextMinbytesTom: 'BBBBBB',
                        byteTextMaxbytesTom: 'BBBBBB'
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        localDateTom: currentDate,
                        localDateRequiredTom: currentDate,
                        instantTom: currentDate,
                        instantRequiredTom: currentDate,
                        zonedDateTimeTom: currentDate,
                        zonedDateTimeRequiredTom: currentDate
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

            it('should delete a FieldTestEntity', async () => {
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
