const container = document.querySelector('.container');
const filterInfo = document.querySelector('.btn');

let allUsers = [
    {
        id:1,
        name: 'John',
        age: 30,
        email: `john@gmil.com`,
        phoneNumber: '+91-87654321',
        img:'./images/person-img-1.jpg'
    },
    {
        id:2,
        name: 'ALi',
        age: 30,
        email: `ali@gmil.com`,
        phoneNumber: '+91-87654321',
        img:'./images/person-img-2.jpg'
    },
    {
        id:3,
        name: 'Umid',
        age: 30,
        email: `umid@gmil.com`,
        phoneNumber: '+91-87654321',
        img:'./images/person-img-3.jpg'
    },
    {
        id:4,
        name: 'Jenny',
        age: 30,
        email: `jenny@gmil.com`,
        phoneNumber: '+91-87654321',
        img:'./images/person-img-4.jpg'
    },
    {
        id:5,
        name: 'Carol',
        age: 30,
        email: `carol@gmil.com`,
        phoneNumber: '+91-87654321',
        img:'./images/person-img-1.jpg'
    },
    {
        id:6,
        name: 'Assi',
        age: 30,
        email: `assi@gmil.com`,
        phoneNumber: '+91-87654321',
        img:'./images/person-img-1.jpg'
    },
    {
        id:7,
        name: 'Ulugbek',
        age: 30,
        email: `ulugbek@gmil.com`,
        phoneNumber: '+91-87654321',
        img:'./images/person-img-2.jpg'

    },
    {
        id:8,
        name: 'Muhammad',
        age: 30,
        email: `muhammad@gmil.com`,
        phoneNumber: '+91-87654321',
        img:'./images/person-img-2.jpg'
    },
    {
        id:9,
        name: 'Jacob',
        age: 30,
        email: `jacob@gmil.com`,
        phoneNumber: '+91-87654321',
        img:'./images/person-img-4.jpg'
    },
    {
        id:10,
        name: 'Harry',
        age: 30,
        email: `harry@gmil.com`,
        phoneNumber: '+91-87654321',
        img:'./images/person-img-1.jpg'
    },
]

let isFiltered = false

function foo(allUsers) {
    container.innerHTML = '';
    filterInfo.textContent = isFiltered ? ' Filter A-Z' : 'Filter Z-A'
    allUsers.forEach((users) =>{
        const {name,img,email,edited,phoneNumber} = users
        const divUserContent = document.createElement('div');
        const divBox = document.createElement('div');
        const divAvatar = document.createElement('div');
        const image = document.createElement('img');
        const h3 = document.createElement('h3');
        const aEmail = document.createElement('a');
        const aTel = document.createElement('a');
        const button = document.createElement('button');
        const spanEdit = document.createElement('span');

        spanEdit.textContent = edited ? 'edited✍️' : null
        divUserContent.setAttribute('class','usersContent')
        divBox.setAttribute('class','box');
        divAvatar.setAttribute('class','avatar')
        image.setAttribute('src',`${img}`);
        h3.textContent = `${name}`
        aEmail.setAttribute('href',`mailto:${email}`)
        aEmail.textContent = `${email}`
        aTel.setAttribute('href',`tel:${phoneNumber}`)
        aTel.textContent = 'Call Me'

        divAvatar.appendChild(image);
        button.appendChild(aTel);
        divBox.appendChild(divAvatar)
        divBox.appendChild(h3)
        divBox.appendChild(aEmail);
        divBox.appendChild(button)
        divUserContent.appendChild(divBox);
        divUserContent.appendChild(spanEdit);
        container.appendChild(divUserContent)
    })
}


//filter function
function filterUsers() {
    allUsers.sort((a,b) => {
        return isFiltered ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
    })
    isFiltered = !isFiltered
    foo(allUsers);
}


//delete function
function deleteUsers(id) {
    allUsers = allUsers.filter((item) => item.id !== id);
   foo(allUsers);
}


//function edit==> is'not working
function editUsers({id,name,phoneNumber,email}) {
    const editedUser = allUsers.findIndex((user) => user.id === id)
    allUsers[editUsers] = {
        ...allUsers[editedUser],
        name,phoneNumber,email,
    }
    foo(allUsers);
}



//search function==> is'not working
function searchUsers(value = '') {
    const newValue = allUsers.filter((item) => item.name.toLowerCase().includes(value.toLowerCase().trim()))
    foo(value ? newValue : allUsers);
}

// foo()
