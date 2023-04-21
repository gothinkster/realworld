import { AuthPage } from '../support/auth.po';

describe('Register', () => {
  beforeEach(() => cy.visit(''));
  it('should register a new user', () => {
    // Given
    const username = `${Cypress.env('prefix')}${Date.now()}`;

    // When
    AuthPage.register({ username });

    // Then
    cy.findByRole('link', { name: username }).should('exist');
  });

  it('should not register a new user with an existing username', () => {
    // Given
    const username = 'gerome';

    // When
    AuthPage.register({ username });

    // Then
    cy.get('.error-messages').should('contain', 'username has already been taken');
  });

  it('should not register a new user with an existing email', () => {
    // Given
    const email = 'gerom@me';

    // When
    AuthPage.register({ email });

    // Then
    cy.get('.error-messages').should('contain', 'email has already been taken');
  });

  it('should redirect the user to the login page', () => {
    // When
    AuthPage.getSignUpLink().click();
    cy.findByRole('link', { name: /have an account/i }).click();

    // Then
    AuthPage.getSigninSubmitButton().should('exist');
  });

  it('should redirect the user to the register page', () => {
    // When
    AuthPage.getSignInLink().click();
    cy.findByRole('link', { name: /need an account/i }).click();

    // Then
    AuthPage.getSignupSubmitButton().should('exist');
  });

  it('should login a user', () => {
    // Given
    const user = {
      username: `${Cypress.env('prefix')}${Date.now()}`,
      email: `${Cypress.env('prefix')}${Date.now()}@me.com`,
      password: `${Cypress.env('prefix')}${Date.now()}`,
    };

    AuthPage.register(user);
    AuthPage.logout();

    // When
    AuthPage.login({
      email: user.email,
      password: user.password,
    });

    // Then
    cy.findByRole('link', { name: user.username }).should('exist');
  });

  // TODO test cookies

  it('should display header auth links when user is logged out', () => {
    // Then
    AuthPage.getSignInLink().should('exist');
    AuthPage.getSignUpLink().should('exist');
  });

  it('should not display header auth links when user is logged in', () => {
    // When
    AuthPage.register();

    // Then
    AuthPage.getSignInLink().should('not.exist');
    AuthPage.getSignUpLink().should('not.exist');
  });
});
