"use strict"; //qattiy rejim eski kodlarni ishlatmeydi

// number = 10
// console.log(number);

// console.log(numberr);
// let numberr = 10;
// console.log(numberr);
// let number = 10;
// console.log(number);

// const a = 5;
// console.log(a);

// number = 20;

// console.log(number);
// //////////////////////////////////////////////////////
// let number = 10;
// const borderColor = "red";

// const person = {
//     name: "Nur",
// };

// person.name = "Yorov";
// console.log(person);
// ////////////////////////////////////////////////////////

// var name = "Nur";
// name = "Far";
// console.log(name);

// console.log(clientName);
// var clientName ="Nur"
// console.log(clientName);

/////////////////////////////////////////////////////////

// let number = 10;
// const borderColor = 'red';
// console.log(number);
// number = 20;
// console.log(number);
/////////////////////////////////////////////////////////////
// console.log(number );// hato
// let number = 10;
// console.log(number);

// const borderColor = "red";
// console.log(borderColor);

// const person ={
//     name:"Nur",
// }

// person.name = "Doston"
// console.log(person);

// var name = "Nur";// old version always work dont use
// console.log(name);

// console.log(clientName);
// var clientName = "Nur"
// console.log(clientName);

//////////////// MALUMOT TURLARI ///////////////////////////////////

//Number malumot turlari
// let number = 5.6; //data tipe number
// console.log(-8 / 0); // infinitiy
// console.log("Nur" * 8); // nan
// console.log(number);

// String malumot turlari
// const clientNamename = "Nur111"; //stringda qo'shtirnoqlarni deyarli farqi yoq
// console.log(clientNamename);

//BOOLING malumot turi mantiqiy
// const isMrried1 = true;// ha to'g'ri
// const isMrried2  = false;//yo'q noto'g'ri

//NAN malumot turi yani  null yo'q o'zgaruvchini chaqirganda null yani nan chiqadi
// console.log(clientAge);

//undefined o'zgaruvchiga qiymat berilmasdan chaqirilganda undifined chiqadi
// let und;
// console.log(und);

//object malumot turi
// const thief = {
//age key yani kalit 30 qiymat yani value
// age: 30, //number malumot turi
// jacket: "black", //string malumot turi
// islong: false, //boolean malumot turi mantiqiy
// color: "white", //string malumot turi
// shoes: "military boots", //string malumot turi
// };
// console.log(thief.age); //object ichida gi malumotlarni alohida alohidaham olish mumkun
// console.log(thief); //bu birinchi yo'li
// console.log(thief["islong"]); //bu ikkinchi yo'li

//Array malumot turi
//arrayda jsni ozi key berib chiqadi va bu doim noldan boshlanadi
//                0       1        2     3   4  5  6   7
// const colors = ["red", "black", "green",10,[11,12,23],{}];
// console.log(colors[0]);

////////////Foydalanuvchi bilan muloqot/////////////////////////////

// alert("Hello JavaScript");
// const place = confirm("Are you already here");//so'roq beradi ok or cancel
// console.log(place);//confirm ikkita yani truu yoki false degan qiymat qaytaradi logda

// const currentPlace = prompt("Where are you?", "O'zbekiston:" )//foydalanuvchidan qaytaydigan malumot har doim matn yani string formatida bo'ladi
// console.log(currentPlace );//madalda hohlagancha savol berish va javobni  olishxam mumkun
// console.log(typeof currentPlace);

// const age = prompt("How old are you", "18");
// console.log(age + 10);//"18" + 10 = 1810 strinlogdagi holatda string bilan numbur malumot turlari bir birini ustiga yuqoridagi holatday qo'shilib ketadi

// const ageOne = prompt("How old are you", "18");
// console.log(ageOne + 10);//1810 string malumot

// const ageTwo = +prompt("How old are you", "18");
// console.log(  ageTwo + 10);//28 number malumot typeoffda

// const ageThree = -prompt("How old are you", "18");
// console.log( ageThree + 10);//-8 number malumot typeofda

// const favoriteColor = [];
// favoriteColor[0] = "Nur";
// console.log(favoriteColor);

// const favoriteColor = [];//massiv abyektni bir qismi yani alohida malumot turi emas massivni malumoti abject hissoblanadi
// favoriteColor[0] = prompt("What isyour favorite color #1", "");
// favoriteColor[1] = prompt("What isyour favorite color #2", "");
// favoriteColor[2] = prompt("What isyour favorite color #3", "");
// console.log(typeof favoriteColor);

// const favoriteColor = [];
// favoriteColor[1] = prompt("What isyour favorite color #1", "");//birinchi element noldan boshlanadi bu yerda bir yozilgani uchun empty yani bo'sh ko'rsatadi bu mistake
// favoriteColor[2] = prompt("What isyour favorite color #2", "");
// favoriteColor[3] = prompt("What isyour favorite color #3", "");
// console.log(favoriteColor);

//////////////////////////Interpalatsa/////////////////////

// const channel = prompt("What's your favorite youtuber");//old version
// console.log("https://youtube.com/" + channel + "/videos");//old version

// const channel = prompt("What's your favorite youtuber");//new version
// console.log(`https://youtube.com/${channel}`);//new version

// const user = "Nur";//new version
// const job = "JavaScript developer";//new version
// console.log(`User name is ${user}, he is ${job}`);//new version

// const client = prompt("Hello")//run code promp va alertni yani confirmlarni ochmaydi run codni faqat browserni funksiyasi ochadi
// console.log(client);//run code promp va alertni yani confirmlarni ochmaydi run codni faqat browserni funksiyasi ochadi

// const sites = prompt("My favorite pages");
// console.log(`https://ok.ru/${videos}`);

/////////////// Operatorlar//////////////////////

// console.log(6 + + "Nur");//nan number malumot turi bilan string malumot turi qo'shilmaydi shu uchun nan yani not aare number degan malumot qaytaradi
// console.log(6 + + "6");//12 dicrementda  number malumot turiga qattiy pilus bilan strimg malumotni ichida raqam bolsa qattiy rejim bolgani uchun togrin hissoblaydi

// console.log("Nur " + "Yorov");//strings
// console.log(6 + + "Yorov"); //NANnot are number
// console.log(6 + + "9"); //qattiy pilus
// let incr = 10;
// let decr = 10;
// incr++;
// decr--;
// console.log(incr);
// console.log(decr);

// let incr = 10;
// let decr = 10;

// console.log(incr++);
// console.log(decr--);

// console.log(incr++);
// console.log(decr--);

// console.log(incr);
// console.log(decr);

// let incr = 10;
// let decr = 10;

// console.log(++incr);//prefiks degan yo'li
// console.log(--decr);//prefiks degan yo'li

// console.log(5 % 2);//qoldiq 1
// console.log(10 % 3);//qoldiq 1

// console.log(5 * 5 == 25);//true faqat qiymat bilan solishtiradi
// console.log(5 * 5 == "25");// true faqat qiymat bilan solishtiradi
// console.log(5 * 5 === "25");// false === teng bo'lgani uchun qattiy solishtirish natijasida false
// console.log(5 * 5 === 25);// true qattiy solishtirish natijasida true

/////////////////  /&&=va-if degani ||=yoki-else degani////////////

// const isAge =true;
// const isClose =true;
// console.log(isAge && isClose);// true

// const isAge = true;
// const isClose = false;
// console.log(isAge && isClose); // false

// const isAge = true;
// const isClose = false;
// console.log(isAge || isClose); // true

// const isAge = true;
// const isClose = false;
// const isChecked = false;
// console.log(isAge || isClose || isChecked); // true gar yoki (else) || operatorida bittaham true` bolsa faqat true chiqaradi

// const isAge = true;
// const isClose = true;
// const isChecked = false;
// console.log(isAge && isClose && isChecked); // false agar va (if) && operatorida bittaham false bolsa false chiqaradi

// const isAge = true;
// const isClose = true;
// const isChecked = false;
// console.log(isAge && isClose && !isChecked);// !natijani chappasini chiqaradi

// console.log( 2 + 2 * 2 === 8 );//false birinchi ko'peytirvoladi
// console.log( 2 + 2 * 2 === 6 );//true birinchi ko'peytirvoladi
// console.log( 2 + 2 * 2 !== 8 );//true chunki 8 6 ga teng emasmi degan savolga ha teng ema sdeb javob bergan hissoblanadi

// console.log( 2 + 2 * 2 !== "6" );

// console.log(5 * 5 == "25");// true chiqaradi chunki number malumot turei bilan string malumot turini qiymatini hissobleydi
// console.log(5 * 5 == "26");// bu false chunki number malumot turei bilan string malumotini qiymatini qoshganda bitta kopligi uchun false chiqaradi

// console.log(5 * 5 === "25");// false chiqaradi chunki 3 ta = belgisi juda qattiy javob beradi false bolishini sababi juda qattiy javobda number malumot turi string malumot turi bilan teng emas, sababi biri raqam biri text malumot turi

/////////////////Homework/////////////////////////////
// const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

// const seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const a = prompt("Ohirgi ko'rgan serialingiz"),
//     b = prompt("Nechchi baho berasiz?"),
//     c = prompt("Ohirgi ko'rgan serialingiz"),
//     d = prompt("Nechchi baho berasiz?");
// seriesDB.series[a] = b;
// seriesDB.series[c] = d;

// console.log(seriesDB);

// const theif = {
//     jacket: "black",
// };

// const property = "age",
//     value = "30";

// theif[property] = value;

// console.log(theif);

// const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

// const seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const a = prompt("Ohirgi ko'rgan serialingiz"),
//     b = prompt("Nechchi baho berasiz?"),
//     c = prompt("Ohirgi ko'rgan serialingiz"),
//     d = prompt("Nechchi baho berasiz?"),
//     g = prompt("Ko'rgan serialingiz qanday janrda edi");

// seriesDB.series[a] = b;
// seriesDB.series[c] = d;
// seriesDB.genres[g] = g;

// console.log(seriesDB);

/////////////////////Shartli Operatorlar////////////////////
// const age = +prompt("How ald are you 1?", "");

// if (age >= 18) {
//     console.log("Welcome");
//     alert("Welcome 'alert'")//or alert the show modal screen
// } else {
//     console.log("No entry 1");
//     alert("No entry 'alert'")//or alert the show modal screen
// }

// const age = +prompt("How ald are you 1?", "");

// if (age > 25) {
//     console.log("Horror movies");
// } else if (age > 18) {
//     console.log("War movies");
// } else {
//     console.log("Cartoon");
// }

// const age = +prompt("How ald are you 1?", "");

// if (age > 25) {
//     console.log("Horror movies");
// } else {
//     console.log("Cartoon");
// }

// (age > 25) ? console.log("Horror movies") : console.log("Cartoon");// uchtalik operator qisqartirib yiz if else bilgilar bilan

// const age = +prompt("How ald are you 1?", "");
// age > 25 ? console.log("Horror movies") : console.log("Cartoon");

// const color = "red";// red green slowly traffic jam//
// //switch case faqat qattiy rejimda ishlaydi
// switch (color) {
//     case "red":
//         console.log("stop");
//         // alert("Stop")
//         break;
//     case "green":
//         console.log("goo")
//         // alert("Goo")
//         break;
//         case "yellow":
//             console.log("slowly");
//             // alert("Slowly")
//             break;
//             default:
//             console.log("traffic jam");
// }

// const color =prompt("") ;// red green slowly traffic jam//
// //switch case faqat qattiy rejimda ishlaydi
// switch (color) {
//     case "red":
//         // console.log("stop");
//         alert("Stop")
//         break;
//     case "green":
//         // console.log("goo")
//         alert("Goo")
//         break;
//         case "yellow":
//             // console.log("slowly");
//             alert("Slowly")
//             break;
//             default:
//             // console.log("traffic jam");
//             alert("Traffic jam")
//         }

/////////////////////Sikl/////////////////////////////////

//First
// let startNum = 1;
// while (startNum <= 100) {
//     console.log(startNum);
//    // alert(startNum)
//     startNum++
// }

//Second
// let startNum = 1;
// do {
//     console.log(startNum);
//     startNum++
// } while (startNum <= 10)

//Third //Eng Ko'p Ishlatiladigan usuli
// for (let i = 1; i <= 8; i++) {
//     console.log(i);
// }

//Yana boshqa usuli
//  let num = 10;
//  for (let i = 1; i < 8; i++ ){
//         console.log(num);
//         num++
//     }

//  let num = 10;
//  for (let i = 1; i <= 10; i++ ){
//     if (i === 8){
//         break
//     }
//     console.log(i);
//  }

//  let num = 10;
//  for (let i = 1; i <= 10; i++ ){
//     if (i === 9){
// continue
//     }
//     console.log(i);
//  }

////////////////Homework i do/////////////////////////////

// const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

// if (numberOfSeries <= 5) {
//     console.log("Kam serial ko'ripsiz");
// }
// else if
//     (numberOfSeries <= 10) {
//     console.log("Siz classik tamoshabin ekansiz");
// }
// else {
//     console.log("Siz serialchi zvezda ekansiz");
// }

// // numberOfSeries <= 5 ? console.log("Kam serial ko'ripsiz") : console.log("Siz serialchi zvezda ekansiz") ;

// const seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const a = prompt("Ohirgi ko'rgan serialingiz"),

//     b = prompt("Nechchi baho berasiz?"),
//     c = prompt("Ohirgi ko'rgan serialingiz"),
//     d = prompt("Nechchi baho berasiz?"),
//     g = prompt("Ko'rgan serialingiz qanday janrda edi"),
//     j = prompt("Umar ibn Hattob serialidagi bosh roldagi aktyorlarni ayting");

// seriesDB.series[a] = b;
// seriesDB.series[c] = d;
// seriesDB.genres[g] = g;
// seriesDB.actors[j] = j

// console.log(seriesDB);

// /////////////////////Homework with the teacher////////////

// const numberOfSeries = +prompt("Nechta serial ko'rdingiz", "");
// const seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false,
// };
// for (let i = 0; i < 2; i++) {
//     const a = prompt("Ohirgi ko'rgan serialingiz?"),
//         b = prompt("Nechchi baho berasiz?");
//     if (a != null && b != null && a != "" && b != "") {
//         seriesDB.series[a] = b;
//         console.log("Done");
//     } else {
//         console.log("Error");
//         i--
//     }
// }

// if (seriesDB.count < 5) {
//     console.log("Kam serial ko'ripsiz");
// }
//  else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//     console.log(" Siz klassik tomoshabin ekansiz");
// }
//  else if (seriesDB.count >= 10) {
//     console.log("Siz serialchi zvezda ekansiz");
// }
// else {
//     console.log("Error");
// }
// console.log(seriesDB);

//////////////////////////Mustaqil ish///////////////////////

//switch case faqat qattiy rejimda ishlaydi
// const color = "red";
// switch (color) {
//     case "red":
//         console.log("stop");
//         break;
//     case "green":
//         console.log("goo")
//         break;
//     case "yellow":
//         console.log("slowly");
//         break;
//     default:
//         console.log("traffic jam");
// }

//////////////////////////Funksya ES6//////////////////////

// function sayHelloWorld() {
//     console.log("HELLO WORLD");
// }
// sayHelloWorld()// Funcsiyani chaqirish

// function sayHelloWorld(text) {
//     console.log(text);
// }
// sayHelloWorld("Hello world ");
// sayHelloWorld("Hello JavaScript ");
// sayHelloWorld("React-Ntive ");

// function calc(a, b){
//     console.log(a + b);
// }
// calc(10,5);
// calc(9,10);

// function sayMyName(name, surname){
//     console.log(`My name is ${name} ${surname}`);
// }
// sayMyName("Nur ","Yorov");

// function sayMyName(name, surname) {
//     let age = 30
//     console.log(`My name is ${name} ${surname}`);
//     console.log(age);// funksiyani ichida yaratilgan o'zgaruvchi faqat funksiyanio ichida chaqirilganda ishleydi
// }
// sayMyName("Nur ", "Yorov");

// let age = 30
// function sayMyName(name, surname) {
//     let age = 20;
//     console.log(`My name is ${name} ${surname}`);
//     console.log(age);
// }
// sayMyName("Nur ", "Yorov");
// console.log(age);
// sayMyName("Firdavs ", "Yorov");
// sayMyName("Doston ", "Yorov");
// sayMyName("Farida ", "Yorova");

// let age = 33;
// function sayMyName(name, surname) {
//     age = 10;// shu narsa qandey qilib o'zidan oldingi o'zgaruvchini qiymatinini o'zgartirganini umuman tushunmaduim??????????????????????
//     console.log(`My name is ${name} ${surname}`);
//     console.log(age);
// }
// sayMyName("Nur ", "Yorov");
// console.log(age);

// function calc(a, b) {
//     return a + b; // funksiyani ichida eng ohiriga qo'yiladi huddi switchdagi breakga o'hshagan
// }
// console.log(calc(10, 5));
// console.log(calc(5, 9));

// function calc(a, b) {
//     return a + b;
// }
// const sumOFAandB =calc(10, 5);
// console.log(sumOFAandB);

//First Function Declaration// funksia elon qilingan qatordan oldin chaqirsaham ishlayveradi buham ichiga hohlagancha abject  massiv va boshqalarni qabul qiladi
// const sumOFAandB = calc(10, 5);
// console.log(sumOFAandB);
// function calc(a, b) {
//     return a + b;
// }

//Second Function Expression// faqat funksia elon qilingan qatordan keyin chaqirsa ishlaydi buham ichiga hohlagancha abject  massiv va boshqalarni qabul qiladi
// const logger = function () {
//     console.log("Hello world");
// };
// logger();

//Third Arrow Function //funksiya elon qilingandan keyin funksyadan keyin returinni aftamatik tarzda korinmas qilib qoyib ketadi arrowdan keyin buham ichiga hohlagancha abject  massiv va boshqalarni qabul qiladi
// const calc = (a, b) => a + b;
// console.log(calc(11, 11));

//////////////////////////////////////Metod va Hususiyatlar (lenght-propertysi yani hususiyati)///////////////////////////////////////////////////
// const user = "Nur Yorov"; //lenght property: string malumotni uzunligini aniqlaydi masalan string malumotda yozilgan harflar sonini sanab beradi
// console.log(user.length);

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length);// arrey va abjectlarni ichidagi qiymatlar soninihamm aniqlab b eradi

// const user = "Nur Yorov";
// const arr = [1,2,3,4];
// console.log(user[2]);// bu>[]qavus bilan chaqirilganda userni raqamda (2 yani r)  tanlangan harfi chiqadi
// console.log(arr[3]);// bu>[]qavus bilan chaqirilganda arreyniham raqamda (3 yani 4)  tanlangan tanlangan chiqadi

// const user = "Nur Yorov";
// console.log(user.toLocaleUpperCase());// but metod> toLocaleUpperCase() shunday chqariladi huddi funksiya chaqirilganday va bu toLocaleUpperCase() metodi huddi css dagiday harflarni hammasini katta harf qilib beradi
// const UpperCaseuser = user.toLocaleUpperCase();
// console.log(user.toLowerCase());//bunisi kichkina harf qilib beradi
// console.log(UpperCaseuser);

// const greeating = "Hello world";
// console.log(greeating.indexOf("w")); // bu metod yani indexof string bmalumotidagi so'zlar ichida w harfini bor yoqligini yoki nechchinchi raqamda qayd etilganini aniqlab beradi
// const greeating = "Hello world";
// console.log(greeating.indexOf("j"));// gar yoq harf  yoki malumot izlansa -1 chiqaradi bu degani false degani
// const greeating = "Hello world";
// console.log(greeating .slice(6, 11));// bu metod slice yani tilik bo'lak degani malumotni hohalagan bo'lagini qirqib oladi
// console.log(greeating.slice(5));
// console.log(greeating.slice(6));//worldni o'zini oladi
// console.log(greeating.slice(-3));// orqadan qirqib keladi
// console.log(greeating.substring(8, 11));// bu metodham faqat qirqib oladi faqat - ishlatib bo'lmaydi
// console.log(greeating.substr(6,3));

// const num1 = 8.8;
// console.log(Math.round(num1));//math clobal abjecti bunda 8.8ga eng yaqin raqamni chiqarib beradi yani 9 ni
// const num = 8.3;
// console.log(Math.round(num));//bunda esa 8 ni chiqarib beradi chunki asosy raqamga yaqin

// const borderWidth = "13.8px";
// console.log(parseInt(borderWidth));//bu asosi raqamni o'zini chiqarrib beradi va malumotni number malumot turuga aylantirib beradi
// console.log(parseFloat(borderWidth));// bu metof  string malumotdagi numberlarni ozini number malumot turiga aylantirib beradi

////////////////////Homework Funksiya///////////////////////////

// let numberOfSeries;
// function startApp() {
//     numberOfSeries = +prompt("Nechta serial ko'rdingiz", "");

//     while (
//         numberOfSeries == "" ||
//         numberOfSeries == null ||
//         isNaN(numberOfSeries)
//     ) {
//         numberOfSeries = +prompt("Nechta serial ko'rdingiz", "");
//     }
// }
// startApp();
// const seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false,//agar bu truu bolsa pastdagi shu constga tegishli funksya javoblardagi malumotlarni hidden qilib qoyadi
// };
// function rememberMySeries() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Ohirgi ko'rgan serialingiz?"),
//             b = prompt("Nechchi baho berasiz?");
//         if (a != null && b != null && a != "" && b != "") {
//             seriesDB.series[a] = b;
//             console.log("Done");
//         } else {
//             console.log("Error");
//             i--;
//         }
//     }
// }
// rememberMySeries();
// function detectLevelSeries() {
//     if (seriesDB.count < 5) {
//         console.log("Kam serial ko'ripsiz");
//     } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//         console.log(" Siz klassik tomoshabin ekansiz");
//     } else if (seriesDB.count >= 10) {
//         console.log("Siz serialchi zvezda ekansiz");
//     } else {
//         console.log("Error");
//     }
// }
// detectLevelSeries();
// function showDb(hidden) {
//     if (!hidden) {
//         console.log(seriesDB);
//     }
// }
// showDb(seriesDB.private);
// function writeGenres() {
//     for (let i = 0; i <= 2; i++) {
//         const genre = prompt(`Yahshi ko'rgan janringiz ${i + 1}`);
//         seriesDB.genres[i] = genre;
//     }
// }
// writeGenres();

// function writeActors() {
//     for (let i = 0; i <= 7; i++) {
//         const actors = prompt(`Yahshi ko'rgan aktiyorlaringiz  ${i + 1}`);
//         seriesDB.actors[i] = actors;
//     }
// }
// writeActors();

////////////////////////////////Callback//////////////////////

// function first(cb) {
//     //code
//     setTimeout(() => {
//         // bu funksiya ichidagi malumotlarni backendan kelishini kechiktirib turadi va bu yayhhsimas buni aslida caalback bilan qilinadi
//         console.log(1);
//         cb();
//     }, 1000);
// }

// function second() {
//     console.log(2);
// }
// first(second);

// function edu (subject, callback){
//     console.log(`I wanna teach ${subject}`);
//     callback();
// }
// edu("JavaScript", function (){
//     console.log("That's great");
// });

// function edu (subject, callback){
//     console.log(`I wanna teach ${subject}`);
//     callback();
// }

// function done(){
//     console.log("That's great");
// }

// edu("JavaScript", done)// bu funksiya calback bilan q2ilingan ca;bac chaqirilmaydi oziga korsatilgan joyda ishlaydi

////////////////////////Object Destruptizatsiya/////////////////
// const theif = {
//     jacket: "black",
//     height: 1.7,
//     colors: {
//         hair: "gray",
//         style: "curley",
//     },
// };
// console.log(theif.height);
// delete theif.jacket;// bu metod bilan abjectni ichidagi keraksi narsalarni consolga chiqmeydigan qilib udalit qils abolarkan
// console.log(theif);

// const theif = {
//     jacket: "black",
//     height: 1.7,
//     colors: {
//         hair: "gray",
//         style: "curley",
//     },
// };
// // console.log(Object.keys(theif));//bu pbjectdagi asosiy kalit sozlarni chiqarib beradi
// console.log(Object.keys(theif).length);//bu pbjectdagi asosiy kalit so'zlarni sonini chiqarib beradi
// for (let key in theif) {
//     if (typeof theif[key] === "object") {
//         for (let i in theif[key]) {
//             console.log(`Property ${i} has value ${theif[key][i]}`);
//         }
//     } else {
//         console.log(`Property ${key} has value ${theif[key]}`);
//     }
// } //typoff malumotni qanday turga mansub ekanligini aniqlab berishda  kerakli narsa

/////////ikkinchi varyant ancha chalkash ekan
// const theif = {
//     jacket: "black",
//     height: 1.7,
//     colors: {
//         hair: "gray",
//         style: "curley",
//     },
// };
// let count = 0;

// for (let key in theif) { //arrayda for off bilan objectla  bilan esa for in qilib ishlash kerak ekan
//     count++;
// }
// console.log(count);

// const theif = {
//     jacket: "black",
//     height: 1.7,
//     colors: {
//         hair: "gray",
//         style: "curley",
//     },
//     howOut: function () {
//         console.log("Fast with help doors");
//     },
// };
// theif.howOut(); // bu metod qo'lda yozildi yani javascripti radnoy metodlaridan tashqari shu usulda dasturchi o'zi hohlagan nom bilan metod yaratishi mumkun

// const theif = {
//     jacket: "black",
//     height: 1.7,
//     colors: {
//         hair: "gray",
//         style: "curley",
//     },
//     howOut: function () {
//         console.log("Fast with help doors");
//     },
// };
// theif.howOut();
// const { hair, style } = theif.colors;//Destruptizatsiya orqali kam qator kod yozib objectni ichidagi  malumotlarni olish mumkun
// console.log(hair);
// console.log(style);

///////////////////////Homework//////////////////////////////
// const theif = {/// uyga vazifani bajar
//     jacket: "black",
//     height: 1.7,
//     colors: {
//         hair: "gray",
//         style: "curley",
//     },
//     howOut: function () {
//         console.log("Fast with help doors");
//     },
// };
// theif.howOut();
// const { hair, style } = theif.colors;//Destruptizatsiya orqali kam qator kod yozib objectni ichidagi  malumotlarni olish mumkun
// console.log(hair);
// console.log(style);
