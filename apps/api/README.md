# Conduit demo API

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) >= 12.0.0 ([reference](https://github.com/microsoft/playwright/issues/2059#issuecomment-934346107))

## Installation

```shell
npm install
```

## Run tests locally

```shell
npx nx test api
```

filter tests by tags included:

```shell
npx nx e2e api-testing-cypress --grep=@422
```

filter tests by tags excluded:

```shell
npx nx e2e api-testing-playwright --grepInvert=@422
```

## Debugging

> Cypress does not actually make an XHR request from the browser. We are actually making the HTTP request from Cypress (in Node). So, you won't see the request inside of your Developer Tools.

This project uses [cy-api](https://github.com/bahmutov/cy-api) to display the request and the response in the Cypress UI.
Use `--watch` option to run the Cypress headed mode to display it.
