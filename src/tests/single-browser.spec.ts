import { test } from '@playwright/test';
import type { Page } from '@playwright/test';
import { goto } from '../utils/navigation';

// Use a single shared Page across tests to avoid opening the browser multiple times.
test.describe.serial('single-browser navigation', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('navigate to google', async () => {
    await goto(page, 'https://www.google.com');
    await page.waitForLoadState();
  });

  test('navigate to gmail', async () => {
    await goto(page, 'https://mail.google.com');
    await page.waitForLoadState();
  });
});

