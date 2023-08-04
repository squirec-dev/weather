/// <reference types="cypress" />

describe('happy path search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000');

  })

  it('should allow the user to enter a search term', () => {
    cy.get('h1').contains('Page')
  })
})
