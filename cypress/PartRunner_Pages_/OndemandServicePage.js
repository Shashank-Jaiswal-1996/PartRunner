
export class OndemandServices {
    weblocators =
        {
            RequestDelivery: '.btn.btn-black.request-delivery',
            CompanyName: '#typeahead-basic',
            SelectCom: '#ngb-typeahead-0-0',
            SelectBranch: ':nth-child(2) > .input-group > .form-control',
            SelectUsers: ':nth-child(3) > .input-group > .form-control',
            CompanytDetailsNext: '.btn__pr',
            EntterPickupLocation: '#pickup-0',
            Pic_DropLoc: '.address__list',
            PickUp_DropOffColony: '#neighborhood',
            Show_ConfirmAddressButton: '.btn__pr',
            DropOffLocation: '#dropoff-0',
            ConfirmRoute: '.btn__pr',
            VehicleType: '.vehicle__content > :nth-child(2)',
            VehicleSubType: '.vehicle__content > :nth-child(2)',
            VehicleNext: '.btn__pr',
            DeliveryBack: '.btn__pr_white',
            DeliveryMethod: '#reqV2Method_Rush > .pr__des_card',
            MethodNext: '.btn__pr',
            AddProduct: ':nth-child(1) > .icon',
            NoOfBox: '.col-md-3 > .form-group > .form-control',
            SelectBoxSize: '.col-md-5 > .form-group > .form-control',
            BoxSubmit: '.d-flex > .btn__pr',
            BoxNext: '.btn__pr > .fa',
            PickupOrderNo: '.pr_card > :nth-child(1) > :nth-child(2) > .form-control',
            PickupName: ':nth-child(1) > .ng-dirty.ng-invalid > .pr_card > :nth-child(2) > :nth-child(1) > .form-control',
            PickupPhone: '#pickup0_contact_phone',
            SelectPickupLocationType: ':nth-child(1) > .ng-dirty.ng-invalid > .pr_card > :nth-child(2) > :nth-child(3) > .form-control',
            PickupInstructions: ':nth-child(1) > .ng-dirty.ng-invalid > .pr_card > :nth-child(2) > .mb-0 > .form-control',
            DropoffName: 'form.ng-untouched > .pr_card > :nth-child(2) > :nth-child(1) > .form-control',
            DropoffNumber: '#dropoff0_contact_phone',
            SelectDropoffLocationType: ':nth-child(2) > .ng-dirty.ng-invalid > .pr_card > :nth-child(2) > :nth-child(3) > .form-control',
            DropoffInstructions: '.ng-dirty.ng-invalid > .pr_card > :nth-child(2) > .mb-0 > .form-control',
            SelectChannelType: '.mb-2 > .row > .form-group > .form-control',
            FinalStepSubmitButton: '.btn__pr'
        }

    ClickOnRequestDelivery() {
        cy.get(this.weblocators.RequestDelivery).click()
    }

    SelectCompany(comName) {
        cy.get(this.weblocators.CompanyName).type(comName)
        cy.get(this.weblocators.SelectCom).contains('mexicostage').click()
        // cy.get(this.weblocators.SelectCom).type('{enter}')
    }

    SelectBranch(Branch) {
        cy.get(this.weblocators.SelectBranch).select(Branch)
        cy.wait(3000)
    }

    SelectUser(User) {
        cy.get(this.weblocators.SelectUsers).select(User)
    }

    ClickComDetailsNext() {
        cy.get(this.weblocators.CompanytDetailsNext).click()
    }

    EnterPickupLocation(PickupLoc) {
        cy.get(this.weblocators.EntterPickupLocation).type(PickupLoc)
        cy.wait(3000)
    }

    SelectPickupLocation(Containss) {
        cy.get(this.weblocators.Pic_DropLoc).contains(Containss).click()
    }

    EnterPickupColony() {
        cy.get(this.weblocators.PickUp_DropOffColony).type('1')
    }

    ClickShowPickupAddress() {
        cy.get(this.weblocators.Show_ConfirmAddressButton).click()
        cy.wait(4000)
    }

    ClickConfirmPickupAddress() {
        cy.get(this.weblocators.Show_ConfirmAddressButton).click()
    }

    EnterDropoffLocation(DropOff) {
        cy.get(this.weblocators.DropOffLocation).type(DropOff)
    }

    SelectDropOffLocation(DropContains) {
        cy.get(this.weblocators.Pic_DropLoc).contains(DropContains).click()
    }

    EnterDropoffColony() {
        cy.get(this.weblocators.PickUp_DropOffColony).type('1')
    }

    ClickShowDropOffAddress() {
        cy.get(this.weblocators.Show_ConfirmAddressButton).click()
        cy.wait(4000)
    }

    ClickConfirmDropOffAddress() {
        cy.get(this.weblocators.Show_ConfirmAddressButton).click()
    }

    ClickConfirmRoute() {
        cy.get(this.weblocators.ConfirmRoute).click()
    }

    SelectVehicleType() {
        cy.get(this.weblocators.VehicleType).click()
    }

    SelectVehicleSubType() {
        cy.get(this.weblocators.VehicleSubType).click()
    }

    ClickVehicleNextButton() {
        cy.get(this.weblocators.VehicleNext).click()
        cy.wait(4000)
    }

    ClickDeliveryBackButton() {
        cy.get(this.weblocators.DeliveryBack).click()
    }

    AgainClickVehicleNextButton() {
        cy.get(this.weblocators.VehicleNext).click()
        cy.wait(30000)
    }

    SelectDeliveryMethod() {
        cy.get(this.weblocators.DeliveryMethod).click()
    }

    ClickMethodNextButton() {
        cy.get(this.weblocators.MethodNext).click()
    }

    SelectProductType() {
        cy.get(this.weblocators.AddProduct).click()
    }

    EnterNumberOfProduct() {
        cy.get(this.weblocators.NoOfBox).type('2')
    }

    SelectSizeOfItem() {
        cy.get(this.weblocators.SelectBoxSize).select('436', '3cms x 3cms x 3cms')
    }

    ClickSubmitProduct() {
        cy.get(this.weblocators.BoxSubmit).click()
    }

    ClickProductProceed() {
        cy.get(this.weblocators.BoxNext).click()
    }

    EnterPickupOrderNumber(PicOrderNo) {
        cy.get(this.weblocators.PickupOrderNo).clear()
        cy.get(this.weblocators.PickupOrderNo).type(PicOrderNo)
    }

    EnterPickupName(PicName) {
        cy.get(this.weblocators.PickupName).clear()
        cy.get(this.weblocators.PickupName).type(PicName)
    }

    EnterPickupPhoneNumber(PicPhone) {
        cy.get(this.weblocators.PickupPhone).clear()
        cy.get(this.weblocators.PickupPhone).type(PicPhone)
        cy.wait(2000)
    }

    SeelectPickupLocationType() {
        const ExpectedValue = 'Location Type Commercial Construction Site Loading Dock Office Building Other Residence Warehouse'
        cy.get(this.weblocators.SelectPickupLocationType).select('6', 'Loading Dock')
        cy.get(this.weblocators.SelectPickupLocationType).each(($option) => {
            const OptionValues = $option.text()
            console.log(OptionValues)
            expect(OptionValues).to.be.eq(ExpectedValue)
        })
    }

    EnterPickupInstructions(PicIns) {
        cy.get(this.weblocators.PickupInstructions).type(PicIns)
    }

    EnterDropOffName(DropName) {
        cy.get(this.weblocators.DropoffName).clear()
        cy.get(this.weblocators.DropoffName).type(DropName)
    }

    EnterDropOffPhoneNumber(DropNumb) {
        cy.get(this.weblocators.DropoffNumber).clear()
        cy.get(this.weblocators.DropoffNumber).type(DropNumb)
        cy.wait(2000)
    }

    SelectingDropoffLocationType() {
        cy.get(this.weblocators.SelectDropoffLocationType).select('8', ' Construction Site')
    }

    EnterDropoffInstructions(DropInstruction) {
        cy.get(this.weblocators.DropoffInstructions).type(DropInstruction)
    }

    SelectingChannelType() {
        cy.get(this.weblocators.SelectChannelType).select('3', ' Offline - Chat')
    }

    ClickFinalSubmitButton() {
        cy.get(this.weblocators.FinalStepSubmitButton).click()
    }
}