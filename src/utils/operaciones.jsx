export function calcular(a, b, operador) {
  switch (operador) {
    case "+":
      return a + b;

    case "−":
      return a - b;

    case "×":
      return a * b;

    case "÷":
      return b === 0 ? "Error" : a / b;

    case "%":
      return a % b;

    default:
      return 0;
  }
}
