/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ logger),
/* harmony export */   firstVar: () => (/* binding */ firstVar),
/* harmony export */   secondVar: () => (/* binding */ secondVar)
/* harmony export */ });
//<!-- //eslatma: yani webpack qilinganda webpackni default nastroykasida bundle.js papkasi bor shu papkani loyihani html papkasiga chaqirib qo'yish kerak yani script jsda shu bundle.js papkasi bo'lishi kerak{html file ohiriga qara} //yani distni ichida boladi bundle.js   -->



// //bu export qilishni birinchi yo'li
// const firstVar = "Hello"
// export{firstVar}

// //bu export qilishni ikkinchi yo'li
const firstVar = "Hello"
const secondVar= "hello world"//yani buni o'zi alohida yo'li ekan huddi shunday qilib exportni ichidayoq o'zgaruvchi ochib boshqa failga export qilish mumkun ekan


//bu export qilishni uchinchi yo'li

function logger () {
    console.log("Console log");
} //bu yo'l bilan yani export default function logger () deb yozish yo'li bilan main.js failidan faqat bir martta funcsiya jo'natishimiz mumkun agar bir nechta funcsiyalar jo'natish kerak bolsa export yasni birinchi ikkinchi yollaridan foydalangan maqul

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.js");
//<!-- //eslatma: yani webpack qilinganda webpackni default nastroykasida bundle.js papkasi bor shu papkani loyihani html papkasiga chaqirib qo'yish kerak yani script jsda shu bundle.js papkasi bo'lishi kerak{html file ohiriga qara} //yani distni ichida boladi bundle.js   -->



//bu import qilishni birinchi yo'li
// import {firstVar} from "./main";

// console.log(firstVar);//bunda run code qilinganda bundle.jsdan hello chiqarkan

// //bu import qilishni ikkinchi yo'li
// import {firstVar,secondVar} from "./main";

// console.log(firstVar);//bunda run code qilinganda bundle.jsdan hello chiqarkan
// console.log(secondVar);


//bu import qilishni uchinchi yo'li
// import logger from "./main";
// logger()

//bu umumiy yo'li yani bir nechta funcsiyani import qilganda masalan bitta main nomli filedan import qilganda bitta o'zgaruvchiga olish mumkun concole logga qara va qaytadan yozib (qavus ichidagi yozilishga tayyor funcsyalarni tekshir) 


console.log(`${_main__WEBPACK_IMPORTED_MODULE_0__.firstVar}, ${_main__WEBPACK_IMPORTED_MODULE_0__.secondVar}.${_main__WEBPACK_IMPORTED_MODULE_0__["default"]}`);//${main.default} bu faqat bir martta export va inport qilinadigamn funcsiya main.jsda yozilgan logger funcsiyasi
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map