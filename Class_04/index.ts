// // where PrintConsole is the name of the function
// function PrintConsole(){
//     console.log("1");
// }
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")
// PrintConsole()
// console.log("6")
// console.log("7")
// console.log("8")
// console.log("9")
// console.log("10")

// () inky andar ki values parameters han,
// function sum(num1:number, num2:number){
//     // var num1:number =10;
//     // var num2:number = 20;
//     var result:number = num1 +num2;
//     console.log("result is =", result);
// }

// sum(10,20)


// function sum2(){
//     var num1:number =20;
//     var num2:number = 30;
//     var result:number = num1 +num2;
//     console.log("result is =", result);
// }

// sum2()

// 

// Function For Temperature

// function cToFTemperature(_temp:number) {
//     // var temp:number = 36;
//     var tempF:number = (_temp*(9/5)+32);
//     console.log("TempF:" , tempF)
// }


// cToFTemperature(57)

// // Function for Percentage
// function calculatePercentage(obtainedMarks:number, totalMarks:number){
//     // var obtainedMarks:number = 1044;
//     // var totalMarks:number = 1100;
//     var percentage:number = (obtainedMarks/totalMarks) *100;
//     console.log("Percentage is ", percentage)
// }

// calculatePercentage(1044,1100)

// // Add two numbers and add 5 into result after calculation.

// var resultSum:number = sum(10,20) //hum function ko phly bhi call kr skty han,kyunky compiler phly dekhta ha ky konsa fuction ha,phir wo uski calling ko dekhta,ab ap usko chahye phli line pr likh lo.
// console.log(resultSum)

// function sum(num1:number, num2:number):number{
//     // var num1:number =10;
//     // var num2:number = 20;
//     var result:number = num1 +num2;
//     // result = result+40; // mtlb ky result variable ha ur hum iski value jb chahin badal skty han,is liye hum 5 bd mein bhi add kr skty han.
//     // console.log("result is =", result);
//     return result // jo result aye ga,wo function call mein ajaye ga wapis return sy.return value ko return krta ha.
// }

// var SumResult:number = sum(10,20) //ab jo result return hua tha,wo is variable mein save ho gya ha.
// SumResult = SumResult+5
// console.log("SumResult", SumResult)


// Add two numbers 20,30 and add 40 into result after calculation.
// var AddResult:number = sum(20,30)
// AddResult = AddResult + 40
// console.log("AddResult", AddResult)

// aik function million of parameter save kr skta ha,lakin return aik hi krta ha.

// var sumArrow = (num1:number,num2:number)=>{
//     // var num1:number = 10;
//     // var num2:number = 20;
//     var result:number = num1 + num2;
//     return result
//     console.log("result is: ", result)

// }

// var sumResult:number = sumArrow(10,20)
// console.log("sumResult", sumResult);
// => isko arrow head khety han.
// ()=> isko anonymous function kehty hn.

// arrow function no. of lines of code ko bhi decrease kr skta ha.

var sumArrow = (num1:number,num2:number):number=> num1 + num2
// ye ab upar wali line result ko return bhi kr raha ha.
console.log(typeof sumArrow)
var sumResult:number = sumArrow(10,20);
console.log("sumResult", sumResult);

// var,let ur const sy variable bana sakty hn.

var num1:number = 10;
let nm2:number = 20;
const num3:number = 30;
// const ki value unchangeable ha.
// var global ha, let local hota ha.

function PrintConsole(){
    var localVariable = 50;
    console.log("Function", num1);
}

if (2<5) {
    var ifVariable:number = 15;
}
console.log("ifVariable", ifVariable)

PrintConsole()
// local scope wala variable local mein hi milay ga,global scope ka variable lakin local scope mein mil skta ha.
// agar block function ka ha to wo local scope kehlata ha. agar wo kahin ur block ha to hum usko var sy access kr skty han.
// hum agr local variable k sth let likhain gy to wo accessible nhi ho ga. agr hum usky sth var likhain gay to wo bahir yani globally tor pr access ho sky ga. kyunky var global variable ha ur let local ha. constat variable bhi globally access nhi ho ga. var hr jaga accessible h,srf agr wo function ky andar likha to accessible nhi ha.