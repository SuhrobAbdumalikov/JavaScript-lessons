'use strict'

// high order function
const arr = [1,2,3,4,5]

function qoshish(value) {
    return value+2
}

function ayirish(value) {
    return value-2
}

function kopaytirish(value) {
    return value*2
}

function customMap(callbackfunction) {
    const res = []
    for (let i = 0; i < array.length; i++) {
        res.push(callbackfunction(this[i]))        
    }
    return res
}

// ?Array.prototype.customMap = customMa

// console.log(customMap(arr,qoshish));
// console.log(customMap(arr,ayirish));
// console.log(customMap(arr,kopaytirish));

// const res = arr.map(kopaytirish)
// const res1 = arr.customMap(kopaytirish)

// console.log(res);
// console.log(res1);


//masala.
// const arr = [1,1,1,2,2,3,5,5,5,5]

// const map = new Map()

// for (const el of arr) {
//     map.set(el, map.get(el)+1 || 1)
// }

// const unic = new Set(map.values())
// console.log(map.keys());
// console.log(unic.values());

// console.log(unic.size === map.size);



// const arr = [10,2,3,5,12]

// function foo(value) {
//     return value % 2 == 0
// }

// const filteredValue = arr.filter(foo)

// console.log(filteredValue);



// let text = 'Assalomu alaykum'
// function foo(acc,curr) {
//     acc[curr] = acc[curr] + 1 || 1

//     return acc
// }

// let result = text.split('').reduce(foo, {})
// console.log(result);


//masala.
// const users = [
//     {
//         firstName: 'suhrob',
//         lastName: 'abdumalikov',
//         age: 20,
//     },
//     {
//         firstName: 'suhrob',
//         lastName: 'abdumalikov',
//         age: 18,
//     },
//     {
//         firstName: 'suhrob',
//         lastName: 'abdumalikov',
//         age: 48,
//     },
//     {
//         firstName: 'suhrob',
//         lastName: 'abdumalikov',
//         age: 21,
//     }
// ]

//filtr bilan
// const army = users.filter((item) => item.age>=18 && item.age<=22)
// console.log(army);  


// reduce bilan
//  const army = users.reduce((acc,val) => {
//     if (val['age']>=18 && val['age']<=22) acc.push(val);
//     return acc
// },[] )
//  console.log(army); 