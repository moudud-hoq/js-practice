const a = 3;
const b = "3";
if (a === b) {
  console.log("Values Are equal");
} else {
  console.log("values are not queal");
}

//32-6 (Advanced) Closure, Encapsulation, Private Variable
function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const watch1 = stopWatch();
console.log(watch1());
const watch3 = stopWatch();
console.log(watch3());
const watch2 = stopWatch();
console.log(watch2());

//Your Array
// arr = [1, 9, 3, 5, 7, 11, 100, 15, 12];
// //ছোটো থেকে বড় আকারে সাজানো
// arr.sort();
// console.log(arr);

const array = [1, 9, 3, 5, 7, 11, 100, 15, 12];
array.sort();
console.log(array);








const arr = [1, 9, 3, 5, 7, 11, 100, 15, 12];
const sortedArray = [];

while (arr.length > 0) {
  let minValue = Math.min(...arr); // Find the minimum value
  sortedArray.push(minValue); // Add the minimum value to the sorted array
  arr.splice(arr.indexOf(minValue), 1); // Remove the minimum value from the original array
}

console.log(sortedArray);








const array2 = [1, 9, 3, 5, 7, 11, 100, 15, 12];
const sortTheArray2 = [];

for (let i = 0; i < array2.length; i++) {
  let minimumValue = Math.min(...array2);
  sortTheArray2.push(minimumValue);
  array2.splice(array2.indexOf(minimumValue), 1);
}
console.log()














const myArray = [1, 9, 3, 5, 7, 11, 100, 15, 12];
function sortTheMyArray(a, b) {
    return a - b;
}
myArray.sort(sortTheMyArray); 
const finalArray = `The sequential array- ${myArray.join(', ')}`;

console.log(finalArray);


///////////////////
const array5 = [1, 9, 3, 5, 7, 11, 100, 15, 12];

// Custom sorting function for descending order
array.sort(function(a, b) {
    return b - a;
});

console.log(array5);

