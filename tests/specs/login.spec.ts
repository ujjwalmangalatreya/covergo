import { test, expect } from "@playwright/test";
import LoginPageActions from "../page_object/login/loginPageActions";

test.describe('Login Functionality', () => {
  let login: LoginPageActions;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    login = new LoginPageActions(page);
  });

  test('should log in with valid credentials', async () => {
    await login.enterUserName('Admin');
    await login.enterPassword('admin123');
    await login.clickLogin();
  });
});
