describe('Browser Actions', () => {
   it('should load correct url', () => {
      cy.visit('https://example.com/', { timeout: 1000000 })
   })
   it('Should check if the correct url is loaded', () => {
      cy.url().should('include', 'example')
   })
   it('Should check for the correct elements on the page', () => {
      cy.get('h1').should('be.visible')
   })
})