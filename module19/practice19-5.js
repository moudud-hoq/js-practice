
//Array declaretion by loop
const friends = ['Ashki', 'Belal', 'Monyem', 'Safiul', 'Rupak', 'Aminul'];
// for (const friend of friends) {
//     console.log(friends.length);
// }

//Another Way
// for (let i = 0; i <= friends.length; i++) {
//     console.log(i);
//     console.log(friends);
// }

//Another Way
// 0
// Ashki
// 1
// Belal
// 2
// Monyem
// 3
// Safiul
// 4
// Rupak
// 5
// Aminul
// 6
// undefined
// 7
// undefined
// 8
// undefined
// 9
// undefined
// 10
// undefined
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     console.log(friends[i]);
// }

//right way of array declaration by for loop
for (let i = 0; i < friends.length; i++) {
    console.log(i);
    console.log(friends[i]);
}
// 0 Ashki
// 1 Belal
// 2 Monyem
// 3 Safiul
// 4 Rupak
// 5 Aminul

//right way 2 of array declaration by while loop
let o = 0;
while (o < friends.length) {
    console.log(friends[o]);
    o++;
}