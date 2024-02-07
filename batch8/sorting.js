//Write a function sortMaker
//Take an array as parameter
//the parameter contains two elements, the elements are [x,y]
// function sortMaker(arr) {
//     //access the elements of input array
//     const [a, b] = arr;
//     //if any element negative return "Invalid Input"
//     if (a < 0 || b < 0) {
//         return "Invalid Input"
//     }
//     //if elements are equal, then return "equal"
//     if (a == b) {
//         //if equal return "equal"
//         return 'equal';
//     }
//     //if elements ar not equal, then return in descending order
//     if (a > b) {
//         return [a, b];
//     } else {
//         return [b, a];
//     }
// }
// console.log(sortMaker([4, 5]));
// console.log(sortMaker([4, 5]));
// console.log(sortMaker([4, 2]));
// console.log(sortMaker([4, -2]));

//NOte:- If an array is sorted in ascending order, it means the values in the array are stored from lowest to highest. If values are sorted in descending order, they are stored from highest to lowest.

//Write a function sortMaker
//Take an array as parameter
//the parameter contains two elements, the elements are [x,y]
//access the elements of input array
//if any element negative return "Invalid Input"

function sortMaker2(arr2) {
    const [a, b] = arr2;

    //if any element negative return "Invalid Input"
    if (a < 0 || b < 0) {
        return 'Invalid Input';
    }else if (a == b) {
        return "equal";
    }else if (a > b) {
        return [a, b];
    } else {
        return [b, a];
    }
    //if elements are equal, then return "equal"
   
    //if elements are not same, then return in descending order
    
}
console.log(('Function No:1'), sortMaker2([4, -5]));
console.log(('Function No:1'), sortMaker2([4, 5]));
console.log(('Function No:2'), sortMaker2([4, 4]));
console.log(('Function No:3'), sortMaker2([1, 2]));
console.log(('Function No:4'), sortMaker2([4, -2]));


// function sortMaker3(arr) {
//     //access the elements of input array
//     const [a, b] = arr;
//     //if any element negative return "Invalid Input"
//     if (a < 0 || b < 0) {
//         return "Invalid Input"
//     }
//     //if elements are equal, then return "equal"
//     if (a == b) {
//         //if equal return "equal"
//         return 'equal';
//     }
//     //if elements are not same, then return in descending order
//     if (a > b) {
//         return [a, b];
//     } else {
//         return [b, a];
//     }
// }
// console.log(sortMaker3([4, 5]));
// console.log(sortMaker3([4, 5]));
// console.log(sortMaker3([4, 2]));
// console.log(sortMaker3([4, -2]));