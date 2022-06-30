describe('Feedback test', () => {
    it('should submit the feedback page', () => {
        cy.visitFeedbackpage()
        cy.fixture('feedbackData').then(({ name, email, subject, comment }) => {
          //  cy.sumbitFeedback('Sangeeth', 'test@gmail.com', 'dummymessage', 'dummycomment')
          cy.sumbitFeedback('name', 'email', 'subject', 'comment')
        })
    })
})