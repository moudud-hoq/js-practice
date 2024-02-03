

//Kilometer To Mile
function kmToMiles(kilom) {
    const miles = kilom * 1.60934;
    return miles;
}
const ranpurToPaglapir = kmToMiles(6.83);
console.log(ranpurToPaglapir);



//Mile to km
function mileToKm(mile) {
    const kilom = mile * 0.621371;
    return kilom;
}
const ranpurToPaglapir2 = mileToKm(11);
console.log(ranpurToPaglapir2);



//Task one
//Write a function to convert temperature from Celsius to Fahrenheit.
function celToFer(cel) {
    const fer = cel * (9 / 5) + 32;
    return fer;
}
const todayTemp = celToFer(10);
console.log(todayTemp);
