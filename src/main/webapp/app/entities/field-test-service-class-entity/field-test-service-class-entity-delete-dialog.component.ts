import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IFieldTestServiceClassEntity } from 'app/shared/model/field-test-service-class-entity.model';
import { FieldTestServiceClassEntityService } from './field-test-service-class-entity.service';

@Component({
    selector: 'my-prefix-field-test-service-class-entity-delete-dialog',
    templateUrl: './field-test-service-class-entity-delete-dialog.component.html'
})
export class FieldTestServiceClassEntityDeleteDialogComponent {
    fieldTestServiceClassEntity: IFieldTestServiceClassEntity;

    constructor(
        protected fieldTestServiceClassEntityService: FieldTestServiceClassEntityService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.fieldTestServiceClassEntityService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'fieldTestServiceClassEntityListModification',
                content: 'Deleted an fieldTestServiceClassEntity'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'my-prefix-field-test-service-class-entity-delete-popup',
    template: ''
})
export class FieldTestServiceClassEntityDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ fieldTestServiceClassEntity }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(FieldTestServiceClassEntityDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.fieldTestServiceClassEntity = fieldTestServiceClassEntity;
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
