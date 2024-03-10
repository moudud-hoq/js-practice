//Function

function addTwoNumber() {
  let num1 = 10;
  let num2 = 10;
  let num3 = num1 + num2;

  document.write(num3);
}
addTwoNumber();

function loopFUnctionPlace() {
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
}
loopFUnctionPlace();
loopFUnctionPlace();
