import { login_password, login_username, url } from "../../../config"
import Categories from "../../page-objects/components/Categories"
import Navbar from "../../page-objects/components/Navbar"
import LoginPage from "../../page-objects/pages/LoginPage"

describe('click all links in category', () => {
    before(function () {
        cy.visit(url)
        Navbar.clickLogIn()
        LoginPage.login(login_username, login_password)
        cy.wait(7000)
    })
    it('Should click on Category', () => {
        Categories.clickCategory()
        cy.wait(5000)
    })
    it('should return the number of items in categories first page', () => {
        Categories.CategoryFPcount()
        cy.wait(5000)
    })
    it('should return the number of items in categories next page', () => {
        Categories.CategoryNPcount()
        cy.wait(5000)
    })
    it('Should click on Phone', () => {
        Categories.clickPhone()
        cy.wait(5000)
    })
    it('should return the number of items in Phones first page', () => {
        Categories.PhoneFPcount()
        cy.wait(5000)
    })
    it('Should click on Laptops', () => {
        Categories.clickLaptops()
        cy.wait(5000)
    })
    it('should return the number of items in Laptop first page', () => {
        Categories.LaptopFPcount()
        cy.wait(5000)
    })
    it('Should click on Monitor', () => {
        Categories.clickMonitor()
        cy.wait(5000)
    })
    it('should return the number of items in Monitor first page', () => {
        Categories.MonitorFPcount()
        cy.wait(5000)
    })
    it('should logout from application', () => {
        Navbar.logout()
    })
})