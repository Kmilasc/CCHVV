describe('Teste de Navegação para a Seção Política', () => {
    it('Deve navegar para a seção Política e exibir a página corretamente', () => {
        cy.visit('https://www.folha.uol.com.br/'); 
        cy.get('a[href*="/politica"]').first().click(); 
        cy.url().should('include', '/politica'); 
        cy.get('h1').contains('Política'); 
    });
});