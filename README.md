 Playwright Test Automation

This project is an end-to-end test automation framework for CoverGo, built using [Playwright](https://playwright.dev/) with TypeScript.  
It uses the Page Object Model (POM), dynamic test data, Allure reporting, and clean project structure to ensure scalable and maintainable automation.


### Prerequisites
- Node.js(v16 or later)
- Clone the repo
- Open project in VSCode
- Run command "npm install"

### Running the test

- Run command "npx playwright test"

### viewing the allure report

- Run command "allure serve"


### Project Highlights
Fixture setup:
A Playwright fixture is created to centralize common objects like page instances, so you don’t need to create them repeatedly in each test.

Global setup file:
A global-setup.ts script generates dynamic test data and stores it in testData.json before running the test suite.

Login and logout fixture:
Reusable login and logout flows are implemented as fixtures to avoid repetition and improve maintainability.

Helper class:
A utility class is provided to generate random test data (like unique names, IDs) and store it for use across tests.

Page Object Model (POM) implementation:

PageElements classes isolate all page selectors.

PageActions classes contain reusable page action methods.
This separation improves test readability and scalability.

Allure reporting:
Integrated with Allure to generate clean, interactive reports showing test results, steps, attachments, and failure details.



