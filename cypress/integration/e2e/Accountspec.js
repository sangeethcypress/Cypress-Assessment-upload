import AccountLinks from "../../page-objects/components/AccountLinks"
import Navbar from "../../page-objects/components/navbar"
import LoginPage from "../../page-objects/pages/LoginPage"

describe ('click all links in account tab', () =>{
    before(function (){
        cy.visit(url)
        Navbar.clickSignin()
        LoginPage.login(login_username,login_password)
    })
    it ('Should click on Account Activity', () => {
        AccountLinks.clickActivity()
    })
    it('Should click on Transfer Funds',() => {
        AccountLinks.clickTransferFunds()
    })
    it('Should click on Pay bills', () => {
        AccountLinks.clickPayBills()
    })
    it('Should click on Money Map', () => {
        AccountLinks.clickMoneyMap()
    })
    it('Should click on Click Online statements', () => {
        AccountLinks.clickOnlineStatements()
    })
})

