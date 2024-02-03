// # Simple function Related Practice Tasks
// ### Task-1  
// Take four parameters. Multiply the four numbers and then return the result 
// ---
function multiplyTheNumbers(num1, num2, num3, num4) {
    const total = (num1 * num2 * num3 * num4);
    return total;
}
const outputTask1 = (multiplyTheNumbers(2, 2, 2, 2));
console.log('The output of these multiply and task-1 : ', outputTask1);

























// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
// --
function consitionalCheck(number) {
    if (number % 2 === 0) {
        const result = (number * 2);
        return result;
    } else {
        const result = (number / 2);
        return result;
    }
}
const outputTask2 = (consitionalCheck(10));
console.log('Result of task-2 : ', outputTask2);





















// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function makeAvg(one, two, three) {
    const totalSize = one + two + three;
    return totalSize;

}

makeAvg(20, 21, 22);


















// ### Task-4  
//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function countZero(theString) {
    let count0 = 0;
    for (let i = 0; i < theString.length; i++) {
        if (theString[i] === '0') {
            count0++;
        }
    }
    return count0;
}
const theString = '10001010110';
const result = countZero(theString);
console.log(result);


// function countZero(stringcount) {
//     const output = stringcount.toString();
//     const count0 = output.split('0').length - 1;
//     return count0;
// }
// const result = countZero('10001010110');
// console.log(result);













// ### Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`
