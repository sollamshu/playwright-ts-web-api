import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { webData } from '../../testdata/webData';

test.describe('Web Tests @web', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.navigateToHomePage();
  });

  test.afterEach(async ({ page }) => {
    await page.context().close();
  });

  test('Verify user is able to login with valid credentials', async () => {
    const username = webData.signIn.username;
    const password = webData.signIn.password;

    await loginPage.signIn(username, password);
    await productsPage.verifyUserIsLoggedIn();
  });
});
