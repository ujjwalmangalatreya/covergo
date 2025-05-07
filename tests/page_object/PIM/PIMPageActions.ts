import { Page, test,expect } from "@playwright/test";
import PIMPageElements from "./PIMPageElements";
import path from "path";
import testData from "../../fixtures/testData.json";

class PIMPageActions {
     private page: Page;
     private pimElements: PIMPageElements;

     constructor(page: Page) {
          this.page = page;
          this.pimElements = new PIMPageElements(page);
     }

     async clickAddButton() {
          test.step("Click on Add button ", async () => {
               this.pimElements.addButton.click();
          });
     }

     async fillIntitalEmployeeForm() {
          test.step("Filling up the Intial Employee Data ", async () => {
               this.pimElements.firstNameInput.fill(testData.firstName);
               this.pimElements.middleNameInput.fill(testData.middleName);
               this.pimElements.lastNameInput.fill(testData.lastName)
          });
     }

     async uploadEmployeeProfilePic() {
          test.step("Uploading Employee Profile Picture", async () => {
               let picFilePath = path.join(process.cwd() + "/tests/data/profilepic.png");
               this.pimElements.profilePicture.setInputFiles(picFilePath);
          });
     }

     async clickSaveButton() {
          test.step("Click Save button to save new employee", async () => {
               this.pimElements.saveButton.click();
          });
     }

     async verifySuccessMessage() {
          test.step("Verify employee add success message", async () => {
               await expect(this.pimElements.successMessage).toBeVisible();
          });
     }

     


}

export default PIMPageActions;