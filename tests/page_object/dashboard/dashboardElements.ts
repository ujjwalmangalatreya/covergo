import { Page, Locator } from "@playwright/test";

class DashboardElement {
     private page: Page;

     pimLink: Locator;
    
     constructor(page: Page) {
          this.page = page;
          this.pimLink = page.getByRole('link', { name: 'PIM' });

     }
}

export default DashboardElement;