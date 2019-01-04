/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
    FieldTestServiceClassEntityComponentsPage,
    FieldTestServiceClassEntityDeleteDialog,
    FieldTestServiceClassEntityUpdatePage
} from './field-test-service-class-entity.page-object';
import * as path from 'path';

const expect = chai.expect;

describe('FieldTestServiceClassEntity e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let fieldTestServiceClassEntityUpdatePage: FieldTestServiceClassEntityUpdatePage;
    let fieldTestServiceClassEntityComponentsPage: FieldTestServiceClassEntityComponentsPage;
    let fieldTestServiceClassEntityDeleteDialog: FieldTestServiceClassEntityDeleteDialog;
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

    it('should load FieldTestServiceClassEntities', async () => {
        await navBarPage.goToEntity('field-test-service-class-entity');
        fieldTestServiceClassEntityComponentsPage = new FieldTestServiceClassEntityComponentsPage();
        expect(await fieldTestServiceClassEntityComponentsPage.getTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestServiceClassEntity.home.title'
        );
    });

    it('should load create FieldTestServiceClassEntity page', async () => {
        await fieldTestServiceClassEntityComponentsPage.clickOnCreateButton();
        fieldTestServiceClassEntityUpdatePage = new FieldTestServiceClassEntityUpdatePage();
        expect(await fieldTestServiceClassEntityUpdatePage.getPageTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestServiceClassEntity.home.createOrEditLabel'
        );
        await fieldTestServiceClassEntityUpdatePage.cancel();
    });

    it('should create and save FieldTestServiceClassEntities', async () => {
        const nbButtonsBeforeCreate = await fieldTestServiceClassEntityComponentsPage.countDeleteButtons();

        await fieldTestServiceClassEntityComponentsPage.clickOnCreateButton();
        await promise.all([
            fieldTestServiceClassEntityUpdatePage.setStringBobInput('stringBob'),
            fieldTestServiceClassEntityUpdatePage.setStringRequiredBobInput('stringRequiredBob'),
            fieldTestServiceClassEntityUpdatePage.setStringMinlengthBobInput('stringMinlengthBob'),
            fieldTestServiceClassEntityUpdatePage.setStringMaxlengthBobInput('stringMaxlengthBob'),
            fieldTestServiceClassEntityUpdatePage.setStringPatternBobInput('stringPatternBob'),
            fieldTestServiceClassEntityUpdatePage.setIntegerBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setIntegerRequiredBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setIntegerMinBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setIntegerMaxBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setLongBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setLongRequiredBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setLongMinBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setLongMaxBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setFloatBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setFloatRequiredBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setFloatMinBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setFloatMaxBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setDoubleRequiredBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setDoubleMinBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setDoubleMaxBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setBigDecimalRequiredBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setBigDecimalMinBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setBigDecimalMaxBobInput('5'),
            fieldTestServiceClassEntityUpdatePage.setLocalDateBobInput('2000-12-31'),
            fieldTestServiceClassEntityUpdatePage.setLocalDateRequiredBobInput('2000-12-31'),
            fieldTestServiceClassEntityUpdatePage.setInstantBobInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestServiceClassEntityUpdatePage.setInstanteRequiredBobInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestServiceClassEntityUpdatePage.setZonedDateTimeBobInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestServiceClassEntityUpdatePage.setZonedDateTimeRequiredBobInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestServiceClassEntityUpdatePage.enumBobSelectLastOption(),
            fieldTestServiceClassEntityUpdatePage.enumRequiredBobSelectLastOption(),
            fieldTestServiceClassEntityUpdatePage.setByteImageBobInput(absolutePath),
            fieldTestServiceClassEntityUpdatePage.setByteImageRequiredBobInput(absolutePath),
            fieldTestServiceClassEntityUpdatePage.setByteImageMinbytesBobInput(absolutePath),
            fieldTestServiceClassEntityUpdatePage.setByteImageMaxbytesBobInput(absolutePath),
            fieldTestServiceClassEntityUpdatePage.setByteAnyBobInput(absolutePath),
            fieldTestServiceClassEntityUpdatePage.setByteAnyRequiredBobInput(absolutePath),
            fieldTestServiceClassEntityUpdatePage.setByteAnyMinbytesBobInput(absolutePath),
            fieldTestServiceClassEntityUpdatePage.setByteAnyMaxbytesBobInput(absolutePath),
            fieldTestServiceClassEntityUpdatePage.setByteTextBobInput('byteTextBob'),
            fieldTestServiceClassEntityUpdatePage.setByteTextRequiredBobInput('byteTextRequiredBob'),
            fieldTestServiceClassEntityUpdatePage.setByteTextMinbytesBobInput('byteTextMinbytesBob'),
            fieldTestServiceClassEntityUpdatePage.setByteTextMaxbytesBobInput('byteTextMaxbytesBob')
        ]);
        expect(await fieldTestServiceClassEntityUpdatePage.getStringBobInput()).to.eq('stringBob');
        expect(await fieldTestServiceClassEntityUpdatePage.getStringRequiredBobInput()).to.eq('stringRequiredBob');
        expect(await fieldTestServiceClassEntityUpdatePage.getStringMinlengthBobInput()).to.eq('stringMinlengthBob');
        expect(await fieldTestServiceClassEntityUpdatePage.getStringMaxlengthBobInput()).to.eq('stringMaxlengthBob');
        expect(await fieldTestServiceClassEntityUpdatePage.getStringPatternBobInput()).to.eq('stringPatternBob');
        expect(await fieldTestServiceClassEntityUpdatePage.getIntegerBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getIntegerRequiredBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getIntegerMinBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getIntegerMaxBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getLongBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getLongRequiredBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getLongMinBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getLongMaxBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getFloatBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getFloatRequiredBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getFloatMinBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getFloatMaxBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getDoubleRequiredBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getDoubleMinBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getDoubleMaxBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getBigDecimalRequiredBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getBigDecimalMinBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getBigDecimalMaxBobInput()).to.eq('5');
        expect(await fieldTestServiceClassEntityUpdatePage.getLocalDateBobInput()).to.eq('2000-12-31');
        expect(await fieldTestServiceClassEntityUpdatePage.getLocalDateRequiredBobInput()).to.eq('2000-12-31');
        expect(await fieldTestServiceClassEntityUpdatePage.getInstantBobInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestServiceClassEntityUpdatePage.getInstanteRequiredBobInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestServiceClassEntityUpdatePage.getZonedDateTimeBobInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestServiceClassEntityUpdatePage.getZonedDateTimeRequiredBobInput()).to.contain('2001-01-01T02:30');
        const selectedBooleanBob = fieldTestServiceClassEntityUpdatePage.getBooleanBobInput();
        if (await selectedBooleanBob.isSelected()) {
            await fieldTestServiceClassEntityUpdatePage.getBooleanBobInput().click();
            expect(await fieldTestServiceClassEntityUpdatePage.getBooleanBobInput().isSelected()).to.be.false;
        } else {
            await fieldTestServiceClassEntityUpdatePage.getBooleanBobInput().click();
            expect(await fieldTestServiceClassEntityUpdatePage.getBooleanBobInput().isSelected()).to.be.true;
        }
        const selectedBooleanRequiredBob = fieldTestServiceClassEntityUpdatePage.getBooleanRequiredBobInput();
        if (await selectedBooleanRequiredBob.isSelected()) {
            await fieldTestServiceClassEntityUpdatePage.getBooleanRequiredBobInput().click();
            expect(await fieldTestServiceClassEntityUpdatePage.getBooleanRequiredBobInput().isSelected()).to.be.false;
        } else {
            await fieldTestServiceClassEntityUpdatePage.getBooleanRequiredBobInput().click();
            expect(await fieldTestServiceClassEntityUpdatePage.getBooleanRequiredBobInput().isSelected()).to.be.true;
        }
        expect(await fieldTestServiceClassEntityUpdatePage.getByteImageBobInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceClassEntityUpdatePage.getByteImageRequiredBobInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceClassEntityUpdatePage.getByteImageMinbytesBobInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceClassEntityUpdatePage.getByteImageMaxbytesBobInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceClassEntityUpdatePage.getByteAnyBobInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceClassEntityUpdatePage.getByteAnyRequiredBobInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceClassEntityUpdatePage.getByteAnyMinbytesBobInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceClassEntityUpdatePage.getByteAnyMaxbytesBobInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestServiceClassEntityUpdatePage.getByteTextBobInput()).to.eq('byteTextBob');
        expect(await fieldTestServiceClassEntityUpdatePage.getByteTextRequiredBobInput()).to.eq('byteTextRequiredBob');
        expect(await fieldTestServiceClassEntityUpdatePage.getByteTextMinbytesBobInput()).to.eq('byteTextMinbytesBob');
        expect(await fieldTestServiceClassEntityUpdatePage.getByteTextMaxbytesBobInput()).to.eq('byteTextMaxbytesBob');
        await fieldTestServiceClassEntityUpdatePage.save();
        expect(await fieldTestServiceClassEntityUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await fieldTestServiceClassEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last FieldTestServiceClassEntity', async () => {
        const nbButtonsBeforeDelete = await fieldTestServiceClassEntityComponentsPage.countDeleteButtons();
        await fieldTestServiceClassEntityComponentsPage.clickOnLastDeleteButton();

        fieldTestServiceClassEntityDeleteDialog = new FieldTestServiceClassEntityDeleteDialog();
        expect(await fieldTestServiceClassEntityDeleteDialog.getDialogTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestServiceClassEntity.delete.question'
        );
        await fieldTestServiceClassEntityDeleteDialog.clickOnConfirmButton();

        expect(await fieldTestServiceClassEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
