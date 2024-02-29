console.log("Operator");
//operand: Data
//operator
const result = 12 - 18;
console.log("Result is operand and +,- is operator", result);
console.log(`
1.Arithmetic Operator: 
  -Add
  -Substraction
  -Multiplication
  -Division
  -Modulus/Reminder

2.Assignment Operator
  -Equal=
  -Plus Equal (+=)
  -minus Equal (-=)
  -Into Equal (*=)
  -Division Equal (/=)
  -Modulus Equal (%=) (A=A%4)

3.Raltional Operation
  [Define relationship between operands, the relationship can Either be true or false]
   -Greater Tahan
   -Less Tahan
   -Greater Than or Equal (>=)
   -Smaller Than or Equal (<=)
   -Equal To (==)
   -Not Equal (!=)

4.Logical Operator
  [The result always returns Either true or False]
  - And &&: both consition must be true
  -Or ||: If one condition comes true from both the it will return
  -Not !: Is true it will return false or Is False it will return true
  
5.Increment/Decrement Operator
  -

6.Bitwise Operator
`);

const a = 2;
const b = 2;
const c = 3;
console.log(a < b);
console.log(a > b);
console.log(a > c);
console.log(a == c);
console.log(a >= c);
console.log(a <= c);

let w = 5;
let w1 = 10 + w++;
console.log(w1);