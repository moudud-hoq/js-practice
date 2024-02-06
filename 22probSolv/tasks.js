//#js-problems-part2-practice-tasks
//################################ ---------------Task -1: 
//Find the lowest number in the array below.
const height = [167, 190, 120, 165, 137];

function lowestHeight(personsHeight) {
        let minHeight = personsHeight[0];
        for (const height of personsHeight) {
                if (height < minHeight) {
                        minHeight = height;
                }
        } return minHeight;
}

const result = lowestHeight(height);
console.log('The lowest height of the person is : ', result);




// ############################################### Task -2: 
// Find the friend with the smallest name.
const frinds = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function getSmallNameFriend(smallFrind) {
        let nameOfEachFriend = smallFrind[0];
        for (const CurrentFriendNameAfterLooping of smallFrind) {
                if (CurrentFriendNameAfterLooping > nameOfEachFriend) {
                        nameOfEachFriend = CurrentFriendNameAfterLooping;
                }
        }
        return nameOfEachFriend;
}

const smallFrindName = getSmallNameFriend(frinds);
console.log("The Small Friend Name is:", smallFrindName);

//Task 2 another version
// Find the friend with the smallest name.
const friends = ['Masud', 'Saju', 'Fuad', 'Maruf', 'Manik'];
function theSmallFriend(Friend) {
        let tiny = Friend[0];
        for (let i = 0; i < Friend.length; i++) {
                const tinyFriend2 = Friend[i];
                if (tiny.length > tinyFriend2.length) {
                        tiny = tinyFriend2
                }
        } return tiny
}

const smallFrind = theSmallFriend(friends);
console.log("The Cheapest Phone Price is :", smallFrind);




// ############################################ Task-3: 
// Your task is to calculate the `total budget` required to buy electronics:
//         laptop = 35000 tk
//         tablet = 15000 tk
//         mobile = 20000 tk
// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.
let gadgets = [
        { name: 'laptop', price: 35000, },
        { name: 'tablet', price: 15000, },
        { name: 'mobile', price: 20000, }
]

function calculateElectronicsBudget(numbers) {
        let totalBudget = 0;
        for (const gadget of numbers) {
                totalBudget = totalBudget + gadget.price;
        } return totalBudget;

}

const totalBudget = calculateElectronicsBudget(gadgets);
console.log('You need money to buy these gadgets: ', totalBudget);



// ####################################### Task-4: 
// You are `given an array of phone objects`, each containing information about the `model, brand, and price`. Your task is to write a JavaScript function named `findAveragePhonePrice` that takes this `array as input` and returns the `average price of phone`.
// **Input**
const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(products) {
        let avg = 0;
        for (const price of products) {
                avg = avg + price.price;
        }
        return avg;

}

const avgPriceOfPhones = findAveragePhonePrice(phones);
console.log('The average price of phone: ', avgPriceOfPhones);






// ### Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
// ```
const employees = [
        { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
        { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
        { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
        { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function calculatingSalaryAndExperienceWithIncrement(employees) {
        let startingSalary = 0;

        for (const salary of employees){
                
        }

}

const totalSalary = calculatingSalaryAndExperienceWithIncrement(employees);
console.log('Now calculating is the total salary has to be provided by the company in a month:', totalSalary);



