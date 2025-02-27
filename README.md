# E2E Test example in Playwright


#### Description

- [Page Object Pattern](https://playwright.dev/docs/pom)
- GitHub Action [workflow for CI/CD](.github/workflows/run-tests.yml)
- GitHub Pages for [Allure reporting](https://todx0.github.io/playwright-demo)
- Supports full parallelization:
```bash
npx playwright test --repeat-each=4 
```
#### Installation

Clone the repository and go to directory
```bash
git clone https://github.com/todx0/playwright-demo.git && cd playwright-demo
```

Create `.env` and set `EMAIL` and `PASSWORD`
```bash
cp .env.example .env
```
Install dependencies
```bash
npm install
```
You also may need to install Playwright
```bash
npx playwright install --with-deps
```

#### Run tests
```bash
npm run test
npm run test:ui
```