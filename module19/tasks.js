// # array-looping-tasks

// ### Task 1
// Write a JavaScript code to reverse the array colors `without using the reverse method`.
// **Input:**
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
for (let i = colors.length - 1; i >= 0; i--) {
    const dum = colors[i];
    console.log(dum);
}//orange
// yellow
// green
// blue
// red

const revCol = [];
for (const ser of colors) {
    revCol.unshift(ser);
}
console.log(revCol); //['orange', 'yellow', 'green', 'blue', 'red']
// **Output:**
// `['orange', 'yellow', 'green', 'blue', 'red']`

// ### Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.
// **Input:**
const numbers = [12, 98, 5, 41, 23, 78, 46];
for (let k = 1; k < numbers.length; k++) {
    const num_asc = [...numbers].sort(function (a, b) { return a - b });//I've sorted before output of even numbers
    if (num_asc[k] % 2 === 0);//function of even number
    console.log(num_asc[k]);
}
// **Output:**
// `[12, 98, 76, 46]`

// ### Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
// **Input:**
let numbers3 = ['Tom', 'Tim', 'Tin', 'Tik'];
let concatenateString = '';
for (const number of numbers3) {
    concatenateString += number;
}
console.log(concatenateString);

// **Output:**
// `'TomTimTinTik'`


// ### Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
// **Input:**
// `const statement = 'I am a hard working person'`

// **Output:**
// `'person working hard a am I'`

// ---
