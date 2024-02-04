const heights = [10, 20, 30, 45, 21, 20, 25]

function getMaxHeight(persons) {
    let maxHeight = persons[0];
    for (const height of persons) {
        if (height > maxHeight) {
            maxHeight = height;
        }
    } return maxHeight;
}
const personMaxHeight = getMaxHeight(heights);
console.log("THis is the tania's height :", personMaxHeight);


const height2 = [10, 11, 12, 15, 9, 1, 2];
function getMinHeight(persons2) {
    let minHeight = persons2[0];
    for (const height2 of persons2) {
        if (height2 < minHeight) {
            minHeight = height2;
        }
    } return minHeight;
}
const personsMinHeight = getMinHeight(height2);
console.log(personsMinHeight);