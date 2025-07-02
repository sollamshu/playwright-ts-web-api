import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { webData } from '../../testdata/webData';

test.describe('Web Tests @web', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    await homePage.navigateToHomePage();
  });

  test.afterEach(async ({ page }) => {
    await page.context().close();
  });

  test('Verify user is able to login with valid credentials', async () => {
    const username = webData.signIn.validUsername;
    const password = webData.signIn.password;

    await homePage.clickLogin();
    await loginPage.signIn(username, password);
    await homePage.verifyUserIsLoggedIn(username);
  });
});
