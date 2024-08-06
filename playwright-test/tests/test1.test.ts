import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import { navigate } from '../helpers/utils';

test('User can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await navigate(page, 'https://dt-admin-dev.ldsvcplatform.com/en/login');
  await loginPage.login('admin-lyca@yopmail.com', 'wlKfwsX7fY');
  expect(await page.url()).toBe('https://dt-admin-dev.ldsvcplatform.com/en/login');
})


test('user dashboard screen', async({page})=>{

 const dashboard=new DashboardPage(page);

});
