import { Approvalprocess } from "../../PartRunner_Pages_/AgreementApprovalProcess"
const AgreeAproObj = new Approvalprocess()
import PartRunnerData from "../../fixtures/PartRunnerData.json"

describe("Agreement Approval flow", () => {

    beforeEach(() => {
        cy.login(PartRunnerData.Signup.LogID, PartRunnerData.Signup.LogPass)
    })

    it('Testing Buttons on Page 01', () => {
        AgreeAproObj.ClickOnProject()
        AgreeAproObj.ClickOnPending()
        AgreeAproObj.ClickOnAgreementID()
        AgreeAproObj.HoverOverDots()
        AgreeAproObj.ClickOnStartApprovalButton()
        AgreeAproObj.ClickOnContinueApprovalButton()
    })
})