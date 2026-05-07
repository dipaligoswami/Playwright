import { test, expect } from '@playwright/test';

test('Country code should show only India when mobile login is selected', async ({ page }) => {
const response = await page.goto('https://nrichlearning.com', {waitUntil: 'domcontentloaded' });
    expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
    await expect(page.locator('div.row.new-login-popup')).toBeVisible();
    await expect(page.locator('label.login-form-labels')).toHaveText('Your Email');
    await page.locator('input[value="phone"]').click();
    await expect(page.locator('label.login-form-labels')).toHaveText('Your Mobile Number')

    await expect(page.locator('div.selected-dial-code')).toHaveText('+91')
    await expect(page.locator('.iti__flag.iti__in')).toBeVisible();

    await page.locator('div.iti__selected-flag').click();
    await expect(page.locator('.iti__country-list li')).toHaveCount(1);

    await expect(page.locator('.iti__country-list li').first()).toContainText('India');


});