import { OndemandTrip } from "../../PartRunner_Pages_/OndemandTripPage"
const OndemandTripObj = new OndemandTrip()
import PartRunnerData from "../../fixtures/PartRunnerData.json"

describe('Create On-demand Trip Flow End to End', () => {

    before('Launching Browser', () => {
        cy.login(PartRunnerData.Signup.LogID, PartRunnerData.Signup.LogPass)
    })

    it('Testing element present on Create on-demand Trip page 01', () => {
        OndemandTripObj.ClickOnMatching()
        OndemandTripObj.ClickOnCreateTrip()
        OndemandTripObj.ElementOnPage01()

    })
})