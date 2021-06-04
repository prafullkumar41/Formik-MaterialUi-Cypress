/// <reference types = "cypress" />
import 'cypress-react-selector';
 
describe('Test cases for Demo app', () => {
  beforeEach(() =>{
    cy.visit('/')
    cy.waitForReact();
  })
  
  it('Testing First Name', () => {
    
    cy.react('TextField', { props: { label : "First Name" } }).type('Prafull')
    cy.getReact('TextField', { props: { label : "First Name" }})
      .getProps('value')
      .should('eq', 'Prafull')
  })
  
  it('Testing Last Name', () => {
    
    cy.react('TextField', { props: { label : "Last Name" } }).type('Singh')
    cy.getReact('TextField', { props: { label : "Last Name" }})
      .getProps('value')
      .should('eq', 'Singh')
  })

  it('Testing Email', () => {
    cy.react('TextField', { props: { label : "Email" } }).type('prafullsingh')
    cy.getReact('TextField', { props: { label : "Email" }})
      .getProps('type')
      .should('eq','email') 
  })

  it('Testing Phone', () => {
    cy.get('[name="phone"]').type(98765)
    cy.getReact('TextField', { props: { label : "Phone" }})
      .getProps('value')
      .should('eq','98765') 

  })

  it('Testing Required Address1 Field', () => {
    cy.get('[name="addressLine1"]')
      .parent()
      .invoke('attr','class')
      .should('not.contain','Mui-error')
    cy.get('[name="addressLine1"]').click()
    cy.get('[name="addressLine2"]').click()
    cy.get('[name="addressLine1"]')
      .parent()
      .invoke('attr','class')
      .should('contain','Mui-error')

  })

  it('Testing Check Box', () => {
    cy.get('[type="checkbox"]').check().should('be.checked')
    cy.get('[type="checkbox"]').uncheck().should('not.checked')
  })
})