"use strict";
// console.log("Before async code");
// function doSomething() {
//     console.log("print Something")
// }
// // setTimeout(doSomething,5000)
// setInterval(doSomething,1000)
// console.log("After async code");
// class ik entity ko represent krti ha
// type CarType = {
//     price: number,
//     color : string
//     startCar: ()=> number
// }
// class Car{
//     price: number= 0;
//     color: string = 'not define'
//     constructor(color:string,price:number){
//         this.color = color
//         this.price = price
//         console.log("Constructor")
//     }
//      startCar=()=> {
//         console.log("startCar")
//         return 0
//     }
// }
// // new aik new object banata ha class ki base pr
// let CarA:CarType = new Car("red",234)
// CarA.startCar()
// let CarB:CarType = new Car("Blue",123)
// console.log("carA",CarA)
// console.log("carB",CarB)
// console.log("Before Async");
// let setTimeoutID:number = 0;
// setTimeoutID = setTimeout(()=>{
//     console.log("setTimeout async");
// },10000)
// if(true){
//     clearTimeout(setTimeoutID)
// }
// console.log("After Async");
console.log("Before async code");
function PromiseFuction(resolve, reject) {
    //async 2min
    if (true) {
        resolve("\nSuccessfully async code executed\n");
    }
    else {
        reject("Something went wrong");
    }
}
const result = new Promise(PromiseFuction);
result.then((success) => {
    console.log("Success", success);
})
    .catch((error) => {
    console.log("Error", error);
});
console.log("After async code");
