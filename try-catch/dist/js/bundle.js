/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/


// console.log(a);// yani bu logda hech narsa yo'q lekin pastdagi logda hello world bor lekin run code qilinganda butun loyiha hato berepti(masalan bu fileda katta loyiha bo'lgan taqdirdaham hammasi buzulib ketgan bo`lardi hammasiga hato bervorgan bo'lardi chunki birinchi logdagi a yo'q narsa)

// console.log("Hello world");

//try/catch yani hatolarni ushlab berish yani butun loyihada bitta hato bo'lsa shu bitta hato sabab butun loyiha buzulib tashlamasdan hatoni ushlab beradi

// try {
//     console.log("Work");
// } catch (error) {
//     console.log("Error");
// }
// console.log("Done");//shu holatda run kode qilinganda work,done chiqepti error esa chiqmepti

// try {
//     console.log("Work");
//     console.log(a);
//     console.log("Procecsing");
// } catch (error) {
//     console.log("Error");
// }
// console.log("Done");//bu holatda run code qilinganda work,error,done chiqepti hullas catch functsiyasi va uning parametiridagi error tryni ichidagi logdagi hato a logini ushlab berib qolganini chiqardi yani bitta hato sabab butun loyiha hato bermadi aynan hato bo'lhan joyini kod o'qish tartibi bilanchiqarib berdi

// try {
//     console.log("Work");
//     console.log(a);
//     console.log("Procecsing");
// } catch (error) {
//     console.log(error);
// }
// console.log("Done");//bu holatda birinchi  work,ikkinchi ReferenceError: a is not defined at script.js:27:1 at script.js:32:21,va uchinchi done chiqdi ///yani ReferenceError,da 27chi qatordagi (a) ni hato ekanligini va 30chi qatordagi errorni hatoligini consolda ko'rsatdi 30 chi qatordagi errorni hatoligini sababi shuki ""ahunaqa qavus ichiga olinmadi error hato sababi shu

// try {
//     console.log("Work");
//     console.log(a);
//     console.log("Procecsing");
// } catch (error) {
//     console.log(error.message);//bu error object qaytaradi yani object hissoblanadi name qo`shilganda hatoni nomini beradi yani reference error
// }
// console.log("Done");//bu holatda birinchi  work,ikkinchi ReferenceError: a is not defined at script.js:27:1 at script.js:32:21,va uchinchi done chiqdi ///yani ReferenceError,da 27chi qatordagi (a) ni hato ekanligini va 30chi qatordagi errorni hatoligini consolda ko'rsatdi 30 chi qatordagi errorni hatoligini sababi shuki ""ahunaqa qavus ichiga olinmadi error hato sababi shu

// try {
//     console.log("Work");
//     console.log(a);
//     console.log("Procecsing");
// } catch (error) {
//     console.log(error.message);//bu error object qaytaradi yani object hissoblanadi message qo`shilganda a is not defined chiqadi yuani hatoni habarini beradi adresi va nomi bilan hullas catchda hatoni topib olsa bo'larkan
// }
// console.log("Done");//bu holatda birinchi  work,ikkinchi ReferenceError: a is not defined at script.js:27:1 at script.js:32:21,va uchinchi done chiqdi ///yani ReferenceError,da 27chi qatordagi (a) ni hato ekanligini va 30chi qatordagi errorni hatoligini consolda ko'rsatdi 30 chi qatordagi errorni hatoligini sababi shuki ""ahunaqa qavus ichiga olinmadi error hato sababi shu

// try {
//     console.log("Work");
//     console.log(a);
//     console.log("Procecsing");
// } catch (error) {
//     console.log(error.stack);//bu error object qaytaradi yani object hissoblanadi stackda hatolarni ro'yhati qatorini raqami chiqadi ustiga bosilsa to`g`ri hatoga olib kiradi
// }
// console.log("Done");//bu holatda birinchi  work,ikkinchi ReferenceError: a is not defined at script.js:27:1 at script.js:32:21,va uchinchi done chiqdi ///yani ReferenceError,da 27chi qatordagi (a) ni hato ekanligini va 30chi qatordagi errorni hatoligini consolda ko'rsatdi 30 chi qatordagi errorni hatoligini sababi shuki ""ahunaqa qavus ichiga olinmadi error hato sababi shu

// const btn=document.querySelector(".click")
// btn.addEventListener("click", () =>{
//     console.log("Click");
// })//bu holatda aboute.htmlda hato chiqepti chunki ungaham bundle.js ulangan addseventlistenner yo`q degan hato chiqarepti buning sababi webpack orqali bundle.js bilan ulangani uchun

const btn = document.querySelector(".click");
try {
    btn.addEventListener("click", () => {
        console.log("Click");
    });
} catch (error) {
    console.log(error.message);//yoki name yozsaham hatoni nomini chiqaradi yani bu yerda index.htmldagi buttonga click qilinganda aboute.html da hatoni sababio chiqdi yani hatoni topib berdi bu sabab dasturchi hatoni topishi va bartaraf qilishi mumkun
}

/******/ })()
;
//# sourceMappingURL=bundle.js.map