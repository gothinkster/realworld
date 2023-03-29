describe('@GET tags', () => {
  it('OK @200', () => {
    // When
    cy.api({
      method: 'GET',
      url: 'https://api.realworld.io/api/tags',
    }).then((response: Cypress.Response<any>) => {
      // Then
      expect(response.status).to.equal(200);
      expect(response.body.tags.length).to.be.greaterThan(0);
      expect(response.body.tags.length).to.be.lessThan(11);
    });
  });
});

// TODO : other status codes to be considered ?
