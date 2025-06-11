import { test, expect } from '../../fixtures/user-fixture';

test.describe('Home Page Tests', () => {
  test('should display header', async ({ homePage }) => {
    await homePage.verifyHeader();
  });

  test('should navigate to login', async ({ homePage }) => {
    await homePage.clickLogin();
    await homePage.verifyUrl(/login/);
  });
});