// For admin login with email field using OTP

import { test } from '../../fixtures/test-fixtures';

test.describe('Email OTP login', { tag: '@functional' }, () => {
  test('Nrich admin login with email id', async ({ loginPage, gotoAndAssert, testData }) => {
    await gotoAndAssert();

    await loginPage.expectLoginPopupVisible();
    await loginPage.expectEmailMode();
    await loginPage.fillEmail(testData.adminEmail);
    await loginPage.clickSignIn();
    await loginPage.expectOtpSentOnEmail();
    await loginPage.fillOtp(testData.validOtp);
    await loginPage.clickVerifyOtp();
    await loginPage.expectOtpVerified();
    await loginPage.waitForAdminOnboardUrl();
  });
});

// For teacher login with email field using OTP
// test.describe('Email OTP login', { tag: '@functional' }, () => {
//   test('Nrich teacher login with email id', async ({ page, loginPage, gotoAndAssert, testData }) => {
//     await gotoAndAssert();
//
//     await loginPage.expectLoginPopupVisible();
//     await loginPage.expectEmailMode();
//     await loginPage.fillEmail(testData.teacherEmail);
//     await loginPage.clickSignIn();
//     await loginPage.expectOtpSentOnEmail();
//     await loginPage.fillOtp(testData.validOtp);
//     await loginPage.clickVerifyOtp();
//     await loginPage.expectOtpVerified();
//     await page.waitForURL(/\/admin\/dashboard\/?$/, { timeout: 15000, waitUntil: 'load' });
//
//     const currentURL = page.url();
//     console.log('Current URL after login:', currentURL);
//     expect(currentURL).toContain('/teacher/dashboard');
//   });
// });

// For student login with email field using OTP
// test.describe('Email OTP login', { tag: '@functional' }, () => {
//   test('Nrich student login with email id', async ({ page, loginPage, gotoAndAssert, testData }) => {
//     await gotoAndAssert();
//
//     await loginPage.expectLoginPopupVisible();
//     await loginPage.expectEmailMode();
//     await loginPage.fillEmail(testData.studentEmail);
//     await loginPage.clickSignIn();
//     await loginPage.expectOtpSentOnEmail();
//     await loginPage.fillOtp(testData.validOtp);
//     await loginPage.clickVerifyOtp();
//     await loginPage.expectOtpVerified();
//     await page.waitForURL(/\/student\/onboard\/?$/, { timeout: 15000, waitUntil: 'load' });
//
//     const currentURL = page.url();
//     console.log('Current URL after login:', currentURL);
//     expect(currentURL).toContain('/student/onboard');
//   });
// });
