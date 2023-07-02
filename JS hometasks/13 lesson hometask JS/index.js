//13 lesson hometask


// students ==> ustoz 1 bilan 7 chisi chiqmadi qolgan hammasi chiqdi.
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
        lessons:[],
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
        lessons: [],
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
        lessons: [],
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
        lessons:[],
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
        lessons: [],
    }
]


//======================================= 1 ==> delete students ========================================
function deleteStudents() {
    const removeStudents = students.filter((items) => items.tasks {
        const tasks = 
    })
}     
deleteStudents()    



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