//js ning sugar============================================> 
// const obj = Object.create({},{
//     name: {
//         value:'suhrob',
//         // enumerable: true, ==> korinishi uchun
//         // writable:true, ==> ozgartirish uchun
//         // configurable:true, ==> ochirish uchun
//     }
// })
// const res = obj.name
// console.log(obj)


// let name = 'suhrob'
// const person ={
//     name: 'assi',
//     age: 20,
//     lastActivity: {
//         date: 12,
//         task: 'homeworks'
//     },
// }

//1 ma'qul usuli.
// const {name:newName,age,lastActivity:{date,task},} = person
// console.log(age,newName,date,task) 

//2
// const {name:newName,age,lastActivity} = person
// const {date,task} = lastActivity
// console.log(date,task);

//Json ga otkazish va qaytarish=========================================================>
// const person = {
//     name: 'anvar',
//     age:30,
// }
                                      //2 qiymat   //3 qiiymat space uchun.
// const json = JSON.stringify(person,['name','age'],10) // ==> jsonga otkazish
// console.log(json)

// const obj = JSON.perse(json) // jsondan objextga otkazish
// console.log(obj);



//DATE bilan ishlash JavaScript===================================>
// const date = new Date() 

// console.log(date.getDate()) // ==> bugungi kun
// console.log(date.getDay()) // ==> hafta kunini qaytaradi.






// yil sana oy larni chiqarish.=====================================================================================================================================>
// const date = new Date()
// function moment() {
//     return {
//         format: function (param) { 
//             const weekname = ['Monday', 'Thuesday','Wednesday','Thirty','Friday','Saturday','Sunday']
//             const monthName = ['January','February','Mart','April','May','June', 'July','Augst','September','October','November','December']
//             switch (param) {
//                 case 'LT':
//                     console.log(date.getHours()+':'+date.getMinutes()+" "+'PM')
//                     break;
//                 case 'LTS':
//                     console.log(date.getHours()+':'+date.getMinutes()+":"+date.getSeconds()+" "+"PM")
//                     break
//                 case 'L':
//                     console.log((date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth())+'/'+date.getDate()+"/"+date.getFullYear())
//                     break
//                 case 'l':
//                     console.log(date.getMonth()+'/'+date.getDate()+"/"+date.getFullYear()) 
//                     break;
//                 case 'LL':
//                     console.log(monthName[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear())
//                     break
//                 case 'll':
//                     console.log(monthName[date.getMonth()].slice(0,3)+" "+date.getDate()+", "+date.getFullYear())
//                     break
//                 case 'LLL':
//                     console.log(monthName[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()+" "+date.getHours()+':'+date.getMinutes()+" "+'PM')
//                     break;
//                 case 'lll':
//                     console.log(monthName[date.getMonth()].slice(0,3)+" "+date.getDate()+", "+date.getFullYear()+" "+date.getHours()+':'+date.getMinutes()+" "+'PM')
//                     break;
//                 case 'LLLL':
//                     console.log(weekname[date.getDay()-1]+" "+monthName[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()+" "+date.getHours()+':'+date.getMinutes()+" "+'PM')
//                     break;
//                 case 'llll':
//                     console.log(weekname[date.getDay()-1].slice(0,3)+" "+monthName[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()+" "+date.getHours()+':'+date.getMinutes()+" "+'PM');
//                 default:
//                     break;
//             }
//         }
//     }
// }
// moment().format('LTS')