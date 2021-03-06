import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IEntityWithServiceClass } from 'app/shared/model/entity-with-service-class.model';
import { EntityWithServiceClassService } from './entity-with-service-class.service';

@Component({
    selector: 'my-prefix-entity-with-service-class-delete-dialog',
    templateUrl: './entity-with-service-class-delete-dialog.component.html'
})
export class EntityWithServiceClassDeleteDialogComponent {
    entityWithServiceClass: IEntityWithServiceClass;

    constructor(
        protected entityWithServiceClassService: EntityWithServiceClassService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.entityWithServiceClassService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'entityWithServiceClassListModification',
                content: 'Deleted an entityWithServiceClass'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'my-prefix-entity-with-service-class-delete-popup',
    template: ''
})
export class EntityWithServiceClassDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ entityWithServiceClass }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(EntityWithServiceClassDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.entityWithServiceClass = entityWithServiceClass;
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
