import { test } from "../fixtures/fixtures";

test.describe('Dashboard', () => {
    
     test('test to verify the sidenave options', async ({ loginPage, dashboardPage }) => {
          await dashboardPage.getDashboardUrl();
          await dashboardPage.verifyAllSideNavMenu();
     });

     test('test to verify search menu in sidenav', async ({loginPage,dashboardPage}) => {
          await dashboardPage.seachSideNavMenu();
          await dashboardPage.verifySearchResult();
     })

});
