// 1 ta funksiya parametr funksiya sifatids ikkinchi funcksiyasg berib yuborsak parametr sifatida kirib keladi.

// function sayhello() {
//     console.log('hello')
// }

// function saybye() {
//     console.log('byee')
// }


// function foo(ketmon,salombersinmi) {
//     if (salombersinmi) {
//         ketmon()
//     }
// }


// foo(sayhello,true)





// const arr = [3,4,5,7,8,2,6,22]

// const sortedArr = arr.sort(calback)

// console.log(sortedArr)
// // agar birinchi kelayotgan parametrdan ikkinchi kelayotgan parametrni ayirsak bizga chap tomondan kichkinalaridan boshlab taxlab keladi. a-b
// // agar ikkinchi kelayotgan parametrdan birinchi kelayotgan parametrni ayirsak bizga ong tomondan kattalaridan boshlab taxlab ketdai.(b-a)
// function calback(a,b) {
//     return a - b
// }




// FILTR









/////////////////

// filtr va sort
// const contacts = [
//     {
//       name: 'Ravshan kursdosh',
//       phoneNumber: '910718903',
//       avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
//       lastActive: '10:23',
//       userName: '@ kotta_bola',
//       bio: "San o'qigan kitobni man yozganman sakrama, auf",
//       isHidePhoneNumber: false,
//       isBlocked: false,
//     },
//     {
//       name: 'Abduhakim bratishka',
//       phoneNumber: '997570788',
//       avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
//       lastActive: 'Yaqinda online edi',
//       userName: '@ vorzakon',
//       bio: '2008 larni sindirish bandasiga emas',
//       isHidePhoneNumber: true,
//       isBlocked: true,
//     },
//     {
//       name: 'O`ktam googler',
//       phoneNumber: '930425848',
//       avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
//       lastActive: '10:56',
//       userName: '@ oktam_vines',
//       bio: 'Dasturlashni o`rgansang hayotni tushunib yeta olasan',
//       isHidePhoneNumber: false,
//       isBlocked: true,
//     },
//   ]

//1
//   const unBlock = contacts.filter((contact) => contact.isBlocked !==true)
//   console.log(unBlock);

//2
//   const lastActive = [...contacts].sort((first,second) => first.lastActive.localeCompare(second.lastActive))
//   console.log(lastActive) 


//3
//   const nameSort = [...contacts].sort((firstName,secondName) => firstName.name.localeCompare(secondName.name))
//   console.log(nameSort)




// const students = [
//     {
//         name: 'suhrob',
//         istaskFinished: false,
//         price: 50,
//     },
//     {
//         name: 'assi',
//         istaskFinished: true,
//         price: 30,
//     }
// ]
//every,some
// const bugundarsOtiladimi = students.every((item) => item.istaskFinished)
// const bugundarsOtiladimi2 = students.some((item) => item.istaskFinished)
// console.log(bugundarsOtiladimi);

//map
// const newStudents = students.map((student,index,massiv) => {
//     return {...student,price:student.price+20}
// })
// console.log(newStudents);



//forEach
// students.forEach((item,index,arr) => {
//     if (item.name.length > 5) {
//         console.log(item)
//     }
// })


//find
// const studentFind = students.find((item) => item.name ==='suhrob')


// findindex => bu bizga indexni qaytarib beradi.
// const indexStudent = students.findIndex((item) => item.name ==='suhrob')


// function decloration holatda.
// const indexStudent = students.findIndex(ravshan)

// function ravshan(item) {
//     return item.name === 'suhrob'
// }

// console.log(indexStudent)



//flat => bu bizga array ichidagi arraylarni bitta qilib beradi.
// const arr1 = [1,2,3,[4,5,6,[7,8,9]]]
// const newArr = arr1.flat(Infinity)
// console.log(newArr)



//1
const students =[
    {
        id: 1,
        firstName: 'Suhrob',
        lastName: 'Abdumalikov',
        course: 'JavaScript',
        balance: 100,
        isOurStudent: true,
        tasks: [
            {
                date: '1',
                isFinished: false,
            },
            {
                date: '2',
                isFinished: false,
            },
            {
                date: '3',
                isFinished: false,
            },
            {
                date: '4',
                isFinished: false,
            },
            {
                date: '5',
                isFinished: false,
            },
        ],
        lessons: [
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: false,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: false,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            }
        ]
    },
    {
        id: 2,
        firstName: 'Javohir',
        lastName: 'Xabibov',
        course: 'JavaScript',
        balance: 100,
        isOurStudent: true,
        tasks: [
            {
                date: '1',
                isFinished: false,
            },
            {
                date: '2',
                isFinished: false,
            },
            {
                date: '3',
                isFinished: false,
            },
            {
                date: '4',
                isFinished: false,
            },
            {
                date: '5',
                isFinished: false,
            },
        ],
        lessons: [
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: false,
            }
        ]
    },
    {
        id: 3,
        firstName: 'Asilbek',
        lastName: 'Rustamov',
        course: 'JavaScript',
        balance: 10,
        isOurStudent: true,
        tasks: [
            {
                date: '1',
                isFinished: false,
            },
            {
                date: '2',
                isFinished: false,
            },
            {
                date: '3',
                isFinished: false,
            },
            {
                date: '4',
                isFinished: false,
            },
            {
                date: '5',
                isFinished: false,
            },
        ],
        lessons: [
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: false,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: false,
            },
            {
                comeLesson: false,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: false,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: false,
            }
        ]
    },
    {
        id: 4,
        firstName: 'Islom',
        lastName: 'Bekmurodov',
        course: 'JavaScript',
        balance: 100,
        isOurStudent: false,
        tasks: [
            {
                date: '1',
                isFinished: false,
            },
            {
                date: '2',
                isFinished: false,
            },
            {
                date: '3',
                isFinished: false,
            },
            {
                date: '4',
                isFinished: false,
            },
            {
                date: '5',
                isFinished: false,
            },
        ],
        lessons: [
            {
                comeLesson: true,
            },
            {
                comeLesson: false,
            },
            {
                comeLesson: false,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: false,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: false,
            }
        ]
    },
    {
        id: 5,
        firstName: 'Samandar',
        lastName: 'Boriyev',
        course: 'JavaScript',
        balance: 100,
        isOurStudent: true,
        tasks: [
            {
                date: '1',
                isFinished: false,
            },
            {
                date: '2',
                isFinished: false,
            },
            {
                date: '3',
                isFinished: false,
            },
            {
                date: '4',
                isFinished: false,
            },
            {
                date: '5',
                isFinished: false,
            },
        ],
        lessons: [
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: false,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: false,
            },
            {
                comeLesson: true,
            },
            {
                comeLesson: true,
            }
        ]
    }
]


//======================================= 1 ==> delete students ========================================
// function deleteStudents() {
//     const removeStudents = students.find((student) => {
//         if (!student.lessons[0].comeLesson <=3) {
//             student.lessons
//         }
//         return student
//     }) 
//     console.log(removeStudents)
// }     
// deleteStudents()    
//  EROR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



//============================ 2 ==> add new Student. =========================================
// function addStudent({id,firstName,lastName,course,balance}) {
//      const addingStudent = [...students,{id,firstName,lastName,course,balance}]
//      console.log(addingStudent)
// }
// addStudent({id:6,firstName:'Dilshod',lastName:'Aqiyev',course: 'JavaScript',balance:100}) 



//============================ 3 ==> end the ballance ==========================
// function endTheBallance(){
//     const endBalance = students.find((students) => students.balance !==100)
//     console.log(endBalance)
// }
// endTheBallance()



//============================== 4 ==> findNames ==================================
// function findNames({firstName}) {
//     const searchNames = students.find((item) => item.firstName === firstName )
//     console.log(searchNames)
// }
// findNames({firstName:'Javohir'})



//============================ 5 ==> left Students ==============================
// function leftStudents (){
//     const leaveStudents = students.find((student) => !student.isOurStudent)
//     console.log(leaveStudents)
// }
// leftStudents()



//================== 6 ==> updateStudents ====================
// function updateStudents({id,isOurStudent}){
//     const idStudents = students.map((studentId) => {
//         if (studentId.id == id ){
//             studentId.isOurStudent = isOurStudent;
//         }
//         return studentId
//     })
//     console.log(idStudents)
// }
// updateStudents({id:4,isOurStudent:true})



//=============== 7 ==> UserNameBallance ======================
// function userNameSurnameBallance(){ 
//     // const userNSB = students.find((item) => item.id == id) 
//     // console.log(userNSB) 
//     // const {firstName,lastName,balance} = students
//     console.log(`UsersFirstName: ${students.firstName},UsersLastName: ${students.lastName}, UsersBallance: ${students.balance}`)
// } 
// userNameSurnameBallance() 
// console.log(res)
//EROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



//================================== 8 ==> UpdateBallance ==========================
// function updateBalance({id,balance}) {
//     const newBallance = students.find((ballance) => {
//         if (ballance.id == id) {
//             ballance.balance = balance
//         }
//          return ballance
//     }) 
//     console.log(newBallance)
// }
// updateBalance({id:1,balance:200})
