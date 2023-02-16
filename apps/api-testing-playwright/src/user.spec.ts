import { expect, test } from '@playwright/test';
import { createUser, login } from './utils/user.util';

// TODO: change endpoint from users to users/create ?
test.describe('@POST create user', () => {
  test('OK @201', async ({ request }) => {
    // Given
    const username = `ggn-username-${new Date().getTime()}`;
    const email = `ggn-email-${new Date().getTime()}`;
    const password = `ggn-password-${new Date().getTime()}`;

    // When
    const response = await createUser(request, username, email, password);

    // Then
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toEqual(200);
    const { user } = await response.json();
    expect(user.username).toEqual(username);
    expect(user.email).toEqual(email);
    expect(user.token).toBeDefined();
  });

  test('KO @422', async ({ request }) => {
    // Given
    const username = `ggn-username-${new Date().getTime()}`;
    const email = `ggn-email-${new Date().getTime()}`;
    const password = null;

    // When
    const response = await createUser(request, username, email, password);

    // Then
    expect(response.status()).toEqual(422);
  });
});

test.describe('@POST login', () => {
  test('OK @200', async ({ request }) => {
    // Given
    const username = `ggn-username-${new Date().getTime()}`;
    const email = `ggn-email-${new Date().getTime()}`;
    const password = `ggn-password-${new Date().getTime()}`;
    await createUser(request, username, email, password);

    // When
    const response = await login(request, email, password);

    // Then
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toEqual(200);
    const { user } = await response.json();
    expect(user.username).toEqual(username);
    expect(user.email).toEqual(email);
    expect(user.token).toBeDefined();
  });
});
