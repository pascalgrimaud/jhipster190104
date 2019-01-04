/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT, DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { FieldTestInfiniteScrollEntityService } from 'app/entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity.service';
import {
    IFieldTestInfiniteScrollEntity,
    FieldTestInfiniteScrollEntity,
    EnumFieldClass,
    EnumRequiredFieldClass
} from 'app/shared/model/field-test-infinite-scroll-entity.model';

describe('Service Tests', () => {
    describe('FieldTestInfiniteScrollEntity Service', () => {
        let injector: TestBed;
        let service: FieldTestInfiniteScrollEntityService;
        let httpMock: HttpTestingController;
        let elemDefault: IFieldTestInfiniteScrollEntity;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(FieldTestInfiniteScrollEntityService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new FieldTestInfiniteScrollEntity(
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
                        localDateHugo: currentDate.format(DATE_FORMAT),
                        localDateRequiredHugo: currentDate.format(DATE_FORMAT),
                        instantHugo: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredHugo: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeHugo: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredHugo: currentDate.format(DATE_TIME_FORMAT)
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

            it('should create a FieldTestInfiniteScrollEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        localDateHugo: currentDate.format(DATE_FORMAT),
                        localDateRequiredHugo: currentDate.format(DATE_FORMAT),
                        instantHugo: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredHugo: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeHugo: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredHugo: currentDate.format(DATE_TIME_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        localDateHugo: currentDate,
                        localDateRequiredHugo: currentDate,
                        instantHugo: currentDate,
                        instanteRequiredHugo: currentDate,
                        zonedDateTimeHugo: currentDate,
                        zonedDateTimeRequiredHugo: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new FieldTestInfiniteScrollEntity(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a FieldTestInfiniteScrollEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        stringHugo: 'BBBBBB',
                        stringRequiredHugo: 'BBBBBB',
                        stringMinlengthHugo: 'BBBBBB',
                        stringMaxlengthHugo: 'BBBBBB',
                        stringPatternHugo: 'BBBBBB',
                        integerHugo: 1,
                        integerRequiredHugo: 1,
                        integerMinHugo: 1,
                        integerMaxHugo: 1,
                        longHugo: 1,
                        longRequiredHugo: 1,
                        longMinHugo: 1,
                        longMaxHugo: 1,
                        floatHugo: 1,
                        floatRequiredHugo: 1,
                        floatMinHugo: 1,
                        floatMaxHugo: 1,
                        doubleRequiredHugo: 1,
                        doubleMinHugo: 1,
                        doubleMaxHugo: 1,
                        bigDecimalRequiredHugo: 1,
                        bigDecimalMinHugo: 1,
                        bigDecimalMaxHugo: 1,
                        localDateHugo: currentDate.format(DATE_FORMAT),
                        localDateRequiredHugo: currentDate.format(DATE_FORMAT),
                        instantHugo: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredHugo: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeHugo: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredHugo: currentDate.format(DATE_TIME_FORMAT),
                        booleanHugo: true,
                        booleanRequiredHugo: true,
                        enumHugo: 'BBBBBB',
                        enumRequiredHugo: 'BBBBBB',
                        byteImageHugo: 'BBBBBB',
                        byteImageRequiredHugo: 'BBBBBB',
                        byteImageMinbytesHugo: 'BBBBBB',
                        byteImageMaxbytesHugo: 'BBBBBB',
                        byteAnyHugo: 'BBBBBB',
                        byteAnyRequiredHugo: 'BBBBBB',
                        byteAnyMinbytesHugo: 'BBBBBB',
                        byteAnyMaxbytesHugo: 'BBBBBB',
                        byteTextHugo: 'BBBBBB',
                        byteTextRequiredHugo: 'BBBBBB',
                        byteTextMinbytesHugo: 'BBBBBB',
                        byteTextMaxbytesHugo: 'BBBBBB'
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        localDateHugo: currentDate,
                        localDateRequiredHugo: currentDate,
                        instantHugo: currentDate,
                        instanteRequiredHugo: currentDate,
                        zonedDateTimeHugo: currentDate,
                        zonedDateTimeRequiredHugo: currentDate
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

            it('should return a list of FieldTestInfiniteScrollEntity', async () => {
                const returnedFromService = Object.assign(
                    {
                        stringHugo: 'BBBBBB',
                        stringRequiredHugo: 'BBBBBB',
                        stringMinlengthHugo: 'BBBBBB',
                        stringMaxlengthHugo: 'BBBBBB',
                        stringPatternHugo: 'BBBBBB',
                        integerHugo: 1,
                        integerRequiredHugo: 1,
                        integerMinHugo: 1,
                        integerMaxHugo: 1,
                        longHugo: 1,
                        longRequiredHugo: 1,
                        longMinHugo: 1,
                        longMaxHugo: 1,
                        floatHugo: 1,
                        floatRequiredHugo: 1,
                        floatMinHugo: 1,
                        floatMaxHugo: 1,
                        doubleRequiredHugo: 1,
                        doubleMinHugo: 1,
                        doubleMaxHugo: 1,
                        bigDecimalRequiredHugo: 1,
                        bigDecimalMinHugo: 1,
                        bigDecimalMaxHugo: 1,
                        localDateHugo: currentDate.format(DATE_FORMAT),
                        localDateRequiredHugo: currentDate.format(DATE_FORMAT),
                        instantHugo: currentDate.format(DATE_TIME_FORMAT),
                        instanteRequiredHugo: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeHugo: currentDate.format(DATE_TIME_FORMAT),
                        zonedDateTimeRequiredHugo: currentDate.format(DATE_TIME_FORMAT),
                        booleanHugo: true,
                        booleanRequiredHugo: true,
                        enumHugo: 'BBBBBB',
                        enumRequiredHugo: 'BBBBBB',
                        byteImageHugo: 'BBBBBB',
                        byteImageRequiredHugo: 'BBBBBB',
                        byteImageMinbytesHugo: 'BBBBBB',
                        byteImageMaxbytesHugo: 'BBBBBB',
                        byteAnyHugo: 'BBBBBB',
                        byteAnyRequiredHugo: 'BBBBBB',
                        byteAnyMinbytesHugo: 'BBBBBB',
                        byteAnyMaxbytesHugo: 'BBBBBB',
                        byteTextHugo: 'BBBBBB',
                        byteTextRequiredHugo: 'BBBBBB',
                        byteTextMinbytesHugo: 'BBBBBB',
                        byteTextMaxbytesHugo: 'BBBBBB'
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        localDateHugo: currentDate,
                        localDateRequiredHugo: currentDate,
                        instantHugo: currentDate,
                        instanteRequiredHugo: currentDate,
                        zonedDateTimeHugo: currentDate,
                        zonedDateTimeRequiredHugo: currentDate
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

            it('should delete a FieldTestInfiniteScrollEntity', async () => {
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
