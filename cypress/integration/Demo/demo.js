
import {When, Given, Then } from "cypress-cucumber-preprocessor/steps";
const url = 'https://www.demoblaze.com/index.html'


Given('I user navigate to Laptop', () => {
    cy.visit(url)
    cy.xpath('//a[@id="itemc"][2]').click()
    cy.get('div:nth-child(3)>div>div>h4>a').should('contain', 'MacBook air')
})

Then(`I add the following Sony vaio i5`, (item) => {
    cy.xpath('//a[@id="itemc"][2]').click()
    cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').click()
    cy.get('#tbodyid > div.row > div > a').click()
    cy.on("window:confirm", (text) => {
        expect(txt).to.contains('Product added')
      })
   cy.get('#navbarExample>ul>li.nav-item.active>a').click()
})

Then(`I add the following Dell i7 8gb`, (item) => {
    cy.xpath('//a[@id="itemc"][2]').click()
    cy.get('#tbodyid > div:nth-child(4) > div > div > h4 > a').click()
    cy.get('#tbodyid > div.row > div > a').click()
    cy.on("window:confirm", (text) => {
        expect(txt).to.contains('Product added')
      })
    cy.get('#navbarExample>ul>li.nav-item.active>a').click()
})