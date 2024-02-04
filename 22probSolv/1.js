let tania = 98;
let maisha = 88;
if (tania > maisha) {
    console.log("Tania is first :")
} else {
    console.log(`Maisha is first :`)
}

//We can do the above conditional by FUnction, if we are unknowne about the result
function getFirst(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2
    }
}
const firstStudent = getFirst(98, 80);
console.log("This is our first student in the class name Tania :", firstStudent);