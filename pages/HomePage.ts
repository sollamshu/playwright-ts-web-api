import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { HomeLocators } from '../locators/homeLocators';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToHomePage(): Promise<void> {
    await this.navigate('/');
    await this.verifyPageTitle('Automation Exercise');
  }

  async clickSignupLogin(): Promise<void> {
    await this.clickSafely(HomeLocators.SIGNUP_LOGIN_LINK);
    await this.page.waitForURL('**/login');
  }

  async verifyUserIsLoggedIn(name: string) {
    await this.verifyElementVisible(HomeLocators.LOGGED_IN_USER_TEXT);

    const extractedLoggedInUserText = await this.page
      .locator(HomeLocators.LOGGED_IN_USER_TEXT)
      .innerText();
    expect(extractedLoggedInUserText).toContain(`Logged in as ${name}`);
  }
}
