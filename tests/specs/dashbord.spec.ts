import { test } from "../fixtures/fixtures";

test.describe('Login Functionality', () => {
    
     test('should log in with valid credentials', async ({ loginPage, dashboardPage }) => {
          await dashboardPage.getDashboardUrl();
          await dashboardPage.verifyAllSideNavMenu();
     });

     test('should be able to search menu in sidenav', async ({loginPage,dashboardPage}) => {
          await dashboardPage.seachSideNavMenu();
          await dashboardPage.verifySearchResult();
     })

});
