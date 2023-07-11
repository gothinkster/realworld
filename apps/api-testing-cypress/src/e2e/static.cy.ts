describe('static content', () => {
  it('serves demo avatar image', () => {
    // Given
    // When
    cy.getRequest(`/images/demo-avatar.png`).then((response: Cypress.Response<any>) => {
      // Then
      expect(response.status).to.equal(200);
      expect(response.headers['content-type']).to.equal('image/png');
    });
  });

  it('serves default user avatar image', () => {
    // Given
    // When
    cy.getRequest(`/images/smiley-cyrus.jpeg`).then((response: Cypress.Response<any>) => {
      // Then
      expect(response.status).to.equal(200);
      expect(response.headers['content-type']).to.equal('image/jpeg');
    });
  });
});
