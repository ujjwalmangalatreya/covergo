# Test info

- Name: PIM >> Test to verify new employee is added successfully
- Location: /Volumes/Projects/PROJECTS/2025/covergo/tests/specs/pim.spec.ts:4:10

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByText('Successfully Saved')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByText('Successfully Saved')

    at /Volumes/Projects/PROJECTS/2025/covergo/tests/page_object/PIM/PIMPageActions.ts:44:62
    at PIMPageActions.verifySuccessMessage (/Volumes/Projects/PROJECTS/2025/covergo/tests/page_object/PIM/PIMPageActions.ts:43:22)
    at /Volumes/Projects/PROJECTS/2025/covergo/tests/specs/pim.spec.ts:11:25
```

# Page snapshot

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: FirstNTest LastNaTest
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Add Employee" [level=6]
- separator
- button "Choose File"
- img "profile picture"
- button ""
- paragraph: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
- text: Employee Full Name*
- textbox "First Name": Ujjwal_1746640573448
- textbox "Middle Name": Mangal_1746640573448
- textbox "Last Name": Atreya_1746640573448
- text: Employee Id
- textbox: "0478"
- text: Employee Id already exists
- separator
- paragraph: Create Login Details
- checkbox
- separator
- paragraph: "* Required"
- button "Cancel"
- button "Save"
- paragraph: OrangeHRM OS 5.7
- paragraph:
  - text: © 2005 - 2025
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
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
  26 |           });
  27 |      }
  28 |
  29 |      async uploadEmployeeProfilePic() {
  30 |           await test.step("Uploading Employee Profile Picture", async () => {
  31 |                let picFilePath = path.join(process.cwd() + "/tests/data/profilepic.png");
  32 |                await this.pimElements.profilePicture.setInputFiles(picFilePath);
  33 |           });
  34 |      }
  35 |
  36 |      async clickSaveButton() {
  37 |           await test.step("Click Save button to save new employee", async () => {
  38 |                await this.pimElements.saveButton.click();
  39 |           });
  40 |      }
  41 |
  42 |      async verifySuccessMessage() {
  43 |           await test.step("Verify employee add success message", async () => {
> 44 |                await expect(this.pimElements.successMessage).toBeVisible();
     |                                                              ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  45 |           });
  46 |      }
  47 |
  48 |      async searchByEmployeeName() {
  49 |           await test.step("Search employee by name", async () => {
  50 |                await this.pimElements.employeeNameSearchInputField.fill(testData.firstName)
  51 |           });
  52 |      }
  53 |      async clickSearchButton() {
  54 |           await test.step("Click Search Button", async () => {
  55 |                await this.pimElements.searchButton.click();
  56 |           });
  57 |      }
  58 |
  59 |      async verifyEmployeeIsListed() {
  60 |           await test.step("Verify Employee is liste in the list", async () => {
  61 |                await expect(this.pimElements.tableContent).toContainText(testData.firstName);
  62 |           })
  63 |      }
  64 | }
  65 |
  66 | export default PIMPageActions;
```