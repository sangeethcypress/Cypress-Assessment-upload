describe('working with inputs', () => {
it('should load login page', () => {
cy.visit ('https://user.mockplus.com/signin?next=https%3A%2F%2Fwww.mockplus.com%2Fblog%2Fpost%2Flogin-page-examples&source=')
})
it('should fill user name', () => {
   cy.get('#email').clear()
   cy.get('#email').type('invalid name', {delay: 500})
   })
it('should fill password', () => {
    cy.get('#password').clear()
    cy.get('#password').type('invalid password', {delay: 500})
})
it('should submit the page', () => {
    cy.get('#login').click()
    cy.wait(6000)  
})
it('should display error message', () => {
    cy.get('.error-message').should('be.visible')
    cy.wait(6000)    
})
})