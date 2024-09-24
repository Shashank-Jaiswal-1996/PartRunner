import {CreateDedicatedAgreement} from "../../PartRunner_Pages_/CreateDedicatedAgreementPage"
const DedAgreeobj = new CreateDedicatedAgreement()
import PartRunnerData from "../../fixtures/PartRunnerData.json"

describe('Create Dedicated Agreement flow' , ()=>{
    before(()=>{
        cy.login(PartRunnerData.Signup.LogID , PartRunnerData.Signup.LogPass)
    })

    it('Create Agreement  Test' , ()=>{
        DedAgreeobj.ClickonProjectButton()
        DedAgreeobj.ClickonAddAgreementButton()
        DedAgreeobj.EnterCompany(PartRunnerData.CreateAgreement.CompanySearchByName)
        DedAgreeobj.SelectCompany(PartRunnerData.CreateAgreement.CompaName)
        DedAgreeobj.SelectingBranch(PartRunnerData.CreateAgreement.Branch)
        DedAgreeobj.SelectingUser(PartRunnerData.CreateAgreement.User)
        DedAgreeobj.EnterPickupAddress(PartRunnerData.CreateAgreement.TypeSelectPickupAddress,PartRunnerData.CreateAgreement.PickupVaidation)
        DedAgreeobj.SelectVehicleType(PartRunnerData.CreateAgreement.VehicleType,PartRunnerData.CreateAgreement.VehicleSubType)
        DedAgreeobj.EnterNumberOfVehicles(PartRunnerData.CreateAgreement.NumberOfVehicles)
        DedAgreeobj.EnterAvgDistance(PartRunnerData.CreateAgreement.AverageDistance)
        DedAgreeobj.SelectStartDate(PartRunnerData.CreateAgreement.StartDate,PartRunnerData.CreateAgreement.StartYear,PartRunnerData.CreateAgreement.StartMonth)
        DedAgreeobj.ClickOnSubmitButton()
    })
})