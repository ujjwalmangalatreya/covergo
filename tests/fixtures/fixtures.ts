

import { test as base, expect } from "@playwright/test";
import LoginPageActions from "../page_object/login/loginPageActions";
import DashboardPageActions from "../page_object/dashboard/dashboardActions";
import PIMPageActions from "../page_object/PIM/PIMPageActions";
import AdminPageActions from "../page_object/admin/adminActions";

type OrangeHRMFixtures = {
     loginPage: LoginPageActions;
     dashboardPage: DashboardPageActions;
     pimPage: PIMPageActions;
     adminPage: AdminPageActions;
     httpCredentials: { username: string; password: string };
};

export const test = base.extend<OrangeHRMFixtures>({
     loginPage: async ({ httpCredentials, page, baseURL }, use) => {
          await page.goto("/");
          const loginPage = new LoginPageActions(page);
          await loginPage.enterUserName(httpCredentials?.username);
          await loginPage.enterPassword(httpCredentials?.password);
          await loginPage.clickLogin()
          await use(loginPage);
          //TODO: Logout here.
     },
     dashboardPage: async ({ page }, use) => {
          const dashboardPage = new DashboardPageActions(page);
          await use(dashboardPage);
     },
     pimPage: async ({ page }, use) => {
          const pimPage = new PIMPageActions(page);
          await use(pimPage);
     },
     adminPage: async ({ page }, use) => {
          const adminPage = new AdminPageActions(page);
          await use(adminPage);
     }
});
