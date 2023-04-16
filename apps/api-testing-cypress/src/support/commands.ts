// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    getRequest(endpoint: string, token?: string): Chainable<Subject>;
    postRequest(endpoint: string, body: unknown, token?: string): Chainable<Subject>;
    putRequest(endpoint: string, body: unknown, token?: string): Chainable<Subject>;
    deleteRequest(endpoint: string, token?: string): Chainable<Subject>;
  }
}

Cypress.Commands.add('getRequest', (endpoint, token) => {
  // TODO missing token
  console.log('get request', token);
  return cy.api({
    method: 'GET',
    url: `${Cypress.env('baseUrl')}${endpoint}`,
    failOnStatusCode: false,
    ...(token && { headers: { Authorization: `Token ${token}` } }),
  });
});

Cypress.Commands.add('postRequest', (endpoint, body, token) => {
  return cy.api({
    method: 'POST',
    url: `${Cypress.env('baseUrl')}${endpoint}`,
    body,
    failOnStatusCode: false,
    ...(token && { headers: { Authorization: `Token ${token}` } }),
  });
});

Cypress.Commands.add('putRequest', (endpoint, body, token) => {
  return cy.api({
    method: 'PUT',
    url: `${Cypress.env('baseUrl')}${endpoint}`,
    body,
    failOnStatusCode: false,
    ...(token && { headers: { Authorization: `Token ${token}` } }),
  });
});

Cypress.Commands.add('deleteRequest', (endpoint, token) => {
  return cy.api({
    method: 'DELETE',
    url: `${Cypress.env('baseUrl')}${endpoint}`,
    failOnStatusCode: false,
    ...(token && { headers: { Authorization: `Token ${token}` } }),
  });
});
