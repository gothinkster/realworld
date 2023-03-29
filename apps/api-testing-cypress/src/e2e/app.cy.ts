describe('test', () => {
  it('should access RealWorld API', () => {
    cy.request('https://api.realworld.io');
  });
});
