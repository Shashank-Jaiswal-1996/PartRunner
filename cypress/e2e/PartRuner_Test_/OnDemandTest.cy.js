import { describe } from "mocha";
import { OndemandServices } from "../../PartRunner_Pages_/OndemandServicePage";
const OnDemandobj = new OndemandServices()
import PartRunnerData from "../../fixtures/PartRunnerData.json"

describe('OnDemand Flow' , function(){
    before(()=>{
        cy.login(PartRunnerData.Signup.LogID ,PartRunnerData.Signup.LogPass )
    })
    it('Ondemand Test' , ()=>{
        OnDemandobj.ClickOnRequestDelivery()
        OnDemandobj.SelectCompany(PartRunnerData.OnDemand.CompanyName)
        OnDemandobj.SelectBranch(PartRunnerData.OnDemand.BranchName)
        OnDemandobj.SelectUser(PartRunnerData.OnDemand.Users)
        OnDemandobj.ClickComDetailsNext()
        OnDemandobj.EnterPickupLocation(PartRunnerData.OnDemand.PickupLocation)
        OnDemandobj.SelectPickupLocation(PartRunnerData.OnDemand.PickupLocContains)
        // OnDemandobj.EnterPickupColony()
        // OnDemandobj.ClickShowPickupAddress()
        // OnDemandobj.ClickConfirmPickupAddress()
        OnDemandobj.EnterDropoffLocation(PartRunnerData.OnDemand.DropOffLocation)
        OnDemandobj.SelectDropOffLocation(PartRunnerData.OnDemand.DropOffLocContains)
        // OnDemandobj.EnterDropoffColony()
        // OnDemandobj.ClickShowDropOffAddress()
        // OnDemandobj.ClickConfirmDropOffAddress()
        OnDemandobj.ClickConfirmRoute()
        OnDemandobj.SelectVehicleType()
        OnDemandobj.SelectVehicleSubType()
        OnDemandobj.ClickVehicleNextButton()
        OnDemandobj.ClickDeliveryBackButton()
        OnDemandobj.AgainClickVehicleNextButton()
        OnDemandobj.SelectDeliveryMethod()
        OnDemandobj.ClickMethodNextButton()
        OnDemandobj.SelectProductType()
        OnDemandobj.EnterNumberOfProduct()
        OnDemandobj.SelectSizeOfItem()
        OnDemandobj.ClickSubmitProduct()
        OnDemandobj.ClickProductProceed()

    })
})
