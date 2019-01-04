import { element, by, ElementFinder } from 'protractor';

export class EntityWithServiceImplAndDTOComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('my-prefix-entity-with-service-impl-and-dto div table .btn-danger'));
    title = element.all(by.css('my-prefix-entity-with-service-impl-and-dto div h2#page-heading span')).first();

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

export class EntityWithServiceImplAndDTOUpdatePage {
    pageTitle = element(by.id('my-prefix-entity-with-service-impl-and-dto-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    louisInput = element(by.id('field_louis'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setLouisInput(louis) {
        await this.louisInput.sendKeys(louis);
    }

    async getLouisInput() {
        return this.louisInput.getAttribute('value');
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

export class EntityWithServiceImplAndDTODeleteDialog {
    private dialogTitle = element(by.id('my-prefix-delete-entityWithServiceImplAndDTO-heading'));
    private confirmButton = element(by.id('my-prefix-confirm-delete-entityWithServiceImplAndDTO'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
