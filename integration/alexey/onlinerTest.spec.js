/// <reference types="cypress" />

describe ('onliner.by', () => {

    beforeEach('base page url', () => {
        cy.visit('https://onliner.by/');
    })

    //final
    it.only('search test 3', () => {
      cy.get('.fast-search__form').type('X');

      cy.get('.modal-iframe').its('0.contentDocument').its('body').should('not.be.undefined')
      .then(searchResult => {
        cy.wrap(searchResult).find('.search__suggest-match').should('have.text', 'X');
        cy.wrap(searchResult).find('.search__result').should('have.length.at.least', 1);

        cy.wrap(searchResult).find('.search__input').type('iaomi').should('have.value', 'Xiaomi').wait(3000);
        
        cy.wrap(searchResult).find('.product__title-link').invoke('text')
        .then(text => {
          expect(text).include('Xiaomi');
        })
      })
    })
  })



    it('search test 2', () => {

        cy.get('.fast-search__form').type('X');

      cy.get('.modal-iframe').its('0.contentDocument').its('body').should('not.be.undefined')
      .then(form => {
        cy.wrap(form).find('.search__result').should('have.length.at.least', 1);

        cy.wrap(form).find('.search__input').type('iaomi').then(searchResult => {
          cy.wrap(searchResult).should('have.value', 'Xiaomi');
            cy.wrap(form).find('.search__results').find('.search__result').find('.result__wrapper')
            .find('.product__title-link').invoke('text').then(text => {
              expect(text).include('xiaomi')
            })
        })
        })
      })