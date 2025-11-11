const calculadora = require("../../models/calculadora.js");

test("2 + 2 deve retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("5 + 100 deve retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("'texto' + 100 deve retonar 'Erro'", () => {
  const resultado = calculadora.somar("texto", 100);
  expect(resultado).toBe("Erro");
});

test("100 + 'texto' deve retonar 'Erro'", () => {
  const resultado = calculadora.somar(100, "texto");
  expect(resultado).toBe("Erro");
});

test("se algum dos valores for nulo, retorna 0", () => {
  const resultado = calculadora.somar();
  expect(resultado).toBe(0);
});
