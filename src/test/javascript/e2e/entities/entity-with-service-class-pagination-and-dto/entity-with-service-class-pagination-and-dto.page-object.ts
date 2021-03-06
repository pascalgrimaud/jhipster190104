import { element, by, ElementFinder } from 'protractor';

export class EntityWithServiceClassPaginationAndDTOComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('my-prefix-entity-with-service-class-pagination-and-dto div table .btn-danger'));
    title = element.all(by.css('my-prefix-entity-with-service-class-pagination-and-dto div h2#page-heading span')).first();

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

export class EntityWithServiceClassPaginationAndDTOUpdatePage {
    pageTitle = element(by.id('my-prefix-entity-with-service-class-pagination-and-dto-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    lenaInput = element(by.id('field_lena'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setLenaInput(lena) {
        await this.lenaInput.sendKeys(lena);
    }

    async getLenaInput() {
        return this.lenaInput.getAttribute('value');
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

export class EntityWithServiceClassPaginationAndDTODeleteDialog {
    private dialogTitle = element(by.id('my-prefix-delete-entityWithServiceClassPaginationAndDTO-heading'));
    private confirmButton = element(by.id('my-prefix-confirm-delete-entityWithServiceClassPaginationAndDTO'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
