import { expect } from '@playwright/test';
import { test } from './utils/account.fixture';
import { createUser } from './utils/user.util';
import { createPost } from './utils/article.util';

test.describe('@GET profile', () => {
  test('OK @200', async ({ request, account }) => {
    // Given
    // account fixture

    // When
    const response = await request.get(`/api/profiles/${account.username}`);

    // Then
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toEqual(200);
    const { profile } = await response.json();
    expect(profile.image).toEqual('https://api.realworld.io/images/smiley-cyrus.jpeg');
    // TODO should include following if unauthenticated ?
    //  expect(profile).not.toHaveProperty('following');
  });
});

test.describe('@POST follow user', () => {
  test('OK @200', async ({ request, account }) => {
    // Given
    const owner = account;
    await createPost(request, owner.token);

    const userCreation = await createUser(request);
    const { user } = await userCreation.json();

    // When
    const followUserResponse = await request.post(`/api/profiles/${owner.username}/follow`, {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    });

    const getFeedResponse = await request.get('/api/articles/feed', {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    });

    // Then
    expect(followUserResponse.ok()).toBeTruthy();
    const { profile } = await followUserResponse.json();
    expect(profile.following).toBeTruthy();

    expect(getFeedResponse.ok()).toBeTruthy();
    const { articles } = await getFeedResponse.json();
    expect(articles.length).toEqual(1);

    // TODO : V2 add followingsCount to profile
  });
});

test.describe('@DELETE unfollow user', () => {
  test('OK @200', async ({ request, account }) => {
    // Given
    const owner = account;
    const userCreation = await createUser(request);
    const { user } = await userCreation.json();

    await request.post(`/api/profiles/${owner.username}/follow`, {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    });

    // When
    const unfollowUserResponse = await request.delete(`/api/profiles/${owner.username}/follow`, {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    });
    const { profile } = await unfollowUserResponse.json();

    // Then
    expect(unfollowUserResponse.ok()).toBeTruthy();
    expect(profile.following).toEqual(false);

    // TODO : V2 add followingsCount to profile
  });
});

// TODO remove 401 unauthorized status code
