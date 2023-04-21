import { AuthPage } from '../support/auth.po';
import { FeedPage } from '../support/feed.po';

describe('Home', () => {
  it('should display the global feed', () => {
    // When
    FeedPage.getGlobalFeedTab().click();

    // Then
    cy.get('.article-meta').should('have.length', 10);
  });

  it('should not display the feed if the user is not logged in', () => {
    // Then
    FeedPage.getYourFeedTab().should('not.exist');
  });

  it('should display the feed if the user is logged in', () => {
    // When
    AuthPage.register();

    // Then
    FeedPage.getYourFeedTab().should('exist');
  });

  it('should display the list of popular tags', () => {
    // Then
    cy.contains('Popular Tags')
      .parent()
      .within(() => {
        cy.get('.tag-default').should('have.length', 10);
      });
  });

  it('should favorite an article', () => {
    // Given
    cy.intercept('POST', '**/api/articles/*/favorite').as('favorite');

    // When
    FeedPage.getGlobalFeedTab().click();
    cy.get('.article-meta').first().find('button').click();

    AuthPage.fillSignUpForm();
    AuthPage.getSignupSubmitButton().click();

    cy.findByRole('link', { name: /home/i }).click();
    FeedPage.getGlobalFeedTab().click();
    cy.get('.article-meta').first().find('button').click();
    cy.wait('@favorite');

    // Then
    cy.get('.article-meta', { timeout: 10000 })
      .first()
      .find('button')
      .should('have.class', 'btn-primary');
  });
});
