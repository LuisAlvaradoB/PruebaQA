# Prueba QA Equifax
[![Cypress](https://img.shields.io/badge/JS%20Test-Cypress-blue)](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

Para revisar los Casos de Prueba solicitados hacer click [aquí](https://docs.google.com/spreadsheets/d/12Ph4mmdheLA3SQq_TuG_7MQqAV3C0Iv0gfDtU_NZ_2E/edit#gid=0).

Suite de test para automatizar flujos en el sitio de prueba [DEMOQA](https://demoqa.com/webtables), los cuales consisten en:
- Agregar
- Editar
- Eliminar

Para ello se ha utilizado la herramienta [Cypress](https://www.cypress.io/) para la automatización de los test bajo lenguaje Javascript. El archivo con los test escritos se encuentra en la ubicación:
```bash
cypress\e2e\smoketest-demoqa.cy.js
```

A continuación se detallan los códigos utilizados para las automatizaciones solicitadas.

### Automatización Flujo Agregar
```js
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
```

### Automatización Flujo Editar
```js
it('Prueba E2E - Agregar registro', () => {
    cy.visit('https://demoqa.com/webtables')
    cy.get('#edit-record-3').click()
    cy.get('#firstName').clear()
    cy.get('#firstName').type("Pedro")
    cy.get('#lastName').clear()
    cy.get('#lastName').type("Capo")
    cy.get('#userEmail').clear()
    cy.get('#userEmail').type("pedrocapo@gmail.com")
    cy.get('#submit').click()
  })
```

### Automatización Flujo Eliminar
```js
it('Prueba E2E - Agregar registro', () => {
    cy.visit('https://demoqa.com/webtables')
    cy.get('#delete-record-3').click()
  })
```

### Ejecutar test
Para ejecutar los test se debe introducir el comando
```bash
npm run first-test
```
El cual ejecutará y mostrará en consola el resultado de los test como en la imagen siguiente:

![enter image description here](http://drive.google.com/uc?export=view&id=13fng8HnBA9228XYnAI8jTNDwNqNF0Wfo)




