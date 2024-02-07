//Take a function name findAddress()
//One object as input and three properties of the object
//Access the elements of the object
//Fromation of the string as given sample: '10,15A,Earth Perfect'
//replace the missing property by "__"
//return the result string

function findAddress(obj) {

    //access the element of the object and replace the missing property by "__"
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    //Fromation of the string as given sample: '10,15A,Earth Perfect'
    const str = street + "," + house + "," + society;;


    //Reurn the result string
    return str;

}
console.log(findAddress({ street: 10, house: "15A", society: "Earth Perfect" }));
console.log(findAddress({ street: 10, society: "Earth Perfect" }));
console.log(findAddress({ street: 10, }));


//Take a function name findAddress2()
//One object as input and four properties of the object
//Access the elements of the object
//Fromation of the string as given sample: '10,15A,Rangpur, Rangpur Bangladesh'
//replace the missing property by "__"
//return the result string

function findAddress2(addr) {
    const street = addr.street || "__";
    const road = addr.road || "__";
    const zone = addr.zone || "__";
    const country = addr.country || "__";

    //Fromation of the string as given sample: '10,15A,Rangpur, Rangpur Bangladesh'
    const fullAddress = street + "," + road + "," + zone + "," + country;

    return fullAddress;

}
console.log(findAddress2({ street: 10, road: "15A", zone: "Rangpur", country: "Rangpur Bangladesh" }));
console.log(findAddress2({ street: 10, road: "15A", }));
console.log(findAddress2({ street: 10, road: "15A", zone: "Rangpur", }));
