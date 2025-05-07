import { Page, test } from "@playwright/test";
import PIMPageElements from "./PIMPageElements";

class PIMPageActions {
     private page: Page;
     private pimElements: PIMPageElements;

     constructor(page: Page) {
          this.page = page;
          this.pimElements = new PIMPageElements(page);
     }

     async clickAddButton() {
          test.step("Click on Add button ",async () => {
               this.pimElements.addButton.click();
               this.pimElements.firstNameInput.fill("Ujjwal");
               this.pimElements.middleNameInput.fill("Middle Name");
               this.pimElements.lastNameInput.fill("Last Name")
               
          })
     }

     async fillIntitalEmployeeForm() {
          test.step("Filling up the Intial Employee Data ", async () => {
               this.pimElements.firstNameInput.fill("Ujjwal");
               this.pimElements.middleNameInput.fill("Middle Name");
               this.pimElements.lastNameInput.fill("Last Name")
          })
     }

     async clickSaveButton() {
          test.step("Click Save button to save new employee", async () => {
               this.pimElements.saveButton.click();
          })

     }

     


}

export default PIMPageActions;