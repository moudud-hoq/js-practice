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

//If we want to get result between three or more persons
function getFirst2(per1, per2, per3) {
    if (per1 > per2 && per1 > per3) {
        return per1;
        console
    }
    else if (per2 > per1 && per2 > per3) {
        return per2;
    } else {
        return per3;
    }
}
const firstPerson = getFirst2(91, 92, 93);
console.log(firstPerson);