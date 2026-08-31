import { test } from '../../fixtures/test-fixtures';

test.describe('Admin login smoke', { tag: '@smoke' }, () => {
  test('Verify that admin cannot login with invalid registered mobile number', async ({ loginPage, gotoAndAssert, testData }) => {
    await gotoAndAssert();

    await loginPage.selectMobileLogin();
    await loginPage.fillPhone(testData.adminMobile);
    await loginPage.clickOtpRadio();
    await loginPage.expectOtpSentOnMobile();
    await loginPage.fillOtp(testData.invalidOtp);
    await loginPage.clickSignIn();
    await loginPage.expectInvalidOtp();
  });
});
