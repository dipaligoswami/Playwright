import { test, expect } from '../../fixtures/test-fixtures';

test.describe('Admin login smoke', { tag: '@smoke' }, () => {
  test('Verify that student can login with valid registered mobile number', async ({page, loginPage, gotoAndAssert, testData }) => {
    await gotoAndAssert();

    await loginPage.selectMobileLogin();
    await loginPage.fillPhone(testData.studentMobile);
    await loginPage.clickOtpRadio();
    await loginPage.expectOtpSentOnMobile();
    await loginPage.fillOtp(testData.validOtp);
    await loginPage.clickSignIn();
    await loginPage.expectOtpVerified();
    // await loginPage.waitForAdminOnboardUrl();

    await page.waitForTimeout(5000);
  });
});
