# Test info

- Name: PIM >> Test to verify employee name in personal details page
- Location: /Volumes/Projects/PROJECTS/2025/covergo/tests/specs/pim.spec.ts:22:10

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected value:  "Ujjwal_1746643114306Atreya_1746643114306"
Received object: {Symbol(async_id_symbol): 29681, Symbol(trigger_async_id_symbol): 26139, Symbol(kResourceStore): {"_asyncLocalStorage": {"enabled": true, "kResourceStore": Symbol(kResourceStore)}, "_data": Map {"stepZone" => {"attachmentIndices": [], "box": undefined, "boxedStack": undefined, "category": "test.step", "complete": [Function complete], "info": {"_stepId": "test.step@27", "_testInfo": [TestInfoImpl], "annotations": [Array]}, "location": {"column": 22, "file": "/Volumes/Projects/PROJECTS/2025/covergo/tests/page_object/PIM/PIMPageActions.ts", "function": "PIMPageActions.verifyNameInPersonalDetails", "line": 78}, "stepId": "test.step@27", "steps": [[Object], [Object]], "title": "Verify Name in personal details page"}}}}
    at /Volumes/Projects/PROJECTS/2025/covergo/tests/page_object/PIM/PIMPageActions.ts:80:79
    at PIMPageActions.verifyNameInPersonalDetails (/Volumes/Projects/PROJECTS/2025/covergo/tests/page_object/PIM/PIMPageActions.ts:78:22)
    at /Volumes/Projects/PROJECTS/2025/covergo/tests/specs/pim.spec.ts:28:25
```

# Test source

```ts
   1 | import { Page, test, expect } from "@playwright/test";
   2 | import PIMPageElements from "./PIMPageElements";
   3 | import path from "path";
   4 | import testData from "../../data/testData.json";
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
   16 |           await test.step("Click on Add button", async () => {
   17 |                await this.pimElements.addButton.click();
   18 |           });
   19 |      }
   20 |
   21 |      async fillIntitalEmployeeForm() {
   22 |           await test.step("Filling up the Intial Employee Data ", async () => {
   23 |                await this.pimElements.firstNameInput.fill(testData.firstName);
   24 |                await this.pimElements.middleNameInput.fill(testData.middleName);
   25 |                await this.pimElements.lastNameInput.fill(testData.lastName)
   26 |                await this.pimElements.employeeIdInput.clear();
   27 |                await this.pimElements.employeeIdInput.fill(`${testData.employeeId}`);
   28 |           });
   29 |      }
   30 |
   31 |      async uploadEmployeeProfilePic() {
   32 |           await test.step("Uploading Employee Profile Picture", async () => {
   33 |                let picFilePath = path.join(process.cwd() + "/tests/data/profilepic.png");
   34 |                await this.pimElements.profilePicture.setInputFiles(picFilePath);
   35 |           });
   36 |      }
   37 |
   38 |      async clickSaveButton() {
   39 |           await test.step("Click Save button to save new employee", async () => {
   40 |                await this.pimElements.saveButton.click();
   41 |           });
   42 |      }
   43 |
   44 |      async verifySuccessMessage() {
   45 |           await test.step("Verify employee add success message", async () => {
   46 |                await expect(this.pimElements.successMessage).toBeVisible();
   47 |           });
   48 |      }
   49 |
   50 |      async searchByEmployeeName() {
   51 |           await test.step("Search employee by name", async () => {
   52 |                await this.pimElements.employeeNameSearchInputField.fill(testData.firstName)
   53 |           });
   54 |      }
   55 |      async clickSearchButton() {
   56 |           await test.step("Click Search Button", async () => {
   57 |                await this.pimElements.searchButton.click();
   58 |           });
   59 |      }
   60 |
   61 |      async verifyEmployeeIsListed() {
   62 |           await test.step("Verify Employee is liste in the list", async () => {
   63 |                await expect(this.pimElements.tableContent).toContainText(testData.firstName);
   64 |           })
   65 |      }
   66 |      async clickEditButton() {
   67 |           await test.step("Click Edit button in employee table", async () => {
   68 |                await this.pimElements.editButton.click();
   69 |           })
   70 |      }
   71 |      async clickDeleteButton() {
   72 |           await test.step("Click Edit button in employee table", async () => {
   73 |                await this.pimElements.deleteButton.click();
   74 |           })
   75 |      }
   76 |
   77 |      async verifyNameInPersonalDetails() {
   78 |           await test.step("Verify Name in personal details page", async () => {
   79 |                const fullName = `${testData.firstName}${testData.lastName}`;
>  80 |                await expect(this.pimElements.personalDetailsName.innerText()).toContain(fullName);
      |                                                                               ^ Error: expect(received).toContain(expected) // indexOf
   81 |           });
   82 |      }
   83 |      async verifyDeletePopUp() {
   84 |           await test.step("Verify delete popup", async () => {
   85 |                await expect(this.pimElements.deleteConfirmationPOpUp).toBeVisible();
   86 |           });
   87 |      }
   88 |
   89 |      async clickNoCancelButton() {
   90 |           await test.step("Click No Cancel button", async () => {
   91 |                await this.pimElements.noCancelButton.click();
   92 |           });
   93 |      }
   94 |      async clickYesDeleteButton() {
   95 |           await test.step("Click Yes Delete button", async () => {
   96 |                await this.pimElements.yesDeleteButtom.click();
   97 |           });
   98 |      }
   99 |
  100 |      async verifyDeletionIsCancelled() {
  101 |           await test.step("Verify deletion is cancelled", async () => {
  102 |                await expect(this.pimElements.tableContent).toContainText(testData.firstName);
  103 |           })
  104 |      }
  105 | }
  106 |
  107 | export default PIMPageActions;
```