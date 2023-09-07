// import {utils} from './module.js'
// console.log(utils);

// ===============================>>

// import {printHello,login} from './module.js';
// console.log(printHello,login);

// ==================================>>

// import {a as c} from './module.js';
// const a = 20;
// console.log(a);
// console.log(c);


// import './module.js'; //bu holatda butun boshli fayli import qilamiz shunda hamma kodlar birdaniga ishlab ketadi...

// ===================================>>
// import * as utils1 from "./module.js";//bu bizga hamma narsani utils degan nom bilan saqlab ber degan manoda ishlatiladi...
// utils1.boo(); 
// utils1.foo();
// console.log(utils1);

// ==================================>>

// import { ValidationError } from "./errors/index.js";
// const err = new ValidationError('This is Error ...');
// console.log(err);

// =================================>>
import { ValidationPhoneError } from "./phone/index.js";
const input = document.querySelector('input');
const p = document.querySelector('p');
const btn = document.querySelector('button');

const userNum = input.value;

const error = new ValidationPhoneError(userNum);
// console.log(error);


btn.addEventListener('click',() => {
    console.log(error);
    // if (input.value.length>13 && input.value.startsWith('+998')) {
    //     p.textContent = 'This is Uzb Number!';
    //     p.style.color = 'green';
    // }else{
    //     p.textContent = 'This is not Uzb Number!';
    //     p.style.color = 'red';
    // }
})