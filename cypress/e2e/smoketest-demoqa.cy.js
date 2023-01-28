describe('Test suit - Prueba QA Equifax', () => {
  it('Prueba E2E - Agregar registro', () => {
    cy.visit('https://demoqa.com/webtables')
    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').type("Pedro")
    cy.get('#lastName').type("Capo")
    cy.get('#userEmail').type("pedrocapo@gmail.com")
    cy.get('#age').type("22")
    cy.get('#salary').type("1400000")
    cy.get('#department').type("QA")
    cy.get('#submit').click()
  })

  it('Prueba E2E - Editar registro', () => {
    cy.visit('https://demoqa.com/webtables')
    cy.get('#edit-record-3').click()
    cy.get('#firstName').clear()
    cy.get('#firstName').type("Pedro")
    cy.get('#lastName').clear()
    cy.get('#lastName').type("Capo")
    cy.get('#userEmail').clear()
    cy.get('#userEmail').type("pedrocapo@gmail.com")
    cy.get('#submit').click()
  });

  it('Prueba E2E - Eliminar registro', () => {
    cy.visit('https://demoqa.com/webtables')
    cy.get('#delete-record-3').click()
    
  });
})