import { Pages } from "@support/pages";

describe('complicated-page with many web elements', () => {
  before(() => { // this run once before all test cases
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
  })
  beforeEach(() => { // this run before every test case
    cy.visit(Pages.getComplicatedPageUrl());
  })
  afterEach(()=>{})
  after(()=>{ // run once after all whole test suite
    cy.clearAllLocalStorage();
    cy.clearAllCookies();
  })
  it('should land on complicated-page', {browser: 'firefox'},() => { // set browser to run tests
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
      cy.go('back'); // back to previous page
      cy.url().should('eq', Pages.getComplicatedPageUrl());
    })

    it('should redirect after login function with alias and special character input', () => {
      cy.get('form[action=\'https://ultimateqa.com/backoffice\'] > p > input')
          .eq(0)
          .as('username')
      cy.get('form[action=\'https://ultimateqa.com/backoffice\'] > p > input')
          .eq(1)
          .as('password')

        cy.screenshot('before user credential'); // screenshot before enter user credential
      cy.get('@username').scrollIntoView().type('test');
      cy.get('@password').scrollIntoView().type('test{enter}'); // press Enter after input password
        cy.screenshot('after redirect'); // screenshot after redirect
      cy.url().should('eq', 'https://ultimateqa.com/backoffice');
    })
  })

  context('location',() =>{
    it('should be able to find path name', () => {
      cy.location('pathname') // pathname
          .should('eq', '/complicated-page');
    })

    it('should be able to find host name', () => {
      cy.location('hostname') // pathname
          .should('eq', 'ultimateqa.com')
    })

    it('should be able to find host', () => {
      cy.location('host') // host
          .should('eq', 'ultimateqa.com')
    })

    it('should be able to find port', () => {
      cy.location('port') // doesn't have a port number for this url
          .should('eq', '')
    })
  })
})
