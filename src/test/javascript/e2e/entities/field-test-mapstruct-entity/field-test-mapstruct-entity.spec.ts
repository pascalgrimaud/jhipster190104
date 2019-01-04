/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
    FieldTestMapstructEntityComponentsPage,
    FieldTestMapstructEntityDeleteDialog,
    FieldTestMapstructEntityUpdatePage
} from './field-test-mapstruct-entity.page-object';
import * as path from 'path';

const expect = chai.expect;

describe('FieldTestMapstructEntity e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let fieldTestMapstructEntityUpdatePage: FieldTestMapstructEntityUpdatePage;
    let fieldTestMapstructEntityComponentsPage: FieldTestMapstructEntityComponentsPage;
    let fieldTestMapstructEntityDeleteDialog: FieldTestMapstructEntityDeleteDialog;
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

    it('should load FieldTestMapstructEntities', async () => {
        await navBarPage.goToEntity('field-test-mapstruct-entity');
        fieldTestMapstructEntityComponentsPage = new FieldTestMapstructEntityComponentsPage();
        expect(await fieldTestMapstructEntityComponentsPage.getTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestMapstructEntity.home.title'
        );
    });

    it('should load create FieldTestMapstructEntity page', async () => {
        await fieldTestMapstructEntityComponentsPage.clickOnCreateButton();
        fieldTestMapstructEntityUpdatePage = new FieldTestMapstructEntityUpdatePage();
        expect(await fieldTestMapstructEntityUpdatePage.getPageTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestMapstructEntity.home.createOrEditLabel'
        );
        await fieldTestMapstructEntityUpdatePage.cancel();
    });

    it('should create and save FieldTestMapstructEntities', async () => {
        const nbButtonsBeforeCreate = await fieldTestMapstructEntityComponentsPage.countDeleteButtons();

        await fieldTestMapstructEntityComponentsPage.clickOnCreateButton();
        await promise.all([
            fieldTestMapstructEntityUpdatePage.setStringEvaInput('stringEva'),
            fieldTestMapstructEntityUpdatePage.setStringRequiredEvaInput('stringRequiredEva'),
            fieldTestMapstructEntityUpdatePage.setStringMinlengthEvaInput('stringMinlengthEva'),
            fieldTestMapstructEntityUpdatePage.setStringMaxlengthEvaInput('stringMaxlengthEva'),
            fieldTestMapstructEntityUpdatePage.setStringPatternEvaInput('stringPatternEva'),
            fieldTestMapstructEntityUpdatePage.setIntegerEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setIntegerRequiredEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setIntegerMinEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setIntegerMaxEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setLongEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setLongRequiredEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setLongMinEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setLongMaxEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setFloatEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setFloatRequiredEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setFloatMinEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setFloatMaxEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setDoubleRequiredEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setDoubleMinEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setDoubleMaxEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setBigDecimalRequiredEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setBigDecimalMinEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setBigDecimalMaxEvaInput('5'),
            fieldTestMapstructEntityUpdatePage.setLocalDateEvaInput('2000-12-31'),
            fieldTestMapstructEntityUpdatePage.setLocalDateRequiredEvaInput('2000-12-31'),
            fieldTestMapstructEntityUpdatePage.setInstantEvaInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestMapstructEntityUpdatePage.setInstanteRequiredEvaInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestMapstructEntityUpdatePage.setZonedDateTimeEvaInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestMapstructEntityUpdatePage.setZonedDateTimeRequiredEvaInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestMapstructEntityUpdatePage.enumEvaSelectLastOption(),
            fieldTestMapstructEntityUpdatePage.enumRequiredEvaSelectLastOption(),
            fieldTestMapstructEntityUpdatePage.setByteImageEvaInput(absolutePath),
            fieldTestMapstructEntityUpdatePage.setByteImageRequiredEvaInput(absolutePath),
            fieldTestMapstructEntityUpdatePage.setByteImageMinbytesEvaInput(absolutePath),
            fieldTestMapstructEntityUpdatePage.setByteImageMaxbytesEvaInput(absolutePath),
            fieldTestMapstructEntityUpdatePage.setByteAnyEvaInput(absolutePath),
            fieldTestMapstructEntityUpdatePage.setByteAnyRequiredEvaInput(absolutePath),
            fieldTestMapstructEntityUpdatePage.setByteAnyMinbytesEvaInput(absolutePath),
            fieldTestMapstructEntityUpdatePage.setByteAnyMaxbytesEvaInput(absolutePath),
            fieldTestMapstructEntityUpdatePage.setByteTextEvaInput('byteTextEva'),
            fieldTestMapstructEntityUpdatePage.setByteTextRequiredEvaInput('byteTextRequiredEva'),
            fieldTestMapstructEntityUpdatePage.setByteTextMinbytesEvaInput('byteTextMinbytesEva'),
            fieldTestMapstructEntityUpdatePage.setByteTextMaxbytesEvaInput('byteTextMaxbytesEva')
        ]);
        expect(await fieldTestMapstructEntityUpdatePage.getStringEvaInput()).to.eq('stringEva');
        expect(await fieldTestMapstructEntityUpdatePage.getStringRequiredEvaInput()).to.eq('stringRequiredEva');
        expect(await fieldTestMapstructEntityUpdatePage.getStringMinlengthEvaInput()).to.eq('stringMinlengthEva');
        expect(await fieldTestMapstructEntityUpdatePage.getStringMaxlengthEvaInput()).to.eq('stringMaxlengthEva');
        expect(await fieldTestMapstructEntityUpdatePage.getStringPatternEvaInput()).to.eq('stringPatternEva');
        expect(await fieldTestMapstructEntityUpdatePage.getIntegerEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getIntegerRequiredEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getIntegerMinEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getIntegerMaxEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getLongEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getLongRequiredEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getLongMinEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getLongMaxEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getFloatEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getFloatRequiredEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getFloatMinEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getFloatMaxEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getDoubleRequiredEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getDoubleMinEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getDoubleMaxEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getBigDecimalRequiredEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getBigDecimalMinEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getBigDecimalMaxEvaInput()).to.eq('5');
        expect(await fieldTestMapstructEntityUpdatePage.getLocalDateEvaInput()).to.eq('2000-12-31');
        expect(await fieldTestMapstructEntityUpdatePage.getLocalDateRequiredEvaInput()).to.eq('2000-12-31');
        expect(await fieldTestMapstructEntityUpdatePage.getInstantEvaInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestMapstructEntityUpdatePage.getInstanteRequiredEvaInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestMapstructEntityUpdatePage.getZonedDateTimeEvaInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestMapstructEntityUpdatePage.getZonedDateTimeRequiredEvaInput()).to.contain('2001-01-01T02:30');
        const selectedBooleanEva = fieldTestMapstructEntityUpdatePage.getBooleanEvaInput();
        if (await selectedBooleanEva.isSelected()) {
            await fieldTestMapstructEntityUpdatePage.getBooleanEvaInput().click();
            expect(await fieldTestMapstructEntityUpdatePage.getBooleanEvaInput().isSelected()).to.be.false;
        } else {
            await fieldTestMapstructEntityUpdatePage.getBooleanEvaInput().click();
            expect(await fieldTestMapstructEntityUpdatePage.getBooleanEvaInput().isSelected()).to.be.true;
        }
        const selectedBooleanRequiredEva = fieldTestMapstructEntityUpdatePage.getBooleanRequiredEvaInput();
        if (await selectedBooleanRequiredEva.isSelected()) {
            await fieldTestMapstructEntityUpdatePage.getBooleanRequiredEvaInput().click();
            expect(await fieldTestMapstructEntityUpdatePage.getBooleanRequiredEvaInput().isSelected()).to.be.false;
        } else {
            await fieldTestMapstructEntityUpdatePage.getBooleanRequiredEvaInput().click();
            expect(await fieldTestMapstructEntityUpdatePage.getBooleanRequiredEvaInput().isSelected()).to.be.true;
        }
        expect(await fieldTestMapstructEntityUpdatePage.getByteImageEvaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestMapstructEntityUpdatePage.getByteImageRequiredEvaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestMapstructEntityUpdatePage.getByteImageMinbytesEvaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestMapstructEntityUpdatePage.getByteImageMaxbytesEvaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestMapstructEntityUpdatePage.getByteAnyEvaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestMapstructEntityUpdatePage.getByteAnyRequiredEvaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestMapstructEntityUpdatePage.getByteAnyMinbytesEvaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestMapstructEntityUpdatePage.getByteAnyMaxbytesEvaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestMapstructEntityUpdatePage.getByteTextEvaInput()).to.eq('byteTextEva');
        expect(await fieldTestMapstructEntityUpdatePage.getByteTextRequiredEvaInput()).to.eq('byteTextRequiredEva');
        expect(await fieldTestMapstructEntityUpdatePage.getByteTextMinbytesEvaInput()).to.eq('byteTextMinbytesEva');
        expect(await fieldTestMapstructEntityUpdatePage.getByteTextMaxbytesEvaInput()).to.eq('byteTextMaxbytesEva');
        await fieldTestMapstructEntityUpdatePage.save();
        expect(await fieldTestMapstructEntityUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await fieldTestMapstructEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last FieldTestMapstructEntity', async () => {
        const nbButtonsBeforeDelete = await fieldTestMapstructEntityComponentsPage.countDeleteButtons();
        await fieldTestMapstructEntityComponentsPage.clickOnLastDeleteButton();

        fieldTestMapstructEntityDeleteDialog = new FieldTestMapstructEntityDeleteDialog();
        expect(await fieldTestMapstructEntityDeleteDialog.getDialogTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestMapstructEntity.delete.question'
        );
        await fieldTestMapstructEntityDeleteDialog.clickOnConfirmButton();

        expect(await fieldTestMapstructEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
