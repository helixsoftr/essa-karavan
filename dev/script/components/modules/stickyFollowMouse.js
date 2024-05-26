if (document.querySelectorAll("[data-follow]")) {
    let parent = document.querySelectorAll('[data-follow="parent"]');
    let child = document.querySelectorAll('[data-follow="childs"]');
    let object = document.querySelector('[data-follow="object"]');

    parent.forEach((pElement) => {
        pElement.addEventListener("mouseenter", () => {
            let rect = pElement.getBoundingClientRect();

            child.forEach((cElement) => {
                cElement.addEventListener("mouseenter", () => {
                    object.style.opacity = 1;
                    object.style.left = `${cElement.offsetLeft - 3}px`;
                    object.style.width = `${cElement.clientWidth + 6}px`;
                });

                cElement.addEventListener("mouseleave", () => {
                    object.style.opacity = 0;
                });
            });
        });
    });
}
