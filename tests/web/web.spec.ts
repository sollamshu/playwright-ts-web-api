import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { SignupPage } from '../../pages/SignupPage';
import { WebHelpers } from '../../utils/webHelpers';
import { webData } from '../../testdata/webData';

test.describe('Web Tests @web', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let signupPage: SignupPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    signupPage = new SignupPage(page);
    await homePage.navigateToHomePage();
  });

  test('Verify user is able to create account', async () => {
    const uniqueEmail = WebHelpers.generateUniqueEmail();
    const userName = webData.signup.validName;

    await homePage.clickSignupLogin();
    await loginPage.createNewUser(userName, uniqueEmail);
    await signupPage.fillAccountInformation(
      webData.signup.password,
      webData.signup.firstName,
      webData.signup.lastName,
      webData.signup.address,
      webData.signup.state,
      webData.signup.city,
      webData.signup.zipcode,
      webData.signup.mobileNumber,
    );
    await homePage.verifyUserIsLoggedIn(userName);
  });
});
