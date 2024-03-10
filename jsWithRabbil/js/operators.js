// In JavaScript, operators are symbols that perform operations on operands. Operands can be variables, values, or expressions. JavaScript supports various types of operators, including arithmetic, assignment, comparison, logical, bitwise, and more.

// Arithmetic Operators: These operators perform arithmetic operations on numeric operands.
let num1 = 10;
let num2 = 5;

let sum = num1 + num2; // Addition
let difference = num1 - num2; // Subtraction
let product = num1 * num2; // Multiplication
let quotient = num1 / num2; // Division
let remainder = num1 % num2; // Modulus (remainder)

// Assignment Operators: These operators assign values to variables.
let x = 10;
let y = 5;
x = x + y; // Equivalent to x += y;

//Comparison Operators: These operators compare two values and return a boolean result.
let a = 10;
let b = 5;

console.log(a > b); // Output: true
console.log(a === b); // Output: false (strict equality)
console.log(a !== b); // Output: true (strict inequality)

//Logical Operators: These operators are used to combine multiple conditions and return a boolean result.
let raining = true;
let temperature = 20;

if (raining && temperature < 15) {
  console.log("It's raining and cold.");
} else {
  console.log("The weather is not cold or it's not raining.");
}

//Unary Operators: These operators work with only one operand.
let num = 5;
console.log(-num); // Output: -5 (negation)
console.log(++num); // Output: 6 (increment)

//Bitwise Operators: These operators perform bitwise operations on operands.
let number1 = 5; // Binary representation: 101
let number2 = 3; // Binary representation: 011

console.log(num1 && num2); // Output: 1 (bitwise AND)
console.log(num1 || num2); // Output: 7 (bitwise OR)
