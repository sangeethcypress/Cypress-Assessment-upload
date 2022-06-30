import Navbar from "../../page-objects/components/Navbar"
import LoginPage from "../../page-objects/pages/LoginPage"
import { login_password, login_username, url } from "../../../config"

    describe('Login Success Test', () => {
        before(function () {
            cy.visit(url)
            Navbar.clickLogIn()
        })
        it('Should login into the application', function () {
            LoginPage.login(login_username,login_password)
            cy.wait(6000)
        })
        it('should display username', function() {
            LoginPage.displayusername()
        })
    })