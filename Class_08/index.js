// let userName:string[] = ["Naveed","Ali","Umar"]
// // entity; aik cheez jis ki kuch properties hon. 
// // entity aik object ha.{} object ko denote krta ha.
// // actual value white store ho rhi ha,lakin hum key sy isko get kr skty han. key ki value kuch bhi ho sakti ha.
// // hum array mein list of cars ky object ko save kr sktay han.
// let cars =[{
//     color: "White",
//     company: "Honda",
//     year: 2023,
//     // isUsedCar:false,
//     // run: function (){
//     //     //
//     // }
//     // // stop: ()=>{
//     // //     return a+b
//     // // }
// },
// {
//     color: "grey",
//     company: "Kawasaki",
//     year: 2021}
// ]
// console.log("cars",cars[1].color)
// type CarType ={color:string,company:string,year:number} //ye aik object ki type ha,list of object ki nhi. list ky liye ye use kro []
// var car:CarType = {
//     color: "grey",
//     company: "Kawasaki",
//     year: 2021
// }
// var car1:CarType = {
//     color: "brown",
//     company: "Kawasaki",
//     year: 2023
// }
// var cars = [car,car1]
// var cars:CarType[] = [
// {
//     color: "grey",
//     company: "Kawasaki",
//     year: 2021
// },
// {
//         color: "brown",
//         company: "Kawasaki",
//         year: 2023
//     }
// ]
// // Write a program that prints all the car company and year number from this list.By for loop.
// var cars :CarType[] = [{
//     company: "helsinki",
//     color: "white",
//     year: 2010
// },{
//     company: "Niger",
//     color: "black",
//     year: 2011
// },{
//     company: "Honda",
//     color: "Brown",
//     year: 2012
// },{
//     company: "City",
//     color: "Red",
//     year: 2013
// },{
//     company: "Corolla",
//     color: "Yellow",
//     year: 2023
// }
// ]
// for(let i=0;i<cars.length;i++){
//     const car = cars[i];
//     // console.log("Company",cars[i].company)
//     console.log("Company",car.company)
// }
import sumFun from "./sum.js";
var d = sumFun(10, 20) + 5;
console.log("d=", d);
