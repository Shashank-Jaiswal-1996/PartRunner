/// <reference types="cypress" />
export class OndemandTrip {
    weblocators=
    {
        Routes: 'body > pr-admin-root:nth-child(1) > pr-admin-shell:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > pr-nav-sidebar:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)',
        CreateTrip:'.btn.btn-black.create-trip',
        HaveaDriver: 'body > pr-admin-root:nth-child(1) > pr-admin-shell:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > pr-admin-create-new-trip:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > pr-load-deliveries-filter:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > i:nth-child(2)',
        SearchDriver: '#typeahead-basic',
        SelectDriver: '#ngb-typeahead-0',
        StartLocationDropdown: "input[placeholder='Select Location']",
        SelectStartLocation : '.container',
        DeliveryLastButton : '.page-link',
        SelectDelivery: '.mb-2',
        ClaculateTrip: '.btn.d-flex.align-items-center.filter-btn',
        CreateTripFinal: '.btn__pr'
    }

    ClickOnRoutes()
    {
        cy.get(this.weblocators.Routes).click()
        cy.wait(5000)
    }

    ClickOnCreateTrip()
    {
        cy.get(this.weblocators.CreateTrip).click()
        cy.wait(10000)
    }

    ClickOnHaveaDriver()
    {
        cy.get(this.weblocators.HaveaDriver).click()
    }

    SearchingDriver()
    {
        cy.get(this.weblocators.SearchDriver).type('indi_Driver')
    }

    SelectingDriver()
    {
        cy.get(this.weblocators.SelectDriver).contains('indi').click()
    }

    ClickStartLocation()
    {
        cy.get(this.weblocators.StartLocationDropdown).click()
    }

    SelectingStartLocation()
    {
        // cy.get(this.weblocators.SelectStartLocation).contains(' 400 N Michigan Ave, Chicago, IL 60611, USA ').click()
        cy.get(this.weblocators.SelectStartLocation).scrollTo('bottom').contains('78557').click()
    }

    ClickDeliveryLastButton()
    {
        cy.get(this.weblocators.DeliveryLastButton).contains('»»').click()
        cy.wait(10000)
    }

    SelectingDelivery()
    {
        cy.get(this.weblocators.SelectDelivery).eq(18).click()
    }

    ClaculatingTrip()
    {
        cy.get(this.weblocators.ClaculateTrip).click()
        cy.wait(20000)
    }

    CreatingTrip()
    {
        cy.get(this.weblocators.CreateTripFinal).contains('Create').click()
        
    }
}