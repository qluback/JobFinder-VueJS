// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('h1').contains('JobFinder')
  })

  it('Add favorite job', () => {
    cy.get('.containerButtonShowJob__button__fav').first().click()
    cy.wait(5000)
  })

  it('Type city', () => {
    cy.get('.offerForm__input').first().type('New York')
  })

  it('Type description', () => {
    cy.get('.offerForm__input').last().type('Javascript')
  })

  it('Tick checkbox full-time', () => {
    cy.get('.containerCheckbox__input').click()
  })

  it('Submit form', () => {
    cy.get('.offerForm__submit').click()
  })

  it('Show job details', () => {
    cy.wait(5000)
    cy.get('.containerButtonShowJob__button.details').first().click()
  })

  it('Return to root url', () => {
    cy.wait(5000)
    cy.get('.nav__title').click()
  })
})

