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

let i = 0;
const addElement = (event) => {
    i++;
    if (i === 3) {
        btn.removeEventListener("click", addElement);
    }
    console.log(i);
};
btn.addEventListener("click", addElement);
