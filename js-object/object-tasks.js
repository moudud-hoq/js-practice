// ### Task-1
// Access the `golden rod` color value in output.
// ```
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"]);

// ### Task-2
// For this object below add a property named `passenger capacity` with value 5
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
};
car["passenger capacity"] = 5
console.log(car);


// ### Task-3
// Display the physics marks as output.
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
}
console.log(student.physics.marks);

// ### Task-4
// Count the `number of properties`.
let student2 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    n: 'dick',
    isStudent: true
};
// const totalProp=Object.keys(student2.length);
// console.log(totalProp);
for (const prop in student2) {
    console.log(prop);
    // console.log(student2[prop]);
}


// ### Task-5 (Hard)
// Loop through an object and print the key-value pairs with their `types`
let myObject = {
    name: 'Monyem',
    age: 25,
    city: 'Rangpur',
    isStudent: true
};

for (const key in myObject){
    const value = myObject[key];
    const type = typeof value;

    console.log(`${key}: ${value} (Type: ${type})`);
}




//     key: name | type:  string
//     key: age | type:  number
//     key: city | type:  string
//     key: isStudent | type:  boolean

