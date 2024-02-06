const { IndiceMenorMaior } = require('./IndiceMenorMaior');

describe('Índice do maior e do menor valor', () => {
  it('deve retornar os índices do maior e do menor valor corretamente', () => {
    const ArrayNumerico = ["7", "100", "58", "85", "41", "19", "23", "74", "11", "3", "152", "65"];
    const indices = IndiceMenorMaior(ArrayNumerico);


    expect(indices.maxNum).toBe(10);

    expect(indices.minNum).toBe(9);
  });
});