Olá, Lucas!

Agradeço pela oportunidade de colaborar com a DOTDigital. 
Este projeto foi desenvolvido para automatizar a criação, consulta e exclusão de repositórios e issues no GitHub, usando o Cypress.
--> Importante: O token de autenticação necessário para interagir com a API do GitHub deve ser inserido diretamente no arquivo github_api_flow.cy.js. <--
--> O token foi enviado por email e deve ser colocado no local apropriado no código para garantir que os testes funcionem corretamente. <--

--Plano de Testes - Projeto GitHub API

-Site escolhido: GitHub

-Escopo dos testes: Os testes automatizados foram desenvolvidos para validar funcionalidades básicas da API do GitHub 
relacionadas à criação, leitura e exclusão de repositórios e issues.

-História do Usuário
Como usuário autenticado da API do GitHub,
Quero criar e gerenciar repositórios e issues automaticamente,
para facilitar fluxos de integração e testes contínuos.

-Critérios de Aceite
Deve ser possível criar um repositório público.
Deve ser possível consultar os dados do repositório criado.
Deve ser possível criar uma issue no repositório.
Deve ser possível consultar a issue criada.
Deve ser possível excluir o repositório.
A consulta ao repositório excluído deve retornar status 404.

-Casos de Testes
Criação de repositório com sucessoResultado esperado: status 201 e nome correto do repositório.
Consulta de repositório existenteResultado esperado: status 200 e nome igual ao criado.
Criação de issue com sucessoResultado esperado: status 201 e título igual ao enviado.
Consulta da issue criadaResultado esperado: status 200, lista com pelo menos uma issue e título da primeira igual ao criado.
Exclusão de repositórioResultado esperado: status 204.
Consulta de repositório excluídoResultado esperado: status 404.

-Estimativa de Tempo - Teste Manual
Cada passo manual envolveria:
Autenticação via token e ferramentas como Postman (1 minuto)
Criação e consulta de repositório (2 minutos)
Criação e consulta de issue (2 minutos)
Exclusão do repositório e nova consulta (2 minutos)

Tempo total estimado manualmente: ~7 minutos

-Estimativa de Tempo - Teste Automatizado
Os testes com Cypress são sequenciais e rápidos.Com a execução headless em CI:

Execução completa: < 10 segundos




--Passo a Passo para Rodar o Projeto:

- Baixar o Projeto

- Clone o repositório do GitHub na sua máquina usando o comando git clone <URL-do-repositório>.

- Instalar as Dependências

    Navegue até a pasta do projeto e instale as dependências necessárias com o comando npm install.

- Configurar o Token

    Abra o arquivo github_api_flow.cy.js e insira o token de autenticação no local indicado.

- Rodar os Testes

    Após configurar o token, execute os testes com o comando npx cypress open.

- Relatórios

    Este projeto gera relatórios detalhados das execuções. Após rodar os testes, os relatórios estarão disponíveis na pasta cypress/results.

- Pipeline

    A pipeline foi configurada no GitHub Actions para rodar os testes automaticamente. Porém, como o token não pode ser subido para o repositório, a pipeline irá apresentar um erro por conta da falta do token.


Se precisar de qualquer ajuda ou ajuste, estou à disposição!
