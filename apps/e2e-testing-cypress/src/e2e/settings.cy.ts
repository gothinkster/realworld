import { AuthPage } from '../support/auth.po';

describe('Settings', () => {
  it('should update the user settings', () => {
    // Given
    const username = `${Cypress.env('prefix')}${Date.now()}`;
    AuthPage.register({ username });

    // When
    cy.findByRole('link', { name: username }).click();
    // TODO fill form
    // TODO submit form

    // Then
    // TODO test result
  });
});
