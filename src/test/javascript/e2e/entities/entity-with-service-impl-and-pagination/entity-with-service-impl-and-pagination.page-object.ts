import { element, by, ElementFinder } from 'protractor';

export class EntityWithServiceImplAndPaginationComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('my-prefix-entity-with-service-impl-and-pagination div table .btn-danger'));
    title = element.all(by.css('my-prefix-entity-with-service-impl-and-pagination div h2#page-heading span')).first();

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

export class EntityWithServiceImplAndPaginationUpdatePage {
    pageTitle = element(by.id('my-prefix-entity-with-service-impl-and-pagination-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    hugoInput = element(by.id('field_hugo'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setHugoInput(hugo) {
        await this.hugoInput.sendKeys(hugo);
    }

    async getHugoInput() {
        return this.hugoInput.getAttribute('value');
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

export class EntityWithServiceImplAndPaginationDeleteDialog {
    private dialogTitle = element(by.id('my-prefix-delete-entityWithServiceImplAndPagination-heading'));
    private confirmButton = element(by.id('my-prefix-confirm-delete-entityWithServiceImplAndPagination'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
