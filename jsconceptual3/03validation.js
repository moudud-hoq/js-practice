

function validationLearning(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Please Baba input a valid number";
    }

    return a * b;
    return a / b;
}
console.log(validationLearning("f", 6));
//Result asbe NAN, তাহলে আমরা যদি একটা error মেসেজ দিতে চাই, তাহলে আমাদেরকে একটা typeof Use করতে হহবে, function এর নিচে