const btn = document.querySelector(".about-btn button")
btn.addEventListener("click",()=> {
    document.querySelector(".about-modal").style.display = "block"
})

const close = document.querySelector(".about-modal-bg-square div")
close.addEventListener("click",() => {
    document.querySelector(".about-modal").style.display = "none"
})