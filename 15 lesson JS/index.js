// 15 lesson JS
     //map ning orniga istalgan nomni qoyishimiz mumkin
// const map = new Map()
// map.set('name','john')  // element qoshish.
// console.log(map.has('name'))  // key bor yoki yoqligini tekshirib beraddi
// console.log(map.size)  // key lar sonini hisoblab beradai nechtaligini.
// console.log(map.get('name'))  // mapning ichidagi valularni olish uchhun.
// console.log(map.keys());  //keylarni chiqarib beradi.
// console.log(map.values())  // valuelari chiqarib beradi..
// map.delete('name')  // mapning ichidagi keyni ochirish uchun foydalanamiz
// map.clear()  // mapning ichidagi hammasini ochirish.
// const res = Object.entries(map)  // bu bizga array qilib yigib beradi.
// console.log(res) 
// const newObj = Object.fromEntries(map)  // bu bizga bitta objectga olib beradi.
// console.log(newObj)

//Set bu bizga unique valularni chiqarib beraadi ya'ni bir xillarni bitta qilib olib beradi.
// const arr = ['a','b','a']
// const arr2 = ['v','b','v']
// const uniqueValue = new Set([...arr,...arr2])
// console.log(uniqueValue)

// const str = 'hello world'
// const map = new Map()
// map.set('str','hello world')
// let count =0
// function countHarf() {
//     for (let i = 0; i < str.length; i++) {
//         map.set(str[i],1)
//       map.has(str[i]) ? count++ : 1 
//     }
//     return map
// }
// console.log(countHarf(map)) 

//1usul
// for (let i = 0; i < str.length; i++) {
//     map.set(str[i], (map.get(str[i]) || 0)+1)    

//2 usul
    // if (map.has(str[i])) {
    //     const prev = map.get(str[i])
    //     map.set(str[i],prev+1)
    // }else{
    //     map.set(str[i],1)
    // }
// }



// uniqularni bittasini olish set yordamida..
// const str = 'JavaScript'
// function getUniqueValue() {
//     const uniqueValue = new Set(str)
//     let oneStr = ''
//     uniqueValue.forEach((item)=> {
//         oneStr+=item
//     });
//     console.log(oneStr)
// }
// getUniqueValue()


// let newStr = ""
// function spinWords(string){
//     const arrStr = string.split(" ")
//   for(let i=0; i<arrStr.length; i++){
//     if(arrStr[i].length>=5){
//        for (let i = string.length-1; i >=0; i--) {
//         newStr+=arrStr[i]
//        }
//     }else{
//        arrStr
//     }
//   }
//   return arrStr.join(" ")
// }
// console.log(spinWords('hello world'));


function countBy(x, n) {
    let z = [];
     for(let i=x; i<=n*x;i+=x){
       z.push(i)
     }
    return z
  }

  console.log(countBy(3,3))