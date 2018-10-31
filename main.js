/*
weight = 260
height = 83
Your BMI is ___
You are considered to be overweight

heightToMetric()
weightToMetric()
calc Bmi(weight , height)
to BMIScale() // return overweight, underweight
*/
weight = weightToMetric(260, 2.205)
height = heightToMetric(83, 39.37)
bmi = bmi(weight, height)

//All functions
function weightToMetric(weight, calcKG) {
    return weight / calcKG;
}
function heightToMetric(height, calcM) {
    return height / calcM;
}
function bmi(weightFunc, heightFunc) {
    return weightFunc / (heightFunc * heightFunc)
}

if (bmi >= 0 && bmi < 18.5) {
    console.log("Your BMI is " + bmi + ", this means you are underweight. Eat a cookie!")
}
if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Your BMI is " + bmi + ", this means you are normal. You don't get anything!")
}
if (bmi >= 24.9 && bmi <= 29.9) {
    console.log("Your BMI is " + bmi + ", this means you are overweight. Don't eat a cookie!")
}
if (bmi >= 30) {
    console.log("Your BMI is " + bmi + ", this means you are obese. Eat a cookie, you're past the point of no return anyway!")
}