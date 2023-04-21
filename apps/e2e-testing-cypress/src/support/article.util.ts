export function fillArticleForm(
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

export function submitArticle() {
  cy.findByRole('button', { name: /publish article/i }).click();
}
