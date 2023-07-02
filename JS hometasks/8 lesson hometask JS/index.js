// 1 misol

// 1.sizga array berilgan. nums = [1,2,3,4]
// shu arrayni [1,3,6,10] shu shaklda qaytarib bering
// Tushuntirish: [1, 1+2, 1+2+3, 1+2+3+4].

// Tushuntirish: nums = [1,1,1,1,1] => [1,2,3,4,5] Sababi: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]

// Tushuntirish: nums = [3,1,2,10,1] => [3,4,6,16,17]

//1 misol ishlanishi.
// const nums = [1,2,3,4]
// let sum = []
// for (let i = 0; i < nums.length; i++) {
//     if(sum==""){
//         sum[i]=nums[i]
//     }else{
//         sum[i]=nums[i]+nums[i-1]
//         nums[i]=nums[i]+nums[i-1]
//     }
// }
// console.log(sum);

//2 misol.

// 2.Gaplardan iborat array berilgan. shu gaplar orasidan eng uzun gapdagi so'zlar sonini chiqazing
// ["alice and bob love google", "i think so too", "this is great thanks very much"]
// "alice and bob love google" => 5 ta so'z
//  "i think so too" => 4 ta so'z
// "this is great thanks very much" => 6 ta so'z
// result 6

//2 mison ishlanishi. 1-usul
// let count = 0
// function foo(sentence) {
//     for (let i = 0; i < sentence.length; i++) {
//         let word = sentence[i].split()
//         let wordcount = word.length
//         if (wordcount > count) {
//             count = wordcount
//         }else{
//             return count
//         }
//     }
// }
// let sentence = ["alice and bob love google", "i think so too", "this is great thanks very much"]
// let result = foo(sentence)
// console.log(result)

// 2- usul.
// const logWords = ["alice and bob a think love google", "i think so too", "this is great thanks very much"]
// let a = ""
//  for (let i = 0; i < logWords.length; i++) {
//       if (logWords[0]>logWords[1]&&logWords[0]>logWords[2]) {
//         a = logWords[0]
//       }else if(logWords[1]>logWords[2]){
//         a = logWords[1]
//       }else{
//         a = logWords[2]
//       }
// }
// console.log(a);

// 2 misol
// const logWords = ["alice and bob love google think", "i think so too", "this is great thanks very much"]
// let a = ""
// let count = 0
//  for (let i = 0; i < logWords.length; i++) {
//     a = logWords[i].split()
// }
// console.log(a)

// 3 misol
// 3.Parametr sifatida bitta gap va son qabul qiladigan function yarating, gapdagi so'zlar sonini berilgan songa qarab qisqartiring.
// masalan => gap = "Hello how are you Contestant", son = 4, result => "Hello how are you"
// masalan => gap = "What is the solution to this problem", son = 4, result => "What is the solution"
// masalan => gap = "chopper is not a tanuki", son = 5, result => "chopper is not a tanuki"

// const arr = "Hello how are you Contestant"
// let count = 0
// function strNumber(arr,value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]==" ") {
//             count+=1
//         }
//         if (value==count) {
//             return arr.slice(0,i)
//         }
//     }
// }
// console.log(strNumber(arr,4))

// let a=0.1
// let b=0.2
// console.log(a+b==0.3)

// function add(arr,arr1) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr[i+1]=arr[i]
//     }
//     arr[0]=arr1
//     return arr
// }
// const arr = [1,2,3,4,5]
// let arr1 = []
// console.log(add(arr,122));
// console.log(add(arr,12))

// const vazn = [60, 100, 45];
// ism = ["john", "bola", "doe"];
// let obj = {};
// // for (let i = 0; i < vazn.length; i++) {
// //   obj[vazn[i]] = ism[i];
// // }
// obj[o]
// console.log(Object.values(obj));
// // obj = {
// //     name: ['john','bola','doe'],
// //     vazn: [60,100,45],
// // }
// // const {name,vazn} = obj
// // console.log(name,vazn)
// // const obj ={}
// // console.log(Object.keys(ism))
// // console.log(Object.values(vazn))
