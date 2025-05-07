import { expect, Page, test } from "@playwright/test";
import LoginPageElement from "./loginPageElement";
import DashboardPageActions from "../dashboard/dashboardActions";

class LoginPageActions {
     private page: Page;
     private loginPageElement: LoginPageElement;
     private dashboardActions: DashboardPageActions;

     constructor(page: Page) {
          this.page = page;
          this.loginPageElement = new LoginPageElement(page);
          this.dashboardActions = new DashboardPageActions(page);
     }

     async enterUserName(username: string) {
          await test.step(`Enter username: ${username}`, async () => {
               await this.loginPageElement.userNameInputField.fill(username);
          });
     }

     async enterPassword(password: string) {
          await test.step(`Enter password`, async () => {
               await this.loginPageElement.passwordInputField.fill(password);
          });
     }

     async clickLogin() {
          await test.step('Click login button', async () => {
               await this.loginPageElement.loginSubmitButton.click();
          });
     }
     async verifySuccessfulLogin(){
          await test.step("Verifying Successful Login",async () => {
               let currentUrl = await this.dashboardActions.getDashboardUrl();
               expect(currentUrl).toContain("/dashboard")
          })
     }
}

export default LoginPageActions;