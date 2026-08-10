import { test } from '../fixtures/test-fixtures';

test.describe('Course route smoke', { tag: '@smoke' }, () => {
  test('Nrich Course Route Smoke Test', async ({ gotoAndAssert }) => {
    await gotoAndAssert('/courses');
  });
});
