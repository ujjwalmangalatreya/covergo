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
    await login.verifySuccessfulLogin();
  });
  test('should not log in with invalid username', async ({page}) => {
    await login.enterUserName('InvalidUser');
    await login.enterPassword('admin123');
    await login.clickLogin();
    //TODO: error message assertion.
    await expect(page.locator('.error-message')).toContainText('Invalid credentials');
  });
  test('should not log in with invalid password', async ({page}) => {
    await login.enterUserName('Admin');
    await login.enterPassword('wrongpassword');
    await login.clickLogin();
    //TODO: error message assertion.
    await expect(page.locator('.error-message')).toContainText('Invalid credentials');
  });
});
