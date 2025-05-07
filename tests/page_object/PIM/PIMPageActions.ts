import { Page, test, expect } from "@playwright/test";
import PIMPageElements from "./PIMPageElements";
import path from "path";
import testData from "../../data/testData.json";

class PIMPageActions {
     private page: Page;
     private pimElements: PIMPageElements;

     constructor(page: Page) {
          this.page = page;
          this.pimElements = new PIMPageElements(page);
     }

     async clickAddButton() {
          await test.step("Click on Add button", async () => {
               await this.pimElements.addButton.click();
          });
     }

     async fillIntitalEmployeeForm() {
          await test.step("Filling up the Intial Employee Data ", async () => {
               await this.pimElements.firstNameInput.fill(testData.firstName);
               await this.pimElements.middleNameInput.fill(testData.middleName);
               await this.pimElements.lastNameInput.fill(testData.lastName)
               await this.pimElements.employeeIdInput.clear();
               await this.pimElements.employeeIdInput.fill(`${testData.employeeId}`);
          });
     }

     async uploadEmployeeProfilePic() {
          await test.step("Uploading Employee Profile Picture", async () => {
               let picFilePath = path.join(process.cwd() + "/tests/data/profilepic.png");
               await this.pimElements.profilePicture.setInputFiles(picFilePath);
          });
     }

     async clickSaveButton() {
          await test.step("Click Save button to save new employee", async () => {
               await this.pimElements.saveButton.click();
          });
     }

     async verifySuccessMessage() {
          await test.step("Verify employee add success message", async () => {
               await expect(this.pimElements.successMessage).toBeVisible();
          });
     }

     async searchByEmployeeName() {
          await test.step("Search employee by name", async () => {
               await this.pimElements.employeeNameSearchInputField.fill(testData.firstName)
          });
     }
     async clickSearchButton() {
          await test.step("Click Search Button", async () => {
               await this.pimElements.searchButton.click();
          });
     }

     async verifyEmployeeIsListed() {
          await test.step("Verify Employee is liste in the list", async () => {
               await expect(this.pimElements.tableContent).toContainText(testData.firstName);
          })
     }
     async clickEditButton() {
          await test.step("Click Edit button in employee table", async () => {
               await this.pimElements.editButton.click();
          })
     }
     async clickDeleteButton() {
          await test.step("Click Edit button in employee table", async () => {
               await this.pimElements.deleteButton.click();
          })
     }

     async verifyNameInPersonalDetails() {
          await test.step("Verify Name in personal details page", async () => {
               const fullName = `${testData.firstName}${testData.lastName}`;
               await expect(this.pimElements.personalDetailsName.innerText()).toContain(fullName);
          });
     }
     async verifyDeletePopUp() {
          await test.step("Verify delete popup", async () => {
               await expect(this.pimElements.deleteConfirmationPOpUp).toBeVisible();
          });
     }

     async clickNoCancelButton() {
          await test.step("Click No Cancel button", async () => {
               await this.pimElements.noCancelButton.click();
          });
     }
     async clickYesDeleteButton() {
          await test.step("Click Yes Delete button", async () => {
               await this.pimElements.yesDeleteButtom.click();
          });
     }

     async verifyDeletionIsCancelled() {
          await test.step("Verify deletion is cancelled", async () => {
               await expect(this.pimElements.tableContent).toContainText(testData.firstName);
          })
     }
}

export default PIMPageActions;