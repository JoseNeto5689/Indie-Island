const images = document.querySelectorAll(".game-gallery")
const closeImage = document.querySelector("#closeImage")
const modalImage = document.querySelector(".modal-image")
const image = document.querySelector("#image")

closeImage.addEventListener("click", (event) => {
    modalImage.style.display = "none"
})

images.forEach((item) => {
    item.addEventListener("click", (event) => {
        image.src = event.target.src
        modalImage.style.display = "flex"
    })
})
