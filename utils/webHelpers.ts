import { Page } from '@playwright/test';

export class WebHelpers {
  static generateUniqueEmail(): string {
    const timestamp = new Date().getTime();
    return `testuser_${timestamp}@example.com`;
  }

  static async waitForElementDetachment(
    page: Page,
    locator: string,
    timeout: number = 10000,
  ): Promise<void> {
    await page.locator(locator).waitFor({ state: 'hidden', timeout });
  }
}
