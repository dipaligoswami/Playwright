import { test, expect } from '@playwright/test';

test('Nrich Course Route Smoke Test', async ({ page }) => {
    const response = await page.goto('https://nrichlearning.com/courses', { waitUntil: 'domcontentloaded' });
    expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
})