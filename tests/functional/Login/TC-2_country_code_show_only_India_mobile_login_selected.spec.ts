import { test } from '../../fixtures/test-fixtures';

test.describe('Mobile login country code', { tag: '@functional' }, () => {
  test('Country code should show only India when mobile login is selected', async ({
    loginPage,
    gotoAndAssert,
  }) => {
    await gotoAndAssert();

    await loginPage.expectLoginPopupVisible();
    await loginPage.expectEmailMode();
    await loginPage.selectMobileLogin();
    await loginPage.verifyIndiaOnlyCountryCode();
  });
});
