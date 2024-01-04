/// <reference types="cypress" />
export class CreateDedicatedAgreement{
    weblocators=
    {
        ProjectButton:'Projects',
        AddAgreementButton:'.btn.add_service_button.d-flex',
        CompantName:'#typeahead-basic',
        SelectBranch:'.pl-3 > .form-control',
        SelectUser:'.form-group>[formcontrolname="userUUID"]',
        PickupAddress:'#pickup-0',
        VehicleType:".dropdown__toggle>[placeholder='Select type of vehicle']",
        NoOfVehicles:'.pl-3>[placeholder="No. of vehicles needed"]',
        AvgDistance:'.pr-3>[placeholder="Eg: 150 Miles"]',
        ContractStartDate:'[formcontrolname="contract_start_date"]',
        StartMonths:'[title="Select month"]',
        StartYears:'[title="Select year"]',
        StartDays:'[class="ngb-dp-month"]',
        SubmitButton:'[class="btn submit-btn d-flex justify-content-center"]'







    }

    ClickonProjectButton()
    {
        cy.contains(this.weblocators.ProjectButton).click()
    }

    ClickonAddAgreementButton()
    {
        cy.get(this.weblocators.AddAgreementButton).click()
    }

    EnterCompany(ComName)
    {
        cy.get(this.weblocators.CompantName).type(ComName)
    }

    SelectCompany(compa)
    {
        cy.contains(compa).click()
        cy.get(this.weblocators.CompantName).should('have.value' , compa)
    }

    SelectingBranch(Branch)
    {
        cy.get(this.weblocators.SelectBranch).select(Branch)
        cy.get(this.weblocators.SelectBranch).invoke('text').should('eq' , 'Select BranchMexico City Default Branch' ,{matchCase:false})
    }

    SelectingUser(Users)
    {
        cy.get(this.weblocators.SelectUser).select(Users)
        cy.get(this.weblocators.SelectUser).should('have.text' , "Select Usermexicostage")
    }

    EnterPickupAddress(PickAdd, PickValidation)
    {
        cy.get(this.weblocators.PickupAddress).type(PickAdd ,{delay:0})
        cy.wait(5000)
        cy.contains(PickValidation ,{matchCase:false}).click()
        cy.get(this.weblocators.PickupAddress).should('have.value' ,PickAdd )
    }

    SelectVehicleType(Type,SubType)
    {
        cy.get(this.weblocators.VehicleType).click({force:true})
        cy.contains(Type).click({force:true})
        cy.contains(SubType).click()
    }

    EnterNumberOfVehicles(NoOfVeh)
    {
        cy.get(this.weblocators.NoOfVehicles).type(NoOfVeh)
    }

    EnterAvgDistance(AvgDis)
    {
        cy.get(this.weblocators.AvgDistance).type(AvgDis)
    }

    SelectStartDate(Date,Year,Month)
    {
       cy.get(this.weblocators.ContractStartDate).click()
       cy.get(this.weblocators.StartYears).select(Year)
       cy.get(this.weblocators.StartMonths).select(Month)
       cy.get(this.weblocators.StartDays).contains(Date).click({force:true})
    }

    ClickOnSubmitButton()
    {
        cy.get(this.weblocators.SubmitButton).click()
    }

    
    
}