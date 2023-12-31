function slider() {
    const slides = document.querySelectorAll(".offer__slide"),
        next = document.querySelector(".offer__slider-next"),
        prev = document.querySelector(".offer__slider-prev"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner"),
        width = window.getComputedStyle(slidesWrapper).width,
        sldier = document.querySelector(".offer__slider");
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

module.exports = slider