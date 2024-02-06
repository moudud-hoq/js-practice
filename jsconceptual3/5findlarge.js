//Find larges value

function largestNumber(values) {

    //Validation Check
    if (!Array.isArray(values)) {
        return "Please provide an array";
    }

    let max = values[0];
    for (let i = 0; i < values.length; i++) {
        //validation check
        if (typeof values[i] !== 'number') {
            return "Please Provide a number";
        }
        if (values[i] > max) {
            max = values[i];
        }
    } return max;
}
const number = [1, 2, 3, 4, 23, 52];
console.log(largestNumber(number));