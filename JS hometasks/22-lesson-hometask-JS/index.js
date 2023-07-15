//oop class lar boyicha masalalar.

//1-masala.=================================================================================>>
// class Home {
//     showinfo(){
//         console.log(`
// 1.UyNomi: '${this.homeName}'
// 2.Joylashgan Orni: ${this.location}
// 3.Uy Maydoni: ${this.homeField}kv.km
// 4.Uy Narxi: ${this.homeCost}$
// 5.Uy Xonalari: ${this.homeRooms}
//         `);
//     }
// }

// class TashkentHouse extends Home {
//     constructor(homeName,location,homeField,homeCost,homeRooms){
//         super()
//         this.homeName = homeName
//         this.location = location
//         this.homeField = homeField
//         this.homeCost = homeCost
//         this.homeRooms = homeRooms
//     }
// }
// class OlmazorHouse extends Home {
//     constructor(homeName,location,homeField,homeCost,homeRooms){
//         super()
//         this.homeName = homeName
//         this.location = location
//         this.homeField = homeField
//         this.homeCost = homeCost
//         this.homeRooms = homeRooms
//     }
// }
// class NestOneHouse extends Home {
//     constructor(homeName,location,homeField,homeCost,homeRooms){
//         super()
//         this.homeName = homeName
//         this.location = location
//         this.homeField = homeField
//         this.homeCost = homeCost
//         this.homeRooms = homeRooms
//     }
// }

// const tashkentHouse = new TashkentHouse('GreenHouses','Toshkent Viloyati',64,40000,2)
// const olmazorHouse = new OlmazorHouse('MillerHouses','Navoiy Viloyati',70,45000,3)
// const nestOneHouse = new NestOneHouse('NestOneHouses','Termiz Viloyati',90,50000,4)

// tashkentHouse.showinfo()
// olmazorHouse.showinfo()
// nestOneHouse.showinfo()



//2-masala.================================================================================>>
// class Phone {
//     showInfo(){
//         console.log(`
// 1.PhoneName: ${this.phoneName}
// 2.PhoneMemory: ${this.phoneMemory}
// 3.PhoneRam: ${this.phoneRam}
// 4.PhoneCamera: ${this.phoneCamera}
// 5.PhoneCost: ${this.phoneCost}
//         `);
//     }
// }

// class RedMi extends Phone {
//     constructor(phoneName,phoneMemory,phoneRam,phoneCamera,phoneCost){
//         super()
//         this.phoneName = phoneName
//         this.phoneMemory = phoneMemory
//         this.phoneRam = phoneRam
//         this.phoneCamera = phoneCamera
//         this.phoneCost = phoneCost
//     }
// }
// class Samsung extends Phone {
//     constructor(phoneName,phoneMemory,phoneRam,phoneCamera,phoneCost){
//         super()
//         this.phoneName = phoneName
//         this.phoneMemory = phoneMemory
//         this.phoneRam = phoneRam
//         this.phoneCamera = phoneCamera
//         this.phoneCost = phoneCost
//     }
// }
// class Iphone extends Phone {
//     constructor(phoneName,phoneMemory,phoneRam,phoneCamera,phoneCost){
//         super()
//         this.phoneName = phoneName
//         this.phoneMemory = phoneMemory
//         this.phoneRam = phoneRam
//         this.phoneCamera = phoneCamera
//         this.phoneCost = phoneCost
//     }
// }

// const redmi = new RedMi('RedMi Not 11Pro',128,4,4,300)
// const samsung = new Samsung('Samsung S22 Ultra',128,6,5,1300)
// const iphone = new Iphone('Iphone 14Pro Max',128,8,3,1500)

// redmi.showInfo()
// samsung.showInfo()
// iphone.showInfo()



//3-masala.===============================================================================>>
// class Computers {
//     showInfo(){
//         console.log(`
// 1.ComputerName: ${this.computerName}
// 2.ProcessorType: ${this.processorType}
// 3.Ram: ${this.computerRam}
// 4.Memory: ${this.computerMemory}GB
// 5.Color: ${this.computerColor}
//         `);
//     }
// }

// class HP extends Computers {
//     constructor (computerName, processorType, computerRam, computerMemory, computerColor ){
//         super()
//         this.computerName = computerName
//         this.processorType = processorType
//         this.computerRam = computerRam
//         this.computerMemory = computerMemory
//         this.computerColor = computerColor
//     }
// }
// class MSI extends Computers {
//     constructor (computerName, processorType, computerRam, computerMemory, computerColor ){
//         super()
//         this.computerName = computerName
//         this.processorType = processorType
//         this.computerRam = computerRam
//         this.computerMemory = computerMemory
//         this.computerColor = computerColor
//     }
// }
// class MacBook extends Computers {
//     constructor (computerName, processorType, computerRam, computerMemory, computerColor ){
//         super()
//         this.computerName = computerName
//         this.processorType = processorType
//         this.computerRam = computerRam
//         this.computerMemory = computerMemory
//         this.computerColor = computerColor
//     }
// }

// const hp = new HP('HP','Intel Core i7',8,256,'black')
// const msi = new MSI('MSI Gamer','Intel Core i5',8,256,'white')
// const macBook = new MacBook('MacBook','Intel Core i10',10,528,'Yellow')

// hp.showInfo()
// msi.showInfo()
// macBook.showInfo()



//4-masala.==============================================================================>>
// class Technical {
//     showTechnical(){
//         console.log(`
// 1.Name: ${this.name}
// 2.Cost: ${this.cost}$
// 3.Memory: ${this.memory}GB
// 4.Ram: ${this.ram}
// 5.Color: ${this.color}
// 6.CreatedYear: ${this.createdYear} Year
// 7.Camera: ${this.camera}
//         `);
//     }

// //     phoneMethod(){
// //         console.log(`
// // 1.Name: ${this.name}
// // 2.Cost: ${this.cost}$
// // 3.Memory: ${this.memory}GB
// // 4.Ram: ${this.ram}
// // 5.Color: ${this.color}
// // 6.CreatedYear: ${this.createdYear} Year
// // 7.Camera: ${this.camera}
// //         `);
// //     }

// //     computerMethod(){
// //         console.log(`
// // 1.Name: ${this.name}
// // 2.Cost: ${this.cost}$
// // 3.Memory: ${this.memory}GB
// // 4.Ram: ${this.ram}
// // 5.Color: ${this.color}
// // 6.CreatedYear: ${this.createdYear} Year
// // 7.Camera: ${this.camera}
// //         `);         
// //     }
// }

// class PhoneSamsung extends Technical {
//     constructor(phoneName,phoneCost,phoneMemory,phoneRam,phoneColor,phoneCreated,phoneCamera){
//         super()
//         this.name = phoneName
//         this.cost = phoneCost
//         this.memory = phoneMemory
//         this.ram = phoneRam
//         this.color = phoneColor
//         this.createdYear = phoneCreated
//         this.camera = phoneCamera 
//     }
// }
// class PhoneIphone extends Technical {
//     constructor(phoneName,phoneCost,phoneMemory,phoneRam,phoneColor,phoneCreated,phoneCamera){
//         super()
//         this.name = phoneName
//         this.cost = phoneCost
//         this.memory = phoneMemory
//         this.ram = phoneRam
//         this.color = phoneColor
//         this.createdYear = phoneCreated
//         this.camera = phoneCamera 
//     }
// }
// class PhoneRedMi extends Technical {
//     constructor(phoneName,phoneCost,phoneMemory,phoneRam,phoneColor,phoneCreated,phoneCamera){
//         super()
//         this.name = phoneName
//         this.cost = phoneCost
//         this.memory = phoneMemory
//         this.ram = phoneRam
//         this.color = phoneColor
//         this.createdYear = phoneCreated
//         this.camera = phoneCamera 
//     }
// }
// class PhoneHonor extends Technical {
//     constructor(phoneName,phoneCost,phoneMemory,phoneRam,phoneColor,phoneCreated,phoneCamera){
//         super()
//         this.name = phoneName
//         this.cost = phoneCost
//         this.memory = phoneMemory
//         this.ram = phoneRam
//         this.color = phoneColor
//         this.createdYear = phoneCreated
//         this.camera = phoneCamera 
//     }
// }
// class ComputerHP extends Technical {
//     constructor(phoneName,phoneCost,phoneMemory,phoneRam,phoneColor,phoneCreated,phoneCamera){
//         super()
//         this.name = phoneName
//         this.cost = phoneCost
//         this.memory = phoneMemory
//         this.ram = phoneRam
//         this.color = phoneColor
//         this.createdYear = phoneCreated
//         this.camera = phoneCamera 
//     }
// }
// class ComputerMSI extends Technical {
//     constructor(phoneName,phoneCost,phoneMemory,phoneRam,phoneColor,phoneCreated,phoneCamera){
//         super()
//         this.name = phoneName
//         this.cost = phoneCost
//         this.memory = phoneMemory
//         this.ram = phoneRam
//         this.color = phoneColor
//         this.createdYear = phoneCreated
//         this.camera = phoneCamera 
//     }
// }
// class ComputerMacBook extends Technical {
//     constructor(phoneName,phoneCost,phoneMemory,phoneRam,phoneColor,phoneCreated,phoneCamera){
//         super()
//         this.name = phoneName
//         this.cost = phoneCost
//         this.memory = phoneMemory
//         this.ram = phoneRam
//         this.color = phoneColor
//         this.createdYear = phoneCreated
//         this.camera = phoneCamera 
//     }
// }

// const samsung = new PhoneSamsung('Samsung S22 Ultra',1300,128,6,'white',2022,4)
// const iphone = new PhoneIphone('IPhone 14Pro Max',1500,128,7,'Gold',2023,3)
// const redMi = new PhoneRedMi('RedMi Not 11Pro',300,128,6,'yellow',2021,5)
// const honor = new PhoneHonor('Honor 50 Lite',500,128,7,'blue',2022,4)
// const hp = new ComputerHP('HP',1100,256,8,'white',2019,1)
// const msi = new ComputerMSI('MSI Gamer',1200,256,8,'black',2020,1)
// const macBook = new ComputerMacBook('MacBook',1700,528,8,'white',2020,1)

// samsung.showTechnical()
// iphone.showTechnical()
// redMi.showTechnical()
// honor.showTechnical()
// hp.showTechnical()
// msi.showTechnical()
// macBook.showTechnical()


// samsung.phoneMethod()
// iphone.phoneMethod()
// redMi.phoneMethod()
// honor.phoneMethod()

// hp.computerMethod()
// msi.computerMethod()
// macBook.computerMethod()