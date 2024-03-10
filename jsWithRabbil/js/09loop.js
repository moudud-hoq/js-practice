/*Loop means repeated works in a single way
for loop
for of loop for Array
for in loop for Object
while loop
*/

//for loop
for (let i = 1; i < 10; i++) {
  //if I Ignore any button then use continue such as:
  if (i === 4) {
    continue;
  }
  //   document.write(i + "<button>Looping:</button> </br>");
}

//for of
let numbers = [1, 2, 3, 4, 5, 6, "Mishuk"];
// document.write(numbers[6]);

for (let number of numbers) {
  //   document.write(number);
}

//A project using for
let Fruits = ["Apple", "Banana", "Orange", "Mango"];
//I select the outputDiv
const outputDiv = document.getElementById("output");
// console.log(outputDiv)
for (let i = 0; i < Fruits.length; i++) {
  //create a new paragraph to contain the Fruits
  let paragraph = document.createElement("ol");
  paragraph.textContent = Fruits[i];
  outputDiv.appendChild(paragraph);
}

//A project using for of
let Loops = [
  "For Loop",
  "For of Loop",
  "For in loop",
  "While Loop",
  "Do while Loop",
];

const getTheTextPlace = document.getElementById("loopDiv");
for (let loop in Loops) {
  let setTheText = document.createElement("li");
  setTheText.innerText = Loops[loop];
  getTheTextPlace.appendChild(setTheText);
}
