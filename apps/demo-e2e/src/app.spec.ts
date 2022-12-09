import { expect, test } from '@playwright/test';

test('should start page', async ({ page }) => {
  await page.goto('/');

  expect(true).toBeTruthy();
});
