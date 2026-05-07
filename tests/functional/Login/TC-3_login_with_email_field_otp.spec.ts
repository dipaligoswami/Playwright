// For admin login with email field using OTP

import {test, expect } from "@playwright/test";
test('Nrich admin login with email id', async ({ page }) => {
const response = await page.goto('https://nrichlearning.co.in', {waitUntil: 'domcontentloaded' });
    expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);
    await expect(page.locator('div.row.new-login-popup')).toBeVisible();
    await expect(page.locator('label.login-form-labels')).toHaveText('Your Email')
    await page.locator('input.email-phone-input').fill('dipali.goswami@nrichlearning.com', { timeout: 5000 });
    await page.getByRole('button', { name: 'Sign In' ,exact: true}).click();
    await expect(page.locator('.swal2-icon-success h2')).toHaveText('OTP sent on the registered email');
    await expect(page.locator('div.otp-container')).toBeVisible();
    const otp='0000'
    for (let i = 0; i < otp.length; i++) {
        await page.locator('input.otp-box').nth(i).fill(otp[i]);
    } 
    await page.getByRole('button', { name: 'Verify OTP' }).click();
    await expect(page.locator('.swal2-icon-success h2')).toHaveText('OTP Verified!');
    await page.waitForURL(/\/admin\/onboard\/?$/, { timeout: 15000 ,waitUntil:'load'});

    const currentURL = page.url();
    console.log('Current URL after login:', currentURL);
    expect(currentURL).toContain('/admin/onboard');

});

// For teacher login with email field using OTP
// test('Nrich teacher login with email id', async ({ page }) => {
// const response = await page.goto('https://nrichlearning.com', {waitUntil: 'domcontentloaded' });
//     expect(response).not.toBeNull();
//     expect(response!.status()).toBeLessThan(400);
//     await expect(page.locator('div.row.new-login-popup')).toBeVisible();
//     await expect(page.locator('label.login-form-labels')).toHaveText('Your Email')
//     await page.locator('input.email-phone-input').fill('dipagoswami00@gmail.com', { timeout: 5000 });
//     await page.getByRole('button', { name: 'Sign In' ,exact: true}).click();
//     await expect(page.locator('.swal2-icon-success h2')).toHaveText('OTP sent on the registered email');
//     await expect(page.locator('div.otp-container')).toBeVisible();
//     const otp='0000'
//     for (let i = 0; i < otp.length; i++) {
//         await page.locator('input.otp-box').nth(i).fill(otp[i]);
//     } 
//     await page.getByRole('button', { name: 'Verify OTP' }).click();
//     await expect(page.locator('.swal2-icon-success h2')).toHaveText('OTP Verified!');
//     await page.waitForURL(/\/admin\/dashboard\/?$/, { timeout: 15000 ,waitUntil:'load'});

//     const currentURL = page.url();
//     console.log('Current URL after login:', currentURL);
//     expect(currentURL).toContain('/teacher/dashboard');
// });

// For student login with email field using OTP
// test('Nrich student login with email id', async ({ page }) => {
// const response = await page.goto('https://nrichlearning.com', {waitUntil: 'domcontentloaded' });
//     expect(response).not.toBeNull();
//     expect(response!.status()).toBeLessThan(400);
//     await expect(page.locator('div.row.new-login-popup')).toBeVisible();
//     await expect(page.locator('label.login-form-labels')).toHaveText('Your Email')
//     await page.locator('input.email-phone-input').fill('dipali.goswami@findandconsult.com', { timeout: 5000 });
//     await page.getByRole('button', { name: 'Sign In' ,exact: true}).click();
//     await expect(page.locator('.swal2-icon-success h2')).toHaveText('OTP sent on the registered email');
//     await expect(page.locator('div.otp-container')).toBeVisible();
//     const otp='0000'
//     for (let i = 0; i < otp.length; i++) {
//         await page.locator('input.otp-box').nth(i).fill(otp[i]);
//     } 
//     await page.getByRole('button', { name: 'Verify OTP' }).click();
//     await expect(page.locator('.swal2-icon-success h2')).toHaveText('OTP Verified!');
//     await page.waitForURL(/\/student\/onboard\/?$/, { timeout: 15000 ,waitUntil:'load'});

//     const currentURL = page.url();
//     console.log('Current URL after login:', currentURL);
//     expect(currentURL).toContain('/student/onboard');
// });