import 'cypress-axe';

describe('Home Page', () => {
  it('Should be accessible', () => {
    cy.visit('/');
    cy.get('[role="main"]').should('be.visible');
    cy.injectAxe();
    cy.checkA11y();
  });
});
