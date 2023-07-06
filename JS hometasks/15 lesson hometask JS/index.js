// 'use strict'

// Todo lists hometask start ===============================>>

let todo = [
    {
        id:1,
        title:'Vazifa junatishim kerak',
        isFinished: false,
    },
    {
        id:2,
        title:'Vazifa junatishim kerak',
        isFinished: true,
    },
    {
        id:3,
        title:'Vazifa junatishim kerak',
        isFinished: false,
    }
]

function addTodo({id,title,isFinished}) {
   let addingTodo = todo.fill((value) =>  value.id&&value.title&&value.isFinished)
   return addingTodo
}
function changeStatus() {
    
}
// function deleteTodo() {
//     const deleteTodo = todo.filter((item) => item.id==id)
//     return deleteTodo
// }
// function allTodo() {
// }
// function doingTasksTodo() {
// }
// function notDoingTasksTodo() {
// }

// ================================ Menu ==========================================>>
let menu = prompt(` M-E-N-U \n 1. Adding New Todo   \n 2. Change Todo Status  \n 3. Delete Todo \n 4. Watch All Todos \n 5. Task Finished Todos \n 6. Task is not Finished todes `)  

  while ( menu != 1 && menu != 2 && menu != 3 && menu != 4 && menu != 5 && menu !=6 && menu !=0){  
   menu = prompt(" Menu is not correct ❌ \n Please return again❗️");
}
    switch (menu) { 
        case '1':
            let addTd = prompt(`Doy you want to add new "Todo"  \n1 => yes  \n2 => no  \nEnter these numbers`)
            while (addTd!='1' && addTd!='2') {
             addTd  =   prompt(`Error❗️❗️❗️ \n You enter the incorrect number :( \n Please try again❗️`)
            }
            switch (addTd) {
                case '1':
                    let idTd = prompt(`Please enter the "id"`)
                    while (idTd=="") {
                        idTd = prompt(`you didn't enter the "id" \nEnter again❗️`)
                    }
                    let titleTd = prompt(`Please enter the "title"`)
                    while (titleTd=="") {
                        titleTd = prompt(`you didn't enter the "title" \nEnter again❗️`) 
                    }
                    let isFinishedTd = prompt(` If you finish task => enter the 'true \nIf you didn't finish task => enter the 'false'  `)
                    while (isFinishedTd==""||isFinishedTd!='true'&&isFinishedTd!='false') {
                        isFinishedTd = prompt(`you didn't enter the "true or false"❗️ \nOr you didn't enter anything❗️ \nEnter again❗️`) 
                    }
                    let newTD = alert([...todo,[{id:idTd,title:titleTd,isFinished:isFinishedTd}]])
                    newTD = alert(todo[3])
                    break;
                case '2':
                    confirm(`Are you sure you didn't want add new Todo`)
            }

            break;
            case '2':
                prompt()
                break;
            case '3':
                prompt(deleteTodo(alert(`if you want to delete  todo. \n  Please enter the todo "id"`))) 
                break;
            case '4':
                prompt()
                break;
            case '5':
                prompt()
                break;
            case '6':
                prompt()
                break;
            case '0':
         menu =prompt(` M-E-N-U \n 1. Adding New Todo   \n 2. Change Todo Status  \n 3. Delete Todo \n 4. Watch All Todos \n 5. Task Finished Todos \n 6. Task is not Finished todes `)
            break; 
        default:
            break;
    }

//==================================================================================<<   

// Todo lists hometask end ===============================>>