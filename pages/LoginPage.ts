import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginLocators } from '../locators/LoginLocators';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async signIn(userName: string, password: string): Promise<void> {
    await this.fillSafely(LoginLocators.signIn.USER_NAME_INPUT, userName);
    await this.fillSafely(LoginLocators.signIn.PASSWORD_INPUT, password);
    await this.clickSafely(LoginLocators.signIn.LOG_IN_BUTTON);
  }
}
