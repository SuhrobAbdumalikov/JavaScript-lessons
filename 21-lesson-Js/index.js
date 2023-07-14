//21 lesson Js
// scobelar,functions,this

function showinfo() {
  console.log(`Muallifi:${this.author} \nKitob Nomi:${this.bookName}`);
}
// showinfo()

const book1 = {
  author: "Abdulla Qodiriy",
  bookName: 'O"tgan kunlar',
  // showinfo(){
  //     console.log(`Muallifi:${this.author} \nKitob Nomi:${this.bookName}`)
  // }
};

const book2 = {
  author: "Alisher Navoiy",
  bookName: "Xamsa",
  // showinfo(){
  //     console.log(`Muallifi:${this.author} \nKitob Nomi:${this.bookName}`)
  // }
};
const book3 = {
  author: "Xudoyberdi Tuxtaboyes",
  bookName: "Sariq Devni minib",
  // showinfo(){
  //     console.log(`Muallifi:${this.author} \nKitob Nomi:${this.bookName}`)
  // }
};
// book1.showinfo()
// book2.showinfo()

showinfo.call(book1);
showinfo.apply(book2);
const newShowinfo = showinfo.bind(book3); // faqat bind yangi ozgaruvchiga yuklab chiqaramiz chunki call va apply funcsiyani ozini qaytaradi bind esa yangi ozgarishlarni yangi funksiyaga yuklab jonatadi
newShowinfo();

//============================================================================================================>>

//setTimeout funksiyasi.
// function foo() {
//     console.log('hello world');
// }

// setTimeout(foo, 5000)//1-usul

// setTimeout ( () =>{
//     console.log('hello world'); // 2-usul
// })

// console.log('hello world');
// let count = 0;
// function foo() {
//     const date = new Date()
//     if (date.getSeconds() === 59) {
//         clearInterval()
//     }
// }

//1-usul
// function foo() {
//     console.log('Assalomu alaykum');
// }

// setTimeout(foo,5000)

//2-usul

// setTimeout(function (){
//     console.log("Salom");
// }, 3000)

// setInterval
// let count = 5;
// function foo() {
//     console.log('hello world');
// }

// setTimeout(foo,3000)

//=====================================================>>

// const minute = document.getElementById("minute");
// const second = document.getElementById("seconds");
// const inputRange = document.getElementById("range");
// const audio = document.getElementById("audio");
// const audios = [
//   "./audio/azim-mullahonov-shaytanat_(uzhits.net).mp3",
//   "./audio/bahodir-mamajonov-ukam-2017_(uzhits.net).mp3",
// ];

// let mins = 2
// let seconds = 59;

// minute.innerHTML = `${mins < 10 ? '0'+mins : mins}`
// second.innerHTML = `${seconds < 10 ? '0'+seconds : seconds}`

//  const intervel = setInterval(() => {

//      if (seconds === 0 && mins-1 >=0) {
//          mins = mins-1
//          seconds = 60;
//         }

//         if (seconds === 0 && mins === 0) {
//             clearInterval(intervel)
//             return
//         }
//         minute.innerHTML = `${mins < 10 ? '0'+mins : mins}`
//         seconds -=1
//         second.innerHTML = `${seconds < 10 ? '0'+seconds : seconds}`
// },100)


// let currentAudio = 0
// function nextAudio() {
//     if (!currentAudio) {
//         currentAudio = 1
//     }else{
//         currentAudio = 0
//     }
//     play()
// }

// function play() {
//     audio.src = audios[currentAudio]
//   audio.play();
// }

// function pause() {
//   audio.pause();
// }


//masala
// const str = 'daabcbaabcbc'
// const part = 'abc'
// function foo(str) {
//     const res = str.replaceAll(part, '');
//     const res2 = res.replaceAll(part,'');
//     console.log(res2);
// }
//  foo(`qolgan qismi: ${str}`)

//2-usul
// function foo(str) {
//     if (str.includes(part)) {
//         return foo(str.replaceAll(part,''))
//     }
//     return str
// }
// console.log(foo(str));


//masala
// const text = 'a1b1c1'
// function foo(){
//     const res = text.match(/[a-z]/gi).length
//     return 2**res
// }
// console.log(foo());

// var x =10;
// function foo() {
//     console.log(x);
//     var x =5
//     console.log(x);
// }
// foo() result==>5
