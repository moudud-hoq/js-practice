//Write a function sortMaker
//Take an array as parameter
//the parameter contains two elements, the elements are [x,y]
//Write a function sortMaker
//Take an array as parameter
//the parameter contains two elements, the elements

function sortMaker(arr) {

    //access the elements of input array
    const [a, b] = arr;

    //if any element negative return "Invalid Input"
    if (a < 0 || b < 0) {
        return "Invalid Input"
    }
    //if elements a equal, then return "equal"
    if (a == b) {

        //if equal return "equal"
        return 'equal';
    }

    //if elements ar not equal, then return in descending order
    if (a > b) {
        return [a, b];
    } else {
        return [b, a];
    }
}
console.log(sortMaker([4, 5]));
console.log(sortMaker([4, 5]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, -2]));





//NOte:- If an array is sorted in ascending order, it means the values in the array are stored from lowest to highest. If values are sorted in descending order, they are stored from highest to lowest.










//Write a function sortMaker
//Take an array as parameter
//the parameter contains two elements, the elements are [x,y]

//Task-1  If Array's two elements are positive numbers then sorting in descending way(বড়ো থেকে ছোটো সাজানো)
//Task-2  If the two elements are same then retun the string "equal"
//Task-3  Bonus: If any element are negetive from the two array's then return "Invalid Input"

// function sortMaker(arr) {

//     //Task-1  If Array's two elements are positive numbers then sorting in descending way(বড়ো থেকে ছোটো সাজানো)
//     return arr.sort();



// }




console.log(sortMaker([4, 5]));
console.log(sortMaker([4, 5]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, -2]));