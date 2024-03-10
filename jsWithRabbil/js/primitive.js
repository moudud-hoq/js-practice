//Primitive Data Types

//  * String: Represents a sequence of characters enclosed within single quotes (' ') or double quotes (" "). Strings are used to store and manipulate text data.
var myString = "Hello, world!";
console.log(typeof myString); // Output: string


//  * Number: Represents numeric data, which can be integer or floating-point. Numbers can be positive, negative, or zero.
var myNumber = 123456;
console.log(typeof myNumber); // Output: number


//  * Boolean: Represents a logical value indicating either true or false.
var myBooleanTrue = true;
var myBooleanFalse = false;
console.log(typeof myBooleanTrue); // Output: boolean
console.log(typeof myBooleanFalse); // Output: boolean


//  * Undefined: Represents a variable that has been declared but has not been assigned a value. It also represents the return value of functions that do not explicitly return anything.
var myUndefinedVariable;
console.log(typeof myUndefinedVariable); // Output: undefined

function myFunction() {
    // This function does not return anything
}
console.log(typeof myFunction()); // Output: undefined

//  * Null: Represents an intentional absence of any object value. It is often used to indicate that a variable or object property has no value assigned to it.
var myNullVariable = null;
console.log(typeof myNullVariable); // Output: object (Note: This is a JavaScript quirk, null is actually of type "object")
