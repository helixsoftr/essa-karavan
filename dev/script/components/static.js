window.navbar;
window.navbarHeight;

if (document.querySelector("header")) {
    navbar = document.querySelector("header");
    navbarHeight = navbar.offsetHeight;

    multipleEventListener(
        window,
        "DOMContentLoaded scroll resize",
        function () {
            navbarHeight = navbar.offsetHeight;
        }
    );
}

window.scrollDirection = "static";

let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", function handleScroll() {
    const scrollTopPosition =
        window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTopPosition <= navbarHeight) {
        scrollDirection = "static";
    } else if (scrollTopPosition > lastScrollTop) {
        setTimeout(() => {
            scrollDirection = "down";
        }, 0);
    } else if (scrollTopPosition < lastScrollTop) {
        setTimeout(() => {
            scrollDirection = "up";
        }, 0);
    }
    lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
});
