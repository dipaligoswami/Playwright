import { test as base, expect } from '@playwright/test';
import { testData, TestData } from '../data/credentials';
import { gotoAndAssertOk } from '../helpers/navigation';
import { LoginPage } from '../pages/login.page';

type GotoOptions = {
  waitUntil?: 'domcontentloaded' | 'networkidle' | 'load';
};

type TestFixtures = {
  loginPage: LoginPage;
  testData: TestData;
  gotoAndAssert: (url?: string, options?: GotoOptions) => Promise<void>;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  testData: async ({}, use) => {
    await use(testData);
  },

  gotoAndAssert: async ({ page }, use) => {
    await use(async (url = '/', options = {}) => {
      await gotoAndAssertOk(page, url, options);
    });
  },
});

export { expect };
