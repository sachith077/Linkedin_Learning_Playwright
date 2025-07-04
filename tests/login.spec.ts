import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto('http://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('customer2@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jack Howe');
  await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
});