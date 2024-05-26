if (devices()[0] == "Desktop") {
    if (document.querySelector("[customScrollbar]")) {
        const track = document.querySelector('[customScrollbar="track"]');
        const thumb = document.querySelector('[customScrollbar="thumb"]');

        gsap.to(document.body, {
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",

                onUpdate: (e) => {
                    gsap.to(thumb, {
                        top: `calc(${e.progress * 90}%)`,
                    });
                },
            },
        });

        track.addEventListener("click", (e) => {
            let percantage = (e.clientY / track.offsetHeight) * 100;
            let location = (document.body.offsetHeight / 100) * percantage;
            smoother.scrollTo(document.body, {
                offset: location,
            });
        });
    }
}
