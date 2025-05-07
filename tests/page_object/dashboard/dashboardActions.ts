import { Page, test } from "@playwright/test";
import DashboardElement from "./dashboardElements";

class DashboardPageActions {
     private page: Page;
     private dashboardElements: DashboardElement;

     constructor(page: Page) {
          this.page = page;
          this.dashboardElements = new DashboardElement(page);
     }

     async getDashboardUrl() {
          await test.step(`Get current url dashboard`, async () => {
               let currentURL = await this.page.url();
               return currentURL;
          });
     }

     async gotoPIMLink() {
          await test.step(`Click on pim link`,async () => {
               await this.dashboardElements.pimLink.click();
          })
     }

    
}

export default DashboardPageActions;