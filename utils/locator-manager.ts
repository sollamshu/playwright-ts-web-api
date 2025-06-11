import { Page, Locator } from '@playwright/test';

export class LocatorManager {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get(selector: string, options?: { hasText?: string; nth?: number }): Locator {
    let locator = this.page.locator(selector);
    if (options?.hasText) {
      locator = locator.filter({ hasText: options.hasText });
    }
    if (options?.nth !== undefined) {
      locator = locator.nth(options.nth);
    }
    return locator;
  }

  async waitForLocator(selector: string, options?: { timeout?: number }) {
    const locator = this.get(selector);
    await locator.waitFor({ state: 'visible', timeout: options?.timeout ?? 10000 });
    return locator;
  }
}