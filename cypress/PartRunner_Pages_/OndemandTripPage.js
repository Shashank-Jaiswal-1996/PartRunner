/// <reference types="cypress" />
export class OndemandTrip {
    weblocators=
    {
        Routes: 'body > pr-admin-root:nth-child(1) > pr-admin-shell:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > pr-nav-sidebar:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)',
        CreateTrip:'.btn.btn-black.create-trip',
        HaveaDriver: 'body > pr-admin-root:nth-child(1) > pr-admin-shell:nth-child(5) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > pr-admin-create-new-trip:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > pr-load-deliveries-filter:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > i:nth-child(2)',
    }

    ClickOnRoutes()
    {
        cy.get(this.weblocators.Routes).click()
    }

    ClickOnCreateTrip()
    {
        cy.get(this.weblocators.CreateTrip).click()
    }

    ClickOnHaveaDriver()
    {
        cy.get(this.weblocators.HaveaDriver).click()
    }
}