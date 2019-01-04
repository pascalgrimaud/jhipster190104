/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT, DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { FieldTestServiceImplEntityService } from 'app/entities/field-test-service-impl-entity/field-test-service-impl-entity.service';
import {
    IFieldTestServiceImplEntity,
    FieldTestServiceImplEntity,
    EnumFieldClass,
    EnumRequiredFieldClass
} from 'app/shared/model/field-test-service-impl-entity.model';

describe('Service Tests', () => {
    describe('FieldTestServiceImplEntity Service', () => {
        let injector: TestBed;
        let service: FieldTestServiceImplEntityService;
        let httpMock: HttpTestingController;
        let elemDefault: IFieldTestServiceImplEntity;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(FieldTestServiceImplEntityService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new FieldTestServiceImplEntity(
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
                        localDateMika: currentDate.format(DATE_FORMAT),
                        localDateRequiredMika: currentDate.format(DATE_FORMAT),
                        instantMika: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredMika: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeMika: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredMika: currentDate.format(DATE_TIME_FORMAT)
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

            it('should create a FieldTestServiceImplEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        localDateMika: currentDate.format(DATE_FORMAT),
                        localDateRequiredMika: currentDate.format(DATE_FORMAT),
                        instantMika: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredMika: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeMika: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredMika: currentDate.format(DATE_TIME_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        localDateMika: currentDate,
                        localDateRequiredMika: currentDate,
                        instantMika: currentDate,
                        instanteRequiredMika: currentDate,
                        zonedDateTimeMika: currentDate,
                        zonedDateTimeRequiredMika: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new FieldTestServiceImplEntity(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a FieldTestServiceImplEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        stringMika: 'BBBBBB',
                        stringRequiredMika: 'BBBBBB',
                        stringMinlengthMika: 'BBBBBB',
                        stringMaxlengthMika: 'BBBBBB',
                        stringPatternMika: 'BBBBBB',
                        integerMika: 1,
                        integerRequiredMika: 1,
                        integerMinMika: 1,
                        integerMaxMika: 1,
                        longMika: 1,
                        longRequiredMika: 1,
                        longMinMika: 1,
                        longMaxMika: 1,
                        floatMika: 1,
                        floatRequiredMika: 1,
                        floatMinMika: 1,
                        floatMaxMika: 1,
                        doubleRequiredMika: 1,
                        doubleMinMika: 1,
                        doubleMaxMika: 1,
                        bigDecimalRequiredMika: 1,
                        bigDecimalMinMika: 1,
                        bigDecimalMaxMika: 1,
                        localDateMika: currentDate.format(DATE_FORMAT),
                        localDateRequiredMika: currentDate.format(DATE_FORMAT),
                        instantMika: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredMika: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeMika: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredMika: currentDate.format(DATE_TIME_FORMAT),
                        booleanMika: true,
                        booleanRequiredMika: true,
                        enumMika: 'BBBBBB',
                        enumRequiredMika: 'BBBBBB',
                        byteImageMika: 'BBBBBB',
                        byteImageRequiredMika: 'BBBBBB',
                        byteImageMinbytesMika: 'BBBBBB',
                        byteImageMaxbytesMika: 'BBBBBB',
                        byteAnyMika: 'BBBBBB',
                        byteAnyRequiredMika: 'BBBBBB',
                        byteAnyMinbytesMika: 'BBBBBB',
                        byteAnyMaxbytesMika: 'BBBBBB',
                        byteTextMika: 'BBBBBB',
                        byteTextRequiredMika: 'BBBBBB',
                        byteTextMinbytesMika: 'BBBBBB',
                        byteTextMaxbytesMika: 'BBBBBB'
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        localDateMika: currentDate,
                        localDateRequiredMika: currentDate,
                        instantMika: currentDate,
                        instanteRequiredMika: currentDate,
                        zonedDateTimeMika: currentDate,
                        zonedDateTimeRequiredMika: currentDate
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

            it('should return a list of FieldTestServiceImplEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        stringMika: 'BBBBBB',
                        stringRequiredMika: 'BBBBBB',
                        stringMinlengthMika: 'BBBBBB',
                        stringMaxlengthMika: 'BBBBBB',
                        stringPatternMika: 'BBBBBB',
                        integerMika: 1,
                        integerRequiredMika: 1,
                        integerMinMika: 1,
                        integerMaxMika: 1,
                        longMika: 1,
                        longRequiredMika: 1,
                        longMinMika: 1,
                        longMaxMika: 1,
                        floatMika: 1,
                        floatRequiredMika: 1,
                        floatMinMika: 1,
                        floatMaxMika: 1,
                        doubleRequiredMika: 1,
                        doubleMinMika: 1,
                        doubleMaxMika: 1,
                        bigDecimalRequiredMika: 1,
                        bigDecimalMinMika: 1,
                        bigDecimalMaxMika: 1,
                        localDateMika: currentDate.format(DATE_FORMAT),
                        localDateRequiredMika: currentDate.format(DATE_FORMAT),
                        instantMika: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredMika: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeMika: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredMika: currentDate.format(DATE_TIME_FORMAT),
                        booleanMika: true,
                        booleanRequiredMika: true,
                        enumMika: 'BBBBBB',
                        enumRequiredMika: 'BBBBBB',
                        byteImageMika: 'BBBBBB',
                        byteImageRequiredMika: 'BBBBBB',
                        byteImageMinbytesMika: 'BBBBBB',
                        byteImageMaxbytesMika: 'BBBBBB',
                        byteAnyMika: 'BBBBBB',
                        byteAnyRequiredMika: 'BBBBBB',
                        byteAnyMinbytesMika: 'BBBBBB',
                        byteAnyMaxbytesMika: 'BBBBBB',
                        byteTextMika: 'BBBBBB',
                        byteTextRequiredMika: 'BBBBBB',
                        byteTextMinbytesMika: 'BBBBBB',
                        byteTextMaxbytesMika: 'BBBBBB'
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        localDateMika: currentDate,
                        localDateRequiredMika: currentDate,
                        instantMika: currentDate,
                        instanteRequiredMika: currentDate,
                        zonedDateTimeMika: currentDate,
                        zonedDateTimeRequiredMika: currentDate
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

            it('should delete a FieldTestServiceImplEntity', async () => {
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
