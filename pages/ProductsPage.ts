import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { ProductsLocators } from '../locators/ProductsLocators';

export class ProductsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async verifyUserIsLoggedIn() {
    await this.verifyElementVisible(ProductsLocators.header.TITLE_TEXT);

    const extractedLoggedInUserText = await this.page
      .locator(ProductsLocators.header.TITLE_TEXT)
      .innerText();
    expect(extractedLoggedInUserText).toContain(`Products`);
  }
}
