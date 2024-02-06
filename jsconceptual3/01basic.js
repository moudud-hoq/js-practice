//Fuction structure and basic functionality
function personDetails(name, age, address) {

    console.log(`My name is ${name}. My age is ${age}. I live in ${address}.`);

}
personDetails("Moudud", "27", "Jaldhaka");


//Types of function

//##01- no parameters, no return
function fun1() {
    console.log("no parameters, no return");
}

//###02 no parameters, but return
function fun2() {
    return 5;
}

//###03 parameters, but no return
function fun3(name) {
    console.log(name)
}

//###04 parameters, but no return
function fun4(x, y) {
    return x + y;
}


