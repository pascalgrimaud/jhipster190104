import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService, JhiDataUtils } from 'ng-jhipster';
import { IBankAccountMySuffix } from 'app/shared/model/test-root/bank-account-my-suffix.model';
import { BankAccountMySuffixService } from './bank-account-my-suffix.service';
import { IUser, UserService } from 'app/core';

@Component({
    selector: 'my-prefix-bank-account-my-suffix-update',
    templateUrl: './bank-account-my-suffix-update.component.html'
})
export class BankAccountMySuffixUpdateComponent implements OnInit {
    bankAccount: IBankAccountMySuffix;
    isSaving: boolean;

    users: IUser[];
    openingDayDp: any;
    lastOperationDate: string;

    constructor(
        protected dataUtils: JhiDataUtils,
        protected jhiAlertService: JhiAlertService,
        protected bankAccountService: BankAccountMySuffixService,
        protected userService: UserService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ bankAccount }) => {
            this.bankAccount = bankAccount;
            this.lastOperationDate =
                this.bankAccount.lastOperationDate != null ? this.bankAccount.lastOperationDate.format(DATE_TIME_FORMAT) : null;
        });
        this.userService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IUser[]>) => mayBeOk.ok),
                map((response: HttpResponse<IUser[]>) => response.body)
            )
            .subscribe((res: IUser[]) => (this.users = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData(event, entity, field, isImage) {
        this.dataUtils.setFileData(event, entity, field, isImage);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.bankAccount.lastOperationDate = this.lastOperationDate != null ? moment(this.lastOperationDate, DATE_TIME_FORMAT) : null;
        if (this.bankAccount.id !== undefined) {
            this.subscribeToSaveResponse(this.bankAccountService.update(this.bankAccount));
        } else {
            this.subscribeToSaveResponse(this.bankAccountService.create(this.bankAccount));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IBankAccountMySuffix>>) {
        result.subscribe((res: HttpResponse<IBankAccountMySuffix>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackUserById(index: number, item: IUser) {
        return item.id;
    }
}
