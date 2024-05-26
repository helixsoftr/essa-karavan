const fakeDuration = 2000;
const animationClassName = 'animate-reveal';
const preLoaderClassName = '#preloader';
const loadingClassName = 'loading';
const preLoader = document.querySelector(preLoaderClassName);
const body = document.querySelector('body');

const isFirstVisit = sessionStorage.getItem('firstVisit');
if (!isFirstVisit) {
    sessionStorage.setItem('firstVisit', 'true');
    localStorage.setItem('showPreloader', 'true');
} else {
    localStorage.removeItem('showPreloader');
}

function togglePreloader() {
    if (localStorage.getItem('showPreloader') === 'true') {
        preLoader.classList.remove('hidden');
        if (document.querySelector(preLoaderClassName)) {
            document.addEventListener('DOMContentLoaded', () => {
                let revealObjects = document.querySelectorAll(`.${animationClassName}`);
                let revealObjectsBefore = document.querySelectorAll(`.before\\:${animationClassName}`);
                let revealObjectsAfter = document.querySelectorAll(`.after\\:${animationClassName}`);

                revealObjects.forEach(e => {
                    e.classList.remove(animationClassName);
                });
                revealObjectsBefore.forEach(e => {
                    e.classList.remove(`before:${animationClassName}`);
                });
                revealObjectsAfter.forEach(e => {
                    e.classList.remove(`after:${animationClassName}`);
                });

                setTimeout(() => {
                    body.classList.remove(loadingClassName);
                    preLoader.classList.remove(loadingClassName);

                    revealObjects.forEach(e => {
                        e.classList.add(animationClassName);
                    });
                    revealObjectsBefore.forEach(e => {
                        e.classList.add(`before:${animationClassName}`);
                    });
                    revealObjectsAfter.forEach(e => {
                        e.classList.add(`after:${animationClassName}`);
                    });
                }, fakeDuration);

                setTimeout(() => {
                    preLoader.remove();
                }, fakeDuration + 1000);
            })
        }
    } else {
        body.classList.remove(loadingClassName);
        preLoader.remove();
    }
}

togglePreloader();

//custom effect : 
if (devices()[0] == 'Mobile') {
    var time = 10;
} else {
    var time = 20;
}

for (let i = 0; i < time; i++) {
    let span = document.createElement('span');
    span.style.cssText = `
        position: absolute;
        z-index: -1;
        display: block;
        width: ${10 + i * 100}px;
        height: ${10 + i * 100}px;
        border: solid rgba(255,255,255,.1) 1px;
        border-radius: 100%;
        box-shadow: 0 0 10px rgba(255,255,255,.1);
        animation-duration: 1.2s;
        animation-delay: ${i / 10}s;
        opacity: 0;
    `;
    span.classList.add('animate-pulse');
    preLoader.appendChild(span);
}