import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IEntityWithPaginationAndDTO } from 'app/shared/model/entity-with-pagination-and-dto.model';
import { EntityWithPaginationAndDTOService } from './entity-with-pagination-and-dto.service';

@Component({
    selector: 'my-prefix-entity-with-pagination-and-dto-delete-dialog',
    templateUrl: './entity-with-pagination-and-dto-delete-dialog.component.html'
})
export class EntityWithPaginationAndDTODeleteDialogComponent {
    entityWithPaginationAndDTO: IEntityWithPaginationAndDTO;

    constructor(
        protected entityWithPaginationAndDTOService: EntityWithPaginationAndDTOService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.entityWithPaginationAndDTOService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'entityWithPaginationAndDTOListModification',
                content: 'Deleted an entityWithPaginationAndDTO'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'my-prefix-entity-with-pagination-and-dto-delete-popup',
    template: ''
})
export class EntityWithPaginationAndDTODeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ entityWithPaginationAndDTO }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(EntityWithPaginationAndDTODeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.entityWithPaginationAndDTO = entityWithPaginationAndDTO;
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
