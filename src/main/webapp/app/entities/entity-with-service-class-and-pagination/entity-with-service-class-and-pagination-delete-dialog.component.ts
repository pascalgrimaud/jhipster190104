import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IEntityWithServiceClassAndPagination } from 'app/shared/model/entity-with-service-class-and-pagination.model';
import { EntityWithServiceClassAndPaginationService } from './entity-with-service-class-and-pagination.service';

@Component({
    selector: 'my-prefix-entity-with-service-class-and-pagination-delete-dialog',
    templateUrl: './entity-with-service-class-and-pagination-delete-dialog.component.html'
})
export class EntityWithServiceClassAndPaginationDeleteDialogComponent {
    entityWithServiceClassAndPagination: IEntityWithServiceClassAndPagination;

    constructor(
        protected entityWithServiceClassAndPaginationService: EntityWithServiceClassAndPaginationService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.entityWithServiceClassAndPaginationService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'entityWithServiceClassAndPaginationListModification',
                content: 'Deleted an entityWithServiceClassAndPagination'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'my-prefix-entity-with-service-class-and-pagination-delete-popup',
    template: ''
})
export class EntityWithServiceClassAndPaginationDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ entityWithServiceClassAndPagination }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(EntityWithServiceClassAndPaginationDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.entityWithServiceClassAndPagination = entityWithServiceClassAndPagination;
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
