"use strict";
// var index:number = 1;
// var result:number = index++ //post increment operator
// console.log("index",index)
// console.log("result",result)
// index-- //post fix decrement operator
// index = index-1// ye bhi upar wli line ki trha same ha.
// ++index; //prefix increment operator
// --index;
// console.log("index",index)
// postfix mein phly izafa hota ha ur phir assign hota ha. prefix mein phly izafa ur phir assign hota ha.
// var index:number = 1;
// while(index<10){
//     console.log("index",index);
//     index++
// }
// console.log("console");
// hum for loop mein 3 kaam kr skty han.
// var index:number = 1;
// for(let index=1;index<10;index++){
//     console.log(index)
// }
// for(let index=10; index>=5; index--){
//     console.log("Naveed",index);
// }
// let i:number=11;
// do {
//     console.log("Naveed",i);
//     i++
// }while(i<10)
// do while ka baki ky sth major difference ye ha ky isky andar condition hum bad mein check krty hn,is liye isny atleast chalna hi chalna ha.ye 1 dafa lazmi chalay ga.
// write a ts program ,that calculate sum of even numbers in between 1 to 1000.
var sum = 0;
var list = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
        list.push(i);
    }
}
console.log("sum", sum, list);
