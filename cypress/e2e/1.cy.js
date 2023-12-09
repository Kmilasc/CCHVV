describe('Teste de Carregamento da Página Principal da Folha', () => {
  it('Deve carregar a página principal corretamente', () => {
      cy.visit('https://www.folha.uol.com.br/'); // Acessa a página da Folha
      cy.get('header').should('be.visible'); // Verifica se o cabeçalho está visível
      cy.get('footer').should('be.visible'); // Verifica se o rodapé está visível
      cy.get('body').should('not.have.class', 'error-page'); // Verifica se o corpo da página não tem classe de erro
  });
});