import { element, by, ElementFinder } from 'protractor';

export class EntityWithServiceClassAndPaginationComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('my-prefix-entity-with-service-class-and-pagination div table .btn-danger'));
    title = element.all(by.css('my-prefix-entity-with-service-class-and-pagination div h2#page-heading span')).first();

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

export class EntityWithServiceClassAndPaginationUpdatePage {
    pageTitle = element(by.id('my-prefix-entity-with-service-class-and-pagination-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    enzoInput = element(by.id('field_enzo'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setEnzoInput(enzo) {
        await this.enzoInput.sendKeys(enzo);
    }

    async getEnzoInput() {
        return this.enzoInput.getAttribute('value');
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

export class EntityWithServiceClassAndPaginationDeleteDialog {
    private dialogTitle = element(by.id('my-prefix-delete-entityWithServiceClassAndPagination-heading'));
    private confirmButton = element(by.id('my-prefix-confirm-delete-entityWithServiceClassAndPagination'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
