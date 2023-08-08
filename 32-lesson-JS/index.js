// const arr = ['hello','world','dunyo']
// let result = [];

// function foo(words) {
//     const firstWord = words[0]
//     for (const char of firstWord) {
//         if (words.every((val) => val.includes(char))) {
//             result.push(char)
//             words = words.map((value) => value.replace(char,''))
//         }
//     }
//     console.log(result);
// }
// foo(arr)

// const words = ['eat','tea','tan','ate','nat','bat']

//1-usul
// function doo(words) {
//     const res = {}
//     for (const word of words) {
//         const sortedText = word.split('').sort().join('')
//         res[sortedText] ? res[sortedText].push(word) : res[sortedText] = [word]
//     }
// }

// doo(words)
//=========================================================>>

// function User(numbers) {
//     this._numbers=numbers
// }
// User.prototype.customReduce = function () {
//    let sum = 0;
//    for (let i = 0; i < this._numbers.length; i++) {
//         sum+=this._numbers[i]
//    }
//    return sum
// }

// User.prototype.customToString = function () {
//     return [`${this._numbers.toString(',')}`]
// }

// const user1 = new User([1,2,3])
// console.log(user1.customReduce()); 
// console.log(user1.customToString()); 


