
//01 Array Reverse
const numbers = [100, 200, 300, 400, 500, 600, 700];
console.log(numbers) //100, 200, 300, 400, 500, 600, 700
const reversed = numbers.reverse();
console.log('another way ' + reversed);
//after apply the reverse method check result in the terminal
numbers.reverse();
console.log(numbers)//700, 600, 500, 400, 300, 200, 100

//02 Manual Way of reverse by for loop
const rev_numbers = [];
for (const num of numbers) {
    // console.log(num); 700, 600, 500, 400, 300, 200, 100
    rev_numbers.unshift(num); //700, 600, 500,400, 300, 200, 100
}

//03 If we want to see the reverse side of the above system
for (let m = numbers.length - 1; m >= 0; m--) {
    const num = numbers[m];
    console.log(num);
} //  700, 600, 500, 400, 300, 200, 100

//04 sort সাজানো
const xiaomi = ['poco', 'note', 'redmi', 'mi'];
const sortedXiaomi = xiaomi.sort();
console.log(sortedXiaomi);

//sort অর্থ সাজানো নিচে একটা const নিচ্ছি অগোছালো
const numbers5 = [2, 4, 59, 6, 7, 5, 67, 8, 9]; /*এটা দুই ভাবে সাজানো যায় 
১।Ascending ---> smaller to larger: এই মেথডে সংখ্যাগুলো ছোটো থেকে বড় তেঁ যাবে যেমনঃ [2, 4, 5, 5, 6, 7, 8,9]; 
২। Descending --> larger to smaller: [9, 8, 7, 6, 5, 5, 4, 2] 
*/
// const num_asc = numbers5.sort();//not working now, we'll understand the things after few days, now we'll use function
const num_asc = [...numbers5].sort(function (a, b) { return a - b })
const num_dsc = [...numbers5].sort(function (a, b) { return b - a })
console.log(num_asc)//2, 4, 5, 59, 6, 7, 8,  9
console.log(num_dsc)//67, 59, 9, 8, 7, 6,  5, 4, 2

// const num_asc = numbers5.sort();


//personal Practice

