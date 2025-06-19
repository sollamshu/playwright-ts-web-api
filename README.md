# My Playwright Framework

This is a test automation framework built with Playwright, designed to handle both **Web** and **API** tests. It features a structured organization for test data, pages, locators, utilities, and reporting, with built-in mechanisms to handle flaky tests and retries.

---

## 🚀 Key Features

- **Web and API Support**: Comprehensive testing for web user interfaces and REST APIs.
- **Modular Structure**: Clear organization with dedicated folders for `tests`, `pages`, `locators`, `testdata`, and `utils`.
- **Reusable BasePage**: A `BasePage` class for common methods and safe element interactions.
- **Environment Variable Management**: `.env` file for handling base URLs, credentials, and other configurations.
- **Flaky Test Handling**:
  - **Retries**: Configurable test retries in `playwright.config.ts` for failed tests.
  - **Robust Locators**: Emphasis on stable and resilient element selectors.
  - **Safe Actions**: Methods within `BasePage` to ensure elements are interactive before performing actions.
  - **Traces and Videos**: Automatic generation of visual artifacts for debugging flaky tests.
- **HTML Reports**: Interactive and detailed HTML reports integrated with Playwright.
- **TypeScript Test Data**: Utilizes TypeScript files for test data, offering strong typing and dynamic data generation capabilities.

---

## ⚙️ Project Setup

1.  **Clone the repository** (or create the folder structure manually if copying the code):
    ```bash
    git clone <YOUR_REPOSITORY_URL>
    cd my-playwright-framework
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Configure environment variables**:
    Create a `.env` file in the project root and add your variables. Example:
    ```
    WEB_BASE_URL=[https://www.automationexercise.com](https://www.automationexercise.com)
    API_BASE_URL=[https://reqres.in/api](https://reqres.in/api)
    DEFAULT_USER=testuser
    DEFAULT_PASSWORD=password123
    ```

---

## 🏃 How to Run Tests

You can run tests using the scripts defined in `package.json`.

- **Run all tests (Web and API)**:
  ```bash
  npm test
  ```
- **Run only Web tests**:
  ```bash
  npm run test:web
  ```
- **Run only API tests**:
  ```bash
  npm run test:api
  ```
- **Run tests in UI mode (with browser and debugging tools)**:
  ```bash
  npx playwright test --ui
  ```

---

## 📊 Viewing Reports

After tests complete, an HTML report will be generated in the `playwright-report/` folder.

- **Open the HTML report in your browser**:
  ```bash
  npm run report
  ```

---

## 💅 Code Formatting

This project uses **Prettier** to enforce a consistent code style.

- **Format all code files**:

  ```bash
  npm run format
  ```

  This command will automatically reformat all `.js`, `.jsx`, `.ts`, `.tsx`, `.json`, `.css`, and `.md` files according to the `.prettierrc.json` configuration.

- **Check code formatting (without modifying files)**:

  ```bash
  npm run format:check
  ```

  Use this to verify if all files comply with the formatting rules. It's especially useful in Continuous Integration (CI) pipelines to ensure no unformatted code is committed.

- **Editor Integration**: For the best experience, install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for your code editor (e.g., VS Code) and enable "Format On Save."

---

## 🐛 Debugging

Playwright offers excellent debugging tools:

- **Debug Mode**: Run with `PWDEBUG=1 npm test` to pause execution at each step and use the Playwright inspector.
- **Traces**: If a test fails or is retried (if `retries` is configured), Playwright generates a `.zip` file with a complete trace (video, screenshots, logs). View it with:
  ```bash
  npx playwright show-trace path/to/trace.zip
  ```

---

## 🛠️ Extending the Framework

- **Add new Pages**: Create new classes in `pages/` that extend `BasePage.ts`.
- **Add new Locators**: Centralize your selectors in `locators/`.
- **Add Test Data**: Organize your data in TypeScript files within `testdata/`.
- **Add Helpers**: Create utility functions in `utils/` for reusable logic.
- **Customize Reporters**: Explore options like Allure Reporter for more advanced reporting.
