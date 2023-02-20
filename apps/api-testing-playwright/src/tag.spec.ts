import { expect, test } from '@playwright/test';

test.describe('@GET tags', () => {
  test('OK @200', async ({ request }) => {
    // When
    const response = await request.get('/api/tags');

    // Then
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toEqual(200);
    const { tags } = await response.json();
    expect(tags.length).toBeGreaterThan(0);
    expect(tags.length).toBeLessThanOrEqual(10);
  });
});

// TODO : other status codes to be considered ?
