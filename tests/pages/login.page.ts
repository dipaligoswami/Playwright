import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginPopup: Locator;
  readonly loginLabel: Locator;
  readonly signInButton: Locator;
  readonly headerSignInButton: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly mobileRadio: Locator;
  readonly otpInputs: Locator;
  readonly verifyOtpButton: Locator;
  readonly successHeading: Locator;
  readonly otpContainer: Locator;
  readonly selectedDialCode: Locator;
  readonly indiaFlag: Locator;
  readonly countryFlagTrigger: Locator;
  readonly countryListItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginPopup = page.locator('div.row.new-login-popup');
    this.loginLabel = page.locator('label.login-form-labels');
    this.signInButton = page.locator('button.login-button-new');
    this.headerSignInButton = page.getByRole('button', { name: 'Sign In' });
    this.emailInput = page.locator('input.email-phone-input');
    this.phoneInput = page.locator('input#phone');
    this.mobileRadio = page.locator('input[value="phone"]');
    this.otpInputs = page.locator('input.otp-box');
    this.verifyOtpButton = page.getByRole('button', { name: 'Verify OTP' });
    this.successHeading = page.locator('.swal2-icon-success h2');
    this.otpContainer = page.locator('div.otp-container');
    this.selectedDialCode = page.locator('div.selected-dial-code');
    this.indiaFlag = page.locator('.iti__flag.iti__in');
    this.countryFlagTrigger = page.locator('div.iti__selected-flag');
    this.countryListItems = page.locator('.iti__country-list li');
  }

  async expectLoginPopupVisible() {
    await expect(this.loginPopup).toBeVisible();
  }

  async expectEmailMode() {
    await expect(this.loginLabel).toHaveText('Your Email');
  }

  async selectMobileLogin() {
    await this.mobileRadio.click();
    await expect(this.loginLabel).toHaveText('Your Mobile Number');
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email, { timeout: 5000 });
  }

  async fillPhone(phone: string) {
    await this.phoneInput.fill(phone, { timeout: 5000 });
  }

  async clickSignIn() {
    await this.page.getByRole('button', { name: 'Sign In', exact: true }).click();
  }

  async expectOtpSentOnEmail() {
    await expect(this.successHeading).toHaveText('OTP sent on the registered email');
    await expect(this.otpContainer).toBeVisible();
  }

  async expectOtpSentOnMobile() {
    await expect(this.successHeading).toHaveText('OTP sent on the registered mobile number');
    await expect(this.otpContainer).toBeVisible();
  }

  async fillOtp(otp: string) {
    for (let i = 0; i < otp.length; i++) {
      await this.otpInputs.nth(i).fill(otp[i]);
    }
  }

  async clickVerifyOtp() {
    await this.verifyOtpButton.click();
  }

  async expectOtpVerified() {
    await expect(this.successHeading).toHaveText('OTP Verified!');
  }

  async expectInvalidOtp() {
    await expect(this.successHeading).toHaveText('Invalid OTP!');
  }

  async verifyIndiaOnlyCountryCode() {
    await expect(this.selectedDialCode).toHaveText('+91');
    await expect(this.indiaFlag).toBeVisible();
    await this.countryFlagTrigger.click();
    await expect(this.countryListItems).toHaveCount(1);
    await expect(this.countryListItems.first()).toContainText('India');
  }

  async waitForAdminOnboardUrl(timeout = 15000) {
    await this.page.waitForURL(/\/admin\/onboard\/?$/, { timeout, waitUntil: 'load' });
    const currentURL = this.page.url();
    console.log('Current URL after login:', currentURL);
    expect(currentURL).toContain('/admin/onboard');
  }
}
