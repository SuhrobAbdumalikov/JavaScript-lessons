// string

// let str = new String('hello world')
// let str1 = 'hello world'
// console.log(str.valueOf() === str1)


//1 masala
// const str = 'salom ahmoq sen jinni misan'
// const bad_words = {
//     ahmoq: 'ahmoq',
//     jinni: 'jinni'
// }

// function foo(str,badWords) {
//     const arr = str.split(' ') 
//     let result = ''
//     for (let i = 0; i < arr.length; i++) {
//         if (badWords[arr[i]]) {
//             let newWord = ''
//             for (let j = 0; j < badWords[arr[i]].length; j++) {
//                 newWord += '*'
//             }
//             result += ' '+newWord + ' '
//         }
//     }
// }



// 2 masala
// const text = ['hammag salom bugun sizlar bilan @kun.uz saytiga sayohat qilamiz https://kun.uz']
// let newHashtag = ""
// function getHashtags(){
//     for (let i = 0; i < text.length; i++) { 
//         if (text[i]) { 
//             newHashtag = text[i].includes('@')  
//         }else {
//             newHashtag = text[i]  
//         }
//     }
// }
// console.log(getHashtags(text)) 




// let fact = 1
// let arr = []
//     for (let i = 1; i <=5; i++) {
//         fact *=i 
//         arr[i-1] = fact
//         console.log(fact)   
//     }
// console.log(arr) 

// bu holatda biz 3 ta nuqta bilan objning ichiga sochib tashlaymiz.
// const obj = {
//     ...arr
// }
// console.log(obj)