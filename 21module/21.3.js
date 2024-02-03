function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
const isLeap = isLeapYear(2020);
console.log(isLeap);

//if which year not devisible by 100 the what shoult we?
function isLeapYear2(year2) {
    if (year2 % 100 !== 0 && year2 % 4 === 0) {
        return true;
    } else if (year2 % 100 === 0 && year2 % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
const isLeap2 = isLeapYear2(2053);
const isLeap3 = isLeapYear2(2003);
const isLeap4 = isLeapYear2(2000);
const isLeap5 = isLeapYear2(2400);

console.log(isLeap2, isLeap3, isLeap4. isLeap5);