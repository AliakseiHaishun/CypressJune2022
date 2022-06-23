/// <reference types="cypress" />

import { onHomePage } from "../../../support/page_objects/homePage";
import { onNavigateTo } from "../../../support/page_objects/navigationPage";

describe('Test with Page Objects', () => {

    beforeEach ('open app', () => {
        cy.openHomePage();
        onHomePage.chooseTheme('Light');
    })

    it('verify navigation actoss the pages', () => {
        onNavigateTo.formLayoutsPage();
        onNavigateTo.formDatepickerPage();
    })


})