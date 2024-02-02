
//1----------------------------------------Function Basic Structure
function ektaMeaningfulName() {
    console.log('I love Allah')
    console.log('I love Rasul SallahuAlaihi Wa Sallam')
}
//Call the function
ektaMeaningfulName();

//2---------------------------------------Square/Borgo of any number
function square(number) {
    console.log(square = number * number);
}
//call the function
square(105);

//3-------------------------------------Function of Multiple numbers
function multipleSquare(num1, num2, num3,) {
    const sum = num1 + num2 + num3;
    const divi = num1 - num2 - num3;
    const multiply = num1 * num2 * num3;
    console.log(sum);
    console.log(divi);
    console.log(multiply);
}
//Call
multipleSquare(3, 5, 8);


//04 ---------------------------------Checking individual numbers of student
function addAll(Math, Biology, Bengali, Chemistry, Physics) {
    const total = Math + Biology + Bengali + Chemistry + Physics;
    console.log('Checking individual numbers of student :', Math, Biology, Bengali, Chemistry, Physics);
    console.log('Result of student :', total);
}
addAll(50, 60, 70, 80, 90);

//05---------------------------------------------Recapping Function
function doubleCount(number) {
    const doubled = number * 3;
    console.log(number, doubled);
}
console.log('Calling the function:');
doubleCount(11);

//If we want to call a variable
const firstDeclaringVarnameInAFunction = 5;
doubleCount(firstDeclaringVarnameInAFunction);

//06------------------------------------------Recapping Function
function singleCount(number) {
    const singel = number;
    console.log(number, singel);
}
//Simple single count in a market
console.log('Calling the Simple single count in a market:');
let myMoney = 10;
let apple = 2;
let orange = 3;
let totalCost = 2 + 3;
let ShopkeeperWillReturn = myMoney - totalCost;
singleCount(ShopkeeperWillReturn);

//07-------------------------Baba Mayer Age er differences
function differencesBtwAgeOfBabaMa(babarAge, mayerAge) {
    const diff = babarAge - mayerAge;
    console.log(babarAge, mayerAge, 'difference', diff);
}
const fatherAge = 60;
const motherAge = 45;
differencesBtwAgeOfBabaMa(fatherAge, motherAge);


//************08----------------- Use of Return Function */
function firstTimeReturn(number) {
    const returning = number * 3;
    return returning;
}
returningOutput = firstTimeReturn(2);
console.log('This is the initial output :', returningOutput);
console.log('If We want to more functionality by others function:', returningOutput - 1);