import { expect, Page, test } from "@playwright/test";
import AdminElement from "./adminElements";
import testData from "../../data/testData.json";


class AdminPageActions {
     private page: Page;
     private adminElement: AdminElement;

     constructor(page: Page) {
          this.page = page;
          this.adminElement = new AdminElement(page);
     }

    

     async clickAddButton() {
          await test.step("Click on Add button", async () => {
               await this.adminElement.addAdminButton.click();
          });
     }

     async fillAdminForm() {
          await test.step("Filling up admin form", async () => {
               await this.adminElement.userRoleDropdwown.click();
               await this.adminElement.userRoleOption.click();
               await this.adminElement.statusDropDown.click();
               await this.adminElement.statusOption.click();
               await this.adminElement.userNameInputField.fill(testData.lastName);
               await this.adminElement.passwordInputField.fill(testData.middleName);
               await this.adminElement.confirmPasswordField.fill(testData.middleName);
               await this.adminElement.employeeNameInputFiled.fill("123445 34 444444");
               await this.page.waitForTimeout(3000);
               await this.adminElement.employeeNameInputFiled.press('Enter');
               await this.adminElement.employeeSearchResult.click();
               await this.adminElement.saveButton.click();

          });
     }
     async veriySuccessMessage() {
          await test.step("Verify success message", async () => {
               await expect(this.adminElement.successMessage).toBeVisible();
          })
     }
     async clickSaveButton() {
          await test.step("Click Save BUtton", async () => {
               await this.adminElement.saveButton.click();  
          });
     }

     async searchByUserName() {
          await test.step("Search by username", async () => {
               await this.adminElement.usernameSearchTextField.fill(testData.lastName);
          })
     }
     async clickSearch() {
          await test.step("Click Search Button", async () => {
               await this.adminElement.searchButton.click();
          })
     }

     async verifyDataInTable() {
          await test.step("Verify the admin is listed in the table", async () => {
               await expect(this.adminElement.tableContent).toContainText(testData.lastName);
          })
     }
     async verifyDataInTableEdited() {
          await test.step("Verify the admin is listed in the table", async () => {
               await expect(this.adminElement.tableContent).toContainText(testData.middleName);
          })
     }

     async clickEditIcon() {
          await test.step("Click on edid icon", async () => {
               await this.adminElement.editIcon.click();
          })
     }
     async clickDeleteIcon() {
          await test.step("Click on delete icon", async () => {
               await this.adminElement.deleteIcon.click();
          })
     }

     async editUserName() {
          await test.step("Edit Username", async () => {
               await this.adminElement.userNameInputField.clear();
               await this.adminElement.userNameInputField.fill(testData.middleName);
          })
     }
     async searchByUserNameEdited() {
          await test.step("Search by username", async () => {
               await this.adminElement.usernameSearchTextField.fill(testData.middleName);
          })
     }

     async clickYesDeleteButton() {
          await test.step("Click yes delete", async () => {
               await this.adminElement.yesDeleteButtom.click();
          })
     }
     async verifySuccessDeleteMessage() {
          await test.step("Verifying succcess deleted message", async () => {
               await expect(this.adminElement.successDeleteMessage).toBeVisible();
          })
     }


}

export default AdminPageActions;