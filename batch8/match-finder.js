function matchFinder(string1, string2) {

    //we will try to find match between the two strings
    const result = string1.includes(string2)


    //return true or false according to the match
    return result;
}
console.log(matchFinder('John Doe', 'ohn'));
console.log(matchFinder('Javascript', 'Code'));




//For bonus
function matchFinder(string1, string2) {

    //Show Error Message
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Please provide a string..."
    }


    //we will try to find match between the two strings
    const result = string1.includes(string1)


    //return true or false according to the match
    return result;
}
console.log(matchFinder('Peter Parker', 'Pen'));
console.log(matchFinder('Peter Parker', 'pet'));