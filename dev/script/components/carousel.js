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
// CURRENT WORKS & INSTAGRAM
// ========================================================================================
if (document.querySelector(".worksAndInsta-slider")) {
    let worksAndInsta = new Swiper(".worksAndInsta-slider", {
        modules: [A, P, N, Px, EC, T],
        slidesPerView: 3.5,
        speed: 1500,
        spaceBetween: 32,
        watchSlidesProgress: true,
        parallax: true,
        loop: true,
        direction: "horizontal",
        allowTouchMove: true,
        navigation: {
            nextEl: ".worksAndInsta-next",
            prevEl: ".worksAndInsta-prev",
            disabledClass: "disabled",
        },
        autoplay: {
            delay: 5000,
        },
    });
}

// ========================================================================================
//  GALLERY
// ========================================================================================
if (document.querySelector(".gallery-slider")) {
    let gallerySlider = new Swiper(".gallery-slider", {
        modules: [A, P, N, Px, EC, T],
        slidesPerView: 4,
        spaceBetween: 32,
        speed: 4000,
        watchSlidesProgress: true,
        parallax: true,
        loop: true,
        direction: "horizontal",
        allowTouchMove: true,
        freeMode: true,
        autoplay: {
            delay: 0.8,
            disableOnInteraction: true,
            pauseOnMouseEnter: false,
        },
    });
}

// ========================================================================================
//  CUSTOMERS EXPERİENCES
// ========================================================================================
if (document.querySelector(".customersExperiences-slider")) {
    let customersExperiences = new Swiper(".customersExperiences-slider", {
        modules: [A, P, N, Px, EC, T],
        slidesPerView: 2.5,
        speed: 1500,
        spaceBetween: 32,
        watchSlidesProgress: true,
        parallax: true,
        loop: true,
        direction: "horizontal",
        allowTouchMove: true,
        navigation: {
            nextEl: ".customersExperiences-next",
            prevEl: ".customersExperiences-prev",
            disabledClass: "disabled",
        },
        // autoplay: {
        //     delay: 5000,
        // },
    });
}
