"use strict";

// (( CONSOLE DIR QILINSA ABJECT HOLATDA CHIQADI CLASSLARI VA IDLARI BILAN YANI BU ORQALI QANAQA CLASLAR BERILGANINIHAM BILISH MUMKUN))

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

// const btns = document.querySelectorAll("button");
// btns[0].addEventListener("click", () => {////bu yerda 0 chi elemetga hodisa qo'shib yani  0 chi elementga onclick bo'lganda 1 chi elementda red degan class yo'q bo'lsa qo'shiladi bor bo'lsa udalit qilinadi toggle bilan bir qatorda yopzildi if elsesiz yani toggle bor bo'lsa yoq qilqadi yo'q bo'lsa bor qiladi
//     btns[1].classList.toggle("red");
// });// yani bu narsalar bilan nimagadur click bo'lganda classlarini o'zgartirish mumkun

//////////////////////Delegatsa hodisalari//////////////////////
  
//  const wrapper = document.querySelector('.btn-block')// bu htmldagi divni classi
//   wrapper.addEventListener('click' ,()=>{//bunda butun divni ichida nima onclikc bo'lsaham sanaydi yani divni ichida nima bo'lsaham ustiga bosilgada logdagi bos yozuvi hodisasi ishlaydi
//     console.log('bos');
//   })

// const wrapper = document.querySelector('.btn-block')
// wrapper.addEventListener('click' ,(event)=>{
//     console.dir(event.target);//bunda .btn-block classini yozilgan divni o'zi va ichidagi bolalariga click bo'lganda  logda event yani elementimizni targeti chiqadi  (( CONSOLE DIR QILINSA ABJECT HOLATDA CHIQADI CLASSLARI VA IDLARI BILAN YANI BU ORQALI QANAQA CLASLAR BERILGANINIHAM BILISH MUMKUN))
// })

// const wrapper = document.querySelector('.btn-block')
// wrapper.addEventListener('click' ,(event)=>{//yani agarda manashu bosilayotgan tagda yani elementda event target bor bo'lsa yani shu elementni tagName BUTTON bo'lsa(KATTA HARFLAR BILAN YOZILISHI KERAK) logda btn clik chiqsin yani bosilayotgan joyda BUTTON tag name bor bo'lsa yani clikc bolganda yani  faqat kereyli joyi click bolganda yani bu yerda hech qanday button yoki alohida birir bir elemetgamas ona divni ichida turib faqat tag name BUTTON bolgan elementlarga hodosa qo'shilayapti
//     if(event.target && event.target.tagName == 'BUTTON'){
//         console.log('btn clikc ');
//     }
// })

// const wrapper = document.querySelector('.btn-block')
// wrapper.addEventListener('click' ,(event)=>{//yani agarda manashu bosilayotgan tagda yani elementda event target bor bo'lsa yani shu elementni tagName BUTTON bo'lsa(KATTA HARFLAR BILAN YOZILISHI KERAK) logda btn clik chiqsin yani bosilayotgan joyda BUTTON tag name bor bo'lsa yani clikc bolganda yani  faqat kereyli joyi click bolganda yani bu yerda hech qanday button yoki alohida birir bir elemetgamas ona divni ichida turib faqat tag name BUTTON bolgan elementlarga hodosa qo'shilayapti
//     if(event.target && event.target.classList.contains('blue')){//endi contains sabab agar bosilayotgan tagname BUTTON bo'lgan elementni classi blue bo'lsagina click hodisasi sodir bo'lib logda btn clikc degan yozuv chiqadi yani faqt bitta elementni bu yerda blue borligi uchun bu hodoisa ishleydi // yani shunda elementlar ichidan hohlagan bittasini alohida tanlab olib unga onclick bo'lganda qandaydur hodisa qo'shish mumkun masalan style o'zgarishi yoki backendan qanaqadur boshqa malumot chaqirish yoki boshqa sahifaga o'tish
//         console.log('btn click ');
//     }
// })
 
// const wrapper = document.querySelector('.btn-block'),
// btns = document.querySelectorAll('button')//tepada vergul bor chunki ikkalasi qavussiz lekin bitta o'zgaruvchi hissoblanadi chunki btnsga o'zgaruvchi qiymati berilmadi tepadagi wrapper o'zgaruvchisiga bog'lab qo'yildi
// wrapper.addEventListener('click' ,(event)=>{//yani agarda manashu bosilayotgan tagda yani elementda event target bor bo'lsa yani shu elementni tagName BUTTON bo'lsa(KATTA HARFLAR BILAN YOZILISHI KERAK) logda btn clik chiqsin yani bosilayotgan joyda BUTTON tag name bor bo'lsa yani clikc bolganda yani  faqat kereyli joyi click bolganda yani bu yerda hech qanday button yoki alohida birorbir  elemetgamas ona divni ichida turib faqat tag name BUTTON bolgan elementlarga hodisa qo'shilayapti
//     if(event.target && event.target.classList.contains('blue')){//endi contains sabab agar bosilayotgan tagname BUTTON bo'lgan elementni classi blue bo'lsagina click hodisasi sodir bo'lib logda btn clikc degan yozuv chiqadi yani a bitta elementni bu yerda blue borligi uchun bu hodisa ishleydi // yani shunda elementlar ichidan hohlagan bittasini alohida tanlab olib unga onclick bo'lganda qandaydur hodisa qo'shish mumkun masalan style o'zgarishi yoki backendan qanaqadur boshqa malumot chaqirish yoki boshqa sahifaga o'tish
//         console.log('btn click ');
//     }
// })

// const wrapper = document.querySelector('.btn-block'),
// btns = document.querySelectorAll('button')//tepada vergul bor chunki ikkalasi qavussiz lekin bitta o'zgaruvchi hissoblanadi chunki btnsga o'zgaruvchi qiymati berilmadi tepadagi wrapper o'zgaruvchisiga bog'lab qo'yildi
// // wrapper.addEventListener('click' ,(event)=>{//yani agarda manashu bosilayotgan tagda yani elementda event target bor bo'lsa yani shu elementni tagName BUTTON bo'lsa(KATTA HARFLAR BILAN YOZILISHI KERAK) logda btn clik chiqsin yani bosilayotgan joyda BUTTON tag name bor bo'lsa yani clikc bolganda yani  faqat kereyli joyi click bolganda yani bu yerda hech qanday button yoki alohida birorbir  elemetgamas ona divni ichida turib faqat tag name BUTTON bolgan elementlarga hodisa qo'shilayapti
// //     if(event.target && event.target.classList.contains('blue')){//endi contains sabab agar bosilayotgan tagname BUTTON bo'lgan elementni classi blue bo'lsagina click hodisasi sodir bo'lib logda btn clikc degan yozuv chiqadi yani a bitta elementni bu yerda blue borligi uchun bu hodisa ishleydi // yani shunda elementlar ichidan hohlagan bittasini alohida tanlab olib unga onclick bo'lganda qandaydur hodisa qo'shish mumkun masalan style o'zgarishi yoki backendan qanaqadur boshqa malumot chaqirish yoki boshqa sahifaga o'tish
// //         console.log('btn click ');
// //     }
// // })
// btns.forEach(item =>{
//     item.addEventListener('click',()=>{
//           console.log('clicked');
//     })
// }) 
// const btn = document.createElement('button')
// btn.classList.add('red')
// wrapper.append(btn)//bu yerda btn degan yangi o'zgaruvchi ochilib unga createElement yordamida yana button qo'shildi (bu yerda yanggi button huddi avvalgilariday stilga ega bo'lganini sababi cssda button elementlarga style berib qo'yilgan) keyin classList va add orqali red stylesi berilgan va append orqali btn yani yangi ochilgan button wrapperga (yani) append qilindi (yani qo'shildi .btn-block degan classi bor nomli divga) lekin bu yangi ochilgan red buttonga onclick bo'lganda hodisa ishlamadi chunku bu yangi


// const wrapper = document.querySelector('.btn-block'),
// btns = document.querySelectorAll('button') 

// btns[0].addEventListener('click' , () =>{
//     btns[1].classList.toggle('red')
// })
// wrapper.addEventListener('click' ,(event)=>{
//     if(event.target && event.target.classList.contains('red')){
//         console.log('btn click ');
//     }
// })//pastdagi yangi buttoni ona divi wrapper  .btn.block nomli class bo'lgani uchun yangi buttondaham onclick hodisasi sodir bo'layapti 
// const btn = document.createElement('button')
// btn.classList.add('red')
// wrapper.append(btn)


// const wrapper = document.querySelector('.btn-block'),//bu yerda wrapper nomli yangi o'zgaruvchi ochilib unga .btn-block nomli div chaqirilgan
// btns = document.querySelectorAll('button') ////tepada vergul bor chunki ikkalasi qavussiz bo'lsaham lekin bitta o'zgaruvchi hissoblanadi chunki btnsga o'zgaruvchi qiymati berilmadi tepadagi wrapper o'zgaruvchisiga bog'lab qo'yildi
// btns[0].addEventListener('click' , () =>{
//     btns[1].classList.toggle('red')
// })////by yerda 0 chi elementga addeventlistener orqali onclick bo'lganda 1 chi elementni clasi redga o'zgarsin agar 1 chi elementni classi red bo'lsa udalit qilinsin 
// wrapper.addEventListener('click' ,(event)=>{
//     if(event.target && event.target.matches('button.red')){
//         console.log('btn click ');
//     }
// })//pastdagi yangi buttoni ona divi wrapper  .btn.block nomli class bo'lgani uchun yangi buttondaham onclick hodisasi sodir bo'layapti 
// const btn = document.createElement('button')
// btn.classList.add('red')
// wrapper.append(btn)








 












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
