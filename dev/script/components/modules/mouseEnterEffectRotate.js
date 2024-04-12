// * dont forget to add mouseEnterEffectRotate="wrapper" to the wrapper object and mouseEnterEffectRotate="object" to the child element
// * you can use anythign you want img video element

// ? <li mouseEnterEffectTranslate="wrapper" class="w-[200px] aspect-square">
// ? <img mouseEnterEffectTranslate="object" class="w-full h-full object-cover object-center" src="https://picsum.photos/200/300" alt="">
// ? </li>

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('[mouseEnterEffectRotate]')) {
        let wrappers = document.querySelectorAll('[mouseEnterEffectRotate="wrapper"]');
        let childs = document.querySelectorAll('[mouseEnterEffectRotate="object"]');
        let value = 20;

        wrappers.forEach((p, i) => {
            p.style.overflow = 'hidden';
            childs[i].style.transformStyle = 'preserve-3d';
            p.addEventListener('mouseleave', () => {
                childs[i].style.transform = `rotateX(0deg) rotateY(0deg)`;
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

                let oX = (mX / (cRect.width / 2)) * value;
                let oY = -1 * (mY / (cRect.height / 2)) * value;

                childs[i].style.transform = `rotateX(${oY}deg) rotateY(${oX}deg)`;
            });
        });
    }
})