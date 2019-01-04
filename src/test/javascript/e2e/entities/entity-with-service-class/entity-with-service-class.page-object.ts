import { element, by, ElementFinder } from 'protractor';

export class EntityWithServiceClassComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('my-prefix-entity-with-service-class div table .btn-danger'));
    title = element.all(by.css('my-prefix-entity-with-service-class div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class EntityWithServiceClassUpdatePage {
    pageTitle = element(by.id('my-prefix-entity-with-service-class-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    zoeInput = element(by.id('field_zoe'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setZoeInput(zoe) {
        await this.zoeInput.sendKeys(zoe);
    }

    async getZoeInput() {
        return this.zoeInput.getAttribute('value');
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class EntityWithServiceClassDeleteDialog {
    private dialogTitle = element(by.id('my-prefix-delete-entityWithServiceClass-heading'));
    private confirmButton = element(by.id('my-prefix-confirm-delete-entityWithServiceClass'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
