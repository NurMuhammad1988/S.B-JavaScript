"use strict";
///////////////////////////// By myself/////////////////////

// setTimeout(() => {
//     console.log("set time out")
// }, 5000) //bu function 5 secunddan keyin ishlaydi setTimeout funksyasi shuni bajaradi

// setTimeout((text) => {
//     console.log(text)
// }, 5000 ,'set time out') //bu function 5 secunddan keyin ishlaydi setTimeout funksyasi shuni bajaradi// parametrga text berib uniham 5 secunddan keyin chaqirsa bo'ladi

// const timerId = setTimeout(logger,5000)// tepadagi ko'rinishlaridan ko'ra shuni maqul yangi o'zgaruvchigga solvolgan maqul chunki clearInterval bilan kerak paytda timerId o'zgaruvchini to'htish yani udalit qilish mumkun
// clearInterval(timerId)//shu narsa timerIdni to'htatdi
// function logg er(){
//     console.log('set time out 5 second');
// }
//????????????????????????????????????????????????????????????????????

// const btn = document.querySelector("#btn");
// let timerId;
// let i = 0;
// btn.addEventListener("click", () => {
//     timerId = setInterval(logger, 2000);
// });
// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log("set time out 2 second");
//     i++;
// }
// let id = setTimeout(function log() {
//     console.log("hello log");
//     id = setTimeout(log, 500);
// }, 500);

//????????????????????????????????????????????????????????????????????

// const btn = document.querySelector("#btn"); //bu yerda htmldagi buttonni idsi olindi
// function myAnimation() {
//     //bu yerda myAnimation degan funksiya yasab ichida yangi car degan o'zgaruvchi yaratib ichiga htmlni ichida imgi bor divni classini olindi va posissayasini yangi let o'zgaruvchi ochib 0 qilindi odadiy (default) holati 0 bo'lib turipti   keyin shu  myAnimation funksiyani ichida timerId degan o'zgaruvchi yaratib unda setInterval degan funcsyani chaqirdik bu funksiya parametiridagi funcsiyani har 10 millisukundda ishga tushuradi keyin frame degan local funksyaga agar pos nomli o'zgaruvchi qattiy teng bo'lsa 700ga clearInterval metodi bilan timerIdni to'htat deyildi (yani car 700 pxlgacha yurib bo'lgandan keyin to'htash kerak) yokida esa
//     const car = document.querySelector(".car");
//     let pos = 0;
//     const timerId = setInterval(frame, 10);
//     function frame() {
//         if (pos === 700) {
//             clearInterval(timerId);
//         } else {
//             // console.log(pos);
//             pos++; //bu dekrement sabab pos har ishlaganda 1 qo'shilib ketaveradi toki 700ga yetgancha
//             car.style.left = pos + "px"; //bu yerda carni ichidagi elementga positsion absalyutni leftga pxlda qo'shilsin deyildi
//         }
//     }
// }
// btn.addEventListener("click", myAnimation);

// setInterval(() => {
//     console.log(1);// yani har 100 millesekundda bu funcsiya ishga tushadi setInterval shunday ishlaydi clearInterval funksiyasi esa shuni hohlagan joyda to'htatish imkonini beradi
// }, 100);

////////////////////////////////////////////////////////////////////////////////////////////////Wiht the Teacher////////////////////////////

// const btn = document.querySelector('#btn');

// function myAnimation() {
//   const car = document.querySelector('.car');
//   let pos = 0;

//   const timerId = setInterval(frame, 10);

//   function frame() {
//     if (pos === 700) {
//       clearInterval(timerId);
//     } else {
//       pos++;
//       car.style.left = pos + 'px';
//     }
//   }
// }

// btn.addEventListener('click', myAnimation);
