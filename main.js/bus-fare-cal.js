/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk

*/
let age = 9; 
let isStudent = true;
let isSeniorCitizen = true;
let ticketFare = 800;

if (age == 19 && age < 10) {
    console.log('Children ticket free');
}

else if (age > 10  && isStudent == true) {
    console.log('Student ticket fare = ' + ticketFare / 2);
}

else if (age > 61 && isSeniorCitizen == true) {
    console.log('Student ticket fare = ' + ticketFare / 2);
}

else {
    console.log(ticketFare);
};