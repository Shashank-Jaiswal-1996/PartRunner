/// <reference types="cypress" />
export class OndemandTrip {
    weblocators =
        {
            Routes: '(//*[text()="Routes"])[1]',
            Matching: '(//*[text()="Matching"])[1]',
            OnDemandTrip: '(//*[@class="icon-ondemand-service pr"])[2]',
            CreateTrip: '.btn.btn-black.create-trip',
            DontHaveDriver: " Don't have a driver ",
            HaveaDriver: 'body > pr-admin-root:nth-child(1) > pr-admin-shell:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > pr-admin-create-new-trip:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > pr-load-deliveries-filter:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > i:nth-child(2)',
            SearchDriver: '#typeahead-basic',
            SelectDriver: '#ngb-typeahead-0',
            StartLocationDropdown: "input[placeholder='Select Location']",
            SelectStartLocation: '.container',
            DeliveryLastButton: '.page-link',
            SelectDelivery: '.mb-2',
            ClaculateTrip: '.btn.d-flex.align-items-center.filter-btn',
            CreateTripFinal: '.btn__pr'
        }

    ClickOnMatching() {
        cy.xpath(this.weblocators.Routes).click()
        cy.xpath(this.weblocators.Matching).click()
        cy.wait(5000)
        cy.xpath(this.weblocators.OnDemandTrip).click()
        cy.xpath(this.weblocators.OnDemandTrip).click()
    }

    ClickOnCreateTrip() {
        cy.get(this.weblocators.CreateTrip, { timeout: 30 * 1000 }).should('be.visible').then(() => {
            cy.get(this.weblocators.CreateTrip).click()
        })
    }

    ClickOnHaveaDriver() {
        cy.get(this.weblocators.HaveaDriver).click()
    }

    SearchingDriver() {
        cy.get(this.weblocators.SearchDriver).type('stage')
        cy.wait(5000)
    }

    SelectingDriver() {
        cy.get(this.weblocators.SelectDriver).contains('stagedriver3').click()
    }

    ClickStartLocation() {
        cy.get(this.weblocators.StartLocationDropdown).click()
    }

    SelectingStartLocation() {
        cy.get(this.weblocators.SelectStartLocation).scrollTo('bottom').contains('78557').click()
    }

    ClickDeliveryLastButton() {
        cy.get(this.weblocators.DeliveryLastButton).contains('»»').click()
        cy.wait(10000)
    }

    SelectingDelivery() {
        cy.get(this.weblocators.SelectDelivery).eq(5).click()
    }

    ClaculatingTrip() {
        cy.scrollTo('top', { easing: 'linear' })
        cy.get(this.weblocators.ClaculateTrip).click({ force: true })
        cy.wait(20000)
    }

    CreatingTrip() {
        cy.get(this.weblocators.CreateTripFinal).contains('Create').click()
    }
    ElementOnPage01() {
        cy.get(this.weblocators.HaveaDriver).should('be.visible')
        cy.contains(this.weblocators.DontHaveDriver, { timeout: 30 * 1000 }).should('exist')
        cy.get(this.weblocators.StartLocationDropdown).should('be.visible')
    }

}