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
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 5]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 2]));