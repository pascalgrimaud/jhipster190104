import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IFieldTestPaginationEntity } from 'app/shared/model/field-test-pagination-entity.model';

type EntityResponseType = HttpResponse<IFieldTestPaginationEntity>;
type EntityArrayResponseType = HttpResponse<IFieldTestPaginationEntity[]>;

@Injectable({ providedIn: 'root' })
export class FieldTestPaginationEntityService {
    public resourceUrl = SERVER_API_URL + 'api/field-test-pagination-entities';

    constructor(protected http: HttpClient) {}

    create(fieldTestPaginationEntity: IFieldTestPaginationEntity): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(fieldTestPaginationEntity);
        return this.http
            .post<IFieldTestPaginationEntity>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(fieldTestPaginationEntity: IFieldTestPaginationEntity): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(fieldTestPaginationEntity);
        return this.http
            .put<IFieldTestPaginationEntity>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IFieldTestPaginationEntity>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IFieldTestPaginationEntity[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    protected convertDateFromClient(fieldTestPaginationEntity: IFieldTestPaginationEntity): IFieldTestPaginationEntity {
        const copy: IFieldTestPaginationEntity = Object.assign({}, fieldTestPaginationEntity, {
            localDateAlice:
                fieldTestPaginationEntity.localDateAlice != null && fieldTestPaginationEntity.localDateAlice.isValid()
                    ? fieldTestPaginationEntity.localDateAlice.format(DATE_FORMAT)
                    : null,
            localDateRequiredAlice:
                fieldTestPaginationEntity.localDateRequiredAlice != null && fieldTestPaginationEntity.localDateRequiredAlice.isValid()
                    ? fieldTestPaginationEntity.localDateRequiredAlice.format(DATE_FORMAT)
                    : null,
            instantAlice:
                fieldTestPaginationEntity.instantAlice != null && fieldTestPaginationEntity.instantAlice.isValid()
                    ? fieldTestPaginationEntity.instantAlice.toJSON()
                    : null,
            instanteRequiredAlice:
                fieldTestPaginationEntity.instanteRequiredAlice != null && fieldTestPaginationEntity.instanteRequiredAlice.isValid()
                    ? fieldTestPaginationEntity.instanteRequiredAlice.toJSON()
                    : null,
            zonedDateTimeAlice:
                fieldTestPaginationEntity.zonedDateTimeAlice != null && fieldTestPaginationEntity.zonedDateTimeAlice.isValid()
                    ? fieldTestPaginationEntity.zonedDateTimeAlice.toJSON()
                    : null,
            zonedDateTimeRequiredAlice:
                fieldTestPaginationEntity.zonedDateTimeRequiredAlice != null &&
                fieldTestPaginationEntity.zonedDateTimeRequiredAlice.isValid()
                    ? fieldTestPaginationEntity.zonedDateTimeRequiredAlice.toJSON()
                    : null
        });
        return copy;
    }

    protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
        if (res.body) {
            res.body.localDateAlice = res.body.localDateAlice != null ? moment(res.body.localDateAlice) : null;
            res.body.localDateRequiredAlice = res.body.localDateRequiredAlice != null ? moment(res.body.localDateRequiredAlice) : null;
            res.body.instantAlice = res.body.instantAlice != null ? moment(res.body.instantAlice) : null;
            res.body.instanteRequiredAlice = res.body.instanteRequiredAlice != null ? moment(res.body.instanteRequiredAlice) : null;
            res.body.zonedDateTimeAlice = res.body.zonedDateTimeAlice != null ? moment(res.body.zonedDateTimeAlice) : null;
            res.body.zonedDateTimeRequiredAlice =
                res.body.zonedDateTimeRequiredAlice != null ? moment(res.body.zonedDateTimeRequiredAlice) : null;
        }
        return res;
    }

    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        if (res.body) {
            res.body.forEach((fieldTestPaginationEntity: IFieldTestPaginationEntity) => {
                fieldTestPaginationEntity.localDateAlice =
                    fieldTestPaginationEntity.localDateAlice != null ? moment(fieldTestPaginationEntity.localDateAlice) : null;
                fieldTestPaginationEntity.localDateRequiredAlice =
                    fieldTestPaginationEntity.localDateRequiredAlice != null
                        ? moment(fieldTestPaginationEntity.localDateRequiredAlice)
                        : null;
                fieldTestPaginationEntity.instantAlice =
                    fieldTestPaginationEntity.instantAlice != null ? moment(fieldTestPaginationEntity.instantAlice) : null;
                fieldTestPaginationEntity.instanteRequiredAlice =
                    fieldTestPaginationEntity.instanteRequiredAlice != null
                        ? moment(fieldTestPaginationEntity.instanteRequiredAlice)
                        : null;
                fieldTestPaginationEntity.zonedDateTimeAlice =
                    fieldTestPaginationEntity.zonedDateTimeAlice != null ? moment(fieldTestPaginationEntity.zonedDateTimeAlice) : null;
                fieldTestPaginationEntity.zonedDateTimeRequiredAlice =
                    fieldTestPaginationEntity.zonedDateTimeRequiredAlice != null
                        ? moment(fieldTestPaginationEntity.zonedDateTimeRequiredAlice)
                        : null;
            });
        }
        return res;
    }
}
