//Problem 03 : Virus in my Array
//Function Name Must be deleteInvalids()
//তোমাকে deleteInvalids() নামে এমন একটা ফাংশন ক্রিয়েট করতে হবে যা ইনপুট হিসেবে একটি Array নেবে। ফাংশন টি আরেকটি Array রিটার্ন করবে যে খানে ভ্যালুগুলো হবে শুধু নাম্বার। অর্থাৎ Array এর যে সকল elements নাম্বার না, তাদের ডিলিট করে শুধুমাত্র নাম্বার গুলোকে Array আকারে রিটার্ন করতে হবে। তুমি যদি এই ফাংশনে এই [NaN,1,12,0,-1,undefined] Array টি পাস করো তাহলে সে তোমাকে রিটার্ন করবে [1,12,0,-1]

// Input: ফাংশন টি ইনপুট নেবে একটি Array। Array এর উপাদান গুলোর Datatype যে কোনো ধরনের হতে পারে।
// Output: ফাংশন টি আউটপুট দেবে আরেকটি Array। Array এর উপাদান গুলো হবে শুধুমাত্র নাম্বার।
// ফাংশন টি তে Array ছাড়া অন্য কোনো ভ্যালুপাস করলে সেটা একটা error message রিটার্ন করবে । how can I add the error message if the array is not a array?
// function deleteInvalids(arr) {
//     if (!Array.isArray(arr)) {
//         return "Error: Input is not an array";
//     }

function deleteInvalids(array) {
    // Check if the input is an array
    if (!Array.isArray(array)) {
        return "Invalid Array";
    }
    // Create a new array to store valid numbers
    let putValidNum = [];

    // Iterate through the input array
    for (let z = 0; z < array.length; z++) {
        // Check if the current element is a number
        if (typeof array[z] === 'number' && !isNaN(array[z])) {
            putValidNum.push(array[z]); // Add the valid number to the new array
        }
    }

    // Return the array containing only valid numbers
    return putValidNum;
}



// Test the function
const inputArray = [NaN, 1, 12, "a", -1, undefined];
const resultArray = deleteInvalids(inputArray);
console.log(resultArray); // Output: [1, 12, 0, -1]

const invalidInput = 100;
const errorMessage = deleteInvalids(invalidInput);
console.log(errorMessage); // Output: Error: Input is not an array

