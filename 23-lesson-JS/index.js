//23-lesson js clojir

// const result = []
// function foo(a) {
//     result.push(a)
//     return foo
// }
// foo(1)(2)(3)
// console.log(result);


// const result = []
// function foo(a) {
//   return function (b) {
//     !b ? foo(a+b) : a
//   }
// }
// // foo(1)(2)(3)()
// console.log(foo(1)(2)(3)())


// class oop=======================================================================================>>
// class Student {
//     name = ''
//     #ball = []
//     #subjects = []
//     #isPass = true
//     course = 1
//     constructor(name,ball,subjects,isPass,course){
//         this.name=name;
//         this.#ball = ball;
//         this.#subjects = subjects
//         this.course = course
//         this.#isPass = isPass
//     }

//     get getStudentBalls(){
//         return this.#ball
//     }
// }
// const suhrob = new Student('suhrob',[55,70,100],['matemaika','ingliz tili','dasturlash'],true,3)
// // const result = suhrob.ball = [1,2,3] // biz bu holatda yangi qiymat beraolmaymiz chunki bular private bu usul <<abstraction>> deyiladi.
// console.log(suhrob.getStudentBalls);


// masasal contact=========================================================================>>
class Student {
    #contact = [{ name: 'john', phoneNumber: '3123123', id: 1689600080137 }]
    name = ''
    #phoneNumber = ''
    sortByName = false
    id = '1.23456789'
    showInfo(){
        console.log(`
ID: ${this.id}
Name: ${this.name}
Phone Number:${this.#phoneNumber}
        `);
    }
  
    constructor(name,phoneNumber) {
      this.name = name
      this.#phoneNumber = phoneNumber
    }
  


    set addContact(newContact) {
      if (this.#contact.length < 10) {
        newContact.id = Math.random() * 100000
        this.#contact.push(newContact)
      } else {
        throw Error('Contactlar soni oshib ketdi')
      }
    }
  



    get getAllContacts() {
      return this.#contact.sort((a, b) => {
        if (this.sortByName) {
          return a.name.localeCompare(b.name)
        } else {
          return b.name.localeCompare(a.name)
        }
      })
    }
  



    set deleteContact(id) {
      this.#contact = this.#contact.filter((item) => item.id !== id)
      console.log(this.#contact)
    }
  



    set changeFilterByName(newValue) {
      this.sortByName = newValue
    }




    get sortByName() {
      return this.sortByName
    }
  



    set edit({ id, phoneNumber, name }) {
      const newContacts = this.#contact.filter((item) => item.id !== id)
      const editedContact = this.#contact.find((contact) => contact.id === id)
      editedContact.phoneNumber = phoneNumber
      editedContact.name = name
      this.#contact = [...newContacts, editedContact]
    }


}
  
  const user1 = new Student('MuhammadAli','555555555')


  user1.addContact = {
    name:'Suxrob',
    phoneNumber:'9999999'
  }


  user1.edit = {
    id:1689600080137,
    name:'ulugbek',
    phoneNumber:'777777777'
  }

  user1.addContact = {
    name:'Ali',
    phoneNumber:'888888888888'
  }

user1.edit = {
    id:1689600080137,
    name: 'Assi',
    phoneNumber:'55555555'
}
  console.log(user1.getAllContacts);