/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.
 */
let num1 = 25;
let num2 = 30;
let result;

if (num1 > num2) {
    result = num1 * 2;
} else {
    result = num1 + num2;
}
console.log(result);
// Ternary of the above code
let num3 = 5;
let num4 = 3;
let result2 = (num3 > num4) ? num3 * 2 : num3 + num4;
console.log(result2)




