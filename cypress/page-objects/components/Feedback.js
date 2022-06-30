import { comment, emailaddress, Name, subject } from "../../../config"

export default class Feedback{
    static clickFeedback(){
    cy.get('#name').type(Name)
    cy.get('#email').type(emailaddress)
    cy.get('#subject').type(subject)
    cy.get('#comment').type(comment)
    }}