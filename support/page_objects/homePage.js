
export class HomePage {

    chooseTheme(themeName) {
        cy.contains('nb-card-header', themeName).click();
    }
}

export const onHomePage = new HomePage();