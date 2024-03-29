function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "invalid number";
    }
    const ticketPrice = 120;
    const guardPayment = 500;
    const staffLaunch = 50 * 8;

    let remain = (ticketSale * ticketPrice) - (guardPayment + staffLaunch);
    return remain;
}


function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid";
    }

    const lastLetter = name.toLowerCase()[name.length - 1];
    const goodLetter = ["a", "e", "i", "o", "u", "y", "w"];

    for (let i = 0; i < goodLetter.length; i++) {
        if (lastLetter === goodLetter[i]) {
            return "Good Name";
        }
    }
    return "Bad Name";
}


function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid Array";
    }
    let putValidNum = [];

    for (let z = 0; z < array.length; z++) {
        if (typeof array[z] === 'number' && !isNaN(array[z])) {
            putValidNum.push(array[z]);
        }
    }
    return putValidNum;
}


function password(obj) {
    const { name, birthYear, siteName } = obj;

    if (obj.birthYear.toString().length < 4) {
        return "invalid";
    }

    if (!name || !birthYear || !siteName) {
        return "invalid";
    }

    const capitalizedSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
    const passwordGenerationMachine = `${capitalizedSiteName}#${name}@${birthYear}`;
    return passwordGenerationMachine;
}

function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) && typeof livingCost !== "number") {
        return "invalid input";
    }

    let income = 0;
    for (const payment of payments) {
        if (payment >= 3000) {
            const allTax = payment - (payment * 20) / 100;
            income = income + allTax;
        } else {
            income = income + payment;
        }
    }

    const savings = income - livingCost;

    if (savings < 0) {
        return "earn more";
    }

    return savings;
}



















































function calculateMoney(ticketSale) {

    if (ticketSale < 0) {

        return "invalid number";

    }

    const ticketPrice = 120;

    const guardPayment = 500;

    const staffLaunch = 50 * 8;

    let remain = (ticketSale * ticketPrice) - (guardPayment + staffLaunch);

    return remain;

}

function checkName(name) {

    if (typeof name !== 'string') {

        return "invalid";

    }

    const lastLetter = name.toLowerCase()[name.length - 1];

    const goodLetter = ["a", "e", "i", "o", "u", "y", "w"];

    for (let i = 0; i < goodLetter.length; i++) {

        if (lastLetter === goodLetter[i]) {

            return "Good Name";

        }

    }

    return "Bad Name";

}

function deleteInvalids(array) {

    if (!Array.isArray(array)) {

        return "Invalid Array";

    }

    let putValidNum = [];

    for (let z = 0; z < array.length; z++) {

        if (typeof array[z] === 'number' && !isNaN(array[z])) {

            putValidNum.push(array[z]);

        }

    }

    return putValidNum;

}

function password(obj) {

    const { name, birthYear, siteName } = obj;

    if (obj.birthYear.toString().length < 4) {

        return "invalid";

    }

    if (!name || !birthYear || !siteName) {

        return "invalid";

    }

    const capitalizedSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);

    const passwordGenerationMachine = `${capitalizedSiteName}#${name}@${birthYear}`;

    return passwordGenerationMachine;

}

function monthlySavings(payments, livingCost) {

    if (!Array.isArray(payments) && typeof livingCost !== "number") {

        return "invalid input";

    }

    let income = 0;

    for (const payment of payments) {

        if (payment >= 3000) {

            const allTax = payment - (payment * 20) / 100;

            income = income + allTax;

        } else {

            income = income + payment;

        }

    }

    const savings = income - livingCost;

    if (savings < 0) {

        return "earn more";

    }

    return savings;

}
