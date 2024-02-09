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
console.log("Number 1:-------------------------------------------------------------")
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));


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
console.log("Number 2:-------------------------------------------------------------")
console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));


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
console.log("Number 3:-------------------------------------------------------------")
const inputArray = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
const resultArray = deleteInvalids(inputArray);
console.log(resultArray);

const inputArray2 = ["1", { num: 2 }, NaN];
const resultArray2 = deleteInvalids(inputArray2);
console.log("2:", resultArray2);

const inputArray3 = [1, 2, -3];
const resultArray3 = deleteInvalids(inputArray3);
console.log("2:", resultArray3);

const invalidInput = 100;
const errorMessage = deleteInvalids(invalidInput);
console.log(errorMessage);


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
console.log("Number 4:-------------------------------------------------------------")
console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "google" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));



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
console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));