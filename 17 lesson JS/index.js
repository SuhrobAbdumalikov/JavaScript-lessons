'use string'

// 17 lesson JS
// functions================================>>


//1 masala.
// const arr = [1,1,1,3,2,2,2,]
//     let map = new Map()
//     for (let item of arr) {
//         map.set(item, map.get(item) +1 || 1)
//     }

//     map.forEach((val,key) =>{
//         if (val==1) {
//             console.log(key);
//         }
//     }) 


//2 masala
//agar ber target arr inchida mavjud bolsa uning indexmi qaytarsin. aks holatda uni joylashtirsh mumkn bolga ntextni qaytarig. aar har doim

//1=====>
// const arr = [1,3,5,6]
// let num = 7
// const idx = arr.indexOf(num)
// if (idx !== -1) {
//     console.log(idx);
// }else{
//     arr.push(num)
//     let newArr = arr.sort((a,b) => a-b)
//     console.log(newArr.indexOf(num));
// }


//2 usul
// function doo(arr,num) {
//     for (const i of arr) {
//         if (arr[i] >= num) {
//             return i
//         }
//     }
//     return arr.length
// }
// console.log(doo(arr,num));


//masala.
// const str = 'is2 book4 this1 a3'
// let newStr = ''
// // let newStrSort = 
// function sortStrNum(string){
//    newStr = string.split(" ")
//    return newStr 
// }
// console.log(sortStrNum(str)); 

//masala sozlarni ichidagi sonlarga qarab chiqarib berish.==========================>>

    //Sozlar ichida son bolsa soning raqamiga qarab joylashtirish.
// const str = 'is2 book4 this1 a3'
// const res = {}
// const arr = str.split(" ")

// for (let i =0; i< arr.length; i++) {
//     let str2 = ''
//     let currentNumber = ''
//     for (let j=0; j<arr[i].length; j++) {
//         if (isNaN(arr[i][j])) {
//             str2+=arr[i][j]
//         }else{
//             currentNumber = arr[i][j]
//         }
//     }
//     res[currentNumber] = str2
// }
// console.log(res);
// const result = Object.values(res).join(" ")
// console.log(result);

//================================================================================<<

//masala.
// const doo = (obj) =>{
//     return Boolean(Object.keys(obj).length)
// }
// console.log(doo({}))

