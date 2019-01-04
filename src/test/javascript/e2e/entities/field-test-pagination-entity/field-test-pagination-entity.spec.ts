/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
    FieldTestPaginationEntityComponentsPage,
    FieldTestPaginationEntityDeleteDialog,
    FieldTestPaginationEntityUpdatePage
} from './field-test-pagination-entity.page-object';
import * as path from 'path';

const expect = chai.expect;

describe('FieldTestPaginationEntity e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let fieldTestPaginationEntityUpdatePage: FieldTestPaginationEntityUpdatePage;
    let fieldTestPaginationEntityComponentsPage: FieldTestPaginationEntityComponentsPage;
    let fieldTestPaginationEntityDeleteDialog: FieldTestPaginationEntityDeleteDialog;
    const fileNameToUpload = 'logo-jhipster.png';
    const fileToUpload = '../../../../../main/webapp/content/images/' + fileNameToUpload;
    const absolutePath = path.resolve(__dirname, fileToUpload);

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load FieldTestPaginationEntities', async () => {
        await navBarPage.goToEntity('field-test-pagination-entity');
        fieldTestPaginationEntityComponentsPage = new FieldTestPaginationEntityComponentsPage();
        expect(await fieldTestPaginationEntityComponentsPage.getTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestPaginationEntity.home.title'
        );
    });

    it('should load create FieldTestPaginationEntity page', async () => {
        await fieldTestPaginationEntityComponentsPage.clickOnCreateButton();
        fieldTestPaginationEntityUpdatePage = new FieldTestPaginationEntityUpdatePage();
        expect(await fieldTestPaginationEntityUpdatePage.getPageTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestPaginationEntity.home.createOrEditLabel'
        );
        await fieldTestPaginationEntityUpdatePage.cancel();
    });

    it('should create and save FieldTestPaginationEntities', async () => {
        const nbButtonsBeforeCreate = await fieldTestPaginationEntityComponentsPage.countDeleteButtons();

        await fieldTestPaginationEntityComponentsPage.clickOnCreateButton();
        await promise.all([
            fieldTestPaginationEntityUpdatePage.setStringAliceInput('stringAlice'),
            fieldTestPaginationEntityUpdatePage.setStringRequiredAliceInput('stringRequiredAlice'),
            fieldTestPaginationEntityUpdatePage.setStringMinlengthAliceInput('stringMinlengthAlice'),
            fieldTestPaginationEntityUpdatePage.setStringMaxlengthAliceInput('stringMaxlengthAlice'),
            fieldTestPaginationEntityUpdatePage.setStringPatternAliceInput('stringPatternAlice'),
            fieldTestPaginationEntityUpdatePage.setIntegerAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setIntegerRequiredAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setIntegerMinAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setIntegerMaxAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setLongAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setLongRequiredAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setLongMinAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setLongMaxAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setFloatAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setFloatRequiredAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setFloatMinAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setFloatMaxAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setDoubleRequiredAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setDoubleMinAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setDoubleMaxAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setBigDecimalRequiredAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setBigDecimalMinAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setBigDecimalMaxAliceInput('5'),
            fieldTestPaginationEntityUpdatePage.setLocalDateAliceInput('2000-12-31'),
            fieldTestPaginationEntityUpdatePage.setLocalDateRequiredAliceInput('2000-12-31'),
            fieldTestPaginationEntityUpdatePage.setInstantAliceInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestPaginationEntityUpdatePage.setInstanteRequiredAliceInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestPaginationEntityUpdatePage.setZonedDateTimeAliceInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestPaginationEntityUpdatePage.setZonedDateTimeRequiredAliceInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestPaginationEntityUpdatePage.enumAliceSelectLastOption(),
            fieldTestPaginationEntityUpdatePage.enumRequiredAliceSelectLastOption(),
            fieldTestPaginationEntityUpdatePage.setByteImageAliceInput(absolutePath),
            fieldTestPaginationEntityUpdatePage.setByteImageRequiredAliceInput(absolutePath),
            fieldTestPaginationEntityUpdatePage.setByteImageMinbytesAliceInput(absolutePath),
            fieldTestPaginationEntityUpdatePage.setByteImageMaxbytesAliceInput(absolutePath),
            fieldTestPaginationEntityUpdatePage.setByteAnyAliceInput(absolutePath),
            fieldTestPaginationEntityUpdatePage.setByteAnyRequiredAliceInput(absolutePath),
            fieldTestPaginationEntityUpdatePage.setByteAnyMinbytesAliceInput(absolutePath),
            fieldTestPaginationEntityUpdatePage.setByteAnyMaxbytesAliceInput(absolutePath),
            fieldTestPaginationEntityUpdatePage.setByteTextAliceInput('byteTextAlice'),
            fieldTestPaginationEntityUpdatePage.setByteTextRequiredAliceInput('byteTextRequiredAlice'),
            fieldTestPaginationEntityUpdatePage.setByteTextMinbytesAliceInput('byteTextMinbytesAlice'),
            fieldTestPaginationEntityUpdatePage.setByteTextMaxbytesAliceInput('byteTextMaxbytesAlice')
        ]);
        expect(await fieldTestPaginationEntityUpdatePage.getStringAliceInput()).to.eq('stringAlice');
        expect(await fieldTestPaginationEntityUpdatePage.getStringRequiredAliceInput()).to.eq('stringRequiredAlice');
        expect(await fieldTestPaginationEntityUpdatePage.getStringMinlengthAliceInput()).to.eq('stringMinlengthAlice');
        expect(await fieldTestPaginationEntityUpdatePage.getStringMaxlengthAliceInput()).to.eq('stringMaxlengthAlice');
        expect(await fieldTestPaginationEntityUpdatePage.getStringPatternAliceInput()).to.eq('stringPatternAlice');
        expect(await fieldTestPaginationEntityUpdatePage.getIntegerAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getIntegerRequiredAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getIntegerMinAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getIntegerMaxAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getLongAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getLongRequiredAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getLongMinAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getLongMaxAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getFloatAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getFloatRequiredAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getFloatMinAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getFloatMaxAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getDoubleRequiredAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getDoubleMinAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getDoubleMaxAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getBigDecimalRequiredAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getBigDecimalMinAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getBigDecimalMaxAliceInput()).to.eq('5');
        expect(await fieldTestPaginationEntityUpdatePage.getLocalDateAliceInput()).to.eq('2000-12-31');
        expect(await fieldTestPaginationEntityUpdatePage.getLocalDateRequiredAliceInput()).to.eq('2000-12-31');
        expect(await fieldTestPaginationEntityUpdatePage.getInstantAliceInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestPaginationEntityUpdatePage.getInstanteRequiredAliceInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestPaginationEntityUpdatePage.getZonedDateTimeAliceInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestPaginationEntityUpdatePage.getZonedDateTimeRequiredAliceInput()).to.contain('2001-01-01T02:30');
        const selectedBooleanAlice = fieldTestPaginationEntityUpdatePage.getBooleanAliceInput();
        if (await selectedBooleanAlice.isSelected()) {
            await fieldTestPaginationEntityUpdatePage.getBooleanAliceInput().click();
            expect(await fieldTestPaginationEntityUpdatePage.getBooleanAliceInput().isSelected()).to.be.false;
        } else {
            await fieldTestPaginationEntityUpdatePage.getBooleanAliceInput().click();
            expect(await fieldTestPaginationEntityUpdatePage.getBooleanAliceInput().isSelected()).to.be.true;
        }
        const selectedBooleanRequiredAlice = fieldTestPaginationEntityUpdatePage.getBooleanRequiredAliceInput();
        if (await selectedBooleanRequiredAlice.isSelected()) {
            await fieldTestPaginationEntityUpdatePage.getBooleanRequiredAliceInput().click();
            expect(await fieldTestPaginationEntityUpdatePage.getBooleanRequiredAliceInput().isSelected()).to.be.false;
        } else {
            await fieldTestPaginationEntityUpdatePage.getBooleanRequiredAliceInput().click();
            expect(await fieldTestPaginationEntityUpdatePage.getBooleanRequiredAliceInput().isSelected()).to.be.true;
        }
        expect(await fieldTestPaginationEntityUpdatePage.getByteImageAliceInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPaginationEntityUpdatePage.getByteImageRequiredAliceInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPaginationEntityUpdatePage.getByteImageMinbytesAliceInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPaginationEntityUpdatePage.getByteImageMaxbytesAliceInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPaginationEntityUpdatePage.getByteAnyAliceInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPaginationEntityUpdatePage.getByteAnyRequiredAliceInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPaginationEntityUpdatePage.getByteAnyMinbytesAliceInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPaginationEntityUpdatePage.getByteAnyMaxbytesAliceInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPaginationEntityUpdatePage.getByteTextAliceInput()).to.eq('byteTextAlice');
        expect(await fieldTestPaginationEntityUpdatePage.getByteTextRequiredAliceInput()).to.eq('byteTextRequiredAlice');
        expect(await fieldTestPaginationEntityUpdatePage.getByteTextMinbytesAliceInput()).to.eq('byteTextMinbytesAlice');
        expect(await fieldTestPaginationEntityUpdatePage.getByteTextMaxbytesAliceInput()).to.eq('byteTextMaxbytesAlice');
        await fieldTestPaginationEntityUpdatePage.save();
        expect(await fieldTestPaginationEntityUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await fieldTestPaginationEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last FieldTestPaginationEntity', async () => {
        const nbButtonsBeforeDelete = await fieldTestPaginationEntityComponentsPage.countDeleteButtons();
        await fieldTestPaginationEntityComponentsPage.clickOnLastDeleteButton();

        fieldTestPaginationEntityDeleteDialog = new FieldTestPaginationEntityDeleteDialog();
        expect(await fieldTestPaginationEntityDeleteDialog.getDialogTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestPaginationEntity.delete.question'
        );
        await fieldTestPaginationEntityDeleteDialog.clickOnConfirmButton();

        expect(await fieldTestPaginationEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
