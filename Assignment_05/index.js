"use strict";
// Q1
// let numbers:number[] = [-1,-2,3,4,5,6,7,-8,-9]
// let negativeNumbers = numbers.filter((num)=>{
//     if(num<0){
//         return true
//     }
// })
// console.log(negativeNumbers)
//Q2
// let a:number[] = [1,2,3,4,5]
// function multil(arr:number[]){
//   let mult = a.map((Number)=>{
//     return Number*2
//    })
//    return mult
// }
// console.log(multil(a))
// Q3
let fruits = ["apple", "banana", "cherry", "date", "grape"];
function fruit(arr) {
    let char = fruits.filter((fr) => {
        if (fr.length > 5) {
            return true;
        }
        else {
            return false;
        }
    });
    return char;
}
console.log(fruit(fruits));
// Q4
// let numbers:number[] = [1,2,3,4,5,6,7,8,9,10]
// function upl(arr:number[]){
// let square = numbers.filter((num)=>{
//     if(num%2==0){
//       return num
//     }
// })
// let update = square.map((num)=>{
//     return num*2
// })
// return update
// }
// console.log(upl(numbers))
//Q5
// let temp:number[]=[0,10,20,30,40]
// let farn = temp.map((tem)=>{
//     return (tem*9/5)+32
// })
// console.log(farn)
// Q6
// let numbers:number[] =[3,6,9,12,15,18]
// function update(arr:number[]){
//     let oddNum = numbers.filter((num)=>{
//         if(num%2 !=0)
//         return num
//     })
//     let double = oddNum.map((num)=>{
//         return num**2
//     })
//     return double
// }
// console.log(update(numbers))
// Q7
let array = ["Alice", "Bob", "Charlie", "David", "Emily"];
function excamatroy(array) {
    array.forEach((name) => {
        console.log(name + "!");
    });
}
excamatroy(array);
