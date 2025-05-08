import { stringify } from "querystring";
import { test } from "../fixtures/fixtures";

test.describe('Admin', () => {
    
     test('should be able to add new admin user', async ({ loginPage, dashboardPage, adminPage }) => {
          await dashboardPage.gotoAdminLink();
          await adminPage.clickAddButton();
          await adminPage.fillAdminForm();
          await adminPage.clickSaveButton();
          await adminPage.veriySuccessMessage();
     });

     test("newly created admin user should be listed in the table", async ({ loginPage, dashboardPage, adminPage }) => {
          await dashboardPage.gotoAdminLink();
          await adminPage.searchByUserName();
          await adminPage.clickSearch();
          await adminPage.verifyDataInTable();
     });

     test("Verify if admin username is able to edit", async ({ loginPage, dashboardPage, adminPage }) => {
          await dashboardPage.gotoAdminLink();
          await adminPage.searchByUserName();
          await adminPage.clickSearch();
          await adminPage.verifyDataInTable();
          await adminPage.clickEditIcon();
          await adminPage.editUserName();
          await adminPage.clickSaveButton();
          await adminPage.searchByUserNameEdited();
          await adminPage.clickSearch();
          await adminPage.verifyDataInTable();

     });
     test("Verify if admin username is able to delete", async ({ loginPage, dashboardPage, adminPage }) => {
          await dashboardPage.gotoAdminLink();
          await adminPage.searchByUserName();
          await adminPage.clickSearch();
          await adminPage.verifyDataInTable();
          await adminPage.clickDeleteIcon();
          await adminPage.verifySuccessDeleteMessage();

     });

    

});
