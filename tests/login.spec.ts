import { test, expect } from '@playwright/test';

test('login and add a fruit item to cart', async ({ page }) => {
  // Navigate with basic auth
  await page.goto('https://CANDIDATE_003:qa_assessment@master.d1qyy7rpao6bn3.amplifyapp.com/');

  // Search for "fruits"
  const searchInput = page.locator('input[placeholder*="Enter Category"]');
  await searchInput.fill('fruits');
  await page.waitForTimeout(1000);
  await searchInput.press('Enter');

  

});
