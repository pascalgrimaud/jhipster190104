/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
    FieldTestInfiniteScrollEntityComponentsPage,
    FieldTestInfiniteScrollEntityDeleteDialog,
    FieldTestInfiniteScrollEntityUpdatePage
} from './field-test-infinite-scroll-entity.page-object';
import * as path from 'path';

const expect = chai.expect;

describe('FieldTestInfiniteScrollEntity e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let fieldTestInfiniteScrollEntityUpdatePage: FieldTestInfiniteScrollEntityUpdatePage;
    let fieldTestInfiniteScrollEntityComponentsPage: FieldTestInfiniteScrollEntityComponentsPage;
    let fieldTestInfiniteScrollEntityDeleteDialog: FieldTestInfiniteScrollEntityDeleteDialog;
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

    it('should load FieldTestInfiniteScrollEntities', async () => {
        await navBarPage.goToEntity('field-test-infinite-scroll-entity');
        fieldTestInfiniteScrollEntityComponentsPage = new FieldTestInfiniteScrollEntityComponentsPage();
        expect(await fieldTestInfiniteScrollEntityComponentsPage.getTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestInfiniteScrollEntity.home.title'
        );
    });

    it('should load create FieldTestInfiniteScrollEntity page', async () => {
        await fieldTestInfiniteScrollEntityComponentsPage.clickOnCreateButton();
        fieldTestInfiniteScrollEntityUpdatePage = new FieldTestInfiniteScrollEntityUpdatePage();
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getPageTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestInfiniteScrollEntity.home.createOrEditLabel'
        );
        await fieldTestInfiniteScrollEntityUpdatePage.cancel();
    });

    it('should create and save FieldTestInfiniteScrollEntities', async () => {
        const nbButtonsBeforeCreate = await fieldTestInfiniteScrollEntityComponentsPage.countDeleteButtons();

        await fieldTestInfiniteScrollEntityComponentsPage.clickOnCreateButton();
        await promise.all([
            fieldTestInfiniteScrollEntityUpdatePage.setStringHugoInput('stringHugo'),
            fieldTestInfiniteScrollEntityUpdatePage.setStringRequiredHugoInput('stringRequiredHugo'),
            fieldTestInfiniteScrollEntityUpdatePage.setStringMinlengthHugoInput('stringMinlengthHugo'),
            fieldTestInfiniteScrollEntityUpdatePage.setStringMaxlengthHugoInput('stringMaxlengthHugo'),
            fieldTestInfiniteScrollEntityUpdatePage.setStringPatternHugoInput('stringPatternHugo'),
            fieldTestInfiniteScrollEntityUpdatePage.setIntegerHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setIntegerRequiredHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setIntegerMinHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setIntegerMaxHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setLongHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setLongRequiredHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setLongMinHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setLongMaxHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setFloatHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setFloatRequiredHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setFloatMinHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setFloatMaxHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setDoubleRequiredHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setDoubleMinHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setDoubleMaxHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setBigDecimalRequiredHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setBigDecimalMinHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setBigDecimalMaxHugoInput('5'),
            fieldTestInfiniteScrollEntityUpdatePage.setLocalDateHugoInput('2000-12-31'),
            fieldTestInfiniteScrollEntityUpdatePage.setLocalDateRequiredHugoInput('2000-12-31'),
            fieldTestInfiniteScrollEntityUpdatePage.setInstantHugoInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestInfiniteScrollEntityUpdatePage.setInstanteRequiredHugoInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestInfiniteScrollEntityUpdatePage.setZonedDateTimeHugoInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestInfiniteScrollEntityUpdatePage.setZonedDateTimeRequiredHugoInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            fieldTestInfiniteScrollEntityUpdatePage.enumHugoSelectLastOption(),
            fieldTestInfiniteScrollEntityUpdatePage.enumRequiredHugoSelectLastOption(),
            fieldTestInfiniteScrollEntityUpdatePage.setByteImageHugoInput(absolutePath),
            fieldTestInfiniteScrollEntityUpdatePage.setByteImageRequiredHugoInput(absolutePath),
            fieldTestInfiniteScrollEntityUpdatePage.setByteImageMinbytesHugoInput(absolutePath),
            fieldTestInfiniteScrollEntityUpdatePage.setByteImageMaxbytesHugoInput(absolutePath),
            fieldTestInfiniteScrollEntityUpdatePage.setByteAnyHugoInput(absolutePath),
            fieldTestInfiniteScrollEntityUpdatePage.setByteAnyRequiredHugoInput(absolutePath),
            fieldTestInfiniteScrollEntityUpdatePage.setByteAnyMinbytesHugoInput(absolutePath),
            fieldTestInfiniteScrollEntityUpdatePage.setByteAnyMaxbytesHugoInput(absolutePath),
            fieldTestInfiniteScrollEntityUpdatePage.setByteTextHugoInput('byteTextHugo'),
            fieldTestInfiniteScrollEntityUpdatePage.setByteTextRequiredHugoInput('byteTextRequiredHugo'),
            fieldTestInfiniteScrollEntityUpdatePage.setByteTextMinbytesHugoInput('byteTextMinbytesHugo'),
            fieldTestInfiniteScrollEntityUpdatePage.setByteTextMaxbytesHugoInput('byteTextMaxbytesHugo')
        ]);
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getStringHugoInput()).to.eq('stringHugo');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getStringRequiredHugoInput()).to.eq('stringRequiredHugo');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getStringMinlengthHugoInput()).to.eq('stringMinlengthHugo');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getStringMaxlengthHugoInput()).to.eq('stringMaxlengthHugo');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getStringPatternHugoInput()).to.eq('stringPatternHugo');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getIntegerHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getIntegerRequiredHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getIntegerMinHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getIntegerMaxHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getLongHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getLongRequiredHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getLongMinHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getLongMaxHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getFloatHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getFloatRequiredHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getFloatMinHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getFloatMaxHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getDoubleRequiredHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getDoubleMinHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getDoubleMaxHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getBigDecimalRequiredHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getBigDecimalMinHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getBigDecimalMaxHugoInput()).to.eq('5');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getLocalDateHugoInput()).to.eq('2000-12-31');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getLocalDateRequiredHugoInput()).to.eq('2000-12-31');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getInstantHugoInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getInstanteRequiredHugoInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getZonedDateTimeHugoInput()).to.contain('2001-01-01T02:30');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getZonedDateTimeRequiredHugoInput()).to.contain('2001-01-01T02:30');
        const selectedBooleanHugo = fieldTestInfiniteScrollEntityUpdatePage.getBooleanHugoInput();
        if (await selectedBooleanHugo.isSelected()) {
            await fieldTestInfiniteScrollEntityUpdatePage.getBooleanHugoInput().click();
            expect(await fieldTestInfiniteScrollEntityUpdatePage.getBooleanHugoInput().isSelected()).to.be.false;
        } else {
            await fieldTestInfiniteScrollEntityUpdatePage.getBooleanHugoInput().click();
            expect(await fieldTestInfiniteScrollEntityUpdatePage.getBooleanHugoInput().isSelected()).to.be.true;
        }
        const selectedBooleanRequiredHugo = fieldTestInfiniteScrollEntityUpdatePage.getBooleanRequiredHugoInput();
        if (await selectedBooleanRequiredHugo.isSelected()) {
            await fieldTestInfiniteScrollEntityUpdatePage.getBooleanRequiredHugoInput().click();
            expect(await fieldTestInfiniteScrollEntityUpdatePage.getBooleanRequiredHugoInput().isSelected()).to.be.false;
        } else {
            await fieldTestInfiniteScrollEntityUpdatePage.getBooleanRequiredHugoInput().click();
            expect(await fieldTestInfiniteScrollEntityUpdatePage.getBooleanRequiredHugoInput().isSelected()).to.be.true;
        }
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteImageHugoInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteImageRequiredHugoInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteImageMinbytesHugoInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteImageMaxbytesHugoInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteAnyHugoInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteAnyRequiredHugoInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteAnyMinbytesHugoInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteAnyMaxbytesHugoInput()).to.endsWith(fileNameToUpload);
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteTextHugoInput()).to.eq('byteTextHugo');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteTextRequiredHugoInput()).to.eq('byteTextRequiredHugo');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteTextMinbytesHugoInput()).to.eq('byteTextMinbytesHugo');
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteTextMaxbytesHugoInput()).to.eq('byteTextMaxbytesHugo');
        await fieldTestInfiniteScrollEntityUpdatePage.save();
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await fieldTestInfiniteScrollEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last FieldTestInfiniteScrollEntity', async () => {
        const nbButtonsBeforeDelete = await fieldTestInfiniteScrollEntityComponentsPage.countDeleteButtons();
        await fieldTestInfiniteScrollEntityComponentsPage.clickOnLastDeleteButton();

        fieldTestInfiniteScrollEntityDeleteDialog = new FieldTestInfiniteScrollEntityDeleteDialog();
        expect(await fieldTestInfiniteScrollEntityDeleteDialog.getDialogTitle()).to.eq(
            'jhipsterSampleApplicationApp.fieldTestInfiniteScrollEntity.delete.question'
        );
        await fieldTestInfiniteScrollEntityDeleteDialog.clickOnConfirmButton();

        expect(await fieldTestInfiniteScrollEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
