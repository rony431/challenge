
import {When, Given, Then } from "cypress-cucumber-preprocessor/steps";
const url = 'https://petstore.swagger.io/v2/pet/'
var newPet = {
  "id": 9192,
  "name": "Otto",
  "photoUrls": [],
  "tags": [],
  "status": "available"
}
var petUpdated = {
  "id": 9192,
  "name": "Otto",
  "photoUrls": [],
  "tags": [],
  "status": "sold"
}

Given('I validate the pet endpoint', () => {
   cy.request('GET',url+'5152').then((response) => {
    expect(response.status).to.eq(200)
  })
})

Then(`I should see all pets with status Available`, () => {
  cy.request('GET', url+'findByStatus?status=available').then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body[0].status).to.eq('available')
  })
})

Given('I post new pet as Available', () => {
  cy.request({
    method: 'POST',
    url: url, // baseUrl is prepended to url
    body: newPet
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.name).to.eq(newPet.name)
    expect(response.body.status).to.eq(newPet.status)
  })
})

Then(`I should see new pet created`, () => {
 cy.request('GET', url+newPet.id).then((response) => {
   expect(response.status).to.eq(200)
   expect(response.body.name).to.eq(newPet.name)
   expect(response.body.status).to.eq(newPet.status)
 })
})

Given('I update a pet from Available to Sold', () => {
  cy.request({
    method: 'PUT',
    url: url, // baseUrl is prepended to url
    body: petUpdated
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.name).to.eq(newPet.name)
    expect(response.body.status).to.eq(petUpdated.status)
  })
})

Then(`I should see pet updated`, () => {
 cy.request('GET', url+petUpdated.id).then((response) => {
   expect(response.status).to.eq(200)
   expect(response.body.name).to.eq(newPet.name)
   expect(response.body.status).to.eq(petUpdated.status)
 })
})
Given('I delete a pet already created', () => {
  cy.request('DELETE', url+newPet.id).then((response) => {
    expect(response.status).to.eq(200)
  })
})
