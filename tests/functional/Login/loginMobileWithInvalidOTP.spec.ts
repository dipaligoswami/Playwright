import { test, expect } from '@playwright/test';

test('Nrich login with valid mobile with invalid otp', async ({ page }) => {
const response = await page.goto('https://nrichlearning.com', {waitUntil: 'domcontentloaded' });
    expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
    await expect(page.locator('div.row.new-login-popup')).toBeVisible();
    await page.locator('input[value="phone"]').click();
    await expect(page.locator('label.login-form-labels')).toHaveText('Your Mobile Number')
    await page.locator('input#phone').fill('8076395255', { timeout: 5000 });
    await page.getByRole('button', { name: 'Sign In' ,exact: true}).click();
    await expect(page.locator('.swal2-icon-success h2')).toHaveText('OTP sent on the registered mobile number');
    await expect(page.locator('div.otp-container')).toBeVisible();
    const otp='1254'
    for (let i = 0; i < otp.length; i++) {
        await page.locator('input.otp-box').nth(i).fill(otp[i]);
    } 
    await page.getByRole('button', { name: 'Verify OTP' }).click();
    await expect(page.locator('.swal2-icon-success h2')).toHaveText('Invalid OTP!');
    await page.getByRole('button', { name: 'Verify OTP' })

});