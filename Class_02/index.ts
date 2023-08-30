console.log("Hello")

//variable mein start mein number nhi hona chahiye,end mein ho skta ha jaisy num1

// Type annotations

// camel case
var numPar
// Pascal Case
// first character big in every case.
// jb do words hon to phir ye use krny han logic, agr single word ha to nhi.

// vsriables mein camel case follow kren gay.

// Statement: 
var userName:String = "Naveed";
var num1:number = 10;
var num2:number = 15;
var num3:number = 18;
console.log(num1);
console.log(num2);
console.log(num3);
// code top to bottom chalta ha.

var aNewVar = null;
console.log("Null ka matlab ha empty", aNewVar)


// Template Literals(``)

var Administrator:string = `Zain ${userName}`;
// hum jb kisi cheez ky sth ur kuch print krwana ho to backticks use krty han.
var Administrator:string = "Zain";
var Administrator:string = 'Zain';

// hum 3 tariqo sy string ko save kr skty han.("", ' ' , ` `)
// backticks ko template literals kehty han.

// Data Types
var aNewVar = null;
console.log(typeof(aNewVar));
// ye ab humain pata chala ky null ki type object ha.


// Operators
// Arithmetic Operators

var num4:number = 20;
var num5:number = 30;
var result:number = num4+num5;
var result1:number = num5-num4;
var result2:number = num5*num4;
var result3:number = num5/num4;
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);

// Modulus Operator
var num6:number = 90;
var num7:number = 88;
var resu:number = num6 % num7;
console.log(resu);

// Assignment Operator

var n1:number= 10;
n1 +=5;
console.log(n1)



var n2:number=3;
var n3:number=5;
var n4:number=8;

var r:number = n2+n3-n4*2/4;
console.log(r);

// ye DMAS rule ko follow karay ga.

// Comparison Operators(==, <, >, <=, !=)
// hum comparison operators ky liye == use krty han kyunky ye compare krta ha.

var output:boolean = 2==2;
console.log(output);
//var output2:boolean = 4==2;
//console.log(output2);


// Logical Operators

/*
T && T => T
T && F => F
F && T => F
F && F => F

T || T => T
T || F => T
F || T => T
F || F => F */

var out:boolean= 5==5 && 2==2
console.log(out);

var out2:boolean= 5==5 || 2==2
console.log(out2);

var naam:string= "Zain";
var age:number = 22;
var nationality:string = "Pakistani";
var staat:boolean = age >=18 && nationality == "Pakistani";
console.log(staat);

if(false)
{console.log("Line 1")
console.log("Line 2")
console.log("Line 3")}


{console.log("Line 4");
console.log("Line 5");
console.log("Line 6");}













