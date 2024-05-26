if (devices()[0] == 'Desktop') {
    if (document.querySelector('[gsapReverseScroll]')) {
        let reverseScrollrappers = document.querySelectorAll('[gsapReverseScroll="wrapper"]');

        reverseScrollrappers.forEach(p => {
            let childs = document.querySelectorAll('[gsapReverseScroll="object"]');

            childs.forEach((c, i) => {
                let value = c.getAttribute('gsapReverseScroll-value') || 10;
                let direction = c.getAttribute('gsapReverseScroll-direction') || 'y';

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: c.closest('[gsapReverseScroll="wrapper"]'),
                        start: '-30% center',
                        end: '130% center',
                        scrub: 2,
                    }
                })

                switch (direction) {
                    case 'y':
                        tl.set(c, {
                            y: `${value}%`,
                        })
                        tl.to(c, {
                            y: `${-1 * value}%`,
                        })
                        break;
                    case 'x':
                        tl.set(c, {
                            x: `${value}%`,
                        })
                        tl.to(c, {
                            x: `${-1 * value}%`,
                        })
                        break;
                }
            });
        });
    }
}