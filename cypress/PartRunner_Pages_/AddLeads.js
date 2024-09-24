import 'cypress-real-events/support';
import 'cypress-wait-until';
import AddLeads from '../fixtures/AddLeads.json'

export class Addleads {
    weblocator =
        {
            Aquisition: '(//span[text()="Acquisition"])[1]',
            AddLeadButton: '//*[@class="btn__pr_white add"]',
            PhoneNumber: '//*[@id="phone-number"]',
            Name: '//*[@name="full_name"]',
            Source: '(//select[@class="form-control ng-untouched ng-pristine ng-invalid"])[1]',
            PrAdmin: '//select[@id="pr_user_id"]',
            SaveNextButton: '//*[@class="btn__pr_white save"]',
            CancelButton: '//*[@class="btn__pr_white cancel"]',
            DriverTypeIndi: '//*[text()=" Independent Driver "]',
            DriverTypeFleet: '//*[text()=" Fleet Operator "]',
            City: '//select[@formcontrolname="location"]',
            VehicleType: '//select[@formcontrolname="vehicle_type_codes"]',
            VehicleSubType: '//select[@formcontrolname="vehicle_subcategory_codes"]',
            VehicleYear: '//select[@formcontrolname="vehicle_year"]',
            LeadName: `//*[@class="truncate" and text()="${AddLeads.ValidData.FullName}"]`,
            TrippleDot: '.btn.btn__action.menu-box.float-right',
            ChangeStatusButton: '//*[@class="d-flex align-items-center"]//img[@alt="change-status"]',
            VideoButton: '//*[text()=" Video "]',
            GoogleMeetButton: '//*[text()=" Google Meet "]',
            ConfirmYesButton: '//*[@class="btn__pr mx-2 ls__none"]',
            DeleteButton:'.d-flex.align-items-center.delete',
            DeleteConfirmButton:'.btn__pr__secondary',
            LeadDetailsCloseButton:'//*[@class="icon-close-btn"]',
            QuaifiedLeadButton:'//*[text()=" Qualified Leads "]',


            //Error Messages and Toasters
            PrAdminEmpty: '(//*[@class="error"])[4]',
            SourceEmpty: '(//*[@class="error"])[3]',
            FullNameEmpty: '(//*[@class="error"])[2]',
            PhoneNumberEmpty: '(//*[@class="error"])[1]',
            ProspectCreated: 'Lead creatred successfully',
            LeadError: '//*[@class="error" and text()=" This field is required. "]',
            CityDropDownError: '(//*[@class="error"])[1]',
            VehicleTypeDropDownError: '(//*[@class="error"])[2]',
            VideoTypeError: '//*[@class="error"]',
        }

    VerifyButtons() {
        cy.xpath(this.weblocator.PhoneNumber).should('be.visible')
        cy.xpath(this.weblocator.Name).should('be.visible')
        cy.xpath(this.weblocator.Source).should('be.visible')
        cy.xpath(this.weblocator.PrAdmin).should('be.visible')
        cy.xpath(this.weblocator.SaveNextButton).should('be.visible')
        cy.xpath(this.weblocator.CancelButton).should('be.visible')
    }

    ClickOnAquisition() {
        cy.xpath(this.weblocator.Aquisition).click()
        cy.wait(20000)
    }

    ClickOnAddLead() {
        cy.xpath(this.weblocator.AddLeadButton).click()
    }

    EnterPhoneNumber(Number) {
        cy.xpath(this.weblocator.PhoneNumber).type(Number)
    }

    EnterName(Name) {
        cy.xpath(this.weblocator.Name).type(Name)
    }

    SelectSource(value, option) {
        cy.xpath(this.weblocator.Source).select(value, option)
    }

    SelectPRAdmin(AdminValue, AdminOption) {
        cy.xpath(this.weblocator.PrAdmin).select(AdminValue, AdminOption)
    }

    ClickOnNextButton() {
        cy.xpath(this.weblocator.SaveNextButton).click()
        cy.wait(10000)
    }

    EmptyErrorMessages() {
        cy.xpath(this.weblocator.PrAdminEmpty).should('be.visible')
        cy.xpath(this.weblocator.SourceEmpty).should('be.visible')
        cy.xpath(this.weblocator.FullNameEmpty).should('be.visible')
        cy.xpath(this.weblocator.PhoneNumberEmpty).should('be.visible')
    }

    InvalidDataVerification(InvalPhone, InvalName) {
        cy.xpath(this.weblocator.PhoneNumber).type(InvalPhone)
        cy.contains(' Please enter a valid phone number of 10 digits ', { matchCase: false }).should('be.visible')
        cy.xpath(this.weblocator.FullNameEmpty).should('be.visible')
    }

    SuccessfullyLeadCtreated() {
        cy.contains('Lead created successfully', { matchCase: false }).should('be.visible')
    }

    ElementOnPage02() {
        cy.xpath(this.weblocator.DriverTypeIndi).should('be.visible')
        cy.xpath(this.weblocator.DriverTypeFleet).should('be.visible')
        cy.xpath(this.weblocator.SaveNextButton).should('be.visible')
        cy.xpath(this.weblocator.CancelButton).should('be.visible')
    }

    SelectDriverType() {
        cy.xpath(this.weblocator.DriverTypeIndi).click()
    }

    ElementPage03() {
        cy.xpath(this.weblocator.City).should('be.visible')
        cy.xpath(this.weblocator.VehicleType).should('be.visible')
        cy.xpath(this.weblocator.VehicleSubType).should('be.visible')
        cy.xpath(this.weblocator.VehicleYear).should('be.visible')
        cy.xpath(this.weblocator.SaveNextButton).should('be.visible')
        cy.xpath(this.weblocator.CancelButton).should('be.visible')
    }

    SelectCity(CityVal, CityOpt) {
        cy.xpath(this.weblocator.City).select(CityVal, CityOpt)
    }

    SelectVehicle(VehicleVal, VehicleOpt) {
        cy.xpath(this.weblocator.VehicleType).select(VehicleVal, VehicleOpt)
    }

    SelectSubVehicle(SubVal, SubOpt) {
        cy.xpath(this.weblocator.VehicleSubType).select(SubVal, SubOpt)
    }

    SelectVehiceYear(Yearval, YearOpt) {
        cy.xpath(this.weblocator.VehicleYear).select(Yearval, YearOpt)
    }

    ClickonGeneratedLead() {
        cy.xpath(this.weblocator.LeadName).click()
    }

    HoverOverDots() {
        cy.get(this.weblocator.TrippleDot).realHover()
    }

    ClickOnEditButton() {
        cy.xpath(this.weblocator.ChangeStatusButton).click()
    }

    LeadTypeErrorMessage() {
        cy.xpath(this.weblocator.LeadError).should('have.text', ' This field is required. ', { matchCase: true })
    }

    ErrorOnPage03() {
        cy.xpath(this.weblocator.CityDropDownError).should('be.visible')
        cy.xpath(this.weblocator.VehicleTypeDropDownError).should('be.visible')
    }

    ElementsOnPage04() {
        cy.xpath(this.weblocator.VideoButton).should('be.visible')
        cy.xpath(this.weblocator.GoogleMeetButton).should('be.visible')
        cy.xpath(this.weblocator.SaveNextButton).should('be.visible')
        cy.xpath(this.weblocator.CancelButton).should('be.visible')
    }

    ErrorOnPage04() {
        cy.xpath(this.weblocator.VideoTypeError).should('be.visible')
    }

    ClickOnVideo() {
        cy.xpath(this.weblocator.VideoButton).click()
    }

    ClickonYesButton() {
        cy.xpath(this.weblocator.ConfirmYesButton).click()
    }

    DeleteLead()
    {
        cy.get(this.weblocator.DeleteButton).click()
        cy.get(this.weblocator.DeleteConfirmButton).eq(0).click() 
    }

    DetailsClose()
    {
        cy.xpath(this.weblocator.LeadDetailsCloseButton).click()
    }

    ClickOnQualifiedLeadButton()
    {
        cy.xpath(this.weblocator.QuaifiedLeadButton).click()
        cy.wait(6000)
    }

}