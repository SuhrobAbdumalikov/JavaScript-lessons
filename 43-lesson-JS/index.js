//generic functions ==============>>
// function * foo(){
//     let a = 10;
//     yield a++;
//     yield a++;
//     yield a++; // return orniga ishlatamiz...
// }
// const gen = foo();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// big int =============>>
// const a = 1n;
// const b = 1;

// // console.log(typeof a);
// if (a === b) {
//     console.log('hello world');
// } else {
//     console.log('salom dunyo');
// }

const a = new Promise((resolve, reject) => {
  resolve("hello world");
  // reject('error');
});

const b = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello world 2");
  }, 2000);
  // reject('error');
});

// //=========>> promise all <<==============//
// Promise.all([a,b]).then((data) => {
//     data.forEach((e) => {
//         console.log(e);
//     })
// })

// //========>> promise allSettled <<===========//
// Promise.allSettled([a,b,]).then(data => console.log(data))

// //========>> promise race <<============//
// Promise.race([a,b]).then(data => console.log(data));

// Promise.any([a,b]).then(data => console.log(data));

// const api = 'https://jsonplaceholder.typicode.com/todos/1';


//=======>> allsetled fetch <<==========//
// Promise.allSettled([
//   fetch("https://jsonplaceholder.typicode.com/tod0os").then(data => data.json()),
// ]).then((res) => {
//   console.log(res);
// });

// ====>> all fetch bilan <<=============//
// Promise.all([fetch('https://jsonplaceholder.typicode.com/todos').then(data => data.json()),]).then(data => console.log(data));
