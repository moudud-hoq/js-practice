//23_5-2 (Advanced) Find The Matching Product By Searching Products

//Practice no-1 ----------------------------------------------------------------------------------
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


// function matchProducts(products, search) {
//     const matched = [];
//     for (const product of products) {
//         if (product.name.toLowerCase().includes(search.toLowerCase())) {
//             matched.push(product);
//         }
//     } return matched;
// }
// const result = matchProducts(products, 'Laptop');
// console.log(result);


//Practice no-2 ----------------------------------------------------------------------------------
const persons = [
    { id: 1, name: 'Moududul Hoque', age: 27, color: 'White', occupation: 'Student', address: 'Jaldhaka, Nilphamari' },
    { id: 2, name: 'Masudul Hoque', age: 27, color: 'White', occupation: 'Imam', address: 'Jaldhaka, Nilphamari' },
    { id: 3, name: 'Mariful Hoque', age: 27, color: 'White', occupation: 'Business Man', address: 'Jaldhaka, Nilphamari' },
    { id: 4, name: 'Faizul Hoque', age: 27, color: 'White', occupation: 'Teacher Business Man', address: 'Jaldhaka, Nilphamari' },
    { id: 5, name: 'Zakirul Hoque', age: 27, color: 'White', occupation: 'Job Holder Business Man', address: 'Jaldhaka, Nilphamari' },
    { id: 6, name: 'Fuadul Hoque', age: 27, color: 'White', occupation: 'Teacher Imam', address: 'Jaldhaka, Nilphamari' },
    { id: 7, name: 'Khizrul Hoque', age: 27, color: 'White', occupation: 'Animal Doctor', address: 'Jaldhaka, Nilphamari' },
    { id: 8, name: 'Abdullah Al Mamun', age: 27, color: 'White', occupation: 'Software Engeener', address: 'Jaldhaka, Nilphamari' },
    { id: 9, name: 'Abdullah Al Masum', age: 27, color: 'White', occupation: 'Software Engeener', address: 'Jaldhaka, Nilphamari' },
    { id: 10, name: 'Abdullah Hil Baki', age: 27, color: 'White', occupation: 'Software Engeener', address: 'Jaldhaka, Nilphamari' }

]

function findPersonDetaila(persons, search) {
    const informationStorage = [];
    for (const person of persons) {
        if ((person.name + ", " + person.occupation).includes(search)) {
            informationStorage.push(person);
        }
    } return informationStorage;

}
const result2 = findPersonDetaila(persons, 'Hoque, Software Engeener');
console.log(result2);