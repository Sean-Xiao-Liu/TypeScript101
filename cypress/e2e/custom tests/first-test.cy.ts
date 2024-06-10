// import {Pages} from "../../support/pages"
import { Pages } from "@support/pages";

describe('complicated-page with many web elements', () => {
  beforeEach(() => {
    cy.visit(Pages.getComplicatedPageUrl());
  })
  it('should land on complicated-page', () => {
    // cy.visit('https://ultimateqa.com/complicated-page');
    cy.get('#Skills_Improved');
  })

  context('paragraph', () => {
    it('paragraph should have title', () => {
      // cy.visit('https://ultimateqa.com/complicated-page');
      cy.get('#Skills_Improved') // get web element using css selector
          .should('be.visible')
          .should('exist')
          .should('have.text', "Skills Improved:"); // verify web element has text
    })
  })
  context('buttons', () => {
    it('should have 12 buttons', () => {
      // cy.visit('https://ultimateqa.com/complicated-page')
      cy.get('a[class*="et_pb_button"]')
          .should('be.visible')
          .should('have.length', 12);
    })

    it('should land on complicated page after click one the buttons', () => {
      // cy.visit('https://ultimateqa.com/complicated-page')
      cy.get('a[class*="et_pb_button"]')
          .eq(1)// get web element using css selector
          .click();

      cy.url().should('include', 'https://ultimateqa.com/complicated-page')
      // cy.title().should('be.visible').should('eq','Complicated Page - Ultimate QA');
    })
  })

  context('inputs', () => {
    it('should scroll to the input field', () => {
      // cy.visit('https://ultimateqa.com/complicated-page')
      cy.get('#et_pb_contact_name_0')
          .scrollIntoView();

      cy.get('#et_pb_contact_name_0')
          .should('be.visible');
    })

    it('should scroll to the input field and type in name', () => {
      // cy.visit('https://ultimateqa.com/complicated-page')
      cy.get('#et_pb_contact_name_0')
          .scrollIntoView()
          .type('test name')

      cy.get('#et_pb_contact_name_0')
          .should('have.value', 'test name');
    })
  })

  context('login function', () => {
    it('should redirect after login function', () => {
      cy.get('form[action=\'https://ultimateqa.com/backoffice\'] > p > input')
          .eq(0)
          .scrollIntoView()
          .type('test user name');

      cy.get('form[action=\'https://ultimateqa.com/backoffice\'] > p > input')
          .eq(1)
          .scrollIntoView()
          .type('test password');

      cy.get('button[name=\'et_builder_submit_button\']')
          .eq(1)
          .click();

      cy.url().should('eq', 'https://ultimateqa.com/backoffice');
    })
  })
})
