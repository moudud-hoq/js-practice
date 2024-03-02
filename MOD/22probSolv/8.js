function multiply(num1, num2) {
    if (typeof num1 !== 'number') {
        return 'Please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply('5', 'Love');
console.log(result);

//If we want to validate two or multiple 
function multiply2(num3, num4) {
    num4 = Number(num4);
    num3 = Number(num3);

    if (typeof num3 !== 'number' || typeof num4 !== 'number') {
        return 'Please provide a number'
    }
    const mult2 = num3 * num4;
    return mult2;
}

const result2 = multiply2(5, 1);
console.log(result2);