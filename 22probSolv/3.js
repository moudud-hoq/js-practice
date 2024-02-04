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
const wood = quantityOfWood(0,1,2);
console.log("You will need the wood to make some furnitures :", wood);