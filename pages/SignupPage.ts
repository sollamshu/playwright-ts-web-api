import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { SignupLocators } from '../locators/signupLocators';

export class SignupPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async fillAccountInformation(
    password: string,
    firstName: string,
    lastName: string,
    address: string,
    state: string,
    city: string,
    zipCode: string,
    mobileNumber: string,
  ): Promise<void> {
    await this.fillSafely(SignupLocators.PASSWORD_INPUT, password);
    await this.fillSafely(SignupLocators.FIRST_NAME_INPUT, firstName);
    await this.fillSafely(SignupLocators.LAST_NAME_INPUT, lastName);
    await this.fillSafely(SignupLocators.ADDRESS_INPUT, address);
    await this.fillSafely(SignupLocators.STATE_INPUT, state);
    await this.fillSafely(SignupLocators.CITY_INPUT, city);
    await this.fillSafely(SignupLocators.ZIP_CODE_INPUT, zipCode);
    await this.fillSafely(SignupLocators.MOBILE_NUMBER_INPUT, mobileNumber);
    await this.clickSafely(SignupLocators.CREATE_ACCOUNT_BUTTON);
    await this.clickSafely(SignupLocators.CONTINUE_BUTTON);
  }
}
