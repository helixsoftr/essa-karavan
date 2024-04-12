// ! dont forget to import base.js and satatic.js BEFORE this script

// * this function will add 'is-static' and 'is-hidden' classes to the navbar relative to the scroll event
// * while scroll going down function gonna add 'is-hidden' and while scroll going up it will remove 'is-hidden' and while document didint scroll and still top of it it will add s

// ? <header class="bg-black h-[100px] fixed top-0 left-0 w-full [&.is-static]:bg-red-400 [&.is-hidden]:-translate-y-full duration-450">

multipleEventListener(window, "DOMContentLoaded scroll", () => {
    switch (scrollDirection) {
        case "up":
            navbar.classList.remove("is-static");
            navbar.classList.remove("is-hidden");
            break;
        case "down":
            navbar.classList.remove("is-static");
            navbar.classList.add("is-hidden");
            break;
        case "static":
            navbar.classList.add("is-static");
            break;
    }
});

document.querySelectorAll("[data-navbarSpaceFix]").forEach((e) => {
    multipleEventListener(window, "DOMContentLoaded resize", () => {
        switch (e.getAttribute("data-navbarSpaceFix")) {
            case "margin":
                e.style.marginTop = `${navbarHeight}px`;
                break;
            case "padding":
                e.style.paddingTop = `${navbarHeight}px`;
                break;
            default:
                break;
        }
    });
});
