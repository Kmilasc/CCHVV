describe('Teste de Pesquisa no Site da Folha', () => {
    it('Deve realizar uma pesquisa e exibir resultados relevantes', () => {
        cy.visit('https://www.folha.uol.com.br/');
        cy.get('[data-testid="search-open-button"]').click();
        cy.get('[data-testid="search-input"]').type('economia{enter}'); 

        cy.url().should('include', '/busca'); 
        cy.get('.c-headline__content').should('contain', 'economia'); 
    });
});