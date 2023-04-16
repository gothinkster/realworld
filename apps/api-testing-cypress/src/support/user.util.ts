export function registerUser(
  user: {
    username?: string;
    email?: string;
    password?: string;
  } = {
    username: `${Cypress.env('prefix')}${Date.now()}`,
    email: `${Cypress.env('prefix')}${Date.now()}`,
    password: `${Cypress.env('prefix')}${Date.now()}`,
  },
): Cypress.Chainable {
  return cy.postRequest('/api/users', {
    user,
  });
}

export function login(user: { email?: string; password?: string }): Cypress.Chainable {
  return cy.postRequest('/api/users/login', {
    user,
  });
}
