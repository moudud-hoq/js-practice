//21-4 Calculate The Average Of The Odd Numbers In An Array

//Takes an Array as parameter
//Give me the avarege of the odd numbers in the array
function oddAvg(numbers) {
    const odds = [];

    for (const num of numbers) {
        if (num % 2 !== 0) {
            odds.push(num);
            // console.log(num); //if we do not work for 7 or 8 number lines it will stay here, if do it will go to 9 no
        }
    } //console.log(odds);//09 odds is the array tha only contains the odd numbers\
    
    let sum = 0;
    for (const num of odds) {
        sum = sum + num;
    }

    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}

const numbers = [42, 12, 58, 55, 65, 81];
const avg = oddAvg(numbers);
console.log(avg);





























function oddAvg(numbers) {
    const odds = [];

    for (const num of numbers) {
        if (num % 2 !== 0) {
            odds.push(num);
        }
    }

    if (odds.length === 0) {
        console.log('অ্যারেতে কোনও বিজোড সংখ্যা নেই।');
        return 0;
    }

    let sum = 0;
    for (const num of odds) {
        sum += num;
    }

    const count = odds.length;
    const avg = sum / count;
    return avg;
}

const numbers = [42, 12, 58, 55, 65, 81];
const avg = oddAvg(numbers);
console.log('বিজোড সংখ্যার গড়:', avg);




