import 'cypress-real-events/support';

export class addServices {
    weblocator =
        {
            HoverOver: '.withoutChildren',
            Routes: 'Routes',


        }

    HoverOnNavBar() {
        cy.get(this.weblocator.HoverOver).realHover()
    }
    ClickOnRoutes() {
        cy.contains(this.weblocator.Routes).click()
    }





}