let nav__mobile = document.querySelector('.nav__mobile');
let menuBtn = document.querySelector(".nav__mobile-menubtn");
let main = document.querySelector('.main');

menuBtn.addEventListener("click", () => {
    nav__mobile.classList.toggle('open_menu')
})

main.addEventListener("click", () => {
    nav__mobile.classList.remove('open_menu')
})

main.addEventListener("touchmove", () => {
    nav__mobile.classList.remove('open_menu')

})  