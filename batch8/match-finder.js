//You will got a function name matchFinder()
//Take 2 string as input
//If get similarities between 1st side of the string and full of last side of the string
//Then return boolean data types, true
//If not get similarities then return, false
//Bonus: Both input are string or not check. If both or one not string then return a meaningfull message

function matchFinder(string1, string2) {
    //Error message
    //যদি string1 একটা type of string না হয় or যদি string2 একটা type of string না হয় তাহলে মেসেজ হিসেবে return করতে হবে একটা অর্থবহ বার্তা
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Baba input a valid string otherwise it will not work"
    }

    const result = string1.includes(string2);
    return result;
}
console.log(matchFinder('Peter Parker', 'per'));
console.log(matchFinder('Peter Parker', 'Pet')); //myQ- এগুলো কিভাবে ইনিক্লুড করবো?



//#####################For Number
function matchFinder2(number1, number2) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        const result = number1 * number2;
        return result;
    }//personal exploration to show mentor


    const result = number1.toString();
    return result;
}

console.log('Number Match Finder:', matchFinder2(3, 5))