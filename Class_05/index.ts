// // Collection of variables/consecutive ram cells is called array.

// var studentRollNo:number[]= [10,20,30,50,100,500] //hum typescript mein ik type ka data rakhain gay.
// studentRollNo[1] =104 // to change the value
// var sum:number = studentRollNo[0] + studentRollNo[1]
// console.log(sum)
// //  console.log(studentRollNo);
//  var studentNames:string[]= ["Zain", "Bilal","Ali"]
//  console.log(studentNames.length);


// function pushNewItemInArray(studentName:string){
//     studentNames[studentNames.length] = studentName
// }

// // pushNewItemInArray("Zeeshan")
// // pushNewItemInArray("Sarwar")
// // pushNewItemInArray("Mudassar")

// console.log(studentNames)

// let studentNames:string[]= ["Zain", "Bilal","Ali"]
// studentNames.push("zeeshan");
// studentNames.push("Hassan");
//  studentNames.pop();
//  studentNames.shift(); //shift start sy delete krta ha. jaisy pop last sy delete krta ha.
//  studentNames.unshift("Naveed"); //unshift start mein add krta ha.
//  studentNames.splice(2, 1, "Lateef") //ye function kahin bhi remove kr skta ha. ab ye function mein humnay likha ha ky indexing 2 sy start kro,ur 1 remove karo ur phir udr Lateef add kr do.
//  studentNames.splice(4,0 , "Haadi")
// console.log(studentNames)

// function pushToArray(item:string){
//     studentNames[studentNames.length] = "item";
// }
// pushToArray("Zeeshan")

// console.log("before loop")
// var index:number = 0;
// while(index<3){
//     console.log("1");
//     console.log("2");
//     index = index +1
// }
// console.log("after loop")

// Write a program to print the table of 2.

// var start:number = 1
// while (start<=10){
//     let result  = 2 * start
//     console.log("2* " + start + " = " + result)

//     start = start + 1
// }


// Assignment 

// var start:number = 1
// while (start<=10){
//     let result  = 5 * start
//     console.log("5* " + start + " = " + result)

//     start = start + 1
// }


// var StudentRollNo:number[] = [10,20,30,40,50,];

var todos:string[] = ["learn typescript", "learn arrays", "learn javascript", "Learn CSS"]

if(todos.length %2  != 0){
    // todos legth is odd
        todos.splice(Math.round(todos.length/2 ), 1)
}
else{
    todos.splice(Math.round(todos.length/2), 2)
    // todos even
}



