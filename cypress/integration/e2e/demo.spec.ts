describe("Demo Test",() => {
    it('Should visit example website', () => {
        cy.visitLoginpage()
        cy.fixture('loginData').then(({username,password}) => {
            cy.login('username','password')
        }) 
    })
})