// tests/pages/login.page.ts
import { expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
    loginLabel: any;
    loginPopup: any;
    signInButton: any;
    headerSignInButton: any;

  constructor(page: Page) {
    this.page = page;
    this.loginPopup = this.page.locator('div.row.new-login-popup');
    this.loginLabel = this.page.locator('label.login-form-labels');
    this.signInButton = this.page.locator('button.login-button-new');
    this.headerSignInButton = this.page.getByRole('button', { name: 'Sign In' });
  }


 
  /* ========= FUNCTIONS ========= */

  async openLoginPopupIfNeeded() {
    if (await this.loginPopup.isVisible().catch(() => false)) {
      return;
    }

    await expect(this.headerSignInButton).toBeVisible();
    await this.headerSignInButton.click();
    await expect(this.loginPopup).toBeVisible();
  }

//   async selectMobileLogin() {
//     await this.mobileRadio.click();
//     await expect(this.loginLabel).toHaveText('Your Mobile Number');
//   }

//   async verifyIndiaOnlyCountryCode() {
//     await expect(this.countryCode).toHaveText('+91');
//     await expect(this.indiaFlag).toBeVisible();

//     await this.page.locator('.iti__selected-flag').click();
//     await expect(this.countryListItems).toHaveCount(1);
//     await expect(this.countryListItems.first()).toContainText('India');
//   }
}
