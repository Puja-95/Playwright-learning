import { Page } from '@playwright/test';
import LoginPage  from './LoginPage';

class DashboardPage {
    private page: Page;
    private languageSelection: string;
    private ratesSelection: string;
    private payMonthlySelection:string;
    private verifyTitle:string;
    constructor(page: Page) {
        this.page = page;
        this.languageSelection="'English'";
        this.ratesSelection="'Rates'";
        this.payMonthlySelection="'Pay monthly'";
        this.verifyTitle="'Rates dashboard'"
      }
      
      async dashboard(){ 
      const loginPage = new LoginPage(this.page);
      await loginPage.login('admin-lyca@yopmail.com', 'wlKfwsX7fY');
      await this.page.click(this.languageSelection);
      await this.page.click(this.ratesSelection);
      await this.page.click(this.payMonthlySelection);
      
    }
    async verifyPageTitle(){
      await this.page.textContent(this.verifyTitle);
      return this.verifyTitle;
    }
    }
export default DashboardPage;