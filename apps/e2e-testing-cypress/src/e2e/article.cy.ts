import { ArticlePage } from '../support/article.po';
import { AuthPage } from '../support/auth.po';

describe('Article', () => {
  it('should create an article', () => {
    // Given
    const articleTitle = `${Cypress.env('prefix')}${Date.now()}`;
    AuthPage.register();

    // When
    ArticlePage.navigateToCreation();
    ArticlePage.fillArticleForm({ title: articleTitle });
    ArticlePage.submitArticle();

    // Then
    cy.findByRole('heading', { name: articleTitle }).should('exist');
  });

  it('should delete an article', () => {
    // Given
    const username = `${Cypress.env('prefix')}${Date.now()}`;
    AuthPage.register({ username });
    ArticlePage.createArticle();

    // When
    // TODO fix with findByRole
    ArticlePage.getDeleteButton().click();
    cy.findByRole('link', { name: username }).click();

    // Then
    cy.get('body').should('contain', 'No articles are here... yet.');
  });

  it('should edit an article', () => {
    // Given
    AuthPage.register();
    ArticlePage.createArticle();

    // When
    // TODO fix with findByRole
    cy.get('.btn-outline-secondary').contains('Edit Article').click();

    cy.findByPlaceholderText(/article title/i).within(input => {
      cy.wrap(input).clear();
      cy.wrap(input).type('My article edited');
    });

    cy.findByPlaceholderText(/what's this article about?/i).within(input => {
      cy.wrap(input).clear();
      cy.wrap(input).type('This is my article edited');
    });

    cy.findByPlaceholderText(/write your article/i).within(input => {
      cy.wrap(input).clear();
      cy.wrap(input).type('This is my article edited');
    });

    cy.findByRole('button', { name: /publish article/i }).click();

    // Then
    cy.findByRole('heading', { name: /my article edited/i }).should('exist');
  });

  it('should redirect to signup when trying to favorite an article while being logged out', () => {
    // When
    ArticlePage.getFavoriteButton().first().click();

    // Then
    cy.findByRole('heading', { name: /sign up/i }).should('exist');
  });

  // TODO add check favorited articles
  xit('should favorite an article', () => {
    // Given
    AuthPage.register();
    ArticlePage.createArticle();

    // When
    cy.findByRole('link', { name: /home/i }).click();
    cy.findByRole('link', { name: /my article/i }).click();
    cy.findByRole('button', { name: /favorite article/i }).click();

    // Then
    cy.findByRole('button', { name: /unfavorite article/i }).should('exist');
  });

  xit('should unfavorite an article', () => {
    // Given
    AuthPage.register();
    ArticlePage.createArticle();

    cy.findByRole('link', { name: /home/i }).click();
    cy.findByRole('link', { name: /my article/i }).click();
    cy.findByRole('button', { name: /favorite article/i }).click();

    // When
    cy.findByRole('button', { name: /unfavorite article/i }).click();

    // Then
    cy.findByRole('button', { name: /favorite article/i }).should('exist');
  });

  xit('should display the article author', () => {
    // Given
    AuthPage.register();
    ArticlePage.createArticle();

    // When
    cy.findByRole('link', { name: /home/i }).click();
    cy.findByRole('link', { name: /my article/i }).click();

    // Then
    cy.findByRole('link', { name: /my user/i }).should('exist');
  });

  xit('should add tags to an article', () => {
    // Given
    AuthPage.register();
    ArticlePage.createArticle();

    cy.findByRole('link', { name: /home/i }).click();
    cy.findByRole('link', { name: /my article/i }).click();

    // When
    cy.findByRole('link', { name: /edit article/i }).click();
    cy.findByPlaceholderText(/enter tags/i).type('tag1{enter}');
    cy.findByRole('button', { name: /publish article/i }).click();

    // Then
    cy.findByRole('link', { name: /tag1/i }).should('exist');
  });

  xit('should add a comment to an article', () => {
    // Given
    AuthPage.register();
    ArticlePage.createArticle();

    cy.findByRole('link', { name: /home/i }).click();
    cy.findByRole('link', { name: /my article/i }).click();

    // When
    const comment = `${Cypress.env('prefix')}${Date.now()}`;
    ArticlePage.createComment(comment);

    // Then
    cy.findByText(comment).should('exist');
  });
});
