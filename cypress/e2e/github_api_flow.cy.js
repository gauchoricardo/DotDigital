describe('Fluxo completo - GitHub API', () => {
    const BASE_URL = 'https://api.github.com/repos';   // URL base da API de repositórios do GitHub
    const token = '';  // Enviado por email.
    const username = 'contadetrabalhoricardo'; // Nome de usuário do GitHub
    const repoName = 'TestesDOTDigital'; // Nome do repositório utilizado nos testes
                                      
                      //Foi criada uma conta nova somente para esses testes.
  
   // Headers usados em todas as requisições autenticadas
   const authHeaders = {
    Authorization: token ${token},
    Accept: 'application/vnd.github+json'
  };
  
  
  it('Criação de um repositório no GitHub', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.github.com/user/repos',
      headers: authHeaders,
      body: {
        name: repoName,
        description: 'Repositório de teste com Cypress',
        private: false // repositório público
      }
    }).then((response) => {
      expect(response.status).to.eq(201); // Verifica se foi criado com sucesso
      expect(response.body).to.have.property('full_name', ${username}/${repoName}); // Verifica o nome completo
    });
  });
  
  
  it('Consulta o repositório criado', () => {
    cy.request({
      method: 'GET',
      url: ${BASE_URL}/${username}/${repoName},
      headers: authHeaders
    }).then((response) => {
      expect(response.status).to.eq(200); // Deve retornar com sucesso
      expect(response.body.name).to.eq(repoName); // Confirma que o nome é o mesmo
    });
  });
  
  
  it('Criação de uma issue no repositório', () => {
    cy.request({
      method: 'POST',
      url: ${BASE_URL}/${username}/${repoName}/issues,
      headers: authHeaders,
      body: {
        title: 'Issue teste',
        body: 'Issue Criada pelo Ricardo automaticamente no cypress'
      }
    }).then((response) => {
      expect(response.status).to.eq(201); // Verifica se a issue foi criada
      expect(response.body.title).to.eq('Issue teste'); // Confirma o título da issue
  
      // precisa adicionar esse delay. Senão a consulta pela issue criada vai dar erro.
      cy.wait(2000); // Espera 2 segundos
    });
  });
  
  // Consulta a lista de issues do repositório
  it('Consulta a issue criada', () => {
    cy.request({
      method: 'GET',
      url: ${BASE_URL}/${username}/${repoName}/issues,
      headers: authHeaders
    }).then((response) => {
      expect(response.status).to.eq(200); // Resposta OK
      expect(response.body.length).to.be.greaterThan(0); // Deve ter pelo menos uma issue
      expect(response.body[0].title).to.eq('Issue teste'); // Verifica o título da primeira issue
    });
  });
  
  // Deleta o repositório criado
  it('Exclusão do repositório', () => {
    cy.request({
      method: 'DELETE',
      url: ${BASE_URL}/${username}/${repoName},
      headers: authHeaders
    }).then((response) => {
      expect(response.status).to.eq(204); // Resposta de sucesso sem conteúdo
    });
  });
  
  // Verifica se o repositório realmente foi excluído
  it('Verifica se o repositório foi excluído', () => {
    cy.request({
      method: 'GET',
      url: ${BASE_URL}/${username}/${repoName},
      headers: authHeaders,
      failOnStatusCode: false // Não falha mesmo se o status for 404
    }).then((response) => {
      expect(response.status).to.eq(404); // Repositório não deve existir mais
    });
  });
  });