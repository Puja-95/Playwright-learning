import { Page } from '@playwright/test';

class DashboardPage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
        
      }
}
export default DashboardPage;