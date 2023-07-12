//masala 1
// const arr = [0,1,2,3,4,5]
// // let num =
// function foo(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[0]!==array[i]) {
//            return `Tashlab ketilgan son:${array[0]}`
//         }else{
//             return array
//         }
//     }
//     // return num
// }
// const res = foo(arr)
// console.log(res);

//masala 2
// const matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
// Output: [[1,2,10],[4,5,7,8]]

// const matches = [
//   [1, 3],
//   [2, 3],
//   [3, 6],
//   [5, 6],
//   [5, 7],
//   [4, 5],
//   [4, 8],
//   [4, 9],
//   [10, 4],
//   [10, 9],
// ];

// function winAndDefeat(matches) {
//     const first = {}
//     const second = {}
    
//     for (let i of matches) {
//         first[i[0]] = first[i[0]] + 1 || 1
//         second[i[1]] = second[i[1]] + 1 || 1
//     }
//     // console.log(first,second); 
//     const arr1 = Object.keys(first).filter((item) => second[item] === undefined) 
//     const arr2 = Object.keys(second).filter((item) => second[item] === 1) 
//     return [` Yutganlar: ${[arr1]}`,`1 marta Mag'lub bolganlar:${[arr2]}`] 
// }
// console.log(winAndDefeat(matches)); 


//masala 1-usul
// const arr = ['kiyik','olam','hayot','kak']
// function foo(param){
//     let newStr=""
//     for (let i=param.length-1; i>=0; i--) {
//         newStr+=param[i]
//     }
//     return newStr===param
// }

// let count = 0;
//     for (let i of arr) {
//         if (foo(i)) {
//             count++
//         }
//     }
// console.log(count);


//2-usul
// const arr = ['kiyik','olam','hayot','kak']
// const arr1 = ['kiyik','olam','hayot','kak']

// let count = 0;
// function foo(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let reverStr = arr[i].split("")
//         console.log(reverStr);
//         if (arr[i]===reverStr.reverse()) { 
//             count++;
//         }        
//     }
//     return count
// }
// console.log(foo(count));


