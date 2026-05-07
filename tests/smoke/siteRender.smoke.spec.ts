import { test, expect } from '@playwright/test';

test('Nrich site is opening or not', async ({ page }) => {
const response = await page.goto('https://nrichlearning.com', { waitUntil: 'networkidle' });
    expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
await expect(page).toHaveURL(/nrichlearning\.com/);
await expect(page.locator('body')).toBeVisible();
});