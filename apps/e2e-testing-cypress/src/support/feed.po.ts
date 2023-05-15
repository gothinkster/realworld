export class FeedPage {
  static getGlobalFeedTab(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.findByRole('link', { name: /global feed/i });
  }

  static getYourFeedTab(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.findByRole('link', { name: /your feed/i });
  }

  static getPopularTags(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .findByText(/Popular Tags/i)
      .siblings('.tag-list')
      .find('.tag-default');
  }

  static getTagFeedTab(tagName: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.nav-item .nav-link').contains(tagName);
  }

  static getArticlesPreview(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.preview-link');
  }

  static getPaginationLinks(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.page-link');
  }

  static getLoadingMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.findByText(/Loading articles.../i);
  }
}
