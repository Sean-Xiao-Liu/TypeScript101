import {Pages} from "@support/pages";

describe('Stubs and Spies', () => {
    beforeEach(() => { // this run before every test case
        cy.visit(Pages.getComplicatedPageUrl());
    })

    context('stub',() => {
        it('create stub',() => { // set browser to run tests
            // cy.visit('https://ultimateqa.com/complicated-page');
            cy.stub(window.navigator.geolocation,'getCurrentPosition')
                .as('geolocation');
            cy.get('a[class*="et_pb_button"]')
                .eq(1)// get web element using css selector
                .click();
            cy.get('@geolocation').should('have.been.called');
        })
    })
})
