import Item from "../carrinho/item.js";

describe('Teste dos itens', () => {
    it('Deve ter 3 campos: nome, valor e quantidade', () => {
        const item = new Item('Beterraba', 2.5, 10);

        expect(item.nome).toBe('Beterraba');
        expect(item.valor).toBe(2.5);
        expect(item.quantidade).toBe(10);
    });

    it('Deve ter o preço calculado de acordo com a quantidade', () => {
        const item = new Item('Batata', 0.1, 3);

        expect(item.pegaValorTotalItem()).toBeCloseTo(0.3);
    });
});

describe('Inicializando itens', () => {
    test.each([
      ['uva', 3.40, 4],
      ['maçã', 2.50, 1],
      ['laranja', 3.10, 2],
    ])('Deve adicionar frutas no carrinho', async (nome, valor, quantidade) => {
      const item = new Item(nome, valor, quantidade);
  
      expect(item.nome).toBe(nome);
      expect(item.valor).toBe(valor);
      expect(item.quantidade).toBe(quantidade);
    });
  });