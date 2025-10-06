const { calcularIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {

  // Testes de validação de entrada
  describe('Validação de entradas', () => {
    it('deve lançar erro se peso ou altura não forem números', () => {
      expect(() => calcularIMC('70', 1.75)).toThrow("Peso e altura devem ser números.");
      expect(() => calcularIMC(70, '1.75')).toThrow("Peso e altura devem ser números.");
    });

    it('deve lançar erro para peso ou altura negativos ou iguais a zero', () => {
      expect(() => calcularIMC(0, 1.75)).toThrow("Peso e altura devem ser valores positivos.");
      expect(() => calcularIMC(70, 0)).toThrow("Peso e altura devem ser valores positivos.");
      expect(() => calcularIMC(-70, 1.75)).toThrow("Peso e altura devem ser valores positivos.");
    });
  });

  // Testes para cada faixa de classificação do IMC
  describe('Classificação de IMC', () => {
    it.each([
      // peso, altura, imc_esperado, classificacao_esperada
      [50, 1.75, 16.33, 'Abaixo do peso'],
      [70, 1.75, 22.86, 'Peso normal'],
      [85, 1.75, 27.76, 'Sobrepeso'],
      [100, 1.75, 32.65, 'Obesidade Grau I'],
      [120, 1.75, 39.18, 'Obesidade Grau II'],
      [140, 1.75, 45.71, 'Obesidade Grau III'],
    ])('deve classificar corretamente para peso %f e altura %f', (peso, altura, imcEsperado, classEsperada) => {
      const resultado = calcularIMC(peso, altura);
      expect(resultado.imc).toBe(imcEsperado);
      expect(resultado.classificacao).toBe(classEsperada);
    });
  });
});