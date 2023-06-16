## Pré-Requisitos

Para rodar este projeto, você vai precisar:  

- [Node.js](https://nodejs.org/en/) (Versão `v16.14.2` enquanto escrevo esta documentação)  
- npm (Versão `8.5.0` enquanto escrevo esta documentação)  

**Note:** NPM é instalado automaticamente junto com o Node.  

## Instalação

Para instalar as dependências, rode `npm install` ou `npm i`.  

## Variáveis de ambiente

Antes de executar os testes, algumas variáveis de ambiente precisam ser configuradas.  

Já deixei as variáveis a serem utilizadas no arquivo `cypress.env.json`.  

**Nota:** `cypress.env.json` geralmente não versionamos este arquivo, mas como os dados sensíveis são apenas de teste, foi versionado.  

## Executando os testes

Neste projeto você pode executar os testes em modo interativo e em modo Headless.  

### Modo Headless

Rode `npm run cy:run` para executar todos os testes em modo headless.  

### Modo Interativo

Rode `npm run cy:open` para abrir o Cypress App e rodar os testes em modo interativo.  