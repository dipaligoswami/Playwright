import { test, expect } from '../../fixtures/test-fixtures';
import { getUserByMobile } from '../../helpers/database';

test.describe('Admin login smoke', { tag: '@smoke' }, () => {
  test('Verify that student can login with valid registered mobile number', async ({page, loginPage, gotoAndAssert, testData }) => {
    await gotoAndAssert();

    await loginPage.selectMobileLogin();
    await loginPage.fillPhone(testData.studentMobile);
    await loginPage.clickOtpRadio();
    await loginPage.expectOtpSentOnMobile();
    const user = await getUserByMobile(testData.studentMobile);
    await loginPage.fillOtp(user.loginotp);
    await loginPage.clickSignIn();
    await loginPage.expectOtpVerified();
    // await loginPage.waitForAdminOnboardUrl();

    await page.waitForTimeout(5000);
  });
});
