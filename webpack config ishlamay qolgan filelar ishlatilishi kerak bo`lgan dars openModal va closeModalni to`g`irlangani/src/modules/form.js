

const openModal = require('./modal');
openModal();//BUNDAN KEYINGI FIX BUG DARSIDA LOCAL FUNCSIYANI EXPORT INPORT QILISHNI BOSHQA YO'LI BORT USTOZ O'TGANI

const closeModal = require('./modal');
closeModal();//BUNDAN KEYINGI FIX BUG DARSIDA LOCAL FUNCSIYANI EXPORT INPORT QILISHNI BOSHQA YO'LI BORT USTOZ O'TGANI


function form() {
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
        bindPostData(form);
    });
    const msg = {
        loading: "img/spinner.svg",
        success: " Thank's for submiting our form",
        failure: "Something went wrong",
    };
    async function postData(url, data) {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        });
        return await res.json();
    }
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
            postData("http://localhost:3000/request", json)
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
        openModal();
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
            closeModal();
        }, 4000);
    }
}



module.exports = form;
