//23_5-2 (Advanced) Find The Matching Product By Searching Products

const products = [
    { id: 1, name: 'Xiaomi phone', price: 35000, manufacturer: 'China' },
    { id: 2, name: 'I phone', price: 55000, manufacturer: 'China' },
    { id: 3, name: 'Walton', price: 15000, manufacturer: 'China' },
    { id: 4, name: 'Motorola', price: 25000, manufacturer: 'China' },
    { id: 5, name: 'Google', price: 17000, manufacturer: 'China' },
    { id: 6, name: 'One+ phone', price: 115000, manufacturer: 'China' },
    { id: 7, name: 'Lenovo Laptop', price: 55000, manufacturer: 'China' },
    { id: 8, name: 'Walton laptop', price: 15000, manufacturer: 'China' },
    { id: 9, name: 'Motorola', price: 25000, manufacturer: 'China' },
    { id: 10, name: 'Google surface Laptop', price: 17000, manufacturer: 'China' },
    { id: 11, name: 'Microsoft phone laptop', price: 115000, manufacturer: 'China' }
]

// function matchProducts(products, search) {
//     const matched = [];
//     for (const product of products) {
//         if (product.name.includes(search)) {
//             matched.push(product);
//         }
//     }
//     return matched;
// }

// const result = matchProducts(products, 'Walton');
// console.log(result);


function matchProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    } return matched;
}
const result = matchProducts(products, 'Laptop');
console.log(result);