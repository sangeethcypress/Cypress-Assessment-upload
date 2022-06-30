describe('Login site valdiation with inputs', () => {
    it('should go to login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    })
    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Invalid name', { delay: 250 })
    })
    it('should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('Invalid Password', { delay: 250 })
    })
    it('should submit the page', () => {
        cy.contains('Sign in').click()
        cy.wait(9000)
    })
    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')       
    })
})