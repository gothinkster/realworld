describe('Home', () => {
  it('should display the home page', () => {
    // Then
    cy.findByRole('heading', { name: /conduit/i }).should('exist');
  });
});
