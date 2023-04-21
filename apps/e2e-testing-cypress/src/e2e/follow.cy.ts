import { AuthPage } from '../support/auth.po';

describe('Follow', () => {
  beforeEach(() => cy.visit('/'));
  it('should follow a user', () => {
    // Given
    AuthPage.register();

    // When
    cy.findByRole('link', { name: /global feed/i }).click();
    cy.get('.article-meta').first().find('a').first().click();
    cy.findByRole('button', { name: /follow/i }).click();
    cy.findByRole('link', { name: /home/i }).click();

    // Then
    cy.findByRole('link', { name: /your feed/i }).click();
    cy.get('.article-meta').first().find('a').first().should('exist');
  });
});
