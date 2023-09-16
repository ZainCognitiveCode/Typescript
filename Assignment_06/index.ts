// ZAIN UL ABIDEEN Date: 09-sep,2023
// This is my practice assignment of typescript.


// Q2

// let a:string = "Zain";
// console.log(a)

// Q3  
// let n:string = "Umer";
// console.log(n.toUpperCase())
// console.log(n.toLowerCase())

// let m:string= "welcome to armadillo"
// let result:string = "";
// let capitalizeNext:boolean = true;

// for(let i=0;i<m.length;i++){
//     const char = m[i];

//     if(char== ' '){
//         capitalizeNext=true;
//         result +=char
//     }else{
//         if(capitalizeNext){
//             result += char.toUpperCase();
//             capitalizeNext = false;
//         } else {
//             result += char.toLowerCase();
//         }
//     }

// }

// console.log(result);


/// Q4

// let quote:string = "A man is judged by the company he keeps."
// console.log("Dickens once said: ",quote)

/// Q5

// let message:string = "Work Work and Work."
// let famous_person:string = "Quaid-e-Azam"
// console.log(famous_person,": ", message)


/// Q6
// let personName = "\t\n John Doe \t\n";
// console.log("Name with White Spaces: ",personName)

// let strippedName = personName.trim()
// console.log("\nName after Stripping White Space: ",strippedName)

// Q7
// let a:number = 2
// let b:number = 4
// let c:number = 6
// let d:number = 8
// let e:number = 10
// let f:number = 16
// let result:number = a+c
// let subtract:number = e-a
// let multiplicat:number = a*b
// let division:number = f/a
// console.log(result)
// console.log(subtract)
// console.log(multiplicat)
// console.log(division)

// Q8 
// console.log(5+3)
// console.log(5+3)
// console.log(5+3)
// console.log(5+3)


// Q9 
// let favo:number = 4
// let mess = "My favorite number is : "
// console.log(mess + favo)


// Q11

// let frnds:string[] = ["Hasnat","Shoaib","Farooq","Adnan","Haroon","Abdullah"]

// for (let i=0;i<frnds.length;i++){
//     console.log( frnds[i])

// }


// Q12

// let frnds:string[] = ["Hasnat","Shoaib","Farooq","Adnan","Haroon","Abdullah"]

// for (let i=0;i<frnds.length;i++){
//     console.log("Hey", frnds[i],"Good Morning")

// }


// Q13 

// let favorite:string[] = ["Honda motorcycle", "Toyota car","Ford car", "BMW motorcycle"]

// for(let i of favorite){
//     console.log(`I would like to own a ${i}`)
// }


// Q14

// let guest:string[]  =["Hammad","Ali","Hassan"]

// for(let i=0;i<guest.length;i++){
//         console.log("I would like to invite ",guest[i], "to dinner.")
//     }

// Q15 

// let guest:string[]  =["Hammad","Ali","Hassan"]



// for(let i=0;i<guest.length;i++){
//     guest.splice(1,1,"Noul")
//         console.log("I would like to invite ",guest[i], "to dinner.")
        
//     }
//     console.log("Ali")

// Q16
// let guest:string[]  =["Hammad","Ali","Hassan"]
// for(let i=0;i<guest.length;i++){
//     guest.splice(1,1,"Noul")
//         console.log("I would like to invite ",guest[i], "to dinner.")
           
//     }
//     console.log("Ali")

// let updatedGuest:string[] = guest

// for(let j=0;j<updatedGuest.length;j++){
    
//     if(updatedGuest.length==3){
//     updatedGuest.splice(0,0,"Naeem")} 
//     else if(updatedGuest.length%2==0)
//     {let newGuest = "Akhtar";
//         let middleIndex = Math.floor(guest.length / 2);  
//         updatedGuest.splice(middleIndex,0,newGuest)

//     }
// }

// let newList:string[] = updatedGuest
// newList.push("Aiwaan")
// for(let k=0;k<newList.length;k++){
//     console.log("I would like to invite", updatedGuest[k], "to dinner.")
// }


// console.log("I have found out that new guests are coming so I invited them too.")


// Q17 
// let guest:string[]  =["Hammad","Ali","Hassan"]
// for(let i=0;i<guest.length;i++){
//     guest.splice(1,1,"Noul")
//         console.log("I would like to invite ",guest[i], "to dinner.")
           
//     }
//     console.log("Ali")

// let updatedGuest:string[] = guest

// for(let j=0;j<updatedGuest.length;j++){
    
//     if(updatedGuest.length==3){
//     updatedGuest.splice(0,0,"Naeem")} 
//     else if(updatedGuest.length%2==0)
//     {let newGuest = "Akhtar";
//         let middleIndex = Math.floor(guest.length / 2);  
//         updatedGuest.splice(middleIndex,0,newGuest)

//     }
// }
// console.log(updatedGuest)
// console.log("Unfortunately, the dinner table can only accommodate two people.")

// while(updatedGuest.length>2){
//     let RemovedGuest = updatedGuest.pop()
//     console.log(`Sorry, ${RemovedGuest}, you can't be invited to dinner.`)
// }

// for(const i of updatedGuest){
//     console.log(`You are ${i} invited to dinner`)
// }

// updatedGuest.pop()
// updatedGuest.pop()
// console.log("Final Guest List",updatedGuest)

// let newList:string[] = updatedGuest
// newList.push("Aiwaan")
// for(let k=0;k<newList.length;k++){
//     console.log("I would like to invite", updatedGuest[k], "to dinner.")
// }
// console.log("I have found out that new guests are coming so I invited them too.")
// console.log("I can invite only two people")


// Q18  
// Step 1: Store the locations in an array (not in alphabetical order)
// const placesToVisit: string[] = [
//     "Tokyo",
//     "Paris",
//     "New York",
//     "Sydney",
//     "Rome"
//   ];
  
//   // Step 2: Print your array in its original order
//   console.log("Original order:");
//   console.log(placesToVisit);
  
//   // Step 3: Print your array in alphabetical order without modifying the actual list
//   const sortedArray = [...placesToVisit].sort();
//   console.log("\nAlphabetical order (sorted without modifying original):");
//   console.log(sortedArray);
  
//   // Step 4: Show that your array is still in its original order by printing it
//   console.log("\nOriginal order (should remain unchanged):");
//   console.log(placesToVisit);
  
//   // Step 5: Print your array in reverse alphabetical order without changing the order of the original list
//   const reverseSortedArray = [...placesToVisit].sort().reverse();
//   console.log("\nReverse alphabetical order (sorted without modifying original):");
//   console.log(reverseSortedArray);
  
//   // Step 6: Show that your array is still in its original order by printing it again
//   console.log("\nOriginal order (should remain unchanged):");
//   console.log(placesToVisit);
  
//   // Step 7: Reverse the order of your list
//   placesToVisit.reverse();
//   console.log("\nReversed order (original order changed):");
//   console.log(placesToVisit);
  
//   // Step 8: Reverse the order of your list again
//   placesToVisit.reverse();
//   console.log("\nOriginal order (should be back to its original order):");
//   console.log(placesToVisit);
  
//   // Step 9: Sort your array so it’s stored in alphabetical order
//   placesToVisit.sort();
//   console.log("\nAlphabetical order (original order changed):");
//   console.log(placesToVisit);
  
//   // Step 10: Sort your array to change it to reverse alphabetical order
//   placesToVisit.sort((a, b) => b.localeCompare(a));
//   console.log("\nReverse alphabetical order (original order changed):");
//   console.log(placesToVisit);
  


// Q19
// let guest:string[]  =["Hammad","Ali","Hassan"]
// let numGuest = guest.length
// console.log(`I would like to invite ${numGuest} people to the dinner.`)
// for(let i=0;i<guest.length;i++){
//         console.log("I would like to invite ",guest[i], "to dinner.")
//     }

// Q20

// let list:string[] =["Jhang","Lahore","FSD","Karachi","Patoki"]

// console.log(list)

// Q21

// let car ={
//     Engine: "Dhoom",
//     HP: "123",
//     Velocity: "320Km/h",
//     Functional: true,
//     Color: "Black"
// }

// console.log("car has these things",car)


// Q22

// Q23 

// let x = 5;
// let y = 10;

// console.log("Test 1: Is x equal to y? I predict False.");
// console.log(x == y);

// console.log("Test 2: Is x not equal to y? I predict True.");
// console.log(x != y);

// console.log("Test 3: Is x less than y? I predict True.");
// console.log(x < y);

// console.log("Test 4: Is x greater than y? I predict False.");
// console.log(x > y);

// console.log("Test 5: Is x less than or equal to y? I predict True.");
// console.log(x <= y);

// console.log("Test 6: Is x greater than or equal to y? I predict False.");
// console.log(x >= y);

// let isSunny = true;
// let isRaining = false;

// console.log("Test 7: Is it sunny and not raining? I predict True.");
// console.log(isSunny && !isRaining);

// console.log("Test 8: Is it either sunny or raining? I predict True.");
// console.log(isSunny || isRaining);

// let number = 42;

// console.log("Test 9: Is the number greater than 50 or less than 20? I predict False.");
// console.log(number > 50 || number < 20);

// console.log("Test 10: Is the number between 40 and 50 (inclusive)? I predict True.");
// console.log(number >= 40 && number <= 50);



// Q24
// // Tests for equality and inequality with strings
// let fruit1 = 'apple';
// let fruit2 = 'banana';

// console.log("Test 11: Are fruit1 and fruit2 equal? I predict False.");
// console.log(fruit1 == fruit2);

// console.log("Test 12: Are fruit1 and fruit2 not equal? I predict True.");
// console.log(fruit1 != fruit2);

// // Tests using the lowercase function
// let text = 'Hello, World!';
// let lowercaseText = text.toLowerCase();

// console.log("Test 13: Is lowercaseText equal to 'hello, world!'? I predict True.");
// console.log(lowercaseText == 'hello, world!');

// // Numerical tests
// let num1 = 10;
// let num2 = 20;

// console.log("Test 14: Is num1 less than num2? I predict True.");
// console.log(num1 < num2);

// console.log("Test 15: Is num1 greater than or equal to num2? I predict False.");
// console.log(num1 >= num2);

// // Tests using "and" and "or" operators
// let isMorning = true;
// let isWeekend = false;

// console.log("Test 16: Is it morning and a weekend? I predict False.");
// console.log(isMorning && isWeekend);

// console.log("Test 17: Is it morning or a weekend? I predict True.");
// console.log(isMorning || isWeekend);

// // Test whether an item is in an array
// let colors = ['red', 'green', 'blue'];

// console.log("Test 18: Is 'green' in the colors array? I predict True.");
// console.log(colors.includes('green'));

// // Test whether an item is not in an array
// console.log("Test 19: Is 'yellow' not in the colors array? I predict True.");
// console.log(!colors.includes('yellow'));


// Q25

// let alien_color:string[] = ["Green","Yellow","red"]
// let i = 0
// if (alien_color[i]=="Green"){
//     console.log("The player just earned 5 points")
// }
// else
// {console.log("No output")}

// Q26

// let alien_color:string = "Black"
// let i = 0

// if(alien_color=="green"){
//     console.log("The player just earned 5 points")
// }
// else{
//     console.log("The player just earned 10 points")
// }

// Q27

// let alien_color:string[] = ["green","yellow","red"]
// let i = 0

// if(alien_color[i]=="green"){
//     console.log("The player just earned 5 points")
//     i = i+1
//      if(alien_color[i]=="yellow"){
//     console.log("The player just earned 10 points")}
//     i = i+1
//     if(alien_color[i]=="red"){
//     console.log("The player just earned 15 points")}
// }


// Q28

// let person_age:number = 22

// if(person_age<2){
//     console.log("The person is baby")
// }
// else if(person_age>=2 && person_age<4){
//     console.log("The person is toddler")
// }
// else if(person_age>=4 && person_age<13){
//     console.log("The person is a kid")
// }
// else if(person_age>=13 && person_age<20){
//     console.log("The person is a teenager")
// }
// else if(person_age>=20 && person_age<65){
//     console.log("The person is adult")
// }


// Q29 

// let fav_fruits:string[] =["Banana","Mango","Apple"]

// for(let i =0;i<fav_fruits.length;i++){
//     console.log("You really like",fav_fruits[i])
// }


// Q30

// let userNames:string[] = ["Zain","Administrator","admin","Haseeb"]

// for(let i=0;i<userNames.length;i++){
//     if(userNames[i]=="admin"){
//         console.log("Hello Admin,Would you like to see a status report?")
//     }
//     else{
//         console.log("Hello",userNames[i],"Thank you for logging in again")
//     }
// }

// Q31

// let userNames:string[] = []

// if(userNames.length===0){
//     console.log("We have to find some users")
// }

// Q32

// let current_users:string[] = ["Zain","Abdaal","Hassan","Nawaz","Mohsin"]
// let new_users:string[]=["Abdaal","Mohsin","Moeed","Naeem","Hasnat"]

// for(let i =0;i<new_users.length;i++){
//     let userName = true
//     for(let j=0;j<current_users.length;j++){

//     if(new_users[i]===current_users[j]){
//         userName = false
//         break
//     }   
// }

//     if(userName){
//         console.log("The username is available",new_users[i])
//     }
//     else{
//         console.log("The person will need to enter new username",new_users[i])
//     }
// }

// Q33

// let OrdinalNumbers:number[]=[1,2,3,4,5,6,7,8,9]
// for(let i=0;i<OrdinalNumbers.length;i++){
//     let number = OrdinalNumbers[i];
//     let suffix = "";
//     if(number==1){
//         suffix ="st";
//     }else if(number==2){
//         suffix = "nd";
//     }else if(number==3){
//         suffix ="rd";
//     }
//     else{
//         suffix ="th"
//     }
//     console.log(number + suffix)
// }

// Q34

// let pizza:string[]=["Kabab","Italian","Fajjita"]

// for(let i=0;i<pizza.length;i++){
//     console.log("I like",pizza[i],"Pizza")

// }
// console.log("I really like pizza")

// Q35
// let animals:string[]=["Dog","Cat","Rabbit"]

// for(let i=0;i<animals.length;i++){
//     console.log(animals[i],"would make a great pet")
// }
// console.log("Any of these animals would make a great pet")

// Q36

// function make_shirt(size:number,msg:string){
//     console.log(`You have ordered ${size} sized shirt with the message: "${msg}".`)
// }

// make_shirt(22,"Hey man")

// Q37

// function make_shirt(size:string="large",msg:string="I love TypeScript"){
//     console.log(`You have ordered ${size} sized shirt with the message: "${msg}".`)
// }

// make_shirt();

// make_shirt("medium");
// make_shirt("small","TypeScript is awesome")

// Q38
// function describe_city(city:string,country:string="Defuakt Country"){
//     console.log(`${city} is in ${country}`)

// }

// describe_city("Jhang","Pakistan")
// describe_city("New York")
// describe_city("London","United Kingdom")

//Q39

// function city_country(city:string,country:string){
//     return `${city},${country}`;
// }

// const city1 =city_country("jhang","Pakistan")
// const city2 =city_country("Washington","USA")
// const city3= city_country("Delhi","India")

// console.log(city1)
// console.log(city2)
// console.log(city3)

// Q40

// function makeAlbum(artist:string,albumTitle:string,AlbumTracks:number){
//     let Obj = {
//         artist,
//         albumTitle,
//         AlbumTracks
//     }
//     return Obj
// }

// console.log(makeAlbum("Zain","Disco",12))
// console.log(makeAlbum("Michael","Die hard",15))
// console.log(makeAlbum("John","Native American",19))

// Q41

// let magicians:string[] =["Harry","Gandalph","Hobbit"]

// function showMagicians(magic:string[]){
//     console.log(magic)

// }

// showMagicians(magicians)


// Q42

// let magicians:string[] =["Harry","Gandalph","Hobbit"]

// function makeGreat(dark:string[]){
//     for(let i=0;i<dark.length;i++){
//         console.log("Great: ",dark[i])
//     }

// }

// makeGreat(magicians)

// Q43

// let magicians:string[] =["Harry","Gandalph","Hobbit"]

// function makeGreat(dark:string[]){
//     console.log(magicians)
//     for(let i=0;i<dark.length;i++){
//         console.log("Great: ",dark[i])
//     }

// }

// makeGreat(magicians)

// Q44

// function makeSandwich(items:string[]){
//     console.log("This Sandwich has these ingredients: ",items)

// }

// makeSandwich(["onion","ketchup","mayo"])
// makeSandwich(["egg","sauce","piaz"])
// makeSandwich(["meat","chicken sauce","bread-freeze"])

// Q45  

// interface Car {
//     manufacturer: string,
//     model: string,
//     [key: string]: any
// }

// function makeCar(manufacturer: string, model: string, options?: Partial<Car>): Car {
//     const newCar: Car = {
//         manufacturer,
//         model,
//         ...options,
//     };
//     return newCar;
// }

// const myCar = makeCar("Toyota", "Camry", {manufacturer: "Toyota",
// model: "Camry",color: "blue",year: 2022,features: ["GPS", "SunRoof"]}
// );

// console.log(myCar);








































   



