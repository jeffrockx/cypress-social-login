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

Cypress.Commands.add('googleSocialLogin', () => {
    cy.contains('header a', 'Login').should('be.visible').click()
    cy.contains('button', 'Continue with Google').should('be.visible').click()
    cy.origin('https://accounts.google.com/', () => {

        //Como passamos de um domínio para outro, podemos obter uma falha de exceção de erro não detectada. Para tratá-las, usamos:
        Cypress.on('uncaught:exception', (err) => {
            if (err.message.includes('ResizeObserver loop limit exceeded')) {
                return false
            }
        })

        cy.get('input[type="email"]').should('be.visible').type(Cypress.env('email'), { log: false })
        cy.contains('button', 'Avançar').should('be.visible').click()
        cy.get('#password').should('be.visible').type(Cypress.env('senha'), { log: false })
        cy.get('#passwordNext').should('be.visible').click()
    })
})