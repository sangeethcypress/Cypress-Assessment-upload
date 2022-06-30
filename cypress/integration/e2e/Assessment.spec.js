describe('Browser Actions', () => {
    it('Should load books website', () => {
        cy.visit('https://books.toscrape.com/')
        cy.url().should('include', 'books.toscrape')
    })
    it('Validating the items in landing page', () => {
        cy.get('h1').contains('All products')
        cy.get('.product_pod').its('length').should('eq', 20)
        cy.wait(5000)
        //cy.get('.pager').should('eq',50)
    })
    it('Should click on Fantasy Category', () => {
        cy.get('a').contains('Fantasy').click()
        cy.wait(5000)
    })
    it('right page or not using its header "Fantasy"', () => {
        cy.get('h1').contains('Fantasy')
        cy.wait(5000)
    })
    it('Validating if its the correct no of results', () => {
        cy.get('.product_pod').its('length').should('eq', 20)
        cy.wait(5000)
        //cy.get('.pager').should('eq',3)
    }
    )

})