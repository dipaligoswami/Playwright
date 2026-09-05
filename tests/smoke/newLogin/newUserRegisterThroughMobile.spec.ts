import { test } from '../../fixtures/test-fixtures';
import { createUserThroughMobile } from '../../helpers/database';

test.describe('User register through mobile smoke', { tag: '@smoke' }, () => {
  test('Verify that new user can register with valid registered mobile number from nrich main domain', async ({ loginPage, gotoAndAssert, testData }) => {
    await gotoAndAssert();

    const newUserMobile = `9${Math.floor(100000000 + Math.random() * 900000000)}`;

    await loginPage.selectMobileLogin();
    await loginPage.fillPhone(newUserMobile);
    await loginPage.clickOtpRadio();
    await loginPage.expectOtpSentOnMobile();
    const user = await createUserThroughMobile(newUserMobile);
    console.log(user)
    await loginPage.fillOtp(user.loginotp);
    await loginPage.clickSignIn();
    await loginPage.expectOtpVerified();
    // await loginPage.waitForAdminOnboardUrl();
  });
});
