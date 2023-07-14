import { AuthPage } from '../support/auth.po';
import { SettingsPage } from '../support/settings.po';

describe('Settings', () => {
  it('should update the user settings', () => {
    // Given
    const username = `${Cypress.env('prefix')}${Date.now()}`;
    AuthPage.register({ username });

    // When
    SettingsPage.navigateToSettings();

    const newSettings = {
      image: `${Cypress.env('prefix')}${Date.now()}-image`,
      username: `${Cypress.env('prefix')}${Date.now()}-username`,
      bio: `${Cypress.env('prefix')}${Date.now()}-bio`,
      email: `${Cypress.env('prefix')}${Date.now()}-email@mail.com`,
      password: `${Cypress.env('prefix')}${Date.now()}-password`,
    };
    SettingsPage.fillSettingsForm(newSettings);
    SettingsPage.submitSettings();

    // Then
    cy.findByRole('heading', { level: 4 }).should('have.text', newSettings.username);
    cy.get('.user-info p').should('contain', newSettings.bio);
  });
});
