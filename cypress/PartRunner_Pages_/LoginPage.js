export class loginPage{

weblocators=
{
    UserID:'.mb-3 > .form-control',
    Password:'.position-relative > .form-control',
    loginbutton:'.d-flex > .btn',
    FailedToaster:'//*[@class="toast-container"]',
    EmptyUserName:'(//*[@class="validation-errors"])[1]',
    EmptyPassword:'(//*[@class="validation-errors"])[2]'

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

PositiveCredvalidation()
{
cy.url().should('include' , 'deliveries')
}

NegativeCredVaidation()
{
    cy.xpath(this.weblocators.FailedToaster).should('have.text', 'The selected email is invalid.')
}

EmptyValidation()
{
    cy.xpath(this.weblocators.EmptyUserName).should('have.text' ,' This field is required. ')
    cy.xpath(this.weblocators.EmptyPassword).should('have.text' ,' This field is required. ')
}

}