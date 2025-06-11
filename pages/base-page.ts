import { Page } from '@playwright/test';
import { LocatorManager } from '../utils/locator-manager';

export class BasePage {
  protected page: Page;
  protected locators: LocatorManager;

  constructor(page: Page) {
    this.page = page;
    this.locators = new LocatorManager(page);
  }

  async navigate(path: string) {
    await this.page.goto(path);
  }

  async waitForLoadState() {
    await this.page.waitForLoadState('networkidle');
  }
}