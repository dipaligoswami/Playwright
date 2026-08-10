import { test, expect } from '../../fixtures/test-fixtures';

test.describe('Login screen validation', { tag: '@functional' }, () => {
  test('Login screen if nothing enterd', async ({ page, loginPage, gotoAndAssert }) => {
    await gotoAndAssert();

    await loginPage.expectLoginPopupVisible();
    await loginPage.expectEmailMode();
    await expect(loginPage.signInButton).toHaveClass(/btn-disabled/);

    await loginPage.loginLabel.click({ force: true });
    await expect(page).not.toHaveURL(/otp|dashboard|onboard/);
  });
});
