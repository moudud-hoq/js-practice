//Concept Crackerz

//p1--------------------------------------------
// Find the area of a rectangle
// You will have a function which takes the length and width of a rectangle as parameters.Find out the area of that rectangle and return the result.

// [Note: Input format: two integer numbers as input Output format: a single integer number ]
function findArea(length, width) {
    const area = length * width;
    return area;
}
console.log(findArea(10, 5));

//p2---------------------------------------------
function countZeros(binary_num) {
    //Write your code here
    //Don't forget to return
    const num = 0;
    for (count of binary_num) {
        if (binary_num(count) === 0) {
            num++;
        }
    } return num;
}
const binary_num = '10101';

