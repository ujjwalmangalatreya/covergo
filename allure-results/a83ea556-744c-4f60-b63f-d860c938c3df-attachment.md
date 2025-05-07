# Test info

- Name: PIM >> Test to verify if the employee is listed in the employee list
- Location: /Volumes/Projects/PROJECTS/2025/covergo/tests/specs/pim.spec.ts:14:10

# Error details

```
Error: locator.fill: Error: strict mode violation: getByRole('textbox', { name: 'Type for hints...' }) resolved to 2 elements:
    1) <input data-v-75e744cd="" placeholder="Type for hints..."/> aka getByRole('textbox', { name: 'Type for hints...' }).first()
    2) <input data-v-75e744cd="" placeholder="Type for hints..."/> aka getByRole('textbox', { name: 'Type for hints...' }).nth(1)

Call log:
  - waiting for getByRole('textbox', { name: 'Type for hints...' })

    at /Volumes/Projects/PROJECTS/2025/covergo/tests/page_object/PIM/PIMPageActions.ts:50:68
    at PIMPageActions.searchByEmployeeName (/Volumes/Projects/PROJECTS/2025/covergo/tests/page_object/PIM/PIMPageActions.ts:49:22)
    at /Volumes/Projects/PROJECTS/2025/covergo/tests/specs/pim.spec.ts:17:25
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
      - paragraph: Test Admin
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
- heading "Employee Information" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints..."
- text: Employee Id
- textbox
- text: Employment Status -- Select --  Include Current Employees Only  Supervisor Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (201) Records Found
- table:
  - rowgroup:
    - row " Id  First (& Middle) Name  Last Name  Job Title  Employment Status  Sub Unit  Supervisor  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Id "
      - columnheader "First (& Middle) Name "
      - columnheader "Last Name "
      - columnheader "Job Title "
      - columnheader "Employment Status "
      - columnheader "Sub Unit "
      - columnheader "Supervisor "
      - columnheader "Actions"
  - rowgroup:
    - row " dfgsjsjdh 123445 34 444444  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "dfgsjsjdh"
      - cell "123445 34"
      - cell "444444"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0295 99N75 425 5TlV  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0295"
      - cell "99N75 425"
      - cell "5TlV"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0312 A8DCo 4Ys 010Z  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0312"
      - cell "A8DCo 4Ys"
      - cell "010Z"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0419 Alice QA Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0419"
      - cell "Alice QA"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0431 Alice QA Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0431"
      - cell "Alice QA"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0387 Alice QA Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0387"
      - cell "Alice QA"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0411 Alice QA Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0411"
      - cell "Alice QA"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0450 Alice QA Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0450"
      - cell "Alice QA"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0475 Alice QA Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0475"
      - cell "Alice QA"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0392 Alice QA Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0392"
      - cell "Alice QA"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 01715 Amelia Brown  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "01715"
      - cell "Amelia"
      - cell "Brown"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0404 Amy Thomas  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0404"
      - cell "Amy"
      - cell "Thomas"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0360 aniket t t  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0360"
      - cell "aniket t"
      - cell "t"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0367 Ash J Tyson  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0367"
      - cell "Ash J"
      - cell "Tyson"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0437 Austin Kaiser  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0437"
      - cell "Austin"
      - cell "Kaiser"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0303 bala kumar ravi  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0303"
      - cell "bala kumar"
      - cell "ravi"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0292 bmrtahvwhibmrtahvwhi hbfqkhjfqbhbfqkhjfqb  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0292"
      - cell "bmrtahvwhibmrtahvwhi"
      - cell "hbfqkhjfqbhbfqkhjfqb"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0405 Brandon Simmons  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0405"
      - cell "Brandon"
      - cell "Simmons"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0468 Bryan Lindsey  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0468"
      - cell "Bryan"
      - cell "Lindsey"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0320 Charles Carter  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0320"
      - cell "Charles"
      - cell "Carter"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 00392 Charlotte Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "00392"
      - cell "Charlotte"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0363 Christopher Mcmillan  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0363"
      - cell "Christopher"
      - cell "Mcmillan"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0425 cvcv cvcvcv  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0425"
      - cell "cvcv"
      - cell "cvcvcv"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0446 dfdf dfdfdfdf  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0446"
      - cell "dfdf"
      - cell "dfdfdfdf"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0290 dhbrukkuzldhbrukkuzl ibuvlwtfsfibuvlwtfsf  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0290"
      - cell "dhbrukkuzldhbrukkuzl"
      - cell "ibuvlwtfsfibuvlwtfsf"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0294 DHINA KARAN P  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0294"
      - cell "DHINA KARAN"
      - cell "P"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0424 dssf sdfsd  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0424"
      - cell "dssf"
      - cell "sdfsd"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 09557 Emily Jones  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "09557"
      - cell "Emily"
      - cell "Jones"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0439 FirstNameDVU LastNameAutoTest  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0439"
      - cell "FirstNameDVU"
      - cell "LastNameAutoTest"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0478 FirstNameDVU LastNameAutoTest  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0478"
      - cell "FirstNameDVU"
      - cell "LastNameAutoTest"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0457 FirstNameDVU LastNameAutoTest  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0457"
      - cell "FirstNameDVU"
      - cell "LastNameAutoTest"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0477 FirstNameDVU LastNameAutoTest  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0477"
      - cell "FirstNameDVU"
      - cell "LastNameAutoTest"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0417 FirstNameDVU LastNameAutoTest  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0417"
      - cell "FirstNameDVU"
      - cell "LastNameAutoTest"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0443 FirstNameDVU LastNameAutoTest  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0443"
      - cell "FirstNameDVU"
      - cell "LastNameAutoTest"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0469 FirstNameDVU LastNameAutoTest  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0469"
      - cell "FirstNameDVU"
      - cell "LastNameAutoTest"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0428 FirstNameDVU LastNameAutoTest  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0428"
      - cell "FirstNameDVU"
      - cell "LastNameAutoTest"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0454 FirstNameDVU LastNameAutoTest  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0454"
      - cell "FirstNameDVU"
      - cell "LastNameAutoTest"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0441 FirstNameDVU LastNameAutoTest  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0441"
      - cell "FirstNameDVU"
      - cell "LastNameAutoTest"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 1235 FName Mname LName  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "1235"
      - cell "FName Mname"
      - cell "LName"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftdkux ltsxgy  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftdkux"
      - cell "ltsxgy"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue fthnvn ltwrrt  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "fthnvn"
      - cell "ltwrrt"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue fthnvn ltwrrt  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "fthnvn"
      - cell "ltwrrt"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue fthyfv ltrhtm  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "fthyfv"
      - cell "ltrhtm"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftndlm ltdyyf  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftndlm"
      - cell "ltdyyf"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftpjte ltpzkj  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftpjte"
      - cell "ltpzkj"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftyseo ltzbbp  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftyseo"
      - cell "ltzbbp"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
- navigation "Pagination Navigation":
  - list:
    - listitem:
      - button "1"
    - listitem:
      - button "2"
    - listitem:
      - button "3"
    - listitem:
      - button "4"
    - listitem:
      - button "5"
    - listitem:
      - button ""
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
  44 |                await expect(this.pimElements.successMessage).toBeVisible();
  45 |           });
  46 |      }
  47 |
  48 |      async searchByEmployeeName() {
  49 |           await test.step("Search employee by name", async () => {
> 50 |                await this.pimElements.employeeNameSearchInputField.fill(testData.firstName)
     |                                                                    ^ Error: locator.fill: Error: strict mode violation: getByRole('textbox', { name: 'Type for hints...' }) resolved to 2 elements:
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