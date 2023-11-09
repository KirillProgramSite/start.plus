let nav__mobile = document.querySelector('.nav__mobile');
let menuBtn = document.querySelector(".nav__mobile-menubtn");
let main = document.querySelector('.main');

function opacityMode() {
    if(nav__mobile.classList.contains('open_menu')){
        menuBtn.style.opacity = 0.5;
    } else {
        menuBtn.style.opacity = 1;
    }
}

menuBtn.addEventListener("click", () => {
    nav__mobile.classList.toggle('open_menu')

   opacityMode()
})

main.addEventListener("click", () => {
    nav__mobile.classList.remove('open_menu')

    opacityMode()
})

main.addEventListener("touchmove", () => {
    nav__mobile.classList.remove('open_menu')

    opacityMode()
})
