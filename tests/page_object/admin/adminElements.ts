import { Page, Locator } from "@playwright/test";

class AdminElement {
     private page: Page;

     addAdminButton: Locator;
     userRoleDropdwown: Locator;
     userRoleOption: Locator;
     statusDropDown: Locator;
     statusOption: Locator;
     employeeNameInputFiled: Locator;
     userNameInputField: Locator;
     passwordInputField: Locator;
     confirmPasswordField: Locator;
     saveButton: Locator;
     successMessage: Locator;
     employeeSearchResult: Locator;
     usernameSearchTextField: Locator;
     searchButton: Locator;
     tableContent: Locator;
     editIcon: Locator;
     deleteIcon: Locator;
     yesDeleteButtom: Locator;
     successDeleteMessage: Locator;
     
     
    
     constructor(page: Page) {
          this.page = page;
          this.addAdminButton = page.locator('//div[@class="orangehrm-header-container"]/button/i');
          this.userRoleDropdwown = page.locator('(//div[@class="oxd-select-text-input"])[1]');
          this.userRoleOption = page.getByRole('option', { name: 'Admin' });
          this.statusDropDown = page.locator('(//div[@class="oxd-select-text-input"])[2]');
          this.statusOption = page.getByRole('option', { name: 'Enabled' });
          this.employeeNameInputFiled = page.getByRole('textbox', { name: "Type for hints..." });
          this.userNameInputField = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"]//input[@class="oxd-input oxd-input--active"])[1]');
          this.passwordInputField = page.locator('(//input[@type="password"])[1]')
          this.confirmPasswordField = page.locator('(//input[@type="password"])[2]')
          this.saveButton = page.getByRole("button", { name: "Save" });
          this.successMessage = page.getByText('Successfully Saved');
          this.employeeSearchResult = page.locator('//div[@role="listbox"]//div[@role="option"]')
          this.usernameSearchTextField = page.locator('(//div[@class="oxd-input-group oxd-input-field-bottom-space"]//input)[1]');
          this.searchButton = page.getByRole("button", { name: "Search" });
          this.tableContent = page.locator('//div[@class="oxd-table-card"]//div[@role="row"]/div[2]');
          this.editIcon = page.locator('(//div[@class="oxd-table-cell-actions"]/button)[2]');
          this.deleteIcon = page.locator('(//div[@class="oxd-table-cell-actions"]/button)[1]');
          this.yesDeleteButtom = page.locator('(//div[@class="orangehrm-modal-footer"]/button)[2]');
          this.successDeleteMessage = page.getByText('Successfully Deleted');

     }
}

export default AdminElement;