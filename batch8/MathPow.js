
//you have a function name cubeNumber()
//The function will receieve a parameter name (number)
function cubeNumber(number) {

    //myQ- Why I should write the message before the original function, why not beneath?
    //myQ- Which part before and which part after, how can I maintain or think?

    //Bonus: if the input number receive a others data type instead of number the return a meaningfull message-
    if (typeof number !== 'number') {
        return "Please provide a number....";
    }

    const result = Math.pow(number, 3);//convert the number to cube
    return result;//cube the input number and return result from function



    
}

console.log(cubeNumber(3));
//myQ- Can I submit assignment with (console.log)? If mistakenly submit the function the what will be the problem?
