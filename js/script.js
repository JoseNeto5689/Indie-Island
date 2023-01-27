const menu = document.querySelector("div#menu")
const modal = document.querySelector("div#modal")
const backLink = document.querySelector("a h3#backToPage") 
const stores = document.querySelector("#stores")
const body = document.querySelector("body")

function openModal(){
    modal.style.display = "flex"
    menu.style.zIndex = -1
    body.style.overflowY = "hidden";
}
function closeModal(){
    modal.style.display = "none"
    menu.style.zIndex = 1
    body.style.overflowY = "auto";
}

function navigateToStores(){
    stores.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}

menu.addEventListener("click", openModal)
backLink.addEventListener('click', closeModal)


const button = document.querySelectorAll("#call-button")

button.forEach((item) => {
    item.addEventListener("click", navigateToStores)
})