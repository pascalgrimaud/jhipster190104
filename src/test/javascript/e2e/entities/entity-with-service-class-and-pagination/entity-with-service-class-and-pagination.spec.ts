/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
    EntityWithServiceClassAndPaginationComponentsPage,
    EntityWithServiceClassAndPaginationDeleteDialog,
    EntityWithServiceClassAndPaginationUpdatePage
} from './entity-with-service-class-and-pagination.page-object';

const expect = chai.expect;

describe('EntityWithServiceClassAndPagination e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let entityWithServiceClassAndPaginationUpdatePage: EntityWithServiceClassAndPaginationUpdatePage;
    let entityWithServiceClassAndPaginationComponentsPage: EntityWithServiceClassAndPaginationComponentsPage;
    let entityWithServiceClassAndPaginationDeleteDialog: EntityWithServiceClassAndPaginationDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load EntityWithServiceClassAndPaginations', async () => {
        await navBarPage.goToEntity('entity-with-service-class-and-pagination');
        entityWithServiceClassAndPaginationComponentsPage = new EntityWithServiceClassAndPaginationComponentsPage();
        expect(await entityWithServiceClassAndPaginationComponentsPage.getTitle()).to.eq(
            'jhipsterSampleApplicationApp.entityWithServiceClassAndPagination.home.title'
        );
    });

    it('should load create EntityWithServiceClassAndPagination page', async () => {
        await entityWithServiceClassAndPaginationComponentsPage.clickOnCreateButton();
        entityWithServiceClassAndPaginationUpdatePage = new EntityWithServiceClassAndPaginationUpdatePage();
        expect(await entityWithServiceClassAndPaginationUpdatePage.getPageTitle()).to.eq(
            'jhipsterSampleApplicationApp.entityWithServiceClassAndPagination.home.createOrEditLabel'
        );
        await entityWithServiceClassAndPaginationUpdatePage.cancel();
    });

    it('should create and save EntityWithServiceClassAndPaginations', async () => {
        const nbButtonsBeforeCreate = await entityWithServiceClassAndPaginationComponentsPage.countDeleteButtons();

        await entityWithServiceClassAndPaginationComponentsPage.clickOnCreateButton();
        await promise.all([entityWithServiceClassAndPaginationUpdatePage.setEnzoInput('enzo')]);
        expect(await entityWithServiceClassAndPaginationUpdatePage.getEnzoInput()).to.eq('enzo');
        await entityWithServiceClassAndPaginationUpdatePage.save();
        expect(await entityWithServiceClassAndPaginationUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await entityWithServiceClassAndPaginationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last EntityWithServiceClassAndPagination', async () => {
        const nbButtonsBeforeDelete = await entityWithServiceClassAndPaginationComponentsPage.countDeleteButtons();
        await entityWithServiceClassAndPaginationComponentsPage.clickOnLastDeleteButton();

        entityWithServiceClassAndPaginationDeleteDialog = new EntityWithServiceClassAndPaginationDeleteDialog();
        expect(await entityWithServiceClassAndPaginationDeleteDialog.getDialogTitle()).to.eq(
            'jhipsterSampleApplicationApp.entityWithServiceClassAndPagination.delete.question'
        );
        await entityWithServiceClassAndPaginationDeleteDialog.clickOnConfirmButton();

        expect(await entityWithServiceClassAndPaginationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
