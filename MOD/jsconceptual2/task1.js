// const arr1 = [1, 55, 21, 22, 10, 5 + 5];

// let sumOfOdd = 0;
// let sumOEven = 0;

// for (let i = 0; i < arr1.length; i++) {
//     const x = arr1[i];

//     if (x % 2 === 1) {
//         sumOfOdd = sumOfOdd + x;
//     } else {
//         sumOEven = sumOEven + x
//     }
// }
// console.log(sumOfOdd);
// console.log(sumOEven);


/*Task 1:
1.Create an array named numbers containing the following elements: [2, 7, 14, 21, 30, 35]. 
2.Write a program that calculates and prints the sum of all odd numbers in the array.*/
const numbers = [2, 7, 14, 21, 30, 35];
let sumOfOddNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
    let z = numbers[i];
    if (i % 2 !== 0) {
        sumOfOddNumbers = sumOfOddNumbers + z;
        console.log(z);//to se individual odd numbers
    }
}
console.log(sumOfOddNumbers);