import { expect, Page, test } from "@playwright/test";
import DashboardElement from "./dashboardElements";
import expectedMenuItems from '../../data/expectedMenuItems.json';

class DashboardPageActions {
     private page: Page;
     private dashboardElements: DashboardElement;

     constructor(page: Page) {
          this.page = page;
          this.dashboardElements = new DashboardElement(page);
     }

     async getDashboardUrl() {
          let currentURL='';
          await test.step(`Get current url dashboard`, async () => {
               await this.page.waitForTimeout(1000);
               currentURL = await this.page.url();
          });
          return currentURL;
     }

     async gotoPIMLink() {
          await test.step(`Click on pim link`,async () => {
               await this.dashboardElements.pimLink.click();
               await this.page.waitForTimeout(6000);
          })
     }

     async verifyAllSideNavMenu() {
          await test.step("Verify all side nav menu items", async () => {
               await this.dashboardElements.sidNavMenu.first().waitFor({ state: 'visible' });
               const count = await this.dashboardElements.sidNavMenu.count();
               for (let i = 0; i < count; i++) {
                    const text = await this.dashboardElements.sidNavMenu.nth(i).innerText();
                    await expect(text).toBe(expectedMenuItems[i]);
               }
          })
     }

     async seachSideNavMenu() {
          await test.step("Enter search key word in sidenav search", async () => {
               await this.dashboardElements.sideNavSearch.fill("Admin");
          })
     }

     async verifySearchResult() {
          await test.step("Verify search result", async () => {
               await this.dashboardElements.sidNavMenu.first().waitFor({ state: 'visible' });
               const count = await this.dashboardElements.sidNavMenu.count();
               for (let i = 0; i < count; i++) {
                    const text = await this.dashboardElements.sidNavMenu.nth(i).innerText();
                    await expect(text).toBe("Admin");
               }
          })
     }

    
}

export default DashboardPageActions;