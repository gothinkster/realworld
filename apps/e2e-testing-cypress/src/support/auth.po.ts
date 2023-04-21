export class AuthPage {
  static getSignUpLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.findByRole('link', { name: /sign up/i });
  }

  static getSignInLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.findByRole('link', { name: /sign in/i });
  }

  static getSignOutLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.findByRole('button', { name: /or click here to logout/i });
  }

  static getSignupSubmitButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.findByRole('button', { name: /sign up/i });
  }

  static getSigninSubmitButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.findByRole('button', { name: /sign in/i });
  }

  static register(
    user: {
      username?: string;
      email?: string;
      password?: string;
    } = {},
  ): void {
    this.getSignUpLink().click();
    this.fillSignUpForm(user);
    this.getSignupSubmitButton().click();
  }

  static login(
    user: {
      email?: string;
      password?: string;
    } = {},
  ): void {
    this.getSignInLink().click();
    cy.findByPlaceholderText(/email/i).type(
      user.email || `${Cypress.env('prefix')}${Date.now()}@me.com`,
    );
    cy.findByPlaceholderText(/password/i).type(
      user.password || `${Cypress.env('prefix')}${Date.now()}`,
    );
    this.getSigninSubmitButton().click();
  }

  static logout(): void {
    cy.findByRole('link', { name: /settings/i }).click();
    this.getSignOutLink().click();
  }

  static fillSignUpForm(
    user: {
      username?: string;
      email?: string;
      password?: string;
    } = {},
  ): void {
    cy.findByPlaceholderText(/username/i).type(
      user.username || `${Cypress.env('prefix')}${Date.now()}`,
    );
    cy.findByPlaceholderText(/email/i).type(
      user.email || `${Cypress.env('prefix')}${Date.now()}@me.com`,
    );
    cy.findByPlaceholderText(/password/i).type(
      user.password || `${Cypress.env('prefix')}${Date.now()}`,
    );
  }
}
