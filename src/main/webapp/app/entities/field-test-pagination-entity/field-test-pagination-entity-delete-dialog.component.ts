import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IFieldTestPaginationEntity } from 'app/shared/model/field-test-pagination-entity.model';
import { FieldTestPaginationEntityService } from './field-test-pagination-entity.service';

@Component({
    selector: 'my-prefix-field-test-pagination-entity-delete-dialog',
    templateUrl: './field-test-pagination-entity-delete-dialog.component.html'
})
export class FieldTestPaginationEntityDeleteDialogComponent {
    fieldTestPaginationEntity: IFieldTestPaginationEntity;

    constructor(
        protected fieldTestPaginationEntityService: FieldTestPaginationEntityService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.fieldTestPaginationEntityService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'fieldTestPaginationEntityListModification',
                content: 'Deleted an fieldTestPaginationEntity'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'my-prefix-field-test-pagination-entity-delete-popup',
    template: ''
})
export class FieldTestPaginationEntityDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ fieldTestPaginationEntity }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(FieldTestPaginationEntityDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.fieldTestPaginationEntity = fieldTestPaginationEntity;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
