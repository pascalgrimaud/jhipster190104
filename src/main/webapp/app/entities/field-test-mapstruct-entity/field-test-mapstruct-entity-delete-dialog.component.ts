import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IFieldTestMapstructEntity } from 'app/shared/model/field-test-mapstruct-entity.model';
import { FieldTestMapstructEntityService } from './field-test-mapstruct-entity.service';

@Component({
    selector: 'my-prefix-field-test-mapstruct-entity-delete-dialog',
    templateUrl: './field-test-mapstruct-entity-delete-dialog.component.html'
})
export class FieldTestMapstructEntityDeleteDialogComponent {
    fieldTestMapstructEntity: IFieldTestMapstructEntity;

    constructor(
        protected fieldTestMapstructEntityService: FieldTestMapstructEntityService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.fieldTestMapstructEntityService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'fieldTestMapstructEntityListModification',
                content: 'Deleted an fieldTestMapstructEntity'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'my-prefix-field-test-mapstruct-entity-delete-popup',
    template: ''
})
export class FieldTestMapstructEntityDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ fieldTestMapstructEntity }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(FieldTestMapstructEntityDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.fieldTestMapstructEntity = fieldTestMapstructEntity;
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
