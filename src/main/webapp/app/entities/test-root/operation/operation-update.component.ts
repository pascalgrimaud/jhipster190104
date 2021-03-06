import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';
import { IOperation } from 'app/shared/model/test-root/operation.model';
import { OperationService } from './operation.service';
import { IBankAccountMySuffix } from 'app/shared/model/test-root/bank-account-my-suffix.model';
import { BankAccountMySuffixService } from 'app/entities/test-root/bank-account-my-suffix';
import { ILabel } from 'app/shared/model/test-root/label.model';
import { LabelService } from 'app/entities/test-root/label';

@Component({
    selector: 'my-prefix-operation-update',
    templateUrl: './operation-update.component.html'
})
export class OperationUpdateComponent implements OnInit {
    operation: IOperation;
    isSaving: boolean;

    bankaccounts: IBankAccountMySuffix[];

    labels: ILabel[];
    date: string;

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected operationService: OperationService,
        protected bankAccountService: BankAccountMySuffixService,
        protected labelService: LabelService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ operation }) => {
            this.operation = operation;
            this.date = this.operation.date != null ? this.operation.date.format(DATE_TIME_FORMAT) : null;
        });
        this.bankAccountService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IBankAccountMySuffix[]>) => mayBeOk.ok),
                map((response: HttpResponse<IBankAccountMySuffix[]>) => response.body)
            )
            .subscribe((res: IBankAccountMySuffix[]) => (this.bankaccounts = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.labelService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<ILabel[]>) => mayBeOk.ok),
                map((response: HttpResponse<ILabel[]>) => response.body)
            )
            .subscribe((res: ILabel[]) => (this.labels = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.operation.date = this.date != null ? moment(this.date, DATE_TIME_FORMAT) : null;
        if (this.operation.id !== undefined) {
            this.subscribeToSaveResponse(this.operationService.update(this.operation));
        } else {
            this.subscribeToSaveResponse(this.operationService.create(this.operation));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IOperation>>) {
        result.subscribe((res: HttpResponse<IOperation>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackBankAccountById(index: number, item: IBankAccountMySuffix) {
        return item.id;
    }

    trackLabelById(index: number, item: ILabel) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}
