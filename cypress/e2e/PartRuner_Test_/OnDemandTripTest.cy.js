import { describe } from "mocha";
import { OndemandTrip } from "../../PartRunner_Pages_/OndemandTripPage";
const OnDemTripObj = new OndemandTrip()
import PartRunnerData from "../../fixtures/PartRunnerData.json"

describe('OnDemand Trip Flow' , ()=>{
    before(()=>{
        cy.login(PartRunnerData.Signup.LogID ,PartRunnerData.Signup.LogPass )
    })
    it('OnDemandTrip Test' , ()=>{
        OnDemTripObj.ClickOnMatching()
        OnDemTripObj.ClickOnCreateTrip()
        OnDemTripObj.ClickOnHaveaDriver()
        OnDemTripObj.SearchingDriver()
        OnDemTripObj.SelectingDriver()
        OnDemTripObj.ClickStartLocation()
        OnDemTripObj.SelectingStartLocation()
        OnDemTripObj.ClickDeliveryLastButton()
        OnDemTripObj.SelectingDelivery()
        OnDemTripObj.ClaculatingTrip()
        OnDemTripObj.CreatingTrip()

    } )
})