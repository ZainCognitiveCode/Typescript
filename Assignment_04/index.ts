// Q1

// var sum:number =0

// for(let i=1;i<=100;i++){
//  if(i%2==0){
//     sum = sum+i;
//     console.log("sum",sum)
//  }   
// }


// Q2
// let i =0
// var even:number[]=[]
// for(let arr1=[1,2,4,6,8,0,3,45,23,46];i<=arr1.length;i++){
//     if(i%2==0){
//         even.push(i)
//     }
// }

// console.log(even)


// Q3
// let i= 0;
// var odd:number[]=[];
// for(let arr=[1,2,3,4,5,6,7,77,55,45,34,23,22,21,27];i<+arr.length;i++){
//     if(i%2 != 0){
//         odd.push(i)
//     }
// }
// console.log(odd)


// Q4
// function AreaOfCircle(r:number) {
//    var area = 3.14*r**2;
//    console.log(area)
    
// };
// AreaOfCircle(13)


// Q5
// var gradeList:number[]=[56,34,67,78,98,43,22,11,69,84];

// function FailingGrades(grades:number[]):number[]{
//     for(let i=0;i<grades.length;i++){
//         if(grades[i]<50){
//             grades.splice(i,1);
//             i--; //Decrement to recheck the same list.
//         }
//     }
//     return grades;

// };

// console.log("Original Grades: ", gradeList);
// var updatedList = FailingGrades(gradeList);
// console.log("Updated List:", updatedList);






// Q6
var elements:number[]=[1,2,3,4,5,6,7,8,9];

function Largest(list:number[]):number{
    if (list.length === 0){
        throw new Error("Array is empty")
    }
    let largest = list[0];
    for(let i=1;i<list.length;i++){
        if (list[i]>largest){
            largest = list[i];
        }
    }
    
    return largest;
}

var LargestNumber = Largest(elements)
console.log("Largest Element in the array is: ", LargestNumber)



