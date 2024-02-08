function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Please enter a number.......";
    }
    const ticketPrice = 120;
    const guardPayment = 500;
    const staffLaunch = 50 * 8;

    let remain = (ticketSale * ticketPrice) - (guardPayment + staffLaunch);
    return remain;
}



function checkName(name) {
    if (typeof name !== 'string') {
        return "Invalid";
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