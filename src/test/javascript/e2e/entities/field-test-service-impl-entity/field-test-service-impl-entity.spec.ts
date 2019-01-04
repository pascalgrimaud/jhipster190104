/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
    FieldTestServiceImplEntityComponentsPage,
    FieldTestServiceImplEntityDeleteDialog,
    FieldTestServiceImplEntityUpdatePage
} from './field-test-service-impl-entity.page-object';
import * as path from 'path';

const expect = chai.expect;

describe('FieldTestServiceImplEntity e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let fieldTestServiceImplEntityUpdatePage: FieldTestServiceImplEntityUpdatePage;
    let fieldTestServiceImplEntityComponentsPage: FieldTestServiceImplEntityComponentsPage;
    let fieldTestServiceImplEntityDeleteDialog: FieldTestServiceImplEntityDeleteDialog;
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

    it('should load FieldTestServiceImplEntities', async () => {
        await navBarPage.goToEntity('field-test-service-impl-entity');
        fieldTestServiceImplEntityComponentsPage = new FieldTestServiceImplEntityComponentsPage();
        expect(await fieldTestServiceImplEntityComponentsPage.getTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestServiceImplEntity.home.title'
        );
    });

    it('should load create FieldTestServiceImplEntity page', async () => {
        await fieldTestServiceImplEntityComponentsPage.clickOnCreateButton();
        fieldTestServiceImplEntityUpdatePage = new FieldTestServiceImplEntityUpdatePage();
        expect(await fieldTestServiceImplEntityUpdatePage.getPageTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestServiceImplEntity.home.createOrEditLabel'
        );
        await fieldTestServiceImplEntityUpdatePage.cancel();
    });

    it('should create and save FieldTestServiceImplEntities', async () => {
        const nbButtonsBeforeCreate = await fieldTestServiceImplEntityComponentsPage.countDeleteButtons();

        await fieldTestServiceImplEntityComponentsPage.clickOnCreateButton();
        await promise.all([
            fieldTestServiceImplEntityUpdatePage.setStringMikaInput('stringMika'),
            fieldTestServiceImplEntityUpdatePage.setStringRequiredMikaInput('stringRequiredMika'),
            fieldTestServiceImplEntityUpdatePage.setStringMinlengthMikaInput('stringMinlengthMika'),
            fieldTestServiceImplEntityUpdatePage.setStringMaxlengthMikaInput('stringMaxlengthMika'),
            fieldTestServiceImplEntityUpdatePage.setStringPatternMikaInput('stringPatternMika'),
            fieldTestServiceImplEntityUpdatePage.setIntegerMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setIntegerRequiredMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setIntegerMinMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setIntegerMaxMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setLongMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setLongRequiredMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setLongMinMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setLongMaxMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setFloatMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setFloatRequiredMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setFloatMinMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setFloatMaxMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setDoubleRequiredMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setDoubleMinMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setDoubleMaxMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setBigDecimalRequiredMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setBigDecimalMinMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setBigDecimalMaxMikaInput('5'),
            fieldTestServiceImplEntityUpdatePage.setLocalDateMikaInput('2000-12-31'),
            fieldTestServiceImplEntityUpdatePage.setLocalDateRequiredMikaInput('2000-12-31'),
            fieldTestServiceImplEntityUpdatePage.setInstantMikaInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestServiceImplEntityUpdatePage.setInstanteRequiredMikaInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestServiceImplEntityUpdatePage.setZonedDateTimeMikaInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestServiceImplEntityUpdatePage.setZonedDateTimeRequiredMikaInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestServiceImplEntityUpdatePage.enumMikaSelectLastOption(),
            fieldTestServiceImplEntityUpdatePage.enumRequiredMikaSelectLastOption(),
            fieldTestServiceImplEntityUpdatePage.setByteImageMikaInput(absolutePath),
            fieldTestServiceImplEntityUpdatePage.setByteImageRequiredMikaInput(absolutePath),
            fieldTestServiceImplEntityUpdatePage.setByteImageMinbytesMikaInput(absolutePath),
            fieldTestServiceImplEntityUpdatePage.setByteImageMaxbytesMikaInput(absolutePath),
            fieldTestServiceImplEntityUpdatePage.setByteAnyMikaInput(absolutePath),
            fieldTestServiceImplEntityUpdatePage.setByteAnyRequiredMikaInput(absolutePath),
            fieldTestServiceImplEntityUpdatePage.setByteAnyMinbytesMikaInput(absolutePath),
            fieldTestServiceImplEntityUpdatePage.setByteAnyMaxbytesMikaInput(absolutePath),
            fieldTestServiceImplEntityUpdatePage.setByteTextMikaInput('byteTextMika'),
            fieldTestServiceImplEntityUpdatePage.setByteTextRequiredMikaInput('byteTextRequiredMika'),
            fieldTestServiceImplEntityUpdatePage.setByteTextMinbytesMikaInput('byteTextMinbytesMika'),
            fieldTestServiceImplEntityUpdatePage.setByteTextMaxbytesMikaInput('byteTextMaxbytesMika')
        ]);
        expect(await fieldTestServiceImplEntityUpdatePage.getStringMikaInput()).to.eq('stringMika');
        expect(await fieldTestServiceImplEntityUpdatePage.getStringRequiredMikaInput()).to.eq('stringRequiredMika');
        expect(await fieldTestServiceImplEntityUpdatePage.getStringMinlengthMikaInput()).to.eq('stringMinlengthMika');
        expect(await fieldTestServiceImplEntityUpdatePage.getStringMaxlengthMikaInput()).to.eq('stringMaxlengthMika');
        expect(await fieldTestServiceImplEntityUpdatePage.getStringPatternMikaInput()).to.eq('stringPatternMika');
        expect(await fieldTestServiceImplEntityUpdatePage.getIntegerMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getIntegerRequiredMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getIntegerMinMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getIntegerMaxMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getLongMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getLongRequiredMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getLongMinMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getLongMaxMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getFloatMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getFloatRequiredMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getFloatMinMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getFloatMaxMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getDoubleRequiredMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getDoubleMinMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getDoubleMaxMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getBigDecimalRequiredMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getBigDecimalMinMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getBigDecimalMaxMikaInput()).to.eq('5');
        expect(await fieldTestServiceImplEntityUpdatePage.getLocalDateMikaInput()).to.eq('2000-12-31');
        expect(await fieldTestServiceImplEntityUpdatePage.getLocalDateRequiredMikaInput()).to.eq('2000-12-31');
        expect(await fieldTestServiceImplEntityUpdatePage.getInstantMikaInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestServiceImplEntityUpdatePage.getInstanteRequiredMikaInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestServiceImplEntityUpdatePage.getZonedDateTimeMikaInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestServiceImplEntityUpdatePage.getZonedDateTimeRequiredMikaInput()).to.contain('2001-01-01T02:30');
        const selectedBooleanMika = fieldTestServiceImplEntityUpdatePage.getBooleanMikaInput();
        if (await selectedBooleanMika.isSelected()) {
            await fieldTestServiceImplEntityUpdatePage.getBooleanMikaInput().click();
            expect(await fieldTestServiceImplEntityUpdatePage.getBooleanMikaInput().isSelected()).to.be.false;
        } else {
            await fieldTestServiceImplEntityUpdatePage.getBooleanMikaInput().click();
            expect(await fieldTestServiceImplEntityUpdatePage.getBooleanMikaInput().isSelected()).to.be.true;
        }
        const selectedBooleanRequiredMika = fieldTestServiceImplEntityUpdatePage.getBooleanRequiredMikaInput();
        if (await selectedBooleanRequiredMika.isSelected()) {
            await fieldTestServiceImplEntityUpdatePage.getBooleanRequiredMikaInput().click();
            expect(await fieldTestServiceImplEntityUpdatePage.getBooleanRequiredMikaInput().isSelected()).to.be.false;
        } else {
            await fieldTestServiceImplEntityUpdatePage.getBooleanRequiredMikaInput().click();
            expect(await fieldTestServiceImplEntityUpdatePage.getBooleanRequiredMikaInput().isSelected()).to.be.true;
        }
        expect(await fieldTestServiceImplEntityUpdatePage.getByteImageMikaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceImplEntityUpdatePage.getByteImageRequiredMikaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceImplEntityUpdatePage.getByteImageMinbytesMikaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceImplEntityUpdatePage.getByteImageMaxbytesMikaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceImplEntityUpdatePage.getByteAnyMikaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceImplEntityUpdatePage.getByteAnyRequiredMikaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceImplEntityUpdatePage.getByteAnyMinbytesMikaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceImplEntityUpdatePage.getByteAnyMaxbytesMikaInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceImplEntityUpdatePage.getByteTextMikaInput()).to.eq('byteTextMika');
        expect(await fieldTestServiceImplEntityUpdatePage.getByteTextRequiredMikaInput()).to.eq('byteTextRequiredMika');
        expect(await fieldTestServiceImplEntityUpdatePage.getByteTextMinbytesMikaInput()).to.eq('byteTextMinbytesMika');
        expect(await fieldTestServiceImplEntityUpdatePage.getByteTextMaxbytesMikaInput()).to.eq('byteTextMaxbytesMika');
        await fieldTestServiceImplEntityUpdatePage.save();
        expect(await fieldTestServiceImplEntityUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await fieldTestServiceImplEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last FieldTestServiceImplEntity', async () => {
        const nbButtonsBeforeDelete = await fieldTestServiceImplEntityComponentsPage.countDeleteButtons();
        await fieldTestServiceImplEntityComponentsPage.clickOnLastDeleteButton();

        fieldTestServiceImplEntityDeleteDialog = new FieldTestServiceImplEntityDeleteDialog();
        expect(await fieldTestServiceImplEntityDeleteDialog.getDialogTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestServiceImplEntity.delete.question'
        );
        await fieldTestServiceImplEntityDeleteDialog.clickOnConfirmButton();

        expect(await fieldTestServiceImplEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
