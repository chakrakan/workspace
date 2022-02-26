describe('site', () => {
  beforeEach(() => cy.visit('/ramblings/dynamic-routing'));

  it('should render the title of the article', () => {
    cy.get('h1').should('contain', 'Test');
  });

  it('should render the embedded Youtube component', () => {
    cy.get('iframe').should('be.visible');
  });
});
