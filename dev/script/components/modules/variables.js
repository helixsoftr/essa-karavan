// GLOBAL VARIABLES
// ------------------------------------------------------------
window.body = document.querySelector('body');
window.header = document.querySelector('header');
window.footer = document.querySelector('footer');
window.main = document.querySelector('main');
window.windowWidth = window.innerWidth;
window.windowHeight = window.innerHeight;
window.mobileLimit = 1024;

// LIBRARIES
// ------------------------------------------------------------

// FancyBox
import { Fancybox } from '@fancyapps/ui'
window.Fancybox = Fancybox

// FancyBox Settings
Fancybox.defaults.placeFocusBack = 0;
Fancybox.defaults.autoFocus = false;
Fancybox.defaults.trapFocus = false;
Fancybox.defaults.dragToClose = false;

Fancybox.bind("[data-fancybox]", {
    on: {
        "*": (event, fancybox, slide) => {
            // console.log(`event: ${event}`);
        },
        done: (fancybox, slide) => {
            smoother.stop();
        },
        destroy: (fancybox, slide) => {
            smoother.start();
        },
    },
    Toolbar: {
        display: {
            left: ["infobar"],
            middle: [],
            right: ["thumbs", "close"],
        },
    },
});

// JS Cookie
// --------------------------------------------------------
import Cookies from 'js-cookie'
window.Cookies = Cookies;

// PrintJS
// --------------------------------------------------------
/* import PrintJS from 'print-js'
window.PrintJS = PrintJS; */

// Flatpckr
// --------------------------------------------------------
/* import flatpickr from 'flatpickr/dist/flatpickr.min.js';
window.flatpickr = flatpickr; */

// Tippy
// --------------------------------------------------------
/* import tippy from 'tippy.js';
window.tippy = tippy; */
