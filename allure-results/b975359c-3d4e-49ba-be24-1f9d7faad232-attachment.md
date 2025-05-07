# Test info

- Name: PIM >> Test to verify new employee is added successfully
- Location: /Volumes/Projects/PROJECTS/2025/covergo/tests/specs/pim.spec.ts:4:11

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for getByRole('textbox', { name: 'First Name' })
    - waiting for" https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee" navigation to finish...

    at /Volumes/Projects/PROJECTS/2025/covergo/tests/page_object/PIM/PIMPageActions.ts:23:48
    at PIMPageActions.fillIntitalEmployeeForm (/Volumes/Projects/PROJECTS/2025/covergo/tests/page_object/PIM/PIMPageActions.ts:22:16)
    at /Volumes/Projects/PROJECTS/2025/covergo/tests/specs/pim.spec.ts:8:25
```

# Test source

```ts
   1 | import { Page, test,expect } from "@playwright/test";
   2 | import PIMPageElements from "./PIMPageElements";
   3 | import path from "path";
   4 | import testData from "../../fixtures/testData.json";
   5 |
   6 | class PIMPageActions {
   7 |      private page: Page;
   8 |      private pimElements: PIMPageElements;
   9 |
  10 |      constructor(page: Page) {
  11 |           this.page = page;
  12 |           this.pimElements = new PIMPageElements(page);
  13 |      }
  14 |
  15 |      async clickAddButton() {
  16 |           test.step("Click on Add button ", async () => {
  17 |                this.pimElements.addButton.click();
  18 |           });
  19 |      }
  20 |
  21 |      async fillIntitalEmployeeForm() {
  22 |           test.step("Filling up the Intial Employee Data ", async () => {
> 23 |                this.pimElements.firstNameInput.fill(testData.firstName);
     |                                                ^ Error: locator.fill: Test ended.
  24 |                this.pimElements.middleNameInput.fill(testData.middleName);
  25 |                this.pimElements.lastNameInput.fill(testData.lastName)
  26 |           });
  27 |      }
  28 |
  29 |      async uploadEmployeeProfilePic() {
  30 |           test.step("Uploading Employee Profile Picture", async () => {
  31 |                let picFilePath = path.join(process.cwd() + "/tests/data/profilepic.png");
  32 |                this.pimElements.profilePicture.setInputFiles(picFilePath);
  33 |           });
  34 |      }
  35 |
  36 |      async clickSaveButton() {
  37 |           test.step("Click Save button to save new employee", async () => {
  38 |                this.pimElements.saveButton.click();
  39 |           });
  40 |      }
  41 |
  42 |      async verifySuccessMessage() {
  43 |           test.step("Verify employee add success message", async () => {
  44 |                await expect(this.pimElements.successMessage).toBeVisible();
  45 |           });
  46 |      }
  47 |
  48 |      
  49 |
  50 |
  51 | }
  52 |
  53 | export default PIMPageActions;
```