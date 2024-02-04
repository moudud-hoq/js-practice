//Multiplication to count wood requirments
function quantityOfWood(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 5;
    const perTableWood = 3;
    const perBedWood = 10;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}
const wood = quantityOfWood(0, 1, 2);
console.log("You will need the wood to make some furnitures :", wood)


//Same Task 2
function quantityOfCloth(shirt, pant, shoe) {
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 200;

    const totalPant = pant * pantPrice;
    const totalShirt = shirt * shirtPrice;
    const totalShoe = shoe * shoePrice;

    const totalCLoth = totalPant + totalShirt + totalShoe;
    return totalCLoth;
}

const cloth = quantityOfCloth(0, 0, 2);
console.log("Price of your total buying cloth :", cloth)