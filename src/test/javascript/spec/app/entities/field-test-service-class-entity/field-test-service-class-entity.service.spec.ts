/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT, DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { FieldTestServiceClassEntityService } from 'app/entities/field-test-service-class-entity/field-test-service-class-entity.service';
import {
    IFieldTestServiceClassEntity,
    FieldTestServiceClassEntity,
    EnumFieldClass,
    EnumRequiredFieldClass
} from 'app/shared/model/field-test-service-class-entity.model';

describe('Service Tests', () => {
    describe('FieldTestServiceClassEntity Service', () => {
        let injector: TestBed;
        let service: FieldTestServiceClassEntityService;
        let httpMock: HttpTestingController;
        let elemDefault: IFieldTestServiceClassEntity;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(FieldTestServiceClassEntityService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new FieldTestServiceClassEntity(
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
                        localDateBob: currentDate.format(DATE_FORMAT),
                        localDateRequiredBob: currentDate.format(DATE_FORMAT),
                        instantBob: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredBob: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeBob: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredBob: currentDate.format(DATE_TIME_FORMAT)
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

            it('should create a FieldTestServiceClassEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        localDateBob: currentDate.format(DATE_FORMAT),
                        localDateRequiredBob: currentDate.format(DATE_FORMAT),
                        instantBob: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredBob: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeBob: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredBob: currentDate.format(DATE_TIME_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        localDateBob: currentDate,
                        localDateRequiredBob: currentDate,
                        instantBob: currentDate,
                        instanteRequiredBob: currentDate,
                        zonedDateTimeBob: currentDate,
                        zonedDateTimeRequiredBob: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new FieldTestServiceClassEntity(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a FieldTestServiceClassEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        stringBob: 'BBBBBB',
                        stringRequiredBob: 'BBBBBB',
                        stringMinlengthBob: 'BBBBBB',
                        stringMaxlengthBob: 'BBBBBB',
                        stringPatternBob: 'BBBBBB',
                        integerBob: 1,
                        integerRequiredBob: 1,
                        integerMinBob: 1,
                        integerMaxBob: 1,
                        longBob: 1,
                        longRequiredBob: 1,
                        longMinBob: 1,
                        longMaxBob: 1,
                        floatBob: 1,
                        floatRequiredBob: 1,
                        floatMinBob: 1,
                        floatMaxBob: 1,
                        doubleRequiredBob: 1,
                        doubleMinBob: 1,
                        doubleMaxBob: 1,
                        bigDecimalRequiredBob: 1,
                        bigDecimalMinBob: 1,
                        bigDecimalMaxBob: 1,
                        localDateBob: currentDate.format(DATE_FORMAT),
                        localDateRequiredBob: currentDate.format(DATE_FORMAT),
                        instantBob: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredBob: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeBob: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredBob: currentDate.format(DATE_TIME_FORMAT),
                        booleanBob: true,
                        booleanRequiredBob: true,
                        enumBob: 'BBBBBB',
                        enumRequiredBob: 'BBBBBB',
                        byteImageBob: 'BBBBBB',
                        byteImageRequiredBob: 'BBBBBB',
                        byteImageMinbytesBob: 'BBBBBB',
                        byteImageMaxbytesBob: 'BBBBBB',
                        byteAnyBob: 'BBBBBB',
                        byteAnyRequiredBob: 'BBBBBB',
                        byteAnyMinbytesBob: 'BBBBBB',
                        byteAnyMaxbytesBob: 'BBBBBB',
                        byteTextBob: 'BBBBBB',
                        byteTextRequiredBob: 'BBBBBB',
                        byteTextMinbytesBob: 'BBBBBB',
                        byteTextMaxbytesBob: 'BBBBBB'
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        localDateBob: currentDate,
                        localDateRequiredBob: currentDate,
                        instantBob: currentDate,
                        instanteRequiredBob: currentDate,
                        zonedDateTimeBob: currentDate,
                        zonedDateTimeRequiredBob: currentDate
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

            it('should return a list of FieldTestServiceClassEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        stringBob: 'BBBBBB',
                        stringRequiredBob: 'BBBBBB',
                        stringMinlengthBob: 'BBBBBB',
                        stringMaxlengthBob: 'BBBBBB',
                        stringPatternBob: 'BBBBBB',
                        integerBob: 1,
                        integerRequiredBob: 1,
                        integerMinBob: 1,
                        integerMaxBob: 1,
                        longBob: 1,
                        longRequiredBob: 1,
                        longMinBob: 1,
                        longMaxBob: 1,
                        floatBob: 1,
                        floatRequiredBob: 1,
                        floatMinBob: 1,
                        floatMaxBob: 1,
                        doubleRequiredBob: 1,
                        doubleMinBob: 1,
                        doubleMaxBob: 1,
                        bigDecimalRequiredBob: 1,
                        bigDecimalMinBob: 1,
                        bigDecimalMaxBob: 1,
                        localDateBob: currentDate.format(DATE_FORMAT),
                        localDateRequiredBob: currentDate.format(DATE_FORMAT),
                        instantBob: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredBob: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeBob: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredBob: currentDate.format(DATE_TIME_FORMAT),
                        booleanBob: true,
                        booleanRequiredBob: true,
                        enumBob: 'BBBBBB',
                        enumRequiredBob: 'BBBBBB',
                        byteImageBob: 'BBBBBB',
                        byteImageRequiredBob: 'BBBBBB',
                        byteImageMinbytesBob: 'BBBBBB',
                        byteImageMaxbytesBob: 'BBBBBB',
                        byteAnyBob: 'BBBBBB',
                        byteAnyRequiredBob: 'BBBBBB',
                        byteAnyMinbytesBob: 'BBBBBB',
                        byteAnyMaxbytesBob: 'BBBBBB',
                        byteTextBob: 'BBBBBB',
                        byteTextRequiredBob: 'BBBBBB',
                        byteTextMinbytesBob: 'BBBBBB',
                        byteTextMaxbytesBob: 'BBBBBB'
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        localDateBob: currentDate,
                        localDateRequiredBob: currentDate,
                        instantBob: currentDate,
                        instanteRequiredBob: currentDate,
                        zonedDateTimeBob: currentDate,
                        zonedDateTimeRequiredBob: currentDate
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

            it('should delete a FieldTestServiceClassEntity', async () => {
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
