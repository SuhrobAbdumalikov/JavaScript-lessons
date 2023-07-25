// const select = document.querySelector('#region');
// const districts = document.querySelector('#districts');
// const result = document.querySelector('.result');

// const selectData = {
//     region:null,
//     district:null,
// }

// const data = {
//     regions: [
//       {
//         id: 1,
//         name: 'Qoraqalpog‘iston Respublikasi',
//       },
//       {
//         id: 2,
//         name: 'Andijon viloyati',
//       },
//       {
//         id: 3,
//         name: 'Buxoro viloyati',
//       },
//       {
//         id: 4,
//         name: 'Jizzax viloyati',
//       },
//       {
//         id: 5,
//         name: 'Qashqadaryo viloyati',
//       },
//       {
//         id: 6,
//         name: 'Navoiy viloyati',
//       },
//       {
//         id: 7,
//         name: 'Namangan viloyati',
//       },
//       {
//         id: 8,
//         name: 'Samarqand viloyati',
//       },
//       {
//         id: 9,
//         name: 'Surxandaryo viloyati',
//       },
//       {
//         id: 10,
//         name: 'Sirdaryo viloyati',
//       },
//       {
//         id: 11,
//         name: 'Toshkent viloyati',
//       },
//       {
//         id: 12,
//         name: 'Farg‘ona viloyati',
//       },
//       {
//         id: 13,
//         name: 'Xorazm viloyati',
//       },
//       {
//         id: 14,
//         name: 'Toshkent shahri',
//       },
//     ],
//     districts: [
//       {
//         id: 15,
//         region_id: 1,
//         name: 'Amudaryo tumani',
//       },
//       {
//         id: 16,
//         region_id: 1,
//         name: 'Beruniy tumani',
//       },
//       {
//         id: 17,
//         region_id: 1,
//         name: 'Kegayli tumani',
//       },
//       {
//         id: 18,
//         region_id: 1,
//         name: 'Qonliko‘l tumani',
//       },
//       {
//         id: 19,
//         region_id: 1,
//         name: 'Qorao‘zak tumani',
//       },
//       {
//         id: 20,
//         region_id: 1,
//         name: 'Qo‘ng‘irot tumani',
//       },
//       {
//         id: 21,
//         region_id: 1,
//         name: 'Mo‘ynoq tumani',
//       },
//       {
//         id: 22,
//         region_id: 1,
//         name: 'Nukus tumani',
//       },
//       {
//         id: 23,
//         region_id: 1,
//         name: 'Nukus shahri',
//       },
//       {
//         id: 24,
//         region_id: 1,
//         name: 'Taxtako‘pir tumani',
//       },
//       {
//         id: 25,
//         region_id: 1,
//         name: 'To‘rtko‘l tumani',
//       },
//       {
//         id: 26,
//         region_id: 1,
//         name: 'Xo‘jayli tumani',
//       },
//       {
//         id: 27,
//         region_id: 1,
//         name: 'CHimboy tumani',
//       },
//       {
//         id: 28,
//         region_id: 1,
//         name: 'SHumanay tumani',
//       },
//       {
//         id: 29,
//         region_id: 1,
//         name: 'Ellikqal‘a tumani',
//       },
//       {
//         id: 30,
//         region_id: 2,
//         name: 'Andijon shahri',
//       },
//       {
//         id: 31,
//         region_id: 2,
//         name: 'Andijon tumani',
//       },
//       {
//         id: 32,
//         region_id: 2,
//         name: 'Asaka tumani',
//       },
//       {
//         id: 33,
//         region_id: 2,
//         name: 'Baliqchi tumani',
//       },
//       {
//         id: 34,
//         region_id: 2,
//         name: 'Buloqboshi tumani',
//       },
//       {
//         id: 35,
//         region_id: 2,
//         name: 'Bo‘z tumani',
//       },
//       {
//         id: 36,
//         region_id: 2,
//         name: 'Jalaquduq tumani',
//       },
//       {
//         id: 37,
//         region_id: 2,
//         name: 'Izbosgan tumani',
//       },
//       {
//         id: 38,
//         region_id: 2,
//         name: 'Qorasuv shahri',
//       },
//       {
//         id: 39,
//         region_id: 2,
//         name: 'Qo‘rg‘ontepa tumani',
//       },
//       {
//         id: 40,
//         region_id: 2,
//         name: 'Marhamat tumani',
//       },
//       {
//         id: 41,
//         region_id: 2,
//         name: 'Oltinko‘l tumani',
//       },
//       {
//         id: 42,
//         region_id: 2,
//         name: 'Paxtaobod tumani',
//       },
//       {
//         id: 43,
//         region_id: 2,
//         name: 'Ulug‘nor tumani',
//       },
//       {
//         id: 44,
//         region_id: 2,
//         name: 'Xonabod tumani',
//       },
//       {
//         id: 45,
//         region_id: 2,
//         name: 'Xo‘jaobod shahri',
//       },
//       {
//         id: 46,
//         region_id: 2,
//         name: 'Shaxrixon tumani',
//       },
//       {
//         id: 47,
//         region_id: 3,
//         name: 'Buxoro shahri',
//       },
//       {
//         id: 48,
//         region_id: 3,
//         name: 'Buxoro tumani',
//       },
//       {
//         id: 49,
//         region_id: 3,
//         name: 'Vobkent tumani',
//       },
//       {
//         id: 50,
//         region_id: 3,
//         name: 'G‘ijduvon tumani',
//       },
//       {
//         id: 51,
//         region_id: 3,
//         name: 'Jondor tumani',
//       },
//       {
//         id: 52,
//         region_id: 3,
//         name: 'Kogon tumani',
//       },
//       {
//         id: 53,
//         region_id: 3,
//         name: 'Kogon shahri',
//       },
//       {
//         id: 54,
//         region_id: 3,
//         name: 'Qorako‘l tumani',
//       },
//       {
//         id: 55,
//         region_id: 3,
//         name: 'Qorovulbozor tumani',
//       },
//       {
//         id: 56,
//         region_id: 3,
//         name: 'Olot tumani',
//       },
//       {
//         id: 57,
//         region_id: 3,
//         name: 'Peshku tumani',
//       },
//       {
//         id: 58,
//         region_id: 3,
//         name: 'Romitan tumani',
//       },
//       {
//         id: 59,
//         region_id: 3,
//         name: 'Shofirkon tumani',
//       },
//       {
//         id: 60,
//         region_id: 4,
//         name: 'Arnasoy tumani',
//       },
//       {
//         id: 61,
//         region_id: 4,
//         name: 'Baxmal tumani',
//       },
//       {
//         id: 62,
//         region_id: 4,
//         name: 'G‘allaorol tumani',
//       },
//       {
//         id: 63,
//         region_id: 4,
//         name: 'Do‘stlik tumani',
//       },
//       {
//         id: 64,
//         region_id: 4,
//         name: 'Sh.Rashidov tumani',
//       },
//       {
//         id: 65,
//         region_id: 4,
//         name: 'Jizzax shahri',
//       },
//       {
//         id: 66,
//         region_id: 4,
//         name: 'Zarbdor tumani',
//       },
//       {
//         id: 67,
//         region_id: 4,
//         name: 'Zafarobod tumani',
//       },
//       {
//         id: 68,
//         region_id: 4,
//         name: 'Zomin tumani',
//       },
//       {
//         id: 69,
//         region_id: 4,
//         name: 'Mirzacho‘l tumani',
//       },
//       {
//         id: 70,
//         region_id: 4,
//         name: 'Paxtakor tumani',
//       },
//       {
//         id: 71,
//         region_id: 4,
//         name: 'Forish tumani',
//       },
//       {
//         id: 72,
//         region_id: 4,
//         name: 'Yangiobod tumani',
//       },
//       {
//         id: 73,
//         region_id: 5,
//         name: 'G‘uzor tumani',
//       },
//       {
//         id: 74,
//         region_id: 5,
//         name: 'Dehqonobod tumani',
//       },
//       {
//         id: 75,
//         region_id: 5,
//         name: 'Qamashi tumani',
//       },
//       {
//         id: 76,
//         region_id: 5,
//         name: 'Qarshi tumani',
//       },
//       {
//         id: 77,
//         region_id: 5,
//         name: 'Qarshi shahri',
//       },
//       {
//         id: 78,
//         region_id: 5,
//         name: 'Kasbi tumani',
//       },
//       {
//         id: 79,
//         region_id: 5,
//         name: 'Kitob tumani',
//       },
//       {
//         id: 80,
//         region_id: 5,
//         name: 'Koson tumani',
//       },
//       {
//         id: 81,
//         region_id: 5,
//         name: 'Mirishkor tumani',
//       },
//       {
//         id: 82,
//         region_id: 5,
//         name: 'Muborak tumani',
//       },
//       {
//         id: 83,
//         region_id: 5,
//         name: 'Nishon tumani',
//       },
//       {
//         id: 84,
//         region_id: 5,
//         name: 'Chiroqchi tumani',
//       },
//       {
//         id: 85,
//         region_id: 5,
//         name: 'Shahrisabz tumani',
//       },
//       {
//         id: 86,
//         region_id: 5,
//         name: 'Yakkabog‘ tumani',
//       },
//       {
//         id: 87,
//         region_id: 6,
//         name: 'Zarafshon shahri',
//       },
//       {
//         id: 88,
//         region_id: 6,
//         name: 'Karmana tumani',
//       },
//       {
//         id: 89,
//         region_id: 6,
//         name: 'Qiziltepa tumani',
//       },
//       {
//         id: 90,
//         region_id: 6,
//         name: 'Konimex tumani',
//       },
//       {
//         id: 91,
//         region_id: 6,
//         name: 'Navbahor tumani',
//       },
//       {
//         id: 92,
//         region_id: 6,
//         name: 'Navoiy shahri',
//       },
//       {
//         id: 93,
//         region_id: 6,
//         name: 'Nurota tumani',
//       },
//       {
//         id: 94,
//         region_id: 6,
//         name: 'Tomdi tumani',
//       },
//       {
//         id: 95,
//         region_id: 6,
//         name: 'Uchquduq tumani',
//       },
//       {
//         id: 96,
//         region_id: 6,
//         name: 'Xatirchi tumani',
//       },
//       {
//         id: 97,
//         region_id: 7,
//         name: 'Kosonsoy tumani',
//       },
//       {
//         id: 98,
//         region_id: 7,
//         name: 'Mingbuloq tumani',
//       },
//       {
//         id: 99,
//         region_id: 7,
//         name: 'Namangan tumani',
//       },
//       {
//         id: 100,
//         region_id: 7,
//         name: 'Namangan shahri',
//       },
//       {
//         id: 101,
//         region_id: 7,
//         name: 'Norin tumani',
//       },
//       {
//         id: 102,
//         region_id: 7,
//         name: 'Pop tumani',
//       },
//       {
//         id: 103,
//         region_id: 7,
//         name: 'To‘raqo‘rg‘on tumani',
//       },
//       {
//         id: 104,
//         region_id: 7,
//         name: 'Uychi tumani',
//       },
//       {
//         id: 105,
//         region_id: 7,
//         name: 'Uchqo‘rg‘on tumani',
//       },
//       {
//         id: 106,
//         region_id: 7,
//         name: 'Chortoq tumani',
//       },
//       {
//         id: 107,
//         region_id: 7,
//         name: 'Chust tumani',
//       },
//       {
//         id: 108,
//         region_id: 7,
//         name: 'Yangiqo‘rg‘on tumani',
//       },
//       {
//         id: 109,
//         region_id: 8,
//         name: 'Bulung‘ur tumani',
//       },
//       {
//         id: 110,
//         region_id: 8,
//         name: 'Jomboy tumani',
//       },
//       {
//         id: 111,
//         region_id: 8,
//         name: 'Ishtixon tumani',
//       },
//       {
//         id: 112,
//         region_id: 8,
//         name: 'Kattaqo‘rg‘on tumani',
//       },
//       {
//         id: 113,
//         region_id: 8,
//         name: 'Kattaqo‘rg‘on shahri',
//       },
//       {
//         id: 114,
//         region_id: 8,
//         name: 'Qo‘shrabot tumani',
//       },
//       {
//         id: 115,
//         region_id: 8,
//         name: 'Narpay tumani',
//       },
//       {
//         id: 116,
//         region_id: 8,
//         name: 'Nurabod tumani',
//       },
//       {
//         id: 117,
//         region_id: 8,
//         name: 'Oqdaryo tumani',
//       },
//       {
//         id: 118,
//         region_id: 8,
//         name: 'Payariq tumani',
//       },
//       {
//         id: 119,
//         region_id: 8,
//         name: 'Pastarg‘om tumani',
//       },
//       {
//         id: 120,
//         region_id: 8,
//         name: 'Paxtachi tumani',
//       },
//       {
//         id: 121,
//         region_id: 8,
//         name: 'Samarqand tumani',
//       },
//       {
//         id: 122,
//         region_id: 8,
//         name: 'Samarqand shahri',
//       },
//       {
//         id: 123,
//         region_id: 8,
//         name: 'Toyloq tumani',
//       },
//       {
//         id: 124,
//         region_id: 8,
//         name: 'Urgut tumani',
//       },
//       {
//         id: 125,
//         region_id: 9,
//         name: 'Angor tumani',
//       },
//       {
//         id: 126,
//         region_id: 9,
//         name: 'Boysun tumani',
//       },
//       {
//         id: 127,
//         region_id: 9,
//         name: 'Denov tumani',
//       },
//       {
//         id: 128,
//         region_id: 9,
//         name: 'Jarqo‘rg‘on tumani',
//       },
//       {
//         id: 129,
//         region_id: 9,
//         name: 'Qiziriq tumani',
//       },
//       {
//         id: 130,
//         region_id: 9,
//         name: 'Qo‘mqo‘rg‘on tumani',
//       },
//       {
//         id: 131,
//         region_id: 9,
//         name: 'Muzrabot tumani',
//       },
//       {
//         id: 132,
//         region_id: 9,
//         name: 'Oltinsoy tumani',
//       },
//       {
//         id: 133,
//         region_id: 9,
//         name: 'Sariosiy tumani',
//       },
//       {
//         id: 134,
//         region_id: 9,
//         name: 'Termiz tumani',
//       },
//       {
//         id: 135,
//         region_id: 9,
//         name: 'Termiz shahri',
//       },
//       {
//         id: 136,
//         region_id: 9,
//         name: 'Uzun tumani',
//       },
//       {
//         id: 137,
//         region_id: 9,
//         name: 'Sherobod tumani',
//       },
//       {
//         id: 138,
//         region_id: 9,
//         name: 'Sho‘rchi tumani',
//       },
//       {
//         id: 139,
//         region_id: 10,
//         name: 'Boyovut tumani',
//       },
//       {
//         id: 140,
//         region_id: 10,
//         name: 'Guliston tumani',
//       },
//       {
//         id: 141,
//         region_id: 10,
//         name: 'Guliston shahri',
//       },
//       {
//         id: 142,
//         region_id: 10,
//         name: 'Mirzaobod tumani',
//       },
//       {
//         id: 143,
//         region_id: 10,
//         name: 'Oqoltin tumani',
//       },
//       {
//         id: 144,
//         region_id: 10,
//         name: 'Sayxunobod tumani',
//       },
//       {
//         id: 145,
//         region_id: 10,
//         name: 'Sardoba tumani',
//       },
//       {
//         id: 146,
//         region_id: 10,
//         name: 'Sirdaryo tumani',
//       },
//       {
//         id: 147,
//         region_id: 10,
//         name: 'Xavos tumani',
//       },
//       {
//         id: 148,
//         region_id: 10,
//         name: 'Shirin shahri',
//       },
//       {
//         id: 149,
//         region_id: 10,
//         name: 'Yangier shahri',
//       },
//       {
//         id: 150,
//         region_id: 11,
//         name: 'Angiren shahri',
//       },
//       {
//         id: 151,
//         region_id: 11,
//         name: 'Bekabod tumani',
//       },
//       {
//         id: 152,
//         region_id: 11,
//         name: 'Bekabod shahri',
//       },
//       {
//         id: 153,
//         region_id: 11,
//         name: 'Bo‘ka tumani',
//       },
//       {
//         id: 154,
//         region_id: 11,
//         name: 'Bo‘stonliq tumani',
//       },
//       {
//         id: 155,
//         region_id: 11,
//         name: 'Zangiota tumani',
//       },
//       {
//         id: 156,
//         region_id: 11,
//         name: 'Qibray tumani',
//       },
//       {
//         id: 157,
//         region_id: 11,
//         name: 'Quyichirchiq tumani',
//       },
//       {
//         id: 158,
//         region_id: 11,
//         name: 'Oqqo‘rg‘on tumani',
//       },
//       {
//         id: 159,
//         region_id: 11,
//         name: 'Olmaliq shahri',
//       },
//       {
//         id: 160,
//         region_id: 11,
//         name: 'Ohangaron tumani',
//       },
//       {
//         id: 161,
//         region_id: 11,
//         name: 'Parkent tumani',
//       },
//       {
//         id: 162,
//         region_id: 11,
//         name: 'Piskent tumani',
//       },
//       {
//         id: 163,
//         region_id: 11,
//         name: 'O‘rtachirchiq tumani',
//       },
//       {
//         id: 164,
//         region_id: 11,
//         name: 'Chinoz tumani',
//       },
//       {
//         id: 165,
//         region_id: 11,
//         name: 'Chirchiq shahri',
//       },
//       {
//         id: 166,
//         region_id: 11,
//         name: 'Yuqorichirchiq tumani',
//       },
//       {
//         id: 167,
//         region_id: 11,
//         name: 'Yangiyo‘l tumani',
//       },
//       {
//         id: 168,
//         region_id: 12,
//         name: 'Beshariq tumani',
//       },
//       {
//         id: 169,
//         region_id: 12,
//         name: 'Bog‘dod tumani',
//       },
//       {
//         id: 170,
//         region_id: 12,
//         name: 'Buvayda tumani',
//       },
//       {
//         id: 171,
//         region_id: 12,
//         name: 'Dang‘ara tumani',
//       },
//       {
//         id: 172,
//         region_id: 12,
//         name: 'Yozyovon tumani',
//       },
//       {
//         id: 173,
//         region_id: 12,
//         name: 'Quva tumani',
//       },
//       {
//         id: 174,
//         region_id: 12,
//         name: 'Quvasoy shahri',
//       },
//       {
//         id: 175,
//         region_id: 12,
//         name: 'Qo‘qon shahri',
//       },
//       {
//         id: 176,
//         region_id: 12,
//         name: 'Qo‘shtepa tumani',
//       },
//       {
//         id: 177,
//         region_id: 12,
//         name: 'Marg‘ilon shahri',
//       },
//       {
//         id: 178,
//         region_id: 12,
//         name: 'Oltiariq tumani',
//       },
//       {
//         id: 179,
//         region_id: 12,
//         name: 'Rishton tumani',
//       },
//       {
//         id: 180,
//         region_id: 12,
//         name: 'So‘x tumani',
//       },
//       {
//         id: 181,
//         region_id: 12,
//         name: 'Toshloq tumani',
//       },
//       {
//         id: 182,
//         region_id: 12,
//         name: 'Uchko‘prik tumani',
//       },
//       {
//         id: 183,
//         region_id: 12,
//         name: 'O‘zbekiston tumani',
//       },
//       {
//         id: 184,
//         region_id: 12,
//         name: 'Farg‘ona tumani',
//       },
//       {
//         id: 185,
//         region_id: 12,
//         name: 'Farg‘ona shahri',
//       },
//       {
//         id: 186,
//         region_id: 12,
//         name: 'Furqat tumani',
//       },
//       {
//         id: 187,
//         region_id: 13,
//         name: 'Bog‘ot tumani',
//       },
//       {
//         id: 188,
//         region_id: 13,
//         name: 'Gurlan tumani',
//       },
//       {
//         id: 189,
//         region_id: 13,
//         name: 'Qo‘shko‘pir tumani',
//       },
//       {
//         id: 190,
//         region_id: 13,
//         name: 'Urganch tumani',
//       },
//       {
//         id: 191,
//         region_id: 13,
//         name: 'Urganch shahri',
//       },
//       {
//         id: 192,
//         region_id: 13,
//         name: 'Xiva tumani',
//       },
//       {
//         id: 193,
//         region_id: 13,
//         name: 'Xazarasp tumani',
//       },
//       {
//         id: 194,
//         region_id: 13,
//         name: 'Xonqa tumani',
//       },
//       {
//         id: 195,
//         region_id: 13,
//         name: 'Shavot tumani',
//       },
//       {
//         id: 196,
//         region_id: 13,
//         name: 'Yangiariq tumani',
//       },
//       {
//         id: 197,
//         region_id: 13,
//         name: 'Yangibozor tumani',
//       },
//       {
//         id: 198,
//         region_id: 14,
//         name: 'Bektimer tumani',
//       },
//       {
//         id: 199,
//         region_id: 14,
//         name: 'M.Ulug‘bek tumani',
//       },
//       {
//         id: 200,
//         region_id: 14,
//         name: 'Mirobod tumani',
//       },
//       {
//         id: 201,
//         region_id: 14,
//         name: 'Olmazor tumani',
//       },
//       {
//         id: 202,
//         region_id: 14,
//         name: 'Sergeli tumani',
//       },
//       {
//         id: 203,
//         region_id: 14,
//         name: 'Uchtepa tumani',
//       },
//       {
//         id: 204,
//         region_id: 14,
//         name: 'Yashnobod tumani',
//       },
//       {
//         id: 205,
//         region_id: 14,
//         name: 'Chilonzor tumani',
//       },
//       {
//         id: 206,
//         region_id: 14,
//         name: 'Shayxontohur tumani',
//       },
//       {
//         id: 207,
//         region_id: 14,
//         name: 'Yunusobod tumani',
//       },
//       {
//         id: 208,
//         region_id: 14,
//         name: 'Yakkasaroy tumani',
//       },
//       {
//         id: 209,
//         region_id: 1,
//         name: 'Taxiatosh shahri',
//       },
//       {
//         id: 210,
//         region_id: 2,
//         name: 'Asaka shahri',
//       },
//       {
//         id: 211,
//         regionId: 9,
//         region_id: 9,
//         name: 'Bandixon tumani',
//       },
//       {
//         id: 212,
//         region_id: 11,
//         name: 'Ohangaron shahri',
//       },
//       {
//         id: 213,
//         region_id: 11,
//         name: 'Yangiyo‘l shahri',
//       },
//       {
//         id: 215,
//         region_id: 11,
//         name: 'Toshkent tumani',
//       },
//       {
//         id: 216,
//         region_id: 1,
//         name: "Bo'zatov tumani",
//       },
//       {
//         id: 217,
//         region_id: 13,
//         name: 'Tuproqqala tumani',
//       },
//     ],
//   }
  
//   const openBudjetData = {
//     content: [
//       {
//         id: '23aae3ed-c6dd-4d02-a938-d5ba1f6f809b',
//         boardId: 31,
//         quarterName: 'Навбаҳор',
//         publicId: '031271213009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-25',
//         districtName: 211,
//         regionId: 9,
//         categoryName:
//           'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           'Navbaxor mfy Istiqlol kuchasiga transformator va Sim yogochlani beton ustunlarga almashtirish ',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fda00702c2426b4dfcde4f98b068589c',
//           'fd76591850b847bbffdf0d9e1de1d7c9',
//         ],
//       },
//       {
//         id: '95a1c806-1fdb-420f-a0ee-aa3899fe79d7',
//         boardId: 31,
//         quarterName: 'Баҳористон',
//         publicId: '031269583009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-24',
//         districtName: 211,
//         regionId: 9,
//         categoryName:
//           'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           'БАХОРИСТОН  МАХАЛЛАСИГА   ТРАСФАРМАТИР   ВА  СИМ  ЕГОЧЛАРНИ  ЯНГИЗИГА  АЛМАШТРИШ   ВА  ЁПИК  КАБИЛ  ТОРТИШ',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fb4ad8056e55f7b9fabe9fac111ba279',
//           'fb7f92d5254743a4fb552c8c8f984cfc',
//         ],
//       },
//       {
//         id: '338cf6eb-9bb3-4934-b1cf-20aa9587d136',
//         boardId: 31,
//         quarterName: 'Фаравон',
//         publicId: '031269523009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-24',
//         districtName: 211,
//         regionId: 9,
//         categoryName:
//           'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           'Фаровон мфй Бойчечак, Ҳурдиёр, Истиқбол кўчаларига ёритиш кўча чироқларини ўрнатиш ушбу кўчаларга трансформатор ўрнатиш.',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fde083e1000a9a69fb10a1a559cc8fd7',
//           'fc5504535a802f63fcae4834b0d55635',
//           'fbf9c717a3810ffffc3de69ed91f45e2',
//         ],
//       },
//       {
//         id: 'fc15bf42-0887-48d3-90ff-854fbb035c32',
//         boardId: 31,
//         quarterName: 'Бандихон',
//         publicId: '031269515009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-24',
//         districtName: 211,
//         regionId: 9,
//         categoryName:
//           'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           "Bandixon mahallasi Nurchilar qishlog'ini  (Shifokorlar, Izdoshlar, Baynalminal ko'chalari) simyog'ochlar va tungi yoritish chiroqlari o'rnatish.",
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fad6a3207be600bdfc15ac52f2bed729',
//           'f96c8f83ccb02d1cf977c4a1ae8bdf2e',
//         ],
//       },
//       {
//         id: 'a50f975a-412d-46d9-b86b-75e7577ee935',
//         boardId: 31,
//         quarterName: 'Наврўз',
//         publicId: '031269075009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-24',
//         districtName: 211,
//         regionId: 9,
//         categoryName:
//           'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           'Навруз махалласи Истиклол кучасига Янги трансфарматор урнатиш',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'f94cc26a9d851d58fdcb505eb8e16b8a',
//           'f8b16ce746720b11f85df0ee5e4a76a0',
//           'fd1c250b1d508106f969a543c0ed7c3c',
//           'fa9af2341a86ee15fce9cefa89c38729',
//         ],
//       },
//       {
//         id: '1b7e1ef9-5fa5-4fc5-8d35-64a0276caf41',
//         boardId: 31,
//         quarterName: 'Зевар',
//         publicId: '031268415009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-24',
//         districtName: 211,
//         regionId: 9,
//         categoryName:
//           'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           'Зевар МФЙда мавжуд трансформатор маънан эскирган ва аҳоли кўпайганлиги хисобига ортиқча кучланиш билан ишлаяпти. МФЙдаги 70 тача симёғочлар ҳам эскирган, айримлари талабга жавоб бермайди. Трансформатор ва симёғочларни янгилаш керак.',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fa9217b751411d63fd205c3703aa81dc',
//           'f8bd76244a19fa97fb3399531ca1f414',
//         ],
//       },
//       {
//         id: 'e40bce31-a5af-4a2b-99fe-473cd9ccc38b',
//         boardId: 31,
//         quarterName: 'Обикор',
//         publicId: '031268015009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-24',
//         districtName: 211,
//         regionId: 9,
//         categoryName:
//           'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
//         regionName: 'Сурхондарё вилояти',
//         description: 'Obikor mfy Yangi zamon kuchasiga tungi chiroq õrnatish',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'f92a618a53d4b96cfdc725b6da953d93',
//           'fc3ebbc5bccbcc11feb57004c5b7ca61',
//         ],
//       },
//       {
//         id: '4e7dec33-e0fc-4d11-9822-c0caa1fa5673',
//         boardId: 31,
//         quarterName: 'Сарой',
//         publicId: '031267740009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-24',
//         districtName: 211,
//         regionId: 9,
//         categoryName:
//           'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
//         regionName: 'Сурхондарё вилояти',
//         description: 'Гулсарой кўчасига юқори кучланишли трансформатор ўрнатиш',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fd1305355a3c183af944d65bb60cf6af',
//           'fdc0de132a5fade7fa4e46cddac76df1',
//         ],
//       },
//       {
//         id: '7ee05e4d-135b-4098-92da-91e802c08af4',
//         boardId: 31,
//         quarterName: 'Сарой',
//         publicId: '031267611009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-24',
//         districtName: 211,
//         regionId: 9,
//         categoryName:
//           'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
//         regionName: 'Сурхондарё вилояти',
//         description: 'Сарой маҳалласи Обод юрт кўчасига 120 дона симёғоч ўрнатиш',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fa5226292fbcb5bff9f7800a70871749',
//           'fb940c1855584b63fea5412ae3a8de50',
//         ],
//       },
//       {
//         id: '5ac68a85-a318-40b0-833a-1903bebb1f90',
//         boardId: 31,
//         quarterName: 'Ўрғилсой',
//         publicId: '031267560009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-24',
//         districtName: 211,
//         regionId: 9,
//         categoryName:
//           'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
//         regionName: 'Сурхондарё вилояти',
//         description: 'Янгибог ва хмсор кучаларига куча чирокларини урнатиш',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fcfd0dd55422cfdcf8a6b0e15ea5d772',
//           'f9511ec0e6cc7499fca5ea86feb18acf',
//         ],
//       },
//       {
//         id: 'aebc9853-f512-4a93-ae7a-3d793d1bc0d1',
//         boardId: 31,
//         quarterName: 'Хўжайпок',
//         publicId: '031266647009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-23',
//         districtName: 211,
//         regionId: 9,
//         categoryName:
//           'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           'Хўжаипок МФЙ 27-умумий ўрта таьлим мактабига олиб блрувчи Имом Ал-Бухорий кўчасига пиедалар йўлакчасини қуриш ва тунги чироқлар ўрнатиш.',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fd7dd614600a5a93f904c9016c65ff1a',
//           'fdb40b5e62099b42f93ee10746cb18a7',
//         ],
//       },
//       {
//         id: '00651a65-3c0e-4825-9d74-46b89bf09880',
//         boardId: 31,
//         quarterName: 'Полвонтош',
//         publicId: '031265323009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-22',
//         districtName: 211,
//         regionId: 9,
//         categoryName:
//           'Кўча чироқларини ўрнатиш ёки таъмирлаш (трансформатор, симёғоч ўрнатиш) тадбирлари',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           'Polvontosh mfy dagi faravon hayot kochasiga biton stalbalar ornatish',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fc98cd85abe6fa61f81ef5308cd2eb5c',
//           'fdfc6b42ba0de83cfa4cd4b81af3d122',
//         ],
//       },
//       {
//         id: 'bda7a5a8-ea52-4c8e-b08c-a20538f60c5b',
//         boardId: 31,
//         quarterName: 'Арпапоя',
//         publicId: '031270827009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-25',
//         districtName: 130,
//         categoryName:
//           'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           'Yangi Oʻzbekston koʻchasi va Xusanobod koʻchasigacha boʻlgan ichki ariqlarni sementlash va tozalash orqali aholining oqova suvga bplgan extiyoji yaxshilanadi',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fd78526c9ca7b3b8fe041ea82ad6285e',
//           'fc9cb9c57fdb1002f87ef7196ccb9642',
//         ],
//       },
//       {
//         id: 'c96145ff-c327-4b45-a29c-e6d7cb75e7cb',
//         boardId: 31,
//         quarterName: 'Гулистон',
//         publicId: '031270710009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-25',
//         districtName: 130,
//         categoryName:
//           'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           'Х анооов  хкдуилаги   арик  зовурларни  тулик  тозалаш  ва  бетонлпш',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'f91898284920269bfb5a3ecffae0b45a',
//           'fab1d1f6d4b91d13fb4eab9fe088c268',
//           'fce6ab18102162b5fe36697ee73dac3d',
//           'feb090ce5e8672daf9cb9183d8b7bc6a',
//         ],
//       },
//       {
//         id: '30255471-ebd1-473b-9eef-afa087086505',
//         boardId: 31,
//         quarterName: 'Боғаро',
//         publicId: '031269823009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-24',
//         districtName: 130,
//         categoryName:
//           'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
//         regionName: 'Сурхондарё вилояти',
//         description: 'Богаро мфйдаги арик завирлар учун',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fe0fee941d3e1a20fc4a627c30d95140',
//           'f9573c4e3bc19cb0fdcb202c56315988',
//         ],
//       },
//       {
//         id: 'aa465167-279c-4f6c-8d07-49276bc00679',
//         boardId: 31,
//         quarterName: 'Тайфанг',
//         publicId: '031269469009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-24',
//         districtName: 130,
//         categoryName:
//           'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
//         regionName: 'Сурхондарё вилояти',
//         description: '5 км оқува сувини темир трубада тортиш',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fda0edf827ebaecafa1aab20b8436813',
//           'f8e24d81e39a9d88f8560bf50edaf956',
//         ],
//       },
//       {
//         id: '82b88719-b32c-4b1e-a6ff-f5a33a038955',
//         boardId: 31,
//         quarterName: 'Исломобод',
//         publicId: '031269354009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-24',
//         districtName: 130,
//         categoryName:
//           'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           'Қумқўрғон тумани "Исломобод" маҳалласи тойлоқ кўчаси аҳолиси мурожаатига кўра зовур қазиш ишларини амалга ошириш',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fab1d4f1b64a0ebcfecc4e8b3722660c',
//           'f9618be6c5eb1aecf9e3cd7d527b1252',
//         ],
//       },
//       {
//         id: 'd91931c6-5519-4bc5-87a4-a5e4589437ac',
//         boardId: 31,
//         quarterName: 'Халаки',
//         publicId: '031267971009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-24',
//         districtName: 130,
//         categoryName:
//           'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           'Спортчилар кучаси Оксув кучаси ва Чавондоз кучалардаги арик ва зовурларни бетонлаш',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'f92f60266845a6f2f96a23bae4c2ecd1',
//           'ff8297840e31ec07fd71170ad78b5d4f',
//           'fee46275912ec90afc9a3b1c63ee6d8f',
//         ],
//       },
//       {
//         id: '6ef4e659-f42c-44f8-8ba1-b3fa62ac7333',
//         boardId: 31,
//         quarterName: 'Боймоқли',
//         publicId: '031267535009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-24',
//         districtName: 130,
//         categoryName:
//           'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           "BOYMOQLI MFYDAGI KATAYO'L KO'CHASIDAGI ARIQLARNI TARTIBGA KELTRISH",
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fa6b65067e87205dffff29afd603ae80',
//           'fa7ee995f2756c95fbc56228df1cb359',
//         ],
//       },
//       {
//         id: 'e0df7bd7-6365-4d88-8b15-3cef7613f05a',
//         boardId: 31,
//         quarterName: 'Пастхам',
//         publicId: '031267337009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-23',
//         districtName: 130,
//         categoryName:
//           'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
//         regionName: 'Сурхондарё вилояти',
//         description: 'Пастхам  МФЙ ',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'faf9414e25645d44fd735d782d431a90',
//           'fe215740c88ade33f846a614f209d0f0',
//         ],
//       },
//       {
//         id: 'e0537e20-2741-44f2-bddb-4ee556d481d3',
//         boardId: 31,
//         quarterName: 'Жийдали',
//         publicId: '031266947009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-23',
//         districtName: 130,
//         categoryName:
//           'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           'M.Ulugʻbek va Obod mahalla koʻchalaridagi ariqlarni betonlash',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fbbbf8c06837605cfc1055caa9ebc1cc',
//           'fa4a7b19bef1b25ffb0399ffa893b72a',
//         ],
//       },
//       {
//         id: '2e553e25-4449-446f-b06b-4ef8c43e356e',
//         boardId: 31,
//         quarterName: 'Ўзбекистон 5 йиллиги',
//         publicId: '031266832009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-23',
//         districtName: 130,
//         categoryName:
//           'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
//         regionName: 'Сурхондарё вилояти',
//         description: 'Maxalla xududidagi 6 km masofadagi ariqlarni qazish',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fd0af77687fbc91bfeb3f73e27156ac0',
//           'ff4abc2bdfbdb90ffe862d0616398819',
//         ],
//       },
//       {
//         id: '41ee16d7-2594-4099-8052-abb7c564aac3',
//         boardId: 31,
//         quarterName: 'Саховат',
//         publicId: '031266830009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-23',
//         districtName: 130,
//         categoryName:
//           'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           'Саховат МФЙда 2500 ахоли учун 5 дона артизан сув кудуги казиш',
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'f86046da309fe41bfb644eaafbcca240',
//           'fe08bf04db8e60fdff2823f0766ba5ca',
//         ],
//       },
//       {
//         id: '23950ee9-9630-4dbe-a1b5-afafcf0c61e0',
//         boardId: 31,
//         quarterName: 'Янги хаёт',
//         publicId: '031266821009',
//         title: '',
//         stage: 'INITIAL',
//         createdDate: '2023-07-23',
//         districtName: 130,
//         categoryName:
//           'Дренаж ва ариқ (зовур) ларни тартибга келтириш билан боғлиқ тадбирлар',
//         regionName: 'Сурхондарё вилояти',
//         description:
//           "Yangi hayot  mfy  hududidagi  zavur  va  ariqlarni  qazdirish  va  betonlash  ishlari suv  o'tuvchi  zavurlarga  sim  reshotkalar  bilar  o'rash  ishlari  uschun ",
//         voteCount: 0,
//         coefficient: null,
//         grantedAmount: 0,
//         images: [
//           'fbbd3db2c4e85009fbc7f6f774fb33ee',
//           'f9124bf867257fa4f9ded631f64de58b',
//         ],
//       },
//     ],
//   }

//   let filteredData = [...openBudjetData.content]

//   data.regions.forEach((region) =>{
//     const option = document.createElement('option')
//     option.setAttribute('value',region.id)
//     option.textContent = region.name
//     select.appendChild(option)
//   })


//   select.addEventListener('change',(e) =>{
//     districts.innerHTML = '<option selected disabled>Tumanni tanlang</option>'
//     selectData.region = e.target.value
//     const filteredDistricts = data.districts.filter((district) => district.region_id === Number(e.target.value))
//     filteredDistricts.forEach((district) =>{
//         const option = document.createElement('option')
//         option.setAttribute('value',district.id)
//         option.textContent = district.name
//         districts.appendChild(option)
//     })
//   })

//   districts.addEventListener("change",(e) =>{
//     selectData.district = e.target.value
//     filteredData = openBudjetData.content.filter((content) => content.districtName == e.target.value)

//     reder()
//   })

//   function reder() {
//     result.innerHTML = ''
//     if (!filteredData.length) {
//         result.textContent = 'Bu filter boyicha ma"lumot yoq'
//     }
//     filteredData.forEach((item) =>{
//         const container = document.createElement('div')
//         container.classList.add('box')
//         container.textContent = item.description
//         result.appendChild(container)
//     })
//   }

//   reder()


//==================================================================================================================================>>
const data = [
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 769791,
        minFullPrice: 42000000,
        minSellPrice: 28222000,
        offer: null,
        badges: [
          {
            backgroundColor: "#9A72F2",
            text: "Chilla Bozor",
            textColor: "#FFFFFF",
            __typename: "BottomTextBadge",
            description: null,
            id: 129,
            link: null,
          },
        ],
        ordersQuantity: 0,
        productId: 580907,
        rating: 0,
        title: "Lazer proyektor Changhong B7U 4K ",
        photos: [
          {
            key: "ci21lgjltlh4bk4lbt7g",
            link: {
              high: "https://images.uzum.uz/ci21lgjltlh4bk4lbt7g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci21lgjltlh4bk4lbt7g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci21lgjltlh4bk4lbt7g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci21lgjltlh4bk4lbt7g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci21o2d6sfhndlbnuqf0",
            link: {
              high: "https://images.uzum.uz/ci21o2d6sfhndlbnuqf0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci21o2d6sfhndlbnuqf0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci21o2d6sfhndlbnuqf0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci21o2d6sfhndlbnuqf0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci21o1d6sfhndlbnuqe0",
            link: {
              high: "https://images.uzum.uz/ci21o1d6sfhndlbnuqe0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci21o1d6sfhndlbnuqe0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci21o1d6sfhndlbnuqe0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci21o1d6sfhndlbnuqe0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci21o2denntd8rfb5o5g",
            link: {
              high: "https://images.uzum.uz/ci21o2denntd8rfb5o5g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci21o2denntd8rfb5o5g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci21o2denntd8rfb5o5g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci21o2denntd8rfb5o5g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci21o4d6sfhndlbnuqfg",
            link: {
              high: "https://images.uzum.uz/ci21o4d6sfhndlbnuqfg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci21o4d6sfhndlbnuqfg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci21o4d6sfhndlbnuqfg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci21o4d6sfhndlbnuqfg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci21o556sfhndlbnuqg0",
            link: {
              high: "https://images.uzum.uz/ci21o556sfhndlbnuqg0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci21o556sfhndlbnuqg0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci21o556sfhndlbnuqg0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci21o556sfhndlbnuqg0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci21o5l40v9pplt3hbq0",
            link: {
              high: "https://images.uzum.uz/ci21o5l40v9pplt3hbq0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci21o5l40v9pplt3hbq0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci21o5l40v9pplt3hbq0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci21o5l40v9pplt3hbq0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 490041,
        minFullPrice: 29199000,
        minSellPrice: 28199000,
        offer: null,
        badges: [],
        ordersQuantity: 1,
        productId: 402713,
        rating: 0,
        title:
          'Noutbuk ThinkPad X1 Carbon Gen 10, 14"2.2K IPS 300nits, i7-1260P 12C,16GB DDR5, 1TBSSD,Iris Xe,DOS',
        photos: [
          {
            key: "cgpptinhj8j9g69ckt9g",
            link: {
              high: "https://images.uzum.uz/cgpptinhj8j9g69ckt9g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpptinhj8j9g69ckt9g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpptinhj8j9g69ckt9g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpptinhj8j9g69ckt9g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpptjvg49devoada7d0",
            link: {
              high: "https://images.uzum.uz/cgpptjvg49devoada7d0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpptjvg49devoada7d0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpptjvg49devoada7d0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpptjvg49devoada7d0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpptjr57mg9720ec700",
            link: {
              high: "https://images.uzum.uz/cgpptjr57mg9720ec700/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpptjr57mg9720ec700/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpptjr57mg9720ec700/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpptjr57mg9720ec700/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpptjvhj8j9g69cktag",
            link: {
              high: "https://images.uzum.uz/cgpptjvhj8j9g69cktag/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpptjvhj8j9g69cktag/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpptjvhj8j9g69cktag/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpptjvhj8j9g69cktag/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpptjvg49devoada7dg",
            link: {
              high: "https://images.uzum.uz/cgpptjvg49devoada7dg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpptjvg49devoada7dg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpptjvg49devoada7dg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpptjvg49devoada7dg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpptjvhj8j9g69cktb0",
            link: {
              high: "https://images.uzum.uz/cgpptjvhj8j9g69cktb0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpptjvhj8j9g69cktb0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpptjvhj8j9g69cktb0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpptjvhj8j9g69cktb0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpptk7g49devoada7e0",
            link: {
              high: "https://images.uzum.uz/cgpptk7g49devoada7e0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpptk7g49devoada7e0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpptk7g49devoada7e0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpptk7g49devoada7e0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 266169,
        minFullPrice: 28000000,
        minSellPrice: 28000000,
        offer: null,
        badges: [],
        ordersQuantity: 0,
        productId: 248320,
        rating: 0,
        title: "Lazerli KFQ KYOCERA ECOSYS M4132idn 1102P13NL0, rangli",
        photos: [
          {
            key: "cf7n99avtie1lhbhbv4g",
            link: {
              high: "https://images.uzum.uz/cf7n99avtie1lhbhbv4g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cf7n99avtie1lhbhbv4g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cf7n99avtie1lhbhbv4g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cf7n99avtie1lhbhbv4g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cf7nhgov1htd23alcn3g",
            link: {
              high: "https://images.uzum.uz/cf7nhgov1htd23alcn3g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cf7nhgov1htd23alcn3g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cf7nhgov1htd23alcn3g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cf7nhgov1htd23alcn3g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cf7nucavtie1lhbhc2ng",
            link: {
              high: "https://images.uzum.uz/cf7nucavtie1lhbhc2ng/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cf7nucavtie1lhbhc2ng/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cf7nucavtie1lhbhc2ng/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cf7nucavtie1lhbhc2ng/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cf7o0dgl08k0o9qia9ag",
            link: {
              high: "https://images.uzum.uz/cf7o0dgl08k0o9qia9ag/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cf7o0dgl08k0o9qia9ag/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cf7o0dgl08k0o9qia9ag/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cf7o0dgl08k0o9qia9ag/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cf7o0dgv1htd23alcqag",
            link: {
              high: "https://images.uzum.uz/cf7o0dgv1htd23alcqag/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cf7o0dgv1htd23alcqag/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cf7o0dgv1htd23alcqag/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cf7o0dgv1htd23alcqag/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 416751,
        minFullPrice: 32000000,
        minSellPrice: 26500000,
        offer: null,
        badges: [],
        ordersQuantity: 2,
        productId: 355991,
        rating: 0,
        title: "Dasturiy ta'minot Lider Taxi",
        photos: [
          {
            key: "cgug8hvg49devoae7i8g",
            link: {
              high: "https://images.uzum.uz/cgug8hvg49devoae7i8g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgug8hvg49devoae7i8g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgug8hvg49devoae7i8g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgug8hvg49devoae7i8g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgug8hvhj8j9g69dirg0",
            link: {
              high: "https://images.uzum.uz/cgug8hvhj8j9g69dirg0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgug8hvhj8j9g69dirg0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgug8hvhj8j9g69dirg0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgug8hvhj8j9g69dirg0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgug8hnhj8j9g69dirfg",
            link: {
              high: "https://images.uzum.uz/cgug8hnhj8j9g69dirfg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgug8hnhj8j9g69dirfg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgug8hnhj8j9g69dirfg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgug8hnhj8j9g69dirfg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgug8hng49devoae7i80",
            link: {
              high: "https://images.uzum.uz/cgug8hng49devoae7i80/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgug8hng49devoae7i80/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgug8hng49devoae7i80/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgug8hng49devoae7i80/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgug8hj57mg9720fa0ig",
            link: {
              high: "https://images.uzum.uz/cgug8hj57mg9720fa0ig/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgug8hj57mg9720fa0ig/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgug8hj57mg9720fa0ig/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgug8hj57mg9720fa0ig/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgctqivg49devoab9e5g",
            link: {
              high: "https://images.uzum.uz/cgctqivg49devoab9e5g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgctqivg49devoab9e5g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgctqivg49devoab9e5g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgctqivg49devoab9e5g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgctqqnhj8j9g69ajhog",
            link: {
              high: "https://images.uzum.uz/cgctqqnhj8j9g69ajhog/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgctqqnhj8j9g69ajhog/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgctqqnhj8j9g69ajhog/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgctqqnhj8j9g69ajhog/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 487347,
        minFullPrice: 26990000,
        minSellPrice: 25990000,
        offer: null,
        badges: [],
        ordersQuantity: 1,
        productId: 401469,
        rating: 0,
        title:
          'Noutbuk Lenovo ThinkPad X1 Carbon Gen 10,14" WUXGA IPS 400 nit, i7-1260P, 16GBDDR5, 512GB, Iris Xe, DOS',
        photos: [
          {
            key: "cgpain7g49devoad82tg",
            link: {
              high: "https://images.uzum.uz/cgpain7g49devoad82tg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpain7g49devoad82tg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpain7g49devoad82tg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpain7g49devoad82tg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpaio7g49devoad82u0",
            link: {
              high: "https://images.uzum.uz/cgpaio7g49devoad82u0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpaio7g49devoad82u0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpaio7g49devoad82u0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpaio7g49devoad82u0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpaio7hj8j9g69ciokg",
            link: {
              high: "https://images.uzum.uz/cgpaio7hj8j9g69ciokg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpaio7hj8j9g69ciokg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpaio7hj8j9g69ciokg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpaio7hj8j9g69ciokg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpaio357mg9720ea2kg",
            link: {
              high: "https://images.uzum.uz/cgpaio357mg9720ea2kg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpaio357mg9720ea2kg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpaio357mg9720ea2kg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpaio357mg9720ea2kg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpaiofhj8j9g69ciol0",
            link: {
              high: "https://images.uzum.uz/cgpaiofhj8j9g69ciol0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpaiofhj8j9g69ciol0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpaiofhj8j9g69ciol0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpaiofhj8j9g69ciol0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpaipvg49devoad82ug",
            link: {
              high: "https://images.uzum.uz/cgpaipvg49devoad82ug/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpaipvg49devoad82ug/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpaipvg49devoad82ug/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpaipvg49devoad82ug/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 685567,
        minFullPrice: 25000000,
        minSellPrice: 25000000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "3 000 000 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 1,
        productId: 529157,
        rating: 0,
        title:
          "Quyosh panelidan quvvat olish imkoniyatiga ega portativ elektr stantsiyasi. Powerbank",
        photos: [
          {
            key: "ciog0275d7kom1tjrrk0",
            link: {
              high: "https://images.uzum.uz/ciog0275d7kom1tjrrk0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ciog0275d7kom1tjrrk0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ciog0275d7kom1tjrrk0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ciog0275d7kom1tjrrk0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -1,
            value: "#000000",
            title: "Qora",
            characteristic: {
              values: [
                {
                  id: -1,
                  title: "Qora",
                  value: "#000000",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 333567,
        minFullPrice: 24689000,
        minSellPrice: 24689000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "2 962 680 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 4,
        productId: 298894,
        rating: 0,
        title:
          'Noutbuk Legion 5 Pro 16ITH6H, 16" 2.5K 165 Hz, i7-11800H, 32GB, 1TB SSD, RTX 3070 8GB, DOS',
        photos: [
          {
            key: "cfqg687hgiov1qicm7jg",
            link: {
              high: "https://images.uzum.uz/cfqg687hgiov1qicm7jg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cfqg687hgiov1qicm7jg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cfqg687hgiov1qicm7jg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cfqg687hgiov1qicm7jg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cfqg68vg49devoa8qhs0",
            link: {
              high: "https://images.uzum.uz/cfqg68vg49devoa8qhs0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cfqg68vg49devoa8qhs0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cfqg68vg49devoa8qhs0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cfqg68vg49devoa8qhs0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cfqg69vhgiov1qicm7l0",
            link: {
              high: "https://images.uzum.uz/cfqg69vhgiov1qicm7l0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cfqg69vhgiov1qicm7l0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cfqg69vhgiov1qicm7l0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cfqg69vhgiov1qicm7l0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cfqg6ang49devoa8qhtg",
            link: {
              high: "https://images.uzum.uz/cfqg6ang49devoa8qhtg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cfqg6ang49devoa8qhtg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cfqg6ang49devoa8qhtg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cfqg6ang49devoa8qhtg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cfqg6bfhgiov1qicm7m0",
            link: {
              high: "https://images.uzum.uz/cfqg6bfhgiov1qicm7m0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cfqg6bfhgiov1qicm7m0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cfqg6bfhgiov1qicm7m0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cfqg6bfhgiov1qicm7m0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cfqg6c7g49devoa8qhu0",
            link: {
              high: "https://images.uzum.uz/cfqg6c7g49devoa8qhu0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cfqg6c7g49devoa8qhu0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cfqg6c7g49devoa8qhu0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cfqg6c7g49devoa8qhu0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 840460,
        minFullPrice: 25770000,
        minSellPrice: 21904000,
        offer: null,
        badges: [
          {
            backgroundColor: "#9A72F2",
            text: "Chilla Bozor",
            textColor: "#FFFFFF",
            __typename: "BottomTextBadge",
            description: null,
            id: 129,
            link: null,
          },
          {
            backgroundColor: "#FFFF00",
            text: "2 628 480 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 570756,
        rating: 0,
        title: "Smartfon Samsung Galaxy Z Fold4 + Galaxy Watch4 Classic, 46 mm",
        photos: [
          {
            key: "cin6agf5d7kom1tjnjig",
            link: {
              high: "https://images.uzum.uz/cin6agf5d7kom1tjnjig/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin6agf5d7kom1tjnjig/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin6agf5d7kom1tjnjig/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin6agf5d7kom1tjnjig/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin6ad36edfostiisc90",
            link: {
              high: "https://images.uzum.uz/cin6ad36edfostiisc90/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin6ad36edfostiisc90/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin6ad36edfostiisc90/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin6ad36edfostiisc90/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -275,
            value: "#0F3D17",
            title: "Toʻq yashil",
            characteristic: {
              values: [
                {
                  id: -275,
                  title: "Toʻq yashil",
                  value: "#0F3D17",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -1,
                  title: "Qora",
                  value: "#000000",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 752663,
        minFullPrice: 25770000,
        minSellPrice: 21904000,
        offer: null,
        badges: [
          {
            backgroundColor: "#9A72F2",
            text: "Chilla Bozor",
            textColor: "#FFFFFF",
            __typename: "BottomTextBadge",
            description: null,
            id: 129,
            link: null,
          },
          {
            backgroundColor: "#FFFF00",
            text: "2 628 480 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 1,
        productId: 570756,
        rating: 0,
        title: "Smartfon Samsung Galaxy Z Fold4 + Galaxy Watch4 Classic, 46 mm",
        photos: [
          {
            key: "cin6ad36edfostiisc90",
            link: {
              high: "https://images.uzum.uz/cin6ad36edfostiisc90/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin6ad36edfostiisc90/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin6ad36edfostiisc90/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin6ad36edfostiisc90/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin6agf5d7kom1tjnjig",
            link: {
              high: "https://images.uzum.uz/cin6agf5d7kom1tjnjig/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin6agf5d7kom1tjnjig/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin6agf5d7kom1tjnjig/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin6agf5d7kom1tjnjig/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -1,
            value: "#000000",
            title: "Qora",
            characteristic: {
              values: [
                {
                  id: -275,
                  title: "Toʻq yashil",
                  value: "#0F3D17",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -1,
                  title: "Qora",
                  value: "#000000",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 199536,
        minFullPrice: 21236000,
        minSellPrice: 21236000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "2 548 320 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 1,
        productId: 188750,
        rating: 0,
        title: "Smartfon Samsung Galaxy S22 Ultra 12 GB/512 GB, bordo ",
        photos: [
          {
            key: "cegkcc8l08kcldtoudvg",
            link: {
              high: "https://images.uzum.uz/cegkcc8l08kcldtoudvg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cegkcc8l08kcldtoudvg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cegkcc8l08kcldtoudvg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cegkcc8l08kcldtoudvg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -263,
            value: "#9B2D30",
            title: "Toʻq qizil",
            characteristic: {
              values: [
                {
                  id: -263,
                  title: "Toʻq qizil",
                  value: "#9B2D30",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 199526,
        minFullPrice: 21236000,
        minSellPrice: 21236000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "2 548 320 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 188740,
        rating: 0,
        title: "Smartfon Samsung Galaxy S22 Ultra 12 GB / 512 GB, qora",
        photos: [
          {
            key: "cegk1d2vtie1lhbf76g0",
            link: {
              high: "https://images.uzum.uz/cegk1d2vtie1lhbf76g0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cegk1d2vtie1lhbf76g0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cegk1d2vtie1lhbf76g0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cegk1d2vtie1lhbf76g0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -1,
            value: "#000000",
            title: "Qora",
            characteristic: {
              values: [
                {
                  id: -1,
                  title: "Qora",
                  value: "#000000",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 294941,
        minFullPrice: 23510000,
        minSellPrice: 21160000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "2 539 200 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 271025,
        rating: 0,
        title: "3D skaner Shining 3D Einscan SE",
        photos: [
          {
            key: "cfgaqcd40v9uauhi16ig",
            link: {
              high: "https://images.uzum.uz/cfgaqcd40v9uauhi16ig/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cfgaqcd40v9uauhi16ig/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cfgaqcd40v9uauhi16ig/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cfgaqcd40v9uauhi16ig/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cfgaqd4vutv7dbm92pig",
            link: {
              high: "https://images.uzum.uz/cfgaqd4vutv7dbm92pig/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cfgaqd4vutv7dbm92pig/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cfgaqd4vutv7dbm92pig/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cfgaqd4vutv7dbm92pig/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 57149,
        minFullPrice: 25693000,
        minSellPrice: 20700000,
        offer: null,
        badges: [
          {
            backgroundColor: "#9A72F2",
            text: "Chilla Bozor",
            textColor: "#FFFFFF",
            __typename: "BottomTextBadge",
            description: null,
            id: 129,
            link: null,
          },
          {
            backgroundColor: "#FFFF00",
            text: "2 484 000 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 1,
        productId: 53625,
        rating: 0,
        title: "Smartfon Samsung Galaxy Z Fold 4 12/256 GB Beige",
        photos: [
          {
            key: "cd02m570tgqvlm57tneg",
            link: {
              high: "https://images.uzum.uz/cd02m570tgqvlm57tneg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cd02m570tgqvlm57tneg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cd02m570tgqvlm57tneg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cd02m570tgqvlm57tneg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cd02m53b3ho5lmuq29e0",
            link: {
              high: "https://images.uzum.uz/cd02m53b3ho5lmuq29e0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cd02m53b3ho5lmuq29e0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cd02m53b3ho5lmuq29e0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cd02m53b3ho5lmuq29e0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cd02m535a95unf12357g",
            link: {
              high: "https://images.uzum.uz/cd02m535a95unf12357g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cd02m535a95unf12357g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cd02m535a95unf12357g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cd02m535a95unf12357g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cd02m535a95unf123570",
            link: {
              high: "https://images.uzum.uz/cd02m535a95unf123570/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cd02m535a95unf123570/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cd02m535a95unf123570/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cd02m535a95unf123570/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cd02m6bb3ho5lmuq29f0",
            link: {
              high: "https://images.uzum.uz/cd02m6bb3ho5lmuq29f0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cd02m6bb3ho5lmuq29f0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cd02m6bb3ho5lmuq29f0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cd02m6bb3ho5lmuq29f0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 907103,
        minFullPrice: 22000000,
        minSellPrice: 19800000,
        offer: null,
        badges: [
          {
            backgroundColor: "#9A72F2",
            text: "Chilla Bozor",
            textColor: "#FFFFFF",
            __typename: "BottomTextBadge",
            description: null,
            id: 129,
            link: null,
          },
          {
            backgroundColor: "#FFFF00",
            text: "2 376 000 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 662480,
        rating: 0,
        title: "Smartfon  iPhone 13 Pro",
        photos: [
          {
            key: "ciudscl40v9pplt6hb6g",
            link: {
              high: "https://images.uzum.uz/ciudscl40v9pplt6hb6g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ciudscl40v9pplt6hb6g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ciudscl40v9pplt6hb6g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ciudscl40v9pplt6hb6g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "civpaklenntd8rfea2bg",
            link: {
              high: "https://images.uzum.uz/civpaklenntd8rfea2bg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/civpaklenntd8rfea2bg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/civpaklenntd8rfea2bg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/civpaklenntd8rfea2bg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "civpbdl6sfhndlbr3s10",
            link: {
              high: "https://images.uzum.uz/civpbdl6sfhndlbr3s10/t_product_540_high.jpg",
              low: "https://images.uzum.uz/civpbdl6sfhndlbr3s10/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/civpbdl6sfhndlbr3s10/t_product_240_high.jpg",
              low: "https://images.uzum.uz/civpbdl6sfhndlbr3s10/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "civpbv36edfostijp9h0",
            link: {
              high: "https://images.uzum.uz/civpbv36edfostijp9h0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/civpbv36edfostijp9h0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/civpbv36edfostijp9h0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/civpbv36edfostijp9h0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "civpccl6sfhndlbr3s3g",
            link: {
              high: "https://images.uzum.uz/civpccl6sfhndlbr3s3g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/civpccl6sfhndlbr3s3g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/civpccl6sfhndlbr3s3g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/civpccl6sfhndlbr3s3g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -128,
            value: "#91a6d1",
            title: "Moviy osmon rangi",
            characteristic: {
              values: [
                {
                  id: -120,
                  title: "Yashil",
                  value: "#3f6214",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -133,
                  title: "Tilla",
                  value: "#d3c64f",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -128,
                  title: "Moviy osmon rangi",
                  value: "#91a6d1",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -4,
                  title: "Kumush rang",
                  value: "#d5d6d8",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -1,
                  title: "Qora",
                  value: "#000000",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 488981,
        minFullPrice: 19799000,
        minSellPrice: 18999000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "2 279 880 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 402560,
        rating: 0,
        title:
          'Noutbuk Legion5Pro 16IAH7H, 16"WQXGAIPS 500nitsAG165hz, i5-12500H, 16GBDDR5, 1TBSSDNVME, RTX3060 6GB, Dos',
        photos: [
          {
            key: "cgpg077hj8j9g69ck6jg",
            link: {
              high: "https://images.uzum.uz/cgpg077hj8j9g69ck6jg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpg077hj8j9g69ck6jg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpg077hj8j9g69ck6jg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpg077hj8j9g69ck6jg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpg08357mg9720ebg2g",
            link: {
              high: "https://images.uzum.uz/cgpg08357mg9720ebg2g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpg08357mg9720ebg2g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpg08357mg9720ebg2g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpg08357mg9720ebg2g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpg09r57mg9720ebg30",
            link: {
              high: "https://images.uzum.uz/cgpg09r57mg9720ebg30/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpg09r57mg9720ebg30/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpg09r57mg9720ebg30/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpg09r57mg9720ebg30/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpg09vg49devoad9gf0",
            link: {
              high: "https://images.uzum.uz/cgpg09vg49devoad9gf0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpg09vg49devoad9gf0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpg09vg49devoad9gf0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpg09vg49devoad9gf0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpg0avhj8j9g69ck6kg",
            link: {
              high: "https://images.uzum.uz/cgpg0avhj8j9g69ck6kg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpg0avhj8j9g69ck6kg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpg0avhj8j9g69ck6kg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpg0avhj8j9g69ck6kg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgpg0ar57mg9720ebg40",
            link: {
              high: "https://images.uzum.uz/cgpg0ar57mg9720ebg40/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgpg0ar57mg9720ebg40/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgpg0ar57mg9720ebg40/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgpg0ar57mg9720ebg40/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 199525,
        minFullPrice: 18961000,
        minSellPrice: 18961000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "2 275 320 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 1,
        productId: 188738,
        rating: 0,
        title: "Smartfon Samsung Galaxy S22 Ultra 8 GB/256 GB, qora",
        photos: [
          {
            key: "cegjumivtie1lhbf76eg",
            link: {
              high: "https://images.uzum.uz/cegjumivtie1lhbf76eg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cegjumivtie1lhbf76eg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cegjumivtie1lhbf76eg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cegjumivtie1lhbf76eg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -1,
            value: "#000000",
            title: "Qora",
            characteristic: {
              values: [
                {
                  id: -1,
                  title: "Qora",
                  value: "#000000",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 199535,
        minFullPrice: 18961000,
        minSellPrice: 18961000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "2 275 320 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 188749,
        rating: 0,
        title: "Samsung Galaxy S22 Ultra 8GB/256GB Bordo smartfoni",
        photos: [
          {
            key: "cegkbdgl08kcldtoudv0",
            link: {
              high: "https://images.uzum.uz/cegkbdgl08kcldtoudv0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cegkbdgl08kcldtoudv0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cegkbdgl08kcldtoudv0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cegkbdgl08kcldtoudv0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -263,
            value: "#9B2D30",
            title: "Toʻq qizil",
            characteristic: {
              values: [
                {
                  id: -263,
                  title: "Toʻq qizil",
                  value: "#9B2D30",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 199532,
        minFullPrice: 18961000,
        minSellPrice: 18961000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "2 275 320 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 1,
        productId: 188746,
        rating: 0,
        title: "Smartfon Samsung Galaxy S22 Ultra 8 GB/256 GB, yashil",
        photos: [
          {
            key: "cegk9givtie1lhbf772g",
            link: {
              high: "https://images.uzum.uz/cegk9givtie1lhbf772g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cegk9givtie1lhbf772g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cegk9givtie1lhbf772g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cegk9givtie1lhbf772g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -120,
            value: "#3f6214",
            title: "Yashil",
            characteristic: {
              values: [
                {
                  id: -120,
                  title: "Yashil",
                  value: "#3f6214",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 199528,
        minFullPrice: 18961000,
        minSellPrice: 18961000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "2 275 320 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 1,
        productId: 188742,
        rating: 0,
        title: "Smartfon Samsung Galaxy S22 Ultra 8GB/256GB oq",
        photos: [
          {
            key: "cegk47ivtie1lhbf76lg",
            link: {
              high: "https://images.uzum.uz/cegk47ivtie1lhbf76lg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cegk47ivtie1lhbf76lg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cegk47ivtie1lhbf76lg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cegk47ivtie1lhbf76lg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -5,
            value: "#ffffff",
            title: "Oq",
            characteristic: {
              values: [
                {
                  id: -5,
                  title: "Oq",
                  value: "#ffffff",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 856876,
        minFullPrice: 18950000,
        minSellPrice: 18950000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "2 274 000 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 1,
        productId: 633009,
        rating: 0,
        title: "Smartfon iPhone 14 Pro Max, 128 GB, space black",
        photos: [
          {
            key: "citcqp56sfhndlbqsj00",
            link: {
              high: "https://images.uzum.uz/citcqp56sfhndlbqsj00/t_product_540_high.jpg",
              low: "https://images.uzum.uz/citcqp56sfhndlbqsj00/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/citcqp56sfhndlbqsj00/t_product_240_high.jpg",
              low: "https://images.uzum.uz/citcqp56sfhndlbqsj00/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -1,
            value: "#000000",
            title: "Qora",
            characteristic: {
              values: [
                {
                  id: -1,
                  title: "Qora",
                  value: "#000000",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 865875,
        minFullPrice: 18200000,
        minSellPrice: 18200000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "2 184 000 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 2,
        productId: 638849,
        rating: 0,
        title: "Smartfon Apple iPhone 14 Pro Max 128GB LL/A eSIM",
        photos: [
          {
            key: "cii3rst40v9pplt58ie0",
            link: {
              high: "https://images.uzum.uz/cii3rst40v9pplt58ie0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cii3rst40v9pplt58ie0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cii3rst40v9pplt58ie0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cii3rst40v9pplt58ie0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -1,
            value: "#000000",
            title: "Qora",
            characteristic: {
              values: [
                {
                  id: -130,
                  title: "Binafsha",
                  value: "#52237f",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -1,
                  title: "Qora",
                  value: "#000000",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 685668,
        minFullPrice: 18000000,
        minSellPrice: 18000000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "2 160 000 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 529255,
        rating: 0,
        title:
          "Quyoshdan quvvat olish imkoniyatiga ega innovatsion portativ elektr stansiyalari panellar",
        photos: [
          {
            key: "ciog2ltenntd8rfdhkg0",
            link: {
              high: "https://images.uzum.uz/ciog2ltenntd8rfdhkg0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ciog2ltenntd8rfdhkg0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ciog2ltenntd8rfdhkg0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ciog2ltenntd8rfdhkg0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ciog2ob6edfostij0k2g",
            link: {
              high: "https://images.uzum.uz/ciog2ob6edfostij0k2g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ciog2ob6edfostij0k2g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ciog2ob6edfostij0k2g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ciog2ob6edfostij0k2g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 199524,
        minFullPrice: 17501000,
        minSellPrice: 17501000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "2 100 120 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 188737,
        rating: 0,
        title: "Smartfon Samsung Galaxy S22 Ultra 8GB/128GB yashil",
        photos: [
          {
            key: "cegjtn2vtie1lhbf76e0",
            link: {
              high: "https://images.uzum.uz/cegjtn2vtie1lhbf76e0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cegjtn2vtie1lhbf76e0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cegjtn2vtie1lhbf76e0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cegjtn2vtie1lhbf76e0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -120,
            value: "#3f6214",
            title: "Yashil",
            characteristic: {
              values: [
                {
                  id: -120,
                  title: "Yashil",
                  value: "#3f6214",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 861930,
        minFullPrice: 17200000,
        minSellPrice: 17200000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "2 064 000 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 633985,
        rating: 0,
        title:
          "Lenovo Legion 5 Pro ryzen 7 6800h ddr5 16gb ssd 512gb rtx3060 16 wqxga IPS 165hz",
        photos: [
          {
            key: "cigm8cr6edfostii7b5g",
            link: {
              high: "https://images.uzum.uz/cigm8cr6edfostii7b5g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cigm8cr6edfostii7b5g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cigm8cr6edfostii7b5g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cigm8cr6edfostii7b5g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cigm8djltlh4bk4muvm0",
            link: {
              high: "https://images.uzum.uz/cigm8djltlh4bk4muvm0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cigm8djltlh4bk4muvm0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cigm8djltlh4bk4muvm0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cigm8djltlh4bk4muvm0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cigm8ejltlh4bk4muvmg",
            link: {
              high: "https://images.uzum.uz/cigm8ejltlh4bk4muvmg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cigm8ejltlh4bk4muvmg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cigm8ejltlh4bk4muvmg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cigm8ejltlh4bk4muvmg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cigm8et40v9pplt53o8g",
            link: {
              high: "https://images.uzum.uz/cigm8et40v9pplt53o8g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cigm8et40v9pplt53o8g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cigm8et40v9pplt53o8g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cigm8et40v9pplt53o8g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cigm8fj6edfostii7b8g",
            link: {
              high: "https://images.uzum.uz/cigm8fj6edfostii7b8g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cigm8fj6edfostii7b8g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cigm8fj6edfostii7b8g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cigm8fj6edfostii7b8g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cigm8h56sfhndlbphjqg",
            link: {
              high: "https://images.uzum.uz/cigm8h56sfhndlbphjqg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cigm8h56sfhndlbphjqg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cigm8h56sfhndlbphjqg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cigm8h56sfhndlbphjqg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 668955,
        minFullPrice: 17152000,
        minSellPrice: 17152000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "2 058 240 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 519606,
        rating: 0,
        title: "Dinamiklar Sony Shake sistemasi uchun X70 SSSHAKEX70",
        photos: [
          {
            key: "chrgeo540v9pplt2r730",
            link: {
              high: "https://images.uzum.uz/chrgeo540v9pplt2r730/t_product_540_high.jpg",
              low: "https://images.uzum.uz/chrgeo540v9pplt2r730/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/chrgeo540v9pplt2r730/t_product_240_high.jpg",
              low: "https://images.uzum.uz/chrgeo540v9pplt2r730/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "chrgepl40v9pplt2r73g",
            link: {
              high: "https://images.uzum.uz/chrgepl40v9pplt2r73g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/chrgepl40v9pplt2r73g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/chrgepl40v9pplt2r73g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/chrgepl40v9pplt2r73g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 895618,
        minFullPrice: 19889000,
        minSellPrice: 16999000,
        offer: null,
        badges: [
          {
            backgroundColor: "#9A72F2",
            text: "Chilla Bozor",
            textColor: "#FFFFFF",
            __typename: "BottomTextBadge",
            description: null,
            id: 129,
            link: null,
          },
          {
            backgroundColor: "#FFFF00",
            text: "1 799 880 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 656080,
        rating: 0,
        title: "Smartfon Samsung Galaxy S23 Ultra",
        photos: [
          {
            key: "cin82en5d7kom1tjnsjg",
            link: {
              high: "https://images.uzum.uz/cin82en5d7kom1tjnsjg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin82en5d7kom1tjnsjg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin82en5d7kom1tjnsjg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin82en5d7kom1tjnsjg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin82kl40v9pplt5p9lg",
            link: {
              high: "https://images.uzum.uz/cin82kl40v9pplt5p9lg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin82kl40v9pplt5p9lg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin82kl40v9pplt5p9lg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin82kl40v9pplt5p9lg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin82mrltlh4bk4nkh3g",
            link: {
              high: "https://images.uzum.uz/cin82mrltlh4bk4nkh3g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin82mrltlh4bk4nkh3g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin82mrltlh4bk4nkh3g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin82mrltlh4bk4nkh3g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin819f5d7kom1tjns90",
            link: {
              high: "https://images.uzum.uz/cin819f5d7kom1tjns90/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin819f5d7kom1tjns90/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin819f5d7kom1tjns90/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin819f5d7kom1tjns90/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin81ajltlh4bk4nkgng",
            link: {
              high: "https://images.uzum.uz/cin81ajltlh4bk4nkgng/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin81ajltlh4bk4nkgng/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin81ajltlh4bk4nkgng/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin81ajltlh4bk4nkgng/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin81b56sfhndlbq74l0",
            link: {
              high: "https://images.uzum.uz/cin81b56sfhndlbq74l0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin81b56sfhndlbq74l0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin81b56sfhndlbq74l0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin81b56sfhndlbq74l0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin814rltlh4bk4nkgmg",
            link: {
              high: "https://images.uzum.uz/cin814rltlh4bk4nkgmg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin814rltlh4bk4nkgmg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin814rltlh4bk4nkgmg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin814rltlh4bk4nkgmg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -275,
            value: "#0F3D17",
            title: "Toʻq yashil",
            characteristic: {
              values: [
                {
                  id: -257,
                  title: "Oqish rang",
                  value: "#FCF6E8",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -275,
                  title: "Toʻq yashil",
                  value: "#0F3D17",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -1,
                  title: "Qora",
                  value: "#000000",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 838786,
        minFullPrice: 16550000,
        minSellPrice: 16550000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 986 000 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 2,
        productId: 608648,
        rating: 0,
        title: "Smartfon Apple iPhone 13 pro max 128 GB, 256 GB, 512 GB",
        photos: [
          {
            key: "cia2c5d6sfhndlborkl0",
            link: {
              high: "https://images.uzum.uz/cia2c5d6sfhndlborkl0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cia2c5d6sfhndlborkl0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cia2c5d6sfhndlborkl0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cia2c5d6sfhndlborkl0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -1,
            value: "#000000",
            title: "Qora",
            characteristic: {
              values: [
                {
                  id: -5,
                  title: "Oq",
                  value: "#ffffff",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -133,
                  title: "Tilla",
                  value: "#d3c64f",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -4,
                  title: "Kumush rang",
                  value: "#d5d6d8",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -1,
                  title: "Qora",
                  value: "#000000",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 436345,
        minFullPrice: 18299000,
        minSellPrice: 16469000,
        offer: null,
        badges: [
          {
            backgroundColor: "#9A72F2",
            text: "Chilla Bozor",
            textColor: "#FFFFFF",
            __typename: "BottomTextBadge",
            description: null,
            id: 129,
            link: null,
          },
          {
            backgroundColor: "#FFFF00",
            text: "1 976 280 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 1,
        productId: 368161,
        rating: 0,
        title:
          "Noutbuk Legion 5 15ARH7, 15.6 FHD 144 Hz,AMD Ryzen7-6800H,32GB, 1TB SSD,RTX3060 6GB,DOS",
        photos: [
          {
            key: "cgh08t7hgiov1qifo4rg",
            link: {
              high: "https://images.uzum.uz/cgh08t7hgiov1qifo4rg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgh08t7hgiov1qifo4rg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgh08t7hgiov1qifo4rg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgh08t7hgiov1qifo4rg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgh08t7hj8j9g69b6cig",
            link: {
              high: "https://images.uzum.uz/cgh08t7hj8j9g69b6cig/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgh08t7hj8j9g69b6cig/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgh08t7hj8j9g69b6cig/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgh08t7hj8j9g69b6cig/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgh08tfg49devoabsgm0",
            link: {
              high: "https://images.uzum.uz/cgh08tfg49devoabsgm0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgh08tfg49devoabsgm0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgh08tfg49devoabsgm0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgh08tfg49devoabsgm0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgh08tfhj8j9g69b6cj0",
            link: {
              high: "https://images.uzum.uz/cgh08tfhj8j9g69b6cj0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgh08tfhj8j9g69b6cj0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgh08tfhj8j9g69b6cj0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgh08tfhj8j9g69b6cj0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgh08t7g49devoabsglg",
            link: {
              high: "https://images.uzum.uz/cgh08t7g49devoabsglg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgh08t7g49devoabsglg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgh08t7g49devoabsglg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgh08t7g49devoabsglg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 267124,
        minFullPrice: 15991000,
        minSellPrice: 15991000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 918 920 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 1,
        productId: 222637,
        rating: 0,
        title: "Akustik tizimi Sony SHAKE-X70 ",
        photos: [
          {
            key: "cfgc80svutv7dbm934o0",
            link: {
              high: "https://images.uzum.uz/cfgc80svutv7dbm934o0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cfgc80svutv7dbm934o0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cfgc80svutv7dbm934o0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cfgc80svutv7dbm934o0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cfgc80qdjr2oefduk160",
            link: {
              high: "https://images.uzum.uz/cfgc80qdjr2oefduk160/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cfgc80qdjr2oefduk160/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cfgc80qdjr2oefduk160/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cfgc80qdjr2oefduk160/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cfgc814vutv7dbm934og",
            link: {
              high: "https://images.uzum.uz/cfgc814vutv7dbm934og/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cfgc814vutv7dbm934og/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cfgc814vutv7dbm934og/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cfgc814vutv7dbm934og/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cfgc812djr2oefduk16g",
            link: {
              high: "https://images.uzum.uz/cfgc812djr2oefduk16g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cfgc812djr2oefduk16g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cfgc812djr2oefduk16g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cfgc812djr2oefduk16g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 752966,
        minFullPrice: 18000000,
        minSellPrice: 15000000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 800 000 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 2,
        productId: 570943,
        rating: 0,
        title: "Smartfon iPhone 14 Pro, 128 GB, Space Black",
        photos: [
          {
            key: "ci1g6jt6sfhndlbnt6i0",
            link: {
              high: "https://images.uzum.uz/ci1g6jt6sfhndlbnt6i0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci1g6jt6sfhndlbnt6i0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci1g6jt6sfhndlbnt6i0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci1g6jt6sfhndlbnt6i0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci1g6jjltlh4bk4la900",
            link: {
              high: "https://images.uzum.uz/ci1g6jjltlh4bk4la900/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci1g6jjltlh4bk4la900/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci1g6jjltlh4bk4la900/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci1g6jjltlh4bk4la900/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci1g6k75d7kom1the590",
            link: {
              high: "https://images.uzum.uz/ci1g6k75d7kom1the590/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci1g6k75d7kom1the590/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci1g6k75d7kom1the590/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci1g6k75d7kom1the590/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 748691,
        minFullPrice: 15500000,
        minSellPrice: 15000000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 800 000 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 10,
        productId: 568399,
        rating: 0,
        title: "Smartfon iPhone 14 Pro 128GB Deep Purple",
        photos: [
          {
            key: "ci1g91rltlh4bk4laa30",
            link: {
              high: "https://images.uzum.uz/ci1g91rltlh4bk4laa30/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci1g91rltlh4bk4laa30/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci1g91rltlh4bk4laa30/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci1g91rltlh4bk4laa30/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci1g91r6edfostigj1u0",
            link: {
              high: "https://images.uzum.uz/ci1g91r6edfostigj1u0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci1g91r6edfostigj1u0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci1g91r6edfostigj1u0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci1g91r6edfostigj1u0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci1g92bltlh4bk4laa4g",
            link: {
              high: "https://images.uzum.uz/ci1g92bltlh4bk4laa4g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci1g92bltlh4bk4laa4g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci1g92bltlh4bk4laa4g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci1g92bltlh4bk4laa4g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 281671,
        minFullPrice: 17600000,
        minSellPrice: 15000000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 800 000 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 259928,
        rating: 0,
        title: "3D Printer Phrozen Shuffler XL Lite",
        photos: [
          {
            key: "cffovq540v9uauhhvjtg",
            link: {
              high: "https://images.uzum.uz/cffovq540v9uauhhvjtg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cffovq540v9uauhhvjtg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cffovq540v9uauhhvjtg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cffovq540v9uauhhvjtg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cffovqkvutv7dbm9149g",
            link: {
              high: "https://images.uzum.uz/cffovqkvutv7dbm9149g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cffovqkvutv7dbm9149g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cffovqkvutv7dbm9149g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cffovqkvutv7dbm9149g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 895616,
        minFullPrice: 17549000,
        minSellPrice: 14999000,
        offer: null,
        badges: [
          {
            backgroundColor: "#9A72F2",
            text: "Chilla Bozor",
            textColor: "#FFFFFF",
            __typename: "BottomTextBadge",
            description: null,
            id: 129,
            link: null,
          },
          {
            backgroundColor: "#FFFF00",
            text: "1 799 880 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 656080,
        rating: 0,
        title: "Smartfon Samsung Galaxy S23 Ultra",
        photos: [
          {
            key: "cin819f5d7kom1tjns90",
            link: {
              high: "https://images.uzum.uz/cin819f5d7kom1tjns90/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin819f5d7kom1tjns90/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin819f5d7kom1tjns90/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin819f5d7kom1tjns90/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin81ajltlh4bk4nkgng",
            link: {
              high: "https://images.uzum.uz/cin81ajltlh4bk4nkgng/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin81ajltlh4bk4nkgng/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin81ajltlh4bk4nkgng/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin81ajltlh4bk4nkgng/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin81b56sfhndlbq74l0",
            link: {
              high: "https://images.uzum.uz/cin81b56sfhndlbq74l0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin81b56sfhndlbq74l0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin81b56sfhndlbq74l0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin81b56sfhndlbq74l0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin814rltlh4bk4nkgmg",
            link: {
              high: "https://images.uzum.uz/cin814rltlh4bk4nkgmg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin814rltlh4bk4nkgmg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin814rltlh4bk4nkgmg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin814rltlh4bk4nkgmg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin815lenntd8rfddlr0",
            link: {
              high: "https://images.uzum.uz/cin815lenntd8rfddlr0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin815lenntd8rfddlr0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin815lenntd8rfddlr0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin815lenntd8rfddlr0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin816bltlh4bk4nkgn0",
            link: {
              high: "https://images.uzum.uz/cin816bltlh4bk4nkgn0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin816bltlh4bk4nkgn0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin816bltlh4bk4nkgn0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin816bltlh4bk4nkgn0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin82en5d7kom1tjnsjg",
            link: {
              high: "https://images.uzum.uz/cin82en5d7kom1tjnsjg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin82en5d7kom1tjnsjg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin82en5d7kom1tjnsjg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin82en5d7kom1tjnsjg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -257,
            value: "#FCF6E8",
            title: "Oqish rang",
            characteristic: {
              values: [
                {
                  id: -257,
                  title: "Oqish rang",
                  value: "#FCF6E8",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -275,
                  title: "Toʻq yashil",
                  value: "#0F3D17",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -1,
                  title: "Qora",
                  value: "#000000",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 895617,
        minFullPrice: 17549000,
        minSellPrice: 14999000,
        offer: null,
        badges: [
          {
            backgroundColor: "#9A72F2",
            text: "Chilla Bozor",
            textColor: "#FFFFFF",
            __typename: "BottomTextBadge",
            description: null,
            id: 129,
            link: null,
          },
          {
            backgroundColor: "#FFFF00",
            text: "1 799 880 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 1,
        productId: 656080,
        rating: 0,
        title: "Smartfon Samsung Galaxy S23 Ultra",
        photos: [
          {
            key: "cin814rltlh4bk4nkgmg",
            link: {
              high: "https://images.uzum.uz/cin814rltlh4bk4nkgmg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin814rltlh4bk4nkgmg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin814rltlh4bk4nkgmg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin814rltlh4bk4nkgmg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin815lenntd8rfddlr0",
            link: {
              high: "https://images.uzum.uz/cin815lenntd8rfddlr0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin815lenntd8rfddlr0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin815lenntd8rfddlr0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin815lenntd8rfddlr0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin816bltlh4bk4nkgn0",
            link: {
              high: "https://images.uzum.uz/cin816bltlh4bk4nkgn0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin816bltlh4bk4nkgn0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin816bltlh4bk4nkgn0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin816bltlh4bk4nkgn0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin819f5d7kom1tjns90",
            link: {
              high: "https://images.uzum.uz/cin819f5d7kom1tjns90/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin819f5d7kom1tjns90/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin819f5d7kom1tjns90/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin819f5d7kom1tjns90/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin81ajltlh4bk4nkgng",
            link: {
              high: "https://images.uzum.uz/cin81ajltlh4bk4nkgng/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin81ajltlh4bk4nkgng/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin81ajltlh4bk4nkgng/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin81ajltlh4bk4nkgng/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin81b56sfhndlbq74l0",
            link: {
              high: "https://images.uzum.uz/cin81b56sfhndlbq74l0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin81b56sfhndlbq74l0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin81b56sfhndlbq74l0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin81b56sfhndlbq74l0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cin82en5d7kom1tjnsjg",
            link: {
              high: "https://images.uzum.uz/cin82en5d7kom1tjnsjg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cin82en5d7kom1tjnsjg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cin82en5d7kom1tjnsjg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cin82en5d7kom1tjnsjg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -1,
            value: "#000000",
            title: "Qora",
            characteristic: {
              values: [
                {
                  id: -257,
                  title: "Oqish rang",
                  value: "#FCF6E8",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -275,
                  title: "Toʻq yashil",
                  value: "#0F3D17",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -1,
                  title: "Qora",
                  value: "#000000",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 758957,
        minFullPrice: 17585000,
        minSellPrice: 14931000,
        offer: null,
        badges: [
          {
            backgroundColor: "#9A72F2",
            text: "Chilla Bozor",
            textColor: "#FFFFFF",
            __typename: "BottomTextBadge",
            description: null,
            id: 129,
            link: null,
          },
          {
            backgroundColor: "#FFFF00",
            text: "1 791 720 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 6,
        productId: 574504,
        rating: 0,
        title: "Smartfon Apple iPhone 14 Pro 128 GB, Dual: nano SIM + eSIM",
        photos: [
          {
            key: "ci3jtcj6edfostigqj6g",
            link: {
              high: "https://images.uzum.uz/ci3jtcj6edfostigqj6g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci3jtcj6edfostigqj6g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci3jtcj6edfostigqj6g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci3jtcj6edfostigqj6g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci3jtctenntd8rfbbmo0",
            link: {
              high: "https://images.uzum.uz/ci3jtctenntd8rfbbmo0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci3jtctenntd8rfbbmo0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci3jtctenntd8rfbbmo0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci3jtctenntd8rfbbmo0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci3jtdn5d7kom1thlpe0",
            link: {
              high: "https://images.uzum.uz/ci3jtdn5d7kom1thlpe0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci3jtdn5d7kom1thlpe0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci3jtdn5d7kom1thlpe0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci3jtdn5d7kom1thlpe0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci3jte56sfhndlbo4o80",
            link: {
              high: "https://images.uzum.uz/ci3jte56sfhndlbo4o80/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci3jte56sfhndlbo4o80/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci3jte56sfhndlbo4o80/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci3jte56sfhndlbo4o80/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci3jtev5d7kom1thlpeg",
            link: {
              high: "https://images.uzum.uz/ci3jtev5d7kom1thlpeg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci3jtev5d7kom1thlpeg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci3jtev5d7kom1thlpeg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci3jtev5d7kom1thlpeg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci3jtf3ltlh4bk4lhtng",
            link: {
              high: "https://images.uzum.uz/ci3jtf3ltlh4bk4lhtng/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci3jtf3ltlh4bk4lhtng/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci3jtf3ltlh4bk4lhtng/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci3jtf3ltlh4bk4lhtng/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -130,
            value: "#52237f",
            title: "Binafsha",
            characteristic: {
              values: [
                {
                  id: -133,
                  title: "Tilla",
                  value: "#d3c64f",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -4,
                  title: "Kumush rang",
                  value: "#d5d6d8",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -130,
                  title: "Binafsha",
                  value: "#52237f",
                  __typename: "CharacteristicValue",
                },
                {
                  id: -1,
                  title: "Qora",
                  value: "#000000",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 199504,
        minFullPrice: 10449000,
        minSellPrice: 14338000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 720 560 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 188717,
        rating: 0,
        title: "Smartfon Samsung Galaxy S22+ 8 GB/256 GB, yashil",
        photos: [
          {
            key: "cegjls2vtie1lhbf7680",
            link: {
              high: "https://images.uzum.uz/cegjls2vtie1lhbf7680/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cegjls2vtie1lhbf7680/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cegjls2vtie1lhbf7680/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cegjls2vtie1lhbf7680/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -120,
            value: "#3f6214",
            title: "Yashil",
            characteristic: {
              values: [
                {
                  id: -120,
                  title: "Yashil",
                  value: "#3f6214",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 199505,
        minFullPrice: 14338000,
        minSellPrice: 14338000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 720 560 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 188718,
        rating: 0,
        title: "Smartfon Samsung Galaxy S22+ 8 GB/256 GB, oq",
        photos: [
          {
            key: "cegjmpgl08kcldtoud00",
            link: {
              high: "https://images.uzum.uz/cegjmpgl08kcldtoud00/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cegjmpgl08kcldtoud00/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cegjmpgl08kcldtoud00/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cegjmpgl08kcldtoud00/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -5,
            value: "#ffffff",
            title: "Oq",
            characteristic: {
              values: [
                {
                  id: -5,
                  title: "Oq",
                  value: "#ffffff",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 199501,
        minFullPrice: 14338000,
        minSellPrice: 14338000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 720 560 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 188715,
        rating: 0,
        title: "Smartfon Samsung Galaxy S22+ 8GB/256GB qora",
        photos: [
          {
            key: "cegjj8gl08kcldtoucmg",
            link: {
              high: "https://images.uzum.uz/cegjj8gl08kcldtoucmg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cegjj8gl08kcldtoucmg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cegjj8gl08kcldtoucmg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cegjj8gl08kcldtoucmg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -1,
            value: "#000000",
            title: "Qora",
            characteristic: {
              values: [
                {
                  id: -1,
                  title: "Qora",
                  value: "#000000",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 199502,
        minFullPrice: 14338000,
        minSellPrice: 14338000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 720 560 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 1,
        productId: 188716,
        rating: 0,
        title: "Smartfon Samsung Galaxy S22+ 8 GB / 256 GB, pushti",
        photos: [
          {
            key: "cegjkf0v1htd23aj9m4g",
            link: {
              high: "https://images.uzum.uz/cegjkf0v1htd23aj9m4g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cegjkf0v1htd23aj9m4g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cegjkf0v1htd23aj9m4g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cegjkf0v1htd23aj9m4g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -16,
            value: "#ffacbc",
            title: "Pushti",
            characteristic: {
              values: [
                {
                  id: -16,
                  title: "Pushti",
                  value: "#ffacbc",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 803136,
        minFullPrice: 16000000,
        minSellPrice: 13990000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 678 800 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 1,
        productId: 599362,
        rating: 0,
        title: "Smartfon Apple IPhone 14 256GB Blue",
        photos: [
          {
            key: "cib89gtenntd8rfc6f2g",
            link: {
              high: "https://images.uzum.uz/cib89gtenntd8rfc6f2g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cib89gtenntd8rfc6f2g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cib89gtenntd8rfc6f2g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cib89gtenntd8rfc6f2g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 854983,
        minFullPrice: 15500000,
        minSellPrice: 13900000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 668 000 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 4,
        productId: 631711,
        rating: 0,
        title: "Smartfon iPhone 13 va 14, 128 Gb",
        photos: [
          {
            key: "ciftuurltlh4bk4msgr0",
            link: {
              high: "https://images.uzum.uz/ciftuurltlh4bk4msgr0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ciftuurltlh4bk4msgr0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ciftuurltlh4bk4msgr0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ciftuurltlh4bk4msgr0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 1,
        id: 768729,
        minFullPrice: 13899000,
        minSellPrice: 13899000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 667 880 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 2,
        productId: 580397,
        rating: 5,
        title: "Smartfon Samsung Galaxy S23 Ultra 12/256GB, qora fantom",
        photos: [
          {
            key: "ci1mritenntd8rfb574g",
            link: {
              high: "https://images.uzum.uz/ci1mritenntd8rfb574g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci1mritenntd8rfb574g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci1mritenntd8rfb574g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci1mritenntd8rfb574g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci1mrk36edfostigk460",
            link: {
              high: "https://images.uzum.uz/ci1mrk36edfostigk460/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci1mrk36edfostigk460/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci1mrk36edfostigk460/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci1mrk36edfostigk460/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci1mrm75d7kom1thfa4g",
            link: {
              high: "https://images.uzum.uz/ci1mrm75d7kom1thfa4g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci1mrm75d7kom1thfa4g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci1mrm75d7kom1thfa4g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci1mrm75d7kom1thfa4g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci1mrorltlh4bk4lbdrg",
            link: {
              high: "https://images.uzum.uz/ci1mrorltlh4bk4lbdrg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci1mrorltlh4bk4lbdrg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci1mrorltlh4bk4lbdrg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci1mrorltlh4bk4lbdrg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 142699,
        minFullPrice: 14550000,
        minSellPrice: 13850000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 662 000 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 1,
        productId: 135521,
        rating: 0,
        title: "Videokamera Conference Camera VC520 Pro",
        photos: [
          {
            key: "cdvevjgv1htd23aiac50",
            link: {
              high: "https://images.uzum.uz/cdvevjgv1htd23aiac50/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cdvevjgv1htd23aiac50/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cdvevjgv1htd23aiac50/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cdvevjgv1htd23aiac50/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cdvevjgv1htd23aiac5g",
            link: {
              high: "https://images.uzum.uz/cdvevjgv1htd23aiac5g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cdvevjgv1htd23aiac5g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cdvevjgv1htd23aiac5g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cdvevjgv1htd23aiac5g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cdvevjivtie1lhbe84og",
            link: {
              high: "https://images.uzum.uz/cdvevjivtie1lhbe84og/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cdvevjivtie1lhbe84og/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cdvevjivtie1lhbe84og/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cdvevjivtie1lhbe84og/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cdvevjgv1htd23aiac4g",
            link: {
              high: "https://images.uzum.uz/cdvevjgv1htd23aiac4g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cdvevjgv1htd23aiac4g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cdvevjgv1htd23aiac4g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cdvevjgv1htd23aiac4g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cdvf0bol08kcldto06h0",
            link: {
              high: "https://images.uzum.uz/cdvf0bol08kcldto06h0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cdvf0bol08kcldto06h0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cdvf0bol08kcldto06h0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cdvf0bol08kcldto06h0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cdvevjgv1htd23aiac60",
            link: {
              high: "https://images.uzum.uz/cdvevjgv1htd23aiac60/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cdvevjgv1htd23aiac60/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cdvevjgv1htd23aiac60/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cdvevjgv1htd23aiac60/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cdvevjivtie1lhbe84p0",
            link: {
              high: "https://images.uzum.uz/cdvevjivtie1lhbe84p0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cdvevjivtie1lhbe84p0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cdvevjivtie1lhbe84p0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cdvevjivtie1lhbe84p0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 446888,
        minFullPrice: 15780000,
        minSellPrice: 13780000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 653 600 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 374419,
        rating: 0,
        title:
          "UQM Vertiv GXT RT+ 1ph, 3kVA, IEC 60320 C20 kirishlari, 2U, 230V chiqish",
        photos: [
          {
            key: "ci5hgo56sfhndlbobo90",
            link: {
              high: "https://images.uzum.uz/ci5hgo56sfhndlbobo90/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci5hgo56sfhndlbobo90/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci5hgo56sfhndlbobo90/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci5hgo56sfhndlbobo90/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "ci5hgo540v9pplt3uaa0",
            link: {
              high: "https://images.uzum.uz/ci5hgo540v9pplt3uaa0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/ci5hgo540v9pplt3uaa0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/ci5hgo540v9pplt3uaa0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/ci5hgo540v9pplt3uaa0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 436368,
        minFullPrice: 15999000,
        minSellPrice: 13688000,
        offer: null,
        badges: [
          {
            backgroundColor: "#9A72F2",
            text: "Chilla Bozor",
            textColor: "#FFFFFF",
            __typename: "BottomTextBadge",
            description: null,
            id: 129,
            link: null,
          },
          {
            backgroundColor: "#FFFF00",
            text: "1 642 560 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 3,
        productId: 368170,
        rating: 0,
        title:
          "Noutbuk ACER Predator Helios PH315-54, i7-11800H, 16GB RAM, 1TB SSD, RTX 3050Ti, DOS",
        photos: [
          {
            key: "cgh0jn7hj8j9g69b6crg",
            link: {
              high: "https://images.uzum.uz/cgh0jn7hj8j9g69b6crg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgh0jn7hj8j9g69b6crg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgh0jn7hj8j9g69b6crg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgh0jn7hj8j9g69b6crg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgh0jn7g49devoabsgtg",
            link: {
              high: "https://images.uzum.uz/cgh0jn7g49devoabsgtg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgh0jn7g49devoabsgtg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgh0jn7g49devoabsgtg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgh0jn7g49devoabsgtg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgh0jn3fkbipbv1u6tt0",
            link: {
              high: "https://images.uzum.uz/cgh0jn3fkbipbv1u6tt0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgh0jn3fkbipbv1u6tt0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgh0jn3fkbipbv1u6tt0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgh0jn3fkbipbv1u6tt0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgh0jmrfkbipbv1u6ts0",
            link: {
              high: "https://images.uzum.uz/cgh0jmrfkbipbv1u6ts0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgh0jmrfkbipbv1u6ts0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgh0jmrfkbipbv1u6ts0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgh0jmrfkbipbv1u6ts0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgh0jn3fkbipbv1u6tsg",
            link: {
              high: "https://images.uzum.uz/cgh0jn3fkbipbv1u6tsg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgh0jn3fkbipbv1u6tsg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgh0jn3fkbipbv1u6tsg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgh0jn3fkbipbv1u6tsg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgh0jn7g49devoabsgt0",
            link: {
              high: "https://images.uzum.uz/cgh0jn7g49devoabsgt0/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgh0jn7g49devoabsgt0/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgh0jn7g49devoabsgt0/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgh0jn7g49devoabsgt0/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
          {
            key: "cgh0jmvhj8j9g69b6cqg",
            link: {
              high: "https://images.uzum.uz/cgh0jmvhj8j9g69b6cqg/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cgh0jmvhj8j9g69b6cqg/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cgh0jmvhj8j9g69b6cqg/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cgh0jmvhj8j9g69b6cqg/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 199500,
        minFullPrice: 13638000,
        minSellPrice: 13638000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 636 560 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 1,
        productId: 188714,
        rating: 0,
        title: "Smartfon Samsung Galaxy S22+, 8GB/128GB, pushti",
        photos: [
          {
            key: "cegjhtov1htd23aj9m30",
            link: {
              high: "https://images.uzum.uz/cegjhtov1htd23aj9m30/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cegjhtov1htd23aj9m30/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cegjhtov1htd23aj9m30/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cegjhtov1htd23aj9m30/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -16,
            value: "#ffacbc",
            title: "Pushti",
            characteristic: {
              values: [
                {
                  id: -16,
                  title: "Pushti",
                  value: "#ffacbc",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 199503,
        minFullPrice: 13638000,
        minSellPrice: 13638000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 636 560 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 188713,
        rating: 0,
        title: "Smartfon Samsung Galaxy S22+ 8 GB/128 GB, yashil",
        photos: [
          {
            key: "cegjgv8v1htd23aj9m1g",
            link: {
              high: "https://images.uzum.uz/cegjgv8v1htd23aj9m1g/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cegjgv8v1htd23aj9m1g/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cegjgv8v1htd23aj9m1g/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cegjgv8v1htd23aj9m1g/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -120,
            value: "#3f6214",
            title: "Yashil",
            characteristic: {
              values: [
                {
                  id: -120,
                  title: "Yashil",
                  value: "#3f6214",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
    {
      catalogCard: {
        __typename: "SkuGroupCard",
        adult: false,
        favorite: false,
        feedbackQuantity: 0,
        id: 193670,
        minFullPrice: 13638000,
        minSellPrice: 13638000,
        offer: null,
        badges: [
          {
            backgroundColor: "#FFFF00",
            text: "1 636 560 so'm/oyiga",
            textColor: "#1F1F26",
            __typename: "UzumInstallmentTitleBadge",
            id: 41,
          },
        ],
        ordersQuantity: 0,
        productId: 183637,
        rating: 0,
        title: "Smartfon Samsung Galaxy S22+ 8GB/128GB qora",
        photos: [
          {
            key: "cecq5k8l08kcldtoo530",
            link: {
              high: "https://images.uzum.uz/cecq5k8l08kcldtoo530/t_product_540_high.jpg",
              low: "https://images.uzum.uz/cecq5k8l08kcldtoo530/t_product_540_low.jpg",
              __typename: "PhotoLink",
            },
            previewLink: {
              high: "https://images.uzum.uz/cecq5k8l08kcldtoo530/t_product_240_high.jpg",
              low: "https://images.uzum.uz/cecq5k8l08kcldtoo530/t_product_240_low.jpg",
              __typename: "PhotoLink",
            },
            __typename: "Photo",
          },
        ],
        characteristicValues: [
          {
            id: -1,
            value: "#000000",
            title: "Qora",
            characteristic: {
              values: [
                {
                  id: -1,
                  title: "Qora",
                  value: "#000000",
                  __typename: "CharacteristicValue",
                },
              ],
              title: "Rang",
              id: -1,
              __typename: "ProductCharacteristic",
            },
            __typename: "CharacteristicValue",
          },
        ],
      },
      __typename: "Item",
    },
  ];

const root = document.querySelector('#root')
const select = document.querySelector('#type')
const searchInput = document.querySelector('#searchInput');

select.addEventListener('change',(e) =>{
    filter(e.target.value)
})

searchInput.addEventListener('input',(e) =>{
    const searchResult = data.filter((item) =>
    e.target.value.trim() ? item.catalogCard.title.toUpperCase().includes(e.target.value.trim().toUpperCase())
    : true)
    render(searchInput)
})

function filter(value) {
    switch (value) {
        case 'Ommabob':
            data.sort((first,second) => second.catalogCard.rating - first.catalogCard.rating)
            break;
        case 'Qimmatroq':
            data.sort((first,second) => second.catalogCard.minFullPrice - first.catalogCard.minFullPrice)
            break;
        case 'Arzonroq':
            data.sort((first,second) => first.catalogCard.minFullPrice - second.catalogCard.minFullPrice)
            break;
    
        default:
            break;
    }
    render(data)
}


function render() {
    root.innerHTML = ''
    if (!data.length) {
        root.textContent = 'Nimdir xato bo"ldi (((((('
        return
    }

    data.forEach((item) =>{
        const {title,rating,minFullPrice,photos} = item.catalogCard
        let ratingVal = Array.
    })
}




