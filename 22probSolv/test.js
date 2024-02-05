
//বন্ধুদের নামের একটি অ্যারে ডিফাইন করুন
const frinds = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// একটি ফাংশন ডিফাইন করুন যা সবচেয়ে ছোট বন্ধুর নাম বের করতে সাহায্য করে
function getSmallNameFriend(WantNameOfSmallFriend) {

    // একটি ভেরিয়েবল তৈরি করুন যা শুরুতে প্রথম নাম দিয়ে ইনিশিয়েট হয়
    let nameOfEachFriend = WantNameOfSmallFriend[0];

    // একটি ফর লুপ দ্বারা অ্যারের প্রতিটি নাম চেক করুন
    for (const currentFriendNameAfterLooping of WantNameOfSmallFriend) {
        // যদি বর্তমান নাম অবশ্যই পূর্ববর্তী নামের চেয়ে বড় হয়
        if (currentFriendNameAfterLooping > nameOfEachFriend) {
            // তাহলে বর্তমান নামটি নতুনভাবে সংরক্ষণ করুন
            nameOfEachFriend = currentFriendNameAfterLooping;
        }
    }

    // সবচেয়ে বড় নামটি ফেরত দিন
    return nameOfEachFriend;
}

// ফাংশন কল করুন এবং ফলাফল প্রিন্ট করুন
const smallFrindName = getSmallNameFriend(frinds);
console.log("সবচেয়ে ছোট বন্ধুর নাম:", smallFrindName);

/*--------------------------------------------------------------------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------------------------------------------------------------------------------*/
// সবচেয়ে ছোট নামের বন্ধু বের করো
const friend2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function theSmallFriend(sFriend) {
    // শুরুতে প্রথম বন্ধুর নাম ধরা হচ্ছে
    let tiny2 = sFriend[0];

    // অ্যারের প্রতিটি উপাদানের জন্য একটি ফর লুপ চালানো হচ্ছে
    for (let i = 0; i < sFriend.length; i++) {
        // বর্তমান বন্ধুর নাম ধরা হচ্ছে
        const tinyFriend2 = sFriend[i];

        // যদি বর্তমান নামটি পূর্বের নামের চেয়ে ছোট হয়
        if (tiny2.length > tinyFriend2.length) {
            // তাদের আসল বন্ধু হিসেবে সংরক্ষণ করা হচ্ছে
            tiny2 = tinyFriend2;
        }
    }

    // সবচেয়ে ছোট নামটি ফেরত দেয়া হচ্ছে
    return tiny2;
}

// ফাংশন কল করা হচ্ছে এবং ফলাফলটি প্রিন্ট করা হচ্ছে
const smallFrind2 = theSmallFriend(friend2);
console.log("সবচেয়ে ছোট বন্ধুর নাম :", smallFrind2);


