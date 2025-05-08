import { test } from "../fixtures/fixtures";

test.describe('PIM', () => {
     test('Test to verify new employee is added successfully', async (
          { loginPage, dashboardPage, pimPage }) => {
          await dashboardPage.gotoPIMLink();
          await pimPage.clickAddButton();
          await pimPage.fillIntitalEmployeeForm();
          await pimPage.uploadEmployeeProfilePic();
          await pimPage.clickSaveButton();
          await pimPage.verifySuccessMessage();
     });

     test("Test to verify if the employee is listed in the employee list", async (
          { loginPage, dashboardPage, pimPage }) => {
          await dashboardPage.gotoPIMLink();
          await pimPage.searchByEmployeeName();
          await pimPage.clickSearchButton();
          await pimPage.verifyEmployeeIsListed();
     });

     test("Test to verify employee name in personal details page", async (
          { loginPage, dashboardPage, pimPage }) => {
          await dashboardPage.gotoPIMLink();
          await pimPage.searchByEmployeeName();
          await pimPage.clickSearchButton();
          await pimPage.clickEditButton();
          await pimPage.verifyNameInPersonalDetails();
     });

     test("Test to cancel deletion the created employee", async ({ loginPage, dashboardPage, pimPage }) => {
          await dashboardPage.gotoPIMLink();
          await pimPage.searchByEmployeeName();
          await pimPage.clickSearchButton();
          await pimPage.clickDeleteButton();
          await pimPage.clickNoCancelButton();
          await pimPage.verifyDeletionIsCancelled();
     });

});
