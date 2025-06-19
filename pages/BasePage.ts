import { Page, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async verifyPageTitle(title: string): Promise<void> {
    await expect(this.page).toHaveTitle(title);
  }

  async verifyElementVisible(locator: string, timeout: number = 10000): Promise<void> {
    await expect(this.page.locator(locator)).toBeVisible({ timeout });
  }

  async clickSafely(locator: string): Promise<void> {
    const element = this.page.locator(locator);
    await expect(element).toBeEnabled();
    await element.click();
  }

  async fillSafely(locator: string, value: string): Promise<void> {
    const element = this.page.locator(locator);
    await expect(element).toBeEnabled();
    await element.fill(value);
  }
}
