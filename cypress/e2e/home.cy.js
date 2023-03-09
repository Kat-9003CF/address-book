import 'cypress-axe';

describe('Home Page', () => {
  it('Should be accessible', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y();
  });
});
