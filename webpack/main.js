"use strict";

function firstModule() {
    this.sayHello = function () {
        console.log("Hello world");
    };

    this.sayBye = function () {
        console.log("Good bye");
    };
}

 module.exports = firstModule
  