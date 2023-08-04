/// <reference types="cypress" />

describe('happy path search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000');
  })

  it('should render a page title', () => {
    cy.get('h1').contains('Weather for ducks?');
  })

  it('should allow a user to type a city', () => {
    cy.get('input').type('london').blur();
    cy.wait(10)
    cy.get('h2').contains(
      'The weather is overcast in London, United Kingdom'
    );
  })
})
