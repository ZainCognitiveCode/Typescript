// Problem 01

var arr:number[] = [10,20,30,40,50,60]
arr.splice(2,1,33)
console.log("Array after splice", arr)

// Problem 02

var fruits:string[]=["mango","apple", "grapes", "jaman"]

function add_item(fruits:string[]){
    fruits.splice(3,0,"kela")
    return fruits
}

function remove_item(fruits:string[]){
    fruits.splice(2,1)
    return fruits
}

console.log("Shopping Cart\n", fruits)
console.log(add_item(fruits))
console.log(remove_item(fruits))

// Problem 03

var num:number = 1;
while(num<=25){
    console.log(num)
    num++;
}

// Problem 04
var num2:number = 1;
while(num2<=10){
   if(num%2==0){
    console.log(num2)
   }
   num2++
}

// Problem 05
var n:number = 4
var f:number = 1

for(var i:number=1; i<=n ;i++){
    f = f*i
}
console.log("Factorial of the number= ", f )

// Problem 06

var arr1:number[] = [10,-20,30,40,50, -60]
console.log("Array including all the negative numbers", arr1)

for(var i:number=1; i<arr1.length; i++){
    if(arr1[i]<0){
        arr1.splice(i,1)
    }
}
console.log("Array including all the negative numbers",arr1)


// Problem 07
var arr3:number[] = [1,2,3,4,5,6,7,8,9,10]
var j:number = 0
let total = 0
while(j<arr3.length){
    total += arr3[j] 
    j++

}
console.log("Sum of array", total)

// Problem 08

var temp:number[] = [10,30,45,65]
var k:number = 0
var f:number= 0
while(k<temp.length){
    f =(temp[k]*9/5)+ 32;
    temp[k] = f
    k++;

}
console.log("Temperature in celcius", temp)

