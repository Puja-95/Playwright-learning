import { Page } from '@playwright/test';

/**
 * Navigates to a given URL and waits for the page to load.
 * @param page - The Playwright Page object.
 * @param url - The URL to navigate to.
 */
export const navigate = async (page: Page, url: string) => {
  await page.goto(url, { waitUntil: 'networkidle' });
};