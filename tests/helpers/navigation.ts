import { expect, Page, Response } from '@playwright/test';

type GotoOptions = {
  waitUntil?: 'domcontentloaded' | 'networkidle' | 'load';
};

export async function gotoAndAssertOk(
  page: Page,
  url: string = '/',
  options: GotoOptions = {},
): Promise<Response> {
  const { waitUntil = 'domcontentloaded' } = options;
  const response = await page.goto(url, { waitUntil });
  expect(response).not.toBeNull();
  expect(response!.status()).toBeLessThan(400);
  return response!;
}
