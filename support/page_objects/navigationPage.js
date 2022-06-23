
function selectGroupMenuItem(groupName) {
    cy.contains('a', groupName).then(menu => {
        cy.wrap(menu).find('[pack="nebular-essentials"]').find('[data-name="Layer 2"] g')
            .invoke('attr', 'data-name').then(attr => {
                if (attr.includes('left')) {
                    cy.wrap(menu).click();
                }
            })
    })
}

export class NavigationPage {

    formLayoutsPage() {
        selectGroupMenuItem('Form')
        cy.contains('Form Layouts').click();
    }

    formDatepickerPage() {
        selectGroupMenuItem('Form');
        cy.contains('Datepicker').click();
    }

    toasterPage() {
        selectGroupMenuItem('Modal & Overlays');
        cy.contains('Toastr').click();
    }

    smartTablePage() {
        selectGroupMenuItem('Tables & Data');
        cy.contains('Smart Table').click();
    }
}

export const onNavigateTo = new NavigationPage();
