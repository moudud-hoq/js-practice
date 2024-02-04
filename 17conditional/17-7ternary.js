//if else shorthand by ternary operator
let price = 1000;
const isLeader = false;

if (isLeader === false) {
    price = 0;
} else (
    price = price + 100
)
console.log(price);

//shortcode of above code
/* No Need for now, when I'll be the good person in JS the it will apply
let price2 = 1000;
const isLeader2 = true;
price2 = isLeader2 === false ? 0 : price2 + 100;
console.log(price2);
*/
