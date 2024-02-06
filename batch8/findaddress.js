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
console.log(findAddress({ street: 10,}));