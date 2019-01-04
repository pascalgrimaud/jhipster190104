import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IEntityWithServiceImplPaginationAndDTO } from 'app/shared/model/entity-with-service-impl-pagination-and-dto.model';
import { EntityWithServiceImplPaginationAndDTOService } from './entity-with-service-impl-pagination-and-dto.service';

@Component({
    selector: 'my-prefix-entity-with-service-impl-pagination-and-dto-delete-dialog',
    templateUrl: './entity-with-service-impl-pagination-and-dto-delete-dialog.component.html'
})
export class EntityWithServiceImplPaginationAndDTODeleteDialogComponent {
    entityWithServiceImplPaginationAndDTO: IEntityWithServiceImplPaginationAndDTO;

    constructor(
        protected entityWithServiceImplPaginationAndDTOService: EntityWithServiceImplPaginationAndDTOService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.entityWithServiceImplPaginationAndDTOService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'entityWithServiceImplPaginationAndDTOListModification',
                content: 'Deleted an entityWithServiceImplPaginationAndDTO'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'my-prefix-entity-with-service-impl-pagination-and-dto-delete-popup',
    template: ''
})
export class EntityWithServiceImplPaginationAndDTODeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ entityWithServiceImplPaginationAndDTO }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(EntityWithServiceImplPaginationAndDTODeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.entityWithServiceImplPaginationAndDTO = entityWithServiceImplPaginationAndDTO;
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
