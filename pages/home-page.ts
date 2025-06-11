import { BasePage } from './base-page';
import { expect } from '@playwright/test';

export class HomePage extends BasePage {
  private elements = {
    header: () => this.locators.get('h1', { hasText: 'Example Domain' }),
    loginButton: () => this.locators.get('button', { hasText: 'Login' }),
  };

  async verifyHeader() {
    await expect(this.elements.header()).toBeVisible();
  }

  async clickLogin() {
    await this.elements.loginButton().click();
  }

  async verifyUrl(pattern: RegExp) {
    await expect(this.page).toHaveURL(pattern);
  }
}