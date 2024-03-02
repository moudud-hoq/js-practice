function add(num1, num2) {
    return num1 + num2;
}

function substruction(num1, num2) {
    return num1 - num2;
}

function multiphy(num1, num2) {
    return num1 * num2;
}

function devide(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if (operation === 'substruct') {
        const result = substruction(a, b);
        return result;
    }
    else if (operation === 'multiply') {
        const result = multiphy(a, b);
        return result;
    }
    else if (operation === 'devide') {
        const result = devide(a, b);
        return result;
    }
    else {
        return "Only 'add', 'substruct', 'multiply', 'devide', 'operation' operation is allowed "
    }
}

const result = calculator(5, 7, 'multiply');
console.log(result); 