# Testes unitários e de integração no Node.js com Jest

**Conteúdo**:
- Conceitos e fundamentos de testes;
- O que é a cultura de testes;
- testes estáticos e unitários;
- asserções;
- frameworks de testes jest;
- testes de integração com supertest.

## Tipos de testes

Os testes são importantes para evitar descobrir erros durante o runtime ou tempo de execução.

### Pirâmide de testes

- **E2E(end-to-end):** topo da pirâmide, testa a aplicação de ponta a ponta
- **Integração:** testes de integração entre as partes do projeto
- **Unitários:** base da pirâmide, menores componentes testados individualmente

Quanto mais ao topo da pirâmide mais integração, maior consumo de recursos e mais complexo e devagar.
Quanto mais a base da pirâmide mais isolado, maior volume de testes e mais simples e rápido.

#### Testes unitários

- [X] Testes curtos e isolados;
- [X] Análise de funções ou métodos;
- [ ] Não garante uma integração de módulos.

Exemplo: testar a função que calcula as taxas de um método de pagamento.

#### Testes de integração

- [X] Testes de rotas e requisições;
- [X] Comunicação dos módulos.
- [ ] Não analisa todo o fluxo da aplicação.

Exemplo: testar a requisição das rotas de uma API.

#### Testes E2E (end-to-end)

- [X] Ponta a ponta, alto nível;
- [X] Testes longos e completos;
- [X] Análise de todos os módulos e stacks. Ex: front-end/banco de dados/microsserviços.
- [ ] Tempo longo e custo alto;
- [ ] Complexa estrutura de testes.

Exemplo: testar uma aplicações web desde o cadastro, cliques e etc, ou seja, todas as funcionalidades.

## Cultura de testes

Um ambiente onde a equipe de desenvolvimento pode implementar e gerir os testes.

Fatores fundamentais:
- [X] Qualidade;
- [X] Confiança;
- [X] Tempo.

Fases do teste:
- Análise de requisitos: identificar as funcionalidades que serão testadas;
- Plano de teste: elaborar um plano para definir quais ferramentas serão utilizadas, quem vai criar, o tempo, os gastos de recursos;
- Caso de teste: os testes em si, quais são entradas, saídas, todo o mapeamento;
- Ambiente de teste: onde e como esses testes serão feitos;
- Implementação: documentação dos resultados dos testes, detalhamentos dos problemas e melhorias.

## Testes estáticos

Para analisar o código sem necessariamente executá-lo, verificando se algumas boas práticas e formatação padronizada foram adotadas na implementação.

### ESLint

Para realizar os testes estáticos estabelecendo uma padronização do código e identificação de erros.

Instalação: `npm install --save-dev eslint` 

Configuração: `npx eslint` 

```
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · node
√ How would you like to define a style for your project? · gu√ Where does your code run? · node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · airbnb
√ What format do you want your config file to be in? · JSON  Checking peerDependencies of eslint-config-airbnb-base@latest

The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2                           √ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
Installing eslint-config-airbnb-base@latest, eslint@^7.32.0 || ^8.2.0, eslint-plugin-import@^2.25.2
```

Execução: `npx eslint <nome do arquivo>`

## Jest 

Framework de testes em javascript. É utilizado como uma dependência de desenvolvimento.

Instalação: `npm install --save-dev jest`

Para executar o jest com a importação de módulos deve-se usar uma flag `--experimental-vm-modules`. Atualizando os scripts no package.json:

```json
"scripts": {
        "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
        "test:watch": "node --experimental-vm-modules node_modules/jest/bin/jest.js --detectOpenHandles --watch",
        "test:coverage": "node --experimental-vm-modules node_modules/jest/bin/jest.js --detectOpenHandles --coverage"
  },
```

Para executar o comando de teste: `npm run test` ou `npm test`

Opcionalmente pode adicionar o `:watch` e `:coverage`.

Para configurar parâmetros do jest deve-se criar um arquivo chamado `jest.config.js`.

Na nomeação dos arquivos de testes existe algumas convenções. Os arquivos podem estar dentro de uma pasta chamada `test` ou `_test_` ou dentro da pasta de origem do arquivo
a ser testado.

>Se você deseja escrever um teste unitário para cobrir, por exemplo, um arquivo `editorasController.js`, o arquivo de teste deve ser especificado com o sufixo  `editorasController.test.js` ou `editorasController.spec.js`, pois é uma convenção de mercado. Há ainda quem prefira especificar o tipo de teste com `nomeDoArquivo.unit.test.js` e `nomeDoArquivo.int.test.js` para informar se o teste é unitário ou de integração. Todas estas formas são reconhecidas pelo Jest.
