/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
    EntityWithServiceImplComponentsPage,
    EntityWithServiceImplDeleteDialog,
    EntityWithServiceImplUpdatePage
} from './entity-with-service-impl.page-object';

const expect = chai.expect;

describe('EntityWithServiceImpl e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let entityWithServiceImplUpdatePage: EntityWithServiceImplUpdatePage;
    let entityWithServiceImplComponentsPage: EntityWithServiceImplComponentsPage;
    let entityWithServiceImplDeleteDialog: EntityWithServiceImplDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load EntityWithServiceImpls', async () => {
        await navBarPage.goToEntity('entity-with-service-impl');
        entityWithServiceImplComponentsPage = new EntityWithServiceImplComponentsPage();
        expect(await entityWithServiceImplComponentsPage.getTitle()).to.eq('jhipsterSampleApplicationApp.entityWithServiceImpl.home.title');
    });

    it('should load create EntityWithServiceImpl page', async () => {
        await entityWithServiceImplComponentsPage.clickOnCreateButton();
        entityWithServiceImplUpdatePage = new EntityWithServiceImplUpdatePage();
        expect(await entityWithServiceImplUpdatePage.getPageTitle()).to.eq(
            'jhipsterSampleApplicationApp.entityWithServiceImpl.home.createOrEditLabel'
        );
        await entityWithServiceImplUpdatePage.cancel();
    });

    it('should create and save EntityWithServiceImpls', async () => {
        const nbButtonsBeforeCreate = await entityWithServiceImplComponentsPage.countDeleteButtons();

        await entityWithServiceImplComponentsPage.clickOnCreateButton();
        await promise.all([entityWithServiceImplUpdatePage.setClaraInput('clara')]);
        expect(await entityWithServiceImplUpdatePage.getClaraInput()).to.eq('clara');
        await entityWithServiceImplUpdatePage.save();
        expect(await entityWithServiceImplUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await entityWithServiceImplComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last EntityWithServiceImpl', async () => {
        const nbButtonsBeforeDelete = await entityWithServiceImplComponentsPage.countDeleteButtons();
        await entityWithServiceImplComponentsPage.clickOnLastDeleteButton();

        entityWithServiceImplDeleteDialog = new EntityWithServiceImplDeleteDialog();
        expect(await entityWithServiceImplDeleteDialog.getDialogTitle()).to.eq(
            'jhipsterSampleApplicationApp.entityWithServiceImpl.delete.question'
        );
        await entityWithServiceImplDeleteDialog.clickOnConfirmButton();

        expect(await entityWithServiceImplComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
