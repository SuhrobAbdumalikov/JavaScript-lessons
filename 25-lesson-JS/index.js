// const elemnet = document.querySelector('.container')
// const users = ['about','blog','service','menu']

// users.forEach((user) =>{
//     const newElement = document.createElement('li')
//     newElement.textContent = user
//     elemnet.appendChild(newElement)
// })


// const container = document.querySelector('.container');
// const users = [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//         }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//       }
//     },
//     {
//       "id": 2,
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "email": "Shanna@melissa.tv",
//       "address": {
//         "street": "Victor Plains",
//         "suite": "Suite 879",
//         "city": "Wisokyburgh",
//         "zipcode": "90566-7771",
//         "geo": {
//           "lat": "-43.9509",
//           "lng": "-34.4618"
//         }
//       },
//       "phone": "010-692-6593 x09125",
//       "website": "anastasia.net",
//       "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//       }
//     },
//     {
//       "id": 3,
//       "name": "Clementine Bauch",
//       "username": "Samantha",
//       "email": "Nathan@yesenia.net",
//       "address": {
//         "street": "Douglas Extension",
//         "suite": "Suite 847",
//         "city": "McKenziehaven",
//         "zipcode": "59590-4157",
//         "geo": {
//           "lat": "-68.6102",
//           "lng": "-47.0653"
//         }
//       },
//       "phone": "1-463-123-4447",
//       "website": "ramiro.info",
//       "company": {
//         "name": "Romaguera-Jacobson",
//         "catchPhrase": "Face to face bifurcated interface",
//         "bs": "e-enable strategic applications"
//       }
//     },
// ]
// let newUsers = [...users]
// let isSorted = false
// function render(users) {
//     container.innerHTML = ''
//     users.forEach((users) => {
//         const {email,name,phone} = users
//         const box = document.createElement('div');
//         const avatar = document.createElement('div')
//         const h3 = document.createElement('h3')
//         const emailElement = document.createElement('a')
//         const callMeBtn = document.createElement('button')
//         const a = document.createElement('a')
//         a.setAttribute('href',`tel: ${phone}`)
//         a.textContent = 'Call Me'
//         box.setAttribute('class','box')
//         callMeBtn.appendChild(a)
//         emailElement.setAttribute('href',`mailto:${email}`)
//         emailElement.textContent = email
//         h3.textContent = name
//         avatar.setAttribute('class',avatar)
//         box.appendChild(avatar)
//         box.appendChild(h3)
//         box.appendChild(emailElement)
//         box.appendChild(callMeBtn)
//         container.appendChild(box)
//     })
// }

// function filter() {
//     users.sort((a,b) => {
//         if (isSorted) {
//             return b.name.localeCompare(a.name)
//         }else{
//             return a.name.localeCompare(b.name)
//         }
//     })
//     isSorted != isSorted
//     render(users)
// }

// //search function
// function search(searchElement = '') {
//     const newUsers = users.filter((user) =>
//         user.name.toLocaleLowerCase().includes(searchElement.toLocaleLowerCase().trim()))
//     render(searchElement ? newUsers : users);
// }


// function deleteUsers(id) {
//     newUsers = newUsers.filter((user) => user.id !== id)
//     render(newUsers)
// }


function editUsers() {
    const editUserIdx = users.findIndex((user) => user.id === id)
    users[editUserIdx] = {
        ...users[editUserIdx],name,email,phone,
    } 
    render(users)
}
filter()