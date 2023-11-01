//<!-- //eslatma: yani webpack qilinganda webpackni default nastroykasida bundle.js papkasi bor shu papkani loyihani html papkasiga chaqirib qo'yish kerak yani script jsda shu bundle.js papkasi bo'lishi kerak{html file ohiriga qara} //yani distni ichida boladi bundle.js   -->

"use strict";

//bu import qilishni birinchi yo'li
// import {firstVar} from "./main";

// console.log(firstVar);//bunda run code qilinganda bundle.jsdan hello chiqarkan

// //bu import qilishni ikkinchi yo'li
// import {firstVar,secondVar} from "./main";

// console.log(firstVar);//bunda run code qilinganda bundle.jsdan hello chiqarkan
// console.log(secondVar);


//bu import qilishni uchinchi yo'li
// import logger from "./main";
// logger()

//bu umumiy yo'li yani bir nechta funcsiyani import qilganda masalan bitta main nomli filedan import qilganda bitta o'zgaruvchiga olish mumkun concole logga qara va qaytadan yozib (qavus ichidagi yozilishga tayyor funcsyalarni tekshir) 
import * as main  from "./main"

console.log(`${main.firstVar}, ${main.secondVar}.${main.default}`);//${main.default} bu faqat bir martta export va inport qilinadigamn funcsiya main.jsda yozilgan logger funcsiyasi