/// <reference types="cypress" />

describe('testes para agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('deve exibir o título da página', () => {
        cy.get('h1').contains('Agenda de contatos')
    })

    it('deve incluir novo contato', () => {
        cy.get('[type="text"]').type('letícia')
        cy.get('[type="email"]').type('leticia@gmail.com')
        cy.get('[type="tel"]').type('1188888888')
        cy.get('.adicionar').click()

        cy.get('.sc-dmqHEX').contains('letícia')
    })

    it('deve alterar infos de contato', () => {
        cy.get('.edit').first().click()
        cy.get('[type="text"]').clear().type('Zeca Sousa')
        cy.get('[type="email"]').clear().type('zeca@ebac.com')
        cy.get('.alterar').click()

        cy.get('.sc-dmqHEX').contains('Zeca Sousa')
    })

    it('deve remover um contato', () => {
        cy.get('.delete').first().click()

        cy.get('.sc-dmqHEX').should('not.contain', 'Zeca Sousa')
    })
})