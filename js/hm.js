

// 1)
// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
// let a=4;
// let b=4;
// if(a===b){
// console.log(3 * (a+b))
// }else{
//     console.log("value are not the same")
// }

// 2)
// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
// let k=25;
// let e=50;
// if((k===50) || (e===50) || (k+e === 50)){
//   console.log(true)
// }else{
// console.log(false)
// }
// 3)
// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
// let st = 'hello'
// let a =  st.split('')
// a.splice(3,1)
// console.log(a)

// 4)
//  Write a JavaScript program to find the largest of three given integers.
// let a=10
// let b=40
// let c=60
// let ma =Math.max(a,b,c)
// console.log(ma)
// 5)
// Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
// let a=50;
// let b=65;
// if((a>40 && a<60)&&(b>40 && b<60)){
//     console.log("They are in range of 40 and 60")
// }else if((a>70 && a<100)&&(b>70 && b<100)){
//     console.log("They are in range of 70 and 100")
// }else{
//     console.log("Out of range")
// }
// 6) 

// Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
// let a = "4"

// if (a > 0){
//    console.log(a.repeat(4))
// }else{
//     console.log(false)
// }


// 7)
// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
// let  a = "Losangelos"
// let b = "NewYork"
// if(a.substring(0,2).localeCompare("Los") || b.substring(0,2).localeCompare("New")){
// console.log(a + " " + b)
// }else{
//     console.log("")
// }
// 8)
// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
// let a =[500 , 102 ,200]
// let b=0;
// b= a[0] + a[1] +a[2]
// console.log(b)

// 9)
// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3. 
// let a =[1 ,3 ,  6]
//   if ((a.includes(1)) || (a.includes(3))){
// console.log(true)
// }else{
//     console.log(false)
// }

// 10)

// Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3
// let a =[4 ,2 ,  6]
//   if (!a.includes(2) || !a.includes(4)){
// console.log(true)
// }else{
//     console.log(false)
// }
// 11)

// Write a JavaScript to find the longest string from a given array of strings.
// let a = ["hello" , "more" , "football" ]
// let len = 0;
// let longest;

// for(let i=0; i < a.length; i++){
//     if(a[i].length > len){
//          len = a[i].length;
//         longest = a[i];
//     }      
// } 

// console.log(longest)
// // 12)

// Write a JavaScript program to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.
// function angle(angle1) {
//     if(angle1 < 90) {
//       return "Acute angle.";
//     }else  if(angle1 === 90) {
//       return "Right angle.";
//     }else if(angle1 < 180) {
//       return "Obtuse angle.";
//     }else{ return "Straight angle.";
// }

// }
  
//   console.log(angle(47))
//   console.log(angle(90))
//   console.log(angle(145))
//   console.log(angle(180))

// 13)

// Write a JavaScript program to find the index of the greatest element of a given array of integers
// let a = [2 , 5 , 7 , 14 , 6 ,8]
// let len = 0;
// let num=0;

// for(let i=0; i < a.length; i++){
//     if(a[i] > len){
//          len = a[i];
//          num = i;
//          }      
// } 
// console.log(len)
// console.log(num)
// 14)

// Write a JavaScript program to get the largest even number from an array of integers.
// let a = [2 , 5 , 7 , 14 , 6 ,8]
// let len = 0;
// let num=0;

// for(let i=0; i < a.length; i++){
//     if( a[i]% 2 === 0){
//         if(a[i]>len){
//      len = a[i]
//         }         
//     }      
// } 
// console.log(len)

// 15)

// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
// let a = 8;
// let b = 42;
// if (a===50 || b ===50 || a+b === 50){
// console.log(true)
// }else{
//     console.log(false)
// }
// 16)

// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
// let a=-10;
// let b=10;


// Write a JavaScript program to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
// let a = "hello";
// let b = a.substring(0,3).toLowerCase() + a.substring(3).toUpperCase();
// console.log(b)

// 18)

// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
// function hell(put){
//     if((put>50) && (put<80)){
//   console.log("65")
// }else{
//    console.log("80")
// }
// }
// console.log(hell(70));
let a = 15;
let b =2;
let c = a % b;
console.log(c)
// 19)

// Convert a number to a string, the contents of which depend on the number's factors.

// If the number has 3 as a factor, output 'Pling'.
// If the number has 5 as a factor, output 'Plang'.
// If the number has 7 as a factor, output 'Plong'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// In raindrop-speak, this would be a simple "Plong".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has four factors: 1, 2, 17, and 34.
// In raindrop-speak, this would be "34".

// 20)
// Convert a phrase to its acronym, like Portable Network Graphics to its acronym (PNG).


