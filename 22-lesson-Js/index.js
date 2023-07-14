//class 
// class Phone {
//     constructor(title,create,price,memory,ram,sim){
//         this.title =  title
//         this.create = create
//         this.price = price
//         this.memory = memory
//         this.ram = ram 
//         this.sim = sim
//     }
//     showinfo(){
//         console.log(`
// Name: ${this.title}
// Yaratilgan yili: ${this.create}yil
// Narx: ${this.price}$
// Xotira: ${this.memory}GB
// Ram: ${this.ram}
// SimKarta:${this.sim}ta       
//         `);
//     }
// }

// const redMi = new Phone('redmi','2021',1500,64,4,2)
// const samsung = new Phone('samsung S22 Ultra','2022',1800,120,6,4)

// redMi.showinfo()
// samsung.showinfo()

// console.log(redMi);
// console.log(samsung);

// class Alive {
//     eat(){
//         console.log(this.name+' '+'Eating');
//     }
// }

// class Person extends Alive{
//     constructor(name){
//         super()
//         this.name = name
//     }
// }

// class Dog extends Alive {
//     constructor(name,){
//         super()
//         this.name = name
//     }
// }

// const person = new Person('Vali')
// const dog = new Dog('bobek') 

// // console.log(person);
// // console.log(dog);

// person.eat()
// dog.eat()



// class lar in Js Meros olish
// class Bino {
//     showinfo(){
//         console.log(`
// Nomi:${this.name}
// Etajlar Soni: ${this.numStages} ta 
// Hoirgi Etaj: ${this.lift()} ta turibsiz
//         `);
//     }
//     lift(){
//      return this.NowStage!==this.numStages ? this.NowStage+1 : this.NowStage=1
//     }
// }

// class Schooll extends Bino { 
//     constructor(name,numStages,NowStage){
//         super()
//         this.name = name
//         this.numStages = numStages 
//         this.NowStage = NowStage
//     }
// }
// class collage extends Bino {
//     constructor(name,numStages,NowStage){
//         super()
//         this.name = name
//         this.numStages = numStages 
//         this.NowStage = NowStage
//     }
// }
// class University extends Bino {
//     constructor(name,numStages,NowStage){
//         super()
//         this.name = name
//         this.numStages = numStages 
//         this.NowStage = NowStage
//     }
// }

// const school =  new Schooll('18-maktab',4,2)
// const kollej = new collage('221-kollej',5,3)
// const unversity = new University('TERDU University',10,10)

// school.showinfo()
// kollej.showinfo()
// unversity.showinfo()


//class get va set 

class Person {
    fName = ''
    lName =''
    constructor(name,surname){
        this.fName = name
        this.lName = surname
    }

    set changeName(newName){
        this.fName = newName
    }

    get changeFullName(){
        return this.fName+" "+this.lName
    }
}


const person1 = new Person('john','doe')
console.log(person1);
person1.changeName = 'huje'
console.log(`Yangi Ism: ${person1.changeName = 'G"ishmat'}`);
console.log(`Toliq: ${person1.changeFullName}`);  

