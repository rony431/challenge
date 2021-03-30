
import {When, Given, Then } from "cypress-cucumber-preprocessor/steps";
const url = 'https://www.demoblaze.com/index.html'

Given('I validate the pet endpoint', () => {
    cy.visit(url)
    cy.contains('//a[@id=`itemc`][1]').click()
    cy.get('div:nth-child(1)>div>div>h4>a').should('contain', 'Samsung galaxy s6')
})

Then(`I should see all pets with status Available`, () => {
  cy.request('GET', url+'findByStatus?status=available').then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body[0].status).to.eq('available')
  })
})

