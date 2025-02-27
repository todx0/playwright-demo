# E2E Test example in Playwright


#### Description
- [Page Object Pattern](https://playwright.dev/docs/pom)
- GitHub Action [workflow for CI/CD](.github/workflows/run-tests.yml)
- GitHub Pages for [Allure reporting](https://todx0.github.io/playwright-demo)
- Supports full parallelization:
```bash
npx playwright test --repeat-each=4 
```
#### Install
```bash
npm install
```

#### Run tests
```bash
npm run test
npm run test:ui
```