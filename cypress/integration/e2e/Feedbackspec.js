import Feedback from "../../page-objects/components/Feedback"
import Navbar from "../../page-objects/components/navbar"
import LoginPage from "../../page-objects/pages/LoginPage"

describe('click all links in account tab', () => {
    before(function () {
        cy.visit(url)
        Navbar.clickSignin()
        Navbar.Feedback()
    })
    it('Should enter feedback details and submit', () => {
        Feedback.clickFeedback()
    })
})