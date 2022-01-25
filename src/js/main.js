// Swiper slide
let screenWidth = window.screen.width
let slideN = 1
if (screenWidth < 1507) { //1507px
    slideN = 0
} else {
    slideN = 1
}
// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
    initialSlide: slideN,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
});

//m-menu 

document.getElementById("header__menu-button").onclick = function () {
    openClose()
};

document.getElementById("cross-sym").onclick = function () {
    openClose()
};

document.getElementById("mobile-menu__link").onclick = function () {
    openClose()
};

function openClose() {
    document.getElementById("header__mobile-menu").classList.toggle("show");
    document.body.classList.toggle('locked');
}
