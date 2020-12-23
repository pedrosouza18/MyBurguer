/* eslint-disable no-undef */
describe('BurgerBuilder', () => {
  beforeEach(() => {
    cy.server()

    // alias the network request
    cy.route('/ingredients.json').as('ingredientsRequest')

    cy.visit('/')

    // wait for the network request to complete
    cy.wait('@ingredientsRequest')
  })

  it('should return ingredients', () => {
    cy.findByText('Salad')
  })
})
