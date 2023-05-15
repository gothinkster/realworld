import { AuthPage } from '../support/auth.po';
import { FeedPage } from '../support/feed.po';
import { ArticlePage } from '../support/article.po';

describe('Home', () => {
  it('should display the global feed', () => {
    // When
    FeedPage.getGlobalFeedTab().click();

    // Then
    cy.get('.article-meta').should('have.length', 10);
  });

  it('should not display the personal feed if the user is not logged in', () => {
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
    FeedPage.getPopularTags().should('have.length', 10);
  });

  it('should display a new tab by clicking on a popular tag', () => {
    // When
    FeedPage.getPopularTags()
      .first()
      .then(tag => {
        cy.wrap(tag).as('tag');
        cy.wrap(tag).click();
      });

    // Then
    cy.get('@tag')
      .invoke('text')
      .then(tagName => {
        FeedPage.getTagFeedTab(tagName).should('have.class', 'active');
      });
  });

  it('should focus a new tab by clicking on a popular tag', () => {
    // When
    FeedPage.getPopularTags()
      .first()
      .then(tag => {
        cy.wrap(tag).as('tag');
        cy.wrap(tag).click();
      });

    // Then
    cy.get('@tag')
      .invoke('text')
      .then(tagName => {
        FeedPage.getTagFeedTab(tagName).should('have.class', 'active');
      });
  });

  it('should navigate to an article by clicking on its preview', () => {
    // When
    FeedPage.getArticlesPreview()
      .first()
      .within(articlePreview => {
        cy.findByRole('heading', { level: 1 }).as('articleTitle');
        cy.wrap(articlePreview).click();
      });

    // Then
    cy.get('@articleTitle')
      .invoke('text')
      .then(title => {
        ArticlePage.getArticleTitle(title).should('exist');
      });
  });

  it('should display the first active pagination link', () => {
    // Then
    FeedPage.getPaginationLinks().first().should('have.text', '1');
    FeedPage.getPaginationLinks().first().parent().should('have.class', 'active');
  });

  it('shold display a single active pagination link', () => {
    // Then
    cy.get('.pagination').find('.active').should('have.length', 1);
  });

  it('should display the loading message when loading articles', () => {
    // Then
    FeedPage.getLoadingMessage().should('exist');
  });

  xit('should favorite an article', () => {
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
