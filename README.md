# Playwright Testing Framework

## Setup
1. Install Node.js (v20 or higher)
2. Run `npm install`
3. Install Playwright browsers: `npx playwright install`

## Running Tests
- Run all tests: `npm test`
- Run specific test: `npx playwright test tests/web/home-page.spec.ts`
- Run in headed mode: `npx playwright test --headed`
- Generate report: `npx playwright show-report`

## Features
- Page Object Model for maintainable web tests
- API client with retry logic
- Custom fixtures for reusable setup
- Locator manager for robust element selection
- GitHub Actions workflow for CI/CD
- Webserver integration for local testing
- Automatic retries for flaky tests