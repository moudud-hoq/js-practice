const birianyKhor = ['Abul', 'Babul', 'Mabul', 'Abul', 'Babul', 'Nabul']
const numbers = [1, 2, 3, 1, 3, 4, 5];

function noDupli(arr) {
    const unique = [];
    for (const item of arr){
        if (unique.includes(item)===false){
            unique.push(item);
        }

    }
    return unique;
}
const uniArr = noDupli(birianyKhor);
console.log(uniArr);
