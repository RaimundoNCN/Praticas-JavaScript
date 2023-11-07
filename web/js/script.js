const form = document.querySelector("#form")
const nameinput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const locationdSelect = document.querySelector("#location")
const messageTextarea = document.querySelector("#message")

/*form.addEventListener("submit").Event(
    Event.preventDefault()
);*/


form.addEventListener("submit", (Event) => {
    Event.preventDefault();
    if(nameinput.value === null ){
        alert("Campo 'Nome' não pode ser vazio!");
        return;
    }
});
