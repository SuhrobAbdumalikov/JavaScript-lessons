//23-lesson-homework-JS
class Library {
    #bookReserved = [{Name:'Asadbek',phoneNumber:'1111111',ReservedDate:10,bookName:'Harry Potter',bookAuthor:'J.K.Rowling!',id:1.23456789}]
    Name = ''
    #PhoneNumber = ''
    ReservedDate = ''
    BookName = ''
    BookAuthor = ''

    //kutubxona kotibasining ma'lumotlarnini korish uchun
    showInfo(){
        console.log(`SecretaryName: ${this.SecretaryName} \nPhoneNumber: ${this.#PhoneNumber}`);
    }



    constructor(Name,phoneNumber,reservedDate,bookName,bookAuthor) {
        this.Name = Name
        this.#PhoneNumber = phoneNumber
        this.ReservedDate = reservedDate
        this.BookName = bookName
        this.BookAuthor = bookAuthor
    }



    //yangi booked qilgan odamlarni qoshish
    set AddReservedBooks(newBooked){
        if (this.#bookReserved.length < 5) {
            newBooked.id = Math.random()*100000;
            this.#bookReserved.push(newBooked)
        }else{
            throw Error('Reserved Books length is not enough !!!')
        }
    }



    //hamma booked qilganlarni listini chiqarish uchun.
    get AllBookedLists(){
        return this.#bookReserved.sort((a,b) => {a-b})
    }



    //necha kunga band qilishi kitiobni.
    set TakeBooks({id,reservedDate}){
        const reservedUSerId = this.#bookReserved.find((user) => user.id === id)
        reservedUSerId.id = id
        reservedUSerId.ReservedDate = reservedDate
        const summa = reservedDate*1000;
         console.log(`ID:${id} \nBand Qilingan vaqt: ${reservedDate} \nSumma: ${summa} sum`);
    }


    //<< booked qilgan userning ma'lomotlarnini ochirish.>>
    set DeleteBookedUsers(id){
        this.#bookReserved = this.#bookReserved.filter((i) => i.id!==id);
        console.log(this.#bookReserved);
    }



    //booked qilgan userlarni edit qilish imkoniyati.
    set EditBookedUsers({id,name,phoneNumber,reservedDate,bookName,bookAuthor}){ 
        const newbook = this.#bookReserved.filter((i) => i.id !== id)
        const editedBook = this.#bookReserved.find((book) => book.id === id)
        editedBook.Name = name
        editedBook.phoneNumber = phoneNumber 
        editedBook.ReservedDate = reservedDate
        editedBook.bookName = bookName
        editedBook.bookAuthor = bookAuthor
        this.#bookReserved = [...newbook,editedBook]
    }

}

const User = new Library('Guli','000000000')
const currentYear = new Date().getFullYear()

User.AddReservedBooks = {
    Name:'John',
    phoneNumber:'222222222',
    reservedDate:5,
    bookName:'Sherlock Holmes',
    bookAuthor:'Conan Doyle'
}

User.AddReservedBooks = {
    Name:'ALi',
    phoneNumber:'333333333',
    reservedDate:11,
    bookName:'Sariq devni minib',
    bookAuthor:'Xudoyberdi Toxtaboyev'
}
console.log(User.AllBookedLists);
