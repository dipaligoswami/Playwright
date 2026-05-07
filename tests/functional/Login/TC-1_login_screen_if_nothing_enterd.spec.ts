import { test, expect } from '@playwright/test';
test('Login screen if nothing enterd', async ({ page }) => {
const response = await page.goto('/', {waitUntil: 'domcontentloaded' });
    expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
    await expect(page.locator('div.row.new-login-popup')).toBeVisible();
    await expect(page.locator('label.login-form-labels')).toHaveText('Your Email');
    await expect(page.locator('button.login-button-new')).toHaveClass(/btn-disabled/)

    await page.locator('label.login-form-labels').click({ force: true });
    await expect(page).not.toHaveURL(/otp|dashboard|onboard/);
});
