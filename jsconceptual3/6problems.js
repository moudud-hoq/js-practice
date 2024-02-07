// Some Problems
// ######01 -----------------------------------------------------------------------
function anaToVori(Ana) {
    return Ana * 0.0625;
}
console.log(anaToVori(5));

function anaToVori2(Ana) {
    if (typeof Ana !== 'number' || Ana < 0) {
        return "Please Provide a number.."
    }

    Vori = Ana * 0.0625;
    return Vori;
}
console.log(anaToVori2('a'));
console.log(anaToVori2(-1));
console.log(anaToVori2(32));


//######02 -----------------------------------------------------------------------
function pandaCost(sinara, samuca, jilapi) {
    //Number validation
    if (typeof sinara !== 'number' || typeof samuca !== 'number' || typeof jilapi !== 'number') {
        return "Please enter a number...";
    }
    //Negetive or Positive Validation
    else if (sinara < 0 || samuca < 0 || jilapi < 0) {
        return "Please Provide a positive  number...";
    }
    else {
        const sinaraPrice = 7;
        const samucaPrice = 10;
        const jilapiPrice = 15;

        const total = (sinara * sinaraPrice) + (samuca * samucaPrice) + (jilapi * jilapiPrice);
        return total;
    }
}
console.log(pandaCost(3, 2, -1));


//######01 -----------------------------------------------------------------------
function picnicBudget(perticipents) {
    if (typeof perticipents !== 'number' || perticipents < 0) {
        return "Please provide a number";
    }
    else {
        let first100Cost = 0;
        let second101To200 = 0;
        let remainCost = 0;
        let totalCost = 0;

        if (perticipents <= 100) {
            first100Cost = perticipents * 5000;
            return first100Cost;
        } else if (perticipents <= 200) {
            first100Cost = 5000 * 100;
            second101To200 = (perticipents - 100) * 4000;
            total = first100Cost + second101To200;
            return total;
        }
        else {
            first100Cost = 5000 * 100;
            second101To200 = 4000 * 100;
            remainCost = (perticipents - 200) * 3000;
            total = first100Cost + second101To200 + remainCost;
            return total;

        }
    }
}
console.log(picnicBudget(202));


// function listOfname(count, userName) {
//     if (typeof count !== 'number' || typeof userName !== 'string') {
//         return "Please enter number and string";
//     } else {
//         let loop = '';
//         for (let index = 0; index < count; index++) {
//             loop += (`Count: ${index} = Name: ${userName}\n`);
//         }
//         return loop;
//     }
// }

// let display = listOfname(10, "Name");
// console.log(display);