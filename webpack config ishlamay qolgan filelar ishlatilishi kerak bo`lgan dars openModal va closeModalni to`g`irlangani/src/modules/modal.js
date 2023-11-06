

function modal() {
    const modalTrigger = document.querySelectorAll("[data-modal]"),
        modal = document.querySelector(".modal");

    function closeModal() {
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }

    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerId);
    }

    module.exports = openModal;//BUNDAN KEYINGI FIX BUG DARSIDA LOCAL FUNCSIYANI EXPORT INPORT QILISHNI BOSHQA YO'LI BORT USTOZ O'TGANI
    module.exports = closeModal;//BUNDAN KEYINGI FIX BUG DARSIDA LOCAL FUNCSIYANI EXPORT INPORT QILISHNI BOSHQA YO'LI BORT USTOZ O'TGANI

    modalTrigger.forEach((item) => {
        item.addEventListener("click", openModal);
    });
    modal.addEventListener("click", (e) => {
        if (e.target == modal || e.target.getAttribute("data-close") == "") {
            closeModal();
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });
    const modalTimerId = setTimeout(openModal, 5000);
    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModal();
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", showModalByScroll);
}

module.exports = modal;
