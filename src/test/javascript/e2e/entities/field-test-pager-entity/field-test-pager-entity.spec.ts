/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
    FieldTestPagerEntityComponentsPage,
    FieldTestPagerEntityDeleteDialog,
    FieldTestPagerEntityUpdatePage
} from './field-test-pager-entity.page-object';
import * as path from 'path';

const expect = chai.expect;

describe('FieldTestPagerEntity e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let fieldTestPagerEntityUpdatePage: FieldTestPagerEntityUpdatePage;
    let fieldTestPagerEntityComponentsPage: FieldTestPagerEntityComponentsPage;
    let fieldTestPagerEntityDeleteDialog: FieldTestPagerEntityDeleteDialog;
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

    it('should load FieldTestPagerEntities', async () => {
        await navBarPage.goToEntity('field-test-pager-entity');
        fieldTestPagerEntityComponentsPage = new FieldTestPagerEntityComponentsPage();
        expect(await fieldTestPagerEntityComponentsPage.getTitle()).to.eq('jhipsterSampleApplicationApp.fieldTestPagerEntity.home.title');
    });

    it('should load create FieldTestPagerEntity page', async () => {
        await fieldTestPagerEntityComponentsPage.clickOnCreateButton();
        fieldTestPagerEntityUpdatePage = new FieldTestPagerEntityUpdatePage();
        expect(await fieldTestPagerEntityUpdatePage.getPageTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestPagerEntity.home.createOrEditLabel'
        );
        await fieldTestPagerEntityUpdatePage.cancel();
    });

    it('should create and save FieldTestPagerEntities', async () => {
        const nbButtonsBeforeCreate = await fieldTestPagerEntityComponentsPage.countDeleteButtons();

        await fieldTestPagerEntityComponentsPage.clickOnCreateButton();
        await promise.all([
            fieldTestPagerEntityUpdatePage.setStringJadeInput('stringJade'),
            fieldTestPagerEntityUpdatePage.setStringRequiredJadeInput('stringRequiredJade'),
            fieldTestPagerEntityUpdatePage.setStringMinlengthJadeInput('stringMinlengthJade'),
            fieldTestPagerEntityUpdatePage.setStringMaxlengthJadeInput('stringMaxlengthJade'),
            fieldTestPagerEntityUpdatePage.setStringPatternJadeInput('stringPatternJade'),
            fieldTestPagerEntityUpdatePage.setIntegerJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setIntegerRequiredJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setIntegerMinJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setIntegerMaxJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setLongJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setLongRequiredJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setLongMinJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setLongMaxJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setFloatJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setFloatRequiredJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setFloatMinJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setFloatMaxJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setDoubleRequiredJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setDoubleMinJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setDoubleMaxJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setBigDecimalRequiredJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setBigDecimalMinJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setBigDecimalMaxJadeInput('5'),
            fieldTestPagerEntityUpdatePage.setLocalDateJadeInput('2000-12-31'),
            fieldTestPagerEntityUpdatePage.setLocalDateRequiredJadeInput('2000-12-31'),
            fieldTestPagerEntityUpdatePage.setInstantJadeInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestPagerEntityUpdatePage.setInstanteRequiredJadeInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestPagerEntityUpdatePage.setZonedDateTimeJadeInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestPagerEntityUpdatePage.setZonedDateTimeRequiredJadeInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestPagerEntityUpdatePage.enumJadeSelectLastOption(),
            fieldTestPagerEntityUpdatePage.enumRequiredJadeSelectLastOption(),
            fieldTestPagerEntityUpdatePage.setByteImageJadeInput(absolutePath),
            fieldTestPagerEntityUpdatePage.setByteImageRequiredJadeInput(absolutePath),
            fieldTestPagerEntityUpdatePage.setByteImageMinbytesJadeInput(absolutePath),
            fieldTestPagerEntityUpdatePage.setByteImageMaxbytesJadeInput(absolutePath),
            fieldTestPagerEntityUpdatePage.setByteAnyJadeInput(absolutePath),
            fieldTestPagerEntityUpdatePage.setByteAnyRequiredJadeInput(absolutePath),
            fieldTestPagerEntityUpdatePage.setByteAnyMinbytesJadeInput(absolutePath),
            fieldTestPagerEntityUpdatePage.setByteAnyMaxbytesJadeInput(absolutePath),
            fieldTestPagerEntityUpdatePage.setByteTextJadeInput('byteTextJade'),
            fieldTestPagerEntityUpdatePage.setByteTextRequiredJadeInput('byteTextRequiredJade'),
            fieldTestPagerEntityUpdatePage.setByteTextMinbytesJadeInput('byteTextMinbytesJade'),
            fieldTestPagerEntityUpdatePage.setByteTextMaxbytesJadeInput('byteTextMaxbytesJade')
        ]);
        expect(await fieldTestPagerEntityUpdatePage.getStringJadeInput()).to.eq('stringJade');
        expect(await fieldTestPagerEntityUpdatePage.getStringRequiredJadeInput()).to.eq('stringRequiredJade');
        expect(await fieldTestPagerEntityUpdatePage.getStringMinlengthJadeInput()).to.eq('stringMinlengthJade');
        expect(await fieldTestPagerEntityUpdatePage.getStringMaxlengthJadeInput()).to.eq('stringMaxlengthJade');
        expect(await fieldTestPagerEntityUpdatePage.getStringPatternJadeInput()).to.eq('stringPatternJade');
        expect(await fieldTestPagerEntityUpdatePage.getIntegerJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getIntegerRequiredJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getIntegerMinJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getIntegerMaxJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getLongJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getLongRequiredJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getLongMinJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getLongMaxJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getFloatJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getFloatRequiredJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getFloatMinJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getFloatMaxJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getDoubleRequiredJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getDoubleMinJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getDoubleMaxJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getBigDecimalRequiredJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getBigDecimalMinJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getBigDecimalMaxJadeInput()).to.eq('5');
        expect(await fieldTestPagerEntityUpdatePage.getLocalDateJadeInput()).to.eq('2000-12-31');
        expect(await fieldTestPagerEntityUpdatePage.getLocalDateRequiredJadeInput()).to.eq('2000-12-31');
        expect(await fieldTestPagerEntityUpdatePage.getInstantJadeInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestPagerEntityUpdatePage.getInstanteRequiredJadeInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestPagerEntityUpdatePage.getZonedDateTimeJadeInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestPagerEntityUpdatePage.getZonedDateTimeRequiredJadeInput()).to.contain('2001-01-01T02:30');
        const selectedBooleanJade = fieldTestPagerEntityUpdatePage.getBooleanJadeInput();
        if (await selectedBooleanJade.isSelected()) {
            await fieldTestPagerEntityUpdatePage.getBooleanJadeInput().click();
            expect(await fieldTestPagerEntityUpdatePage.getBooleanJadeInput().isSelected()).to.be.false;
        } else {
            await fieldTestPagerEntityUpdatePage.getBooleanJadeInput().click();
            expect(await fieldTestPagerEntityUpdatePage.getBooleanJadeInput().isSelected()).to.be.true;
        }
        const selectedBooleanRequiredJade = fieldTestPagerEntityUpdatePage.getBooleanRequiredJadeInput();
        if (await selectedBooleanRequiredJade.isSelected()) {
            await fieldTestPagerEntityUpdatePage.getBooleanRequiredJadeInput().click();
            expect(await fieldTestPagerEntityUpdatePage.getBooleanRequiredJadeInput().isSelected()).to.be.false;
        } else {
            await fieldTestPagerEntityUpdatePage.getBooleanRequiredJadeInput().click();
            expect(await fieldTestPagerEntityUpdatePage.getBooleanRequiredJadeInput().isSelected()).to.be.true;
        }
        expect(await fieldTestPagerEntityUpdatePage.getByteImageJadeInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPagerEntityUpdatePage.getByteImageRequiredJadeInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPagerEntityUpdatePage.getByteImageMinbytesJadeInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPagerEntityUpdatePage.getByteImageMaxbytesJadeInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPagerEntityUpdatePage.getByteAnyJadeInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPagerEntityUpdatePage.getByteAnyRequiredJadeInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPagerEntityUpdatePage.getByteAnyMinbytesJadeInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPagerEntityUpdatePage.getByteAnyMaxbytesJadeInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestPagerEntityUpdatePage.getByteTextJadeInput()).to.eq('byteTextJade');
        expect(await fieldTestPagerEntityUpdatePage.getByteTextRequiredJadeInput()).to.eq('byteTextRequiredJade');
        expect(await fieldTestPagerEntityUpdatePage.getByteTextMinbytesJadeInput()).to.eq('byteTextMinbytesJade');
        expect(await fieldTestPagerEntityUpdatePage.getByteTextMaxbytesJadeInput()).to.eq('byteTextMaxbytesJade');
        await fieldTestPagerEntityUpdatePage.save();
        expect(await fieldTestPagerEntityUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await fieldTestPagerEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last FieldTestPagerEntity', async () => {
        const nbButtonsBeforeDelete = await fieldTestPagerEntityComponentsPage.countDeleteButtons();
        await fieldTestPagerEntityComponentsPage.clickOnLastDeleteButton();

        fieldTestPagerEntityDeleteDialog = new FieldTestPagerEntityDeleteDialog();
        expect(await fieldTestPagerEntityDeleteDialog.getDialogTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestPagerEntity.delete.question'
        );
        await fieldTestPagerEntityDeleteDialog.clickOnConfirmButton();

        expect(await fieldTestPagerEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
