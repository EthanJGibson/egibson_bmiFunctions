let heightInches = 66
let heightMeters = heightInches / 39.37
let weight = 200
let diff = weight / heightMeters
let bmi = diff / heightMeters

console.log("This is the height in meters: " + heightMeters)
console.log(bmi);