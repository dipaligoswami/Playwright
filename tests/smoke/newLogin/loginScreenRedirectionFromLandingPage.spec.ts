import { test, expect } from '../../fixtures/test-fixtures';

test.describe('Admin login smoke', { tag: '@smoke' }, () => {
  test('Verify that user able to redirect to login screen from landing page', async ({ page, loginPage, gotoAndAssert, testData }) => {
    await gotoAndAssert(`https://nrichlearning.com`);
    await page.locator('.creator-sign-in .btn-text').click();
    await expect(page).toHaveURL(/https:\/\/app\.nrichlearning\.com/);
  });
});
