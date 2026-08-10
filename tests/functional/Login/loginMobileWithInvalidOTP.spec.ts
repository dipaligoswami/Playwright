import { test } from '../../fixtures/test-fixtures';

test.describe('Invalid mobile OTP', { tag: '@functional' }, () => {
  test('Nrich login with valid mobile with invalid otp', async ({
    loginPage,
    gotoAndAssert,
    testData,
  }) => {
    await gotoAndAssert();

    await loginPage.expectLoginPopupVisible();
    await loginPage.selectMobileLogin();
    await loginPage.fillPhone(testData.adminMobile);
    await loginPage.clickSignIn();
    await loginPage.expectOtpSentOnMobile();
    await loginPage.fillOtp(testData.invalidOtp);
    await loginPage.clickVerifyOtp();
    await loginPage.expectInvalidOtp();
    await loginPage.verifyOtpButton;
  });
});
