import { test } from '../../fixtures/test-fixtures';

test.describe('Invalid email OTP', { tag: '@functional' }, () => {
  test('Nrich login with valid email but invalid otp', async ({
    loginPage,
    gotoAndAssert,
    testData,
  }) => {
    await gotoAndAssert();

    await loginPage.expectLoginPopupVisible();
    await loginPage.expectEmailMode();
    await loginPage.fillEmail(testData.teacherEmail);
    await loginPage.clickSignIn();
    await loginPage.expectOtpSentOnEmail();
    await loginPage.fillOtp(testData.invalidOtp);
    await loginPage.clickVerifyOtp();
    await loginPage.expectInvalidOtp();
    await loginPage.verifyOtpButton;
  });
});
