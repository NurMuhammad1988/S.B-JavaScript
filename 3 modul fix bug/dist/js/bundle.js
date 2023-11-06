/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/class.js":
/*!******************************!*\
  !*** ./src/modules/class.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });



function classes() {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector, ...classes);
            this.transfer = 11000;
            this.changeToUZS();
        }
        changeToUZS() {
            this.price = this.price * this.transfer;
        }
        render() {
            const element = document.createElement("div");
            if (this.classes.length === 0) {
                this.element = "menu__item";
                element.classList.add(this.element);
            } else {
                this.classes.forEach((classname) =>
                    element.classList.add(classname)
                );
            }
            element.innerHTML = `
            <img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Price:</div>
              <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
            </div>
            `;
            this.parent.append(element);
        }
    }
    axios.get("http://localhost:3000/menu").then((data) => {
        //bu axiosda qilingani
        data.data.forEach(({ img, altimg, title, descr, price }) => {
            new MenuCard(
                img,
                altimg,
                title,
                descr,
                price,
                ".menu .container"
            ).render();
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classes);
//npx json-server --watch db.json

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modules/modal.js");
/* harmony import */ var _server_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server/server */ "./src/server/server.js");



function form(formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector);
    forms.forEach((form) => {
        bindPostData(form);
    });
    const msg = {
        loading: "img/spinner.svg",
        success: " Thank's for submiting our form",
        failure: "Something went wrong",
    };

    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const statusMessage = document.createElement("img");
            statusMessage.src = msg.loading;
            statusMessage.style.cssText = `
            display:block;
            margin: 0 auto;
            `;
            form.insertAdjacentElement("afterend", statusMessage);
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            (0,_server_server__WEBPACK_IMPORTED_MODULE_1__.postData)("http://localhost:3000/request", json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(msg.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(msg.failure);
                })
                .finally(() => {
                    form.reset();
                });
        });
    }
    function showThanksModal(message) {
        const prewModalDialog = document.querySelector(".modal__dialog");
        prewModalDialog.classList.add("hide");
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(".modal", modalTimerId);
        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
      <div class="modal__content">
      <div data-close class="modal__close">&times;</div>
      <div class="modal__title">${message}</div>
      </div>
        `;
        document.querySelector(".modal").append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prewModalDialog.classList.add("show");
            prewModalDialog.classList.remove("hide");
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(".modal");
        }, 4000);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);


/***/ }),

/***/ "./src/modules/loader.js":
/*!*******************************!*\
  !*** ./src/modules/loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loader() {
    loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 1000);
}

// module.exports = loader
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);


/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach((item) => {
        item.addEventListener("click", () =>
            openModal(modalSelector, modalTimerId)
        );
    });
    modal.addEventListener("click", (e) => {
        if (e.target == modal || e.target.getAttribute("data-close") == "") {
            closeModal(modalSelector);
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal(modalSelector);
        }
    });
    // const modalTimerId = setTimeout(openModal, 5000);
    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", showModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    wrapper,
    field,  
}) {
    const slides = document.querySelectorAll(slide),
        next = document.querySelector(nextArrow),
        prev = document.querySelector(prevArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width,
        sldier = document.querySelector(container);
    // console.log(width);
    let slideIndex = 1;
    let offset = 0;
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }
    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = ".9s ease all";
    slidesWrapper.style.overflow = "hidden";
    slides.forEach((slide) => {
        slide.style.width = width;
    });
    const indicators = document.createElement("ol");
    const dots = [];
    console.log(dots);
    indicators.classList.add("carousel-indicators");
    sldier.append(indicators);
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        dot.setAttribute("data-slide-to", i + 1);
        dot.classList.add("carousel-dot");
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }
    next.addEventListener("click", () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
        dots.forEach((dot) => (dot.style.opacity = ".5"));
        dots[slideIndex - 1].style.opacity = 1;
    });
    prev.addEventListener("click", () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        /////////////////////////////////
        if (slideIndex == slides.length) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        } //???????????????????????????????
        /////////////////////////////////
        // if (slideIndex = 1) {
        //     slideIndex = slides.length;
        // } else {
        //     slideIndex--;
        // }
        //////////////////////////////
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
        dots.forEach((dot) => (dot.style.opacity = ".5"));
        dots[slideIndex - 1].style.opacity = 1;
    });
    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to");
            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }
            dots.forEach((dot) => (dot.style.opacity = ".5"));
            dots[slideIndex - 1].style.opacity = 1;
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);
// //module.exports = slider;


/***/ }),

/***/ "./src/modules/tab.js":
/*!****************************!*\
  !*** ./src/modules/tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tab(
    tabsSelector,
    tabsContentSelector,
    tabsParentSelector,
    activeClass
) {
    const tabsParent = document.querySelector(tabsParentSelector),
        tabs = document.querySelectorAll( tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector);

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });
        tabs.forEach((item) => {
            item.classList.remove(activeClass );
        });
    }
    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add("tabheader__item_active");
    }
    hideTabContent();
    showTabContent();
    tabsParent.addEventListener("click", (event) => {
        const target = event.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, idx) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(idx);
                }
            });
        }
    });
}

// module.exports = tab
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tab);

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadLine) {
    // const deadLine = "2023-12-31";
    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds; // bu o'zgaruvchi if else bilan time tugaganda hamma raqamlar 0 bo'lishu uchun yozildi
        const timer = Date.parse(endtime) - Date.parse(new Date());
        if (timer <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(timer / (1000 * 60 * 60 * 24));
            hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((timer / 1000 / 60) % 60);
            seconds = Math.floor((timer / 1000) % 60);
        }
        return { timer, days, hours, minutes, seconds };
    }
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0 ${num}`;
        } else {
            return num;
        }
    }
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = document.querySelector("#seconds"),
            timeInterval = setInterval(updatClock, 1000);
        updatClock();
        function updatClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.timer <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock(id, deadLine);
}

// module.exports = timer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);


/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
async function postData(url, data) {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    });

    if(!res.ok){
        throw new Error(`Could not fetch ${url},status: ${res.status}`)
    }

    return await res.json();
}



///////sider cgatgpt yozib bergani pastda////
// async function postData(url, data) {
//     try {
//         const response = await fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         });

//         if (!response.ok) {
//             throw new Error(
//                 `Could not fetch ${url}, status: ${response.status}`
//             );
//         }

//         return await response.json();
//     } catch (error) {
//         // console.error(error);
//     }
// }

// export { postData };


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
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/class */ "./src/modules/class.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/form */ "./src/modules/form.js");
/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/loader */ "./src/modules/loader.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/modal */ "./src/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/slider */ "./src/modules/slider.js");
/* harmony import */ var _modules_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/tab */ "./src/modules/tab.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/timer */ "./src/modules/timer.js");
// "use strict";










window.addEventListener("DOMContentLoaded", () => {
    const modalTimerId = setTimeout(
        () => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(".modal", modalTimerId),
        5000
    );
    (0,_modules_class__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_form__WEBPACK_IMPORTED_MODULE_1__["default"])("form", modalTimerId);
    (0,_modules_loader__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])("[data-modal]", ".modal", modalTimerId);
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])({ 
     container: ".offer__slider",
     nextArrow: ".offer__slider-next",
     prevArrow:".offer__slider-prev",
     slide:".offer__slide",
     totalCounter:"#total",
     currentCounter:"#current",
     wrapper:".offer__slider-wrapper",
     field:".offer__slider-inner"
     });
    (0,_modules_tab__WEBPACK_IMPORTED_MODULE_5__["default"])(
        ".tabheader__item",
        ".tabcontent",
        ".tabheader__items",
        "tabheader__item_active"
    );
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])(".timer", "2023-12-31");

    // const tabsParent = document.querySelector(".tabheader__items"),
    //     tabs = document.querySelectorAll(".tabheader__item"),
    //     tabsContent = document.querySelectorAll(".tabcontent")
    // loader = document.querySelector(".loader");

    // setTimeout(() => {
    //     loader.style.opacity = "0";
    //     setTimeout(() => {
    //         loader.style.display = "none";
    //     }, 500);
    // }, 1000);

    // function hideTabContent() {
    //     tabsContent.forEach((item) => {
    //         item.classList.add("hide");
    //         item.classList.remove("show", "fade");
    //     });
    //     tabs.forEach((item) => {
    //         item.classList.remove("tabheader__item_active");
    //     });
    // }
    // function showTabContent(i = 0) {
    //     tabsContent[i].classList.add("show", "fade");
    //     tabsContent[i].classList.remove("hide");
    //     tabs[i].classList.add("tabheader__item_active");
    // }
    // hideTabContent();
    // showTabContent();
    // tabsParent.addEventListener("click", (event) => {
    //     const target = event.target;
    //     if (target && target.classList.contains("tabheader__item")) {
    //         tabs.forEach((item, idx) => {
    //             if (target == item) {
    //                 hideTabContent();
    //                 showTabContent(idx);
    //             }
    //         });
    //     }
    // });

    // const deadLine = "2023-12-31";
    // function getTimeRemaining(endtime) {
    //     let days, hours, minutes, seconds; // bu o'zgaruvchi if else bilan time tugaganda hamma raqamlar 0 bo'lishu uchun yozildi

    //     const timer = Date.parse(endtime) - Date.parse(new Date());

    //     if (timer <= 0) {
    //         days = 0;
    //         hours = 0;
    //         minutes = 0;
    //         seconds = 0;
    //     } else {
    //         days = Math.floor(timer / (1000 * 60 * 60 * 24));
    //         hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
    //         minutes = Math.floor((timer / 1000 / 60) % 60);
    //         seconds = Math.floor((timer / 1000) % 60);
    //     }
    //     return { timer, days, hours, minutes, seconds };
    // }

    // function getZero(num) {
    //     if (num >= 0 && num < 10) {
    //         return `0 ${num}`;
    //     } else {
    //         return num;
    //     }
    // }

    // function setClock(selector, endtime) {
    //     const timer = document.querySelector(selector),
    //         days = timer.querySelector("#days"),
    //         hours = timer.querySelector("#hours"),
    //         minutes = timer.querySelector("#minutes"),
    //         seconds = document.querySelector("#seconds"),
    //         timeInterval = setInterval(updatClock, 1000);

    //     updatClock();

    //     function updatClock() {
    //         const t = getTimeRemaining(endtime);
    //         days.innerHTML = getZero(t.days);
    //         hours.innerHTML = getZero(t.hours);
    //         minutes.innerHTML = getZero(t.minutes);
    //         seconds.innerHTML = getZero(t.seconds);

    //         if (t.timer <= 0) {
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }

    // setClock(".timer", deadLine);/////////////////

    //modal
    // const modalTrigger = document.querySelectorAll("[data-modal]"),
    //     modal = document.querySelector(".modal");

    // function closeModal() {
    //     modal.classList.add("hide");
    //     modal.classList.remove("show");
    //     document.body.style.overflow = "";
    // }

    // function openModal() {
    //     modal.classList.add("show");
    //     modal.classList.remove("hide");
    //     document.body.style.overflow = "hidden";
    //     clearInterval(modalTimerId);
    // }

    // modalTrigger.forEach((item) => {
    //     item.addEventListener("click", openModal);
    // });

    // modal.addEventListener("click", (e) => {
    //     if (e.target == modal || e.target.getAttribute("data-close") == "") {
    //         closeModal();
    //     }
    // });

    // document.addEventListener("keydown", (e) => {
    //     if (e.code === "Escape" && modal.classList.contains("show")) {
    //         closeModal();
    //     }
    // });

    // const modalTimerId = setTimeout(openModal, 5000);

    // function showModalByScroll() {
    //     if (
    //         window.pageYOffset + document.documentElement.clientHeight >=
    //         document.documentElement.scrollHeight
    //     ) {
    //         openModal();
    //         window.removeEventListener("scroll", showModalByScroll);
    //     }
    // }

    // window.addEventListener("scroll", showModalByScroll);

    //class
    // class MenuCard {
    //     constructor(src, alt, title, descr, price, parentSelector, ...classes) {
    //         this.src = src;
    //         this.alt = alt;
    //         this.title = title;
    //         this.descr = descr;
    //         this.price = price;
    //         this.classes = classes;
    //         this.parent = document.querySelector(parentSelector, ...classes);
    //         this.transfer = 11000;
    //         this.changeToUZS();
    //     }

    //     changeToUZS() {
    //         this.price = this.price * this.transfer;
    //     }

    //     render() {
    //         const element = document.createElement("div");

    //         if (this.classes.length === 0) {
    //             this.element = "menu__item";
    //             element.classList.add(this.element);
    //         } else {
    //             this.classes.forEach((classname) =>
    //                 element.classList.add(classname)
    //             );
    //         }

    //         element.innerHTML = `

    //         <img src=${this.src} alt=${this.alt} />
    //         <h3 class="menu__item-subtitle">${this.title}</h3>
    //         <div class="menu__item-descr">${this.descr}</div>
    //         <div class="menu__item-divider"></div>
    //         <div class="menu__item-price">
    //           <div class="menu__item-cost">Price:</div>
    //           <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
    //         </div>

    //         `;
    //         this.parent.append(element);
    //     }
    // }

    // axios.get("http://localhost:3000/menu").then((data) => {
    //     //bu axiosda qilingani

    //     data.data.forEach(({ img, altimg, title, descr, price }) => {
    //         new MenuCard(
    //             img,
    //             altimg,
    //             title,
    //             descr,
    //             price,
    //             ".menu .container"
    //         ).render();
    //     });
    // });

    //// async function getRecource(url) {//bu qo'lda qilingani
    ////     const res = await fetch(url);
    ////     return await res.json();
    //// }
    //// getRecource("http://localhost:3000/menu").then((data) => {
    ////     data.forEach(({ img, altimg, title, descr, price }) => {
    ////         new MenuCard(
    ////             img,
    ////             altimg,
    ////             title,
    ////             descr,
    ////             price,
    ////             ".menu .container"
    ////         ).render();
    ////     });
    //// });

    //// new MenuCard(
    ////     "img/tabs/1.png",
    ////     "usual",
    ////     "Plan 'Usual'",
    ////     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.",
    ////     10,
    ////     ".menu .container"
    //// ).render();

    //// new MenuCard(
    ////     "img/tabs/2.jpg",
    ////     "plan",
    ////     "Plan 'Premium'",
    ////     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.",
    ////     20,
    ////     ".menu .container",
    ////     "menu__item"
    //// ).render();

    //// new MenuCard(
    ////     "img/tabs/3.jpg",
    ////     "vip",
    ////     "Plan 'VIP'",
    ////     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.",
    ////     30,
    ////     ".menu .container",
    ////     "menu__item"
    //// ).render();

    // //form

    // const forms = document.querySelectorAll("form");

    // forms.forEach((form) => {
    //     bindPostData(form);
    // });

    // const msg = {
    //     loading: "img/spinner.svg", //loader file svg chiqadi net sekinligida
    //     success: " Thank's for submiting our form",
    //     failure: "Something went wrong",
    // };

    // async function postData(url, data) {
    //     const res = await fetch(url, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: data,
    //     });

    //     //// if (!res.ok){
    //     ////     throw new Error(`Cold not fetch ${url}, status ${res.status} `)
    //     //// }

    //     return await res.json();
    // }

    // function bindPostData(form) {
    //     form.addEventListener("submit", (e) => {
    //         e.preventDefault();

    //         const statusMessage = document.createElement("img");
    //         statusMessage.src = msg.loading;
    //         // statusMessage.textContent = msg.loading;
    //         statusMessage.style.cssText = `
    //         display:block;
    //         margin: 0 auto;
    //         `;

    //         ////////////////////////////////////////////////////////////////
    //         //// form.append(statusMessage);
    //         ////////////////////////////////////////////////////////////////

    //         form.insertAdjacentElement("afterend", statusMessage); //shu joyda nimadur muammo bor???

    //         //// const request = new XMLHttpRequest();

    //         //// request.open("POST", "http://localhost:3000/request");

    //         //// request.setRequestHeader("Content-Type", "application/json");

    //         const formData = new FormData(form);

    //         const json = JSON.stringify(Object.fromEntries(formData.entries()));

    //         //// const obj = {x:10, y:20}
    //         //// console.log(Object.entries(obj));//objectni massivga ayalantirish

    //         postData("http://localhost:3000/request", json)
    //             .then((data) => {
    //                 console.log(data);
    //                 showThanksModal(msg.success);
    //                 statusMessage.remove();
    //             })
    //             .catch(() => {
    //                 showThanksModal(msg.failure);
    //             })
    //             .finally(() => {
    //                 form.reset();
    //             });
    //         /////////////////////////////////////////////////////////////////
    //         //// const json = JSON.stringify(obj);
    //         //// request.send(json);
    //         /////////////////////////////////////////////////////////////////

    //         ///////////////////////////////////////////////////////////////
    //         //// request.addEventListener("load", () => {
    //         ////     if (request.status === 200) {
    //         ////         console.log(request.response);
    //         ////         showThanksModal(msg.success);
    //         ////         form.reset();
    //         ////         setTimeout(() => {
    //         ////             statusMessage.remove();
    //         ////         }, 4000);
    //         ////     } else {
    //         ////         showThanksModal(msg.failure);
    //         ////     }
    //         //// });
    //         ////////////////////////////////////////////////////////////
    //     });
    // }

    // function showThanksModal(message) {
    //     const prewModalDialog = document.querySelector(".modal__dialog");
    //     prewModalDialog.classList.add("hide");
    //     openModal();

    //     const thanksModal = document.createElement("div");
    //     thanksModal.classList.add("modal__dialog");
    //     thanksModal.innerHTML = `
    //   <div class="modal__content">
    //   <div data-close class="modal__close">&times;</div>
    //   <div class="modal__title">${message}</div>

    //   </div>

    //     `;
    //     document.querySelector(".modal").append(thanksModal);
    //     setTimeout(() => {
    //         thanksModal.remove();
    //         prewModalDialog.classList.add("show");
    //         prewModalDialog.classList.remove("hide");
    //         closeModal();
    //     }, 4000);
    // }

    ////////////////////slider darsi

    //// const slides = document.querySelectorAll(".offer__slide"),
    ////     next = document.querySelector(".offer__slider-next"),
    ////     prev = document.querySelector(".offer__slider-prev"),
    ////     total = document.querySelector("#total"),
    ////     current = document.querySelector("#current");

    //// let slideIndex = 1;
    //// showSlides(slideIndex);
    //// if (slides.length < 10) {
    ////     total.textContent = `0${slides.length}`;
    //// } else {
    ////     total.textContent = slides.length;
    //// }
    //// function showSlides(idx) {
    ////     if (idx > slides.length) {
    ////         slideIndex = 1;
    ////     }
    ////     if (idx < 1) {
    ////         slideIndex = slides.length;
    ////     }
    ////     slides.forEach((item) => (item.style.display = "none"));
    ////     slides[slideIndex - 1].style.display = "block";

    ////     if (slides.length < 10) {
    ////         current.textContent = `0${slideIndex}`;
    ////     } else {
    ////         current.textContent = slideIndex;
    ////     }
    //// }
    //// function plusSlides(idx) {
    ////     showSlides((slideIndex += idx));
    //// }
    //// next.addEventListener("click", () => {
    ////     plusSlides(1);
    //// });
    //// prev.addEventListener("click", () => {
    ////     plusSlides(-1);
    //// });

    /////////////////slider darsi

    /////////////////carusel darsi

    // const slides = document.querySelectorAll(".offer__slide"),
    //     next = document.querySelector(".offer__slider-next"),
    //     prev = document.querySelector(".offer__slider-prev"),
    //     total = document.querySelector("#total"),
    //     current = document.querySelector("#current"),
    //     slidesWrapper = document.querySelector(".offer__slider-wrapper"),
    //     slidesField = document.querySelector(".offer__slider-inner"),
    //     width = window.getComputedStyle(slidesWrapper).width,
    //     sldier = document.querySelector(".offer__slider")

    //     // console.log(width);

    // let slideIndex = 1;
    // let offset = 0;
    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    //     current.textContent = `0${slideIndex}`;
    // } else {
    //     total.textContent = slides.length;
    //     current.textContent = slideIndex;
    // }
    // slidesField.style.width = 100 * slides.length + "%";
    // slidesField.style.display = "flex";
    // slidesField.style.transition = ".9s ease all";
    // slidesWrapper.style.overflow = "hidden";
    // slides.forEach(slide => {
    //     slide.style.width = width;
    // });
    // const indicators = document.createElement("ol");
    // const dots = [];
    // console.log(dots);
    // indicators.classList.add("carousel-indicators");
    // sldier.append(indicators);
    // for (let i = 0; i < slides.length; i++) {
    //     const dot = document.createElement("li");
    //     dot.setAttribute("data-slide-to", i + 1);
    //     dot.classList.add("carousel-dot");
    //     if (i == 0) {dot.style.opacity = 1}
    //     indicators.append(dot);
    //     dots.push(dot);
    // }

    // next.addEventListener("click", () => {
    //     if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
    //         offset = 0;
    //     } else {
    //         offset += +width.slice(0, width.length - 2);
    //     }
    //     slidesField.style.transform = `translateX(-${offset}px)`;
    //     if (slideIndex == slides.length) {
    //         slideIndex = 1;
    //     } else {
    //         slideIndex++;
    //     }
    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    //     dots.forEach((dot) => (dot.style.opacity = ".5"));
    //     dots[slideIndex - 1].style.opacity = 1;
    // });

    // prev.addEventListener("click", () => {
    //     if (offset == 0) {
    //         offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    //     } else {
    //         offset -= +width.slice(0, width.length - 2);
    //     }
    //     slidesField.style.transform = `translateX(-${offset}px)`;
    //     /////////////////////////////////
    //     if (slideIndex == slides.length) {
    //         slideIndex = slides.length;
    //     } else {
    //         slideIndex--;
    //     }//???????????????????????????????
    //     /////////////////////////////////
    //     //// if (slideIndex = 1) {
    //     ////     slideIndex = slides.length;
    //     //// } else {
    //     ////     slideIndex--;
    //     //// }
    //     //////////////////////////////
    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    //     dots.forEach((dot) => (dot.style.opacity = ".5"));
    //     dots[slideIndex - 1].style.opacity = 1;
    // });
    // dots.forEach((dot) => {
    //     dot.addEventListener("click", (e) => {
    //         const slideTo = e.target.getAttribute("data-slide-to");
    //         slideIndex = slideTo;
    //         offset = +width.slice(0, width.length - 2) * (slideTo - 1);
    //         slidesField.style.transform = `translateX(-${offset}px)`;
    //         if (slides.length < 10) {
    //             current.textContent = `0${slideIndex}`;
    //         } else {
    //             current.textContent = slideIndex;
    //         }
    //         dots.forEach((dot) => (dot.style.opacity = ".5"));
    //         dots[slideIndex - 1].style.opacity = 1;
    //     });
    // });
});

// npx json-server --watch db.json //windowsda shunday yozilar ekan
//3-modul-loyiha-form-json-with-the-xampp-with the server-json local file

//yuqoridagi forms server yo'qligi uchun ishlamadi//

// fetch("http://localhost:3000/menu")
//     .then((data) => data.json())
//     .then((res) => console.log(res));

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map