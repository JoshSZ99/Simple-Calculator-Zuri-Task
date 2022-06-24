//Program for a simple calculator

const operator = prompt("Enter operator (either +,-,* or /):");

const number1 = parseFloat(prompt("Enter first number:"));
const number2 = parseFloat(
  prompt(`Enter second number: ${number1} ${operator}`)
);

let result;

if (operator == "+") {
  result = number1 + number2;
  alert(`Result: ${number1} ${operator} ${number2} = ${result}`);
} else if (operator == "-") {
  result = number1 - number2;
  alert(`Result: ${number1} ${operator} ${number2} = ${result}`);
} else if (operator == "*") {
  result = number1 * number2;
  alert(`Result: ${number1} ${operator} ${number2} = ${result}`);
} else {
  result = number1 / number2;
  alert(`Result: ${number1} ${operator} ${number2} = ${result}`);
}

console.log(`${number1} ${operator} ${number2} = ${result}`);
