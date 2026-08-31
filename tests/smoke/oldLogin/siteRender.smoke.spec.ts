import { test, expect } from '../../fixtures/test-fixtures';

test.describe('Site render smoke', { tag: '@smoke' }, () => {
  test('Nrich site is opening or not', async ({ page, gotoAndAssert }) => {
    await gotoAndAssert('/', { waitUntil: 'networkidle' });
    await expect(page).toHaveURL(/nrichlearning\.com/);
    await expect(page.locator('body')).toBeVisible();
  });
});
