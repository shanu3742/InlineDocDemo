/* eslint-disable no-undef */
/// <reference types="cypress" />

context('App testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('all click testing', () => {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > .card-body > .btn').click()
    cy.get('.data4').click()
    cy.get('#mySelector').click()
      cy.get('#close').click()
    
   
  })

  
})
