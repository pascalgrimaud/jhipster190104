/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { FieldTestEntityComponentsPage, FieldTestEntityDeleteDialog, FieldTestEntityUpdatePage } from './field-test-entity.page-object';
import * as path from 'path';

const expect = chai.expect;

describe('FieldTestEntity e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let fieldTestEntityUpdatePage: FieldTestEntityUpdatePage;
    let fieldTestEntityComponentsPage: FieldTestEntityComponentsPage;
    let fieldTestEntityDeleteDialog: FieldTestEntityDeleteDialog;
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

    it('should load FieldTestEntities', async () => {
        await navBarPage.goToEntity('field-test-entity');
        fieldTestEntityComponentsPage = new FieldTestEntityComponentsPage();
        expect(await fieldTestEntityComponentsPage.getTitle()).to.eq('jhipsterSampleApplicationApp.fieldTestEntity.home.title');
    });

    it('should load create FieldTestEntity page', async () => {
        await fieldTestEntityComponentsPage.clickOnCreateButton();
        fieldTestEntityUpdatePage = new FieldTestEntityUpdatePage();
        expect(await fieldTestEntityUpdatePage.getPageTitle()).to.eq('jhipsterSampleApplicationApp.fieldTestEntity.home.createOrEditLabel');
        await fieldTestEntityUpdatePage.cancel();
    });

    it('should create and save FieldTestEntities', async () => {
        const nbButtonsBeforeCreate = await fieldTestEntityComponentsPage.countDeleteButtons();

        await fieldTestEntityComponentsPage.clickOnCreateButton();
        await promise.all([
            fieldTestEntityUpdatePage.setStringTomInput('stringTom'),
            fieldTestEntityUpdatePage.setStringRequiredTomInput('stringRequiredTom'),
            fieldTestEntityUpdatePage.setStringMinlengthTomInput('stringMinlengthTom'),
            fieldTestEntityUpdatePage.setStringMaxlengthTomInput('stringMaxlengthTom'),
            fieldTestEntityUpdatePage.setStringPatternTomInput('stringPatternTom'),
            fieldTestEntityUpdatePage.setIntegerTomInput('5'),
            fieldTestEntityUpdatePage.setIntegerRequiredTomInput('5'),
            fieldTestEntityUpdatePage.setIntegerMinTomInput('5'),
            fieldTestEntityUpdatePage.setIntegerMaxTomInput('5'),
            fieldTestEntityUpdatePage.setLongTomInput('5'),
            fieldTestEntityUpdatePage.setLongRequiredTomInput('5'),
            fieldTestEntityUpdatePage.setLongMinTomInput('5'),
            fieldTestEntityUpdatePage.setLongMaxTomInput('5'),
            fieldTestEntityUpdatePage.setFloatTomInput('5'),
            fieldTestEntityUpdatePage.setFloatRequiredTomInput('5'),
            fieldTestEntityUpdatePage.setFloatMinTomInput('5'),
            fieldTestEntityUpdatePage.setFloatMaxTomInput('5'),
            fieldTestEntityUpdatePage.setDoubleRequiredTomInput('5'),
            fieldTestEntityUpdatePage.setDoubleMinTomInput('5'),
            fieldTestEntityUpdatePage.setDoubleMaxTomInput('5'),
            fieldTestEntityUpdatePage.setBigDecimalRequiredTomInput('5'),
            fieldTestEntityUpdatePage.setBigDecimalMinTomInput('5'),
            fieldTestEntityUpdatePage.setBigDecimalMaxTomInput('5'),
            fieldTestEntityUpdatePage.setLocalDateTomInput('2000-12-31'),
            fieldTestEntityUpdatePage.setLocalDateRequiredTomInput('2000-12-31'),
            fieldTestEntityUpdatePage.setInstantTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestEntityUpdatePage.setInstantRequiredTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestEntityUpdatePage.setZonedDateTimeTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestEntityUpdatePage.setZonedDateTimeRequiredTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestEntityUpdatePage.enumTomSelectLastOption(),
            fieldTestEntityUpdatePage.enumRequiredTomSelectLastOption(),
            fieldTestEntityUpdatePage.setByteImageTomInput(absolutePath),
            fieldTestEntityUpdatePage.setByteImageRequiredTomInput(absolutePath),
            fieldTestEntityUpdatePage.setByteImageMinbytesTomInput(absolutePath),
            fieldTestEntityUpdatePage.setByteImageMaxbytesTomInput(absolutePath),
            fieldTestEntityUpdatePage.setByteAnyTomInput(absolutePath),
            fieldTestEntityUpdatePage.setByteAnyRequiredTomInput(absolutePath),
            fieldTestEntityUpdatePage.setByteAnyMinbytesTomInput(absolutePath),
            fieldTestEntityUpdatePage.setByteAnyMaxbytesTomInput(absolutePath),
            fieldTestEntityUpdatePage.setByteTextTomInput('byteTextTom'),
            fieldTestEntityUpdatePage.setByteTextRequiredTomInput('byteTextRequiredTom'),
            fieldTestEntityUpdatePage.setByteTextMinbytesTomInput('byteTextMinbytesTom'),
            fieldTestEntityUpdatePage.setByteTextMaxbytesTomInput('byteTextMaxbytesTom')
        ]);
        expect(await fieldTestEntityUpdatePage.getStringTomInput()).to.eq('stringTom');
        expect(await fieldTestEntityUpdatePage.getStringRequiredTomInput()).to.eq('stringRequiredTom');
        expect(await fieldTestEntityUpdatePage.getStringMinlengthTomInput()).to.eq('stringMinlengthTom');
        expect(await fieldTestEntityUpdatePage.getStringMaxlengthTomInput()).to.eq('stringMaxlengthTom');
        expect(await fieldTestEntityUpdatePage.getStringPatternTomInput()).to.eq('stringPatternTom');
        expect(await fieldTestEntityUpdatePage.getIntegerTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getIntegerRequiredTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getIntegerMinTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getIntegerMaxTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getLongTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getLongRequiredTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getLongMinTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getLongMaxTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getFloatTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getFloatRequiredTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getFloatMinTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getFloatMaxTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getDoubleRequiredTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getDoubleMinTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getDoubleMaxTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getBigDecimalRequiredTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getBigDecimalMinTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getBigDecimalMaxTomInput()).to.eq('5');
        expect(await fieldTestEntityUpdatePage.getLocalDateTomInput()).to.eq('2000-12-31');
        expect(await fieldTestEntityUpdatePage.getLocalDateRequiredTomInput()).to.eq('2000-12-31');
        expect(await fieldTestEntityUpdatePage.getInstantTomInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestEntityUpdatePage.getInstantRequiredTomInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestEntityUpdatePage.getZonedDateTimeTomInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestEntityUpdatePage.getZonedDateTimeRequiredTomInput()).to.contain('2001-01-01T02:30');
        const selectedBooleanTom = fieldTestEntityUpdatePage.getBooleanTomInput();
        if (await selectedBooleanTom.isSelected()) {
            await fieldTestEntityUpdatePage.getBooleanTomInput().click();
            expect(await fieldTestEntityUpdatePage.getBooleanTomInput().isSelected()).to.be.false;
        } else {
            await fieldTestEntityUpdatePage.getBooleanTomInput().click();
            expect(await fieldTestEntityUpdatePage.getBooleanTomInput().isSelected()).to.be.true;
        }
        const selectedBooleanRequiredTom = fieldTestEntityUpdatePage.getBooleanRequiredTomInput();
        if (await selectedBooleanRequiredTom.isSelected()) {
            await fieldTestEntityUpdatePage.getBooleanRequiredTomInput().click();
            expect(await fieldTestEntityUpdatePage.getBooleanRequiredTomInput().isSelected()).to.be.false;
        } else {
            await fieldTestEntityUpdatePage.getBooleanRequiredTomInput().click();
            expect(await fieldTestEntityUpdatePage.getBooleanRequiredTomInput().isSelected()).to.be.true;
        }
        expect(await fieldTestEntityUpdatePage.getByteImageTomInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestEntityUpdatePage.getByteImageRequiredTomInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestEntityUpdatePage.getByteImageMinbytesTomInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestEntityUpdatePage.getByteImageMaxbytesTomInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestEntityUpdatePage.getByteAnyTomInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestEntityUpdatePage.getByteAnyRequiredTomInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestEntityUpdatePage.getByteAnyMinbytesTomInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestEntityUpdatePage.getByteAnyMaxbytesTomInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestEntityUpdatePage.getByteTextTomInput()).to.eq('byteTextTom');
        expect(await fieldTestEntityUpdatePage.getByteTextRequiredTomInput()).to.eq('byteTextRequiredTom');
        expect(await fieldTestEntityUpdatePage.getByteTextMinbytesTomInput()).to.eq('byteTextMinbytesTom');
        expect(await fieldTestEntityUpdatePage.getByteTextMaxbytesTomInput()).to.eq('byteTextMaxbytesTom');
        await fieldTestEntityUpdatePage.save();
        expect(await fieldTestEntityUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await fieldTestEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last FieldTestEntity', async () => {
        const nbButtonsBeforeDelete = await fieldTestEntityComponentsPage.countDeleteButtons();
        await fieldTestEntityComponentsPage.clickOnLastDeleteButton();

        fieldTestEntityDeleteDialog = new FieldTestEntityDeleteDialog();
        expect(await fieldTestEntityDeleteDialog.getDialogTitle()).to.eq('jhipsterSampleApplicationApp.fieldTestEntity.delete.question');
        await fieldTestEntityDeleteDialog.clickOnConfirmButton();

        expect(await fieldTestEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
