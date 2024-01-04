export class loginPage{

weblocators=
{
    UserID:'.mb-3 > .form-control',
    Password:'.position-relative > .form-control',
    loginbutton:'.d-flex > .btn'
}

openURL()
{
    cy.visit(Cypress.env('StagURL'))
}

enterUserID(ID)
{
     cy.get(this.weblocators.UserID).type(ID)
}

enterPassword(Pass)
{
    cy.get(this.weblocators.Password).type(Pass)
}

clickLoginButton()
{
    cy.get(this.weblocators.loginbutton).click()
}

validation()
{
cy.url().should('include' , 'deliveries')
}

}