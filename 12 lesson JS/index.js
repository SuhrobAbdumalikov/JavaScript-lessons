// 12 lesson JS\

//1=========================================================
// const arr = ["hello world"]
// let newWord = ""
// function word(arr) {
//     for (let i = 0; i < arr.length; i++) {
//          newWord = arr[i].split("").reverse().join("")
//     }
//     return newWord
// }
// console.log(word(arr))

//2====================================================
// const str = 'aBcDF'
// let word = ""
// function Upper(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i]===str[i].toUpperCase()) {
//             word += str[i].toLowerCase()
//         }else{
//             word +=str[i].toUpperCase()
//         }
//     }
//     return word
// }
// console.log(Upper(str));

//3=========================================================
// const str = "hello hello world hello";
// let word = "";
// let arr = str.split(" ");
// function deleteWords(str) {
//   word = str.replaceAll("hello", "");
//   return word;
// }
// console.log(deleteWords(str));


//  2 usuli
// function foo(string) {
//   let result = {}
//   let res = ''
//   for (let i = 0; i < string.length; i++) {
//      if (result[string[i]]) {
//     result[string[i]] = result[string[i]] + 1
//   } else {
//     result[string[i]] = 1
//   }
//   }

//   for (const key in result) {
//     if (result[key] === 1) {
//       res += key
//     }
//   }
//   return res
// }

// console.log(foo('Helllllo'))


//4======================================================
// const str = "bscdfhhjrewza"
// let newStr = ""






// 12 lesson Number ======================================================================================
// try catch bundan juda ham kop foydalanmaymiz chunki bu bizga dastur sekin ishlahsga ta'sir qiladi.

// function fee(str) {
//     try{
//         return str.substr(0,5)
//     }catch{
//         // console.log(err)
//         return 'Assalomu alykum siz xato qildingiz tushunyapsizmi !'
//     }
// }

// console.log(fee(5))




// sugar of JavaScript=========================================================
// function fee({firstName,lastName,age}) {
//     console.log(`Name: ${firstName}, SurName: ${lastName}, Your Age: ${age}`)
// }

// const person = {
//     age: 20,
//     firstName: 'suhrob',
//     lastName: 'abdumalikov'
// }

// fee(person) 



// bu bizga kodimizga qisqartirish uchun.=======================================
// function fee(firstName,lastName) {
//     return {firstName: firstName, lastName: lastName}
// }

// const {firstName,lastName} = fee('suhrob','abdumalikov')
// console.log(firstName,lastName)





//masala loop ni sindirish===========================================
//  birinchiLoop :for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log('salom dunyo')
//         break birinchiLoop
//     }
//     console.log('hello world')     
// } 



// 5 talik random sonlar.=========================================
// function Random() {
//    return Math.floor(10000+Math.random()*90000) 
// }
// console.log(Random())
