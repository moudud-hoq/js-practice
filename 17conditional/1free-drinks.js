/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
const burgerPrice = 551;
const freeCoke = 0;
const coke = 30;

if (burgerPrice >= 500) {
    console.log('You Got Free Coke');
    total = burgerPrice + freeCoke;
} else {
    console.log(burgerPrice + coke);
    total = burgerPrice + coke;
}
console.log('You will pay: ', total);
