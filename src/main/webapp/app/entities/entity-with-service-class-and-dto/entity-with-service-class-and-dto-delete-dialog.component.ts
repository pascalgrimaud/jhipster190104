import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IEntityWithServiceClassAndDTO } from 'app/shared/model/entity-with-service-class-and-dto.model';
import { EntityWithServiceClassAndDTOService } from './entity-with-service-class-and-dto.service';

@Component({
    selector: 'my-prefix-entity-with-service-class-and-dto-delete-dialog',
    templateUrl: './entity-with-service-class-and-dto-delete-dialog.component.html'
})
export class EntityWithServiceClassAndDTODeleteDialogComponent {
    entityWithServiceClassAndDTO: IEntityWithServiceClassAndDTO;

    constructor(
        protected entityWithServiceClassAndDTOService: EntityWithServiceClassAndDTOService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.entityWithServiceClassAndDTOService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'entityWithServiceClassAndDTOListModification',
                content: 'Deleted an entityWithServiceClassAndDTO'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'my-prefix-entity-with-service-class-and-dto-delete-popup',
    template: ''
})
export class EntityWithServiceClassAndDTODeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ entityWithServiceClassAndDTO }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(EntityWithServiceClassAndDTODeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.entityWithServiceClassAndDTO = entityWithServiceClassAndDTO;
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
