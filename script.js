let numA = Number(prompt("Number A?"));
let numB = Number(prompt("Number B?"));
let operator = prompt("Operator");

//Operate function
function operate(a, b, op) {
  if (op == "+") {
    return add(a, b);
  } else if (op == "-") {
    return subtract(a, b);
  } else if (op == "*") {
    return multiply(a, b);
  } else if (op == "/") {
    return divide(a, b);
  }
}
console.log(operate(numA, numB, operator));

//Math functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
