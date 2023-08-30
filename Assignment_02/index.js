"use strict";
// Program 1
var Temperature_in_C = 17;
var To_Farenheit = (Temperature_in_C * 9 / 5) + 32;
console.log(To_Farenheit);
// Problem 2
var num1 = 56;
var num2 = 78;
var total = 100;
var output = (num1 / total) * 100;
const percentage = Math.floor(output);
console.log(percentage + " % ");
// Problem 3
var days = 17;
var weeks = days / 7;
const total_weeks = Math.floor(weeks);
var remaining_days = days % 7;
console.log("There are " + total_weeks + " weeks and " + remaining_days + " days ");
// Problem 4
var price = 100;
var original_price = 120;
if (price || original_price >= 100) {
    var discount = original_price * 0.1;
    var discountedPrice = original_price - discount;
    console.log(`Original Price: $${original_price.toFixed(2)}`);
    console.log(`Discount: $${discount.toFixed(2)} (10%)`);
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
}
else {
    var discount = original_price * 0.05;
    var discountedPrice = original_price - discount;
    console.log(`Original Price: $${original_price.toFixed(2)}`);
    console.log(`Discount: $${discount.toFixed(2)} (5%)`);
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
}
// Probem 5
var age = 23;
if (age >= 0 && age <= 12) {
    console.log("Child");
}
else if (age >= 13 && age <= 19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
// Prolem 6
var temp = 45;
if (temp >= 0 && temp <= 20) {
    console.log("WEAR WARM CLOTHES");
}
else if (temp >= 45 && temp <= 90) {
    console.log("Wear Cold Clothes");
}
// Problem 7
var num = 11;
if (num % 3 == 0 && num % 5) {
    console.log("The number is divisble by 3 and 5");
}
else {
    console.log("The number is not divisible by 3 and 5");
}
// Problem 8
var year = 2023;
if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    console.log(`${year} is a leap year`);
}
else {
    console.log(`${year} is not a leap year`);
}
// Problem 9
var days_of_week = 5;
if (days_of_week <= 7) {
    if (days_of_week == 1) {
        console.log("Saturday");
    }
    else if (days_of_week == 2) {
        console.log("Sunday");
    }
    else if (days_of_week == 3) {
        console.log("Monday");
    }
    else if (days_of_week == 4) {
        console.log("Tuesday");
    }
    else if (days_of_week == 5) {
        console.log("Wednesday");
    }
    else if (days_of_week == 6) {
        console.log("Thursday");
    }
    else if (days_of_week == 7) {
        console.log("Friday");
    }
}
// Problem 10
var consumedUnit = 430;
var unitprice = 20;
var billAmount = consumedUnit * unitprice;
if (consumedUnit > 100 && consumedUnit < 200) {
    console.log((billAmount * 10) / 100 + billAmount);
}
else if (consumedUnit > 200 && consumedUnit < 500) {
    console.log((billAmount * 15) / 100 + billAmount);
}
else {
    console.log((billAmount * 25) / 100 + billAmount);
}
