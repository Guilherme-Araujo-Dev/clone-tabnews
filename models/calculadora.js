function somar(num1, num2) {
  // Se algum dos valores forem nulos, então retorna 0
  if (!num1 || !num2) return 0;

  // Se eles não forem numeros, então retorna erro
  if (typeof num1 != "number" || typeof num2 != "number") return "Erro";

  // Retorna a soma
  return num1 + num2;
}

exports.somar = somar;
