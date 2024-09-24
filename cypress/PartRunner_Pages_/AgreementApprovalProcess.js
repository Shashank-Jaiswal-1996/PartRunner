import 'cypress-real-events/support';
export class Approvalprocess {
    weblocator =
        {
            ProjectButton: 'Projects',
            PendingButton: 'pending',
            AgreementIDs: '.cursor-pointer.link',
            TripleDot: '.float-right',
            StartApprovalButton: '.btn.btn-default',
            ContinueApprovalButton: '.btn.submit-btn.d-flex.justify-content-center'
        }


    ClickOnProject() {
        cy.wait(10000)
        cy.contains(this.weblocator.ProjectButton).click()
    }

    ClickOnPending() {
        cy.contains(this.weblocator.PendingButton).click()
    }

    ClickOnAgreementID() {
        cy.get(this.weblocator.AgreementIDs).contains('#DA0003403').click()
    }

    HoverOverDots() {
        cy.get(this.weblocator.TripleDot).realHover()
    }

    ClickOnStartApprovalButton() {
        cy.contains('Start Approval Process', { timeout: 30 * 1000 }).should("be.visible");
        cy.get(this.weblocator.StartApprovalButton).eq(1).click()
    }

    ClickOnContinueApprovalButton() {
        cy.get('#pickup-0', { timeout: 30 * 1000 }).should('be.visible')
        cy.get(this.weblocator.ContinueApprovalButton, { timeout: 30 * 1000 }).should('exist')
        cy.get(this.weblocator.ContinueApprovalButton).click()
    }
}