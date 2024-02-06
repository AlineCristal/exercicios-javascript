const { mdc } = require('./mdc');

describe('Máximo divisor comum', () => {
  it('deve retornar o máximo divisor comum entre 42 e 60 como 6', () => {
    expect(mdc(42, 60)).toBe(6);
  });

  it('deve retornar o próprio número quando um dos valores é zero', () => {
    expect(mdc(0, 5)).toBe(5);
    expect(mdc(10, 0)).toBe(10);
    expect(mdc(0, 0)).toBe(0);
  });

  it('deve retornar 1 se os números forem primos entre si', () => {
    expect(mdc(7, 11)).toBe(1);
    expect(mdc(8, 9)).toBe(1);
  });
});
