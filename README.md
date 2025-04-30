Olá, Lucas!

Agradeço pela oportunidade de colaborar com a DOTDigital. 
Este projeto foi desenvolvido para automatizar a criação, consulta e exclusão de repositórios e issues no GitHub, usando o Cypress.
--> Importante: O token de autenticação necessário para interagir com a API do GitHub deve ser inserido diretamente no arquivo github_api_flow.cy.js. <--
--> O token foi enviado por email e deve ser colocado no local apropriado no código para garantir que os testes funcionem corretamente. <--

Passo a Passo para Rodar o Projeto:

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
