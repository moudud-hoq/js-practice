// /*Problem 04 : Make A Great Password
// ⚠️ Function Name Must be password()
// কলিমুদ্দিন সাহেব নতুন ফোন কিনে বিভিন্ন ওয়েবসাইটে ভিজিট করেন এবং বিভিন্ন এপ্লিকেশনে একাউন্ট ক্রিয়েট করেন। কিন্তু তিনি পাসওয়ার্ড মনে রাখতে পারেন না। তিনি এমন একটি ফাংশন চান, যে খানে তার ইনফরমেশন এবং ওয়েবসাইট নেম দিলে সেটা কলিমুদ্দিন সাহেব কে একটি মনে রাখার মতো পাসওয়ার্ড জেনারেট করে দিতে পারবে। তার জন্য password() নামে একটা ফাংশন লিখতে হবে ।

// Input : ফাংশন টি একটা object ইনপুট হিসেবে নিবে। যে খানে শুধু তিনটি properties থাকবে। { name: “kolimuddin” , birthYear: 1999 , siteName: “google” }
// ⚠️ অব্জেক্ট এ properties গুলোর নাম একদম সেইম হতে হবে ।

// Password-Structure :
// 1.Website Name (The first Letter will be capital letter)-
// 2.username
// 3.birthYear

// ফাংশন টি উপরের স্ট্রাকচার অনুযায়ী একটা string আউটপুট আকারে return করবে।
// পাসওয়ার্ডটি হবেঃ "Google#kolimuddin@1999"

// Challenge: যদি কোনো একটা property মিসিং থাকে অথবা যদি birthYear 4 ডিজিটের না হয় ফাংশন টি রিটার্ন করবে একটি string যার ভ্যালুহবে “invalid”।
// */

// //Take a function name password()
// //The Function take an object with three property
// //{ name: “kolimuddin” , birthYear: 1999 , siteName: “google” }
// //The properties name of object will be same
// //password structure, website name: the first letter will be capital letter, 2nd-username, and third birthyear-1999 same as: Google#kolimuddin@1999
// //If any property miss the birthYear will not 4 digit then the function return a string "invalid"
// /*function signature/sample */



function password(obj) {
    const { name, birthYear, siteName } = obj;

    if (obj.birthYear.toString().length < 4) {
        return "invalid";
    }

    if (!name || !birthYear || !siteName) {
        return "invalid";
    }

    const capitalizedSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
    const passwordGenerationMachine = `${capitalizedSiteName}#${name}@${birthYear}`;
    return passwordGenerationMachine;
}

console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "google" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));
















// function password(obj) {
//     if (obj.birthYear.toString().length < 4) {
//         return "invalid";
//     }

//     // The Function will be an object with three property

//     const theProperties = { name: "", birthYear:"" , siteName: "" };
//     for (let i = 0; i < theProperties.length; i++) {
//         let property = theProperties[i];
//         if (!(obj[property])) {
//             return "invalid";
//         }
//     }

//     const name = obj.name;
//     const birthYear = obj.birthYear;
//     const siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

//     // Formation of the string
//     const passGen = `${siteName}#${name}@${birthYear}`;

//     return passGen;
// }

// console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
// console.log(password({ name: "maisha", birthYear: 2002 }));