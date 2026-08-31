import { test } from '../../fixtures/test-fixtures';

test.describe('Admin login smoke', { tag: '@smoke' }, () => {
  test('Verify that admin can login with valid registered mobile number', async ({ loginPage, gotoAndAssert, testData }) => {
    await gotoAndAssert();

    await loginPage.selectMobileLogin();
    await loginPage.fillPhone(testData.adminMobile);
    await loginPage.clickOtpRadio();
    await loginPage.expectOtpSentOnMobile();
    await loginPage.fillOtp(testData.validOtp);
    await loginPage.clickSignIn();
    await loginPage.expectOtpVerified();
    await loginPage.waitForAdminOnboardUrl();
  });
});
