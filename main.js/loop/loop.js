//For Loop starting, condition, update
// for (var p = 1; p <= 2; p = p + 2) {
//     console.log("This is While Loop " + p);
// }
// console.log("End");

//1+2+3+4+5 sum
// var sum = 0;
// for (var b = 1; b <= 5; b = b + 1) {
//     console.log(sum = sum + b);
// }
// console.log("End");


//While Loop
// var w = 1; //starting or Initialization
// while (w <= 5) {
//     console.log("This is While Loop " + w)
//     w = w + 1;
// }
// console.log("End");

//1+2+3+4+5
// var l = 2;
// var sum = 0;
// while (l <= 100) {
//     console.log(sum = sum + l)
//     l = l + 2;
// }
// console.log(sum);

//3 == 0 
// var l = 1;
// var sum = 0;
// while (l <= 20) {
//     if (l % 3 == 0 && l % 5 == 0) {
//         console.log(sum = sum + l)
//         sum = sum + l;
//     }
//     l = l + 2;
// }
// console.log(sum);

// var sum10 = 0;
// for (var numten = 1; numten <= 10; numten = numten + 1) {
//     console.log(sum10 = sum10 + numten);
// }
// console.log("End");

// var sum = 0;
// for (var b = 1; b <= 5; b = b + 1) {
//     console.log(sum = sum + b);
// }
// console.log("End");

// let evu = 2;
// for (var evui = 2; evui <= 10; evui = evui + 2) {
//     console.log(evu = evu + evui)
// }


//60 times Love words
// for (let a = 1; a <= 60; a = a + 1) {
//     console.log("Hello" + a)
// }

/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
// let nu = 2;
// for (let eo = 2; eo <= 100; eo = eo + 2) {
//     console.log(nu);
// }

/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
for (let eo = 61; eo < 100; eo++) {
    if (eo % 2 !== 0) {
        console.log("Odd Numbers from 61 to 100:" + eo);
    }
}

/***
Subtask-1:
Find all the even numbers from 61 to 100.
 */
// for (let eo = 78; eo <= 98; eo++) {
//     if (eo % 2 === 0) {
//         console.log("Even Numbers from 78 to 98: " + eo);
//     }
// }

// let tub = 0;
// for (let q = 11; q <= 20; q++) {
//     tub = tub + q;
//     // console.log(q);
// }

// console.log('tub of numbers from 11 to 20 is:', tub);

// let tub = 0;
// for (let b = 10; b >= -100; b--) {
//     if (b % 2 !== 0)
//         console.log(b)
// }
// console.log(tub);

//Even Numbers by decremental way
// for (let o = 61; o >= 51; o--) {
//     if (o%2 === 0)
//     console.log(o);
// }
for (let p = 1; p <= 30; p++) {
    if (p % 5 === 0 || p % 3 === 0) {
        console.log(p);
    }
}



for (let j = 1; j <= 60; j++) {
    if (j % 5 === 0 && j % 3 === 0) {
        console.log(j);
    }
}

let total = 0; //I will find the sum of the numbers that will devidable by 3
for (let f = 1; f <= 20; f++) {
    if (f % 3 === 0) {
        // console.log(f);
        total = total + f;
        console.log('Total', total)
        break;
    }
}

//Break Method
for (let d = 20; d <= 60; d++) {
    console.log(d);
    if (d >= 50) {
        break
    }
}

for (let i = 0; i < 5; i += 3) {
    console.log(i);
}

let k = 0;
while (k < 5) {
    console.log(k);
    k++;
}