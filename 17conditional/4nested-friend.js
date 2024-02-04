/***
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
let myScore = (90);
let score = (50);
if (myScore >= 80) {
    console.log ("Cheers");
    if (score >= 80) {
        console.log("Dear friend let's go for lunch");
    }
    if (score < 80 && score > 60) {
        console.log("Dear friend, Good luck next time.");
    }
    if (score < 60 && score > 40) {
        console.log("I'll never seen his message, because he has been got marks less than me.");
    }
    else{
        console.log("Take a block because u are a failure");
    }
}else{
    console.log("Going to sleep and I am very sad");
}
