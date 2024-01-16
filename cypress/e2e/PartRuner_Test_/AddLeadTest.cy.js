//NOTE: Before Running this Test change PhoneNumber and FullName from AddLeads.json(In Fixtures) File

import {Addleads} from "../../PartRunner_Pages_/AddLeads"
import PartRunnerData from "../../fixtures/PartRunnerData.json"
const AddLeadobj =new Addleads()
import AddLeads from "../../fixtures/AddLeads.json"

describe("Add Lead flow Testing " , ()=>{
    beforeEach(()=>{
        cy.login(PartRunnerData.Signup.LogID , PartRunnerData.Signup.LogPass)
    })
    it("Checking all elements are Present on Page 01" , ()=>{
        AddLeadobj.ClickOnAquisition()
        AddLeadobj.ClickOnAddLead()
        AddLeadobj.VerifyButtons()
    })

    it("Enter Valid Data" , ()=>{
        AddLeadobj.ClickOnAquisition()
        AddLeadobj.ClickOnAddLead()
        AddLeadobj.EnterPhoneNumber(AddLeads.ValidData.PhoneNumber)
        AddLeadobj.EnterName(AddLeads.ValidData.FullName)
        AddLeadobj.SelectSource(AddLeads.ValidData.SourceValue,AddLeads.ValidData.SourceOption)
        AddLeadobj.SelectPRAdmin(AddLeads.ValidData.PrAdminValue,AddLeads.ValidData.PrAdminOPtion)
        AddLeadobj.ClickOnNextButton()
    })

    it("Enter Empty fields" , ()=>{
        AddLeadobj.ClickOnAquisition()
        AddLeadobj.ClickOnAddLead()
        AddLeadobj.ClickOnNextButton()
        AddLeadobj.EmptyErrorMessages()
    })

    it("Enter Invalid Data" , ()=>{
        AddLeadobj.ClickOnAquisition()
        AddLeadobj.ClickOnAddLead()
        AddLeadobj.ClickOnNextButton()
        AddLeadobj.InvalidDataVerification(AddLeads.InvalidData.PhoneNumber)
    })

    it("Checking all elements are Present on Page 02", ()=>{
        AddLeadobj.ClickOnAquisition()
        AddLeadobj.ClickonGeneratedLead()
        AddLeadobj.HoverOverDots()
        AddLeadobj.ClickOnEditButton()
        AddLeadobj.ElementOnPage02()
    })

    it("Check Validation error messages not selecting Lead type", ()=>{
        AddLeadobj.ClickOnAquisition()
        AddLeadobj.ClickonGeneratedLead()
        AddLeadobj.HoverOverDots()
        AddLeadobj.ClickOnEditButton()
        AddLeadobj.ClickOnNextButton()
        AddLeadobj.LeadTypeErrorMessage()
    })

    it("Check if user is able to move to page 03",()=>{
        AddLeadobj.ClickOnAquisition()
        AddLeadobj.ClickonGeneratedLead()
        AddLeadobj.HoverOverDots()
        AddLeadobj.ClickOnEditButton()
        AddLeadobj.SelectDriverType()
        AddLeadobj.ClickOnNextButton()
    })

    it("Check all Elements of page 03", ()=>{
        AddLeadobj.ClickOnAquisition()
        AddLeadobj.ClickonGeneratedLead()
        AddLeadobj.HoverOverDots()
        AddLeadobj.ClickOnEditButton()
        AddLeadobj.ElementPage03()
    })

    it("Checking error messages for empty fields on Page03", ()=>{
        AddLeadobj.ClickOnAquisition()
        AddLeadobj.ClickonGeneratedLead()
        AddLeadobj.HoverOverDots()
        AddLeadobj.ClickOnEditButton()
        AddLeadobj.ClickOnNextButton()
        AddLeadobj.ErrorOnPage03()
    })

    it("Check if user is able to move to page 04",()=>{
        AddLeadobj.ClickOnAquisition()
        AddLeadobj.ClickonGeneratedLead()
        AddLeadobj.HoverOverDots()
        AddLeadobj.ClickOnEditButton()
        AddLeadobj.SelectCity(AddLeads.ValidData.CityValue,AddLeads.ValidData.CityOption)
        AddLeadobj.SelectVehicle(AddLeads.ValidData.VehicleValue,AddLeads.ValidData.VehicleOption)
        AddLeadobj.SelectSubVehicle(AddLeads.ValidData.VehSubValue,AddLeads.ValidData.VehicleOption)
        AddLeadobj.SelectVehiceYear(AddLeads.ValidData.VehicleYears,AddLeads.ValidData.VehicleYears)
        AddLeadobj.ClickOnNextButton()
    })

    it("Check all Elements of page 04", ()=>{
        AddLeadobj.ClickOnAquisition()
        AddLeadobj.ClickonGeneratedLead()
        AddLeadobj.HoverOverDots()
        AddLeadobj.ClickOnEditButton()
        AddLeadobj.ElementsOnPage04()
    })

    it("Checking error messages for empty fields on Page04", ()=>{
        AddLeadobj.ClickOnAquisition()
        AddLeadobj.ClickonGeneratedLead()
        AddLeadobj.HoverOverDots()
        AddLeadobj.ClickOnEditButton()
        AddLeadobj.ClickOnNextButton()
        AddLeadobj.ErrorOnPage04()
    })

    it("Check if Able to create Lead sucessfully", ()=>{
        AddLeadobj.ClickOnAquisition()
        AddLeadobj.ClickonGeneratedLead()
        AddLeadobj.HoverOverDots()
        AddLeadobj.ClickOnEditButton()
        AddLeadobj.ClickOnVideo()
        AddLeadobj.ClickOnNextButton()
        AddLeadobj.ClickonYesButton() 
    })
})