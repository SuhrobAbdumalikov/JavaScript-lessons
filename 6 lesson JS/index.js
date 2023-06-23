//Arrays 

//students phone number arrays.
// let phone = ['991330125','997570788','333150727','910718903','907470713','991321510','992900021','889698884','930037304','930425848','919031909','930352906']
// for (let i = 0; i < phone.length; i++) {
//     console.log(phone[i]);
// }


// ism va nomer together.
// let phone = [
//     ['991330125','john'],
//     ['997570788','mella'],
//     ['333150727', 'sara'],
//     ['910718903','jony'],
//     ['991321510','kara']
// ]
// for (let i = 0; i < phone.length; i++) {
//     for (let j = 0; j < 1; j++) {
//         console.log(`Person&number =${phone[i]}`);    
//     }
// }


//
// let a=0
// function foo(...number) {
//     for (let i = 0; i < number.length; i++) {  
//         a+=number[i]
//     }
//     return a
// }
// foo(1,2,3,4,5,6,7,8,9)
// const result = foo(a)
// console.log(result);

//misol
let a=[1,2,3,4,5,6,4]
function foo(tort) {
    for (let i = 0; i < tort.length; i++) {
        if(tort[i]===4){
            tort[i]=null 
        }
    }
    return a
}
let b=foo(a)
console.log(b)

// 1 usul  boshidan qoshib kelish.

// const arr=[1,2,3,4,5]
// function add(array,value) {
//     for (let i = array.length-1; i >=0; i--) {
//         array.unshift(value)
//         return array
//     }
// }
// console.log(add(arr,45));
// console.log(add(arr,55));
// console.log(add(arr,65));


//2 usul bohsidan qoshish.
// const arr=[1,2,3,4,5]
// function add(array,value) {
//     for (let i = array.length-1; i >=0; i--) {
//         array[array.length-0]=value
//         return array
//     }
// }
// console.log(add(arr,45));
// console.log(add(arr,55));
// console.log(add(arr,65));











