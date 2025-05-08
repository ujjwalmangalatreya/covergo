import { Page, Locator } from "@playwright/test";

class DashboardElement {
     private page: Page;

     pimLink: Locator;
     adminLink: Locator;
     sidNavMenu: Locator;
     sideNavSearch: Locator;

    
     constructor(page: Page) {
          this.page = page;
          this.pimLink = page.getByRole('link', { name: 'PIM' });
          this.adminLink = page.getByRole('link', { name: 'Admin' });
          this.sidNavMenu = page.locator('//ul[@class="oxd-main-menu"]/li/a/span');
          this.sideNavSearch = page.getByRole('textbox',{name: "Search"})

     }
}

export default DashboardElement;