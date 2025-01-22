let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    const expression = display.value;
    const result = evaluateExpression(expression);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}

function evaluateExpression(expression) {
  const operators = /(\+|\-|\*|\/)/g;
  const tokens = expression.split(operators).map((token) => token.trim());
  let result = parseFloat(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const nextValue = parseFloat(tokens[i + 1]);

    switch (operator) {
      case "+":
        result += nextValue;
        break;
      case "-":
        result -= nextValue;
        break;
      case "*":
        result *= nextValue;
        break;
      case "/":
        result /= nextValue;
        break;
      default:
        throw new Error("Invalid operator");
    }
  }

  return result;
}
