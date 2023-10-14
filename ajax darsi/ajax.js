"use strict";

// const uzs = document.querySelector("#uzs"),
//     usd = document.querySelector("#usd");

// uzs.addEventListener("input", (e) => {
//     const request = new XMLHttpRequest();
//     request.open("GET", "json/current.json");
//     request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
//     request.send();

//     request.addEventListener("readystatechange", () => {
//         if (request.readyState === 4 && request.status === 200) {
//             console.log(request.response);
//             const data = JSON.parse(request.response);
//             usd.value = (+uzs.value / data.current.usd).toFixed(2);
//         } else {
//             usd.value = " Something went wrong";
//         }
//     });
//     //status 200-ok, 404-not found, 500-server error, 400-client error
//     //statusText
//     //response
//     //readyState
// });
//////////////////////////////////////////////////////////////////////////////////////////////////
//AJAX o'zi nima? yani AJAX = Asynchronous JavaScript And XML.yani bu ajax texnalogiyasi bilan serverga get so'rov yuborilganda kelgan javob vaqtida sahifa qayta yuklanmaydi yani masalan bitta pageda turgan holda uni faqatgina kerakli joyigagina bosib serverdan malumot chaqirilganda page butunlay emas faqat so'rov jo'natilgan joyigina qayta yuklanadi yani butun boshli page qayta yuklanmaydi masalan qandeydur checkedga galichka qo'yilib yoki inputga malumot kirg'azib yoki inputdan malumot olish jaroyonida sahifa yani page butunlay qayta yuklanmaydi faqat so'rov kirg'izilgan yoki malumot olingan joyigina qayta yuklanadi
//bu yerda current.json file ochilib ichiga malumot qo'yildi current js dan huddi serverdan  foydalanganday holat yuzaga keltirildi (dars tajribasi uchun)
const uzs = document.querySelector("#uzs"),//htmldan chaqirilish bu id
    usd = document.querySelector("#usd");//htmldan chaqirilish bu id
uzs.addEventListener("input", (e) => {//yani uzs idisi click bo'lganda
    const request = new XMLHttpRequest();//new XMLHttpRequest()<=bu constructor hissoblanadi yani new XMLHttpRequest()<=bu yangi object qaytaradi////yani request so'rov degani yani serverga so'rov jo'natish
    request.open("GET", "json/current.json");//open metodi nastroyka yani ichiga ikkita parametr qabul qiladi birinchisi: "GET" ikkinchisi "POST" va yana bshqa parametrlariham bor POST serverdan json holatidagi failni web sahifaga chaqiradi GET esa serverdagi json holatdagi faylni web sahifaga chaqiradi ikkinchi parametri esa url, api va yoki serverdagi https holatda turgan json fayillarnimanzili yoziladi javob json formatda keladi kelgan json formatni objectga aylantirish kerak masalan url https bu yerda esa  curent.json failidan chaqirildi dars tajribasi uchun //yani bu yerda GET shu joyni o'zidagi json/current.json papkasiga so'rov jonatadi json/current.json papkasi esa ichidagiu malumotlarini beradi//serverga noto'g'ri malumot jo'natilsa masalan manzil hato  masalan json/current1.json deb yozilsa Something went wrong degan yozuv chiqadi pastda yozib qo'yilgan 404 hato chiqaradi 
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8");//yani sarlavha yani serverdan kelayotgan malumotdi kodirofka kadirofka qilish yani bu=>"Content-Type" malumot turiga degani yani malumot turini so'radi (chiqarib berish uchun) malumot turi esa bu=>application/json kodirofkasi esa bu=>charset=utf-8
    request.send();//yani so'rov yuborildi//yuqoridagi kodlarsa so'rov tayyorlandi keuin send qilib so'rov serverga yani current.jsonga jo'natildi
    request.addEventListener("load", () => {
        if (request.status === 200) {//yani eng pastdagi izohlardagi hammasi done bo'lsa yani hammsi ok bo'lsa serverda hamma narsa web sitega kelishga  tayyor bo'lsa 200yani ok bo'lsin 
            console.log(request.response);//logda response yani javob chaqirildi yani current.jsondagi malumotlar keldi
            const data = JSON.parse(request.response);//bu joyda serverdan yani current,jsondan kelayotgan malumot objectga o'girildi parse orqali!   
            usd.value = (+uzs.value / data.current.usd).toFixed(2);//yani uzsni qiymatini datani ichidagi narsaga yani objectga yani serverdan yani current.jsondan kelayotgan malumotga bo'lindi//bu yerda data abject qaytaradi ichidagi current ichidagi usdga kirildi //ohridagi raqamlarni faqt 2 honalik qoldiradi yani ohiridagi ikkita son 
        } else {
            usd.value = " Something went wrong";
        }
    });
    //BIRINCHI QAYTARADIGAN NARSASI Status deyiladi 200-ok, 404-not found, 500-server error, 400-client error//
    //statusText//
    //response yani kelgan javob//
    //readyState holatni aniqlash masalan load payti yani malumot  serverdan kelyotgan holatini holati masalan qaysi holatda ekanligi 5 ta holati bor//
});////Bu yerda faqat malumotni serverdan olish haqida dars bo'ldi
//////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////ajax post darsi 3 mudul loyihada amaliy qilindi//////////////////////////////

////////////////////////////////////////////////////////////ajax dynamic styling darsi 3-modul loyihada amaliy qilindi//////////////////////////////

