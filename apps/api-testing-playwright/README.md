# Playwright API Testing

Playwright is a Node.js library to automate Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.

This project is a simple example of how to use Playwright to automate API testing.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) >= 12.0.0 ([reference](https://github.com/microsoft/playwright/issues/2059#issuecomment-934346107))

## Installation

```shell
npm install
```

## Run tests locally

```shell
npx nx e2e api-testing-playwright
```

filter tests by tags included:

```shell
npx nx e2e api-testing-playwright --grep=@422
```

filter tests by tags excluded:

```shell
npx nx e2e api-testing-playwright --grepInvert=@422
```
