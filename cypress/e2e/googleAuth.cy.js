describe('Autenticação com Google', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Login social com Google, utilizando cy.origin', () => {

        //Utiliza o comando customizado em "support/commands" para realizar o login na aplicação
        cy.googleSocialLogin()

        //Valida que está no endpoint "/profile"
        cy.location('pathname').should('equal', '/profile')
        //Valida que contém a mensagem que só é exibida ao logar na aplicação
        cy.contains('h1', "Let's set you up for success").should('be.visible')
    })
})