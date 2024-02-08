/*Problem 05 : Monthly Savings of a Freelancer
⚠️ Function Name Must be monthlySavings()

ফ্রিল্যান্সার শাহেদ প্রতি মাসে বেশ কিছু পেমেন্ট ক্লায়েন্টদের থেকে পায় । কিন্তু পেমেন্ট এর কিছু ট্যাক্স পরিশোধ এবং নিজের living cost এর কারনে সে savings করতে পারে না । তার savings এর হিসেব করার জন্যে তাকে monthlySavings() নামে একটি ফাংশন তৈরী করে দিতে যেটা ইনপুট হিসেবে নেবে একটি Array(প্রতি মাসে পাওয়া সকল payment) এবং একটি Number(শাহেদের living cost) ।

---শাহেদের যে সকল পেমেন্ট 3000 টাকা বা তার বেশি সে সকল পেমেন্ট থেকে ব্যাংক Tax হিসেবে ২০% টাকা কেটে নেয় । এখন total ইনকাম থেকে Tax গুলো বাদ দিয়ে এবং Living cost বাদ দিয়ে বাকী যে টাকা থাকে সেটাই হলো শাহেদের savings। অর্থাৎ ফাংশন টি শাহেদের savings কে return করবে। 

---যদি savings করার মতো টাকা না থাকে অর্থাৎ savings এর ভ্যালু যদি ০ এর চেয়ে কম হয় তাহলে ফাংশন টি return করবে একটি string তা হলোঃ “earn more”

Input: function টি ইনপুট নেবে একটি Array(All payments) এবং একটি number(Living cost) ।

Output: function টি একটি number অথবা string return করবে।
● যদি savings 0 বা তার থেকে grater হয় তাহলে return করবে একটা number(Total Savings)
● যদি savings 0 থেকে small হয় তাহলে return করবে String যার ভ্যালু হবে earn more

Challenge: ফাংশন টি তখন invalid input কে string টি return করবে ।
● যদি 1st parameter টি Array না হয়
● যদি ও 2nd parameter টি number না হয়
*/

// function monthlySavings(payments, livingCost) {
//     if (!Array.isArray(payments) || typeof livingCost !== 'number') {
//         return "invalid input";
//     }
//     //     // Calculate total income
//     let totalIncome = 0;
//     for (const payment of payments) {
//         totalIncome = totalIncome + payment;
//     }


// }


function monthlySavings(payments, livingCost) {
    // Validate inputs
    if (!Array.isArray(payments) && typeof livingCost !== 'number') {
        return "invalid input";
    }

    // Calculate total income
    let income = 0;
    for (const payment of payments) {
        income = income + payment;
    }

    // Calculate total tax
    let tax = 0;
    for (const payment of payments) {
        if (payment >= 3000) {
            tax = tax + payment * 0.2;
        }
    }

    // Calculate savings
    const savings = income - tax - livingCost;

    if (savings >= 0) {
        return savings;
    } else {
        return "earn more";
    }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
console.log(monthlySavings([2000, 2500, 1500], [3000]));

