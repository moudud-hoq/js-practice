//1st Check to be a good developer

// const phones = [
//     { name: 'Tv', price: 30000 },
//     { name: 'Laptop', price: 20000 },
//     { name: 'Mobile', price: 10000 },
//     { name: 'Bike', price: 15000 }
// ]

// function getTotalShopping(products) {
//     console.log(phones)
// }

// const total = getTotalShopping(phones);
// console.log('The total price is :', total);


//2nd Check
// const productPrice = [
//     { name: 'Tv', price: 30000 },
//     { name: 'Laptop', price: 20000 },
//     { name: 'Mobile', price: 10000 },
//     { name: 'Bike', price: 15000 }
// ]

// function getTotalShopping(products) {
//     for (const product of products) {
//         console.log(product)
//     }
// }

// const total = getTotalShopping(productPrice);
// console.log('The total price is :', total);

//3rd Check
const productPrice = [  
    { name: 'Tv', price: 300 },
    { name: 'Laptop', price: 200 },
    { name: 'Mobile', price: 100 },
    { name: 'Bike', price: 150 }
]

function getTotalShopping(products) {
    let total = 0;
    for (const product of products) {
        total = total + product.price;
    } return total;
}

const total = getTotalShopping(productPrice);
console.log('The total price is :', total);














//For shoping cart
const productPrice2 = [
    { name: 'Laptop', price: 200, quantity: 1 },
    { name: 'Mobile', price: 100, quantity: 1 },
    { name: 'Tv', price: 300, quantity: 1 },
    { name: 'Bike', price: 150, quantity: 1 },
]

function getTotalShopping2(products2) {
    let total2 = 0;
    for (const product2 of products2) {
        const thisPriductCost = product2.price * product2.quantity;
        total2 = total2 + thisPriductCost;
    } return total2;
}

const total2 = getTotalShopping2(productPrice2);
console.log('The total price is :', total2);