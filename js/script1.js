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
//         style: "curley",//jingalak (soch) degani
//     },
// };
// console.log(theif.height);
// delete theif.jacket;// bu metod bilan abjectni ichidagi keraksi narsalarni consolga chiqmeydigan qilib udalit qilsa bolarkan
// console.log(theif);

// const theif = {
//     jacket: "black",
//     height: 1.7,
//     colors: {//objectni ichida object ochilgan
//         hair: "gray",
//         style: "curley",
//     },
// };
// console.log(Object.keys(theif));//bu projectdagi objectdagi asosiy kalit sozlarni chiqarib beradi
// console.log(Object.keys(theif).length);//bu projectdagi asosiy kalit so'zlarni sonini chiqarib beradi
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
// theif.howOut();
// bu metod qo'lda yozildi yani javascripti radnoy metodlaridan tashqari shu usulda dasturchi o'zi hohlagan nom bilan metod yaratishi mumkun

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
// const { hair, style } = theif.colors; //Destruptizatsiya orqali kam qator kod yozib objectni ichidagi  malumotlarni olish mumkun
// console.log(hair);
// console.log(style);

///////////////////////Homework//////////////////////////////
// const theif = {
//     /// uyga vazifani bajar
//     color: "black",
//     height: 1.7,
//     shoes: "soldier's boots",
//     colors: {
//         hair: "gray",
//         style: "curley",
//     },
//     howOut: function () {
//         console.log({ howOuthowEscape: "Fast with help doors" });
//     },
//     howGender: function () {
//         console.log({ howGendercolor: "White" });
//     },
// };
// console.log(theif);
// theif.howOut();
// theif.howGender();
// const { hair, style } = theif.colors;
// const{shoes} = theif;
// //Destruptizatsiya orqali kam qator kod yozib objectni ichidagi  malumotlarni olish mumkun
// console.log(hair);
// console.log(style);
// console.log(shoes);

//////////////////Massivlar va psedamassiv//////////////////////
// const arr = [1,2,3,4,5,6];
// arr.pop();// bu metod arrayni ohirgi qiymatini olib tashlaydi bu number bolsaham
// console.log(arr);

// const ass = ["bir", "ikki", "uch"];
// ass.pop();// bu metod arrayni ohirgi qiymatini olib tashlaydi bu string bo'lsaham
// console.log(ass);

// const arr = [1, 2, 3, 4, 5, 6];
// arr.pop();
// arr.push(7);//bu metod arrayni ohirgi qiymatiga yangi qiymat qoshadi bu number bolsaham
// console.log(arr);

// const rrr = ["bir", "ikki", "uch"];
// rrr.pop();
// rrr.push("uch ,");//bu metod arrayni ohirgi qiymatiga yangi qiymat qoshadi bu string bolsaham
// console.log(rrr);

// const arr = [1,2,3,4,5,6];
// arr.push("salom");//bu metod arrayni ohirgi number qiymatiga yangi qiymat qoshadi bu string bolsaham
// console.log(arr);

// const arr = [2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//      console.log(arr[i]);
// }

// const arr = [2, 3, 4, 5];
// for (let value of arr) {// for of faqat arraylar bilan ishlaydi for in es afaqat objectlar bilan ishlaydi
//     console.log(value);
// }

// const arr = [2, 3, 4, 5];
// console.log(arr.length);// lenght massiv va objectlardagi malumotlarni yani 0 chi indexdan boshlanadigan malumotlarni sanab ohiriga 1 ni qo'shib umumiy yig'indini hissoblab chiqarib beradi yani massiv va objectlar  0 dan boshlangani uchun misol: bu o'zgaruvchi ichidagi massivni uzunligini yani sanog'ini 0 dan hissoblaganda 3 chiqadi lenght bo'lsa shu 0 ni hissobini  ohiriga 1 ni qo'shib hissoblab 4 qilib chiqarib beradi masalan 2,3,4,5  shunda to'g'ri ishlagan hissoblanadi

// const arr = [2, 3, 4, 5];
// arr.forEach(function (item, index, arr) {
//     //forEachni afzal tarafi forEach callback bilan har safar har bir element uchun to'liq ishlaydi yani
//     //forEach doim 3 ta parameter qabul qiladi (1 chi parametr qiymat  2 chi parametr index 3 chi parametr bu shu forEach uchun ochilgan o'zgaruvchini yani massivni o'zini nomi)
//     console.log(`${index}: ${item} into arr ${arr}`);

//     // Bu run codeda chiqgan javobi yani 1 chisi index 2 chisi element yani item raqami 3 chisi esa logda arr yani massivni boshdan ohir qaytarib beradi
//     // 0: 2 into arr 2,3,4,5
//     // 1: 3 into arr 2,3,4,5
//     // 2: 4 into arr 2,3,4,5
//     // 3: 5 into arr 2,3,4,5
// });

// const movies = prompt("What is your favorite movies", "");
// const userMovies = movies.split(", ")// bu split metodi shunday yozilganda promptdan qaytadigan javobni massiv yani shuni [shuni] ichiga olib tartibli tarzda dona dona qilib qaytarib beradi yani string malumot turini massiv malumot turiga o'girib beradi
// console.log(userMovies);

// const movies = prompt("What's your favorite movies", "");
// const userMovies = movies.split(", ");//har bir metodni o'zini vazifasi bor
// userMovies.sort();//har bir metodni o'zini vazifasi bor
// console.log(userMovies.join("- "));//har bir metodni o'zini vazifasi bor

// const arr = [65, 27, 2, 79, 13, 14, 25, 16, 8];
// arr.sort(compareFn);// bu metod 0 dan boshlab indexlarni tartib bilan bajaradi tepadagi misol => 2,8,13,14,16,25,2 7,65,79
// console.log(arr);
// function compareFn(a, b) {
//     return a - b;
// }

// const arr = [65, 27, 79, 13, 14, 25, 16, 8];
// arr.sort((a, b) => a - b);
// console.log(arr);

////////////////////////Clonlash ES6///////////////////////////

// let x = 10;
// let y = x;//bu y o'zgaruvchida x o'zgaruvchidagi qiymat yashingan yani chaqirilgan yanaham to'g'ririg'i x ni nusxasi chaqirilgan
// y = y + 5;
// console.log(x); // javobi 10 bu oddiy o'zgaruvchining qiymati 10
// console.log(y); // javobi 15 bu murakkabroq holat: x o'zgaruvchi 10 ga teng y o'zgaruvchi x ga yani x ni qiymati 10 ga teng y ga yani 10 ga 5 qo'shilganda 15 chiqadi

// let isMarried = false;
// let isArray = isMarried;
// isArray = true;
// console.log(isMarried);
// console.log(isArray);

// const number = {// funcsiyani clonlash nusxa bo'lmadi faqat idsi havolasi berib qo'yildi bu NUSXALASH EMAS!!!
//     x: 10,
//     y: 5,
// };
// const newNumber = number; // tepadagi number nomli o'zgaruvchini havolasini yani idsini yangi o'zgaruvchiga berib o'zgartirish bu holatda ikkala o'zgaruvchiniham qiymati 15 ga teng bo'lib qoladi yani: number o'zgaruvchini x qiymati 10 ga teng yangi newNumber o'zgaruvchini qiymati number o'zgaruvchiga teng yani 10 ga shunda newNumber o'zgaruvchini x qiymatini 15 ga teng qilinsa number o'zgaruvchiniham javobi 15 new number o'zgaruvchiniham javobi 15
// newNumber.x = 15;
// console.log(number);
// console.log(newNumber);

// function nusxaObj(obj) {
//     // bu yerdagi ish ancha qiyin yani:nusxaObj nomli objectli funksiya ochilgan va bu funksiyani parametiriga obj deb nom yani qo'shimcha id berilgan keyin esa bu nusxaObjni ichiga yani bo'sh objectga asoslangan o'zgaruvchi ochilgan (objNusxa) keyin for sikli yordamida objectni intiratsa yani qo'shvoldi for sikilini ichiga yangi bo'sh holatda ochilgan objNusxa o'zgaruvchisi chaqirilgan massiv yani array orqali objNusxa ni keylari array ichida chaqirilgan va obj yani massiv yani array ichida nusxaObj ning keylari bilan teng qilingan
//     let objNusxa = {};
//     for (let key in obj) {
//         objNusxa[key] = obj[key];
//     }
//     return objNusxa;
// }
// const numbers = {
//     x: 10, //funksiyani ichiudagi hususiyatlar//objektni birinchi qatori
//     y: 5,
//     z: {
//         a: 1, //funksiyani ichkima ichki hususiyatlari//objectni ikinchi qatori
//         b: 2,
//     },
// };
// const newNumbers = nusxaObj(numbers);
// newNumbers.x = 15;
// // newNumbers.y = 25;
// newNumbers.z.a = 11;
// newNumbers.z.b = 13;
// console.log(numbers);
// console.log(newNumbers);  // bu yerdagi ish ancha qiyin yani:nusxaObj nomli objectli funksiya ochilgan va bu funksiyani parametiriga obj deb nom yani qo'shimcha id berilgan keyin esa bu nusxaObjni ichiga yani bo'sh objectga asoslangan o'zgaruvchi ochilgan (objNusxa) keyin for sikli yordamida objectni intiratsa yani qo'shvoldi for sikilini ichiga yangi bo'sh holatda ochilgan objNusxa o'zgaruvchisi chaqirilgan massiv yani array orqali objNusxa ni keylari array ichida chaqirilgan va obj yani massiv yani array ichida nusxaObj ning keylari bilan teng qilingan keyin numbers nomli o'zgaruvchi yaratilib unga qiymatlar berilgan keyin yana newNumbers nomli o'zgaruvchi yaratilib nusxaObjga teng qilingan va parametiriga numbers o'zgaruvchi kirg'izib qo'yilgan va newNumbersi x qiymati 15 qilib o'zgartirilgan qolganlariham huddi shu yo'sinda davom etgan bu holatda abjectimiz copiya boladi va ikiinchi holatini o'zgartiribham copy qilib olish mumkun

// const numbers = {
//     x: 10,
//     y: 5,
//     z: {
//         a: 1,
//         b: 2,
//     },
// };
// const newNumbers = Object.assign({}, numbers);//bu metod numbersni ichidagi qiymatlarrni olib o'zgartirib va nusxalab berayapti yani ikkita object bo'lib qoldi assign metodi oldoga {} bo'sh object qo'yilsa manbani shu bo'sh objectga solib chiqarib beradi
// newNumbers.x = 15;
// console.log(newNumbers);//numbers o'zgaruvchidagi qiymatlarni newNumbers o;zgaruvchiga olib qo'yildi
// console.log(numbers);// ikkita har hil object paydo bo'ldi ikkinchi objectdan nusxa olinayotganda qiymatiham o'zgartirildi

// const numbers = {
//     x: 10,
//     y: 5,
// };
// const addNumber ={
//     z:15,
// }
// const allNumbers = Object.assign(numbers, addNumber);//bu metod ikkala objectni birlashtirib beradi (numbers+addNumber //orasida aslida + bor)
// console.log(allNumbers);

// const arr = [1,2,3];
// const numbers = arr.slice();//bu metod arrayni copya qilish uchun ishlatiladi
// numbers[1] = 'Nur'
// console.log(arr);
// console.log(numbers);

// const liverpool = ['Salah', 'Mane'];//
// // spread usuli massivni birlashtirish
// const manCity = ['Mahrez'];
// const mixPlayer = [...liverpool, ...manCity];//ucta nuqta ...spread operatori hissoblanadi va bu massivlarni (arraylarni) bir biriga qo'shib beradi [...liverpool, ...manCity// aslida verguldan keyin pilus bor]
// console.log(mixPlayer);

////////////////////////Spread operator///////////////////////

// function logger(x, y, z) {
//     console.log(x + y + z);
// }

// logger(1, 2, 3); //(x=1) (y=2) (z=3) 1+2=3 3+3=6 javobi 6 lekin bu ishlash hoto

// const calc = [1, 2, 3];
// function logger(x, y, z) {
//     console.log(x + y + z);
// }
// logger(...calc);

// const arr = ["x", "y"];
// const newArr = [arr]
// console.log(arr);

// const numbers = {
//     x: 10,
//     y: 5,
// };
// const newNumbers = { ...numbers };//spread operator nusxalash
// console.log(numbers);
// console.log(newNumbers);

/////////////////////OOP Asoslari////////////////////////////
//Shu mavzuni qayta qayta takrorlash

// const firstName = "Nur";
// const str = new String(firstName);
// console.log(firstName);
// console.log(str);

// const firstName = "Nur";
// const str = new String(firstName);
// console.log(typeof firstName);
// console.log(typeof str);

// const car = {//Bu eski yo'li
//     motor: "X",
//     color: "red",
//     isAirbag: true,
//     isSpead:function(){
//          console.log(320);
//     }
// };
// const gm = {
//     isAirbag: false,
// };
// // console.log(car);// this is exam!!!
// gm.__proto__ = car;
// console.log(gm.color);
// gm.isSpead()

// const car = {// bu yangi birinchi yo'li
//     motor: "X",
//     color: "red",
//     isAirbag: true,
//     isSpead: function () {
//         console.log(320);
//     },
// };
// const gm = {
//     isAirbag: false,
// };

// Object.setPrototypeOf(gm, car);

// console.log(gm);

// const car = {
//     motor: "X",
//     color: "red",
//     isAirbag: true,
//     isSpead: function () {
//         console.log(320);
//     },
// };
// const gm = {
//     isAirbag: false,
// };

// const bmw = Object.create(car,)
// console.log(bmw);

// /////////////////////Homework ////////////////////////////
// const seriesDB = {
//     count: 0,
//     series: {},
//     genres: [],
//     actors: {},
//     private: false,
//     start: function () {
//         seriesDB.count = +prompt("Nechta serial ko'rdingiz", "");
//         while (
//             seriesDB.count == "" ||
//             seriesDB.count == null ||
//             isNaN(seriesDB.count)
//         ) {
//             seriesDB.count = +prompt("Nechta serial ko'rdingiz", "");
//         }
//     },
//     rememberMySeries: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt("Ohirgi ko'rgan serialingiz?"),
//                 b = prompt("Nechchi baho berasiz?");
//             if (a != null && b != null && a != "" && b != "") {
//                 seriesDB.series[a] = b;
//                 console.log("Done");
//             } else {
//                 console.log("Error");
//                 i--;
//             }
//         }
//     },
//     detectLevelSeries: function () {
//         if (seriesDB.count < 5) {
//             console.log("Kam serial ko'ripsiz");
//         } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//             console.log(" Siz klassik tomoshabin ekansiz");
//         } else if (seriesDB.count >= 10) {
//             console.log("Siz serialchi zvezda ekansiz");
//         } else {
//             console.log("Error");
//         }
//     },
//     showDb: function () {
//         if (!seriesDB.private) {
//             console.log(seriesDB);
//         }
//     },
//     visibleDB: function () {
//         //shunga umuman tushunmadim takrorlashda jiddiy qara
//         if (seriesDB.private) {
//             seriesDB.private = false;
//         } else {
//             seriesDB.private = true;
//         }
//     },
//     writeGenres: function () {
//         let genres = prompt(
//             "Yahshi ko'rgan janringizni vergul yordamida yozing"
//         ).toLowerCase();
//         // console.log(genres); //propmtdan kelayotgan narsani asl holatini ko'rish uchun
//         if (genres === "" || genres === null) {
//             console.log("Siz noto'g'ri malumot kiritdingiz");
//             i--;
//         } else {
//             seriesDB.genres = genres.split(", ");
//             seriesDB.genres.sort();
//         }
//         seriesDB.genres.forEach(function (item, idx) {
//             console.log(`Yahshi ko'rgan janringiz ${idx + 1} - nomi ${item}`);
//         });
//     },
//     writeActors: function () {
//         for (let i = 0; i <= 7; i++) {
//             const actors = prompt(`Yahshi ko'rgan aktiyorlaringiz  ${i + 1}`);
//             seriesDB.actors[i] = actors;
//         }
//     },
// };
// //// console.log(typeof seriesDB);//buni ishlat bu katta objec

///////////////Dynamic typing///////////////////////////////
// malumot trularini bir biriga o'zgartirish
// to string sonlardan qanday qilib matn malumot turiga o'tiladi
// console.log(typeof String(4))//1 chi yo'li
// console.log(typeof ("Nur " + 35));//2 chi yo'li
// const youtubeChannel = 10;
// console.log(`youtube.com/channel/` + youtubeChannel);
//to number matnlardan qanday qilib raqamlar chiqarish
// console.log(typeof Number(4));//1 chi usuli
// console.log(typeof + "5");//2 chi usuli
// console.log(typeof parseInt("15")); // 3 chi usuli
// const nameOne = parseInt(prompt("age"));
// console.log(nameOne);

//to booline
//0, "", null, undefined, NaN, = har doim false qaytaradi
// let age = 0; // o'zgaruvchini qiymati 0 ga teng bolsa console hech narsa qaytarmaydi
// if (age) {
//     console.log("g");
// }
// age = 18;//yani ozgaruvchini qiymati 18 ga o'zgartirilgandan keyin consolega malumot chiqdi
// if (age) {
//     console.log("g");
// }

// console.log(typeof Boolean("4"));// 2 chi usuli

// console.log(typeof !!"4");//3 chi usuli

////////////////////////DOM bilan ishlash script2.js ////////////faylida///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////Hodislar bilan ishlash script3.js ///////faylida///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////Async defer. Dynamic scriptlar/////////////

//SHU NARSANI TUSHUNMADIM QAYTADAN BAJAR
// const p = document.querySelectorAll("p");
// console.log(p);

// function loadScript(src) {
//     const script = document.createElement("script");
//     script.src = src;
//     script.async = false;//bunda orqama keyin qanday qo'yilgan bo'lsa shunday turadi hajimga qarab tanlanmaydi
//     document.body.append(script); // bu yerda asyng atributi aftamatik qo'shiladi
// }
// loadScript("js/script2.js");
// loadScript("js/script3.js");

//////////////////DEVELOPER TOOLS HATOLARNI KUZATISH/////////////

// function sayHello() {//Debugger consoldagi sourcesni ichidagi devtools
//     console.log("Good morning");
//     // debugger // shu qaysudur funksiyaga qo'yilsa devtoolsga kirgandan shuni tayyorlab chiqarib turgan bo'ladi yani oldindan kerakli funksiyani tanlab debuggerni ishlatsa bo'ladi
// }
// sayHello();

// function sayBye() {
//     console.log("Good bye");
// }
// sayBye();

// const arr = [1, 34, 14, -56, 98],
//     sorted = arr.sort(compareNum);
//     //  debugger // shu qaysudur funksiyaga qo'yilsa devtoolsga kirgandan shuni tayyorlab chiqarib turgan bo'ladi yani oldindan kerakli funksiyani tanlab debuggerni ishlatsa bo'ladi

// function compareNum(a, b) {
//     return a - b;

// }
// console.log(sorted);

///////////////////////ClassList (yani hodislar bilashni davomi) bilan ishlash script4 failida///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////Delegatsa hodisalari darsi 4 script4 failida//////////////////////

// ////////////////////////Date bilan ishlash (Eslatma: Date bu sana Daa esa malumot turi Js da shunday)///////////////////////////
// const now = new Date()// bu bilan kun soatni bilsa bo'ladi yani Datadi!!!// GMT+0500<=bu O'zbekiston vat birligi jahon bo'yicha
// console.log(now);//logda yahshiroq ko'rinarkan!!! yani turgan joyni waqr birligi bilan ko'rsatib beriladi

////////////////////////data bilan ishlash///////////////////////////
// const now = new Date('2022-05-29')//bu holatda yani datadni ihtiyoriy yozilganda log shu kunni 00 lini chiqarib beradi
// console.log(now);

// const now = new Date(0)//buni sababi bu qonun shu kundan boshlab ishlagan yani mintaqalarda vaqtni to'g'ri aniqlash
// console.log(now);

// const now = new Date()
// console.log(now.getFullYear());//bunda faqat yilni malumotlarini oladi

// const now = new Date()
// console.log(now.getMonth());//bunda qaysi oy ekanligini number+string bilan birga beradi 8 chi oy oktyabir lekin bugun 24 chi sentyabir 09 chi oy 23 chi yil bu aslida 7 chi oyni ko'rsatishi kerak edi lekin dasturlashda hammma narsa 0 dan boshlanadi masalan yanvarham noldan boshlanadi yani oylar noldan boshlanadi

// const now = new Date()
// console.log(now.getDate());// lekin kunni to'g'ri ko'rsatdi yani birdan boshlab hissobladi

// const now = new Date()
// console.log(now.getDay());//25.09.2023 da yani 25 sentyabir dushanba kunini 1 ko'rsatdi bu yerdaham haftani kunlarini 1 dan hissobladi yani shunda yakshanba 0 bo'ladi

// const now = new Date()
// console.log(now.getTime());//1695582189519 shunaqa choqdi yani millisikundda hissoblaydi

// const now = new Date()
// console.log(now.getHours());//bunda soatni boshini ko'rsatadi

// const now = new Date()
// console.log(now.getUTCHours());//MINTAQA BO'YICHA VAQTNI BOSHINI ANIQLAB BERADI

// const now = new Date()//
// console.log(now.setHours(18));//bu dasturchi hohlab qo'ygan vaqt yani hammasini setdatani setmonthni setyearsni hullas hammasini hsunday qilib o'zgartirish mumkun
// console.log(now);//haqiqiy vat o'zgarmagan holatda

// let start = new Date()//yani sikilni ichidagi  milliseconddagi vaqtni logda chiqarib qancha vaqt ishlashini aniqlash loglarda chiqgan vaqtlar yani tugagan vaqtidan boshlangan vaqti ayriladi shunda sikil qancha vaqt ishlagani aniqlanadi
// for(let i = 0; i < 200000; i++){
//     let some = i ** 3
// }
// let end = new Date()
// console.log(start.getTime());
// console.log(end.getTime());
// alert(`Loop compited in  ${end - start} millisecond`)
/////////////////////////Window doc bilan ishlash//////////////////

//   const box = document.querySelector('.box')
//   const width = box.clientWidth
//   const height = box.clientHeight
//   console.log(width);
//   console.log(height);

//   const box = document.querySelector('.box')
//   const width = box.offsetWidth
//   const height = box.offsetHeight
//   console.log(width);
//   console.log(height);

// const box = document.querySelector(".box");
// const height = box.scrollHeight
// console.log(height);

// const box = document.querySelector(".box"),
// btn =document.querySelector('button')
// btn.addEventListener('click' , () =>{
//     box.style.height= box.scrollHeight + 'px'//scrolni click bilan butunlay ochildi
// })

// const box = document.querySelector(".box"),
// btn =document.querySelector('button')
// btn.addEventListener('click' , () =>{
//     console.log(box.scrollTop);
// })

// const box = document.querySelector(".box"),
// btn =document.querySelector('button')
// btn.addEventListener('click' , () =>{
//     console.log(box.scrollTop);
// })
// const style = window.getComputedStyle(box)
// console.log(style.display);//displaysiz hamma compiyuter stillar chiqadi displey jiyiga nima yozilsaham oshani stillarini chiqaradi

// const box = document.querySelector(".box"),
// btn =document.querySelector('button')
// console.log(document.documentElement.clientWidth);//ekranni enini o'lchadi

///////////////////////////////////Function Constructor/////////////////////////////////////////

// const number = new Function()// bu eski yo'li
// console.log(number);

// const number = new Function()
// console.dir(number);//dir bilan yozilganda object holatda chiqadi chunku jsda hamma narsa abject hissoblanadi masalan oop deyiladi yani ojectga yo'naltirilgan dasturlash

// function Car(name , color){//Bu joyda Car(katta hariflar bilan yoziladi) construktor hissoblanadi yani buni ichidagi thislar har biri bir o'zgaruvchi hissoblanadi
//     this.name = name
//     this.color = color
//     this.isAirbag = true
// }
// const bmw = new Car('bmw' , 'red')// bu joyda Car funksiyasi construktorga aylanib construktor ichida Carni hususiyatlariga value berib chiqdi  valuelarni otasi yani thislar aslida o'zgaruvchiga teng// yani funksiya yozib uni object sifatida ishlatishimiz mumkun
// console.log(bmw);

// function Car(name , color){//Bu joyda Car(katta hariflar bilan yoziladi) construktor hissoblanadi yani buni ichidagi thislar har biri bir o'zgaruvchi hissoblanadi
//     this.name = name
//     this.color = color
//     this.isAirbag = true
// }
// const bmw = new Car('bmw' , 'red')// bu joyda Car funksiyasi construktorga aylanib construktor ichida Carni hususiyatlariga value berib chiqdi  valuelarni otasi yani thislar aslida o'zgaruvchiga teng// yani funksiya yozib uni object sifatida ishlatishimiz mumkun
// const merc = new Car('mers', 'black')//yani bu joyda     yangi o'zgaruvchi ochib unga merc degan nom berib new Car qilib ochilganda va ichiga qiymatlar berilganda u yuqoridagi Car funksiyasiga tobe bo'ladi birinchi qiymatlarni asosiy funcsiyadan olib to'laqonli funksiya qilib qayaradi har birini alohia
// console.log(bmw);
// console.log(merc);

// ///////////////////////////////////////////////////////////////////
// function Car(name, color, mph) {
//     //function constructor shundan function constructor yozilganda nomi albatta katta hariflar bilan yozilish kerak yani Carni
//     this.name = name;
//     this.color = color;
//     this.mph = mph;
//     this.isAirbag = true;
//     this.speed = function () {
//         console.log(`speed of car ${this.name} is ${this.mph}`);
//     }; //interpalatsa yani``<= manashu yordamida yozilganda text yozilgandan keyin ${}<= shunaqa yozib ichiga funksiyadan kelayotgan qiymatni yozib qo'yish mumkun
// }
// Car.prototype.sayHello = function () {
//     console.log(`Car nome of ${this.name} say hello`);
// };
// const audi = new Car("audi", "black", 220); //audi o'zgaruvchini boshiga qo'ysamham 3 chi bo'lib o'qidi yani Car funksiyani bola o'zgaruvchilari yozilishiga qarab tartiblanadi
// const bmw = new Car("bmw", "black", 320);
// const merc = new Car("mers", "black", 420);
// bmw.sayHello();
// merc.sayHello();
// audi.sayHello();
// bmw.speed();
// merc.speed();
// audi.speed();
// console.log(bmw);
// console.log(merc);
// console.log(audi);
// ///////////////////////////////////////////////////////////

// const bmw = new Car("bmw", "red", 300 );//new kalit so'zi bilan ishlatilayotgan yangi o'zgaruvchilar(pastidagiham)
// const merc = new Car("merc", "black",280 ); //yani bu mer va tepasidagi car protatip funksion object cardan(tepadan) voris bo'lib kelayapti va bu car  protatip funksion objectni har hil bo'lib kelayapti yani yangi o'zgaruvchi ochib unga hohlagan nom berib va new Car qilib chaqirilib parametiriga qiymatlar berilsa yangi ochilgan o'zgaruvchini qiymatiga aylanadi//yani bitta funksya ochib unga har hil qo'shimga o'zgaruvchilar qo'shib(ochib) unga har hil qiymatlar berish mumkun// yani bu kodlarni optimallashtirishga yordam beradi masalan 10 ta sileder ochib unga bitta funksiya yordamida har hil parametrlar yozish mumkun// metodlariniham yozish mumkun
// bmw.sayHello()//say hello protatipeni ichida
// merc.sayHello()//say hello protatipeni ichida

// bmw.speed()
// merc.speed()
// console.log(bmw);
// console.log(merc);

////////////////////////// Context this & Closure//////////////////
//ODDIY FUNCSIYANI CONTEXTI WINDOWGA TENG

// //1- chi Context this = bu kalit so'z yani bunda har doim ichida nimadur bor bo'ladi yani nimagadur osiladi qaram bo'ladi va qaram bo'lgan narasidan vorislanadi ichidagi narsalalarini ishlatadi
// function logger() {
//     //ODDIY FUNCTIONNI CONTENSI YANI THIS HAR DOIM WINDOW GLOBAL OBJECTGA QARAM BO'LADI YANI OSILADI AGARDA QATTIY REJIM YONIQ BO'LSA CONTEXT UNDEFINEDGA TENG
//     console.log(this); //bu this yani funksiyani thisi dooim udefined bo'ladi qachonki use scrit o'chiq bo'lsa faqat window qaytaradi// yani faqat funksiya kalit sozi bilan yozilgandagina  bu this windowga osiladi//use strictni foydalaridan biri agar use strict yoniq bo'lsa this windowga osilmaydi undefined bolib qoladi
// }

// function logger(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return this.a + this.b;
//     }
//     console.log(sum());
// }
// logger(1, 2);

// function logger(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// logger(1, 2);//bunda 3 chiqadi chunki //context thislar shu turishida undefinedga teg// bunda 3 chiqadi chunku funksiyani ichida sum locol funksiyasi chaqirilgan

// //2- chi context this objectlar ichida nimaga osiladi?//CONTEXT OBJECTNI ICHIDAGI METODDA OBJECTNI O'ZIGA TENG yani bu yerda metod consollini logi
// const obj = {
//     x: 10,
//     y: 15,
//     sum: function () {
//         console.log(this);//pbjectlarni ichida this objectni o'ziga teng
//     },
// };
// obj.sum()

// const obj = {
//     x: 10,
//     y: 15,
//     sum: function () {
//         function logger() {
//             console.log(this);
//         }
//         logger();
//     },
// };
// obj.sum();

// //3- CHI context this constructorlarda nimaga teng??//Context this consturoctorda yangi objectni nusxasiga teng

// function Car(name, color) {
//     this.name = name;
//     this.clor = color;
//     this.isAirbag = true;
// }
// const bmw = new Car("BMW", "Black");
// console.log(bmw);

/////////////////////////////////closure/////////////////////////
// const as = 4//closure// as nomli glabal o'zgaruvchi ochilib unga 4 qiymati berildi va funksiya ochilib unga logda shu as o'zgaruvchini chaqir deyildi bunda javob 4 chiqdi yani closure holati ishga tushib glabal hududdan yani asoosiy js faildan as ni izladi va topib 4 chiqardi lekin funkisyani ichida  as degan o'zgaruvchi ochilgandan keyin closure ishlab dastur birinchi funksiyani ichidan izlaydi va agar topsa shu funksiyani ichidagi as ni chiqaradi//yani  sabab shuki log funksiyani ichiga berilgan// birinchi funksiyani ichidan qidiradi topaolmasa glabal fayilga yani tashqariga chiqadi
// function los(){
//     const as = 5
//     console.log(as);
// }
// los()

///////////////////// Call, Apply & Bind//////////////////////////

//  1-CHI METOD CALL, 2-CHI METOD APLLY, 3-CHI METOD BIND BULAR PASTDA YOZILGAN TARTIBI BILAN

// function logger (){
//     console.log(this);//manashu car objectni chiqarib berdi yani this ozi qaram bo'lgan carni chiqarib berdi
//     console.log(this.name);
// }
// const car ={
//     name:'BMW',
//     color:'Black'
// }
// logger.call(car)//call va apply// yani call metodi  car degan ozgaruvchini contextni ulab qo'y degani//yani thisga car degan o'zgaruvchini qaram qilib qo'ydik
// // logger()

// function logger (){
//     console.log(this);//manashu car objectni chiqarib berdi yani this ozi qaram bo'lgan carni chiqarib berdi
//     console.log(`my car is ${this.name} color is ${this.color}`);//interpalatsya orqali yozish!!!!!!!!!!
// }
// const car ={
//     name:'BMW',
//     color:'Black'
// }
// logger.apply(car)//call va apply ikkkalasi bir hil ishleydi// yani call metodi  car degan ozgaruvchini contextni ulab qo'y degani//yani thisga car degan o'zgaruvchini qaram qilib qo'ydik
// // logger()

// function logger(spead) {
//     console.log(this); //manashu car objectni chiqarib berdi yani this ozi qaram bo'lgan carni chiqarib berdi
//     console.log(
//         `my car is ${this.name} color is ${this.color}.max speed ${spead}`
//     ); //interpalatsya orqali yozish!!!!!!!!!!
// }
// const car = {
//     name: "BMW",
//     color: "Black",
// };
// logger.call(car, 230); //call va aplly metodini farqi faqat parametrlarni chaqirishda
// logger.apply(car, [200]); //call va apply metodini farqi faqat parametrlarni chaqirishda
// //call va apply ikkkalasi bir hil ishleydi bittagina farqi bor yani parametr (speed) massivni ichida chaqilishi  kerak// yani call metodi  car degan ozgaruvchini contextni ulab qo'y degani//yani thisga car degan o'zgaruvchini qaram qilib qo'ydik

// function calc(number) {
//     //parametrdagi number sabab funcsiya numberlar bilan ishleydi
//     return this * number; //bu yerda boshidan funksya yozildi va parametrga number berildi va thisga ko'payturuv number berildi
// }
// const multilpe2 = calc.bind(2);//bind bizga yangi funcsiya qaytaradi va bu funcsiya nimagadur ulangan bo'ladi calc o'zgaruvchiga ulandi
// console.log(multilpe2(10));
// console.log(multilpe2(15));

// const btn = document.querySelector('button')
// btn.addEventListener('click', function(){//oddiy functionda button strelkali functionda esa window qaytaradi
//     console.log(this);
// })

// const btn = document.querySelector('button')
// btn.addEventListener('click', function(){//oddiy strelkasiz oddiy funksayada context this elementni o'ziga teng bo'ladi
//     this.style.width = '400px'// Shunda button 400px ga o'zgaradi
// })

// const btn = document.querySelector('button')
// btn.addEventListener('click', ()=>{//oddiy strelkasiz oddiy funksayada context this elementni o'ziga teng bo'ladi //shunda thisni tepasida osiladigan narsasi yo'qligi uchun hato beradi bu bag
//     this.style.width = '400px'// Shunda button 400px ga o'zgaradi
// })

// const btn = document.querySelector('button')
// btn.addEventListener('click', (e)=>{
//     e.target.style.width = '400px'// Shunda button 400px ga o'zgaradi// buttonni o'zgartirishni eng qulay yo'li event targetda qilgan maqul va oson
// })

// const obj ={
//     x:10,
//     y:15,
//     sum: function(){
//         const logger = () =>{//strelkali va oddiy funksiyani bu joydagi farqi(qovuslaridagi ranglardaham farq bo'larkan) yani farqi shuki oddiy funksiyada this context windowga osilardi(use strict ishlamagan paytda) bu yerda yani strelkali funcsiyada esa this context o'zi ichida yozilgan objga teng bo'ladi //oddiy strelkasiz funksiyada o'zini window contexti bo'ladi strelkali funksiyada esa hech qachon o'zini contextni yo'q bo'ladi u har doim o'zini tepasiga osiladi tepasidan vorislanadi meros oladi qaytaradi chunki tepadagi sum funksiyasi (contexti) objga teng
//             console.log(this.x, this.y);// shunday qilib alohida alohida olishxam mumkun
//         }
//         logger()
//     }
// }
// obj.sum()

// const calc = (a)=> a+ 10
// console.log(calc(10));//bu kam qator yoziladigan kop'rinishiagar bittaginafunksiyani ishlatish kerey bo'sa shunday yozsaham bo'ladi

//////////////////////////Class ES6//////////////////////////////////

// class Car {
//     //classlarni nomi doim katta harflar bilan boshlanadi
//     constructor(name, color, speed) {//Yani bitta class yozib uni hohlagancha yangi o'zgaruvchiga olib classni icghidagi qiymatlarni qayta qayta ishlatish mumkun//bu global class yoki construksiya desaham bo'ladi
//         this.name = name;
//         this.color = color;
//         this.speed = speed;
//     }
//     calcSpeed(){
//         return this.speed * 100
//     }
// }
// const bmw =new Car('BBW', 'BLACK',200)//bitta class yani(Car) yasab uni ichidagi parametrlariga yozilgan hususiyatlardan hohlagancha yani o'zgaruvchi yasab qayta qayta foydalansa bo'ladi
// const merc = new Car('MERC','RED', 100 )
// // console.log(bmw);
// // console.log(merc);
// console.log(bmw.calcSpeed());
// console.log(merc.calcSpeed());

// class Car {
//     //yani bu Car classi fundament class hissoblanadi
//     //classlarni nomi doim KATTA harflar bilan boshlanadi
//     constructor(name, color, speed) {
//         //Yani bitta class yozib uni hohlagancha yangi o'zgaruvchiga olib classni icghidagi qiymatlarni qayta qayta ishlatish mumkun//bu global class yoki construksiya desaham bo'ladi yani oop
//         this.name = name; //bular ichki o'zgaruvchi, qiymatlar
//         this.color = color;
//         this.speed = speed;
//     }
//     calcSpeed() {
//         //Carni ichida bo'lgani uchun bu metodni contexti Carni constroctorini nusxasiga teng bo'ladi yani Carni ichidagi constructorni nusxasiga teng bo'ladi
//         return this.speed * 100;
//     }
// }
// class Spark extends Car {
//     //bu yerda esa yangi Spark degan class ochildi va yuqoridagi Car degan classdan vorislandi extends funksiyasini yozib keyin mavjud classni nomi yozilsa yani (Car) shu yozilgan classdan meros oladi yani parametrlariga yozilgan thislarni oladi yani Carni ichida nima bo'lsa Spark classini ichidaham shu narsalar bor bo'ladi
//     constructor(name, color, speed, isAirbag, extraBallon) {
//         //yani constructor yozib parametriga Cardagi qaysi hususiyat kerey bo'lsaa parametriga shu hususiyatlar yoziladi parametrda Spark classiga qo'shimcha ravishda isAirbag va extraBallon yozildi
//         super(name, color, speed); //bu super degani ona classdan yani Cardan bola classga yani Sparkga ona classni qaysi propertylarini(hususiyatlarini) olishn kereyligi yoziladi va bu doim BIRINCHI QATORDA KELISH KEREY YANI ENG BIRINCHI SSSUUUPPPEEERRR YOZILISHI KEREY
//         this.isAirbag = isAirbag; //bu yangi thislar yani constructor ichidagi yangi logal o'zgaruvchilar Sparkni Cardan olgan hususiyatlariga qo'shimcha ravishda kiritilsyspti shunday qilib (es6 versionda) ona classni boshqa o'zgaruvchilariga qo'shimcha hususiyatlar yozish mumkun
//         this.extraBallon = extraBallon;
//     }
//     logger() {
//         //logger bu yerda metod sifatida yozildi//yani bu logger consolda chaqirilganda ichidagi enterpalatsa orqali yangi Sparkni hamma malumotlarini beradi
//         console.log(
//             `Name of car ${this.name} color is ${this.color}. Is airbag there ${this.isAirbag}.  Are there extra ballon ${this.extraBallon}`
//         );
//     }
// }
// const aboutCar = new Spark("Spark", "White", 100, true, 5);//constructorni ichidagi yangi class Sparkni chaqirganda uni parametrlari novbat ketma ketligi tartib bilan yozilishi kerey agar noto'g'ri ketsa undefined chiqadi yani consol topolmagan qiymatini undefined qilib chiqarib beradi/////////yani bu yerda spark bor  sparkni protatype ona class Car
// aboutCar.logger();
// console.log(aboutCar.calcSpeed());//yani bu yerda Carni ichidagi calxSpeed metodiniham chaqirib ishlatsa bo'ladi yani speed 100ga ko'paytirilib berildi
// console.log(aboutCar);

////////////////////////////////////rest operator va parametrni defpul qiymati darslari 3-modul projectda o'tildi////////////////////////////////////////////////////////////////////////////////

// function logger(a, b, ...rest) {//rest operator parametrda yo'q  lekin chaqirilganda bor bo'lgan parametrlarni bitta massivga yig;ib beradi
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }
// logger(1, 2, 3, 4, 5, 6, 7, 8, 9);

// function logger(a, b, ...rest) {//rest operator parametrda yo'q  lekin chaqirilganda bor bo'lgan parametrlarni bitta massivga yig;ib beradi
//     console.log(a,b,rest);//yani rest operator sabab logger funksiya CHAQIRILGANDA YOZILGAN PARAMETRLAR MASSIV HOLATIDA KELADI

// }
// logger(1, 2, 3, 4, 5, 6, 7, 8, 9);

///////////////////////////////////////////////////////////////////////////parametrning sukut qiymati//////////////////////

// function calc(number, def = 10) {//shunday yozilishi yangisi va qisqasi
//     console.log(number + def);
// }
// calc(10)

///////////////////////////server nima darsi 3-modul projectda////////////////////////////

//////////////////////////////////////json chuqur clonlash json server//////////////////////////////////////////////////////////

//json nima json bu java script object notion (noteyshin) deb ataladi json hajmi juda kichkina

// const car = {//malumotni jsnon formatga aylantirish
//     //malumotni serverga doim json farmatda yuborish kerak server boshqa formatni qabul qilmaydi
//     name: "bmw",
//     color: "red",
// };
// const objToJSON = JSON.stringify(car); //stringify metodi fayli json formatga o'girib json formatda object logda ikkitalik qo'shtirnoq ichida bo'ladi shu bilan ajralib turadi
// console.log(objToJSON);

// const car = {//serverdan kelayotgan malumotni json formatdagi malumotniobjectga o'girish,aylanirish//serverdan qanday malumot kelsaham uni parse qilib object formatiga o'tqazish kerak
//     name: "bmw",
//     color: "red",
// };
// const objToJSON = JSON.stringify(car); //serverga json qilib jo'natish
// const jsonToObj = JSON.parse(objToJSON)//serverdan object qilib qaytarish
// console.log(objToJSON);//bu stringify metodi orqali json formatga aylantirilgan object
// console.log(jsonToObj); //bu parse metodi orqali serverdan kelaydigan json formatni objectga aylantilgani

// const car = {
//     name: "bmw",
//     color: "red",
//     extra: {
//         isAirbag: false,
//         ballon: 5,
//     },
// };
// const clone = JSON.parse(JSON.stringify(car));
// console.log(clone);

// const car = {
//     name: "bmw",
//     color: "red",
//     extra: {
//         isAirbag: false,
//         ballon: 5,
//     },
// };
// const clone = JSON.parse(JSON.stringify(car));// bu joyda object to'liq clounlandi yani parse va stringify metodlari orqali 
// clone.extra.ballon = 10;//bu joyda clone o'zgaruvchisiga murojat qilinib ichidagi extra va extrani ichidagi balloni 10 ga o'zgartir degan buyruq yozildi //shunda clonega bunday tartibda murojat qilinishiga qaraganda log/clone malumotlarni parseni ichida chaqirilganda strinifyni parametridagi car o'zgaruvchidan oladi
// console.log(car);//o'z holatida turipti
// console.log(clone);//clone abject ballon 10 ga o'zgardi
// //parse va stringify metodlari va JSON orqali objectlarimizni chuqur clonlashimiz mumkun bo'ladi yani serverga json format jonatish serverdan kelayotgan json formatni object formatga o'girishimiz mumkun bo'ladi 

//////////////////////////////////AJAX DARSI ASOSIY RO'YHATDA AJAX.HTML FAILIDA ////////////////////ajax yani ayax server bilan muloqot texnologiyasi yani asinxron javascript and XML serverga so'rov yuborish  /////////////////////////////////////

//ajax texnalogiyasi yordamida website sahifasida faqat kerakli joyini serverdan chaqiramiz yani sahifa qayta yuklanmasdan


 
 
