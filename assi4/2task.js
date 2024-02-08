/*Problem-02: Good Name , Bad Name
⚠️ Function Name Must be checkName()
সালমান ভাই ও রাশেদা ভাবীর ক োল জুড়ে এসেছে একটা পুত্র সন্তান । সালমান ভাই পুত্র সন্তানের একটা ভাল ো নাম
রাখতে চান। কিন্তু তাদের এলাকায় গ্রামের মানষুরা নাম কে ব্যাংগ করে উচ্চারন করে। যে মন কার ো নাম salman
হলে তারা বলে সালমাইন্যা। কার ো নাম jafor হলে তারা বলে জাফইর্যা । সালমান ভাই চান না তার পুত্র সন্তান কে
কেউ এভাবে ক্ষেপাক ।

সালমান ভাই দেখতে পেলেন যে যাদের নামের শেষে A, y, i , e , o , u, w থাকে তাদের কে আসলে ক্ষেপান ো
যায় না । যমন Tonoy, utsho , Roide, shanto এসব ধরনের নাম গুল ো কে ব্যাংগ করে উচ্চারন করা যায় না।

এখন তোমাকে সালমান ভাইর জন্য checkName() নামে একটা ফাংশন লিখে দিতে হবে। যেটা একটা স্ট্রি ং
ইনপুট নেবে এবং ফাংশন টি চেক করে দেখবে নাম টি রাখা ভালো হবে না খারাপ হবে। ভালো হলে সে রিটার্ন
করবে “Good Name” আর নাম টি খারাপ হলে রিটার্ন করবে “Bad Name”
*/

//Input: তোমার ফাংশন টি ইনপুট নেবে একটি নাম। ইনপুট টি হবে একটি স্ট্রি ং। যেখানে character গুলো ছোটো হাতের বা বড় হাতের হতে পারে ।

//Output: ফাংশন টি আউটপুট হিসেবে রিটার্ন করবে একটি স্ট্রি ং। যার ভ্যালুহবে “Good Name” অথবা “Bad Name”
//Challenge: ইনপুট হিসেবে স্ট্রি ং টাইপের বাইরে অন্য যে কোনো কিছু দিলে এটা শুধুমাত্র “invalid” রিটার্ন করবে ।

// function checkName(name) {
//     // Check if the input is a string
//     if (typeof name !== 'string') {
//         return "Invalid";
//     }

//     // Get the last character of the name
//     const words = name[name.length - 1].toLowerCase();
//     // const lastLetterIndex = name.length - 1;
//     // const lastLetter = name[lastLetterIndex].toLowerCase();

//     // Check if the last character is in the list of undesirable characters
//     if (['A', 'y', 'i', 'e', 'o', 'u', 'w'].includes(words)) {
//         return "Bad Name";
//     } else {
//         return "Good Name";
//     }
// }


function checkName(name) {
    // Check if the input is a string
    if (typeof name !== 'string') {
        return "Invalid";
    }
    const lastLetter = name.toLowerCase()[name.length - 1]; //এইটা ব্যবহার করলে হবে কিনা
    const goodLetter = ["a", "e", "i", "o", "u", "y", "w"];

    // Check if the last letter is in the goodletter
    for (let i = 0; i < goodLetter.length; i++) {
        if (lastLetter === goodLetter[i]) {
            return "Good Name";
        }
    }
    return "Bad Name";
}
console.log(checkName("Salman"));
console.log(checkName("RAFEE")); 
console.log(checkName("Jhankar"));
console.log(checkName(199)); 
console.log(checkName(["Rashed"])); 