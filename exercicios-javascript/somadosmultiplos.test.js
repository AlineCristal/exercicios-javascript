// Importar a função somadosmultiplos
const somadosmultiplos = require('./somadosmultiplos');

// Teste para verificar se a função somadosmultiplos retorna a soma correta dos múltiplos de 5 e 7 até 1000
test('Deve retornar a soma correta dos múltiplos de 5 e 7 até 1000', () => {
  // Soma dos múltiplos de 5 e 7 até 1000
  const resultadoEsperado = 156361;

  // Chama a função somadosmultiplos
  const resultadoFuncao = somadosmultiplos();

  // Verifica se o resultado retornado pela função é igual ao resultado esperado
  expect(resultadoFuncao).toBe(resultadoEsperado);
});
