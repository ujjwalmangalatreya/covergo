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

     constructor(page: Page) {
          this.page = page;
          this.addButton = page.getByRole('button', { name: ' Add' });
          this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
          this.middleNameInput = page.getByRole('textbox', { name: 'Middle Name' });
          this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
          this.profilePicture = page.locator("input[type=file]");
          this.employeeIdInput = page.getByRole('textbox').nth(4);
          this.saveButton = page.getByRole('button', { name: 'Save' });
          this.successMessage = page.getByText('SuccessSuccessfully Saved');
     }
}

export default PIMPageElements;