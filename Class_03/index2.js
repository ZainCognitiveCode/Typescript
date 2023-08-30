"use strict";
var len = 10;
var width = 20;
var area = len * width;
console.log(area);
// Problem 2
// Area of Cube
var length = 10;
var area_of_cube = length * 3;
console.log(area_of_cube);
// Problem 3
var num1 = 66;
if (num1 > 0) {
    console.log("The number is positive");
}
else if (num1 < 0) {
    console.log("The number is negative");
}
else {
    console.log("The number is equal to 0");
}
// Problem 4
var num = 4;
if (num % 2 == 0) {
    console.log("The number is even");
}
if (num % 2 != 0) {
    console.log("The number is odd");
}
// Problem 5
var age = 22;
var Name = "Zain";
if (age >= 18) {
    console.log("The person is eligibe for voting");
}
else {
    console.log("The person is not eligible for voting");
}
// Problem 6
var result = ((10 + 5) * (3 - 2) / (4 % 3) - 7);
console.log(result);
// Problem 7
// one if takes 1 seconds
// make your code efficent and easy to use
var marks = 85;
if (marks > 80) {
    console.log("Student Grade A");
}
else if (marks < 80 && marks > 70) {
    console.log("Student Grade B");
}
else if (marks < 70 && marks > 60) {
    console.log("Student Grade C");
}
else if (marks < 60 && marks > 50) {
    console.log("Student Grade D");
}
else if (marks < 50) {
    console.log("Student Grade F");
}
// 
var section = "C";
switch (section) {
    case "A":
        console.log("YOUR CLASS TMING ON EVERY SUNDAY IS 9PM - 1PM");
        break;
    case "B":
        console.log("YOUR CLASS TIMING ON EVERY SUNDAY IS 1PM - 5PM");
    default:
        console.log("YOUR CLASS TIMING ON EVERY SUNDAY IS 4PM - 6PM");
        break;
}
