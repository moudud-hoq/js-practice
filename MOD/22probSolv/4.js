const phonesPrice = [10000, 900, 50000, 23000, 19000];
function getCheaPhone(phones) {
    let minTaka = phones[0];
    for (const price of phones) {
        if (price < minTaka) {
            minTaka = price;
        }
    } return minTaka;
}

const chepPrice = getCheaPhone(phonesPrice);
console.log("The Cheapest Phone Price is :", chepPrice);





