describe('Browser Actions', () => {
    it('Should load books website', () => {
        cy.visit('https://books.toscrape.com/')
        cy.url().should('include', 'books.toscrape')
        cy.log('Before loaded!')
        cy.wait(5000)
        cy.reload()
        cy.log('After Loaded')
        cy.wait(5000)
    })
    it('Should click on Travel Category', () => {
        cy.get('a').contains('Travel').click()
    })
    it('right page or not using its header "Travel"', () => {
        cy.get('h1').contains('Travel')
    })
    it('Validating if its the correct no of results', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    }
    )

})