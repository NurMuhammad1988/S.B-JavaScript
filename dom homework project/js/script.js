"use strict",
    // document.addEventListener("DOMContentLoaded", () =>// YANI BU KOD FOYDALANUVCHI BARAWSERDAN SHU SAHIFAGA KIRGANDA BIRINCHI BOLIB HTML BACKENT YOKI CSS KODLARNI MEDIYA FAILLARNI OCHIB BERADI UNDAN KEYIN ESA JS KODLARINI ELEMENTLARNI DOMGA ALOQADOR JOYLARINI HARAKATALARNI HODISALARNI BOSHLAYDI YANI HALI SAHIFA TO'LIQ YUKLAMASDAN (MASALAN INTERNET TEZLIGI PAST HOLATDA) MEDIYA FAYILLAR TO'LIQ YUKLANMASDAN JS KODLARINI ISHLATMAY TURADI CHUNKU MEDIYA FAYILLAR OCHILMASDAN JS CODLAR ISHLASHA QOTIB QOLISH YOKI YOQ RASMGA SLIDERLAR ISHLASHNI BOSHLAB YUBORISHU MUMKUN

    document.addEventListener("DOMContentLoaded", () => {
        /////////////////////////////////////////////////////
        // WARNINGG !!!!(use scriptniham ohiri har hil holatda tursin)boshidagi o'zgaruvchilarni ohiri faqat vergul bilan yopilgan chunki bu kodlar boshqa vc codeda yozilayotganda nastroyka o'zgartirilgan bu faylni radnoy joyidan to'g'ridan to'g'ri skachat qilib olganim uchun osha nastroyka ishlayapti  WARNING: ohilari ; bo'lsa kodlar ishlamay qoladi
        //////////////////////////////////////////////////////

        const adv = document.querySelectorAll(".promo__adv img"), // bu htmlda reklamalari bor promo__adv ona divi buni ichidagi img degan taglar chaqirildi maqsad >> adv.forEach((item) => {     item.remove();}); forEach metodi va remov metodi orqali dynamic tarzda saytda o'chirsh edi
            wrapper = document.querySelector(".promo__bg"), //bu htmlda promo__bg degan class bunga cssda backgrounga rasim berilgan wrapper degan o'zgaruvchi ochib bu divni classi orqali chaqirib manabu >>wrapper.style.backgroundImage = 'url("img/1.jpg")'; usulda background rasim o'zgartirildi bunday holatda rasim o'zgartirilganda rasim papkadan manabunday // (yani css va htmlda chaqirilganday papkalar ga kirib borib tanlanmaydi) holatda chaqirilmaydi hammasi manzillar qo'lda url bilan yoziladi>>
            imdId = document.querySelector("#imd"), //buni id orqali qilindi
            imdClass = document.querySelector(".imd"), // bunisi class orqali qilindi
            genre = wrapper.querySelector(".promo__genre"), // htmlda promo__genre degan class chaqirilib ichidagi text manabunday usulda drammadan comedyga o'zgartirildi (yani eski text htmlda qolgan bo'lsaham browserdan dynamic tarzda udalit qilindi) >>! genre.textContent = "comedy";
            seriesList = document.querySelector(".promo__interactive-list"), //bunda htmldan promo__interactive-list nomli class seriesList nomli yangi o'zgaruvchi yaratilib chaqirildi
            addForm = document.querySelector("form.add"), //????????????
            inputVal = addForm.querySelector(".adding__input"), //??????????
            checkbox = addForm.querySelector("[type='checkbox']"); //??????????????

        const makeChanges = () => {
            wrapper.style.backgroundImage = 'url("img/1.jpg")'; // bundagi css faylga style berilsa yangi jsda dynamic tarzda qo'yilgan rasmham eski css stylniham qabul qiladi
            genre.textContent = "comedy";
        }; //??????????????????????????

        const sortArr = (arr) => {
            arr.sort();
        };

        imdId.style.cssText = "color:green;";

        imdClass.style.cssText = "color:yellow;";

        // console.log(seriesList.innerHTML);//bu bilan o'zgaruvchida chaqirilgan html divni to'liq olish mumkun

        const seriesDB = {
            series: [
                "Omar",
                "The Final Legacyyy",
                "Ertugrul Gazi",
                "Magnificent Century",
                "The Great Seljuks: Guardians...",
            ], //Nima uchun bu htmldan kelayapti
        };

        addForm.addEventListener("submit", (event) => {
            event.preventDefault();
            let newSeries = inputVal.value;
            const favourite = checkbox.checked;

            if (newSeries) {
                if (newSeries.length > 18) {
                    newSeries = `${newSeries.substring(0, 18)}...`;
                }
                if (favourite) {
                    console.log("Sevimli serialingiz qo'shildi");
                }
                seriesDB.series.push(newSeries);
                sortArr(seriesDB.series);
                createSeriesList(seriesDB.series, seriesList);
            }
            event.target.reset();
        });

        const deleteAdv = (arr) => {
            adv.forEach((item) => {
                item.remove();
            });
        };

        function createSeriesList(series, parent) {
            seriesList.innerHTML = "";
            sortArr(series); // seriesList  <<bu htmlda ul da  promo__interactive-list nomli class va buni ichida bir nechta text formatli fayillar bor  seriesList.innerHTML = ""; yani shu innerhtml chaqirilganda "" manashu kod borligi sabab promo__interactive-list nomli html clas ichidagi text fayillar dynamic tarzda udalit bo'ladi (browserdan) yani "" bo'sh string bo'lib qoladi lekin html faylda turaveradi udalit bo'lmasdan
            series.forEach((item, idx) => {
                parent.innerHTML += `
        <li class="promo__interactive-item">${idx + 1} ${item}
           <div class="delete"></div>   
         </li>`;
            });

            document.querySelectorAll(".delete").forEach((trash, idx) => {
                trash.addEventListener("click", () => {
                    trash.parentElement.remove();
                    seriesDB.series.splice(idx, 1);
                    createSeriesList(series, parent);
                });
            });
        }

        sortArr(seriesDB.series);
        deleteAdv(adv);
        makeChanges();
        createSeriesList(seriesDB.series, seriesList);
    });


//         seriesDB.series.forEach((item, idx) => {
//             //  ()<parametrdagi item elementlar degani yani ichidagi narsalar idx esa indexlar yani 0 dan boshlanadigan raqamlari
//             seriesList.innerHTML += `
// <li class="promo__interactive-item">${idx + 1} ${item}
//   <div class="delete"></div>
// </li>
// `; // agar + olib tashlansa faqat bittasini qo'shib beradi
//         });

// console.log(seriesList.innerHTML); // BU BILAN HAR QANDAY HTML DIVLARINI ICHIDAGI HAMMA NARSANI LOGGA CHIQARIB KO'RISH MUMKUN
