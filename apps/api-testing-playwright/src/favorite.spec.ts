import { expect } from '@playwright/test';
import { test } from './utils/account.fixture';
import { createUser } from './utils/user.util';
import { createPost } from './utils/article.util';

test.describe('@POST favorite article', () => {
  test('OK @200', async ({ request, account }) => {
    // Given
    const owner = account;
    const articleCreation = await createPost(request, owner.token);
    const { article } = await articleCreation.json();

    const userCreation = await createUser(request);
    const { user } = await userCreation.json();

    // When
    await request.post(`/api/articles/${article.slug}/favorite`, {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    });

    const articleResponse = await request.get(`/api/articles/${article.slug}`, {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    });
    const { article: favoriteArticle } = await articleResponse.json();

    // Then
    expect(favoriteArticle.favorited).toBeTruthy();
  });
});

test.describe('@DELETE unfavorite article', () => {
  test('OK @200', async ({ request, account }) => {
    // Given
    const owner = account;
    const articleCreation = await createPost(request, owner.token);
    const { article } = await articleCreation.json();

    const userCreation = await createUser(request);
    const { user } = await userCreation.json();

    // When
    await request.post(`/api/articles/${article.slug}/favorite`, {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    });

    const articleResponse = await request.get(`/api/articles/${article.slug}`, {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    });
    const { article: favoriteArticle } = await articleResponse.json();

    // Then
    expect(favoriteArticle.favorited).toBeTruthy();
  });
});
