

/***Subtask-1:
Display sum of all the odd numbers from 91 to 129.*/
sum = 0;
for (let i = 91; i <= 129; i++) {
    if (i % 2 !== 0) {
        console.log(i)
        console.log("Sum of odd numbers from 91 to 129:", sum = sum + i);
    }
}
console.log("Sum of odd numbers from 91 to 129:", sum);

/*** Subtask-2:
Display sum of all the even numbers from 51 to 85.*/
sumE = 0;
for (let j = 51; j <= 85; j++) {
    if (j % 2 === 0) {
        console.log(j);
        console.log('Display sum of all the even numbers from 51 to 85:', sumE = sumE + j);
    }
}
console.log('Display sum of all the even numbers from 51 to 85:', sumE);
