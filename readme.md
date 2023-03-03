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

### Watch e Coverage

#### watch

O modo watch acompanha simultaneamente os arquivos de testes, de modo que ao realizar alterações e salvar, os testes são executados novamente em tempo real. 

Execução: `npm run test:watch`

![image](https://user-images.githubusercontent.com/79461028/221580892-a33585e4-bd28-48b2-a844-234f5ff90262.png)

#### coverage

O modo coverage gera um relatório dos testes com mais informações.

Execução: `npm run test:coverage`

![image](https://user-images.githubusercontent.com/79461028/221581438-1da65d51-a1dc-4c53-8db9-d2ff31725c86.png)

| Parâmetro | Descrição |
   |---|---|
   | `% Stmts` | São statements, ou afirmações, em percentual, que foram percorridas. |
| `% Branch` | São as bifurcações de condicionais ou laços de repetição. |
| `% Func` | Quais funções foram chamadas dentro daquela base de códigos. |
| `% Lines` | Percentual de linhas que foram percorridas. |

Dentro do projeto é criada uma pasta chamada `coverage` onde nela dentro da pasta `lcov-report` há um arquivo html que mostra as mesmas informações da tabela, mas
de forma mais simples de navegar e com a possibilidade de visualizar os arquivos.

![image](https://user-images.githubusercontent.com/79461028/221585506-2e14fcb2-2a45-4ee4-b511-aa3b98c66684.png)

### Matchers

O jest usa matchers para testar valores de maneiras diferentes.

```javascript
test('dois mais dois é quatro', () => {
  expect(2 + 2).toBe(4);
});
```
Nesse código, o `.toBe(4)` é o "matcher".

**Mais exemplos de matchers:**

| Método | Descrição |
   |---|---|
   | `expect(value)` | Testar um valor. |
| `expect.extend(matchers)	` | Adicionar seus próprios "matchers". |
| `expect.anything()` | Corresponde a qualquer coisa menos null e Undefined |
| `expect.any(constructor)` | Testa qualquer coisa que é criada com um construtor. |
| `expect.arrayContaining(array)` | O array esperado é um subconjunto do array recebido. |
| `expect.assertions(número)` | Verifica que um certo número de verificações são chamadas durante um teste. |
| `expect.closeTo(number, numDigits?)` | é útil quando você compara números quebrados num array. |
| `expect.hasAssertions()` | Verifica que pelo menos uma verificação é chamada durante um teste. |
| `expect.not.arrayContaining(array)` | Quando o array esperado não é um subconjunto do array recebido. |
| `expect.not.objectContaining(object)` | Quando o objeto esperado não é um subconjunto do objeto recebido. |
| `expect.not.stringContaining(string)` | Quando o valor recebido não é uma String ou não corresponde ao valor esperado da String. |
| `expect.not.stringMatching(string / regexp)` | Quando o valor recebido não é String ou não corresponde a String esperada ou a expressão regular. |
| `expect.objectContaining(object)` | Corresponde a qualquer objeto recebido que recursivamente coincide com as propriedades esperadas. |
| `expect.stringContaining(string)` | Quando o valor recebido é uma String que contém a String esperada. |
| `expect.stringMatching(string / regexp)` | Quando o valor recebido é uma String que contém a String ou expressão regular esperada. |
| `expect.addSnapshotSerializer(serializer)` | Para adicionar um módulo que formata estruturas de dados específicas da aplicação. |
| `.not` | Se você sabe como testar algo, .not permite que você teste seu oposto. |
| `.resolves` | Decodifica o valor de uma promessa cumprida, para que qualquer outro matcher possa então ser encadeado. |
| `.rejects` | Decodifica o motivo de uma promessa rejeitada, para que qualquer outro matcher possa ser encadeado. |

## Testando APIs

Ao testar uma API é importante ter a separação do `app.js` e do `server.js` para que os testes consigam ser executados corretamente.

#### Models

Na pasta de `tests` foi replicada a estrutura do `src`: a pasta `models` criada dentro da pasta de `tests` e os arquivos de testes de cada entidade, mas poderia ter sido organizado de outra maneira. Exemplo:

```javascript
import Editora from '../../models/editora.js'

describe('Testando o modelo Editora', () => {
    const objetoEditora = {
        nome: 'CDC',
        cidade: 'Rio de Janeiro',
        email: 'c@c.com'
    };

    it('Deve instanciar uma nova editora', () => {
        const editora = new Editora(objetoEditora);

        expect(editora).toEqual(
            expect.objectContaining(objetoEditora),
        );
    });

    it.skip('Deve salvar editora no banco de dados', () => {
        const editora = new Editora(objetoEditora);

        editora.salvar().then((dados) => {
            expect(dados.nome).toBe('CDC');
        });
    });

    it('Deve salvar no banco de dados usando a sintaxe moderna', async () => {
        const editora = new Editora(objetoEditora);

        const dados = await editora.salvar();

        const retornado = await Editora.pegarPeloId(dados.id);

        expect(retornado).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                ...objetoEditora,
                created_at: expect.any(String),
                updated_at: expect.any(String),
            })
        );
    });
});
```

O método `.skip` é utilizado para pular um teste espcífico ao executar os testes. 

#### Mock de funções

Quando os testes são executados o ideal é que não sejam criados novos registros no banco de dados utilizado em produção, e sim que exista um ambiente de desenvolvimento de testes para que os testes possam ser desenvolvidos sem conflitos e alteração no banco de dados.

O jest fornece um mock de funções através do método `jest.fn()`. Para utilizar deve importar o jest do pacote `@jest/globals`.

```javascript
  import { jest } from '@jest/globals';

  it('Deve fazer uma chamada simulada ao BD', () => {
    const editora = new Editora(objetoEditora);

    editora.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: 'CDC',
      cidade: 'Sao Paulo',
      email: 'c@c.com',
      created_at: '2022-10-01',
      updated_at: '2022-10-01',
    });

    const retorno = editora.salvar();

    expect(retorno).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });
});
```

## Documentação

- [ESLint](https://eslint.org/docs/latest/)
- [Jest](https://archive.jestjs.io/docs/pt-br/getting-started)
  - [Matchers](https://archive.jestjs.io/docs/pt-br/22.x/using-matchers)
  - [Expect](https://jestjs.io/pt-BR/docs/expect)
  - [Mock Functions](https://archive.jestjs.io/docs/pt-br/22.x/mock-functions)
  
