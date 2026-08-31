import { test } from '../../fixtures/test-fixtures';

test.describe('Admin login smoke', { tag: '@smoke' }, () => {
  test('Verify that admin can login with valid registered mobile number', async ({ loginPage, gotoAndAssert, testData }) => {
    await gotoAndAssert();

    await loginPage.expectEmailMode();
    await loginPage.fillEmail(testData.adminEmail);
    await loginPage.clickOtpRadio();
    await loginPage.expectOtpSentOnEmail();
    await loginPage.fillOtp(testData.invalidOtp);
    await loginPage.clickSignIn();
    await loginPage.expectInvalidOtp();
  });
});
