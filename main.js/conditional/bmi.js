/*** 
BMI Calculator and Health Category
Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.
    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/
//Check Done BMI Machine

let underwightWeight = 18.5;
let normal = 24.9;
let overWeight = 29.9;
let weight = 25;

if (weight <= 18.5) {
    console.log('Under Weight');
} 

else if (weight == 18.5 || 24.9) {
    console.log('Normal');

}

else if (weight >= 25 || 29.9) {
    console.log('Over Weight');
}

else {
    console.log('obese');
};
