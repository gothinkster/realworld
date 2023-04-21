export class FeedPage {
  static getGlobalFeedTab(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.findByRole('link', { name: /global feed/i });
  }

  static getYourFeedTab(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.findByRole('link', { name: /your feed/i });
  }
}
