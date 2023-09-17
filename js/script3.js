"use strict";

//Xodisalar bilan ishlash

//ONCLICK 1 chisi htmlda atribut orqali masalan onclick lekin bu eski yo'li foydalanish kerak emas

//ONCLICK 2 chi yo'li 2 chi yo'lida bitta buttonga adashib ikki martta onclick qilinsa kod o'qish qoidasi bo'yicha ikkinchisi chiqaradi
// const btn = document.querySelector("#btn");
// btn.onclick = function () {
//     alert("click from js");
// };
// btn.onclick = function () {
//     alert("click from js2");
// };

// ONCLICK 3 chi usuli shu usuldan foydalanish kerak bunda bitta onclickga ikkita habar yozilsaham novbati bilan hammasini chiqaradi
// btn.addEventListener("click", () => {
//     alert("click");
// });
// btn.addEventListener("click", () => {
//     alert("click2");
// });

// btn.addEventListener("mouseenter", () => {//bu buttonga mouse borganda hover bo'lib madalda Hover degan yozuvimiz chiqadi yanai madalni hover desaham boladi lekin bu nimadur vazifa bajarishi mumkun
//     alert("Hover");
// });

// btn.addEventListener("mouseenter", (event) => {//bu buttonga mouse borganda hover bo'lib madalda Hover degan yozuvimiz chiqadi yanai madalni hover desaham boladi lekin bu nimadur vazifa bajarishi mumkun
//     // console.log(event.target);//event target yordamida esa bu yozilgan buttonni elementini yani htmldagi elementini logda olish mumkun yani har safar btnga murojat qilmasdan event orqali elementni olish
//     // event.target.remove();//onchlik bo'lganda buttonni ekrandan udalit qilish hodisasi bo'ladi

//     // alert("Hover");
// });

// const deleteElement = (event) => {
//     event.target.remove();
// };
// btn.addEventListener("click", deleteElement);//bunda deleteElement o'zgaruvchiga button elementini remove holati chaqirilgan btn.addEventListener da onclick bo'lganda deleteElemente kelib ichidagi elementni udalit qiladi

// let i = 0;
// const addElement = (event) => {
//     i++;
//     if (i === 3) {
//         btn.removeEventListener("click", addElement);
//     }
//     console.log(i);
// };
// btn.addEventListener("click", addElement);

// const overlay = document.querySelector(".overlay");
// const cb = (e) => {
//     console.log(e.currentTarget);
// };
// btn.addEventListener("click", cb);
// overlay.addEventListener("click", cb);

//  const link = document.querySelector('a')
//  link.addEventListener('click', (event) =>{
// event.preventDefault()
// alert("link")
//  })

// const btns = document.querySelectorAll("button");
// btns.forEach((item) => {
//     item.addEventListener("click", () => {
//         console.log(1);
//     });
// });

// const btns = document.querySelectorAll("button");
// const logger = () => {
//     console.log(1);
// };
// btns.forEach((item) => {
//     item.addEventListener("click", logger, {once:true});
// });

/////////////////DOM navigatsya/////////////////////

// console.log(document.head);
// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector('#btn' ).parentNode);
// console.log(document.querySelector('#btn' ).parentNode.parentNode);
////////////////////////////
{
    /* <button data-current="">B</button> */
}
// console.log(document.querySelector('[data-current="b"]').nextSibling);//next oradagi bo'sh kataklardan yani probellardan keyingi qatorlarniham hissoblash kerak shunda keyingi button chiqarkan

// console.log(document.querySelector('[data-current="b"]').previousSibling);//bundaham shu previos bilan bo'sh qatorlar hissoblansa oldingi qatorlarga chiqadi

// console.log(document.querySelector('[data-current="b"]').nextElementSibling);// bunga bo'sh probel tashlash sharmas bu faqat bor elementni o'zini bilan ishlaydi

// console.log(document.querySelector('[data-current="b"]').previousElementSibling);// bunga bo'sh probel tashlash sharmas bu faqat bor elementni o'zini bilan ishlaydi

// console.log(document.querySelector('#btn' ).parentElement);//buham o'zidan oldingi elementni ko'rsatadi

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

for (let node of document.body.childNodes) {// bunda nodelar orasidagi probellar sabab #text bo'lib chiqadigan textlar yo'qolib faqat elementlarni o'zi chiqadi
    if (node.nodeName == "#text") {
        continue;
    }
    console.log(node);
}
