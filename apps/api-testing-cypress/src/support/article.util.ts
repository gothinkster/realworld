import { Article } from '../../../api/src/app/models/article.model';

export function createArticle(article: Partial<any>, token?: string): Cypress.Chainable {
  return cy.postRequest('/api/articles', { article }, token);
}

export function updateArticle(
  article: Partial<Article>,
  slug: string,
  token?: string,
): Cypress.Chainable {
  return cy.putRequest(`/api/articles/${slug}`, { article }, token);
}

export function deleteArticle(slug: string, token?: string): Cypress.Chainable {
  return cy.deleteRequest(`/api/articles/${slug}`, token);
}

export function favoriteArticle(slug: string, token?: string): Cypress.Chainable {
  return cy.postRequest(`/api/articles/${slug}/favorite`, {}, token);
}

export function unfavoriteArticle(slug: string, token?: string): Cypress.Chainable {
  return cy.deleteRequest(`/api/articles/${slug}/favorite`, token);
}
