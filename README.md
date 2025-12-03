# ESS-QAAutomation

Playwright + TypeScript test repository — improved developer ergonomics and CI-ready configs.

## Quickstart

1. Install dependencies

```powershell
npm ci
```

2. Install Playwright browsers (Linux/Windows/macOS)

```powershell
npm run install-browsers
```

3. Run tests

```powershell
npm test
# or headed
npm run test:headed
```

4. View HTML report

```powershell
npm run report
# or
npx playwright show-report
```

## Useful scripts

- `npm test` — run test suite
- `npm run test:headed` — run tests in headed mode
- `npm run install-browsers` — install Playwright browsers and dependencies
- `npm run lint` — run ESLint
- `npm run lint:fix` — run ESLint autofix
- `npm run format` — format source files with Prettier

## Configuration notes

- `playwright.config.ts` reads `BASE_URL` from env; set `BASE_URL` in CI or `.env` for local runs.
- `playwright.config.ts` reads `BASE_URL` from env; set `BASE_URL` in CI or `.env` for local runs.
- Reports are written to `playwright-report/`. Test artifacts (screenshots, videos, traces) and JUnit XML are placed in `test-results/`.

Commands:

```powershell
# install dependencies and husky hooks (prepare runs automatically)
npm ci

# manually install hooks (if needed)
# Use explicit .husky directory to avoid deprecation warnings
npx husky install .husky

# Alternative: run husky initializer once to scaffold hooks
npx husky-init && npm install

# run lint for all files
npm run lint

# fix staged files automatically (pre-commit will also run this)
npm run lint:fix
```

If a hook modifies staged files, re-stage them (`git add`) and re-run `git commit`.

## CI

A GitHub Actions workflow is included at `.github/workflows/playwright.yml` which installs dependencies, installs browsers, runs tests, and uploads artifacts (report, junit, screenshots/videos).

## Contributing

- Use stable selectors for tests (prefer `data-testid` or `data-qa` attributes).
- Keep tests independent and idempotent; avoid global state between tests.
- For new pages, add Page Objects under `src/pages/` and use fixtures from Playwright.

