/* 
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <circle opacity="1" cx="50" cy="50" r="50" stroke="red"></circle>
    <circle id="filler" opacity="1" cx="50" cy="50" r="50" stroke="blue" stroke-width="3px"></circle>
</svg>
*/

let swiperName = new Swiper(".swiperName", {
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
})

let circleEl = document.querySelector('#filler');
let circleR = 50; // radius of the circle

circleEl.style.strokeDasharray = Math.PI * 2 * circleR;
circleEl.style.strokeDashoffset = Math.PI * 2 * circleR;

swiperName.on('autoplayTimeLeft', (swiperEl, time, perc) => {
    circleEl.style.strokeDashoffset = `${Math.PI * 2 * circleR * perc}`;
})