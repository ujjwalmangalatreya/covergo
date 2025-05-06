import { Page,test } from "@playwright/test";
import LoginPageElement from "./loginPageElement";

class LoginPageActions {
     private page: Page;
     private loginPageElement: LoginPageElement;

     constructor(page: Page) {
          this.page = page;
          this.loginPageElement = new LoginPageElement(page);
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
}

export default LoginPageActions;