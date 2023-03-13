import 'cypress-axe';

describe('Home Page', () => {
  it('Should be accessible', () => {
    cy.visit('/');
    cy.get('[role="main"]').should('be.visible');
    cy.injectAxe();
    cy.checkA11y();
  });
});

describe('Add contact button', () => {
  it('Should be disabled on load', () => {
    cy.visit('/');
    cy.get('[role="main"]').should('be.visible');
    cy.get('[data-cy="colOne"]')
      .parent()
      .within(() =>
        cy
          .get('[data-cy="colOne"]')
          .parent()
          .within(() =>
            cy
              .get('[data-cy="modal"]')
              .parent()
              .within(() =>
                cy
                  .get('[data-cy="add-contact"]')
                  .parent()
                  .within(() => cy.get('[data-cy="button"]').should('be.disabled'))
              )
          )
      );
  });
});
