
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


//***********09 Video No 20.5-------------- */
function countFoodBill(rice, soup, fish, fry) {
    const totalBill = rice + soup + fish + fry;
    return totalBill;
}
const countBill = countFoodBill(15, 10, 60, 20);
console.log('Your Bill is: ', countBill);

//***********10 Video No 20.5-------------- */
function countFoodBill2(rice, soup, fish, fry, egg, smashPotato) {
    return (rice + soup + fish + fry + egg + smashPotato);//Shortcut
}
const countBill2 = countFoodBill2(15, 10, 60, 20, 25, 10);
console.log('Your Bill is: ', countBill2);

//***********11 Video No 20.5 Conditional Return by Even Number Check-------------- */
function isEven(number1) {
    if (number1 % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log('The Even Number is: ', isEven(5));
console.log('The Even Number is: ', isEven(110));

//***********12 Video No 20.5 Conditional Return by Odd Number Check-------------- */
function isEven(number2) {
    if (number2 % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
console.log('The odd Number is: ', isEven(110));
console.log('The odd Number is: ', isEven(5));

//***********13 Video No 20.6 Different type of parameters of a function------------- */
function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
}
evenSizedString('Dhaka');
evenSizedString('Rangpur');

//If we want to see even or odd size
function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log('Even Size');
        return true;
    }
    else {
        console.log('Odd Size');
        return false;
    }
}
evenSizedString('Dhaka');
console.log('The Number is: ', evenSizedString('Dhaka'));

evenSizedString('Rangpur');
console.log('The Number is: ', evenSizedString('Rangpur'));

evenSizedString('Jaldhaka');
console.log('The Number is: ', evenSizedString('Jaldhaka'));

//14  ----------------Multiple Data TYpe FUnction
function doubleOrTriple(number7, doDouble) {
    if (doDouble === true) {
        const output = number7 * 2;
        return output;
    } else {
        const output = number7 * 4;
        return output;
    }
}
console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));

//15 ===============The FUnction Using Array
function numberOfArrayElements(number8) {
    const len = number8.length;
    return len;
}
const arrayLength = numberOfArrayElements([12, 50, 'Moudud', 25, 'Fahmid']);
console.log('Number of array elements:', arrayLength);

//16 ------------Objective: 20-7 Sum Of All Numbers In An Array Using Function
function numberOfArrayElementsSum(number9) {
    let sum = 0;
    for (const number of number9) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const numbs = [12, 50, 100, 25, 10];
const sum = numberOfArrayElementsSum(numbs);
console.log('Sum of array elements:', sum);

//17------------Objective: 20-7 Sum Of All Numbers In An Array Using Function Personal Practice
function sumOfAnArrayByForLoop(number10) {
    let sum1 = 0;
    for (const arrayNumber of number10) {
        console.log(arrayNumber);
        sum1 = sum1 + arrayNumber;
    }
    return sum1;
}
const theArray = [10, 50, 10, 2, 3, 5];
const sum1 = sumOfAnArrayByForLoop(theArray);
console.log('Sum of array elements: ', sum1);
