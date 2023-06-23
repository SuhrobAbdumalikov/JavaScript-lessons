// const n=0
// const b= n || 20
// console.log(b)


// const n=10
// const b='12345678'
// const c= b*n
// console.log( (c=='nan') ?  'kopaytiraolmayman' : c ) 




 //================= Math ========================

//const d = Math.abs('-1aa4') // Modul uchun
//console.log(d)

//console.log(Math.sqrt(n))  // ildiz hisoblash uchun
 
//const a = Math.pow(5, 5)  // daraja hisoblah uchun
//console.log(a)

//console.log(Number.MAX_SAFE_INTEGER)  // JS dagi eng katta xafsiz son
 
//console.log(Number.MIN_SAFE_INTEGER) // JS dagi emg kichik xafsiz son

//console.log(Math.floor(a)) // integer tipiga otkazish uchun 

//console.log(Math.ceil(a)) // sonni yuqoriga qarab yaxlitlaydi => 12.5 = 13

//console.log(Math.trunc(a)) // sonni faqat butun xolatnini qaytaradi. => 7.8 = 7

//console.log(Math.round(a)) // 0.5 dan pasni yoki undan kattasini yaxlitlaydi. => 12.4=12 (or) 12.6 = 13

//const PI = 3.14
//console.log(Math.PI) // bunig toliq qiymatini chiqarish uchun 

//console.log(Math.floor(Math.random() * 100)) // tasodifiy sonlarni chiqarish uchun.



//fasl

// const n=4
// switch (n) {
//     case 1:
//         console.log('bahor');
//         break;
//     case 2:
//         console.log('yoz');
//         break
// case 3:
//     console.log('kuz');
//     break
//     case 4:
//         console.log('qish');
//         break
//     default:
//         console.log('bunaqa fasl yoq');
//         break;
// }



// ============  Function declaration

// sayHello()

// function sayHello() {

//   console.log('say hello');

// } 


// ============  function expression
// Tepada chaqirsak error beradi bunaqa chaqirmang e'lon qilingandan keyin chaqiring

// let sayHello = function (a) {
//   return a + 10
// }
// console.log(sayHello(20))

// sayHello()



// ============  Arrow function

let sayHello = a => a + 10

console.log(sayHello(20))
(function () {
  console.log('hello world')
})()


// oy

// const a=12
// switch (a) {
//     case 1:
//         console.log('yanvar');
//         break
//     case 2:
//         console.log('fevral');
//         break
//     case 3:
//         console.log('mart');
//         break
//     case 4:
//         console.log('aprel');
//         break
//     case 5:
//         console.log('may');
//         break
//     case 6:
//         console.log('iyun');
//         break
//     case 7:
//         console.log('iyul');
//         break
//     case 8:
//         console.log('avgust');
//         break
//     case 9:
//         console.log('sentabr');
//         break
//     case 10:
//         console.log('oktabr');
//         break
//     case 11:
//         console.log('noyabr');
//         break
//     case 12:
//         console.log('dekabr');
//         break
//     default:
//         console.log('bunaqa oy yoq');
//         break;
// }


//3 ielts

// const a=9

// switch (a) {
//     case 1:
//         console.log('yomon');
//     case 2:
//         console.log('yomon');
//     case 3:
//         console.log('yomon');
//     case 4:
//         console.log('yomon');
//         break
//     case 5:
//         console.log('yaxshi');
//     case 6:
//         console.log('yaxshi');
//         break
//     case 7:
//         console.log('a"lo');
//     case 8:
//         console.log('a"lo');
//     case 9:
//         console.log('vapshe udar');
//         break;
//     default:
//         console.log('bunaqa band yoq');
//         break;
// }



//4 1 > 100

// const n=56
// let bir=n%10
// let on=parseInt(n/10)
// let mix=0
// let mix2=0
// switch (bir) {
//     case 1:
//         mix='bir'
//         break;
//     case 2:
//         mix='ikki'
//         break;
//     case 3:
//         mix='uch'
//         break;
//     case 4:
//         mix='tort'
//         break;
//     case 5:
//         mix='besh'
//         break;
//     case 6:
//         mix='olti'
//         break;
//     case 7:
//         mix='yetti'
//         break;
//     case 8:
//         mix='sakkiz'
//         break;
//     case 9:
//         mix='toqqiz'
//         break;

//     default:
//         break;
// }


// switch (on) {
//     case 1:
//         mix2='on'
//         break;
//     case 2:
//         mix2='yigirma'
//         break;
//     case 3:
//         mix2='ottiz'
//         break;
//     case 4:
//         mix2='qirq'
//         break;
//     case 5:
//         mix2='ellik'
//         break;
//     case 6:
//         mix2='oltmish'
//         break;
//     case 7:
//         mix2='yetmish'
//         break;
//     case 8:
//         mix2='sakson'
//         break;
//     case 9:
//         mix2='toqson'
//         break;

//     default:
//         break;
// }

// console.log(mix2, mix);