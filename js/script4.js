"use strict";
///////////////////////////Claslist_2////////////////////////////
/////by myself//////////////////////////////////////////////////

// const btns= document.querySelectorAll('button')
// console.log(btns[0].classList.length);//bu holatda birinchi buttonni nechta classi borligini bilish mumkun

// const btns= document.querySelectorAll('button')
// console.log(btns[0].classList.item(1));//bunda item(1) orqali claslarni novbati bo'yicha chaqirish mumkun yani bilish mumkun agar 0 uozilganda blueni chiqarardi

// const btns= document.querySelectorAll('button')
// btns[1].classList.add('violet')//bu bilan cssda yozib qo'yilgan blu degan classni dynamic tarzda 2 chu buttonga berdik gara cssda unaqa style bo'lmasaham elementga class yozilaveradi

// const btns= document.querySelectorAll('button')
// btns[0].classList.remove('blue')// remove bilan esa 0 chi elementdagi blue clasini dynamoc tarzda udalit qilib tashlash mumkun shunda faqat some clasi qoldi agar some classiga cssda style yozilga bo'lsa endi some ishlaydi
// btns[1].classList.add('violet')// add metodi class qo'shadi bu bilan cssda yozib qo'yilgan blu degan classni dynamic tarzda 2 chu buttonga berdik gara cssda unaqa style bo'lmasaham elementga class yozilaveradi

// const btns= document.querySelectorAll('button')
// btns[1].classList.add('violet')// add metodi class qo'shadi bu bilan cssda yozib qo'yilgan blu degan classni dynamic tarzda 2 chu buttonga berdik gara cssda unaqa style bo'lmasaham elementga class yozilaveradi
// btns[0].classList.remove('blue')// remove bilan esa 0 chi elementdagi blue clasini dynamoc tarzda udalit qilib tashlash mumkun shunda faqat some clasi qoldi agar some classiga cssda style yozilga bo'lsa endi some ishlaydi
// btns[0].classList.toggle('blue')// toggleni ishi agar parametiriga yozilgan class shu 0 chi elementda bor bo'lsa udalit qiladi agar yo'q bo'lsa cssdan olib qo'shib qo'yadi clasga cssdagi violet styleniham berishxam mumkun edi

// const btns= document.querySelectorAll('button')
// btns[1].classList.add('violet')// add metodi class qo'shadi bu bilan cssda yozib qo'yilgan blu degan classni dynamic tarzda 2 chu buttonga berdik gara cssda unaqa style bo'lmasaham elementga class yozilaveradi
// btns[0].classList.remove('blue')// remove bilan esa 0 chi elementdagi blue clasini dynamoc tarzda udalit qilib tashlash mumkun shunda faqat some clasi qoldi agar some classiga cssda style yozilga bo'lsa endi some ishlaydi
// btns[0].classList.toggle('blue')// toggleni ishi agar parametiriga yozilgan class shu 0 chi elementda bor bo'lsa udalit qiladi agar yo'q bo'lsa cssdan olib qo'shib qo'yadi cssda esa some (red) clasi bor shunga red bo'lepti (clasga cssdagi violet styleniham berishxam mumkun edi)

// const btns= document.querySelectorAll('button')//agarda 0 chi elemetimizni ichida blue degan class bor bo'lsa logda yeapt degan matn chiqsin contains shu ishni bajaradi yano contains bilan elementlarni ichidagi claslarni bor yo'qligini tekshirish mumkun contains('agar bu joyga yo'q class yozilsa logda hech narsa chiqmaydi')
// if(btns[0].classList.contains('blue')){
//     console.log('yeapt');
// }

// const btns= document.querySelectorAll('button')
// btns[0].classList.add('red') /// yani bu yerda containsdan oldingi qatorda add qilib yangi red classi berilgani uchun logd ayeapt chiqdi
// if(btns[0].classList.contains('red')){
//     console.log('yeapt');
// }

// const btns= document.querySelectorAll('button')
// btns[0].addEventListener('click', ()=>{//bu yerda 0 chi elemetga hodisa qo'shib yani  0 chi elementga onclick bo'lganda 1 chi elementda red degan class yo'q bo'lsa qo'shiladi bor bo'lsa udalit qilinadi
//     if(!btns[1].classList.contains('red')){
//         btns[1].classList.add('red')
//     }else{
//         btns[1].classList.remove('red')
//     }
// })

const btns = document.querySelectorAll("button");
btns[0].addEventListener("click", () => {////bu yerda 0 chi elemetga hodisa qo'shib yani  0 chi elementga onclick bo'lganda 1 chi elementda red degan class yo'q bo'lsa qo'shiladi bor bo'lsa udalit qilinadi toggle bilan bir qatorda yopzildi if elsesiz yani toggle bor bo'lsa yoq qilqadi yo'q bo'lsa bor qiladi
    btns[1].classList.toggle("red");
});// yani bu narsalar bilan nimagadur click bo'lganda classlarini o'zgartirish mumkun

//////////////////////Delegatsa hodisalari//////////////////////
 










 












///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////withe the teacher///////////////////////////////////////
// const wrapper = document.querySelector(".btn-block"),
//     btns = document.querySelectorAll("button");

// btns[0].addEventListener("click", () => {
//     btns[1].classList.toggle("red");
// });

// wrapper.addEventListener("click", (event) => {
//     if (event.target && event.target.matches("button.red")) {
//         console.log("btn click");
//     }
// });

// // btns.forEach((item) => {
// //   item.addEventListener('click', () => {
// //     console.log('clicked')
// //   })
// // })

// const btn = document.createElement("button");
// btn.classList.add("red");
// wrapper.append(btn);
