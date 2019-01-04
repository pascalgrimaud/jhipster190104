import { element, by, ElementFinder } from 'protractor';

export class EntityWithServiceImplPaginationAndDTOComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('my-prefix-entity-with-service-impl-pagination-and-dto div table .btn-danger'));
    title = element.all(by.css('my-prefix-entity-with-service-impl-pagination-and-dto div h2#page-heading span')).first();

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

export class EntityWithServiceImplPaginationAndDTOUpdatePage {
    pageTitle = element(by.id('my-prefix-entity-with-service-impl-pagination-and-dto-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    theoInput = element(by.id('field_theo'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setTheoInput(theo) {
        await this.theoInput.sendKeys(theo);
    }

    async getTheoInput() {
        return this.theoInput.getAttribute('value');
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

export class EntityWithServiceImplPaginationAndDTODeleteDialog {
    private dialogTitle = element(by.id('my-prefix-delete-entityWithServiceImplPaginationAndDTO-heading'));
    private confirmButton = element(by.id('my-prefix-confirm-delete-entityWithServiceImplPaginationAndDTO'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
