'use string'
// 10 lesson homeworks

// ===================================== [1] ================================================
// const arr = ["i want to an artist future", "i want to be programmer", "i am a student"]
// let word = ""
// let newWord = ""
// function maxWord() {
//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[0].length > arr[1].length) && (arr[0].length > arr[2].length)) {
//             word = arr[0]
//         }else if (arr[1].length > arr[2].length) {
//             word = arr[1]   
//         }else{
//             word =arr[2]
//         }
//     }
//     return newWord = word.split("").reverse().join("")
// }
// console.log(maxWord(newWord))



//============================ [2] ====================================================
// function deleteRepeatElements(repeat) {
//     for (let i = 0; i < repeat.length; i++) {
//         if(repeat[i]==='a'){
//             repeat[i]=null 
//         }
//     }
//     return repeat  
// }
// console.log(deleteRepeatElements('abcdabc')) 
// ikki chiqmadi ustoz


//==================================== [3] ======================================
// let num$ = ""
// function number$(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]==1) {
//           num$ = arr[i]=='$' 
//         } 
//     }
//     return num$ 
// }
// console.log(number$('abc1dabc')) 
// uch ham chiqmadi ustoz.


// =============================== [4] ===========================================
// function sameNum(arr) {
//   let res = arr % 10,
//     snum = 0;
//   for (let i = 0; arr != 0; i++) {
//     snum = arr % 10;
//     if (snum != res) {
//       return false;
//     }
//     arr = parseInt(arr / 10);
//   }
//   return true;
// }
// let arr = 111111111
// console.log(sameNum(arr)) 



//=============================== [5] ==================================================
// const arr = [1,2,3,4,5,6]
// let part1 = ""
// let part2 = ""
// let mainPart = ""
// function doubleArr() { 
//     for (let i = 0; i < arr.length-3; i++) {
//         part1 += arr[i] 

//         for (let j = part1-1; j < arr.length; j++) { 
//             part2 += arr[j]  
//         }
//     }
//     mainPart = part2.slice(3,6)+part1.slice(0,3)  
//     return mainPart
// }
// console.log(doubleArr(mainPart)) 


//================================ [6] =================================================
// obj1 = {
//     name: "suhrob",
//     age: 18,
//     city: "Termiz",
//     beard: true
// }
// obj2 = {
//     name: 'ulugbek',
//     age: 18,
//     city: 'Termiz',
//     beard: false
// }
// const Objects = [obj1,obj2]
// let obj = ""
// function objHave() {
//     for (const item of Objects) { 
//         if (Object.values(obj1)==Object.values(obj2)) {
//             obj = true 
//         }else{
//             obj = false
//         }  
//     }
//     return obj
// }
// console.log(objHave())  


//================================ [7] =================================================
// function isNumber(num) {
//     let number = ""
//     if ((num/num)===1) {
//         number = 'this is number :)'
//     }else{
//         number = 'this is not number :('
//     }
//     return number
// }
// console.log(isNumber(10))