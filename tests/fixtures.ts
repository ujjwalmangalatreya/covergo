

import { test as base, expect } from "@playwright/test";
import LoginPageActions from "./page_object/login/loginPageActions";
import DashboardPageActions from "./page_object/dashboard/dashboardActions";

type OrangeHRMFixtures = {
     loginPage: LoginPageActions;
     dashboardPage: DashboardPageActions;
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
     }
});
