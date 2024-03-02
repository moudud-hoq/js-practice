/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 60;
let isStudent = true;
let ticketPrice = 800;
let ticketFare;

if (age < 10) {
    ticketFare = 0;
} else if (isStudent) {
    ticketFare = ticketFare = ticketPrice * .50;
} else if (age >= 60) {
    ticketFare = ticketFare = ticketPrice - ticketPrice * 0.15;
} else {
    ticketFare = ticketPrice;
}
console.log(`Ticket fare: ${ticketFare}tk`);
