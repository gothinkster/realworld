import { expect, test } from '@playwright/test';

test('should retrieve articles', async ({ request }) => {
  const response = await request.get('/api/articles');
  expect(response.ok()).toBeTruthy();
  const { articles } = await response.json();
  expect(articles.length).toEqual(10);
});

test('CRUD article', async ({ request }) => {
  const username = `ggn-username-${new Date().getTime()}`;
  const email = `ggn-email-${new Date().getTime()}`;
  const password = `ggn-password-${new Date().getTime()}`;
  const accountCreationResponse = await request.post('/api/users', {
    data: {
      user: {
        username,
        email,
        password,
      },
    },
  });

  const { user } = await accountCreationResponse.json();
  const token = user.token;

  const title = `ggn-title-${new Date().getTime()}`;
  const articleCreationResponse = await request.post('/api/articles', {
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {
      article: {
        title,
        description: 'bar',
        body: 'bar',
        tagList: ['foo'],
      },
    },
  });

  const { article } = await articleCreationResponse.json();

  const getArticleResponse = await request.get(`/api/articles/${article.slug}`);
  expect(getArticleResponse.ok()).toBeTruthy();

  const updateArticleResponse = await request.put(`/api/articles/${article.slug}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {
      article: {
        tagList: ['bar'],
      },
    },
  });

  expect(updateArticleResponse.ok()).toBeTruthy();
  const { article: updatedArticle } = await updateArticleResponse.json();
  expect(updatedArticle.tagList).toEqual(['bar']);

  const deleteArticleResponse = await request.delete(`/api/articles/${article.slug}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  expect(deleteArticleResponse.ok()).toBeTruthy();

  const getDeletedArticleResponse = await request.get(`/api/articles/${article.slug}`);
  expect(getDeletedArticleResponse.ok()).toBeFalsy();
  expect(getDeletedArticleResponse.status()).toEqual(404);
});
