//You will got a function name matchFinder()
//Take 2 string as input
//If get similarities between 1st side of the string and full of last side of the string
//Then return boolean data types, true
//If not get similarities then return, false
//Bonus: Both input are string or not check. If both or one not string then return a meaningfull message

function matchFinder(string1, string2) {
    //Error message
    //যদি string1 একটা type of string না হয় এবং যদি string2 একটা type of string না হয় তাহলে মেসেজ হিসেবে return করতে হবে একটা অর্থবহ বার্তা
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Baba input a valid string otherwise it will not work"
    }

    const similarities = string1.includes(string2);
    return similarities;
}
console.log(matchFinder('Peter Parker', 2));
console.log(matchFinder('Peter Parker', 'pet'));