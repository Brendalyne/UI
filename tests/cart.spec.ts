import { test, expect } from "@playwright/test";

test('Test add to cart flow', async ({ page }) => {
  await page.goto('https://CANDIDATE_003:qa_assessment@master.d1qyy7rpao6bn3.amplifyapp.com/');
  await expect(page).toHaveTitle(/QAAssessment/i);

  // Increase quantity
  await page.locator('button:has-text("+")').first().click();

  // Optional: Check quantity changed
  const qtyInput = page.locator('input[type="number"]').first();
  await expect(qtyInput).toHaveValue('1');

  // Add to cart
  await page.getByRole('button', { name: 'ADD TO CART' }).first().click();
  await page.waitForTimeout(1000);

  // Click the cart icon (fix applied here)
  await page.locator('.fa-shopping-cart').click();

    await page.waitForTimeout(1000);

    // ✅ Click "Continue Shopping"
  await page.getByRole('button', { name: /Continue Shopping/i }).click();

    await page.waitForTimeout(1000);
});
