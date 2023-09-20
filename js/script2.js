"use strict";

////////////////////By myself/////////////////////////
//////////////DOM va Metodlar bilan ishlash//////////

// Old version codes
// const box = document.getElementById('box');// id orqali olish
// console.log(box);

// const buttons = document.getElementsByTagName("button")[0];//bu har doim massiv qaytaradi >[1]< manashu kodsiz bu faqat elementni o'zini qataradi bu >[1]< kod bilan esa elementlarni ichidan kerakli elementni 0 dan boshlanadigan raqam orqali  tanlab oladi massivni ichiga to'g'ridan to'g'ri elementni olib bo'lmaydi
// console.log(buttons);

// const circles = document.getElementsByClassName("circle")[2]
// console.log(circles);// 3 chi divdagi circle chaqiriladi
// // Old version codes

// //New version codes

// const heart = document.querySelector(".heart");//bitta heart nomli classni qaytaradi
// console.log(heart);

// const hearts = document.querySelectorAll(".heart");//hamma heart nomli classni qaytaradi
// // console.log(hearts);
// hearts.forEach((item) => {//massivdan elementni olish uchun forEach intirigatsa qilib olish kerak bo'ladi
//     console.log(item);
// });

// const wrapper = document.querySelector(".wrapper")//bu holatda butun html fayl ichidan wrapperni qidiradi
// console.log(wrapper);

// const hearts = wrapper.querySelectorAll(".heart");
// console.log(hearts);

// //New version codes

///////////////Project preparation///////////////////////////

// const box = document.querySelector("#box");
// box.style.backgroundColor = "red";
// box.style.height = "100px";
// box.style.width = "100px"; //diynamic tarzda styleda rangi va size o'zgartirildi

// const buttons = document.querySelectorAll("button");
// buttons[0].style.width = "200px";//buttonga ko'plik holatda shundan dymamic style beriladi CHUNKI BU MASSIV >[] Manashu massivga chaqirmasdan style berib bo'meydi

// const circles = document.querySelectorAll(".circle");
// circles[1].style.backgroundColor = "yellow";//buham huddi tepadagi holat html fayillar bu joyda massivni ichida keladi querySelectorALL MASSIV QILIB HAMMA SHU NOMLI KLASLARNI OLIB KELADI CHUNKI ALL BO'LGANI UCHUN shu sabab yani massiv noldan boshlangani sabab kerakli elementga 0 dan boshlab massivni ichiga olib class berish mumkun querySelectorAll bodydagi hamma elementlarni massivini oladi

// const circle = document.querySelector(".circle");
// circle.style.backgroundColor ="yellow";// querySelector ni o'zi bo'lsa (yani All siz) bodydagi circle nomli claslarni birinchisini olib keladi faqat birinchisini olib keladi

// const box = document.querySelector("#box");
// box.style.cssText = "background-color: green; width: 200px; border-radius:20px;";//va hokozooo qilib stylelarni berish mumkun// bu htmldan kelayotgan elementlarga js ichida dynamic style berishni eng yahshi yo'li yani bir qator kod ichida hamma stylelarni berish mumkun

// const hearts = document.querySelectorAll(".heart");
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "green";
// } //[i] qilingani uchun hammasi o'zgardi lekin []< buni ichiga 0 dan boshlab 2 gacha hohlagan raqam yozilganda yurakchalarga tanlab style bersa bo'ladi

// const hearts = document.querySelectorAll(".heart");
// for (let i = 0; i < hearts.length; i++) {
//     hearts[2].style.backgroundColor = "green";
// } //[i] qilingani uchun hammasi o'zgardi lekin []< buni ichiga 0 dan boshlab 2 gacha hohlagan raqam yozilganda yurakchalarga tanlab style bersa bo'ladi

// const hearts = document.querySelectorAll(".heart");
// hearts.forEach((item) => {
//     item.style.backgroundColor = 'yellow'
// });// bu forEach orqali qilingani shuni yangi va qulay usuli yani hamma elementlarga bittada dynamic style berish yoki ichidan tanlab hohlaganimizga dynamic style berish item deganda ichida yani heartsni ichidagi hamma elementlar nazarda tutilayapti

//  const btn = document.createElement("button");//createElement bilan yangi html elementni dynamic tarzda js ichida yaratish mumkun bunda divniham dynamic tarzda yaratish
//  document.body.append(btn);

//  const text = document.createTextNode("i am a text");
//  console.log(text);// bu html bodyga dynamic tarzda text qo'shish


// const circleWrapper = document.querySelector('.circle__wrapper')
// const myCircle = document.createElement("div");
// myCircle.classList.add('circle');//classList.add() < bu htmldagi classListlarimzga classni dynamic tarzda qo'shadi
// circleWrapper.append(myCircle);// bu yerda 1 chi qatordagi circleWrapper o'zgaruvchisi orqali htmldagi circle__wrapper (yani ona div)classi chaqirildi va keyingi qatorda myCircle nomli yangi o'zgaruvchi ochilib unga createElement metod yozilib shu metod orqali htmlda yangi div ochildi va myCircle o'zgaruvchisiga (classList.add bu clasni nomicircle bo'lishi uchun javobgar hususiyat) orqali yangi div (circle) qo'shildi append() metodi orqali qo'shildi 

// const circleWrapper = document.querySelector('.circle__wrapper')
// const myCircle = document.createElement("div");
// myCircle.classList.add('circle');//classList.add() < bu htmldagi classListlarimzga classni dynamic tarzda qo'shadi
// circleWrapper.before(myCircle)// befor divni oldinga chiqardi ona divdan oldinga chiqardi
// // bu yerda 1 chi qatordagi circleWrapper o'zgaruvchisi orqali htmldagi circle__wrapper (yani ona div)classi chaqirildi va keyingi qatorda myCircle nomli yangi o'zgaruvchi ochilib unga createElement metod yozilib shu metod orqali htmla yangi div ochildi va myCircle o'zgaruvchisiga classList.add orqali yangi div (circle) qo'shildi append() metodi orqali qo'shildi

// const circleWrapper = document.querySelector('.circle__wrapper')
// const myCircle = document.createElement("div");
// myCircle.classList.add('circle');//classList.add() < bu htmldagi classListlarimzga classni dynamic tarzda qo'shadi
// circleWrapper.after(myCircle)// befor divdan keyin chiqaradi yani ona divdan keyinga chiqardi
// // bu yerda 1 chi qatordagi circleWrapper o'zgaruvchisi orqali htmldagi circle__wrapper (yani ona div)classi chaqirildi va keyingi qatorda myCircle nomli yangi o'zgaruvchi ochilib unga createElement metod yozilib shu metod orqali htmla yangi div ochildi va myCircle o'zgaruvchisiga classList.add orqali yangi div (circle) qo'shildi append() metodi orqali qo'shildi

// const circles = document.querySelectorAll(".circle");//bu orqali htmldagi circle__wrapper classini ichidagi circle classlari chaqirildi va createElement orqali ichiga qo'shimcha tarzda dynamic yo'l bilan yangi div qo'shildi va classList hususiyati orqali circle qatorlariga qo'shildi
// const myCircle = document.createElement("div");
// myCircle.classList.add("circle");
// circles[0].before(myCircle);//before 0 no o'rniga yani qatorni boshiga qaytaradi

// const circles = document.querySelectorAll(".circle");
// const myCircle = document.createElement("div");
// myCircle.classList.add("circle");
// circles[0].after(myCircle);//bu yerda after 0 dan keyin yani sanoq bo'yicha noldan keyingi o'ringa joylashtiradi

// const circles = document.querySelectorAll(".circle");
// const myCircle = document.createElement("div");
// myCircle.classList.add("circle");
// circles[0].remove();//bu html elementlarni dynamic tarzda udalit qiladi

// const circles = document.querySelectorAll(".circle");
// const myCircle = document.createElement("div");
// myCircle.classList.add("circle");
// circles[1].replaceWith(myCircle); // bu replaceWith metodi circle elementlari ichida joy tanlashni bajaradi yani massivni ichida aytilgan joyga borib joylashadi (ona div ichida) yani With bo'ylab!!! va o'zi joylashgan divni hidden qilib qo'yadi

// const circles = document.querySelectorAll(".circle"); //bu orqali htmldagi circle__wrapper classini ichidagi circle classlari chaqirildi va createElement orqali ichiga qo'shimcha tarzda dynamic yo'l bilan yangi div qo'shildi va classList hususiyati orqali circle qatorlariga qo'shildi
// const myCircle = document.createElement("div");
// myCircle.classList.add("circle");
// circles[1].replaceWith(myCircle); //before 0 no o'rniga yani qatorni boshiga qaytaradi
// myCircle.style.backgroundColor = "gray";

// const circleWrapper = document.querySelector('.circle__wrapper')
// const circles = document.querySelectorAll(".circle");
// const myCircle = document.createElement("div");
// myCircle.classList.add('circle');
// circleWrapper.append(myCircle);
// myCircle.innerHTML = 'E'
// // myCircle.innerHTML = '<pre>E</pre>'//INNER HTMLNI ICHIGA HTML TAGLARNIHAM YOZISH MUMKUN
// myCircle.style.backgroundColor = "blue";
// // circles[0].after(myCircle);//Buni qavus ichiga olib turaman ekran alfavit bo'yicha turishi uchun
// // myCircle.textContent = 'A'// BU ORQALIHAM FAQAT TEXTLAR YOZISH MUMKUN// bu faqat text qaytaradi html taglar qaytarmaydi

// circleWrapper.insertAdjacentHTML("afterbegin", "<pre>e</pre>");//ichini boshiga kiradi
// circleWrapper.insertAdjacentHTML("beforebegin", "<pre>e</pre>");//tashqarisini boshiga kiradi
// circleWrapper.insertAdjacentHTML("afterend", "<pre>e</pre>");//ohiriga qo'shib beradi
// circleWrapper.insertAdjacentHTML("beforeend", "<pre>e</pre>");//ichini ohiriga qo'shib beradi

////////////////////with the teacher/////////////////////////

// const box = document.querySelector("#box");
// const buttons = document.querySelectorAll("button");
// const circles = document.querySelectorAll(".circle");
// const circle = document.querySelector(".circle");
// const hearts = document.querySelectorAll(".heart");
// const circleWrapper = document.querySelector(".circle__wrapper");

// box.style.cssText = "background-color: red; width: 100px; height: 100px";

// buttons[0].style.width = "100px";
// circles[1].style.backgroundColor = "yellow";
// circle.style.backgroundColor = "yellow";

// // for (let i = 0; i < hearts.length; i++) {
// //   hearts[i].style.backgroundColor = 'green'
// // }

// // hearts.forEach((item) => {
// //   item.style.backgroundColor = 'gray'
// // })

// const btn = document.createElement("button");
// // const text = document.createTextNode('I am text')

// document.body.append(btn);

// const myCircle = document.createElement("div");

// myCircle.classList.add("circle");

// circleWrapper.append(myCircle)
// circleWrapper.before(myCircle)
// circleWrapper.after(myCircle)
// circles[0].after(myCircle)
// circles[1].remove()
// circles[1].replaceWith(myCircle)
// circleWrapper.append(myCircle)
// myCircle.innerHTML = '<pre>E</pre>'
// myCircle.textContent = 'E'
// circleWrapper.insertAdjacentHTML('beforeend', '<pre>E</pre>')
