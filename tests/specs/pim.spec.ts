import { test } from "../fixtures/fixtures";

test.describe('PIM', () => {
     test.only('Test to verify new employee is added successfully', async (
          { loginPage, dashboardPage, pimPage }) => {
          await dashboardPage.gotoPIMLink();
          await pimPage.clickAddButton();
          await pimPage.fillIntitalEmployeeForm();
          await pimPage.uploadEmployeeProfilePic();
          await pimPage.clickSaveButton();
          await pimPage.verifySuccessMessage();
     });

     test("Test to verify id the employee is listed in the employee list", async (
          { loginPage, dashboardPage, pimPage }) => {
          await dashboardPage.gotoPIMLink();


     })

});
