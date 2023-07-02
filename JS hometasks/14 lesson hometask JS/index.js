'use strict'
// 14 lesson hometasks

//===================================== 1 masala ===================================
//Questions

// 1. Oydagi kunlar sonini olish uchun JavaScript funksiyasini yozing.
// input => 6, 2023 output => 30
// input => 7, 2023 output => 31
// input => 1, 2012 output => 31



//Answers

// function getMonthDays(month, year) {
//     const date = new Date(month,year,0).getDate()
//     console.log(`Month: ${month < 10 ? '0'+month : month}, Year: ${year}, Days: ${date}`)
// }
// const result = getMonthDays(6,2023)   



//========================================== 2 masala =====================================================
//Questions

// 2. Sanalarni solishtirish uchun JavaScript funksiyasini yozing (ya'ni, kattaroq, kichik yoki teng).
// input => '11/14/2013 00:00', '11/14/2013 00:00', output => "Date1 = Date2"
// input => '11/14/2013 00:01, '11/14/2013 00:00', output => "Date1 > Date2"
// input => '11/14/2013 00:00', '11/14/2013 00:01', output => "Date2 > Date1"



// Answer

// const date = new Date()
// function compareDate(month1,day1,year1,hour1,minutes1,month2,day2,year2,hour2,minutes2) {
//     let date1 = new Date(month1+'/'+day1+'/'+year1+' '+hour1+':'+minutes1)
//     console.log(`First Date => ${date1}`)
//     let date2 = new Date(month2+'/'+day2+'/'+year2+' '+hour2+':'+minutes2)
//     console.log(`Second Date => ${date2} \n`)
//     if ((date1.getTime() === date2.getTime())&&(date1.getFullYear() === date2.getFullYear())&&(date1.getDate() === date2.getDate())&&(date1.getMonth() === date2.getMonth())) {
//         console.log(`Date1 = Date2`)
//     }else if ((date1.getTime() > date2.getTime())&&(date1.getFullYear() > date2.getFullYear())&&(date1.getDate() > date2.getDate())&&(date1.getMonth() > date2.getMonth())) {
//         console.log(`Date1 > Date2`)
//     }else{
//         console.log(`Date1 < Date2`)
//     }
// }
// compareDate(11,14,2013,12,2, 11,14,2013,12,2,) 




//====================================== 3 masala =========================================
//Questions 

// 3. Sana dam olish kuni ekanligini tekshirish uchun JavaScript funksiyasini yozing.
// Eslatma: Dam olish kunlarining standart shanba/yakshanba taʼrifidan foydalaning.
// Input: 
// console.log(isWeekend('Nov 15, 2014'));
// console.log(isWeekend('Nov 16, 2014'));
// console.log(isWeekend('Nov 17, 2014'));
// Output:
// "weekend"
// "weekend"
// undefined



//Answers
// function isWeekend(month,day,year) {
//     const weekDate = new Date(month,day,year,0).getDay()
//     console.log(`Month:${month < 10 ? '0'+month : month}, Day:${day < 10 ? '0'+day : day}, Year:${year}, Weekday:${weekDate}`)
//     if (weekDate=='5'||weekDate=='6') {
//         console.log('This is Weekend')
//     }else{
//         console.log('This is not Weekend')
//     }
// } 
// isWeekend(11,15,2014)




//=================================== 4 masala ==========================================
// Questions

// 4. Ikki sana orasidagi farqni kunlarda olish uchun JavaScript funksiyasini yozing.
// input:
// console.log(dateDiffInDays('04/02/2014', '11/04/2014'));
// console.log(dateDiffInDays('12/02/2014', '11/04/2014'));
// output:
// 216
// -28



//Answers

// function dateDiffInDays(date1,date2) {
//     let date11 = new Date(date1)
//     console.log(`Date1: ${date1}`)
//     let date22 = new Date(date2)
//     console.log(`Date2: ${date2}`)
//     let resOftimes = Math.abs((date11-date22))
//     let resOfDays = Math.ceil(resOftimes / (1000 * 60 * 60 * 24));
//     console.log(`Milliseconds: ${resOftimes}`)
//     console.log(`Days: ${resOfDays}`)
// }
// dateDiffInDays('4/2/2014','11/4/2014') 




//================================= 5 masala =====================================
// Question

// 5. Sanalar arrayidan maksimal sanani olish uchun JavaScript funksiyasini yozing.

// Input: 
// console.log(maksimal_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output:
// "02.02.2015"



//Answers

// function maxDate(year1,month1,day1,year2,month2,day2,year3,month3,day3) {
//     const date1 = new Date(year1+'/'+month1+'/'+day1)
//     const date2 = new Date(year2+'/'+month2+'/'+day2)
//     const date3 = new Date(year3+'/'+month3+'/'+day3)
//     if (date1 > date2 && date1>date3){
//         console.log(`${day1 < 10 ? '0'+day1 : day1}.${month1 < 10 ? '0'+month1 : month1}.${year1}`)
//     }else if (date2 > date3) {
//         console.log(`${day2 < 10 ? '0'+day2 : day2}.${month2 < 10 ? '0'+month2 : month2}.${year2}`)
//     }else{
//         console.log(`${day3 < 10 ? '0'+day3 : day3}.${month3}.${year3}`)
//     }
// }
// maxDate(2015,2,1,  2015,2,2,  2015,1,3)





//================================= 6 masala ========================================
// Question

// 6. Yoshni hisoblash uchun JavaScript dasturini yozing.
// Input:
// console.log(calculateAge(new Date(1982, 11, 4)));
// Output:
// 32
// Input:
// console.log(calculateAge(new Date(1962, 1, 1)));
// Output: 
// 53



//Answers
// const nowDate = new Date()
// function calculateAge(year,month,day) {
//     const age = new Date(year+','+month+','+day)
//     console.log(`Year:${year}, Month: ${month <10 ? '0'+month : month}, Day: ${day < 10 ? '0'+day : day}`)
//     let result1 = Math.abs(year-nowDate.getFullYear())
//     let result2 = Math.abs(month-nowDate.getMonth())
//     let result3 = Math.abs(day-nowDate.getDate())
//     console.log(result1)
// }
// calculateAge(2005,9,15)