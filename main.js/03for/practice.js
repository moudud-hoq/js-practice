
//Looping an Array
const productsName = ['TV', 'Watch', 'Mobile', 'Printer', 'Laptop']
// console.log(productsName);
// console.log(productsName[0]);
// console.log(productsName[4]);

//For Loop and complex method
for (let i = 0; i < productsName.length; i++) {
    const eachProduct = productsName[i];
    console.log(eachProduct);
}

//For of loop and simple method
for (const element of productsName){
    console.log(element);   
}

//looping an Object
const person = {
    name: 'Moudud',
    age: 27,
    color:'White',
    education: {
        alim: 'Science',
        hons:'BA in English' 
    },
    result: 'good',
}
for (const ele in person){
    console.log(ele);
    console.log(person.education.alim[ele]);
}
