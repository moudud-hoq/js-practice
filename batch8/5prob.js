

// function canPay(arr, number) {
//     if (changeArray.length === 0) {
//         return "Your array is empty"
//     }

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }

//     if (sum >= number) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const number = 10;
// let arr = [1, 2, 10];
// console.log(canPay(arr, number))



//make a function named canPay()    
//take an array and number as parameter
//take an array[1,2,3] and sum of them, is sum result is equal of sencond input of the param the return true
//if not equal then return false
// function canPay(changeArray, totalDue) {
//     //error message
//     if (changeArray.length === 0) {
//         return "Your array is empty"
//     }
//     //sum of array's value
//     let sum = 0;
//     for (let i = 0; i < changeArray.length; i++) {
//         const elements = changeArray[i];
//         sum = sum + elements;
//     }
//     //main functionality
//     if (sum >= totalDue) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(canPay([], 10));


//make a function named canPay()    
//take an array and number as parameter
//take an array[1,2,3] and sum of them, is sum result is equal of sencond input of the param the return true
//if not equal then return false
function canPay2(arr5, number) {
    if (arr5.length === 0) {
        return "Your array is empty";
    } else if (Array.isArray(arr5)===false) {
        return "Please enter a number";
    }

    let sum2 = 0;
    for (let i = 0; i < arr5.length; i++) {
        const total = arr5[i];
        sum2 = sum2 + total;
    }
    if (sum2 >= number) {
        return true;
    } else {
        return false;
    }
}
console.log(canPay2([1, 2, 'M'], 10));
