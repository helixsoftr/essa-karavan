import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

window.ScrollTrigger = ScrollTrigger;
window.gsap = gsap;
window.Lenis = Lenis;

// import Lenis from '@studio-freight/lenis';
// window.Lenis = Lenis;

window.smoother = new Lenis({
    duration: 1.7,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    syncTouch: true,
});

function raf(time) {
    smoother.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

if (document.querySelector("[data-smooth]")) {
    let buttons = document.querySelectorAll("[data-smooth]");
    buttons.forEach((element) => {
        let offsetValue =
            parseInt(element.getAttribute("data-smooth-offset")) || 0;
        element.addEventListener("click", () => {
            smoother.scrollTo(element.getAttribute("data-smooth"), {
                offset: offsetValue,
            });
        });
    });
}

if (document.querySelector("[data-stopLenis]")) {
    document.querySelectorAll("[data-stopLenis]").forEach((e) => {
        e.addEventListener("mouseenter", () => {
            smoother.stop();
        });
        e.addEventListener("mouseleave", () => {
            smoother.start();
        });
    });
}

function onClassChange(element, callback) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (
                mutation.type === "attributes" &&
                mutation.attributeName === "class"
            ) {
                callback(mutation.target);
            }
        });
    });
    observer.observe(element, { attributes: true });
    return observer.disconnect;
}

var itemToWatch = document.querySelector("body");
onClassChange(itemToWatch, (node) => {
    if (node.classList.contains("active")) {
        smoother.stop();
    } else {
        smoother.start();
    }
});
