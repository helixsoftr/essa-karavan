// * dont forget to add mouseEnterEffectTranslate="wrapper" to the wrapper object and mouseEnterEffectTranslate="object" to the child element
// * you can use anythign you want img video element

// ? <li mouseEnterEffectTranslate="wrapper" class="w-[200px] aspect-square">
// ? <img mouseEnterEffectTranslate="object" class="w-full h-full object-cover object-center" src="https://picsum.photos/200/300" alt="">
// ? </li>


if (document.querySelector('[mouseEnterEffectTranslate]')) {
    let wrappers = document.querySelectorAll('[mouseEnterEffectTranslate="wrapper"]');
    let childs = document.querySelectorAll('[mouseEnterEffectTranslate="object"]');
    let vaule = 5;

    wrappers.forEach((p, i) => {
        p.style.overflow = 'hidden';
        childs[i].style.scale = `1.${vaule}`;
        p.addEventListener('mouseleave', () => {
            childs[i].style.transform = `translateY(0) translateX(0)`;
            childs[i].style.transition = `transform .5s`;
        });
        p.addEventListener('mouseenter', () => {
            childs[i].style.transition = 'transform .1s';
        });
        p.addEventListener('mousemove', (e) => {
            let cRect = p.getBoundingClientRect();

            let x = e.clientX - cRect.left;
            let y = e.clientY - cRect.top;

            let mX = x - cRect.width / 2;
            let mY = y - cRect.height / 2;

            let oX = (mX / (cRect.width / 2)) * vaule;
            let oY = (mY / (cRect.height / 2)) * vaule;

            childs[i].style.transform = `translateY(${oY}px) translateX(${oX}px)`;
        });
    });
}