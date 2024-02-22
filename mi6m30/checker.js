// 2
// 30-2 Function Default Parameter For Not Provided Values-------------------------------------------------------------------------------
//If Value is not provided in a number?
function add(num1 = 1111, num2 = 0) {
  /*if we provide 0 then it will be count as a number*/
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}
const sum = add(5, 7);
const sum2 = add(7);
const sum3 = add();

console.log(sum); //5, 7, 12; = 12
console.log(sum2); //7, 0, 7;=7
console.log(sum); //undefined, 0, NAN

//If Value is not provided in a string?
function FullName(first, last = "") {
  /*if we provide empty string then it will be count as a string*/
  const result = first + last;
  console.log(first, last, result);
  return result;
}

//          30-3 Template String, Multiple Line String, Dynamic String-------------------------------------------------
//To write various line
const witioutBacktick = "Hi John \n" + "mara mari korbe naki? \n";

const withBacktick = `Hi John
tumi mara mari korbe naki?
ami must stronger over you`;

//          30-4 Arrow Function, Multiple Parameter, Function Body

//Function Declaration
/*function add(num1, num2) {
  const result = num1 + num2;
  return result;
}
const sum4 = add(5, 7);
console.log(sum4);*/

//We can do it in this way, but after use of arrow function lets check below
function add(num1, num2) {
  // const result = num1 + num2;
  return num1 + num2; // we can write direct this way
}
const sum4 = add(5, 7);
console.log(sum4);

//FUnction Expression
const add2 = function (a, b) {
  return a + b;
};

//For arrow Function
const add3 = (a, b) => a + b; //same as function expression

const add4 = (num1, num2, num3) => num1 * num2 * num3; //same as function expression
const result5 = add4(2, 5, 2);
console.log(result5);

//          30-5 More Arrow Functions And Big Arrow Function------------------------------------------------

//Single Parameter or One parameter for arrow function
const getThird = (numbers) => numbers[2];
const third = getThird([5, 3, 5, 1]);
// console.log(third);

// const doubleIt = (num) => num * 2;
// console.log(num);

//No parameter
const getPI = () => Math.PI;
console.log(getPI());

//Large arrow function
const doMath = (x, y, z) => {
  const sum = x + y + z;
  const multiply = x * y * z;
  const sub = x - y - z;
  const total = sum + multiply;
  //here we must use return
  // return total;
  console.log(total);
};
const total = doMath(2, 2, 2);
console.log(total);

// Regular function
function regularFunction() {
  // console.log(this); // 'this' refers to the calling context
  // console.log(arguments); // Access to 'arguments' object
}

// Arrow function
const arrowFunction = () => {
  //console.log(this); // 'this' refers to the lexical context (surrounding scope)
  // console.log(arguments); // Error: 'arguments' is not defined in arrow functions
};

// Example usage
regularFunction(); // 'this' refers to global object (in non-strict mode)
arrowFunction(); // 'this' refers to enclosing lexical context

//30-6 Spread Operator, Array Max, Copy Arrays----------------------------------------------------------

const getMaxNumber = Math.max(6, 15, 20, 1, 2);
console.log(getMaxNumber);

const numbers5 = [6, 15, 200, 1, 2];
const getMaxArrayNumber = Math.max(...numbers5);
console.log(getMaxArrayNumber);

//use spread operator to copy

//30-7 (Advanced) Object And Array Destructure-----------------------------------------------------------------------------------------------
const actor = {
  name: "Moudud",
  age: 27,
  phone: "000000000000",
  money: 500,
  taka: 80000,
};

//destructuring an array
const { phone } = actor;
const { age } = actor;
//Or in this way multiple
const { money, taka } = actor;

//Without Destructuring
// const phone = actor.phone;
// const age = actor.age;

console.log(phone);
console.log(phone);
console.log(money);
console.log(money);
console.log(taka);
console.log(taka);
console.log(age);
console.log(age);

//Array destructuring
const num10 = [1, 2, 3, 4, 5, 6, 7];
const [x, y] = [2, 2];

//array check destructuring
function doubleThem(a, b) {
  return [a * 2, b * 2];
}
const [] = doubleThem(3, 3);
console.log(doubleThem);

//30-8 Keys, Values, Entries, Delete, Seal, Freeze-----------------------------------
const actor2 = {
  name: "Moudud",
  college: "college",
  versity: "National",
  age: 27,
  phone: "000000000000",
  money: 500,
  taka: 80000,
};
const keys = Object.keys(actor2);
console.log(keys);

const values = Object.values(actor2);
console.log(values);

//Two dimentional array
const pair = Object.entries(actor2);
console.log(pair);

//delete any objects properties an values
delete actor2.money;
console.log(actor2);

//30-9 For Of, For In, Module Summary And Practice Problems---------------------------------------------------------------------------------------------------------------

