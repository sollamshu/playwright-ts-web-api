import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { HomeLocators } from '../locators/homeLocators';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToHomePage(): Promise<void> {
    await this.navigate('/');
    await this.verifyPageTitle('Home - Execute Automation Employee App');
  }

  async clickLogin(): Promise<void> {
    await this.clickSafely(HomeLocators.header.LOGIN_LINK);
    await this.page.waitForURL('**/Login');
  }

  async verifyUserIsLoggedIn(name: string) {
    await this.verifyElementVisible(HomeLocators.loggedInUser.LOGGED_IN_USER_TEXT);

    const extractedLoggedInUserText = await this.page
      .locator(HomeLocators.loggedInUser.LOGGED_IN_USER_TEXT)
      .innerText();
    expect(extractedLoggedInUserText).toContain(`Hello ${name}!`);
  }
}
