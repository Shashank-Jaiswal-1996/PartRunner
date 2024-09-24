import { addServices } from "../../PartRunner_Pages_/addServices";
import PartRunnerData from "../../fixtures/PartRunnerData.json"
const addServicesObj = new addServices

describe("Add Service", () => {
    beforeEach("launching Browser", () => {
        cy.login(PartRunnerData.Signup.LogID, PartRunnerData.Signup.LogPass)
    })

    it('Testing AddServices', () => {
        addServicesObj.HoverOnNavBar()
        addServicesObj.ClickOnRoutes()
    })
})