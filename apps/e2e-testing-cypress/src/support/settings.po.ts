export class SettingsPage {
  static navigateToSettings() {
    cy.findByRole('link', { name: /settings/i }).click();
  }
  static fillSettingsForm(
    settings: {
      image?: string;
      username?: string;
      bio?: string;
      email?: string;
      password?: string;
    } = {},
  ) {
    if (settings.image) {
      cy.findByPlaceholderText(/URL of profile picture/i).clear();
      cy.findByPlaceholderText(/URL of profile picture/i).type(settings.image);
    }

    if (settings.username) {
      cy.findByPlaceholderText(/username/i).clear();
      cy.findByPlaceholderText(/username/i).type(settings.username);
    }

    if (settings.bio) {
      cy.findByPlaceholderText(/short bio about you/i).clear();
      cy.findByPlaceholderText(/short bio about you/i).type(settings.bio);
    }

    if (settings.email) {
      cy.findByPlaceholderText(/email/i).clear();
      cy.findByPlaceholderText(/email/i).type(settings.email);
    }

    if (settings.password) {
      cy.findByPlaceholderText(/password/i).clear();
      cy.findByPlaceholderText(/password/i).type(settings.password);
    }
  }

  static submitSettings(): void {
    cy.findByRole('button', { name: /update settings/i }).click();
  }
}
