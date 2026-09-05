import { test } from '../../fixtures/test-fixtures';
import { getUserByEmail } from '../../helpers/database';

test.describe('Admin login smoke', { tag: '@smoke' }, () => {
  test('Verify that admin can login with valid registered mobile number', async ({ loginPage, gotoAndAssert, testData }) => {
    await gotoAndAssert();

    await loginPage.expectEmailMode();
    await loginPage.fillEmail(testData.adminEmail);
    await loginPage.clickOtpRadio();
    await loginPage.expectOtpSentOnEmail();
    const user = await getUserByEmail(testData.adminEmail);
    await loginPage.fillOtp(user.loginotp);
    await loginPage.clickSignIn();
    await loginPage.expectOtpVerified();
    await loginPage.waitForAdminOnboardUrl();
  });
});
