import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('User can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('admin-lyca@yopmail.com', 'wlKfwsX7fY');
  expect(await page.url()).toBe('https://dt-admin-dev.ldsvcplatform.com/en/login');
});
