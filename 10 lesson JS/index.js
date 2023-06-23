// const obj = {
//     name: 'suhrob',
//     age: 30,
//     date: '15/09/2023'
// }
// let res = []
// const {log}  = console 
//     for(let item in obj){
//         res.push([item,obj[item]])
//     }
// console.log(res);


// uy ishi 2 masala 9 dars
// function includes(array,searchElement) {
//     let result = false
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]===searchElement) {
//             result = true
//         }
//     }
//     return result
// }
// const arr = [1,2,3,4,5,5,6,7]
// console.log(includes(arr,7));



// uy ishi 4 masala 9 dars
// function foo(ketmon) {
//     return ketmon[0]=== ketmon[ketmon.length-1]
// }

// const arr = [1,2,3,4,5] 
// console.log(foo(ketmon))


// 6 masala.
// const kitob1 = {
//     title:'otkan kunlar',
//     author: 'abdulla qodiriy',
//     readingStatus:true
// }
// const kitob2 = {
//     title:'yulduzli tunla',
//     author: 'abdulla qodiriy',
//     readingStatus:true
// }
// const kitob3 = {
//     title:'poor dad rich dad',
//     author: 'george simuel',
//     readingStatus:false
// }

// const kitoblar = [kitob1,kitob2,kitob3]
// for (const book of kitoblar) {
//     console.log(`
//     kitob nomi: ${book.title}
//     kitob muallifi: ${book.author}
//     oqilganmi: ${book.readingStatus ? 'ha' : 'yoq'}
//     `);
// }



// const kitoblar = [
//     {
//         title:'otkan kunlar',
//         author: 'abdulla qodiriy',
//         readingStatus:true 
//     },
//     {
//         title:'poor dad rich dad',
//         author: 'george simuel',
//         readingStatus:false  
//     },
//     {
//         title:'poor dad rich dad',
//         author: 'george simuel',
//         readingStatus:false  
//     }
// ]





// const person = {
//     firstName: 'suhrob',
//     lastName: 'abdumalikov',
//     showInfo: function () {
//         console.log(`username: ${this.firstName} \nuserning familiyasi: ${this.lastName}`)
//     },
// }
// const person1 = {
//     firstName: 'assi',
//     lastName: 'rahimov',
//     showInfo: function () {
//         console.log(`username: ${this.firstName} \nuserning familiyasi: ${this.lastName}`)
//     },
// }
// const perso2 = {
//     firstName: 'ulugbek',
//     lastName: 'aliqulov',
//     showInfo: function () {
//         console.log(`username: ${this.firstName} \nuserning familiyasi: ${this.lastName}`)
//     },
// }





// baza yaratish ism va familiya kiritsak baza obj qilib yaratib beradi.
// ikkinchi usul

// function personalInfo(ismi,familiyasi) {
//     this.firstName = ismi
//     this.lastName = familiyasi
//     this.showInfo = function () {
//                 console.log(`username: ${this.firstName} \nuserning familiyasi: ${this.lastName}`)
//             }
// }

// const person = new personalInfo ('suhrob','abdumalikov')
// console.log(person);
// person.showInfo() 




// function objCreator(firstName,lastName) {
//     const obj = {}
//     obj.firstName = firstName
//     obj.lastName = lastName
//     obj.showinfo = function () {
//                         console.log(`username: ${this.firstName} \nuserning familiyasi: ${this.lastName}`)
//                     }
// }

// const person = objCreator('suhrob',)




const contact = [
    {
        firstName: 'suhrob',
        lastName: 'Abdumalikov',
        phoneNumber: '99-749-07-54',
        userName: '@abdumal1cow77',
        bio: 'TenX Coder :)',
        isActive: false,
    },
    {
        firstName: 'Assi',
        lastName: 'Rustamov',
        phoneNumber: '91-911-00-28',
        userName: '@_rustamov__7',
        bio: 'i"am relly into are powerlifting',
        isActive: false,
    },
    {
        firstName: 'ulugbek',
        lastName: 'Alikolov',
        phoneNumber: '91-581-74-77',
        userName: '@al1kulovv_7',
        bio: 'instasiz hayot yoq',
        isActive: true,
    }
]

// function personalInfo(contact) {
//     this.firstName
//     this.lastName
//     this.phoneNumber
//     this.userName
//     this.bio
//     this.isActive ? '10:30' : 'last seen recently'
// }
// const myContacts = 


// console.log(Object.keys(contact))













