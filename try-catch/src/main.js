//<!-- //eslatma: yani webpack qilinganda webpackni default nastroykasida bundle.js papkasi bor shu papkani loyihani html papkasiga chaqirib qo'yish kerak yani script jsda shu bundle.js papkasi bo'lishi kerak{html file ohiriga qara} //yani distni ichida boladi bundle.js   -->

"use strict"

// //bu export qilishni birinchi yo'li
// const firstVar = "Hello"
// export{firstVar}

// //bu export qilishni ikkinchi yo'li
const firstVar = "Hello"
export const secondVar= "hello world"//yani buni o'zi alohida yo'li ekan huddi shunday qilib exportni ichidayoq o'zgaruvchi ochib boshqa failga export qilish mumkun ekan
export{firstVar}

//bu export qilishni uchinchi yo'li

export default function logger () {
    console.log("Console log");
} //bu yo'l bilan yani export default function logger () deb yozish yo'li bilan main.js failidan faqat bir martta funcsiya jo'natishimiz mumkun agar bir nechta funcsiyalar jo'natish kerak bolsa export yasni birinchi ikkinchi yollaridan foydalangan maqul