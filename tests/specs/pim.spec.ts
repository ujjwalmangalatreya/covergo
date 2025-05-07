import { test } from "../fixtures";

test.describe('PIM', () => {
     test.only('Test to verify new employee is added successfully', async ({ loginPage, dashboardPage }) => {
          await dashboardPage.gotoPIMLink();
     });
    
});
