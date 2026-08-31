import { test } from '../../fixtures/test-fixtures';

test.describe('Admin login smoke', { tag: '@smoke' }, () => {
  test('Nrich login with mobile', async ({ loginPage, gotoAndAssert, testData }) => {
    await gotoAndAssert();

    await loginPage.expectLoginPopupVisible();
    await loginPage.selectMobileLogin();
    await loginPage.fillPhone(testData.adminMobile);
    await loginPage.clickSignIn();
    await loginPage.expectOtpSentOnMobile();
    await loginPage.fillOtp(testData.validOtp);
    await loginPage.clickVerifyOtp();
    await loginPage.expectOtpVerified();
    await loginPage.waitForAdminOnboardUrl();
  });

  test('Nrich login with email id', async ({ loginPage, gotoAndAssert, testData }) => {
    await gotoAndAssert();

    await loginPage.expectLoginPopupVisible();
    await loginPage.expectEmailMode();
    await loginPage.fillEmail(testData.teacherEmail);
    await loginPage.clickSignIn();
    await loginPage.expectOtpSentOnEmail();
    await loginPage.fillOtp(testData.validOtp);
    await loginPage.clickVerifyOtp();
    await loginPage.expectOtpVerified();
    await loginPage.waitForAdminOnboardUrl();
  });
});
