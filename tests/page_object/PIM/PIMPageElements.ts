import { Page, Locator } from "@playwright/test";

class PIMPageElements {
     private page: Page;

     addButton: Locator;
     firstNameInput: Locator;
     middleNameInput: Locator;
     lastNameInput: Locator;
     profilePicture: Locator;
     employeeIdInput: Locator;
     saveButton: Locator;
     successMessage: Locator;
     employeeNameSearchInputField: Locator;
     searchButton: Locator;
     tableContent: Locator;
     editButton: Locator;
     personalDetailsName: Locator;
     deleteButton: Locator;
     noCancelButton: Locator;
     yesDeleteButtom: Locator;
     deleteConfirmationPOpUp: Locator;

     constructor(page: Page) {
          this.page = page;
          this.addButton = page.locator('//div[@class="orangehrm-header-container"]/button/i');
          this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
          this.middleNameInput = page.getByRole('textbox', { name: 'Middle Name' });
          this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
          this.profilePicture = page.locator("input[type=file]");
          this.employeeIdInput = page.getByRole('textbox').nth(4);
          this.saveButton = page.getByRole('button', { name: 'Save' });
          this.successMessage = page.getByText('Successfully Saved');
          this.employeeNameSearchInputField = page.getByRole('textbox', { name: 'Type for hints...' }).first();
          this.searchButton = page.getByRole('button', { name: 'Search' });
          this.tableContent = page.locator('//div[@class="oxd-table-card"]//div[@role="row"]/div[3]');
          this.editButton = page.locator('//i[@class="oxd-icon bi-pencil-fill"]')
          this.personalDetailsName = page.locator('//div[@class="orangehrm-edit-employee-name"]');
          this.deleteButton = page.locator('//i[@class="oxd-icon bi-trash"]');
          this.noCancelButton = page.locator('(//div[@class="orangehrm-modal-footer"]/button)[1]');
          this.yesDeleteButtom = page.locator('(//div[@class="orangehrm-modal-footer"]/button)[2]')
          this.deleteConfirmationPOpUp = page.locator('//div[@role="document"]');
     }
}

export default PIMPageElements;