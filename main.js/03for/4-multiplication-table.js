/***
Generate a multiplication table for number 9
 */
let mul = 1;
for (let i = 1; i <= 10; i++) {
    console.log(i + "* 9 = " + mul);
    console.log(mul = i * 9);
}

/*programming hero*/

// /*** 9 এর জন্য একটি গুণফল টেবিল তৈরি করুন */
// let mul = 1; // মৌলের মানটি ১ দিয়ে শুরু করতে হবে, না হলে সব সংখ্যা গুলির গুণফল ০ হয়ে যাবে

// for (let i = 1; i <= 9; i++) {
//     mul = i * 9; // মৌলের মান আপডেট করুন, প্রতিবার নতুন সংখ্যা দিয়ে গুণফল বের করা হবে
//     console.log(`${i} * 9 = ${mul}`);
// }
