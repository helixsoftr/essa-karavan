import Swiper from "swiper";
import {
    Navigation,
    Pagination,
    EffectCreative,
    EffectCoverflow,
    EffectFade,
    Parallax,
    Autoplay,
    Grid,
    Thumbs,
    Controller,
} from "swiper/modules";
window.Swiper = Swiper;
window.N = Navigation;
window.P = Pagination;
window.EC = EffectCreative;
window.EF = EffectFade;
window.ECo = EffectCoverflow;
window.Px = Parallax;
window.A = Autoplay;
window.G = Grid;
window.T = Thumbs;
window.C = Controller;

// ========================================================================================
//  HOMEPAGE HERO SLİDER
// ========================================================================================
if (document.querySelector(".hero-slider")) {
    let heroSlider = new Swiper(".hero-slider", {
        modules: [A, P, N, Px, EC, T],
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 0,
        watchSlidesProgress: true,
        parallax: true,
        loop: true,
        direction: "horizontal",
        allowTouchMove: true,
        pagination: {
            el: ".hero-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
            disabledClass: "disabled",
        },
        autoplay: {
            delay: 8000,
        },
    });
}

// ========================================================================================
// CURRENT WORKS
// ========================================================================================
if (document.querySelector(".works-slider")) {
    let currentWorks = new Swiper(".works-slider", {
        modules: [A, P, N, Px, EC, T],
        slidesPerView: 3.5,
        speed: 1000,
        spaceBetween: 32,
        watchSlidesProgress: true,
        parallax: true,
        loop: true,
        direction: "horizontal",
        allowTouchMove: true,
        navigation: {
            nextEl: ".works-next",
            prevEl: ".works-prev",
            disabledClass: "disabled",
        },
        // autoplay: {
        //     delay: 8000,
        // },
    });
}
