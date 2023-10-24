"use strict";

const email = document.querySelector(".email"),
    firsName = document.querySelector(".name"),
    formSubmit = document.querySelector("form"),
    doc = document.querySelector(".doc"),
    remove = document.querySelector(".remove");
//localstorageni 5 ta asosiy metodlari bor
//1 chi metodi Set item yani nimadurni yuklash o'rnatish yani set item metodi yordamida localstoragega qandaydur malumotni yuklab o'rnatib qo'yamiz

// localStorage.setItem("name", "Nur.M");

// ikkinchi metodi get item

// const name = localStorage.getItem("name");
// console.log(name);

// doc.textContent = `${name}`;

// 3 chi metod remove & clear
// remove.addEventListener("click", () => {
//     localStorage.removeItem("name");
// });

// remove.addEventListener("click", () => {
//     localStorage.clear();
// });

formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
        email: email.value,
        name: firsName.value,
    };
    e.target.reset();
    localStorage.setItem("user", JSON.stringify(user));
});

const user = JSON.parse(localStorage.getItem("user"));
// console.log(user);
doc.textContent = `${user.name}`
