//Normally we check even odd 
// const x = 5;
// if (x % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("odd");
// }

//But আমরা যদি সেতাকে একতা ফাংশনে রাখি তাহলে বারবার কল করতে পারবো
function checkEvenOdd(x) {
    if (x % 2 === 0) {
        return ("Even");
    } else {
        return ("odd");
    }
}
const retult = checkEvenOdd(1);
console.log(retult);

function checkLoop(x) {
    for (let i = 1; i <= x; i++) {
        console.log("mehedy Hasan")
    }
}
const retult2 = checkLoop(2);
console.log(retult2);