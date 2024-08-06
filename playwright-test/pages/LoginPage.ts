import { Page } from '@playwright/test';

class LoginPage {
  private page: Page;
  private countrySelection: string;
  private emailInput: string;
  private loginButton:string;
  private passwordInput: string;
  private submitButton: string;

  constructor(page: Page) {
    this.page = page;
    this.countrySelection="'Germany'";
    this.emailInput = '//input[@placeholder="Email address"]';
    this.loginButton="'Log in by password'";
    this.passwordInput = '//input[@type="password"]';
    this.submitButton = "'Confirm & Continue'";
  }

  async navigate() {
    await this.page.goto('https://dt-admin-dev.ldsvcplatform.com/en/login');
  }

  async login(email: string, password: string) {
    await this.page.click(this.countrySelection);
    await this.page.fill(this.emailInput, email);
    await this.page.click(this.loginButton);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.submitButton);
  }
}

export default LoginPage;
