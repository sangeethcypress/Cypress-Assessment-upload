import Navbar from "../../page-objects/components/navbar"
import LoginPage from "../../page-objects/pages/LoginPage"

describe ('Login Failed test', () =>{
before(function (){
    cy.visit(url)
    Navbar.clickSignIn()
})
it('Should try to login with invalid credentails', function(){
    LoginPage.login('invalid username', 'invalid password')
})
it('should display error message', function() {
    LoginPage.displayErrorMessage()
})
})
describe('Login Success Test', () =>{
   before(function (){
       cy.visit(url)
       Navbar.clickSignIn()
   })
   it('Should login into the application', function() {
       LoginPage.login(login_username,login_password)
   })
   it('Should click on settings', () =>{
       Navbar.clickSettings()
   })
   it('Should logout from application', () => {
       Navbar.logout()
       Navbar.signinVisible()
   })
})