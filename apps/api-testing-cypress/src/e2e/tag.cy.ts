describe('@GET tags', () => {
  it('OK @200', () => {
    // When
    cy.getRequest('/api/tags').then((response: Cypress.Response<{ tags: string[] }>) => {
      // Then
      expect(response.status).to.equal(200);
      expect(response.body.tags.length).to.be.greaterThan(0);
      expect(response.body.tags.length).to.be.lessThan(11);
    });
  });
});
