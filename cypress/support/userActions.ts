declare namespace Cypress{
    interface Chainable {
        /**
         * @param username - takes username or id
         * @param password - takes user password
         */
        login(username: string, password: string): Chainable<Element>
        /**
         * @param name - takes name
         * @param email - takes email
         * @param subject - takes subject
         * @param comment - takes comment
         */
        sumbitFeedback(name:string,email:string,subject:string,comment:string):Chainable<Element>
    }
}
Cypress.Commands.add('login', (username,password) => {
cy.get ('#user_login').type(username)
cy.get ('#user_password').type(password)
cy.contains ('Sign in').click()
})
Cypress.Commands.add('sumbitFeedback',(name,email,subject,comment) => {
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#subject').type(subject)
    cy.get('#comment').type(comment)
    cy.contains('Send Message').click()
}
)