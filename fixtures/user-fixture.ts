import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ApiClient } from '../api/api-client';

type TestFixtures = {
  homePage: HomePage;
  apiClient: ApiClient;
};

export const test = base.extend<TestFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.navigate('/');
    await use(homePage);
  },
  apiClient: async ({ request }, use) => {
    const apiClient = new ApiClient(request);
    await use(apiClient);
  },
});

export { expect } from '@playwright/test';