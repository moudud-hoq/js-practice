//1st Object Validation
function objValidation(info) {
    //object validation এর ক্ষেত্রে error message হবে!
    if (typeof info !== "object" || !info.name || !info.age) {
        return "Oi vai thik thak info de na re!";
    }

    return `My name is: ${info.name}. My age is ${info.age}.`;

}
console.log(objValidation({ name: "Moudud", age: "Hoque" }));


//Note:--------মোটকথা আমার যেমন দরকার তেমন যদি ইউজার না দেয় input তাহলে এই এরর মেসেজ দেখাবে।

//এখন যদি ধরেন আমি উপরে age : "Hoque"দিলাম তারপরেও কিন্তু output আসছে, তো এটাকেও তো এরর মেসেজে শো করাতে হবে নাকি, সেজন্য নিচের ফাংশন এ কাজ করছি উপরের ফাংশন টার মধ্যে typeof টাকে ভেংগে ভেংগে লিখেছি।
function objValidation2(info) {
    //object validation এর ক্ষেত্রে error message হবে!
    if (typeof info !== "object") {
        return "Oi vai thik thak info de na re!";
    } else if (!info.name || !info.age) {
        return "Oi vai thik thak info de na re!";
    } else if (typeof info.name !== 'string' || typeof info.age !== 'number') {
        return "Warning!:---Name should be string and Age should be number";
    } else if (info.age <= 0) {
        return "Age Should be a positive number";

    }


    return `My name is: ${info.name}. My age is ${info.age}.`;

}
console.log(objValidation2({ name: "Moudud", age: "Hoque" }));

