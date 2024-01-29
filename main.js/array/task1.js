// ### 1. Declare an array 
// 1. Declare an array with 5 elements containing fruits
// 2. console log the 3rd index element
// 3. change the value of the 2nd index element to jambura
// 4. console log the final array
let fruits = ['Mango', 'Orange', 'Watermelon', 'Bangi', 'Grapes'];
console.log(fruits[3]);

// ### 2. Add or remove elements
// 1. Declare an array of 3 tourist destinations
// 2. Add a new tourist destination to your tourist array
// 3. Add two more to your array
// 4. Remove the last tourist destination you have added
// 5. display the final array as output
let touristPlaces = ['Nilsagor', 'Ramsagor', 'Rangpur Zoo', 'Bamondighi Ecopark', 'Chikli'];

let type = typeof touristPlaces;

// Item Add
touristPlaces[5] = 'Monnu Ecopark';
touristPlaces[6] = 'Dalia Teesta Bridge';

//Delete or Remove Last Item
touristPlaces.pop();
//Add Last Item
touristPlaces.push('Mohipur Ghat');
//Add first Item
touristPlaces.unshift('');

//Specific Item Find
console.log(touristPlaces.at(0));
// Array Length Check
console.log(touristPlaces.length)
// Index or Array No: check
console.log(touristPlaces[2]);
//Specific Item Find
console.log(touristPlaces.at(3));
//Latest cheking system
console.log(touristPlaces[touristPlaces.length -1]);

//console.log(touristPlaces.join('# '));

// ---
// ### 4. Checking if it's an Array
// **Instructions:**
// 1. Create different variables, each containing either an array or a non-array value.
// 2. Now use isArray to check if each variable is an array.
// 3. Print a message to the console indicating whether each variable is an array or not.
// ----
let book = ['Novel', 'Drama', 'Poem', 'Javascript', '10', true, false];
chekingArrayOrNot = Array.isArray(book);
console.log("If array give true, otherwise false: " + chekingArrayOrNot);
console.log(typeof book)

// ----
// ### 5. Combining Arrays
// **Instructions:**
// 1. Create two arrays of your choice.
// 2. Use the concat method to combine the two arrays into a new array.
// 3. Print both the original arrays and the combined array using console.log().
let concatingTwoArrays = fruits.concat(touristPlaces).concat(book);
console.log(concatingTwoArrays);

let concatingTwoArrays2 = fruits.concat(touristPlaces, book);
console.log(concatingTwoArrays2);

let concatingTwoArrays3 = concatingTwoArrays2.concat("Moudud");
console.log(concatingTwoArrays3);

//splice Method- The method can be used to add new items to an array:
let spliceIng = ['Moudud', 'FUad', 'Farhad', 'Masud', 'Sakib', 'Makib', 'Nokib'];
spliceIng.splice(3, 0, 'Tamim', 'Ramim');//The second parameter (0) defines how many elements should be removed.
console.log(spliceIng);

//Slice out a part of an array starting from array element 1 ("Orange"):
spliceIng2 = spliceIng.slice(1);
console.log(spliceIng2);
