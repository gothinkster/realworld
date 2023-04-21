export class ArticlePage {
  static getDeleteButton() {
    return cy.get('.btn-outline-danger').contains('Delete Article');
  }

  static createArticle() {
    ArticlePage.navigateToCreation();
    ArticlePage.fillArticleForm();
    ArticlePage.submitArticle();
  }

  static navigateToCreation() {
    cy.findByRole('link', { name: /new article/i }).click();
  }
  static fillArticleForm(
    article: {
      title?: string;
      description?: string;
      body?: string;
      tags?: string;
    } = {},
  ) {
    cy.findByPlaceholderText(/article title/i).type(
      article.title || `${Cypress.env('prefix')}${Date.now()}`,
    );
    cy.findByPlaceholderText(/what's this article about?/i).type(
      article.description || `${Cypress.env('prefix')}${Date.now()}`,
    );
    cy.findByPlaceholderText(/write your article/i).type(
      article.body || `${Cypress.env('prefix')}${Date.now()}`,
    );
    cy.findByPlaceholderText(/Enter tags/i).type(article.tags || 'tags{enter}');
  }

  static submitArticle(): void {
    cy.findByRole('button', { name: /publish article/i }).click();
  }

  static createComment(comment?: string): void {
    this.fillCommentForm(comment);
    this.submitComment();
  }

  static fillCommentForm(comment?: string): void {
    cy.findByPlaceholderText(/write a comment/i).type(
      comment || `${Cypress.env('prefix')}${Date.now()}`,
    );
  }

  static submitComment(): void {
    cy.findByRole('button', { name: /post comment/i }).click();
  }
}
