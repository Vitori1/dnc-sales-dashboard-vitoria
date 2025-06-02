describe('Check if create profile page renders the correct components', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/cadastro')
  })

  it('should steps 1 and 12 works', () => {
    cy.get('input[type="text"]').type('Concreto')
    cy.get('input[type="email"]').type('concreto@gmail.com')
    cy.get('input[type="tel"]').type('11111111111')
    cy.get('button[type="submit"]').click()
    cy.get('input[type="password"]').type('@concretoH1')
    cy.get('button[type="submit"]').should('be.visible')
  })
})
