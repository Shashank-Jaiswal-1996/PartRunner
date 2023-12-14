// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




// type definitions for Cypress object "cy"
/// <reference types="cypress" />

Cypress.Commands.add('login' , (email , Password)=>{
    cy.visit(Cypress.env('QAURL'))
    cy.wait(4000)
    cy.get('.mb-3 > .form-control').type(email)
    cy.get('.position-relative > .form-control').type(Password)
    cy.get('.d-flex > .btn').click()
    cy.wait(5000)
})
