"use strict";

/////////////////////////////////////////////////////
// WARNINGG !!!!(use scriptniham ohiri har hil holatda tursin)boshidagi o'zgaruvchilarni ohiri faqt vergul bilan yopilgan chunki bu kodlar boshqa vc codeda yozilayotganda nastroyka o'zgartirilgan bu faylni radnoy joyidan to'g'ridan to'g'ri skachat qilib olganim uchun osha nastroyka ishlayapti  WARNING: ohilari ; bo'lsa kodlar ishlamay qoladi
//////////////////////////////////////////////////////

const adv = document.querySelectorAll(".promo__adv img"), // bu htmlda reklamalari bor promo__adv ona divi buni ichidagi img degan taglar chaqirildi maqsad >> adv.forEach((item) => {     item.remove();}); forEach metodi va remov metodi orqali dynamic tarzda saytda o'chirsh edi
    wrapper = document.querySelector(".promo__bg"), //bu htmlda promo__bg degan class bunga cssda backgrounga rasim berilgan wrapper degan o'zgaruvchi ochib bu divni classi orqali chaqirib manabu >>wrapper.style.backgroundImage = 'url("img/1.jpg")'; usulda background rasim o'zgartirildi bunday holatda rasim o'zgartirilganda rasim papkadan manabunday // (yani css va htmlda chaqirilganday papkalar ga kirib borib tanlanmaydi) holatda chaqirilmaydi hammasi manzillar qo'lda url bilan yoziladi>>
    imdId = document.querySelector("#imd"), //buni id orqali qilindi
    imdClass = document.querySelector(".imd"), // bunisi class orqali qilindi
    genre = wrapper.querySelector(".promo__genre"), // htmlda promo__genre degan class chaqirilib ichidagi text manabunday usulda drammadan comedyga o'zgartirildi (yani eski text htmlda qolgan bo'lsaham browserdan dynamic tarzda udalit qilindi) >>! genre.textContent = "comedy";
    seriesList = document.querySelector(".promo__interactive-list"); //bunda htmldan promo__interactive-list nomli class seriesList nomli yangi o'zgaruvchi yaratilib chaqirildi

adv.forEach((item) => {
    item.remove();
});

wrapper.style.backgroundImage = 'url("img/1.jpg")'; // bundagi css faylga style berilsa yangi jsda dynamic tarzda qo'yilgan rasmham eski css stylniham qabul qiladi

imdId.style.cssText = "color:white;";

imdClass.style.cssText = "color:white;";

genre.textContent = "comedy";

seriesList.innerHTML = ""; // seriesList  <<bu htmlda ul da  promo__interactive-list nomli class va buni ichida bir nechta text formatli fayillar bor  seriesList.innerHTML = ""; yani shu innerhtml chaqirilganda "" manashu kod borligi sabab promo__interactive-list nomli html clas ichidagi text fayillar dynamic tarzda udalit bo'ladi (browserdan) lekin html faylda turaveradi udalit bo'lmasdan

const seriesDB = {
    // shu darsni yahshi tushunmadim
    series: [
        "Omarr",
        "The Final Legacyyy",
        "Ertugrul Gazi",
        "Magnificent Century",
        "The Great Seljuks: Guardians...",
    ],
};

seriesDB.series.forEach((item, idx) => {
    seriesList.innerHTML += `
    <li class="promo__interactive-item">${idx + 1} ${item}
      <div class="delete"></div>
    </li>
  `;
});

// console.log(seriesList.innerHTML); // BU BILAN HAR QANDAY HTML DIVLARINI ICHIDAGI HAMMA NARSANI LOGGA CHIQARIB KO'RISH MUMKUN
