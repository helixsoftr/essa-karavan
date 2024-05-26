if (document.querySelector('[gsapToggler]')) {
    const gs = document.querySelectorAll('[gsapToggler]');

    gs.forEach(g => {
        gsap.to(g, {
            scrollTrigger: {
                trigger: g,
                start: 'top center',
                end: '+=100000px center',
                onEnter: () => {
                    g.classList.add(g.getAttribute('gsaptoggler'));
                }
            }
        })
    });
}