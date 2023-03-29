# Cypress API Testing

Cypress is a next generation front end testing tool built for the modern web. Cypress is a complete end to end testing framework that runs in the browser.

This project is a simple example of how to use Cypress to automate API testing.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) >= 12.0.0 ([reference](https://github.com/microsoft/playwright/issues/2059#issuecomment-934346107))

## Installation

```shell
npm install
```

## Run tests locally

```shell
npx nx e2e api-testing-cypress
```

filter tests by tags included:

```shell
npx nx e2e api-testing-cypress --grep=@422
```

filter tests by tags excluded:

```shell
npx nx e2e api-testing-playwright --grepInvert=@422
```
