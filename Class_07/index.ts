// MAP : return same array length
// Filter: return same length or less
// FOREACH: returns nothing

// let numbers: number[]=[2,3,4,6,45,28,1000,10000033];
// ["even","odd","odd"]

// function updateArray(arr:number[]){

//     let updatedArray = arr.map((number)=>{
//         if(number%2==0){
//             return "even";
//         }else{
//             return "odd";
//         }
//     })
//     return updatedArray
// }

// console.log(updateArray(numbers));
// agar hum simple array return krna chahty han to {} ye ur return remove kr dein gay ur simple parameter likh dein gay.
// let updatedArray = arr.map((number)=> number)

// Question: Remove Even Number from an array

let numbers:number[] = [10,3,4,4,5,5,6,7,8,9];
// for(let i=0;i<numbers.length;i++){ //0
//     if(numbers[i]%2==0){
//         numbers.splice(i,1); //0
//         i--; //-1
//     }
// }
let i =0;
while(i<numbers.length){
    if(numbers[i]%2==0){
        numbers.splice(i,1)
    }
    else{
        i++;
    }
}
console.log(numbers)







