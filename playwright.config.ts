import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 60 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  use: {
    trace: 'on-first-retry',
    baseURL: process.env.WEB_BASE_URL || 'http://localhost',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      testMatch: /.*web.spec.ts/,
      use: {
        ...devices['Desktop Chrome'],
        deviceScaleFactor: undefined,
        viewport: null,
        launchOptions: { args: ['--start-maximized'] },
      },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'api',
      testMatch: /.*api.spec.ts/,
      use: {
        baseURL: process.env.API_BASE_URL || 'http://localhost:3000/api',
        extraHTTPHeaders: {
          Accept: 'application/json',
          ...(process.env.API_BASE_KEY && { 'x-api-key': process.env.API_BASE_KEY }),
        },
      },
    },
  ],
});
