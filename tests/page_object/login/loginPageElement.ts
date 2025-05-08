import { Page, Locator } from "@playwright/test";

class LoginPageElement {
     private page: Page;

     userNameInputField: Locator;
     passwordInputField: Locator;
     loginSubmitButton: Locator;
     
     constructor(page: Page) {
          this.page = page;
          this.userNameInputField = page.locator('[name="username"]');
          this.passwordInputField = page.locator('[name="password"]');
          this.loginSubmitButton = page.locator('[type="submit"]');
     }
}

export default LoginPageElement;