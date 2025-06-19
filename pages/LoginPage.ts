import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginLocators } from '../locators/loginLocators';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async createNewUser(userName: string, uniqueEmail: string): Promise<void> {
    await this.fillSafely(LoginLocators.NAME_INPUT, userName);
    await this.fillSafely(LoginLocators.EMAIL_INPUT, uniqueEmail);
    await this.clickSafely(LoginLocators.SIGNUP_BUTTON);
    await this.page.waitForURL('**/signup');
  }
}
