import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IEntityWithServiceImpl } from 'app/shared/model/entity-with-service-impl.model';

type EntityResponseType = HttpResponse<IEntityWithServiceImpl>;
type EntityArrayResponseType = HttpResponse<IEntityWithServiceImpl[]>;

@Injectable({ providedIn: 'root' })
export class EntityWithServiceImplService {
    public resourceUrl = SERVER_API_URL + 'api/entity-with-service-impls';

    constructor(protected http: HttpClient) {}

    create(entityWithServiceImpl: IEntityWithServiceImpl): Observable<EntityResponseType> {
        return this.http.post<IEntityWithServiceImpl>(this.resourceUrl, entityWithServiceImpl, { observe: 'response' });
    }

    update(entityWithServiceImpl: IEntityWithServiceImpl): Observable<EntityResponseType> {
        return this.http.put<IEntityWithServiceImpl>(this.resourceUrl, entityWithServiceImpl, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IEntityWithServiceImpl>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IEntityWithServiceImpl[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
