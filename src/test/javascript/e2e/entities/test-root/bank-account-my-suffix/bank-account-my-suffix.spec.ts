/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../../page-objects/jhi-page-objects';

import { BankAccountComponentsPage, BankAccountDeleteDialog, BankAccountUpdatePage } from './bank-account-my-suffix.page-object';
import * as path from 'path';

const expect = chai.expect;

describe('BankAccount e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let bankAccountUpdatePage: BankAccountUpdatePage;
    let bankAccountComponentsPage: BankAccountComponentsPage;
    let bankAccountDeleteDialog: BankAccountDeleteDialog;
    const fileNameToUpload = 'logo-jhipster.png';
    const fileToUpload = '../../../../../../main/webapp/content/images/' + fileNameToUpload;
    const absolutePath = path.resolve(__dirname, fileToUpload);

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load BankAccounts', async () => {
        await navBarPage.goToEntity('bank-account-my-suffix');
        bankAccountComponentsPage = new BankAccountComponentsPage();
        expect(await bankAccountComponentsPage.getTitle()).to.eq('jhipsterSampleApplicationApp.testRootBankAccount.home.title');
    });

    it('should load create BankAccount page', async () => {
        await bankAccountComponentsPage.clickOnCreateButton();
        bankAccountUpdatePage = new BankAccountUpdatePage();
        expect(await bankAccountUpdatePage.getPageTitle()).to.eq('jhipsterSampleApplicationApp.testRootBankAccount.home.createOrEditLabel');
        await bankAccountUpdatePage.cancel();
    });

    it('should create and save BankAccounts', async () => {
        const nbButtonsBeforeCreate = await bankAccountComponentsPage.countDeleteButtons();

        await bankAccountComponentsPage.clickOnCreateButton();
        await promise.all([
            bankAccountUpdatePage.setNameInput('name'),
            bankAccountUpdatePage.setBankNumberInput('5'),
            bankAccountUpdatePage.setAgencyNumberInput('5'),
            bankAccountUpdatePage.setLastOperationDurationInput('5'),
            bankAccountUpdatePage.setMeanOperationDurationInput('5'),
            bankAccountUpdatePage.setBalanceInput('5'),
            bankAccountUpdatePage.setOpeningDayInput('2000-12-31'),
            bankAccountUpdatePage.setLastOperationDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            bankAccountUpdatePage.accountTypeSelectLastOption(),
            bankAccountUpdatePage.setAttachmentInput(absolutePath),
            bankAccountUpdatePage.setDescriptionInput('description'),
            bankAccountUpdatePage.userSelectLastOption()
        ]);
        expect(await bankAccountUpdatePage.getNameInput()).to.eq('name');
        expect(await bankAccountUpdatePage.getBankNumberInput()).to.eq('5');
        expect(await bankAccountUpdatePage.getAgencyNumberInput()).to.eq('5');
        expect(await bankAccountUpdatePage.getLastOperationDurationInput()).to.eq('5');
        expect(await bankAccountUpdatePage.getMeanOperationDurationInput()).to.eq('5');
        expect(await bankAccountUpdatePage.getBalanceInput()).to.eq('5');
        expect(await bankAccountUpdatePage.getOpeningDayInput()).to.eq('2000-12-31');
        expect(await bankAccountUpdatePage.getLastOperationDateInput()).to.contain('2001-01-01T02:30');
        const selectedActive = bankAccountUpdatePage.getActiveInput();
        if (await selectedActive.isSelected()) {
            await bankAccountUpdatePage.getActiveInput().click();
            expect(await bankAccountUpdatePage.getActiveInput().isSelected()).to.be.false;
        } else {
            await bankAccountUpdatePage.getActiveInput().click();
            expect(await bankAccountUpdatePage.getActiveInput().isSelected()).to.be.true;
        }
        expect(await bankAccountUpdatePage.getAttachmentInput()).to.endsWith(fileNameToUpload);
        expect(await bankAccountUpdatePage.getDescriptionInput()).to.eq('description');
        await bankAccountUpdatePage.save();
        expect(await bankAccountUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await bankAccountComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last BankAccount', async () => {
        const nbButtonsBeforeDelete = await bankAccountComponentsPage.countDeleteButtons();
        await bankAccountComponentsPage.clickOnLastDeleteButton();

        bankAccountDeleteDialog = new BankAccountDeleteDialog();
        expect(await bankAccountDeleteDialog.getDialogTitle()).to.eq('jhipsterSampleApplicationApp.testRootBankAccount.delete.question');
        await bankAccountDeleteDialog.clickOnConfirmButton();

        expect(await bankAccountComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
