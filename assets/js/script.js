/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dev/script/components/base.js":
/*!***************************************!*\
  !*** ./dev/script/components/base.js ***!
  \***************************************/
/***/ (function() {

window.multipleEventListener = function multipleEventListener(element, eventNames, listener) {
  var events = eventNames.split(' ');
  for (var i = 0, iLen = events.length; i < iLen; i++) {
    element.addEventListener(events[i], listener, false);
  }
};
// multipleEventListener(window, 'mousemove touchmove', function () { });

window.decodeScreen = function decodeScreen(value) {
  var device = value.split('-')[0];
  var size = value.split('-')[1];
  return [device, size];
};
window.devices = function devices() {
  let device = 'NaN';
  switch (true) {
    case screen.width >= 1680:
      device = 'Desktop-XL';
      break;
    case screen.width >= 1440:
      device = 'Desktop-LG';
      break;
    case screen.width >= 1280:
      device = 'Desktop-SM';
      break;
    case screen.width >= 768:
      device = 'Tablet-LG';
      break;
    case screen.width >= 624:
      device = 'Tablet-SM';
      break;
    case screen.width >= 480:
      device = 'Mobile-XL';
      break;
    case screen.width >= 376:
      device = 'Mobile-LG';
      break;
    default:
      device = 'Mobile-SM';
      break;
  }
  return decodeScreen(device);
};

/***/ }),

/***/ "./dev/script/components/carousel.js":
/*!*******************************************!*\
  !*** ./dev/script/components/carousel.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


window.Swiper = swiper__WEBPACK_IMPORTED_MODULE_0__["default"];
window.N = swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation;
window.P = swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination;
window.EC = swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectCreative;
window.EF = swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectFade;
window.ECo = swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectCoverflow;
window.Px = swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Parallax;
window.A = swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay;
window.G = swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Grid;
window.T = swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Thumbs;
window.C = swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Controller;

// ========================================================================================
//  HOMEPAGE HERO SLİDER
// ========================================================================================
if (document.querySelector(".hero-slider")) {
  let heroSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".hero-slider", {
    modules: [A, P, N, Px, EC, T],
    slidesPerView: 1,
    speed: 1200,
    spaceBetween: 0,
    watchSlidesProgress: true,
    parallax: true,
    loop: true,
    direction: "horizontal",
    allowTouchMove: true,
    pagination: {
      el: ".hero-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".hero-next",
      prevEl: ".hero-prev",
      disabledClass: "disabled"
    },
    autoplay: {
      delay: 8000
    }
  });
}

// ========================================================================================
// CURRENT WORKS & INSTAGRAM
// ========================================================================================
if (document.querySelector(".worksAndInsta-slider")) {
  let worksAndInsta = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".worksAndInsta-slider", {
    modules: [A, P, N, Px, EC, T],
    slidesPerView: 3.5,
    speed: 1500,
    spaceBetween: 32,
    watchSlidesProgress: true,
    parallax: true,
    loop: true,
    direction: "horizontal",
    allowTouchMove: true,
    navigation: {
      nextEl: ".worksAndInsta-next",
      prevEl: ".worksAndInsta-prev",
      disabledClass: "disabled"
    },
    autoplay: {
      delay: 5000
    }
  });
}

// ========================================================================================
//  GALLERY
// ========================================================================================
if (document.querySelector(".gallery-slider")) {
  let gallerySlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".gallery-slider", {
    modules: [A, P, N, Px, EC, T],
    slidesPerView: 4,
    spaceBetween: 32,
    speed: 4000,
    watchSlidesProgress: true,
    parallax: true,
    loop: true,
    direction: "horizontal",
    allowTouchMove: true,
    freeMode: true,
    autoplay: {
      delay: 0.8,
      disableOnInteraction: true,
      pauseOnMouseEnter: false
    }
  });
}

// ========================================================================================
//  CUSTOMERS EXPERİENCES
// ========================================================================================
if (document.querySelector(".customersExperiences-slider")) {
  let customersExperiences = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".customersExperiences-slider", {
    modules: [A, P, N, Px, EC, T],
    slidesPerView: 2.5,
    speed: 1500,
    spaceBetween: 32,
    watchSlidesProgress: true,
    parallax: true,
    loop: true,
    direction: "horizontal",
    allowTouchMove: true,
    navigation: {
      nextEl: ".customersExperiences-next",
      prevEl: ".customersExperiences-prev",
      disabledClass: "disabled"
    },
    autoplay: {
      delay: 10000
    }
  });
}

/***/ }),

/***/ "./dev/script/components/custom.js":
/*!*****************************************!*\
  !*** ./dev/script/components/custom.js ***!
  \*****************************************/
/***/ (function() {

// this code below designed for moduler toggler event
// with this code you dont need to create custom toggle events from stratch
// this code using data-attributes as hook and settings

// all the hooks and settings =
// --------------data-toggle--------------
// by default = "active"
// data-toggle is for defining youre click object it is neccessary for the code working
// you can change the toggling class with data-toggle for example = data-toggle="open" will add open class isntead of active

// --------------data-target--------------
// by default = "undefined"
// you have to define some target to work with
// when toggle element clicked the target elements class list updated by the toggler class
// you can define class id and tag name for example = data-target="#myTarget" for defining elements with di data-target=".myTargets" for defining class elements, data-target="li" for defining elements via teir tag name
// you can also use querry selection for exammple = data-target="#someelement>.test>li"
// also you can define morethan one object inside of an single data-target with line "|" for example = data-target="#someElement|.someMoreElement|#otherElement"

// --------------data-only--------------
// if you have more than one toggler and toggled element with this attribute you can make it only last clicked filter applied and other disabled
// you need to define clicked object and target element with line "|" for example = data-only=".filter|.filtered"

// --------------data-devices--------------
// you can define which devices can work with
// you can choose only mobile or only desktop
// example = data-devices"mobile" or data-devices="desktop"

// --------------data-itSelf--------------
// normaly our function add and remove some class names to the target elemnent and toggler element
// but if you want to disable for clicked element you can use data-itSelf
// for example = data-itSelf="false" adding this setting disable adding toggler class to the clicked object

// --------------data-animate--------------
// adding this settings set some animation for the toggling
// animaton class will added and removed for the designed duration
// for example = data-animation"bounce|1000" this will add "animate-bounce" and "animation-duration=1000ms"
// dont forget this animations have to added to the tailwind.js with tailwind format or oterwise this code wouldent work

//defining vars
var toggleClassName = "active";
var isOnly = false;
var allToggler;
var allToggled;
var isAniamted = false;
var animation;
var duration;
var isItSelf = true;
var close = false;
var devices = "all";
var disabled = false;
var outside = false;

// document ready
document.addEventListener("DOMContentLoaded", function () {
  // when object clicked
  const buttons = document.querySelectorAll("[data-toggle]");
  buttons.forEach(button => {
    button.addEventListener("click", function () {
      toggle(this, this.getAttribute("data-toggle"), this.getAttribute("data-target"), this.getAttribute("data-only"), this.getAttribute("data-devices"), this.getAttribute("data-itself"), this.getAttribute("data-animate"), this.getAttribute("data-close"));
    });
  });

  //if one of the toggler set default
  if (document.querySelector("[data-default]") != undefined) {
    document.querySelectorAll("[data-default]").forEach(i => {
      i.click();
    });
  }
});

// toggle function
// o = object, otcn = object toggler class name, ot = object targets, oo = object only, od = object devices, oi= object itself, oa = object animate, ou = object outside click
function toggle(o, otcn, ot, oo, od, oi, oa, oc) {
  // define devices
  od != null ? devices = od : devices = "all";
  if (devices == "all") {
    fire();
  } else if (devices == "mobile") {
    if (screen.width <= 1024) {
      fire();
    }
  } else {
    if (screen.width >= 1024) {
      fire();
    }
  }

  // toggle action
  function fire() {
    if (!disabled) {
      // define animate;
      if (oa != null) {
        animation = oa.split("|")[0];
        duration = oa.split("|")[1];
        isAniamted = true;
      } else {
        isAniamted = false;
      }

      // define toggler class name:
      otcn != "" ? toggleClassName = otcn : toggleClassName = "active";

      //define itself:
      oi != undefined ? isItSelf = oi == "true" : true;

      // define togglers and toggled for only one function
      if (oo != undefined) {
        allToggler = oo.split("|")[0];
        allToggled = oo.split("|")[1];
        isOnly = true;
      } else {
        isOnly = false;
      }
      if (oc != undefined) {
        close = oc;
      } else {
        close = false;
      }

      // define is there more than one target
      if (ot == "all") {
        toggledElement = allToggled;
      } else {
        ot.includes("|") ? toggledElement = ot.split("|") : toggledElement = ot;
      }
      if (close && o.classList.contains(toggleClassName)) {
        o.classList.remove(toggleClassName);
        close = false;
        return;
      }

      // fire the toggle action
      if (isOnly) {
        document.querySelectorAll(`${allToggled} , ${allToggler}`).forEach(i => {
          i.classList.remove(toggleClassName);
        });
        document.querySelectorAll(toggledElement).forEach(k => {
          k.classList.toggle(toggleClassName);
        });
      } else {
        document.querySelectorAll(toggledElement).forEach(j => {
          j.classList.toggle(toggleClassName);
        });
      }

      // if its gonna toggle its self end of the action
      if (isItSelf) {
        o.classList.toggle(toggleClassName);
      }

      // if aniamted maintain animation untill duration
      if (isAniamted) {
        disabled = true;
        document.querySelectorAll(allToggled).forEach(i => {
          i.classList.add(`animate-${animation}`);
        });
        setTimeout(() => {
          document.querySelectorAll(allToggled).forEach(i => {
            i.classList.remove(`animate-${animation}`);
          });
          disabled = false;
        }, duration);
      } else {
        disabled = false;
      }
    }
  }
}

// ============================================================================
// Add active class when u focus the input
// ============================================================================

document.querySelectorAll("[data-focus]").forEach(element => {
  element.addEventListener("focusin", function () {
    element.parentElement.classList.add("active");
  });
  element.addEventListener("focusout", function () {
    if (element.value.length > 0) {} else {
      element.parentElement.classList.remove("active");
    }
  });
  element.addEventListener("change", function () {
    element.parentElement.classList.add("active");
    if (element.value.length > 0) {} else {
      element.parentElement.classList.remove("active");
    }
  });
});

// ============================================================================
// COPY PRİNT
// ============================================================================

const copyLink = document.getElementById("copy-link");
const printPage = document.getElementById("print");
if (copyLink && printPage) {
  copyLink.addEventListener("click", () => {
    pageLink = window.location.href;
    navigator.clipboard.writeText(pageLink).then(() => {
      copyLink.classList.add("copied");
      setTimeout(() => {
        copyLink.classList.remove("copied");
      }, 5000);
    });
  });
  printPage.addEventListener("click", () => {
    window.print();
  });
}

/***/ }),

/***/ "./dev/script/components/gsap.js":
/*!***************************************!*\
  !*** ./dev/script/components/gsap.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @studio-freight/lenis */ "./node_modules/@studio-freight/lenis/dist/lenis.mjs");



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.ScrollTrigger = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["default"];
window.gsap = gsap__WEBPACK_IMPORTED_MODULE_0__["default"];
window.Lenis = _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_2__["default"];

// import Lenis from '@studio-freight/lenis';
// window.Lenis = Lenis;

window.smoother = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_2__["default"]({
  duration: 1.7,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  syncTouch: true
});
function raf(time) {
  smoother.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
if (document.querySelector("[data-smooth]")) {
  let buttons = document.querySelectorAll("[data-smooth]");
  buttons.forEach(element => {
    let offsetValue = parseInt(element.getAttribute("data-smooth-offset")) || 0;
    element.addEventListener("click", () => {
      smoother.scrollTo(element.getAttribute("data-smooth"), {
        offset: offsetValue
      });
    });
  });
}
if (document.querySelector("[data-stopLenis]")) {
  document.querySelectorAll("[data-stopLenis]").forEach(e => {
    e.addEventListener("mouseenter", () => {
      smoother.stop();
    });
    e.addEventListener("mouseleave", () => {
      smoother.start();
    });
  });
}
function onClassChange(element, callback) {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        callback(mutation.target);
      }
    });
  });
  observer.observe(element, {
    attributes: true
  });
  return observer.disconnect;
}
var itemToWatch = document.querySelector("body");
onClassChange(itemToWatch, node => {
  if (node.classList.contains("active")) {
    smoother.stop();
  } else {
    smoother.start();
  }
});

/***/ }),

/***/ "./dev/script/components/map.js":
/*!**************************************!*\
  !*** ./dev/script/components/map.js ***!
  \**************************************/
/***/ (function() {

window.initMap = function () {
  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: '29c98d5d2f5a90ff',
    center: latLng,
    zoom: mapZoom,
    streetViewControl: false,
    zoomControl: false,
    disableDefaultUI: true,
    scrollwheel: false
  });
  const markerView = new google.maps.marker.AdvancedMarkerView({
    map,
    position: latLng,
    content: mapMarker
  });
  google.maps.event.addListener(markerView, 'click', function () {
    window.open(mapMarker.href, mapMarker.target);
  });
};
window.initMap = initMap;

/***/ }),

/***/ "./dev/script/components/modules/dynamicNavbar.js":
/*!********************************************************!*\
  !*** ./dev/script/components/modules/dynamicNavbar.js ***!
  \********************************************************/
/***/ (function() {

// ! dont forget to import base.js and satatic.js BEFORE this script

// * this function will add 'is-static' and 'is-hidden' classes to the navbar relative to the scroll event
// * while scroll going down function gonna add 'is-hidden' and while scroll going up it will remove 'is-hidden' and while document didint scroll and still top of it it will add s

// ? <header class="bg-black h-[100px] fixed top-0 left-0 w-full [&.is-static]:bg-red-400 [&.is-hidden]:-translate-y-full duration-450">

multipleEventListener(window, "DOMContentLoaded scroll", () => {
  switch (scrollDirection) {
    case "up":
      navbar.classList.remove("is-static");
      navbar.classList.remove("is-hidden");
      break;
    case "down":
      navbar.classList.remove("is-static");
      navbar.classList.add("is-hidden");
      break;
    case "static":
      navbar.classList.add("is-static");
      break;
  }
});
document.querySelectorAll("[data-navbarSpaceFix]").forEach(e => {
  multipleEventListener(window, "DOMContentLoaded resize", () => {
    switch (e.getAttribute("data-navbarSpaceFix")) {
      case "margin":
        e.style.marginTop = `${navbarHeight}px`;
        break;
      case "padding":
        e.style.paddingTop = `${navbarHeight}px`;
        break;
      default:
        break;
    }
  });
});

/***/ }),

/***/ "./dev/script/components/modules/mouseEnterEffectRotate.js":
/*!*****************************************************************!*\
  !*** ./dev/script/components/modules/mouseEnterEffectRotate.js ***!
  \*****************************************************************/
/***/ (function() {

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
      p.addEventListener('mousemove', e => {
        let cRect = p.getBoundingClientRect();
        let x = e.clientX - cRect.left;
        let y = e.clientY - cRect.top;
        let mX = x - cRect.width / 2;
        let mY = y - cRect.height / 2;
        let oX = mX / (cRect.width / 2) * value;
        let oY = -1 * (mY / (cRect.height / 2)) * value;
        childs[i].style.transform = `rotateX(${oY}deg) rotateY(${oX}deg)`;
      });
    });
  }
});

/***/ }),

/***/ "./dev/script/components/modules/mouseEnterEffectTranslate.js":
/*!********************************************************************!*\
  !*** ./dev/script/components/modules/mouseEnterEffectTranslate.js ***!
  \********************************************************************/
/***/ (function() {

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
    p.addEventListener('mousemove', e => {
      let cRect = p.getBoundingClientRect();
      let x = e.clientX - cRect.left;
      let y = e.clientY - cRect.top;
      let mX = x - cRect.width / 2;
      let mY = y - cRect.height / 2;
      let oX = mX / (cRect.width / 2) * vaule;
      let oY = mY / (cRect.height / 2) * vaule;
      childs[i].style.transform = `translateY(${oY}px) translateX(${oX}px)`;
    });
  });
}

/***/ }),

/***/ "./dev/script/components/modules/variables.js":
/*!****************************************************!*\
  !*** ./dev/script/components/modules/variables.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/index.esm.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
// GLOBAL VARIABLES
// ------------------------------------------------------------
window.body = document.querySelector("body");
window.header = document.querySelector("header");
window.footer = document.querySelector("footer");
window.main = document.querySelector("main");
window.windowWidth = window.innerWidth;
window.windowHeight = window.innerHeight;
window.mobileLimit = 1024;

// LIBRARIES
// ------------------------------------------------------------

// FancyBox

window.Fancybox = _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox;

// FancyBox Settings
_fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.defaults.placeFocusBack = 0;
_fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.defaults.autoFocus = false;
_fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.defaults.trapFocus = false;
_fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.defaults.dragToClose = false;
_fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind("[data-fancybox]", {
  on: {
    "*": (event, fancybox, slide) => {
      // console.log(`event: ${event}`);
    },
    done: (fancybox, slide) => {
      smoother.stop();
    },
    destroy: (fancybox, slide) => {
      smoother.start();
    }
  },
  Toolbar: {
    display: {
      left: ["infobar"],
      middle: [],
      right: ["thumbs", "close"]
    }
  }
});

// JS Cookie
// --------------------------------------------------------

window.Cookies = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"];

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

/***/ }),

/***/ "./dev/script/components/static.js":
/*!*****************************************!*\
  !*** ./dev/script/components/static.js ***!
  \*****************************************/
/***/ (function() {

window.navbar;
window.navbarHeight;
if (document.querySelector("header")) {
  navbar = document.querySelector("header");
  navbarHeight = navbar.offsetHeight;
  multipleEventListener(window, "DOMContentLoaded scroll resize", function () {
    navbarHeight = navbar.offsetHeight;
  });
}
window.scrollDirection = "static";
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", function handleScroll() {
  const scrollTopPosition = window.pageYOffset || document.documentElement.scrollTop;
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

/***/ }),

/***/ "./dev/script/components/test.js":
/*!***************************************!*\
  !*** ./dev/script/components/test.js ***!
  \***************************************/
/***/ (function() {

const url = "";
async function fetchData() {
  var response = await fetch(url);
  var person = new Person(response.name, response.age);
  // var nameAge { name, age } = person;
  test(person);
}
function test(person) {
  document.getElementById("test").innerHTML = person.name;
}

/***/ }),

/***/ "./node_modules/@fancyapps/ui/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@fancyapps/ui/dist/index.esm.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: function() { return /* binding */ Q; },
/* harmony export */   Fancybox: function() { return /* binding */ Oe; },
/* harmony export */   Panzoom: function() { return /* binding */ I; }
/* harmony export */ });
const t = (t, e = 1e4) => (t = parseFloat(t + "") || 0, Math.round((t + Number.EPSILON) * e) / e),
  e = function (t) {
    if (!(t && t instanceof Element && t.offsetParent)) return !1;
    const e = t.scrollHeight > t.clientHeight,
      i = window.getComputedStyle(t).overflowY,
      n = -1 !== i.indexOf("hidden"),
      s = -1 !== i.indexOf("visible");
    return e && !n && !s;
  },
  i = function (t, n = void 0) {
    return !(!t || t === document.body || n && t === n) && (e(t) ? t : i(t.parentElement, n));
  },
  n = function (t) {
    var e = new DOMParser().parseFromString(t, "text/html").body;
    if (e.childElementCount > 1) {
      for (var i = document.createElement("div"); e.firstChild;) i.appendChild(e.firstChild);
      return i;
    }
    return e.firstChild;
  },
  s = t => `${t || ""}`.split(" ").filter(t => !!t),
  o = (t, e, i) => {
    t && s(e).forEach(e => {
      t.classList.toggle(e, i || !1);
    });
  };
class a {
  constructor(t) {
    Object.defineProperty(this, "pageX", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "pageY", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "clientX", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "clientY", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "id", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "time", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "nativePointer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.nativePointer = t, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, this.clientY = t.clientY, this.id = self.Touch && t instanceof Touch ? t.identifier : -1, this.time = Date.now();
  }
}
const r = {
  passive: !1
};
class l {
  constructor(t, {
    start: e = () => !0,
    move: i = () => {},
    end: n = () => {}
  }) {
    Object.defineProperty(this, "element", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "startCallback", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "moveCallback", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "endCallback", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "currentPointers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "startPointers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), this.element = t, this.startCallback = e, this.moveCallback = i, this.endCallback = n;
    for (const t of ["onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur"]) this[t] = this[t].bind(this);
    this.element.addEventListener("mousedown", this.onPointerStart, r), this.element.addEventListener("touchstart", this.onTouchStart, r), this.element.addEventListener("touchmove", this.onMove, r), this.element.addEventListener("touchend", this.onTouchEnd), this.element.addEventListener("touchcancel", this.onTouchEnd);
  }
  onPointerStart(t) {
    if (!t.buttons || 0 !== t.button) return;
    const e = new a(t);
    this.currentPointers.some(t => t.id === e.id) || this.triggerPointerStart(e, t) && (window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur));
  }
  onTouchStart(t) {
    for (const e of Array.from(t.changedTouches || [])) this.triggerPointerStart(new a(e), t);
    window.addEventListener("blur", this.onWindowBlur);
  }
  onMove(t) {
    const e = this.currentPointers.slice(),
      i = "changedTouches" in t ? Array.from(t.changedTouches || []).map(t => new a(t)) : [new a(t)],
      n = [];
    for (const t of i) {
      const e = this.currentPointers.findIndex(e => e.id === t.id);
      e < 0 || (n.push(t), this.currentPointers[e] = t);
    }
    n.length && this.moveCallback(t, this.currentPointers.slice(), e);
  }
  onPointerEnd(t) {
    t.buttons > 0 && 0 !== t.button || (this.triggerPointerEnd(t, new a(t)), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur));
  }
  onTouchEnd(t) {
    for (const e of Array.from(t.changedTouches || [])) this.triggerPointerEnd(t, new a(e));
  }
  triggerPointerStart(t, e) {
    return !!this.startCallback(e, t, this.currentPointers.slice()) && (this.currentPointers.push(t), this.startPointers.push(t), !0);
  }
  triggerPointerEnd(t, e) {
    const i = this.currentPointers.findIndex(t => t.id === e.id);
    i < 0 || (this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), this.endCallback(t, e, this.currentPointers.slice()));
  }
  onWindowBlur() {
    this.clear();
  }
  clear() {
    for (; this.currentPointers.length;) {
      const t = this.currentPointers[this.currentPointers.length - 1];
      this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), this.endCallback(new Event("touchend", {
        bubbles: !0,
        cancelable: !0,
        clientX: t.clientX,
        clientY: t.clientY
      }), t, this.currentPointers.slice());
    }
  }
  stop() {
    this.element.removeEventListener("mousedown", this.onPointerStart, r), this.element.removeEventListener("touchstart", this.onTouchStart, r), this.element.removeEventListener("touchmove", this.onMove, r), this.element.removeEventListener("touchend", this.onTouchEnd), this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur);
  }
}
function c(t, e) {
  return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0;
}
function h(t, e) {
  return e ? {
    clientX: (t.clientX + e.clientX) / 2,
    clientY: (t.clientY + e.clientY) / 2
  } : t;
}
const d = t => "object" == typeof t && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t),
  u = (t, ...e) => {
    const i = e.length;
    for (let n = 0; n < i; n++) {
      const i = e[n] || {};
      Object.entries(i).forEach(([e, i]) => {
        const n = Array.isArray(i) ? [] : {};
        t[e] || Object.assign(t, {
          [e]: n
        }), d(i) ? Object.assign(t[e], u(n, i)) : Array.isArray(i) ? Object.assign(t, {
          [e]: [...i]
        }) : Object.assign(t, {
          [e]: i
        });
      });
    }
    return t;
  },
  p = function (t, e) {
    return t.split(".").reduce((t, e) => "object" == typeof t ? t[e] : void 0, e);
  };
class f {
  constructor(t = {}) {
    Object.defineProperty(this, "options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "events", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: new Map()
    }), this.setOptions(t);
    for (const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) t.startsWith("on") && "function" == typeof this[t] && (this[t] = this[t].bind(this));
  }
  setOptions(t) {
    this.options = t ? u({}, this.constructor.defaults, t) : {};
    for (const [t, e] of Object.entries(this.option("on") || {})) this.on(t, e);
  }
  option(t, ...e) {
    let i = p(t, this.options);
    return i && "function" == typeof i && (i = i.call(this, this, ...e)), i;
  }
  optionFor(t, e, i, ...n) {
    let s = p(e, t);
    var o;
    "string" != typeof (o = s) || isNaN(o) || isNaN(parseFloat(o)) || (s = parseFloat(s)), "true" === s && (s = !0), "false" === s && (s = !1), s && "function" == typeof s && (s = s.call(this, this, t, ...n));
    let a = p(e, this.options);
    return a && "function" == typeof a ? s = a.call(this, this, t, ...n, s) : void 0 === s && (s = a), void 0 === s ? i : s;
  }
  cn(t) {
    const e = this.options.classes;
    return e && e[t] || "";
  }
  localize(t, e = []) {
    t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t, e, i) => {
      let n = "";
      return i ? n = this.option(`${e[0] + e.toLowerCase().substring(1)}.l10n.${i}`) : e && (n = this.option(`l10n.${e}`)), n || (n = t), n;
    });
    for (let i = 0; i < e.length; i++) t = t.split(e[i][0]).join(e[i][1]);
    return t = t.replace(/\{\{(.*?)\}\}/g, (t, e) => e);
  }
  on(t, e) {
    let i = [];
    "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), this.events || (this.events = new Map()), i.forEach(t => {
      let i = this.events.get(t);
      i || (this.events.set(t, []), i = []), i.includes(e) || i.push(e), this.events.set(t, i);
    });
  }
  off(t, e) {
    let i = [];
    "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), i.forEach(t => {
      const i = this.events.get(t);
      if (Array.isArray(i)) {
        const t = i.indexOf(e);
        t > -1 && i.splice(t, 1);
      }
    });
  }
  emit(t, ...e) {
    [...(this.events.get(t) || [])].forEach(t => t(this, ...e)), "*" !== t && this.emit("*", t, ...e);
  }
}
Object.defineProperty(f, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "5.0.35"
}), Object.defineProperty(f, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {}
});
class g extends f {
  constructor(t = {}) {
    super(t), Object.defineProperty(this, "plugins", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    });
  }
  attachPlugins(t = {}) {
    const e = new Map();
    for (const [i, n] of Object.entries(t)) {
      const t = this.option(i),
        s = this.plugins[i];
      s || !1 === t ? s && !1 === t && (s.detach(), delete this.plugins[i]) : e.set(i, new n(this, t || {}));
    }
    for (const [t, i] of e) this.plugins[t] = i, i.attach();
  }
  detachPlugins(t) {
    t = t || Object.keys(this.plugins);
    for (const e of t) {
      const t = this.plugins[e];
      t && t.detach(), delete this.plugins[e];
    }
    return this.emit("detachPlugins"), this;
  }
}
var m;
!function (t) {
  t[t.Init = 0] = "Init", t[t.Error = 1] = "Error", t[t.Ready = 2] = "Ready", t[t.Panning = 3] = "Panning", t[t.Mousemove = 4] = "Mousemove", t[t.Destroy = 5] = "Destroy";
}(m || (m = {}));
const v = ["a", "b", "c", "d", "e", "f"],
  b = {
    PANUP: "Move up",
    PANDOWN: "Move down",
    PANLEFT: "Move left",
    PANRIGHT: "Move right",
    ZOOMIN: "Zoom in",
    ZOOMOUT: "Zoom out",
    TOGGLEZOOM: "Toggle zoom level",
    TOGGLE1TO1: "Toggle zoom level",
    ITERATEZOOM: "Toggle zoom level",
    ROTATECCW: "Rotate counterclockwise",
    ROTATECW: "Rotate clockwise",
    FLIPX: "Flip horizontally",
    FLIPY: "Flip vertically",
    FITX: "Fit horizontally",
    FITY: "Fit vertically",
    RESET: "Reset",
    TOGGLEFS: "Toggle fullscreen"
  },
  y = {
    content: null,
    width: "auto",
    height: "auto",
    panMode: "drag",
    touch: !0,
    dragMinThreshold: 3,
    lockAxis: !1,
    mouseMoveFactor: 1,
    mouseMoveFriction: .12,
    zoom: !0,
    pinchToZoom: !0,
    panOnlyZoomed: "auto",
    minScale: 1,
    maxScale: 2,
    friction: .25,
    dragFriction: .35,
    decelFriction: .05,
    click: "toggleZoom",
    dblClick: !1,
    wheel: "zoom",
    wheelLimit: 7,
    spinner: !0,
    bounds: "auto",
    infinite: !1,
    rubberband: !0,
    bounce: !0,
    maxVelocity: 75,
    transformParent: !1,
    classes: {
      content: "f-panzoom__content",
      isLoading: "is-loading",
      canZoomIn: "can-zoom_in",
      canZoomOut: "can-zoom_out",
      isDraggable: "is-draggable",
      isDragging: "is-dragging",
      inFullscreen: "in-fullscreen",
      htmlHasFullscreen: "with-panzoom-in-fullscreen"
    },
    l10n: b
  },
  w = '<circle cx="25" cy="25" r="20"></circle>',
  x = '<div class="f-spinner"><svg viewBox="0 0 50 50">' + w + w + "</svg></div>",
  E = t => t && null !== t && t instanceof Element && "nodeType" in t,
  S = (t, e) => {
    t && s(e).forEach(e => {
      t.classList.remove(e);
    });
  },
  P = (t, e) => {
    t && s(e).forEach(e => {
      t.classList.add(e);
    });
  },
  C = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  },
  T = 1e5,
  M = 1e4,
  O = "mousemove",
  A = "drag",
  L = "content",
  z = "auto";
let R = null,
  k = null;
class I extends g {
  get fits() {
    return this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1;
  }
  get isTouchDevice() {
    return null === k && (k = window.matchMedia("(hover: none)").matches), k;
  }
  get isMobile() {
    return null === R && (R = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), R;
  }
  get panMode() {
    return this.options.panMode !== O || this.isTouchDevice ? A : O;
  }
  get panOnlyZoomed() {
    const t = this.options.panOnlyZoomed;
    return t === z ? this.isTouchDevice : t;
  }
  get isInfinite() {
    return this.option("infinite");
  }
  get angle() {
    return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0;
  }
  get targetAngle() {
    return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0;
  }
  get scale() {
    const {
      a: t,
      b: e
    } = this.current;
    return Math.sqrt(t * t + e * e) || 1;
  }
  get targetScale() {
    const {
      a: t,
      b: e
    } = this.target;
    return Math.sqrt(t * t + e * e) || 1;
  }
  get minScale() {
    return this.option("minScale") || 1;
  }
  get fullScale() {
    const {
      contentRect: t
    } = this;
    return t.fullWidth / t.fitWidth || 1;
  }
  get maxScale() {
    return this.fullScale * (this.option("maxScale") || 1) || 1;
  }
  get coverScale() {
    const {
        containerRect: t,
        contentRect: e
      } = this,
      i = Math.max(t.height / e.fitHeight, t.width / e.fitWidth) || 1;
    return Math.min(this.fullScale, i);
  }
  get isScaling() {
    return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
  }
  get isContentLoading() {
    const t = this.content;
    return !!(t && t instanceof HTMLImageElement) && !t.complete;
  }
  get isResting() {
    if (this.isBouncingX || this.isBouncingY) return !1;
    for (const t of v) {
      const e = "e" == t || "f" === t ? 1e-4 : 1e-5;
      if (Math.abs(this.target[t] - this.current[t]) > e) return !1;
    }
    return !(!this.ignoreBounds && !this.checkBounds().inBounds);
  }
  constructor(t, e = {}, i = {}) {
    var s;
    if (super(e), Object.defineProperty(this, "pointerTracker", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "resizeObserver", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "updateTimer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "clickTimer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "rAF", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "isTicking", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "ignoreBounds", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "isBouncingX", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "isBouncingY", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "clicks", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "trackingPoints", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "pwt", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "cwd", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "pmme", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "friction", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "state", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: m.Init
    }), Object.defineProperty(this, "isDragging", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "container", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "content", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "spinner", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "containerRect", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0
      }
    }), Object.defineProperty(this, "contentRect", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        fullWidth: 0,
        fullHeight: 0,
        fitWidth: 0,
        fitHeight: 0,
        width: 0,
        height: 0
      }
    }), Object.defineProperty(this, "dragStart", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        time: 0
      }
    }), Object.defineProperty(this, "dragOffset", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        x: 0,
        y: 0,
        time: 0
      }
    }), Object.defineProperty(this, "current", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Object.assign({}, C)
    }), Object.defineProperty(this, "target", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Object.assign({}, C)
    }), Object.defineProperty(this, "velocity", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0
      }
    }), Object.defineProperty(this, "lockedAxis", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), !t) throw new Error("Container Element Not Found");
    this.container = t, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, I.Plugins), i)), this.emit("attachPlugins"), this.emit("init");
    const o = this.content;
    if (o.addEventListener("load", this.onLoad), o.addEventListener("error", this.onError), this.isContentLoading) {
      if (this.option("spinner")) {
        t.classList.add(this.cn("isLoading"));
        const e = n(x);
        !t.contains(o) || o.parentElement instanceof HTMLPictureElement ? this.spinner = t.appendChild(e) : this.spinner = (null === (s = o.parentElement) || void 0 === s ? void 0 : s.insertBefore(e, o)) || null;
      }
      this.emit("beforeLoad");
    } else queueMicrotask(() => {
      this.enable();
    });
  }
  initContent() {
    const {
        container: t
      } = this,
      e = this.cn(L);
    let i = this.option(L) || t.querySelector(`.${e}`);
    if (i || (i = t.querySelector("img,picture") || t.firstElementChild, i && P(i, e)), i instanceof HTMLPictureElement && (i = i.querySelector("img")), !i) throw new Error("No content found");
    this.content = i;
  }
  onLoad() {
    const {
      spinner: t,
      container: e,
      state: i
    } = this;
    t && (t.remove(), this.spinner = null), this.option("spinner") && e.classList.remove(this.cn("isLoading")), this.emit("afterLoad"), i === m.Init ? this.enable() : this.updateMetrics();
  }
  onError() {
    this.state !== m.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), this.stop(), this.detachEvents(), this.state = m.Error, this.emit("error"));
  }
  getNextScale(t) {
    const {
      fullScale: e,
      targetScale: i,
      coverScale: n,
      maxScale: s,
      minScale: o
    } = this;
    let a = o;
    switch (t) {
      case "toggleMax":
        a = i - o < .5 * (s - o) ? s : o;
        break;
      case "toggleCover":
        a = i - o < .5 * (n - o) ? n : o;
        break;
      case "toggleZoom":
        a = i - o < .5 * (e - o) ? e : o;
        break;
      case "iterateZoom":
        let t = [1, e, s].sort((t, e) => t - e),
          r = t.findIndex(t => t > i + 1e-5);
        a = t[r] || 1;
    }
    return a;
  }
  attachObserver() {
    var t;
    const e = () => {
      const {
        container: t,
        containerRect: e
      } = this;
      return Math.abs(e.width - t.getBoundingClientRect().width) > .1 || Math.abs(e.height - t.getBoundingClientRect().height) > .1;
    };
    this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver(() => {
      this.updateTimer || (e() ? (this.onResize(), this.isMobile && (this.updateTimer = setTimeout(() => {
        e() && this.onResize(), this.updateTimer = null;
      }, 500))) : this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null));
    })), null === (t = this.resizeObserver) || void 0 === t || t.observe(this.container);
  }
  detachObserver() {
    var t;
    null === (t = this.resizeObserver) || void 0 === t || t.disconnect();
  }
  attachEvents() {
    const {
      container: t
    } = this;
    t.addEventListener("click", this.onClick, {
      passive: !1,
      capture: !1
    }), t.addEventListener("wheel", this.onWheel, {
      passive: !1
    }), this.pointerTracker = new l(t, {
      start: this.onPointerDown,
      move: this.onPointerMove,
      end: this.onPointerUp
    }), document.addEventListener(O, this.onMouseMove);
  }
  detachEvents() {
    var t;
    const {
      container: e
    } = this;
    e.removeEventListener("click", this.onClick, {
      passive: !1,
      capture: !1
    }), e.removeEventListener("wheel", this.onWheel, {
      passive: !1
    }), null === (t = this.pointerTracker) || void 0 === t || t.stop(), this.pointerTracker = null, document.removeEventListener(O, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, !0), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null);
  }
  animate() {
    this.setTargetForce();
    const t = this.friction,
      e = this.option("maxVelocity");
    for (const i of v) t ? (this.velocity[i] *= 1 - t, e && !this.isScaling && (this.velocity[i] = Math.max(Math.min(this.velocity[i], e), -1 * e)), this.current[i] += this.velocity[i]) : this.current[i] = this.target[i];
    this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame(() => this.animate()) : this.stop("current");
  }
  setTargetForce() {
    for (const t of v) "e" === t && this.isBouncingX || "f" === t && this.isBouncingY || (this.velocity[t] = (1 / (1 - this.friction) - 1) * (this.target[t] - this.current[t]));
  }
  checkBounds(t = 0, e = 0) {
    const {
        current: i
      } = this,
      n = i.e + t,
      s = i.f + e,
      o = this.getBounds(),
      {
        x: a,
        y: r
      } = o,
      l = a.min,
      c = a.max,
      h = r.min,
      d = r.max;
    let u = 0,
      p = 0;
    return l !== 1 / 0 && n < l ? u = l - n : c !== 1 / 0 && n > c && (u = c - n), h !== 1 / 0 && s < h ? p = h - s : d !== 1 / 0 && s > d && (p = d - s), Math.abs(u) < 1e-4 && (u = 0), Math.abs(p) < 1e-4 && (p = 0), Object.assign(Object.assign({}, o), {
      xDiff: u,
      yDiff: p,
      inBounds: !u && !p
    });
  }
  clampTargetBounds() {
    const {
        target: t
      } = this,
      {
        x: e,
        y: i
      } = this.getBounds();
    e.min !== 1 / 0 && (t.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (t.e = Math.min(t.e, e.max)), i.min !== 1 / 0 && (t.f = Math.max(t.f, i.min)), i.max !== 1 / 0 && (t.f = Math.min(t.f, i.max));
  }
  calculateContentDim(t = this.current) {
    const {
        content: e,
        contentRect: i
      } = this,
      {
        fitWidth: n,
        fitHeight: s,
        fullWidth: o,
        fullHeight: a
      } = i;
    let r = o,
      l = a;
    if (this.option("zoom") || 0 !== this.angle) {
      const i = !(e instanceof HTMLImageElement) && ("none" === window.getComputedStyle(e).maxWidth || "none" === window.getComputedStyle(e).maxHeight),
        c = i ? o : n,
        h = i ? a : s,
        d = this.getMatrix(t),
        u = new DOMPoint(0, 0).matrixTransform(d),
        p = new DOMPoint(0 + c, 0).matrixTransform(d),
        f = new DOMPoint(0 + c, 0 + h).matrixTransform(d),
        g = new DOMPoint(0, 0 + h).matrixTransform(d),
        m = Math.abs(f.x - u.x),
        v = Math.abs(f.y - u.y),
        b = Math.abs(g.x - p.x),
        y = Math.abs(g.y - p.y);
      r = Math.max(m, b), l = Math.max(v, y);
    }
    return {
      contentWidth: r,
      contentHeight: l
    };
  }
  setEdgeForce() {
    if (this.ignoreBounds || this.isDragging || this.panMode === O || this.targetScale < this.scale) return this.isBouncingX = !1, void (this.isBouncingY = !1);
    const {
        target: t
      } = this,
      {
        x: e,
        y: i,
        xDiff: n,
        yDiff: s
      } = this.checkBounds();
    const o = this.option("maxVelocity");
    let a = this.velocity.e,
      r = this.velocity.f;
    0 !== n ? (this.isBouncingX = !0, n * a <= 0 ? a += .14 * n : (a = .14 * n, e.min !== 1 / 0 && (this.target.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (this.target.e = Math.min(t.e, e.max))), o && (a = Math.max(Math.min(a, o), -1 * o))) : this.isBouncingX = !1, 0 !== s ? (this.isBouncingY = !0, s * r <= 0 ? r += .14 * s : (r = .14 * s, i.min !== 1 / 0 && (this.target.f = Math.max(t.f, i.min)), i.max !== 1 / 0 && (this.target.f = Math.min(t.f, i.max))), o && (r = Math.max(Math.min(r, o), -1 * o))) : this.isBouncingY = !1, this.isBouncingX && (this.velocity.e = a), this.isBouncingY && (this.velocity.f = r);
  }
  enable() {
    const {
        content: t
      } = this,
      e = new DOMMatrixReadOnly(window.getComputedStyle(t).transform);
    for (const t of v) this.current[t] = this.target[t] = e[t];
    this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = m.Ready, this.emit("ready");
  }
  onClick(t) {
    var e;
    "click" === t.type && 0 === t.detail && (this.dragOffset.x = 0, this.dragOffset.y = 0), this.isDragging && (null === (e = this.pointerTracker) || void 0 === e || e.clear(), this.trackingPoints = [], this.startDecelAnim());
    const i = t.target;
    if (!i || t.defaultPrevented) return;
    if (i.hasAttribute("disabled")) return t.preventDefault(), void t.stopPropagation();
    if ((() => {
      const t = window.getSelection();
      return t && "Range" === t.type;
    })() && !i.closest("button")) return;
    const n = i.closest("[data-panzoom-action]"),
      s = i.closest("[data-panzoom-change]"),
      o = n || s,
      a = o && E(o) ? o.dataset : null;
    if (a) {
      const e = a.panzoomChange,
        i = a.panzoomAction;
      if ((e || i) && t.preventDefault(), e) {
        let t = {};
        try {
          t = JSON.parse(e);
        } catch (t) {
          console && console.warn("The given data was not valid JSON");
        }
        return void this.applyChange(t);
      }
      if (i) return void (this[i] && this[i]());
    }
    if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3) return t.preventDefault(), void t.stopPropagation();
    if (i.closest("[data-fancybox]")) return;
    const r = this.content.getBoundingClientRect(),
      l = this.dragStart;
    if (l.time && !this.canZoomOut() && (Math.abs(r.x - l.x) > 2 || Math.abs(r.y - l.y) > 2)) return;
    this.dragStart.time = 0;
    const c = e => {
        this.option("zoom", t) && e && "string" == typeof e && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e) && "function" == typeof this[e] && (t.preventDefault(), this[e]({
          event: t
        }));
      },
      h = this.option("click", t),
      d = this.option("dblClick", t);
    d ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout(() => {
      1 === this.clicks ? (this.emit("click", t), !t.defaultPrevented && h && c(h)) : (this.emit("dblClick", t), t.defaultPrevented || c(d)), this.clicks = 0, this.clickTimer = null;
    }, 350))) : (this.emit("click", t), !t.defaultPrevented && h && c(h));
  }
  addTrackingPoint(t) {
    const e = this.trackingPoints.filter(t => t.time > Date.now() - 100);
    e.push(t), this.trackingPoints = e;
  }
  onPointerDown(t, e, i) {
    var n;
    if (!1 === this.option("touch", t)) return !1;
    this.pwt = 0, this.dragOffset = {
      x: 0,
      y: 0,
      time: 0
    }, this.trackingPoints = [];
    const s = this.content.getBoundingClientRect();
    if (this.dragStart = {
      x: s.x,
      y: s.y,
      top: s.top,
      left: s.left,
      time: Date.now()
    }, this.clickTimer) return !1;
    if (this.panMode === O && this.targetScale > 1) return t.preventDefault(), t.stopPropagation(), !1;
    const o = t.composedPath()[0];
    if (!i.length) {
      if (["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME"].includes(o.nodeName) || o.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]")) return !1;
      null === (n = window.getSelection()) || void 0 === n || n.removeAllRanges();
    }
    if ("mousedown" === t.type) ["A", "BUTTON"].includes(o.nodeName) || t.preventDefault();else if (Math.abs(this.velocity.a) > .3) return !1;
    return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), this.isDragging || (this.isDragging = !0, this.addTrackingPoint(e), this.emit("touchStart", t)), !0;
  }
  onPointerMove(e, n, s) {
    if (!1 === this.option("touch", e)) return;
    if (!this.isDragging) return;
    if (n.length < 2 && this.panOnlyZoomed && t(this.targetScale) <= t(this.minScale)) return;
    if (this.emit("touchMove", e), e.defaultPrevented) return;
    this.addTrackingPoint(n[0]);
    const {
        content: o
      } = this,
      a = h(s[0], s[1]),
      r = h(n[0], n[1]);
    let l = 0,
      d = 0;
    if (n.length > 1) {
      const t = o.getBoundingClientRect();
      l = a.clientX - t.left - .5 * t.width, d = a.clientY - t.top - .5 * t.height;
    }
    const u = c(s[0], s[1]),
      p = c(n[0], n[1]);
    let f = u ? p / u : 1,
      g = r.clientX - a.clientX,
      m = r.clientY - a.clientY;
    this.dragOffset.x += g, this.dragOffset.y += m, this.dragOffset.time = Date.now() - this.dragStart.time;
    let v = t(this.targetScale) === t(this.minScale) && this.option("lockAxis");
    if (v && !this.lockedAxis) if ("xy" === v || "y" === v || "touchmove" === e.type) {
      if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void e.preventDefault();
      const t = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
      this.lockedAxis = t > 45 && t < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, g = 0, m = 0;
    } else this.lockedAxis = v;
    if (i(e.target, this.content) && (v = "x", this.dragOffset.y = 0), v && "xy" !== v && this.lockedAxis !== v && t(this.targetScale) === t(this.minScale)) return;
    e.cancelable && e.preventDefault(), this.container.classList.add(this.cn("isDragging"));
    const b = this.checkBounds(g, m);
    this.option("rubberband") ? ("x" !== this.isInfinite && (b.xDiff > 0 && g < 0 || b.xDiff < 0 && g > 0) && (g *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitWidth * b.xDiff))), "y" !== this.isInfinite && (b.yDiff > 0 && m < 0 || b.yDiff < 0 && m > 0) && (m *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitHeight * b.yDiff)))) : (b.xDiff && (g = 0), b.yDiff && (m = 0));
    const y = this.targetScale,
      w = this.minScale,
      x = this.maxScale;
    y < .5 * w && (f = Math.max(f, w)), y > 1.5 * x && (f = Math.min(f, x)), "y" === this.lockedAxis && t(y) === t(w) && (g = 0), "x" === this.lockedAxis && t(y) === t(w) && (m = 0), this.applyChange({
      originX: l,
      originY: d,
      panX: g,
      panY: m,
      scale: f,
      friction: this.option("dragFriction"),
      ignoreBounds: !0
    });
  }
  onPointerUp(t, e, n) {
    if (n.length) return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);
    this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(e), this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), i(t.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), this.emit("touchEnd", t), this.isDragging = !1, this.lockedAxis = !1, this.state !== m.Destroy && (t.defaultPrevented || this.startDecelAnim()));
  }
  startDecelAnim() {
    var e;
    const i = this.isScaling;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;
    for (const t of v) this.velocity[t] = 0;
    this.target.e = this.current.e, this.target.f = this.current.f, S(this.container, "is-scaling"), S(this.container, "is-animating"), this.isTicking = !1;
    const {
        trackingPoints: n
      } = this,
      s = n[0],
      o = n[n.length - 1];
    let a = 0,
      r = 0,
      l = 0;
    o && s && (a = o.clientX - s.clientX, r = o.clientY - s.clientY, l = o.time - s.time);
    const c = (null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1;
    1 !== c && (a *= c, r *= c);
    let h = 0,
      d = 0,
      u = 0,
      p = 0,
      f = this.option("decelFriction");
    const g = this.targetScale;
    if (l > 0) {
      u = Math.abs(a) > 3 ? a / (l / 30) : 0, p = Math.abs(r) > 3 ? r / (l / 30) : 0;
      const t = this.option("maxVelocity");
      t && (u = Math.max(Math.min(u, t), -1 * t), p = Math.max(Math.min(p, t), -1 * t));
    }
    u && (h = u / (1 / (1 - f) - 1)), p && (d = p / (1 / (1 - f) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && t(g) === this.minScale) && (h = u = 0), ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && t(g) === this.minScale) && (d = p = 0);
    const m = this.dragOffset.x,
      b = this.dragOffset.y,
      y = this.option("dragMinThreshold") || 0;
    Math.abs(m) < y && Math.abs(b) < y && (h = d = 0, u = p = 0), (this.option("zoom") && (g < this.minScale - 1e-5 || g > this.maxScale + 1e-5) || i && !h && !d) && (f = .35), this.applyChange({
      panX: h,
      panY: d,
      friction: f
    }), this.emit("decel", u, p, m, b);
  }
  onWheel(t) {
    var e = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (t, e) {
      return Math.abs(e) > Math.abs(t) ? e : t;
    });
    const i = Math.max(-1, Math.min(1, e));
    if (this.emit("wheel", t, i), this.panMode === O) return;
    if (t.defaultPrevented) return;
    const n = this.option("wheel");
    "pan" === n ? (t.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({
      panX: 2 * -t.deltaX,
      panY: 2 * -t.deltaY,
      bounce: !1
    })) : "zoom" === n && !1 !== this.option("zoom") && this.zoomWithWheel(t);
  }
  onMouseMove(t) {
    this.panWithMouse(t);
  }
  onKeydown(t) {
    "Escape" === t.key && this.toggleFS();
  }
  onResize() {
    this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
  }
  setTransform() {
    this.emit("beforeTransform");
    const {
        current: e,
        target: i,
        content: n,
        contentRect: s
      } = this,
      o = Object.assign({}, C);
    for (const n of v) {
      const s = "e" == n || "f" === n ? M : T;
      o[n] = t(e[n], s), Math.abs(i[n] - e[n]) < ("e" == n || "f" === n ? .51 : .001) && (e[n] = i[n]);
    }
    let {
        a: a,
        b: r,
        c: l,
        d: c,
        e: h,
        f: d
      } = o,
      u = `matrix(${a}, ${r}, ${l}, ${c}, ${h}, ${d})`,
      p = n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
    if (this.option("transformParent") && (p = p.parentElement || p), p.style.transform === u) return;
    p.style.transform = u;
    const {
      contentWidth: f,
      contentHeight: g
    } = this.calculateContentDim();
    s.width = f, s.height = g, this.emit("afterTransform");
  }
  updateMetrics(e = !1) {
    var i;
    if (!this || this.state === m.Destroy) return;
    if (this.isContentLoading) return;
    const n = Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1),
      {
        container: s,
        content: o
      } = this,
      a = o instanceof HTMLImageElement,
      r = s.getBoundingClientRect(),
      l = getComputedStyle(this.container);
    let c = r.width * n,
      h = r.height * n;
    const d = parseFloat(l.paddingTop) + parseFloat(l.paddingBottom),
      u = c - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight)),
      p = h - d;
    this.containerRect = {
      width: c,
      height: h,
      innerWidth: u,
      innerHeight: p
    };
    const f = parseFloat(o.dataset.width || "") || (t => {
        let e = 0;
        return e = t instanceof HTMLImageElement ? t.naturalWidth : t instanceof SVGElement ? t.width.baseVal.value : Math.max(t.offsetWidth, t.scrollWidth), e || 0;
      })(o),
      g = parseFloat(o.dataset.height || "") || (t => {
        let e = 0;
        return e = t instanceof HTMLImageElement ? t.naturalHeight : t instanceof SVGElement ? t.height.baseVal.value : Math.max(t.offsetHeight, t.scrollHeight), e || 0;
      })(o);
    let v = this.option("width", f) || z,
      b = this.option("height", g) || z;
    const y = v === z,
      w = b === z;
    "number" != typeof v && (v = f), "number" != typeof b && (b = g), y && (v = f * (b / g)), w && (b = g / (f / v));
    let x = o.parentElement instanceof HTMLPictureElement ? o.parentElement : o;
    this.option("transformParent") && (x = x.parentElement || x);
    const E = x.getAttribute("style") || "";
    x.style.setProperty("transform", "none", "important"), a && (x.style.width = "", x.style.height = ""), x.offsetHeight;
    const S = o.getBoundingClientRect();
    let P = S.width * n,
      C = S.height * n,
      T = P,
      M = C;
    P = Math.min(P, v), C = Math.min(C, b), a ? ({
      width: P,
      height: C
    } = ((t, e, i, n) => {
      const s = i / t,
        o = n / e,
        a = Math.min(s, o);
      return {
        width: t *= a,
        height: e *= a
      };
    })(v, b, P, C)) : (P = Math.min(P, v), C = Math.min(C, b));
    let O = .5 * (M - C),
      A = .5 * (T - P);
    this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
      top: S.top - r.top + O,
      bottom: r.bottom - S.bottom + O,
      left: S.left - r.left + A,
      right: r.right - S.right + A,
      fitWidth: P,
      fitHeight: C,
      width: P,
      height: C,
      fullWidth: v,
      fullHeight: b
    }), x.style.cssText = E, a && (x.style.width = `${P}px`, x.style.height = `${C}px`), this.setTransform(), !0 !== e && this.emit("refresh"), this.ignoreBounds || (t(this.targetScale) < t(this.minScale) ? this.zoomTo(this.minScale, {
      friction: 0
    }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, {
      friction: 0
    }) : this.state === m.Init || this.checkBounds().inBounds || this.requestTick()), this.updateControls();
  }
  calculateBounds() {
    const {
        contentWidth: e,
        contentHeight: i
      } = this.calculateContentDim(this.target),
      {
        targetScale: n,
        lockedAxis: s
      } = this,
      {
        fitWidth: o,
        fitHeight: a
      } = this.contentRect;
    let r = 0,
      l = 0,
      c = 0,
      h = 0;
    const d = this.option("infinite");
    if (!0 === d || s && d === s) r = -1 / 0, c = 1 / 0, l = -1 / 0, h = 1 / 0;else {
      let {
          containerRect: s,
          contentRect: d
        } = this,
        u = t(o * n, M),
        p = t(a * n, M),
        {
          innerWidth: f,
          innerHeight: g
        } = s;
      if (s.width === u && (f = s.width), s.width === p && (g = s.height), e > f) {
        c = .5 * (e - f), r = -1 * c;
        let t = .5 * (d.right - d.left);
        r += t, c += t;
      }
      if (o > f && e < f && (r -= .5 * (o - f), c -= .5 * (o - f)), i > g) {
        h = .5 * (i - g), l = -1 * h;
        let t = .5 * (d.bottom - d.top);
        l += t, h += t;
      }
      a > g && i < g && (r -= .5 * (a - g), c -= .5 * (a - g));
    }
    return {
      x: {
        min: r,
        max: c
      },
      y: {
        min: l,
        max: h
      }
    };
  }
  getBounds() {
    const t = this.option("bounds");
    return t !== z ? t : this.calculateBounds();
  }
  updateControls() {
    const e = this,
      i = e.container,
      {
        panMode: n,
        contentRect: s,
        targetScale: a,
        minScale: r
      } = e;
    let l = r,
      c = e.option("click") || !1;
    c && (l = e.getNextScale(c));
    let h = e.canZoomIn(),
      d = e.canZoomOut(),
      u = n === A && !!this.option("touch"),
      p = d && u;
    if (u && (t(a) < t(r) && !this.panOnlyZoomed && (p = !0), (t(s.width, 1) > t(s.fitWidth, 1) || t(s.height, 1) > t(s.fitHeight, 1)) && (p = !0)), t(s.width * a, 1) < t(s.fitWidth, 1) && (p = !1), n === O && (p = !1), o(i, this.cn("isDraggable"), p), !this.option("zoom")) return;
    let f = h && t(l) > t(a),
      g = !f && !p && d && t(l) < t(a);
    o(i, this.cn("canZoomIn"), f), o(i, this.cn("canZoomOut"), g);
    for (const t of i.querySelectorAll("[data-panzoom-action]")) {
      let e = !1,
        i = !1;
      switch (t.dataset.panzoomAction) {
        case "zoomIn":
          h ? e = !0 : i = !0;
          break;
        case "zoomOut":
          d ? e = !0 : i = !0;
          break;
        case "toggleZoom":
        case "iterateZoom":
          h || d ? e = !0 : i = !0;
          const n = t.querySelector("g");
          n && (n.style.display = h ? "" : "none");
      }
      e ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex")) : i && (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
    }
  }
  panTo({
    x: t = this.target.e,
    y: e = this.target.f,
    scale: i = this.targetScale,
    friction: n = this.option("friction"),
    angle: s = 0,
    originX: o = 0,
    originY: a = 0,
    flipX: r = !1,
    flipY: l = !1,
    ignoreBounds: c = !1
  }) {
    this.state !== m.Destroy && this.applyChange({
      panX: t - this.target.e,
      panY: e - this.target.f,
      scale: i / this.targetScale,
      angle: s,
      originX: o,
      originY: a,
      friction: n,
      flipX: r,
      flipY: l,
      ignoreBounds: c
    });
  }
  applyChange({
    panX: e = 0,
    panY: i = 0,
    scale: n = 1,
    angle: s = 0,
    originX: o = -this.current.e,
    originY: a = -this.current.f,
    friction: r = this.option("friction"),
    flipX: l = !1,
    flipY: c = !1,
    ignoreBounds: h = !1,
    bounce: d = this.option("bounce")
  }) {
    const u = this.state;
    if (u === m.Destroy) return;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = r || 0, this.ignoreBounds = h;
    const {
        current: p
      } = this,
      f = p.e,
      g = p.f,
      b = this.getMatrix(this.target);
    let y = new DOMMatrix().translate(f, g).translate(o, a).translate(e, i);
    if (this.option("zoom")) {
      if (!h) {
        const t = this.targetScale,
          e = this.minScale,
          i = this.maxScale;
        t * n < e && (n = e / t), t * n > i && (n = i / t);
      }
      y = y.scale(n);
    }
    y = y.translate(-o, -a).translate(-f, -g).multiply(b), s && (y = y.rotate(s)), l && (y = y.scale(-1, 1)), c && (y = y.scale(1, -1));
    for (const e of v) "e" !== e && "f" !== e && (y[e] > this.minScale + 1e-5 || y[e] < this.minScale - 1e-5) ? this.target[e] = y[e] : this.target[e] = t(y[e], M);
    (this.targetScale < this.scale || Math.abs(n - 1) > .1 || this.panMode === O || !1 === d) && !h && this.clampTargetBounds(), u === m.Init ? this.animate() : this.isResting || (this.state = m.Panning, this.requestTick());
  }
  stop(t = !1) {
    if (this.state === m.Init || this.state === m.Destroy) return;
    const e = this.isTicking;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;
    for (const e of v) this.velocity[e] = 0, "current" === t ? this.current[e] = this.target[e] : "target" === t && (this.target[e] = this.current[e]);
    this.setTransform(), S(this.container, "is-scaling"), S(this.container, "is-animating"), this.isTicking = !1, this.state = m.Ready, e && (this.emit("endAnimation"), this.updateControls());
  }
  requestTick() {
    this.isTicking || (this.emit("startAnimation"), this.updateControls(), P(this.container, "is-animating"), this.isScaling && P(this.container, "is-scaling")), this.isTicking = !0, this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
  }
  panWithMouse(e, i = this.option("mouseMoveFriction")) {
    if (this.pmme = e, this.panMode !== O || !e) return;
    if (t(this.targetScale) <= t(this.minScale)) return;
    this.emit("mouseMove", e);
    const {
        container: n,
        containerRect: s,
        contentRect: o
      } = this,
      a = s.width,
      r = s.height,
      l = n.getBoundingClientRect(),
      c = (e.clientX || 0) - l.left,
      h = (e.clientY || 0) - l.top;
    let {
      contentWidth: d,
      contentHeight: u
    } = this.calculateContentDim(this.target);
    const p = this.option("mouseMoveFactor");
    p > 1 && (d !== a && (d *= p), u !== r && (u *= p));
    let f = .5 * (d - a) - c / a * 100 / 100 * (d - a);
    f += .5 * (o.right - o.left);
    let g = .5 * (u - r) - h / r * 100 / 100 * (u - r);
    g += .5 * (o.bottom - o.top), this.applyChange({
      panX: f - this.target.e,
      panY: g - this.target.f,
      friction: i
    });
  }
  zoomWithWheel(e) {
    if (this.state === m.Destroy || this.state === m.Init) return;
    const i = Date.now();
    if (i - this.pwt < 45) return void e.preventDefault();
    this.pwt = i;
    var n = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function (t, e) {
      return Math.abs(e) > Math.abs(t) ? e : t;
    });
    const s = Math.max(-1, Math.min(1, n)),
      {
        targetScale: o,
        maxScale: a,
        minScale: r
      } = this;
    let l = o * (100 + 45 * s) / 100;
    t(l) < t(r) && t(o) <= t(r) ? (this.cwd += Math.abs(s), l = r) : t(l) > t(a) && t(o) >= t(a) ? (this.cwd += Math.abs(s), l = a) : (this.cwd = 0, l = Math.max(Math.min(l, a), r)), this.cwd > this.option("wheelLimit") || (e.preventDefault(), t(l) !== t(o) && this.zoomTo(l, {
      event: e
    }));
  }
  canZoomIn() {
    return this.option("zoom") && (t(this.contentRect.width, 1) < t(this.contentRect.fitWidth, 1) || t(this.targetScale) < t(this.maxScale));
  }
  canZoomOut() {
    return this.option("zoom") && t(this.targetScale) > t(this.minScale);
  }
  zoomIn(t = 1.25, e) {
    this.zoomTo(this.targetScale * t, e);
  }
  zoomOut(t = .8, e) {
    this.zoomTo(this.targetScale * t, e);
  }
  zoomToFit(t) {
    this.zoomTo("fit", t);
  }
  zoomToCover(t) {
    this.zoomTo("cover", t);
  }
  zoomToFull(t) {
    this.zoomTo("full", t);
  }
  zoomToMax(t) {
    this.zoomTo("max", t);
  }
  toggleZoom(t) {
    this.zoomTo(this.getNextScale("toggleZoom"), t);
  }
  toggleMax(t) {
    this.zoomTo(this.getNextScale("toggleMax"), t);
  }
  toggleCover(t) {
    this.zoomTo(this.getNextScale("toggleCover"), t);
  }
  iterateZoom(t) {
    this.zoomTo("next", t);
  }
  zoomTo(t = 1, {
    friction: e = z,
    originX: i = z,
    originY: n = z,
    event: s
  } = {}) {
    if (this.isContentLoading || this.state === m.Destroy) return;
    const {
      targetScale: o,
      fullScale: a,
      maxScale: r,
      coverScale: l
    } = this;
    if (this.stop(), this.panMode === O && (s = this.pmme || s), s || i === z || n === z) {
      const t = this.content.getBoundingClientRect(),
        e = this.container.getBoundingClientRect(),
        o = s ? s.clientX : e.left + .5 * e.width,
        a = s ? s.clientY : e.top + .5 * e.height;
      i = o - t.left - .5 * t.width, n = a - t.top - .5 * t.height;
    }
    let c = 1;
    "number" == typeof t ? c = t : "full" === t ? c = a : "cover" === t ? c = l : "max" === t ? c = r : "fit" === t ? c = 1 : "next" === t && (c = this.getNextScale("iterateZoom")), c = c / o || 1, e = e === z ? c > 1 ? .15 : .25 : e, this.applyChange({
      scale: c,
      originX: i,
      originY: n,
      friction: e
    }), s && this.panMode === O && this.panWithMouse(s, e);
  }
  rotateCCW() {
    this.applyChange({
      angle: -90
    });
  }
  rotateCW() {
    this.applyChange({
      angle: 90
    });
  }
  flipX() {
    this.applyChange({
      flipX: !0
    });
  }
  flipY() {
    this.applyChange({
      flipY: !0
    });
  }
  fitX() {
    this.stop("target");
    const {
      containerRect: t,
      contentRect: e,
      target: i
    } = this;
    this.applyChange({
      panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
      panY: .5 * t.height - (e.top + .5 * e.fitHeight) - i.f,
      scale: t.width / e.fitWidth / this.targetScale,
      originX: 0,
      originY: 0,
      ignoreBounds: !0
    });
  }
  fitY() {
    this.stop("target");
    const {
      containerRect: t,
      contentRect: e,
      target: i
    } = this;
    this.applyChange({
      panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
      panY: .5 * t.innerHeight - (e.top + .5 * e.fitHeight) - i.f,
      scale: t.height / e.fitHeight / this.targetScale,
      originX: 0,
      originY: 0,
      ignoreBounds: !0
    });
  }
  toggleFS() {
    const {
        container: t
      } = this,
      e = this.cn("inFullscreen"),
      i = this.cn("htmlHasFullscreen");
    t.classList.toggle(e);
    const n = t.classList.contains(e);
    n ? (document.documentElement.classList.add(i), document.addEventListener("keydown", this.onKeydown, !0)) : (document.documentElement.classList.remove(i), document.removeEventListener("keydown", this.onKeydown, !0)), this.updateMetrics(), this.emit(n ? "enterFS" : "exitFS");
  }
  getMatrix(t = this.current) {
    const {
      a: e,
      b: i,
      c: n,
      d: s,
      e: o,
      f: a
    } = t;
    return new DOMMatrix([e, i, n, s, o, a]);
  }
  reset(t) {
    if (this.state !== m.Init && this.state !== m.Destroy) {
      this.stop("current");
      for (const t of v) this.target[t] = C[t];
      this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), this.isResting || (this.friction = void 0 === t ? this.option("friction") : t, this.state = m.Panning, this.requestTick());
    }
  }
  destroy() {
    this.stop(), this.state = m.Destroy, this.detachEvents(), this.detachObserver();
    const {
        container: t,
        content: e
      } = this,
      i = this.option("classes") || {};
    for (const e of Object.values(i)) t.classList.remove(e + "");
    e && (e.removeEventListener("load", this.onLoad), e.removeEventListener("error", this.onError)), this.detachPlugins();
  }
}
Object.defineProperty(I, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: y
}), Object.defineProperty(I, "Plugins", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {}
});
const D = function (t, e) {
    let i = !0;
    return (...n) => {
      i && (i = !1, t(...n), setTimeout(() => {
        i = !0;
      }, e));
    };
  },
  F = (t, e) => {
    let i = [];
    return t.childNodes.forEach(t => {
      t.nodeType !== Node.ELEMENT_NODE || e && !t.matches(e) || i.push(t);
    }), i;
  },
  j = {
    viewport: null,
    track: null,
    enabled: !0,
    slides: [],
    axis: "x",
    transition: "fade",
    preload: 1,
    slidesPerPage: "auto",
    initialPage: 0,
    friction: .12,
    Panzoom: {
      decelFriction: .12
    },
    center: !0,
    infinite: !0,
    fill: !0,
    dragFree: !1,
    adaptiveHeight: !1,
    direction: "ltr",
    classes: {
      container: "f-carousel",
      viewport: "f-carousel__viewport",
      track: "f-carousel__track",
      slide: "f-carousel__slide",
      isLTR: "is-ltr",
      isRTL: "is-rtl",
      isHorizontal: "is-horizontal",
      isVertical: "is-vertical",
      inTransition: "in-transition",
      isSelected: "is-selected"
    },
    l10n: {
      NEXT: "Next slide",
      PREV: "Previous slide",
      GOTO: "Go to slide #%d"
    }
  };
var B;
!function (t) {
  t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Destroy = 2] = "Destroy";
}(B || (B = {}));
const H = t => {
    if ("string" == typeof t || t instanceof HTMLElement) t = {
      html: t
    };else {
      const e = t.thumb;
      void 0 !== e && ("string" == typeof e && (t.thumbSrc = e), e instanceof HTMLImageElement && (t.thumbEl = e, t.thumbElSrc = e.src, t.thumbSrc = e.src), delete t.thumb);
    }
    return Object.assign({
      html: "",
      el: null,
      isDom: !1,
      class: "",
      customClass: "",
      index: -1,
      dim: 0,
      gap: 0,
      pos: 0,
      transition: !1
    }, t);
  },
  N = (t = {}) => Object.assign({
    index: -1,
    slides: [],
    dim: 0,
    pos: -1
  }, t);
class _ extends f {
  constructor(t, e) {
    super(e), Object.defineProperty(this, "instance", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    });
  }
  attach() {}
  detach() {}
}
const $ = {
  classes: {
    list: "f-carousel__dots",
    isDynamic: "is-dynamic",
    hasDots: "has-dots",
    dot: "f-carousel__dot",
    isBeforePrev: "is-before-prev",
    isPrev: "is-prev",
    isCurrent: "is-current",
    isNext: "is-next",
    isAfterNext: "is-after-next"
  },
  dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
  dynamicFrom: 11,
  maxCount: 1 / 0,
  minCount: 2
};
class W extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "isDynamic", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "list", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    });
  }
  onRefresh() {
    this.refresh();
  }
  build() {
    let t = this.list;
    if (!t) {
      t = document.createElement("ul"), P(t, this.cn("list")), t.setAttribute("role", "tablist");
      const e = this.instance.container;
      e.appendChild(t), P(e, this.cn("hasDots")), this.list = t;
    }
    return t;
  }
  refresh() {
    var t;
    const e = this.instance.pages.length,
      i = Math.min(2, this.option("minCount")),
      n = Math.max(2e3, this.option("maxCount")),
      s = this.option("dynamicFrom");
    if (e < i || e > n) return void this.cleanup();
    const a = "number" == typeof s && e > 5 && e >= s,
      r = !this.list || this.isDynamic !== a || this.list.children.length !== e;
    r && this.cleanup();
    const l = this.build();
    if (o(l, this.cn("isDynamic"), !!a), r) for (let t = 0; t < e; t++) l.append(this.createItem(t));
    let c,
      h = 0;
    for (const e of [...l.children]) {
      const i = h === this.instance.page;
      i && (c = e), o(e, this.cn("isCurrent"), i), null === (t = e.children[0]) || void 0 === t || t.setAttribute("aria-selected", i ? "true" : "false");
      for (const t of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"]) S(e, this.cn(t));
      h++;
    }
    if (c = c || l.firstChild, a && c) {
      const t = c.previousElementSibling,
        e = t && t.previousElementSibling;
      P(t, this.cn("isPrev")), P(e, this.cn("isBeforePrev"));
      const i = c.nextElementSibling,
        n = i && i.nextElementSibling;
      P(i, this.cn("isNext")), P(n, this.cn("isAfterNext"));
    }
    this.isDynamic = a;
  }
  createItem(t = 0) {
    var e;
    const i = document.createElement("li");
    i.setAttribute("role", "presentation");
    const s = n(this.instance.localize(this.option("dotTpl"), [["%d", t + 1]]).replace(/\%i/g, t + ""));
    return i.appendChild(s), null === (e = i.children[0]) || void 0 === e || e.setAttribute("role", "tab"), i;
  }
  cleanup() {
    this.list && (this.list.remove(), this.list = null), this.isDynamic = !1, S(this.instance.container, this.cn("hasDots"));
  }
  attach() {
    this.instance.on(["refresh", "change"], this.onRefresh);
  }
  detach() {
    this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
  }
}
Object.defineProperty(W, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: $
});
const X = "disabled",
  q = "next",
  Y = "prev";
class V extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "container", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "prev", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "next", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "isDom", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    });
  }
  onRefresh() {
    const t = this.instance,
      e = t.pages.length,
      i = t.page;
    if (e < 2) return void this.cleanup();
    this.build();
    let n = this.prev,
      s = this.next;
    n && s && (n.removeAttribute(X), s.removeAttribute(X), t.isInfinite || (i <= 0 && n.setAttribute(X, ""), i >= e - 1 && s.setAttribute(X, "")));
  }
  addBtn(t) {
    var e;
    const i = this.instance,
      n = document.createElement("button");
    n.setAttribute("tabindex", "0"), n.setAttribute("title", i.localize(`{{${t.toUpperCase()}}}`)), P(n, this.cn("button") + " " + this.cn(t === q ? "isNext" : "isPrev"));
    const s = i.isRTL ? t === q ? Y : q : t;
    var o;
    return n.innerHTML = i.localize(this.option(`${s}Tpl`)), n.dataset[`carousel${(o = t, o ? o.match("^[a-z]") ? o.charAt(0).toUpperCase() + o.substring(1) : o : "")}`] = "true", null === (e = this.container) || void 0 === e || e.appendChild(n), n;
  }
  build() {
    const t = this.instance.container,
      e = this.cn("container");
    let {
      container: i,
      prev: n,
      next: s
    } = this;
    i || (i = t.querySelector("." + e), this.isDom = !!i), i || (i = document.createElement("div"), P(i, e), t.appendChild(i)), this.container = i, s || (s = i.querySelector("[data-carousel-next]")), s || (s = this.addBtn(q)), this.next = s, n || (n = i.querySelector("[data-carousel-prev]")), n || (n = this.addBtn(Y)), this.prev = n;
  }
  cleanup() {
    this.isDom || (this.prev && this.prev.remove(), this.next && this.next.remove(), this.container && this.container.remove()), this.prev = null, this.next = null, this.container = null, this.isDom = !1;
  }
  attach() {
    this.instance.on(["refresh", "change"], this.onRefresh);
  }
  detach() {
    this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
  }
}
Object.defineProperty(V, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    classes: {
      container: "f-carousel__nav",
      button: "f-button",
      isNext: "is-next",
      isPrev: "is-prev"
    },
    nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
    prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'
  }
});
class Z extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "selectedIndex", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "target", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "nav", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    });
  }
  addAsTargetFor(t) {
    this.target = this.instance, this.nav = t, this.attachEvents();
  }
  addAsNavFor(t) {
    this.nav = this.instance, this.target = t, this.attachEvents();
  }
  attachEvents() {
    const {
      nav: t,
      target: e
    } = this;
    t && e && (t.options.initialSlide = e.options.initialPage, t.state === B.Ready ? this.onNavReady(t) : t.on("ready", this.onNavReady), e.state === B.Ready ? this.onTargetReady(e) : e.on("ready", this.onTargetReady));
  }
  onNavReady(t) {
    t.on("createSlide", this.onNavCreateSlide), t.on("Panzoom.click", this.onNavClick), t.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange();
  }
  onTargetReady(t) {
    t.on("change", this.onTargetChange), t.on("Panzoom.refresh", this.onTargetChange), this.onTargetChange();
  }
  onNavClick(t, e, i) {
    this.onNavTouch(t, t.panzoom, i);
  }
  onNavTouch(t, e, i) {
    var n, s;
    if (Math.abs(e.dragOffset.x) > 3 || Math.abs(e.dragOffset.y) > 3) return;
    const o = i.target,
      {
        nav: a,
        target: r
      } = this;
    if (!a || !r || !o) return;
    const l = o.closest("[data-index]");
    if (i.stopPropagation(), i.preventDefault(), !l) return;
    const c = parseInt(l.dataset.index || "", 10) || 0,
      h = r.getPageForSlide(c),
      d = a.getPageForSlide(c);
    a.slideTo(d), r.slideTo(h, {
      friction: (null === (s = null === (n = this.nav) || void 0 === n ? void 0 : n.plugins) || void 0 === s ? void 0 : s.Sync.option("friction")) || 0
    }), this.markSelectedSlide(c);
  }
  onNavCreateSlide(t, e) {
    e.index === this.selectedIndex && this.markSelectedSlide(e.index);
  }
  onTargetChange() {
    var t, e;
    const {
      target: i,
      nav: n
    } = this;
    if (!i || !n) return;
    if (n.state !== B.Ready || i.state !== B.Ready) return;
    const s = null === (e = null === (t = i.pages[i.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0 === e ? void 0 : e.index,
      o = n.getPageForSlide(s);
    this.markSelectedSlide(s), n.slideTo(o, null === n.prevPage && null === i.prevPage ? {
      friction: 0
    } : void 0);
  }
  markSelectedSlide(t) {
    const e = this.nav;
    e && e.state === B.Ready && (this.selectedIndex = t, [...e.slides].map(e => {
      e.el && e.el.classList[e.index === t ? "add" : "remove"]("is-nav-selected");
    }));
  }
  attach() {
    const t = this;
    let e = t.options.target,
      i = t.options.nav;
    e ? t.addAsNavFor(e) : i && t.addAsTargetFor(i);
  }
  detach() {
    const t = this,
      e = t.nav,
      i = t.target;
    e && (e.off("ready", t.onNavReady), e.off("createSlide", t.onNavCreateSlide), e.off("Panzoom.click", t.onNavClick), e.off("Panzoom.touchEnd", t.onNavTouch)), t.nav = null, i && (i.off("ready", t.onTargetReady), i.off("refresh", t.onTargetChange), i.off("change", t.onTargetChange)), t.target = null;
  }
}
Object.defineProperty(Z, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    friction: .35
  }
});
const U = {
    Navigation: V,
    Dots: W,
    Sync: Z
  },
  G = "animationend",
  K = "isSelected",
  J = "slide";
class Q extends g {
  get axis() {
    return this.isHorizontal ? "e" : "f";
  }
  get isEnabled() {
    return this.state === B.Ready;
  }
  get isInfinite() {
    let t = !1;
    const {
        contentDim: e,
        viewportDim: i,
        pages: n,
        slides: s
      } = this,
      o = s[0];
    return n.length >= 2 && o && e + o.dim >= i && (t = this.option("infinite")), t;
  }
  get isRTL() {
    return "rtl" === this.option("direction");
  }
  get isHorizontal() {
    return "x" === this.option("axis");
  }
  constructor(t, e = {}, i = {}) {
    if (super(), Object.defineProperty(this, "bp", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ""
    }), Object.defineProperty(this, "lp", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "userOptions", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, "userPlugins", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, "state", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: B.Init
    }), Object.defineProperty(this, "page", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "prevPage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "container", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "viewport", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "track", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "slides", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "pages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "panzoom", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "inTransition", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: new Set()
    }), Object.defineProperty(this, "contentDim", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "viewportDim", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), "string" == typeof t && (t = document.querySelector(t)), !t || !E(t)) throw new Error("No Element found");
    this.container = t, this.slideNext = D(this.slideNext.bind(this), 150), this.slidePrev = D(this.slidePrev.bind(this), 150), this.userOptions = e, this.userPlugins = i, queueMicrotask(() => {
      this.processOptions();
    });
  }
  processOptions() {
    var t, e;
    const i = u({}, Q.defaults, this.userOptions);
    let n = "";
    const s = i.breakpoints;
    if (s && d(s)) for (const [t, e] of Object.entries(s)) window.matchMedia(t).matches && d(e) && (n += t, u(i, e));
    n === this.bp && this.state !== B.Init || (this.bp = n, this.state === B.Ready && (i.initialSlide = (null === (e = null === (t = this.pages[this.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0 === e ? void 0 : e.index) || 0), this.state !== B.Init && this.destroy(), super.setOptions(i), !1 === this.option("enabled") ? this.attachEvents() : setTimeout(() => {
      this.init();
    }, 0));
  }
  init() {
    this.state = B.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, Q.Plugins), this.userPlugins)), this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = B.Ready, this.emit("ready");
  }
  initLayout() {
    const {
        container: t
      } = this,
      e = this.option("classes");
    P(t, this.cn("container")), o(t, e.isLTR, !this.isRTL), o(t, e.isRTL, this.isRTL), o(t, e.isVertical, !this.isHorizontal), o(t, e.isHorizontal, this.isHorizontal);
    let i = this.option("viewport") || t.querySelector(`.${e.viewport}`);
    i || (i = document.createElement("div"), P(i, e.viewport), i.append(...F(t, `.${e.slide}`)), t.prepend(i)), i.addEventListener("scroll", this.onScroll);
    let n = this.option("track") || t.querySelector(`.${e.track}`);
    n || (n = document.createElement("div"), P(n, e.track), n.append(...Array.from(i.childNodes))), n.setAttribute("aria-live", "polite"), i.contains(n) || i.prepend(n), this.viewport = i, this.track = n, this.emit("initLayout");
  }
  initSlides() {
    const {
      track: t
    } = this;
    if (!t) return;
    const e = [...this.slides],
      i = [];
    [...F(t, `.${this.cn(J)}`)].forEach(t => {
      if (E(t)) {
        const e = H({
          el: t,
          isDom: !0,
          index: this.slides.length
        });
        i.push(e);
      }
    });
    for (let t of [...(this.option("slides", []) || []), ...e]) i.push(H(t));
    this.slides = i;
    for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
    for (const t of i) this.emit("beforeInitSlide", t, t.index), this.emit("initSlide", t, t.index);
    this.emit("initSlides");
  }
  setInitialPage() {
    const t = this.option("initialSlide");
    this.page = "number" == typeof t ? this.getPageForSlide(t) : parseInt(this.option("initialPage", 0) + "", 10) || 0;
  }
  setInitialPosition() {
    const {
      track: t,
      pages: e,
      isHorizontal: i
    } = this;
    if (!t || !e.length) return;
    let n = this.page;
    e[n] || (this.page = n = 0);
    const s = (e[n].pos || 0) * (this.isRTL && i ? 1 : -1),
      o = i ? `${s}px` : "0",
      a = i ? "0" : `${s}px`;
    t.style.transform = `translate3d(${o}, ${a}, 0) scale(1)`, this.option("adaptiveHeight") && this.setViewportHeight();
  }
  initPanzoom() {
    this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
    const t = this.option("Panzoom") || {};
    this.panzoom = new I(this.viewport, u({}, {
      content: this.track,
      zoom: !1,
      panOnlyZoomed: !1,
      lockAxis: this.isHorizontal ? "x" : "y",
      infinite: this.isInfinite,
      click: !1,
      dblClick: !1,
      touch: t => !(this.pages.length < 2 && !t.options.infinite),
      bounds: () => this.getBounds(),
      maxVelocity: t => Math.abs(t.target[this.axis] - t.current[this.axis]) < 2 * this.viewportDim ? 100 : 0
    }, t)), this.panzoom.on("*", (t, e, ...i) => {
      this.emit(`Panzoom.${e}`, t, ...i);
    }), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation);
  }
  attachEvents() {
    const t = this.container;
    t && (t.addEventListener("click", this.onClick, {
      passive: !1,
      capture: !1
    }), t.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize);
  }
  createPages() {
    let t = [];
    const {
      contentDim: e,
      viewportDim: i
    } = this;
    let n = this.option("slidesPerPage");
    n = ("auto" === n || e <= i) && !1 !== this.option("fill") ? 1 / 0 : parseFloat(n + "");
    let s = 0,
      o = 0,
      a = 0;
    for (const e of this.slides) (!t.length || o + e.dim - i > .05 || a >= n) && (t.push(N()), s = t.length - 1, o = 0, a = 0), t[s].slides.push(e), o += e.dim + e.gap, a++;
    return t;
  }
  processPages() {
    const e = this.pages,
      {
        contentDim: i,
        viewportDim: n,
        isInfinite: s
      } = this,
      o = this.option("center"),
      a = this.option("fill"),
      r = a && o && i > n && !s;
    if (e.forEach((t, e) => {
      var s;
      t.index = e, t.pos = (null === (s = t.slides[0]) || void 0 === s ? void 0 : s.pos) || 0, t.dim = 0;
      for (const [e, i] of t.slides.entries()) t.dim += i.dim, e < t.slides.length - 1 && (t.dim += i.gap);
      r && t.pos + .5 * t.dim < .5 * n ? t.pos = 0 : r && t.pos + .5 * t.dim >= i - .5 * n ? t.pos = i - n : o && (t.pos += -.5 * (n - t.dim));
    }), e.forEach(e => {
      a && !s && i > n && (e.pos = Math.max(e.pos, 0), e.pos = Math.min(e.pos, i - n)), e.pos = t(e.pos, 1e3), e.dim = t(e.dim, 1e3), Math.abs(e.pos) <= .1 && (e.pos = 0);
    }), s) return e;
    const l = [];
    let c;
    return e.forEach(t => {
      const e = Object.assign({}, t);
      c && e.pos === c.pos ? (c.dim += e.dim, c.slides = [...c.slides, ...e.slides]) : (e.index = l.length, c = e, l.push(e));
    }), l;
  }
  getPageFromIndex(t = 0) {
    const e = this.pages.length;
    let i;
    return t = parseInt((t || 0).toString()) || 0, i = this.isInfinite ? (t % e + e) % e : Math.max(Math.min(t, e - 1), 0), i;
  }
  getSlideMetrics(e) {
    var i, n;
    const s = this.isHorizontal ? "width" : "height";
    let o = 0,
      a = 0,
      r = e.el;
    const l = !(!r || r.parentNode);
    if (r ? o = parseFloat(r.dataset[s] || "") || 0 : (r = document.createElement("div"), r.style.visibility = "hidden", (this.track || document.body).prepend(r)), P(r, this.cn(J) + " " + e.class + " " + e.customClass), o) r.style[s] = `${o}px`, r.style["width" === s ? "height" : "width"] = "";else {
      l && (this.track || document.body).prepend(r), o = r.getBoundingClientRect()[s] * Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1);
      let t = r[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
      t - 1 > o && (o = t);
    }
    const c = getComputedStyle(r);
    return "content-box" === c.boxSizing && (this.isHorizontal ? (o += parseFloat(c.paddingLeft) || 0, o += parseFloat(c.paddingRight) || 0) : (o += parseFloat(c.paddingTop) || 0, o += parseFloat(c.paddingBottom) || 0)), a = parseFloat(c[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, l ? null === (n = r.parentElement) || void 0 === n || n.removeChild(r) : e.el || r.remove(), {
      dim: t(o, 1e3),
      gap: t(a, 1e3)
    };
  }
  getBounds() {
    const {
      isInfinite: t,
      isRTL: e,
      isHorizontal: i,
      pages: n
    } = this;
    let s = {
      min: 0,
      max: 0
    };
    if (t) s = {
      min: -1 / 0,
      max: 1 / 0
    };else if (n.length) {
      const t = n[0].pos,
        o = n[n.length - 1].pos;
      s = e && i ? {
        min: t,
        max: o
      } : {
        min: -1 * o,
        max: -1 * t
      };
    }
    return {
      x: i ? s : {
        min: 0,
        max: 0
      },
      y: i ? {
        min: 0,
        max: 0
      } : s
    };
  }
  repositionSlides() {
    let e,
      {
        isHorizontal: i,
        isRTL: n,
        isInfinite: s,
        viewport: o,
        viewportDim: a,
        contentDim: r,
        page: l,
        pages: c,
        slides: h,
        panzoom: d
      } = this,
      u = 0,
      p = 0,
      f = 0,
      g = 0;
    d ? g = -1 * d.current[this.axis] : c[l] && (g = c[l].pos || 0), e = i ? n ? "right" : "left" : "top", n && i && (g *= -1);
    for (const i of h) {
      const n = i.el;
      n ? ("top" === e ? (n.style.right = "", n.style.left = "") : n.style.top = "", i.index !== u ? n.style[e] = 0 === p ? "" : `${t(p, 1e3)}px` : n.style[e] = "", f += i.dim + i.gap, u++) : p += i.dim + i.gap;
    }
    if (s && f && o) {
      let n = getComputedStyle(o),
        s = "padding",
        l = i ? "Right" : "Bottom",
        c = parseFloat(n[s + (i ? "Left" : "Top")]);
      g -= c, a += c, a += parseFloat(n[s + l]);
      for (const i of h) i.el && (t(i.pos) < t(a) && t(i.pos + i.dim + i.gap) < t(g) && t(g) > t(r - a) && (i.el.style[e] = `${t(p + f, 1e3)}px`), t(i.pos + i.gap) >= t(r - a) && t(i.pos) > t(g + a) && t(g) < t(a) && (i.el.style[e] = `-${t(f, 1e3)}px`));
    }
    let m,
      v,
      b = [...this.inTransition];
    if (b.length > 1 && (m = c[b[0]], v = c[b[1]]), m && v) {
      let i = 0;
      for (const n of h) n.el ? this.inTransition.has(n.index) && m.slides.indexOf(n) < 0 && (n.el.style[e] = `${t(i + (m.pos - v.pos), 1e3)}px`) : i += n.dim + n.gap;
    }
  }
  createSlideEl(t) {
    const {
      track: e,
      slides: i
    } = this;
    if (!e || !t) return;
    if (t.el && t.el.parentNode) return;
    const n = t.el || document.createElement("div");
    P(n, this.cn(J)), P(n, t.class), P(n, t.customClass);
    const s = t.html;
    s && (s instanceof HTMLElement ? n.appendChild(s) : n.innerHTML = t.html + "");
    const o = [];
    i.forEach((t, e) => {
      t.el && o.push(e);
    });
    const a = t.index;
    let r = null;
    if (o.length) {
      r = i[o.reduce((t, e) => Math.abs(e - a) < Math.abs(t - a) ? e : t)];
    }
    const l = r && r.el && r.el.parentNode ? r.index < t.index ? r.el.nextSibling : r.el : null;
    e.insertBefore(n, e.contains(l) ? l : null), t.el = n, this.emit("createSlide", t);
  }
  removeSlideEl(t, e = !1) {
    const i = null == t ? void 0 : t.el;
    if (!i || !i.parentNode) return;
    const n = this.cn(K);
    if (i.classList.contains(n) && (S(i, n), this.emit("unselectSlide", t)), t.isDom && !e) return i.removeAttribute("aria-hidden"), i.removeAttribute("data-index"), void (i.style.left = "");
    this.emit("removeSlide", t);
    const s = new CustomEvent(G);
    i.dispatchEvent(s), t.el && (t.el.remove(), t.el = null);
  }
  transitionTo(t = 0, e = this.option("transition")) {
    var i, n, s, o;
    if (!e) return !1;
    const a = this.page,
      {
        pages: r,
        panzoom: l
      } = this;
    t = parseInt((t || 0).toString()) || 0;
    const c = this.getPageFromIndex(t);
    if (!l || !r[c] || r.length < 2 || Math.abs(((null === (n = null === (i = r[a]) || void 0 === i ? void 0 : i.slides[0]) || void 0 === n ? void 0 : n.dim) || 0) - this.viewportDim) > 1) return !1;
    let h = t > a ? 1 : -1;
    this.isInfinite && (0 === a && t === r.length - 1 && (h = -1), a === r.length - 1 && 0 === t && (h = 1));
    const d = r[c].pos * (this.isRTL ? 1 : -1);
    if (a === c && Math.abs(d - l.target[this.axis]) < 1) return !1;
    this.clearTransitions();
    const u = l.isResting;
    P(this.container, this.cn("inTransition"));
    const p = (null === (s = r[a]) || void 0 === s ? void 0 : s.slides[0]) || null,
      f = (null === (o = r[c]) || void 0 === o ? void 0 : o.slides[0]) || null;
    this.inTransition.add(f.index), this.createSlideEl(f);
    let g = p.el,
      m = f.el;
    u || e === J || (e = "fadeFast", g = null);
    const v = this.isRTL ? "next" : "prev",
      b = this.isRTL ? "prev" : "next";
    return g && (this.inTransition.add(p.index), p.transition = e, g.addEventListener(G, this.onAnimationEnd), g.classList.add(`f-${e}Out`, `to-${h > 0 ? b : v}`)), m && (f.transition = e, m.addEventListener(G, this.onAnimationEnd), m.classList.add(`f-${e}In`, `from-${h > 0 ? v : b}`)), l.current[this.axis] = d, l.target[this.axis] = d, l.requestTick(), this.onChange(c), !0;
  }
  manageSlideVisiblity() {
    const t = new Set(),
      e = new Set(),
      i = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
    for (const n of this.slides) i.has(n) ? t.add(n) : e.add(n);
    for (const e of this.inTransition) t.add(this.slides[e]);
    for (const e of t) this.createSlideEl(e), this.lazyLoadSlide(e);
    for (const i of e) t.has(i) || this.removeSlideEl(i);
    this.markSelectedSlides(), this.repositionSlides();
  }
  markSelectedSlides() {
    if (!this.pages[this.page] || !this.pages[this.page].slides) return;
    const t = "aria-hidden";
    let e = this.cn(K);
    if (e) for (const i of this.slides) {
      const n = i.el;
      n && (n.dataset.index = `${i.index}`, n.classList.contains("f-thumbs__slide") ? this.getVisibleSlides(0).has(i) ? n.removeAttribute(t) : n.setAttribute(t, "true") : this.pages[this.page].slides.includes(i) ? (n.classList.contains(e) || (P(n, e), this.emit("selectSlide", i)), n.removeAttribute(t)) : (n.classList.contains(e) && (S(n, e), this.emit("unselectSlide", i)), n.setAttribute(t, "true")));
    }
  }
  flipInfiniteTrack() {
    const {
        axis: t,
        isHorizontal: e,
        isInfinite: i,
        isRTL: n,
        viewportDim: s,
        contentDim: o
      } = this,
      a = this.panzoom;
    if (!a || !i) return;
    let r = a.current[t],
      l = a.target[t] - r,
      c = 0,
      h = .5 * s;
    n && e ? (r < -h && (c = -1, r += o), r > o - h && (c = 1, r -= o)) : (r > h && (c = 1, r -= o), r < -o + h && (c = -1, r += o)), c && (a.current[t] = r, a.target[t] = r + l);
  }
  lazyLoadImg(t, e) {
    const i = this,
      s = "f-fadeIn",
      o = "is-preloading";
    let a = !1,
      r = null;
    const l = () => {
      a || (a = !0, r && (r.remove(), r = null), S(e, o), e.complete && (P(e, s), setTimeout(() => {
        S(e, s);
      }, 350)), this.option("adaptiveHeight") && t.el && this.pages[this.page].slides.indexOf(t) > -1 && (i.updateMetrics(), i.setViewportHeight()), this.emit("load", t));
    };
    P(e, o), e.src = e.dataset.lazySrcset || e.dataset.lazySrc || "", delete e.dataset.lazySrc, delete e.dataset.lazySrcset, e.addEventListener("error", () => {
      l();
    }), e.addEventListener("load", () => {
      l();
    }), setTimeout(() => {
      const i = e.parentNode;
      i && t.el && (e.complete ? l() : a || (r = n(x), i.insertBefore(r, e)));
    }, 300);
  }
  lazyLoadSlide(t) {
    const e = t && t.el;
    if (!e) return;
    const i = new Set();
    let n = Array.from(e.querySelectorAll("[data-lazy-src],[data-lazy-srcset]"));
    e.dataset.lazySrc && n.push(e), n.map(t => {
      t instanceof HTMLImageElement ? i.add(t) : t instanceof HTMLElement && t.dataset.lazySrc && (t.style.backgroundImage = `url('${t.dataset.lazySrc}')`, delete t.dataset.lazySrc);
    });
    for (const e of i) this.lazyLoadImg(t, e);
  }
  onAnimationEnd(t) {
    var e;
    const i = t.target,
      n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1,
      s = this.slides[n],
      o = t.animationName;
    if (!i || !s || !o) return;
    const a = !!this.inTransition.has(n) && s.transition;
    a && o.substring(0, a.length + 2) === `f-${a}` && this.inTransition.delete(n), this.inTransition.size || this.clearTransitions(), n === this.page && (null === (e = this.panzoom) || void 0 === e ? void 0 : e.isResting) && this.emit("settle");
  }
  onDecel(t, e = 0, i = 0, n = 0, s = 0) {
    if (this.option("dragFree")) return void this.setPageFromPosition();
    const {
        isRTL: o,
        isHorizontal: a,
        axis: r,
        pages: l
      } = this,
      c = l.length,
      h = Math.abs(Math.atan2(i, e) / (Math.PI / 180));
    let d = 0;
    if (d = h > 45 && h < 135 ? a ? 0 : i : a ? e : 0, !c) return;
    let u = this.page,
      p = o && a ? 1 : -1;
    const f = t.current[r] * p;
    let {
      pageIndex: g
    } = this.getPageFromPosition(f);
    Math.abs(d) > 5 ? (l[u].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (u = g), u = o && a ? d < 0 ? u - 1 : u + 1 : d < 0 ? u + 1 : u - 1) : u = 0 === n && 0 === s ? u : g, this.slideTo(u, {
      transition: !1,
      friction: t.option("decelFriction")
    });
  }
  onClick(t) {
    const e = t.target,
      i = e && E(e) ? e.dataset : null;
    let n, s;
    i && (void 0 !== i.carouselPage ? (s = "slideTo", n = i.carouselPage) : void 0 !== i.carouselNext ? s = "slideNext" : void 0 !== i.carouselPrev && (s = "slidePrev")), s ? (t.preventDefault(), t.stopPropagation(), e && !e.hasAttribute("disabled") && this[s](n)) : this.emit("click", t);
  }
  onSlideTo(t) {
    const e = t.detail || 0;
    this.slideTo(this.getPageForSlide(e), {
      friction: 0
    });
  }
  onChange(t, e = 0) {
    const i = this.page;
    this.prevPage = i, this.page = t, this.option("adaptiveHeight") && this.setViewportHeight(), t !== i && (this.markSelectedSlides(), this.emit("change", t, i, e));
  }
  onRefresh() {
    let t = this.contentDim,
      e = this.viewportDim;
    this.updateMetrics(), this.contentDim === t && this.viewportDim === e || this.slideTo(this.page, {
      friction: 0,
      transition: !1
    });
  }
  onScroll() {
    var t;
    null === (t = this.viewport) || void 0 === t || t.scroll(0, 0);
  }
  onResize() {
    this.option("breakpoints") && this.processOptions();
  }
  onBeforeTransform(t) {
    this.lp !== t.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), this.lp = t.current.e;
  }
  onEndAnimation() {
    this.inTransition.size || this.emit("settle");
  }
  reInit(t = null, e = null) {
    this.destroy(), this.state = B.Init, this.prevPage = null, this.userOptions = t || this.userOptions, this.userPlugins = e || this.userPlugins, this.processOptions();
  }
  slideTo(t = 0, {
    friction: e = this.option("friction"),
    transition: i = this.option("transition")
  } = {}) {
    if (this.state === B.Destroy) return;
    t = parseInt((t || 0).toString()) || 0;
    const n = this.getPageFromIndex(t),
      {
        axis: s,
        isHorizontal: o,
        isRTL: a,
        pages: r,
        panzoom: l
      } = this,
      c = r.length,
      h = a && o ? 1 : -1;
    if (!l || !c) return;
    if (this.page !== n) {
      const e = new Event("beforeChange", {
        bubbles: !0,
        cancelable: !0
      });
      if (this.emit("beforeChange", e, t), e.defaultPrevented) return;
    }
    if (this.transitionTo(t, i)) return;
    let d = r[n].pos;
    if (this.isInfinite) {
      const e = this.contentDim,
        i = l.target[s] * h;
      if (2 === c) d += e * Math.floor(parseFloat(t + "") / 2);else {
        d = [d, d - e, d + e].reduce(function (t, e) {
          return Math.abs(e - i) < Math.abs(t - i) ? e : t;
        });
      }
    }
    d *= h, Math.abs(l.target[s] - d) < 1 || (l.panTo({
      x: o ? d : 0,
      y: o ? 0 : d,
      friction: e
    }), this.onChange(n));
  }
  slideToClosest(t) {
    if (this.panzoom) {
      const {
        pageIndex: e
      } = this.getPageFromPosition();
      this.slideTo(e, t);
    }
  }
  slideNext() {
    this.slideTo(this.page + 1);
  }
  slidePrev() {
    this.slideTo(this.page - 1);
  }
  clearTransitions() {
    this.inTransition.clear(), S(this.container, this.cn("inTransition"));
    const t = ["to-prev", "to-next", "from-prev", "from-next"];
    for (const e of this.slides) {
      const i = e.el;
      if (i) {
        i.removeEventListener(G, this.onAnimationEnd), i.classList.remove(...t);
        const n = e.transition;
        n && i.classList.remove(`f-${n}Out`, `f-${n}In`);
      }
    }
    this.manageSlideVisiblity();
  }
  addSlide(t, e) {
    var i, n, s, o;
    const a = this.panzoom,
      r = (null === (i = this.pages[this.page]) || void 0 === i ? void 0 : i.pos) || 0,
      l = (null === (n = this.pages[this.page]) || void 0 === n ? void 0 : n.dim) || 0,
      c = this.contentDim < this.viewportDim;
    let h = Array.isArray(e) ? e : [e];
    const d = [];
    for (const t of h) d.push(H(t));
    this.slides.splice(t, 0, ...d);
    for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
    for (const t of d) this.emit("beforeInitSlide", t, t.index);
    if (this.page >= t && (this.page += d.length), this.updateMetrics(), a) {
      const e = (null === (s = this.pages[this.page]) || void 0 === s ? void 0 : s.pos) || 0,
        i = (null === (o = this.pages[this.page]) || void 0 === o ? void 0 : o.dim) || 0,
        n = this.pages.length || 1,
        h = this.isRTL ? l - i : i - l,
        d = this.isRTL ? r - e : e - r;
      c && 1 === n ? (t <= this.page && (a.current[this.axis] -= h, a.target[this.axis] -= h), a.panTo({
        [this.isHorizontal ? "x" : "y"]: -1 * e
      })) : d && t <= this.page && (a.target[this.axis] -= d, a.current[this.axis] -= d, a.requestTick());
    }
    for (const t of d) this.emit("initSlide", t, t.index);
  }
  prependSlide(t) {
    this.addSlide(0, t);
  }
  appendSlide(t) {
    this.addSlide(this.slides.length, t);
  }
  removeSlide(t) {
    const e = this.slides.length;
    t = (t % e + e) % e;
    const i = this.slides[t];
    if (i) {
      this.removeSlideEl(i, !0), this.slides.splice(t, 1);
      for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
      this.updateMetrics(), this.slideTo(this.page, {
        friction: 0,
        transition: !1
      }), this.emit("destroySlide", i);
    }
  }
  updateMetrics() {
    const {
      panzoom: e,
      viewport: i,
      track: n,
      slides: s,
      isHorizontal: o,
      isInfinite: a
    } = this;
    if (!n) return;
    const r = o ? "width" : "height",
      l = o ? "offsetWidth" : "offsetHeight";
    if (i) {
      let e = Math.max(i[l], t(i.getBoundingClientRect()[r], 1e3)),
        n = getComputedStyle(i),
        s = "padding",
        a = o ? "Right" : "Bottom";
      e -= parseFloat(n[s + (o ? "Left" : "Top")]) + parseFloat(n[s + a]), this.viewportDim = e;
    }
    let c,
      h = 0;
    for (const [e, i] of s.entries()) {
      let n = 0,
        o = 0;
      !i.el && c ? (n = c.dim, o = c.gap) : (({
        dim: n,
        gap: o
      } = this.getSlideMetrics(i)), c = i), n = t(n, 1e3), o = t(o, 1e3), i.dim = n, i.gap = o, i.pos = h, h += n, (a || e < s.length - 1) && (h += o);
    }
    h = t(h, 1e3), this.contentDim = h, e && (e.contentRect[r] = h, e.contentRect[o ? "fullWidth" : "fullHeight"] = h), this.pages = this.createPages(), this.pages = this.processPages(), this.state === B.Init && this.setInitialPage(), this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), this.manageSlideVisiblity(), this.emit("refresh");
  }
  getProgress(e, i = !1, n = !1) {
    void 0 === e && (e = this.page);
    const s = this,
      o = s.panzoom,
      a = s.contentDim,
      r = s.pages[e] || 0;
    if (!r || !o) return e > this.page ? -1 : 1;
    let l = -1 * o.current.e,
      c = t((l - r.pos) / (1 * r.dim), 1e3),
      h = c,
      d = c;
    this.isInfinite && !0 !== n && (h = t((l - r.pos + a) / (1 * r.dim), 1e3), d = t((l - r.pos - a) / (1 * r.dim), 1e3));
    let u = [c, h, d].reduce(function (t, e) {
      return Math.abs(e) < Math.abs(t) ? e : t;
    });
    return i ? u : u > 1 ? 1 : u < -1 ? -1 : u;
  }
  setViewportHeight() {
    const {
      page: t,
      pages: e,
      viewport: i,
      isHorizontal: n
    } = this;
    if (!i || !e[t]) return;
    let s = 0;
    n && this.track && (this.track.style.height = "auto", e[t].slides.forEach(t => {
      t.el && (s = Math.max(s, t.el.offsetHeight));
    })), i.style.height = s ? `${s}px` : "";
  }
  getPageForSlide(t) {
    for (const e of this.pages) for (const i of e.slides) if (i.index === t) return e.index;
    return -1;
  }
  getVisibleSlides(t = 0) {
    var e;
    const i = new Set();
    let {
      panzoom: n,
      contentDim: s,
      viewportDim: o,
      pages: a,
      page: r
    } = this;
    if (o) {
      s = s + (null === (e = this.slides[this.slides.length - 1]) || void 0 === e ? void 0 : e.gap) || 0;
      let l = 0;
      l = n && n.state !== m.Init && n.state !== m.Destroy ? -1 * n.current[this.axis] : a[r] && a[r].pos || 0, this.isInfinite && (l -= Math.floor(l / s) * s), this.isRTL && this.isHorizontal && (l *= -1);
      const c = l - o * t,
        h = l + o * (t + 1),
        d = this.isInfinite ? [-1, 0, 1] : [0];
      for (const t of this.slides) for (const e of d) {
        const n = t.pos + e * s,
          o = n + t.dim + t.gap;
        n < h && o > c && i.add(t);
      }
    }
    return i;
  }
  getPageFromPosition(t) {
    const {
        viewportDim: e,
        contentDim: i,
        slides: n,
        pages: s,
        panzoom: o
      } = this,
      a = s.length,
      r = n.length,
      l = n[0],
      c = n[r - 1],
      h = this.option("center");
    let d = 0,
      u = 0,
      p = 0,
      f = void 0 === t ? -1 * ((null == o ? void 0 : o.target[this.axis]) || 0) : t;
    h && (f += .5 * e), this.isInfinite ? (f < l.pos - .5 * c.gap && (f -= i, p = -1), f > c.pos + c.dim + .5 * c.gap && (f -= i, p = 1)) : f = Math.max(l.pos || 0, Math.min(f, c.pos));
    let g = c,
      m = n.find(t => {
        const e = t.pos - .5 * g.gap,
          i = t.pos + t.dim + .5 * t.gap;
        return g = t, f >= e && f < i;
      });
    return m || (m = c), u = this.getPageForSlide(m.index), d = u + p * a, {
      page: d,
      pageIndex: u
    };
  }
  setPageFromPosition() {
    const {
      pageIndex: t
    } = this.getPageFromPosition();
    this.onChange(t);
  }
  destroy() {
    if ([B.Destroy].includes(this.state)) return;
    this.state = B.Destroy;
    const {
        container: t,
        viewport: e,
        track: i,
        slides: n,
        panzoom: s
      } = this,
      o = this.option("classes");
    t.removeEventListener("click", this.onClick, {
      passive: !1,
      capture: !1
    }), t.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), s && (s.destroy(), this.panzoom = null), n && n.forEach(t => {
      this.removeSlideEl(t);
    }), this.detachPlugins(), e && (e.removeEventListener("scroll", this.onScroll), e.offsetParent && i && i.offsetParent && e.replaceWith(...i.childNodes));
    for (const [e, i] of Object.entries(o)) "container" !== e && i && t.classList.remove(i);
    this.track = null, this.viewport = null, this.page = 0, this.slides = [];
    const a = this.events.get("ready");
    this.events = new Map(), a && this.events.set("ready", a);
  }
}
Object.defineProperty(Q, "Panzoom", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: I
}), Object.defineProperty(Q, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: j
}), Object.defineProperty(Q, "Plugins", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: U
});
const tt = function (t) {
    if (!E(t)) return 0;
    const e = window.scrollY,
      i = window.innerHeight,
      n = e + i,
      s = t.getBoundingClientRect(),
      o = s.y + e,
      a = s.height,
      r = o + a;
    if (e > r || n < o) return 0;
    if (e < o && n > r) return 100;
    if (o < e && r > n) return 100;
    let l = a;
    o < e && (l -= e - o), r > n && (l -= r - n);
    const c = l / i * 100;
    return Math.round(c);
  },
  et = !("undefined" == typeof window || !window.document || !window.document.createElement);
let it;
const nt = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(","),
  st = t => {
    if (t && et) {
      void 0 === it && document.createElement("div").focus({
        get preventScroll() {
          return it = !0, !1;
        }
      });
      try {
        if (it) t.focus({
          preventScroll: !0
        });else {
          const e = window.scrollY || document.body.scrollTop,
            i = window.scrollX || document.body.scrollLeft;
          t.focus(), document.body.scrollTo({
            top: e,
            left: i,
            behavior: "auto"
          });
        }
      } catch (t) {}
    }
  },
  ot = () => {
    const t = document;
    let e,
      i = "",
      n = "",
      s = "";
    return t.fullscreenEnabled ? (i = "requestFullscreen", n = "exitFullscreen", s = "fullscreenElement") : t.webkitFullscreenEnabled && (i = "webkitRequestFullscreen", n = "webkitExitFullscreen", s = "webkitFullscreenElement"), i && (e = {
      request: function (e = t.documentElement) {
        return "webkitRequestFullscreen" === i ? e[i](Element.ALLOW_KEYBOARD_INPUT) : e[i]();
      },
      exit: function () {
        return t[s] && t[n]();
      },
      isFullscreen: function () {
        return t[s];
      }
    }), e;
  },
  at = {
    animated: !0,
    autoFocus: !0,
    backdropClick: "close",
    Carousel: {
      classes: {
        container: "fancybox__carousel",
        viewport: "fancybox__viewport",
        track: "fancybox__track",
        slide: "fancybox__slide"
      }
    },
    closeButton: "auto",
    closeExisting: !1,
    commonCaption: !1,
    compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
    contentClick: "toggleZoom",
    contentDblClick: !1,
    defaultType: "image",
    defaultDisplay: "block",
    dragToClose: !0,
    Fullscreen: {
      autoStart: !1
    },
    groupAll: !1,
    groupAttr: "data-fancybox",
    hideClass: "f-fadeOut",
    hideScrollbar: !0,
    idle: 3500,
    keyboard: {
      Escape: "close",
      Delete: "close",
      Backspace: "close",
      PageUp: "next",
      PageDown: "prev",
      ArrowUp: "prev",
      ArrowDown: "next",
      ArrowRight: "next",
      ArrowLeft: "prev"
    },
    l10n: Object.assign(Object.assign({}, b), {
      CLOSE: "Close",
      NEXT: "Next",
      PREV: "Previous",
      MODAL: "You can close this modal content with the ESC key",
      ERROR: "Something Went Wrong, Please Try Again Later",
      IMAGE_ERROR: "Image Not Found",
      ELEMENT_NOT_FOUND: "HTML Element Not Found",
      AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
      AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
      IFRAME_ERROR: "Error Loading Page",
      TOGGLE_ZOOM: "Toggle zoom level",
      TOGGLE_THUMBS: "Toggle thumbnails",
      TOGGLE_SLIDESHOW: "Toggle slideshow",
      TOGGLE_FULLSCREEN: "Toggle full-screen mode",
      DOWNLOAD: "Download"
    }),
    parentEl: null,
    placeFocusBack: !0,
    showClass: "f-zoomInUp",
    startIndex: 0,
    tpl: {
      closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
      main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'
    },
    trapFocus: !0,
    wheel: "zoom"
  };
var rt, lt;
!function (t) {
  t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Closing = 2] = "Closing", t[t.CustomClosing = 3] = "CustomClosing", t[t.Destroy = 4] = "Destroy";
}(rt || (rt = {})), function (t) {
  t[t.Loading = 0] = "Loading", t[t.Opening = 1] = "Opening", t[t.Ready = 2] = "Ready", t[t.Closing = 3] = "Closing";
}(lt || (lt = {}));
let ct = "",
  ht = !1,
  dt = !1,
  ut = null;
const pt = () => {
    let t = "",
      e = "";
    const i = Oe.getInstance();
    if (i) {
      const n = i.carousel,
        s = i.getSlide();
      if (n && s) {
        let o = s.slug || void 0,
          a = s.triggerEl || void 0;
        e = o || i.option("slug") || "", !e && a && a.dataset && (e = a.dataset.fancybox || ""), e && "true" !== e && (t = "#" + e + (!o && n.slides.length > 1 ? "-" + (s.index + 1) : ""));
      }
    }
    return {
      hash: t,
      slug: e,
      index: 1
    };
  },
  ft = () => {
    const t = new URL(document.URL).hash,
      e = t.slice(1).split("-"),
      i = e[e.length - 1],
      n = i && /^\+?\d+$/.test(i) && parseInt(e.pop() || "1", 10) || 1;
    return {
      hash: t,
      slug: e.join("-"),
      index: n
    };
  },
  gt = () => {
    const {
      slug: t,
      index: e
    } = ft();
    if (!t) return;
    let i = document.querySelector(`[data-slug="${t}"]`);
    if (i && i.dispatchEvent(new CustomEvent("click", {
      bubbles: !0,
      cancelable: !0
    })), Oe.getInstance()) return;
    const n = document.querySelectorAll(`[data-fancybox="${t}"]`);
    n.length && (i = n[e - 1], i && i.dispatchEvent(new CustomEvent("click", {
      bubbles: !0,
      cancelable: !0
    })));
  },
  mt = () => {
    if (!1 === Oe.defaults.Hash) return;
    const t = Oe.getInstance();
    if (!1 === (null == t ? void 0 : t.options.Hash)) return;
    const {
        slug: e,
        index: i
      } = ft(),
      {
        slug: n
      } = pt();
    t && (e === n ? t.jumpTo(i - 1) : (ht = !0, t.close())), gt();
  },
  vt = () => {
    ut && clearTimeout(ut), queueMicrotask(() => {
      mt();
    });
  },
  bt = () => {
    window.addEventListener("hashchange", vt, !1), setTimeout(() => {
      mt();
    }, 500);
  };
et && (/complete|interactive|loaded/.test(document.readyState) ? bt() : document.addEventListener("DOMContentLoaded", bt));
const yt = "is-zooming-in";
class wt extends _ {
  onCreateSlide(t, e, i) {
    const n = this.instance.optionFor(i, "src") || "";
    i.el && "image" === i.type && "string" == typeof n && this.setImage(i, n);
  }
  onRemoveSlide(t, e, i) {
    i.panzoom && i.panzoom.destroy(), i.panzoom = void 0, i.imageEl = void 0;
  }
  onChange(t, e, i, n) {
    S(this.instance.container, yt);
    for (const t of e.slides) {
      const e = t.panzoom;
      e && t.index !== i && e.reset(.35);
    }
  }
  onClose() {
    var t;
    const e = this.instance,
      i = e.container,
      n = e.getSlide();
    if (!i || !i.parentElement || !n) return;
    const {
      el: s,
      contentEl: o,
      panzoom: a,
      thumbElSrc: r
    } = n;
    if (!s || !r || !o || !a || a.isContentLoading || a.state === m.Init || a.state === m.Destroy) return;
    a.updateMetrics();
    let l = this.getZoomInfo(n);
    if (!l) return;
    this.instance.state = rt.CustomClosing, i.classList.remove(yt), i.classList.add("is-zooming-out"), o.style.backgroundImage = `url('${r}')`;
    const c = i.getBoundingClientRect();
    1 === ((null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1) && Object.assign(i.style, {
      position: "absolute",
      top: `${i.offsetTop + window.scrollY}px`,
      left: `${i.offsetLeft + window.scrollX}px`,
      bottom: "auto",
      right: "auto",
      width: `${c.width}px`,
      height: `${c.height}px`,
      overflow: "hidden"
    });
    const {
      x: h,
      y: d,
      scale: u,
      opacity: p
    } = l;
    if (p) {
      const t = ((t, e, i, n) => {
        const s = e - t,
          o = n - i;
        return e => i + ((e - t) / s * o || 0);
      })(a.scale, u, 1, 0);
      a.on("afterTransform", () => {
        o.style.opacity = t(a.scale) + "";
      });
    }
    a.on("endAnimation", () => {
      e.destroy();
    }), a.target.a = u, a.target.b = 0, a.target.c = 0, a.target.d = u, a.panTo({
      x: h,
      y: d,
      scale: u,
      friction: p ? .2 : .33,
      ignoreBounds: !0
    }), a.isResting && e.destroy();
  }
  setImage(t, e) {
    const i = this.instance;
    t.src = e, this.process(t, e).then(e => {
      const {
        contentEl: n,
        imageEl: s,
        thumbElSrc: o,
        el: a
      } = t;
      if (i.isClosing() || !n || !s) return;
      n.offsetHeight;
      const r = !!i.isOpeningSlide(t) && this.getZoomInfo(t);
      if (this.option("protected") && a) {
        a.addEventListener("contextmenu", t => {
          t.preventDefault();
        });
        const t = document.createElement("div");
        P(t, "fancybox-protected"), n.appendChild(t);
      }
      if (o && r) {
        const s = e.contentRect,
          a = Math.max(s.fullWidth, s.fullHeight);
        let c = null;
        !r.opacity && a > 1200 && (c = document.createElement("img"), P(c, "fancybox-ghost"), c.src = o, n.appendChild(c));
        const h = () => {
          c && (P(c, "f-fadeFastOut"), setTimeout(() => {
            c && (c.remove(), c = null);
          }, 200));
        };
        (l = o, new Promise((t, e) => {
          const i = new Image();
          i.onload = t, i.onerror = e, i.src = l;
        })).then(() => {
          i.hideLoading(t), t.state = lt.Opening, this.instance.emit("reveal", t), this.zoomIn(t).then(() => {
            h(), this.instance.done(t);
          }, () => {}), c && setTimeout(() => {
            h();
          }, a > 2500 ? 800 : 200);
        }, () => {
          i.hideLoading(t), i.revealContent(t);
        });
      } else {
        const n = this.optionFor(t, "initialSize"),
          s = this.optionFor(t, "zoom"),
          o = {
            event: i.prevMouseMoveEvent || i.options.event,
            friction: s ? .12 : 0
          };
        let a = i.optionFor(t, "showClass") || void 0,
          r = !0;
        i.isOpeningSlide(t) && ("full" === n ? e.zoomToFull(o) : "cover" === n ? e.zoomToCover(o) : "max" === n ? e.zoomToMax(o) : r = !1, e.stop("current")), r && a && (a = e.isDragging ? "f-fadeIn" : ""), i.hideLoading(t), i.revealContent(t, a);
      }
      var l;
    }, () => {
      i.setError(t, "{{IMAGE_ERROR}}");
    });
  }
  process(t, e) {
    return new Promise((i, s) => {
      var o;
      const a = this.instance,
        r = t.el;
      a.clearContent(t), a.showLoading(t);
      let l = this.optionFor(t, "content");
      if ("string" == typeof l && (l = n(l)), !l || !E(l)) {
        if (l = document.createElement("img"), l instanceof HTMLImageElement) {
          let i = "",
            n = t.caption;
          i = "string" == typeof n && n ? n.replace(/<[^>]+>/gi, "").substring(0, 1e3) : `Image ${t.index + 1} of ${(null === (o = a.carousel) || void 0 === o ? void 0 : o.pages.length) || 1}`, l.src = e || "", l.alt = i, l.draggable = !1, t.srcset && l.setAttribute("srcset", t.srcset), this.instance.isOpeningSlide(t) && (l.fetchPriority = "high");
        }
        t.sizes && l.setAttribute("sizes", t.sizes);
      }
      P(l, "fancybox-image"), t.imageEl = l, a.setContent(t, l, !1);
      t.panzoom = new I(r, u({
        transformParent: !0
      }, this.option("Panzoom") || {}, {
        content: l,
        width: (e, i) => a.optionFor(t, "width", "auto", i) || "auto",
        height: (e, i) => a.optionFor(t, "height", "auto", i) || "auto",
        wheel: () => {
          const t = a.option("wheel");
          return ("zoom" === t || "pan" == t) && t;
        },
        click: (e, i) => {
          var n, s;
          if (a.isCompact || a.isClosing()) return !1;
          if (t.index !== (null === (n = a.getSlide()) || void 0 === n ? void 0 : n.index)) return !1;
          if (i) {
            const t = i.composedPath()[0];
            if (["A", "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(t.nodeName)) return !1;
          }
          let o = !i || i.target && (null === (s = t.contentEl) || void 0 === s ? void 0 : s.contains(i.target));
          return a.option(o ? "contentClick" : "backdropClick") || !1;
        },
        dblClick: () => a.isCompact ? "toggleZoom" : a.option("contentDblClick") || !1,
        spinner: !1,
        panOnlyZoomed: !0,
        wheelLimit: 1 / 0,
        on: {
          ready: t => {
            i(t);
          },
          error: () => {
            s();
          },
          destroy: () => {
            s();
          }
        }
      }));
    });
  }
  zoomIn(t) {
    return new Promise((e, i) => {
      const n = this.instance,
        s = n.container,
        {
          panzoom: o,
          contentEl: a,
          el: r
        } = t;
      o && o.updateMetrics();
      const l = this.getZoomInfo(t);
      if (!(l && r && a && o && s)) return void i();
      const {
          x: c,
          y: h,
          scale: d,
          opacity: u
        } = l,
        p = () => {
          t.state !== lt.Closing && (u && (a.style.opacity = Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - d)), 0) + ""), o.scale >= 1 && o.scale > o.targetScale - .1 && e(o));
        },
        f = t => {
          (t.scale < .99 || t.scale > 1.01) && !t.isDragging || (S(s, yt), a.style.opacity = "", t.off("endAnimation", f), t.off("touchStart", f), t.off("afterTransform", p), e(t));
        };
      o.on("endAnimation", f), o.on("touchStart", f), o.on("afterTransform", p), o.on(["error", "destroy"], () => {
        i();
      }), o.panTo({
        x: c,
        y: h,
        scale: d,
        friction: 0,
        ignoreBounds: !0
      }), o.stop("current");
      const g = {
          event: "mousemove" === o.panMode ? n.prevMouseMoveEvent || n.options.event : void 0
        },
        m = this.optionFor(t, "initialSize");
      P(s, yt), n.hideLoading(t), "full" === m ? o.zoomToFull(g) : "cover" === m ? o.zoomToCover(g) : "max" === m ? o.zoomToMax(g) : o.reset(.172);
    });
  }
  getZoomInfo(t) {
    const {
        el: e,
        imageEl: i,
        thumbEl: n,
        panzoom: s
      } = t,
      o = this.instance,
      a = o.container;
    if (!e || !i || !n || !s || tt(n) < 3 || !this.optionFor(t, "zoom") || !a || o.state === rt.Destroy) return !1;
    if ("0" === getComputedStyle(a).getPropertyValue("--f-images-zoom")) return !1;
    const r = window.visualViewport || null;
    if (1 !== (r ? r.scale : 1)) return !1;
    let {
        top: l,
        left: c,
        width: h,
        height: d
      } = n.getBoundingClientRect(),
      {
        top: u,
        left: p,
        fitWidth: f,
        fitHeight: g
      } = s.contentRect;
    if (!(h && d && f && g)) return !1;
    const m = s.container.getBoundingClientRect();
    p += m.left, u += m.top;
    const v = -1 * (p + .5 * f - (c + .5 * h)),
      b = -1 * (u + .5 * g - (l + .5 * d)),
      y = h / f;
    let w = this.option("zoomOpacity") || !1;
    return "auto" === w && (w = Math.abs(h / d - f / g) > .1), {
      x: v,
      y: b,
      scale: y,
      opacity: w
    };
  }
  attach() {
    const t = this,
      e = t.instance;
    e.on("Carousel.change", t.onChange), e.on("Carousel.createSlide", t.onCreateSlide), e.on("Carousel.removeSlide", t.onRemoveSlide), e.on("close", t.onClose);
  }
  detach() {
    const t = this,
      e = t.instance;
    e.off("Carousel.change", t.onChange), e.off("Carousel.createSlide", t.onCreateSlide), e.off("Carousel.removeSlide", t.onRemoveSlide), e.off("close", t.onClose);
  }
}
Object.defineProperty(wt, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    initialSize: "fit",
    Panzoom: {
      maxScale: 1
    },
    protected: !1,
    zoom: !0,
    zoomOpacity: "auto"
  }
}), "function" == typeof SuppressedError && SuppressedError;
const xt = "html",
  Et = "image",
  St = "map",
  Pt = "youtube",
  Ct = "vimeo",
  Tt = "html5video",
  Mt = (t, e = {}) => {
    const i = new URL(t),
      n = new URLSearchParams(i.search),
      s = new URLSearchParams();
    for (const [t, i] of [...n, ...Object.entries(e)]) {
      let e = i + "";
      if ("t" === t) {
        let t = e.match(/((\d*)m)?(\d*)s?/);
        t && s.set("start", 60 * parseInt(t[2] || "0") + parseInt(t[3] || "0") + "");
      } else s.set(t, e);
    }
    let o = s + "",
      a = t.match(/#t=((.*)?\d+s)/);
    return a && (o += `#t=${a[1]}`), o;
  },
  Ot = {
    ajax: null,
    autoSize: !0,
    iframeAttr: {
      allow: "autoplay; fullscreen",
      scrolling: "auto"
    },
    preload: !0,
    videoAutoplay: !0,
    videoRatio: 16 / 9,
    videoTpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
    videoFormat: "",
    vimeo: {
      byline: 1,
      color: "00adef",
      controls: 1,
      dnt: 1,
      muted: 0
    },
    youtube: {
      controls: 1,
      enablejsapi: 1,
      nocookie: 1,
      rel: 0,
      fs: 1
    }
  },
  At = ["image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo"];
class Lt extends _ {
  onBeforeInitSlide(t, e, i) {
    this.processType(i);
  }
  onCreateSlide(t, e, i) {
    this.setContent(i);
  }
  onClearContent(t, e) {
    e.xhr && (e.xhr.abort(), e.xhr = null);
    const i = e.iframeEl;
    i && (i.onload = i.onerror = null, i.src = "//about:blank", e.iframeEl = null);
    const n = e.contentEl,
      s = e.placeholderEl;
    if ("inline" === e.type && n && s) n.classList.remove("fancybox__content"), "none" !== n.style.display && (n.style.display = "none"), s.parentNode && s.parentNode.insertBefore(n, s), s.remove(), e.contentEl = void 0, e.placeholderEl = void 0;else for (; e.el && e.el.firstChild;) e.el.removeChild(e.el.firstChild);
  }
  onSelectSlide(t, e, i) {
    i.state === lt.Ready && this.playVideo();
  }
  onUnselectSlide(t, e, i) {
    var n, s;
    if (i.type === Tt) {
      try {
        null === (s = null === (n = i.el) || void 0 === n ? void 0 : n.querySelector("video")) || void 0 === s || s.pause();
      } catch (t) {}
      return;
    }
    let o;
    i.type === Ct ? o = {
      method: "pause",
      value: "true"
    } : i.type === Pt && (o = {
      event: "command",
      func: "pauseVideo"
    }), o && i.iframeEl && i.iframeEl.contentWindow && i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"), i.poller && clearTimeout(i.poller);
  }
  onDone(t, e) {
    t.isCurrentSlide(e) && !t.isClosing() && this.playVideo();
  }
  onRefresh(t, e) {
    e.slides.forEach(t => {
      t.el && (this.resizeIframe(t), this.setAspectRatio(t));
    });
  }
  onMessage(t) {
    try {
      let e = JSON.parse(t.data);
      if ("https://player.vimeo.com" === t.origin) {
        if ("ready" === e.event) for (let e of Array.from(document.getElementsByClassName("fancybox__iframe"))) e instanceof HTMLIFrameElement && e.contentWindow === t.source && (e.dataset.ready = "true");
      } else if (t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === e.event) {
        const t = document.getElementById(e.id);
        t && (t.dataset.ready = "true");
      }
    } catch (t) {}
  }
  loadAjaxContent(t) {
    const e = this.instance.optionFor(t, "src") || "";
    this.instance.showLoading(t);
    const i = this.instance,
      n = new XMLHttpRequest();
    i.showLoading(t), n.onreadystatechange = function () {
      n.readyState === XMLHttpRequest.DONE && i.state === rt.Ready && (i.hideLoading(t), 200 === n.status ? i.setContent(t, n.responseText) : i.setError(t, 404 === n.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
    };
    const s = t.ajax || null;
    n.open(s ? "POST" : "GET", e + ""), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(s), t.xhr = n;
  }
  setInlineContent(t) {
    let e = null;
    if (E(t.src)) e = t.src;else if ("string" == typeof t.src) {
      const i = t.src.split("#", 2).pop();
      e = i ? document.getElementById(i) : null;
    }
    if (e) {
      if ("clone" === t.type || e.closest(".fancybox__slide")) {
        e = e.cloneNode(!0);
        const i = e.dataset.animationName;
        i && (e.classList.remove(i), delete e.dataset.animationName);
        let n = e.getAttribute("id");
        n = n ? `${n}--clone` : `clone-${this.instance.id}-${t.index}`, e.setAttribute("id", n);
      } else if (e.parentNode) {
        const i = document.createElement("div");
        i.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(i, e), t.placeholderEl = i;
      }
      this.instance.setContent(t, e);
    } else this.instance.setError(t, "{{ELEMENT_NOT_FOUND}}");
  }
  setIframeContent(t) {
    const {
      src: e,
      el: i
    } = t;
    if (!e || "string" != typeof e || !i) return;
    i.classList.add("is-loading");
    const n = this.instance,
      s = document.createElement("iframe");
    s.className = "fancybox__iframe", s.setAttribute("id", `fancybox__iframe_${n.id}_${t.index}`);
    for (const [e, i] of Object.entries(this.optionFor(t, "iframeAttr") || {})) s.setAttribute(e, i);
    s.onerror = () => {
      n.setError(t, "{{IFRAME_ERROR}}");
    }, t.iframeEl = s;
    const o = this.optionFor(t, "preload");
    if ("iframe" !== t.type || !1 === o) return s.setAttribute("src", t.src + ""), n.setContent(t, s, !1), this.resizeIframe(t), void n.revealContent(t);
    n.showLoading(t), s.onload = () => {
      if (!s.src.length) return;
      const e = "true" !== s.dataset.ready;
      s.dataset.ready = "true", this.resizeIframe(t), e ? n.revealContent(t) : n.hideLoading(t);
    }, s.setAttribute("src", e), n.setContent(t, s, !1);
  }
  resizeIframe(t) {
    const {
      type: e,
      iframeEl: i
    } = t;
    if (e === Pt || e === Ct) return;
    const n = null == i ? void 0 : i.parentElement;
    if (!i || !n) return;
    let s = t.autoSize;
    void 0 === s && (s = this.optionFor(t, "autoSize"));
    let o = t.width || 0,
      a = t.height || 0;
    o && a && (s = !1);
    const r = n && n.style;
    if (!1 !== t.preload && !1 !== s && r) try {
      const t = window.getComputedStyle(n),
        e = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
        s = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom),
        l = i.contentWindow;
      if (l) {
        const t = l.document,
          i = t.getElementsByTagName(xt)[0],
          n = t.body;
        r.width = "", n.style.overflow = "hidden", o = o || i.scrollWidth + e, r.width = `${o}px`, n.style.overflow = "", r.flex = "0 0 auto", r.height = `${n.scrollHeight}px`, a = i.scrollHeight + s;
      }
    } catch (t) {}
    if (o || a) {
      const t = {
        flex: "0 1 auto",
        width: "",
        height: ""
      };
      o && "auto" !== o && (t.width = `${o}px`), a && "auto" !== a && (t.height = `${a}px`), Object.assign(r, t);
    }
  }
  playVideo() {
    const t = this.instance.getSlide();
    if (!t) return;
    const {
      el: e
    } = t;
    if (!e || !e.offsetParent) return;
    if (!this.optionFor(t, "videoAutoplay")) return;
    if (t.type === Tt) try {
      const t = e.querySelector("video");
      if (t) {
        const e = t.play();
        void 0 !== e && e.then(() => {}).catch(e => {
          t.muted = !0, t.play();
        });
      }
    } catch (t) {}
    if (t.type !== Pt && t.type !== Ct) return;
    const i = () => {
      if (t.iframeEl && t.iframeEl.contentWindow) {
        let e;
        if ("true" === t.iframeEl.dataset.ready) return e = t.type === Pt ? {
          event: "command",
          func: "playVideo"
        } : {
          method: "play",
          value: "true"
        }, e && t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"), void (t.poller = void 0);
        t.type === Pt && (e = {
          event: "listening",
          id: t.iframeEl.getAttribute("id")
        }, t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"));
      }
      t.poller = setTimeout(i, 250);
    };
    i();
  }
  processType(t) {
    if (t.html) return t.type = xt, t.src = t.html, void (t.html = "");
    const e = this.instance.optionFor(t, "src", "");
    if (!e || "string" != typeof e) return;
    let i = t.type,
      n = null;
    if (n = e.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
      const s = this.optionFor(t, Pt),
        {
          nocookie: o
        } = s,
        a = function (t, e) {
          var i = {};
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (n = Object.getOwnPropertySymbols(t); s < n.length; s++) e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]]);
          }
          return i;
        }(s, ["nocookie"]),
        r = `www.youtube${o ? "-nocookie" : ""}.com`,
        l = Mt(e, a),
        c = encodeURIComponent(n[2]);
      t.videoId = c, t.src = `https://${r}/embed/${c}?${l}`, t.thumbSrc = t.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`, i = Pt;
    } else if (n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
      const s = Mt(e, this.optionFor(t, Ct)),
        o = encodeURIComponent(n[1]),
        a = n[4] || "";
      t.videoId = o, t.src = `https://player.vimeo.com/video/${o}?${a ? `h=${a}${s ? "&" : ""}` : ""}${s}`, i = Ct;
    }
    if (!i && t.triggerEl) {
      const e = t.triggerEl.dataset.type;
      At.includes(e) && (i = e);
    }
    i || "string" == typeof e && ("#" === e.charAt(0) ? i = "inline" : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = Tt, t.videoFormat = t.videoFormat || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = Et : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")), (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = `https://maps.google.${n[1]}/?ll=${(n[2] ? n[2] + "&z=" + Math.floor(parseFloat(n[3])) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&")}&output=${n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, i = St) : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = `https://maps.google.${n[1]}/maps?q=${n[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, i = St), i = i || this.instance.option("defaultType"), t.type = i, i === Et && (t.thumbSrc = t.thumbSrc || t.src);
  }
  setContent(t) {
    const e = this.instance.optionFor(t, "src") || "";
    if (t && t.type && e) {
      switch (t.type) {
        case xt:
          this.instance.setContent(t, e);
          break;
        case Tt:
          const i = this.option("videoTpl");
          i && this.instance.setContent(t, i.replace(/\{\{src\}\}/gi, e + "").replace(/\{\{format\}\}/gi, this.optionFor(t, "videoFormat") || "").replace(/\{\{poster\}\}/gi, t.poster || t.thumbSrc || ""));
          break;
        case "inline":
        case "clone":
          this.setInlineContent(t);
          break;
        case "ajax":
          this.loadAjaxContent(t);
          break;
        case "pdf":
        case St:
        case Pt:
        case Ct:
          t.preload = !1;
        case "iframe":
          this.setIframeContent(t);
      }
      this.setAspectRatio(t);
    }
  }
  setAspectRatio(t) {
    const e = t.contentEl;
    if (!(t.el && e && t.type && [Pt, Ct, Tt].includes(t.type))) return;
    let i,
      n = t.width || "auto",
      s = t.height || "auto";
    if ("auto" === n || "auto" === s) {
      i = this.optionFor(t, "videoRatio");
      const e = (i + "").match(/(\d+)\s*\/\s?(\d+)/);
      i = e && e.length > 2 ? parseFloat(e[1]) / parseFloat(e[2]) : parseFloat(i + "");
    } else n && s && (i = n / s);
    if (!i) return;
    e.style.aspectRatio = "", e.style.width = "", e.style.height = "", e.offsetHeight;
    const o = e.getBoundingClientRect(),
      a = o.width || 1,
      r = o.height || 1;
    e.style.aspectRatio = i + "", i < a / r ? (s = "auto" === s ? r : Math.min(r, s), e.style.width = "auto", e.style.height = `${s}px`) : (n = "auto" === n ? a : Math.min(a, n), e.style.width = `${n}px`, e.style.height = "auto");
  }
  attach() {
    const t = this,
      e = t.instance;
    e.on("Carousel.beforeInitSlide", t.onBeforeInitSlide), e.on("Carousel.createSlide", t.onCreateSlide), e.on("Carousel.selectSlide", t.onSelectSlide), e.on("Carousel.unselectSlide", t.onUnselectSlide), e.on("Carousel.Panzoom.refresh", t.onRefresh), e.on("done", t.onDone), e.on("clearContent", t.onClearContent), window.addEventListener("message", t.onMessage);
  }
  detach() {
    const t = this,
      e = t.instance;
    e.off("Carousel.beforeInitSlide", t.onBeforeInitSlide), e.off("Carousel.createSlide", t.onCreateSlide), e.off("Carousel.selectSlide", t.onSelectSlide), e.off("Carousel.unselectSlide", t.onUnselectSlide), e.off("Carousel.Panzoom.refresh", t.onRefresh), e.off("done", t.onDone), e.off("clearContent", t.onClearContent), window.removeEventListener("message", t.onMessage);
  }
}
Object.defineProperty(Lt, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: Ot
});
const zt = "play",
  Rt = "pause",
  kt = "ready";
class It extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "state", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: kt
    }), Object.defineProperty(this, "inHover", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "timer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "progressBar", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    });
  }
  get isActive() {
    return this.state !== kt;
  }
  onReady(t) {
    this.option("autoStart") && (t.isInfinite || t.page < t.pages.length - 1) && this.start();
  }
  onChange() {
    this.removeProgressBar(), this.pause();
  }
  onSettle() {
    this.resume();
  }
  onVisibilityChange() {
    "visible" === document.visibilityState ? this.resume() : this.pause();
  }
  onMouseEnter() {
    this.inHover = !0, this.pause();
  }
  onMouseLeave() {
    var t;
    this.inHover = !1, (null === (t = this.instance.panzoom) || void 0 === t ? void 0 : t.isResting) && this.resume();
  }
  onTimerEnd() {
    const t = this.instance;
    "play" === this.state && (t.isInfinite || t.page !== t.pages.length - 1 ? t.slideNext() : t.slideTo(0));
  }
  removeProgressBar() {
    this.progressBar && (this.progressBar.remove(), this.progressBar = null);
  }
  createProgressBar() {
    var t;
    if (!this.option("showProgress")) return null;
    this.removeProgressBar();
    const e = this.instance,
      i = (null === (t = e.pages[e.page]) || void 0 === t ? void 0 : t.slides) || [];
    let n = this.option("progressParentEl");
    if (n || (n = (1 === i.length ? i[0].el : null) || e.viewport), !n) return null;
    const s = document.createElement("div");
    return P(s, "f-progress"), n.prepend(s), this.progressBar = s, s.offsetHeight, s;
  }
  set() {
    const t = this,
      e = t.instance;
    if (e.pages.length < 2) return;
    if (t.timer) return;
    const i = t.option("timeout");
    t.state = zt, P(e.container, "has-autoplay");
    let n = t.createProgressBar();
    n && (n.style.transitionDuration = `${i}ms`, n.style.transform = "scaleX(1)"), t.timer = setTimeout(() => {
      t.timer = null, t.inHover || t.onTimerEnd();
    }, i), t.emit("set");
  }
  clear() {
    const t = this;
    t.timer && (clearTimeout(t.timer), t.timer = null), t.removeProgressBar();
  }
  start() {
    const t = this;
    if (t.set(), t.state !== kt) {
      if (t.option("pauseOnHover")) {
        const e = t.instance.container;
        e.addEventListener("mouseenter", t.onMouseEnter, !1), e.addEventListener("mouseleave", t.onMouseLeave, !1);
      }
      document.addEventListener("visibilitychange", t.onVisibilityChange, !1), t.emit("start");
    }
  }
  stop() {
    const t = this,
      e = t.state,
      i = t.instance.container;
    t.clear(), t.state = kt, i.removeEventListener("mouseenter", t.onMouseEnter, !1), i.removeEventListener("mouseleave", t.onMouseLeave, !1), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), S(i, "has-autoplay"), e !== kt && t.emit("stop");
  }
  pause() {
    const t = this;
    t.state === zt && (t.state = Rt, t.clear(), t.emit(Rt));
  }
  resume() {
    const t = this,
      e = t.instance;
    if (e.isInfinite || e.page !== e.pages.length - 1) {
      if (t.state !== zt) {
        if (t.state === Rt && !t.inHover) {
          const e = new Event("resume", {
            bubbles: !0,
            cancelable: !0
          });
          t.emit("resume", e), e.defaultPrevented || t.set();
        }
      } else t.set();
    } else t.stop();
  }
  toggle() {
    this.state === zt || this.state === Rt ? this.stop() : this.start();
  }
  attach() {
    const t = this,
      e = t.instance;
    e.on("ready", t.onReady), e.on("Panzoom.startAnimation", t.onChange), e.on("Panzoom.endAnimation", t.onSettle), e.on("Panzoom.touchMove", t.onChange);
  }
  detach() {
    const t = this,
      e = t.instance;
    e.off("ready", t.onReady), e.off("Panzoom.startAnimation", t.onChange), e.off("Panzoom.endAnimation", t.onSettle), e.off("Panzoom.touchMove", t.onChange), t.stop();
  }
}
Object.defineProperty(It, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    autoStart: !0,
    pauseOnHover: !0,
    progressParentEl: null,
    showProgress: !0,
    timeout: 3e3
  }
});
class Dt extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "ref", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    });
  }
  onPrepare(t) {
    const e = t.carousel;
    if (!e) return;
    const i = t.container;
    i && (e.options.Autoplay = u({
      autoStart: !1
    }, this.option("Autoplay") || {}, {
      pauseOnHover: !1,
      timeout: this.option("timeout"),
      progressParentEl: () => this.option("progressParentEl") || null,
      on: {
        start: () => {
          t.emit("startSlideshow");
        },
        set: e => {
          var n;
          i.classList.add("has-slideshow"), (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) !== lt.Ready && e.pause();
        },
        stop: () => {
          i.classList.remove("has-slideshow"), t.isCompact || t.endIdle(), t.emit("endSlideshow");
        },
        resume: (e, i) => {
          var n, s, o;
          !i || !i.cancelable || (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) === lt.Ready && (null === (o = null === (s = t.carousel) || void 0 === s ? void 0 : s.panzoom) || void 0 === o ? void 0 : o.isResting) || i.preventDefault();
        }
      }
    }), e.attachPlugins({
      Autoplay: It
    }), this.ref = e.plugins.Autoplay);
  }
  onReady(t) {
    const e = t.carousel,
      i = this.ref;
    i && e && this.option("playOnStart") && (e.isInfinite || e.page < e.pages.length - 1) && i.start();
  }
  onDone(t, e) {
    const i = this.ref,
      n = t.carousel;
    if (!i || !n) return;
    const s = e.panzoom;
    s && s.on("startAnimation", () => {
      t.isCurrentSlide(e) && i.stop();
    }), t.isCurrentSlide(e) && i.resume();
  }
  onKeydown(t, e) {
    var i;
    const n = this.ref;
    n && e === this.option("key") && "BUTTON" !== (null === (i = document.activeElement) || void 0 === i ? void 0 : i.nodeName) && n.toggle();
  }
  attach() {
    const t = this,
      e = t.instance;
    e.on("Carousel.init", t.onPrepare), e.on("Carousel.ready", t.onReady), e.on("done", t.onDone), e.on("keydown", t.onKeydown);
  }
  detach() {
    const t = this,
      e = t.instance;
    e.off("Carousel.init", t.onPrepare), e.off("Carousel.ready", t.onReady), e.off("done", t.onDone), e.off("keydown", t.onKeydown);
  }
}
Object.defineProperty(Dt, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    key: " ",
    playOnStart: !1,
    progressParentEl: t => {
      var e;
      return (null === (e = t.instance.container) || void 0 === e ? void 0 : e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || t.instance.container;
    },
    timeout: 3e3
  }
});
const Ft = {
  classes: {
    container: "f-thumbs f-carousel__thumbs",
    viewport: "f-thumbs__viewport",
    track: "f-thumbs__track",
    slide: "f-thumbs__slide",
    isResting: "is-resting",
    isSelected: "is-selected",
    isLoading: "is-loading",
    hasThumbs: "has-thumbs"
  },
  minCount: 2,
  parentEl: null,
  thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
  type: "modern"
};
var jt;
!function (t) {
  t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Hidden = 2] = "Hidden";
}(jt || (jt = {}));
const Bt = "isResting",
  Ht = "thumbWidth",
  Nt = "thumbHeight",
  _t = "thumbClipWidth";
let $t = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "type", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "modern"
    }), Object.defineProperty(this, "container", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "track", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "carousel", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "thumbWidth", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "thumbClipWidth", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "thumbHeight", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "thumbGap", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "thumbExtraGap", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "state", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: jt.Init
    });
  }
  get isModern() {
    return "modern" === this.type;
  }
  onInitSlide(t, e) {
    const i = e.el ? e.el.dataset : void 0;
    i && (e.thumbSrc = i.thumbSrc || e.thumbSrc || "", e[_t] = parseFloat(i[_t] || "") || e[_t] || 0, e[Nt] = parseFloat(i.thumbHeight || "") || e[Nt] || 0), this.addSlide(e);
  }
  onInitSlides() {
    this.build();
  }
  onChange() {
    var t;
    if (!this.isModern) return;
    const e = this.container,
      i = this.instance,
      n = i.panzoom,
      s = this.carousel,
      a = s ? s.panzoom : null,
      r = i.page;
    if (n && s && a) {
      if (n.isDragging) {
        S(e, this.cn(Bt));
        let n = (null === (t = s.pages[r]) || void 0 === t ? void 0 : t.pos) || 0;
        n += i.getProgress(r) * (this[_t] + this.thumbGap);
        let o = a.getBounds();
        -1 * n > o.x.min && -1 * n < o.x.max && a.panTo({
          x: -1 * n,
          friction: .12
        });
      } else o(e, this.cn(Bt), n.isResting);
      this.shiftModern();
    }
  }
  onRefresh() {
    this.updateProps();
    for (const t of this.instance.slides || []) this.resizeModernSlide(t);
    this.shiftModern();
  }
  isDisabled() {
    const t = this.option("minCount") || 0;
    if (t) {
      const e = this.instance;
      let i = 0;
      for (const t of e.slides || []) t.thumbSrc && i++;
      if (i < t) return !0;
    }
    const e = this.option("type");
    return ["modern", "classic"].indexOf(e) < 0;
  }
  getThumb(t) {
    const e = this.option("thumbTpl") || "";
    return {
      html: this.instance.localize(e, [["%i", t.index], ["%d", t.index + 1], ["%s", t.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]])
    };
  }
  addSlide(t) {
    const e = this.carousel;
    e && e.addSlide(t.index, this.getThumb(t));
  }
  getSlides() {
    const t = [];
    for (const e of this.instance.slides || []) t.push(this.getThumb(e));
    return t;
  }
  resizeModernSlide(t) {
    this.isModern && (t[Ht] = t[_t] && t[Nt] ? Math.round(this[Nt] * (t[_t] / t[Nt])) : this[Ht]);
  }
  updateProps() {
    const t = this.container;
    if (!t) return;
    const e = e => parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-" + e)) || 0;
    this.thumbGap = e("gap"), this.thumbExtraGap = e("extra-gap"), this[Ht] = e("width") || 40, this[_t] = e("clip-width") || 40, this[Nt] = e("height") || 40;
  }
  build() {
    const t = this;
    if (t.state !== jt.Init) return;
    if (t.isDisabled()) return void t.emit("disabled");
    const e = t.instance,
      i = e.container,
      n = t.getSlides(),
      s = t.option("type");
    t.type = s;
    const o = t.option("parentEl"),
      a = t.cn("container"),
      r = t.cn("track");
    let l = null == o ? void 0 : o.querySelector("." + a);
    l || (l = document.createElement("div"), P(l, a), o ? o.appendChild(l) : i.after(l)), P(l, `is-${s}`), P(i, t.cn("hasThumbs")), t.container = l, t.updateProps();
    let c = l.querySelector("." + r);
    c || (c = document.createElement("div"), P(c, t.cn("track")), l.appendChild(c)), t.track = c;
    const h = u({}, {
        track: c,
        infinite: !1,
        center: !0,
        fill: "classic" === s,
        dragFree: !0,
        slidesPerPage: 1,
        transition: !1,
        preload: .25,
        friction: .12,
        Panzoom: {
          maxVelocity: 0
        },
        Dots: !1,
        Navigation: !1,
        classes: {
          container: "f-thumbs",
          viewport: "f-thumbs__viewport",
          track: "f-thumbs__track",
          slide: "f-thumbs__slide"
        }
      }, t.option("Carousel") || {}, {
        Sync: {
          target: e
        },
        slides: n
      }),
      d = new e.constructor(l, h);
    d.on("createSlide", (e, i) => {
      t.setProps(i.index), t.emit("createSlide", i, i.el);
    }), d.on("ready", () => {
      t.shiftModern(), t.emit("ready");
    }), d.on("refresh", () => {
      t.shiftModern();
    }), d.on("Panzoom.click", (e, i, n) => {
      t.onClick(n);
    }), t.carousel = d, t.state = jt.Ready;
  }
  onClick(t) {
    t.preventDefault(), t.stopPropagation();
    const e = this.instance,
      {
        pages: i,
        page: n
      } = e,
      s = t => {
        if (t) {
          const e = t.closest("[data-carousel-index]");
          if (e) return [parseInt(e.dataset.carouselIndex || "", 10) || 0, e];
        }
        return [-1, void 0];
      },
      o = (t, e) => {
        const i = document.elementFromPoint(t, e);
        return i ? s(i) : [-1, void 0];
      };
    let [a, r] = s(t.target);
    if (a > -1) return;
    const l = this[_t],
      c = t.clientX,
      h = t.clientY;
    let [d, u] = o(c - l, h),
      [p, f] = o(c + l, h);
    u && f ? (a = Math.abs(c - u.getBoundingClientRect().right) < Math.abs(c - f.getBoundingClientRect().left) ? d : p, a === n && (a = a === d ? p : d)) : u ? a = d : f && (a = p), a > -1 && i[a] && e.slideTo(a);
  }
  getShift(t) {
    var e;
    const i = this,
      {
        instance: n
      } = i,
      s = i.carousel;
    if (!n || !s) return 0;
    const o = i[Ht],
      a = i[_t],
      r = i.thumbGap,
      l = i.thumbExtraGap;
    if (!(null === (e = s.slides[t]) || void 0 === e ? void 0 : e.el)) return 0;
    const c = .5 * (o - a),
      h = n.pages.length - 1;
    let d = n.getProgress(0),
      u = n.getProgress(h),
      p = n.getProgress(t, !1, !0),
      f = 0,
      g = c + l + r;
    const m = d < 0 && d > -1,
      v = u > 0 && u < 1;
    return 0 === t ? (f = g * Math.abs(d), v && 1 === d && (f -= g * Math.abs(u))) : t === h ? (f = g * Math.abs(u) * -1, m && -1 === u && (f += g * Math.abs(d))) : m || v ? (f = -1 * g, f += g * Math.abs(d), f += g * (1 - Math.abs(u))) : f = g * p, f;
  }
  setProps(e) {
    var i;
    const n = this;
    if (!n.isModern) return;
    const {
        instance: s
      } = n,
      o = n.carousel;
    if (s && o) {
      const a = null === (i = o.slides[e]) || void 0 === i ? void 0 : i.el;
      if (a && a.childNodes.length) {
        let i = t(1 - Math.abs(s.getProgress(e))),
          o = t(n.getShift(e));
        a.style.setProperty("--progress", i ? i + "" : ""), a.style.setProperty("--shift", o + "");
      }
    }
  }
  shiftModern() {
    const t = this;
    if (!t.isModern) return;
    const {
        instance: e,
        track: i
      } = t,
      n = e.panzoom,
      s = t.carousel;
    if (!(e && i && n && s)) return;
    if (n.state === m.Init || n.state === m.Destroy) return;
    for (const i of e.slides) t.setProps(i.index);
    let o = (t[_t] + t.thumbGap) * (s.slides.length || 0);
    i.style.setProperty("--width", o + "");
  }
  cleanup() {
    const t = this;
    t.carousel && t.carousel.destroy(), t.carousel = null, t.container && t.container.remove(), t.container = null, t.track && t.track.remove(), t.track = null, t.state = jt.Init, S(t.instance.container, t.cn("hasThumbs"));
  }
  attach() {
    const t = this,
      e = t.instance;
    e.on("initSlide", t.onInitSlide), e.state === B.Init ? e.on("initSlides", t.onInitSlides) : t.onInitSlides(), e.on(["change", "Panzoom.afterTransform"], t.onChange), e.on("Panzoom.refresh", t.onRefresh);
  }
  detach() {
    const t = this,
      e = t.instance;
    e.off("initSlide", t.onInitSlide), e.off("initSlides", t.onInitSlides), e.off(["change", "Panzoom.afterTransform"], t.onChange), e.off("Panzoom.refresh", t.onRefresh), t.cleanup();
  }
};
Object.defineProperty($t, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: Ft
});
const Wt = Object.assign(Object.assign({}, Ft), {
    key: "t",
    showOnStart: !0,
    parentEl: null
  }),
  Xt = "is-masked",
  qt = "aria-hidden";
class Yt extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "ref", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "hidden", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    });
  }
  get isEnabled() {
    const t = this.ref;
    return t && !t.isDisabled();
  }
  get isHidden() {
    return this.hidden;
  }
  onClick(t, e) {
    e.stopPropagation();
  }
  onCreateSlide(t, e) {
    var i, n, s;
    const o = (null === (s = null === (n = null === (i = this.instance) || void 0 === i ? void 0 : i.carousel) || void 0 === n ? void 0 : n.slides[e.index]) || void 0 === s ? void 0 : s.type) || "",
      a = e.el;
    if (a && o) {
      let t = `for-${o}`;
      ["video", "youtube", "vimeo", "html5video"].includes(o) && (t += " for-video"), P(a, t);
    }
  }
  onInit() {
    var t;
    const e = this,
      i = e.instance,
      n = i.carousel;
    if (e.ref || !n) return;
    const s = e.option("parentEl") || i.footer || i.container;
    if (!s) return;
    const o = u({}, e.options, {
      parentEl: s,
      classes: {
        container: "f-thumbs fancybox__thumbs"
      },
      Carousel: {
        Sync: {
          friction: i.option("Carousel.friction") || 0
        }
      },
      on: {
        ready: t => {
          const i = t.container;
          i && this.hidden && (e.refresh(), i.style.transition = "none", e.hide(), i.offsetHeight, queueMicrotask(() => {
            i.style.transition = "", e.show();
          }));
        }
      }
    });
    o.Carousel = o.Carousel || {}, o.Carousel.on = u((null === (t = e.options.Carousel) || void 0 === t ? void 0 : t.on) || {}, {
      click: this.onClick,
      createSlide: this.onCreateSlide
    }), n.options.Thumbs = o, n.attachPlugins({
      Thumbs: $t
    }), e.ref = n.plugins.Thumbs, e.option("showOnStart") || (e.ref.state = jt.Hidden, e.hidden = !0);
  }
  onResize() {
    var t;
    const e = null === (t = this.ref) || void 0 === t ? void 0 : t.container;
    e && (e.style.maxHeight = "");
  }
  onKeydown(t, e) {
    const i = this.option("key");
    i && i === e && this.toggle();
  }
  toggle() {
    const t = this.ref;
    if (t && !t.isDisabled()) return t.state === jt.Hidden ? (t.state = jt.Init, void t.build()) : void (this.hidden ? this.show() : this.hide());
  }
  show() {
    const t = this.ref;
    if (!t || t.isDisabled()) return;
    const e = t.container;
    e && (this.refresh(), e.offsetHeight, e.removeAttribute(qt), e.classList.remove(Xt), this.hidden = !1);
  }
  hide() {
    const t = this.ref,
      e = t && t.container;
    e && (this.refresh(), e.offsetHeight, e.classList.add(Xt), e.setAttribute(qt, "true")), this.hidden = !0;
  }
  refresh() {
    const t = this.ref;
    if (!t || !t.state) return;
    const e = t.container,
      i = (null == e ? void 0 : e.firstChild) || null;
    e && i && i.childNodes.length && (e.style.maxHeight = `${i.getBoundingClientRect().height}px`);
  }
  attach() {
    const t = this,
      e = t.instance;
    e.state === rt.Init ? e.on("Carousel.init", t.onInit) : t.onInit(), e.on("resize", t.onResize), e.on("keydown", t.onKeydown);
  }
  detach() {
    var t;
    const e = this,
      i = e.instance;
    i.off("Carousel.init", e.onInit), i.off("resize", e.onResize), i.off("keydown", e.onKeydown), null === (t = i.carousel) || void 0 === t || t.detachPlugins(["Thumbs"]), e.ref = null;
  }
}
Object.defineProperty(Yt, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: Wt
});
const Vt = {
  panLeft: {
    icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
    change: {
      panX: -100
    }
  },
  panRight: {
    icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
    change: {
      panX: 100
    }
  },
  panUp: {
    icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
    change: {
      panY: -100
    }
  },
  panDown: {
    icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
    change: {
      panY: 100
    }
  },
  zoomIn: {
    icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
    action: "zoomIn"
  },
  zoomOut: {
    icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
    action: "zoomOut"
  },
  toggle1to1: {
    icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
    action: "toggleZoom"
  },
  toggleZoom: {
    icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
    action: "toggleZoom"
  },
  iterateZoom: {
    icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
    action: "iterateZoom"
  },
  rotateCCW: {
    icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
    action: "rotateCCW"
  },
  rotateCW: {
    icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
    action: "rotateCW"
  },
  flipX: {
    icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
    action: "flipX"
  },
  flipY: {
    icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
    action: "flipY"
  },
  fitX: {
    icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
    action: "fitX"
  },
  fitY: {
    icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
    action: "fitY"
  },
  reset: {
    icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
    action: "reset"
  },
  toggleFS: {
    icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
    action: "toggleFS"
  }
};
var Zt;
!function (t) {
  t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Disabled = 2] = "Disabled";
}(Zt || (Zt = {}));
const Ut = {
    absolute: "auto",
    display: {
      left: ["infobar"],
      middle: [],
      right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"]
    },
    enabled: "auto",
    items: {
      infobar: {
        tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'
      },
      download: {
        tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'
      },
      prev: {
        tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'
      },
      next: {
        tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'
      },
      slideshow: {
        tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'
      },
      fullscreen: {
        tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'
      },
      thumbs: {
        tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'
      },
      close: {
        tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'
      }
    },
    parentEl: null
  },
  Gt = {
    tabindex: "-1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  },
  Kt = "has-toolbar",
  Jt = "fancybox__toolbar";
class Qt extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "state", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Zt.Init
    }), Object.defineProperty(this, "container", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    });
  }
  onReady(t) {
    var e;
    if (!t.carousel) return;
    let i = this.option("display"),
      n = this.option("absolute"),
      s = this.option("enabled");
    if ("auto" === s) {
      const t = this.instance.carousel;
      let e = 0;
      if (t) for (const i of t.slides) (i.panzoom || "image" === i.type) && e++;
      e || (s = !1);
    }
    s || (i = void 0);
    let o = 0;
    const a = {
      left: [],
      middle: [],
      right: []
    };
    if (i) for (const t of ["left", "middle", "right"]) for (const n of i[t]) {
      const i = this.createEl(n);
      i && (null === (e = a[t]) || void 0 === e || e.push(i), o++);
    }
    let r = null;
    if (o && (r = this.createContainer()), r) {
      for (const [t, e] of Object.entries(a)) {
        const i = document.createElement("div");
        P(i, Jt + "__column is-" + t);
        for (const t of e) i.appendChild(t);
        "auto" !== n || "middle" !== t || e.length || (n = !0), r.appendChild(i);
      }
      !0 === n && P(r, "is-absolute"), this.state = Zt.Ready, this.onRefresh();
    } else this.state = Zt.Disabled;
  }
  onClick(t) {
    var e, i;
    const n = this.instance,
      s = n.getSlide(),
      o = null == s ? void 0 : s.panzoom,
      a = t.target,
      r = a && E(a) ? a.dataset : null;
    if (!r) return;
    if (void 0 !== r.fancyboxToggleThumbs) return t.preventDefault(), t.stopPropagation(), void (null === (e = n.plugins.Thumbs) || void 0 === e || e.toggle());
    if (void 0 !== r.fancyboxToggleFullscreen) return t.preventDefault(), t.stopPropagation(), void this.instance.toggleFullscreen();
    if (void 0 !== r.fancyboxToggleSlideshow) {
      t.preventDefault(), t.stopPropagation();
      const e = null === (i = n.carousel) || void 0 === i ? void 0 : i.plugins.Autoplay;
      let s = e.isActive;
      return o && "mousemove" === o.panMode && !s && o.reset(), void (s ? e.stop() : e.start());
    }
    const l = r.panzoomAction,
      c = r.panzoomChange;
    if ((c || l) && (t.preventDefault(), t.stopPropagation()), c) {
      let t = {};
      try {
        t = JSON.parse(c);
      } catch (t) {}
      o && o.applyChange(t);
    } else l && o && o[l] && o[l]();
  }
  onChange() {
    this.onRefresh();
  }
  onRefresh() {
    if (this.instance.isClosing()) return;
    const t = this.container;
    if (!t) return;
    const e = this.instance.getSlide();
    if (!e || e.state !== lt.Ready) return;
    const i = e && !e.error && e.panzoom;
    for (const e of t.querySelectorAll("[data-panzoom-action]")) i ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
    let n = i && i.canZoomIn(),
      s = i && i.canZoomOut();
    for (const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]')) n ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
    for (const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]')) s ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
    for (const e of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
      s || n ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
      const t = e.querySelector("g");
      t && (t.style.display = n ? "" : "none");
    }
  }
  onDone(t, e) {
    var i;
    null === (i = e.panzoom) || void 0 === i || i.on("afterTransform", () => {
      this.instance.isCurrentSlide(e) && this.onRefresh();
    }), this.instance.isCurrentSlide(e) && this.onRefresh();
  }
  createContainer() {
    const t = this.instance.container;
    if (!t) return null;
    const e = this.option("parentEl") || t;
    let i = e.querySelector("." + Jt);
    return i || (i = document.createElement("div"), P(i, Jt), e.prepend(i)), i.addEventListener("click", this.onClick, {
      passive: !1,
      capture: !0
    }), t && P(t, Kt), this.container = i, i;
  }
  createEl(t) {
    const e = this.instance,
      i = e.carousel;
    if (!i) return null;
    if ("toggleFS" === t) return null;
    if ("fullscreen" === t && !ot()) return null;
    let s = null;
    const o = i.slides.length || 0;
    let a = 0,
      r = 0;
    for (const t of i.slides) (t.panzoom || "image" === t.type) && a++, ("image" === t.type || t.downloadSrc) && r++;
    if (o < 2 && ["infobar", "prev", "next"].includes(t)) return s;
    if (void 0 !== Vt[t] && !a) return null;
    if ("download" === t && !r) return null;
    if ("thumbs" === t) {
      const t = e.plugins.Thumbs;
      if (!t || !t.isEnabled) return null;
    }
    if ("slideshow" === t) {
      if (!i.plugins.Autoplay || o < 2) return null;
    }
    if (void 0 !== Vt[t]) {
      const e = Vt[t];
      s = document.createElement("button"), s.setAttribute("title", this.instance.localize(`{{${t.toUpperCase()}}}`)), P(s, "f-button"), e.action && (s.dataset.panzoomAction = e.action), e.change && (s.dataset.panzoomChange = JSON.stringify(e.change)), s.appendChild(n(this.instance.localize(e.icon)));
    } else {
      const e = (this.option("items") || [])[t];
      e && (s = n(this.instance.localize(e.tpl)), "function" == typeof e.click && s.addEventListener("click", t => {
        t.preventDefault(), t.stopPropagation(), "function" == typeof e.click && e.click.call(this, this, t);
      }));
    }
    const l = null == s ? void 0 : s.querySelector("svg");
    if (l) for (const [t, e] of Object.entries(Gt)) l.getAttribute(t) || l.setAttribute(t, String(e));
    return s;
  }
  removeContainer() {
    const t = this.container;
    t && t.remove(), this.container = null, this.state = Zt.Disabled;
    const e = this.instance.container;
    e && S(e, Kt);
  }
  attach() {
    const t = this,
      e = t.instance;
    e.on("Carousel.initSlides", t.onReady), e.on("done", t.onDone), e.on(["reveal", "Carousel.change"], t.onChange), t.onReady(t.instance);
  }
  detach() {
    const t = this,
      e = t.instance;
    e.off("Carousel.initSlides", t.onReady), e.off("done", t.onDone), e.off(["reveal", "Carousel.change"], t.onChange), t.removeContainer();
  }
}
Object.defineProperty(Qt, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: Ut
});
const te = {
    Hash: class extends _ {
      onReady() {
        ht = !1;
      }
      onChange(t) {
        ut && clearTimeout(ut);
        const {
            hash: e
          } = pt(),
          {
            hash: i
          } = ft(),
          n = t.isOpeningSlide(t.getSlide());
        n && (ct = i === e ? "" : i), e && e !== i && (ut = setTimeout(() => {
          try {
            if (t.state === rt.Ready) {
              let t = "replaceState";
              n && !dt && (t = "pushState", dt = !0), window.history[t]({}, document.title, window.location.pathname + window.location.search + e);
            }
          } catch (t) {}
        }, 300));
      }
      onClose(t) {
        if (ut && clearTimeout(ut), !ht && dt) return dt = !1, ht = !1, void window.history.back();
        if (!ht) try {
          window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (ct || ""));
        } catch (t) {}
      }
      attach() {
        const t = this.instance;
        t.on("ready", this.onReady), t.on(["Carousel.ready", "Carousel.change"], this.onChange), t.on("close", this.onClose);
      }
      detach() {
        const t = this.instance;
        t.off("ready", this.onReady), t.off(["Carousel.ready", "Carousel.change"], this.onChange), t.off("close", this.onClose);
      }
      static parseURL() {
        return ft();
      }
      static startFromUrl() {
        gt();
      }
      static destroy() {
        window.removeEventListener("hashchange", vt, !1);
      }
    },
    Html: Lt,
    Images: wt,
    Slideshow: Dt,
    Thumbs: Yt,
    Toolbar: Qt
  },
  ee = "with-fancybox",
  ie = "hide-scrollbar",
  ne = "--fancybox-scrollbar-compensate",
  se = "--fancybox-body-margin",
  oe = "aria-hidden",
  ae = "is-using-tab",
  re = "is-animated",
  le = "is-compact",
  ce = "is-loading",
  he = "is-opening",
  de = "has-caption",
  ue = "disabled",
  pe = "tabindex",
  fe = "download",
  ge = "href",
  me = "src",
  ve = t => "string" == typeof t,
  be = function () {
    var t = window.getSelection();
    return !!t && "Range" === t.type;
  };
let ye,
  we = null,
  xe = null,
  Ee = 0,
  Se = 0,
  Pe = 0,
  Ce = 0;
const Te = new Map();
let Me = 0;
class Oe extends g {
  get isIdle() {
    return this.idle;
  }
  get isCompact() {
    return this.option("compact");
  }
  constructor(t = [], e = {}, i = {}) {
    super(e), Object.defineProperty(this, "userSlides", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "userPlugins", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, "idle", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "idleTimer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "clickTimer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "pwt", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "ignoreFocusChange", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "startedFs", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "state", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: rt.Init
    }), Object.defineProperty(this, "id", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "container", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "caption", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "footer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "carousel", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "lastFocus", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "prevMouseMoveEvent", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), ye || (ye = ot()), this.id = e.id || ++Me, Te.set(this.id, this), this.userSlides = t, this.userPlugins = i, queueMicrotask(() => {
      this.init();
    });
  }
  init() {
    if (this.state === rt.Destroy) return;
    this.state = rt.Init, this.attachPlugins(Object.assign(Object.assign({}, Oe.Plugins), this.userPlugins)), this.emit("init"), this.emit("attachPlugins"), !0 === this.option("hideScrollbar") && (() => {
      if (!et) return;
      const t = document,
        e = t.body,
        i = t.documentElement;
      if (e.classList.contains(ie)) return;
      let n = window.innerWidth - i.getBoundingClientRect().width;
      const s = parseFloat(window.getComputedStyle(e).marginRight);
      n < 0 && (n = 0), i.style.setProperty(ne, `${n}px`), s && e.style.setProperty(se, `${s}px`), e.classList.add(ie);
    })(), this.initLayout(), this.scale();
    const t = () => {
      this.initCarousel(this.userSlides), this.state = rt.Ready, this.attachEvents(), this.emit("ready"), setTimeout(() => {
        this.container && this.container.setAttribute(oe, "false");
      }, 16);
    };
    this.option("Fullscreen.autoStart") && ye && !ye.isFullscreen() ? ye.request().then(() => {
      this.startedFs = !0, t();
    }).catch(() => t()) : t();
  }
  initLayout() {
    var t, e;
    const i = this.option("parentEl") || document.body,
      s = n(this.localize(this.option("tpl.main") || ""));
    if (s) {
      if (s.setAttribute("id", `fancybox-${this.id}`), s.setAttribute("aria-label", this.localize("{{MODAL}}")), s.classList.toggle(le, this.isCompact), P(s, this.option("mainClass") || ""), P(s, he), this.container = s, this.footer = s.querySelector(".fancybox__footer"), i.appendChild(s), P(document.documentElement, ee), we && xe || (we = document.createElement("span"), P(we, "fancybox-focus-guard"), we.setAttribute(pe, "0"), we.setAttribute(oe, "true"), we.setAttribute("aria-label", "Focus guard"), xe = we.cloneNode(), null === (t = s.parentElement) || void 0 === t || t.insertBefore(we, s), null === (e = s.parentElement) || void 0 === e || e.append(xe)), s.addEventListener("mousedown", t => {
        Ee = t.pageX, Se = t.pageY, S(s, ae);
      }), this.option("closeExisting")) for (const t of Te.values()) t.id !== this.id && t.close();else this.option("animated") && (P(s, re), setTimeout(() => {
        this.isClosing() || S(s, re);
      }, 350));
      this.emit("initLayout");
    }
  }
  initCarousel(t) {
    const i = this.container;
    if (!i) return;
    const n = i.querySelector(".fancybox__carousel");
    if (!n) return;
    const s = this.carousel = new Q(n, u({}, {
      slides: t,
      transition: "fade",
      Panzoom: {
        lockAxis: this.option("dragToClose") ? "xy" : "x",
        infinite: !!this.option("dragToClose") && "y"
      },
      Dots: !1,
      Navigation: {
        classes: {
          container: "fancybox__nav",
          button: "f-button",
          isNext: "is-next",
          isPrev: "is-prev"
        }
      },
      initialPage: this.option("startIndex"),
      l10n: this.option("l10n")
    }, this.option("Carousel") || {}));
    s.on("*", (t, e, ...i) => {
      this.emit(`Carousel.${e}`, t, ...i);
    }), s.on(["ready", "change"], () => {
      this.manageCaption();
    }), this.on("Carousel.removeSlide", (t, e, i) => {
      this.clearContent(i), i.state = void 0;
    }), s.on("Panzoom.touchStart", () => {
      var t, e;
      this.isCompact || this.endIdle(), (null === (t = document.activeElement) || void 0 === t ? void 0 : t.closest(".f-thumbs")) && (null === (e = this.container) || void 0 === e || e.focus());
    }), s.on("settle", () => {
      this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(), this.option("autoFocus") && !this.isClosing && this.checkFocus();
    }), this.option("dragToClose") && (s.on("Panzoom.afterTransform", (t, i) => {
      const n = this.getSlide();
      if (n && e(n.el)) return;
      const s = this.container;
      if (s) {
        const t = Math.abs(i.current.f),
          e = t < 1 ? "" : Math.max(.5, Math.min(1, 1 - t / i.contentRect.fitHeight * 1.5));
        s.style.setProperty("--fancybox-ts", e ? "0s" : ""), s.style.setProperty("--fancybox-opacity", e + "");
      }
    }), s.on("Panzoom.touchEnd", (t, i, n) => {
      var s;
      const o = this.getSlide();
      if (o && e(o.el)) return;
      if (i.isMobile && document.activeElement && -1 !== ["TEXTAREA", "INPUT"].indexOf(null === (s = document.activeElement) || void 0 === s ? void 0 : s.nodeName)) return;
      const a = Math.abs(i.dragOffset.y);
      "y" === i.lockedAxis && (a >= 200 || a >= 50 && i.dragOffset.time < 300) && (n && n.cancelable && n.preventDefault(), this.close(n, "f-throwOut" + (i.current.f < 0 ? "Up" : "Down")));
    })), s.on("change", t => {
      var e;
      let i = null === (e = this.getSlide()) || void 0 === e ? void 0 : e.triggerEl;
      if (i) {
        const e = new CustomEvent("slideTo", {
          bubbles: !0,
          cancelable: !0,
          detail: t.page
        });
        i.dispatchEvent(e);
      }
    }), s.on(["refresh", "change"], t => {
      const e = this.container;
      if (!e) return;
      for (const i of e.querySelectorAll("[data-fancybox-current-index]")) i.innerHTML = t.page + 1;
      for (const i of e.querySelectorAll("[data-fancybox-count]")) i.innerHTML = t.pages.length;
      if (!t.isInfinite) {
        for (const i of e.querySelectorAll("[data-fancybox-next]")) t.page < t.pages.length - 1 ? (i.removeAttribute(ue), i.removeAttribute(pe)) : (i.setAttribute(ue, ""), i.setAttribute(pe, "-1"));
        for (const i of e.querySelectorAll("[data-fancybox-prev]")) t.page > 0 ? (i.removeAttribute(ue), i.removeAttribute(pe)) : (i.setAttribute(ue, ""), i.setAttribute(pe, "-1"));
      }
      const i = this.getSlide();
      if (!i) return;
      let n = i.downloadSrc || "";
      n || "image" !== i.type || i.error || !ve(i[me]) || (n = i[me]);
      for (const t of e.querySelectorAll("[data-fancybox-download]")) {
        const e = i.downloadFilename;
        n ? (t.removeAttribute(ue), t.removeAttribute(pe), t.setAttribute(ge, n), t.setAttribute(fe, e || n), t.setAttribute("target", "_blank")) : (t.setAttribute(ue, ""), t.setAttribute(pe, "-1"), t.removeAttribute(ge), t.removeAttribute(fe));
      }
    }), this.emit("initCarousel");
  }
  attachEvents() {
    const t = this,
      e = t.container;
    if (!e) return;
    e.addEventListener("click", t.onClick, {
      passive: !1,
      capture: !1
    }), e.addEventListener("wheel", t.onWheel, {
      passive: !1,
      capture: !1
    }), document.addEventListener("keydown", t.onKeydown, {
      passive: !1,
      capture: !0
    }), document.addEventListener("visibilitychange", t.onVisibilityChange, !1), document.addEventListener("mousemove", t.onMousemove), t.option("trapFocus") && document.addEventListener("focus", t.onFocus, !0), window.addEventListener("resize", t.onResize);
    const i = window.visualViewport;
    i && (i.addEventListener("scroll", t.onResize), i.addEventListener("resize", t.onResize));
  }
  detachEvents() {
    const t = this,
      e = t.container;
    if (!e) return;
    document.removeEventListener("keydown", t.onKeydown, {
      passive: !1,
      capture: !0
    }), e.removeEventListener("wheel", t.onWheel, {
      passive: !1,
      capture: !1
    }), e.removeEventListener("click", t.onClick, {
      passive: !1,
      capture: !1
    }), document.removeEventListener("mousemove", t.onMousemove), window.removeEventListener("resize", t.onResize);
    const i = window.visualViewport;
    i && (i.removeEventListener("resize", t.onResize), i.removeEventListener("scroll", t.onResize)), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), document.removeEventListener("focus", t.onFocus, !0);
  }
  scale() {
    const t = this.container;
    if (!t) return;
    const e = window.visualViewport,
      i = Math.max(1, (null == e ? void 0 : e.scale) || 1);
    let n = "",
      s = "",
      o = "";
    if (e && i > 1) {
      let t = `${e.offsetLeft}px`,
        a = `${e.offsetTop}px`;
      n = e.width * i + "px", s = e.height * i + "px", o = `translate3d(${t}, ${a}, 0) scale(${1 / i})`;
    }
    t.style.transform = o, t.style.width = n, t.style.height = s;
  }
  onClick(t) {
    var e;
    const {
      container: i,
      isCompact: n
    } = this;
    if (!i || this.isClosing()) return;
    !n && this.option("idle") && this.resetIdle();
    const s = t.composedPath()[0];
    if (s.closest(".fancybox-spinner") || s.closest("[data-fancybox-close]")) return t.preventDefault(), void this.close(t);
    if (s.closest("[data-fancybox-prev]")) return t.preventDefault(), void this.prev();
    if (s.closest("[data-fancybox-next]")) return t.preventDefault(), void this.next();
    if ("click" === t.type && 0 === t.detail) return;
    if (Math.abs(t.pageX - Ee) > 30 || Math.abs(t.pageY - Se) > 30) return;
    const o = document.activeElement;
    if (be() && o && i.contains(o)) return;
    if (n && "image" === (null === (e = this.getSlide()) || void 0 === e ? void 0 : e.type)) return void (this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null) : this.clickTimer = setTimeout(() => {
      this.toggleIdle(), this.clickTimer = null;
    }, 350));
    if (this.emit("click", t), t.defaultPrevented) return;
    let a = !1;
    if (s.closest(".fancybox__content")) {
      if (o) {
        if (o.closest("[contenteditable]")) return;
        s.matches(nt) || o.blur();
      }
      if (be()) return;
      a = this.option("contentClick");
    } else s.closest(".fancybox__carousel") && !s.matches(nt) && (a = this.option("backdropClick"));
    "close" === a ? (t.preventDefault(), this.close(t)) : "next" === a ? (t.preventDefault(), this.next()) : "prev" === a && (t.preventDefault(), this.prev());
  }
  onWheel(t) {
    const e = t.target;
    let n = this.option("wheel", t);
    e.closest(".fancybox__thumbs") && (n = "slide");
    const s = "slide" === n,
      o = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (t, e) {
        return Math.abs(e) > Math.abs(t) ? e : t;
      }),
      a = Math.max(-1, Math.min(1, o)),
      r = Date.now();
    this.pwt && r - this.pwt < 300 ? s && t.preventDefault() : (this.pwt = r, this.emit("wheel", t, a), t.defaultPrevented || ("close" === n ? (t.preventDefault(), this.close(t)) : "slide" === n && (i(e) || (t.preventDefault(), this[a > 0 ? "prev" : "next"]()))));
  }
  onScroll() {
    window.scrollTo(Pe, Ce);
  }
  onKeydown(t) {
    if (!this.isTopmost()) return;
    this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
    const e = t.key,
      i = this.option("keyboard");
    if (!i) return;
    const n = t.composedPath()[0],
      s = document.activeElement && document.activeElement.classList,
      o = s && s.contains("f-button") || n.dataset.carouselPage || n.dataset.carouselIndex;
    if ("Escape" !== e && !o && E(n)) {
      if (n.isContentEditable || -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(n.nodeName)) return;
    }
    if ("Tab" === t.key ? P(this.container, ae) : S(this.container, ae), t.ctrlKey || t.altKey || t.shiftKey) return;
    this.emit("keydown", e, t);
    const a = i[e];
    a && "function" == typeof this[a] && (t.preventDefault(), this[a]());
  }
  onResize() {
    const t = this.container;
    if (!t) return;
    const e = this.isCompact;
    t.classList.toggle(le, e), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), this.scale(), this.emit("resize");
  }
  onFocus(t) {
    this.isTopmost() && this.checkFocus(t);
  }
  onMousemove(t) {
    this.prevMouseMoveEvent = t, !this.isCompact && this.option("idle") && this.resetIdle();
  }
  onVisibilityChange() {
    "visible" === document.visibilityState ? this.checkFocus() : this.endIdle();
  }
  manageCloseBtn(t) {
    const e = this.optionFor(t, "closeButton") || !1;
    if ("auto" === e) {
      const t = this.plugins.Toolbar;
      if (t && t.state === Zt.Ready) return;
    }
    if (!e) return;
    if (!t.contentEl || t.closeBtnEl) return;
    const i = this.option("tpl.closeButton");
    if (i) {
      const e = n(this.localize(i));
      t.closeBtnEl = t.contentEl.appendChild(e), t.el && P(t.el, "has-close-btn");
    }
  }
  manageCaption(t = void 0) {
    var e, i;
    const n = "fancybox__caption",
      s = this.container;
    if (!s) return;
    S(s, de);
    const o = this.isCompact || this.option("commonCaption"),
      a = !o;
    if (this.caption && this.stop(this.caption), a && this.caption && (this.caption.remove(), this.caption = null), o && !this.caption) for (const t of (null === (e = this.carousel) || void 0 === e ? void 0 : e.slides) || []) t.captionEl && (t.captionEl.remove(), t.captionEl = void 0, S(t.el, de), null === (i = t.el) || void 0 === i || i.removeAttribute("aria-labelledby"));
    if (t || (t = this.getSlide()), !t || o && !this.isCurrentSlide(t)) return;
    const r = t.el;
    let l = this.optionFor(t, "caption", "");
    if (!l) return void (o && this.caption && this.animate(this.caption, "f-fadeOut", () => {
      this.caption && (this.caption.innerHTML = "");
    }));
    let c = null;
    if (a) {
      if (c = t.captionEl || null, r && !c) {
        const e = n + `_${this.id}_${t.index}`;
        c = document.createElement("div"), P(c, n), c.setAttribute("id", e), t.captionEl = r.appendChild(c), P(r, de), r.setAttribute("aria-labelledby", e);
      }
    } else {
      if (c = this.caption, c || (c = s.querySelector("." + n)), !c) {
        c = document.createElement("div"), c.dataset.fancyboxCaption = "", P(c, n);
        (this.footer || s).prepend(c);
      }
      P(s, de), this.caption = c;
    }
    c && (c.innerHTML = "", ve(l) || "number" == typeof l ? c.innerHTML = l + "" : l instanceof HTMLElement && c.appendChild(l));
  }
  checkFocus(t) {
    this.focus(t);
  }
  focus(t) {
    var e;
    if (this.ignoreFocusChange) return;
    const i = document.activeElement || null,
      n = (null == t ? void 0 : t.target) || null,
      s = this.container,
      o = null === (e = this.carousel) || void 0 === e ? void 0 : e.viewport;
    if (!s || !o) return;
    if (!t && i && s.contains(i)) return;
    const a = this.getSlide(),
      r = a && a.state === lt.Ready ? a.el : null;
    if (!r || r.contains(i) || s === i) return;
    t && t.cancelable && t.preventDefault(), this.ignoreFocusChange = !0;
    const l = Array.from(s.querySelectorAll(nt));
    let c = [],
      h = null;
    for (let t of l) {
      const e = !t.offsetParent || !!t.closest('[aria-hidden="true"]'),
        i = r && r.contains(t),
        n = !o.contains(t);
      if (t === s || (i || n) && !e) {
        c.push(t);
        const e = t.dataset.origTabindex;
        void 0 !== e && e && (t.tabIndex = parseFloat(e)), t.removeAttribute("data-orig-tabindex"), !t.hasAttribute("autoFocus") && h || (h = t);
      } else {
        const e = void 0 === t.dataset.origTabindex ? t.getAttribute("tabindex") || "" : t.dataset.origTabindex;
        e && (t.dataset.origTabindex = e), t.tabIndex = -1;
      }
    }
    let d = null;
    t ? (!n || c.indexOf(n) < 0) && (d = h || s, c.length && (i === xe ? d = c[0] : this.lastFocus !== s && i !== we || (d = c[c.length - 1]))) : d = a && "image" === a.type ? s : h || s, d && st(d), this.lastFocus = document.activeElement, this.ignoreFocusChange = !1;
  }
  next() {
    const t = this.carousel;
    t && t.pages.length > 1 && t.slideNext();
  }
  prev() {
    const t = this.carousel;
    t && t.pages.length > 1 && t.slidePrev();
  }
  jumpTo(...t) {
    this.carousel && this.carousel.slideTo(...t);
  }
  isTopmost() {
    var t;
    return (null === (t = Oe.getInstance()) || void 0 === t ? void 0 : t.id) == this.id;
  }
  animate(t = null, e = "", i) {
    if (!t || !e) return void (i && i());
    this.stop(t);
    const n = s => {
      s.target === t && t.dataset.animationName && (t.removeEventListener("animationend", n), delete t.dataset.animationName, i && i(), S(t, e));
    };
    t.dataset.animationName = e, t.addEventListener("animationend", n), P(t, e);
  }
  stop(t) {
    t && t.dispatchEvent(new CustomEvent("animationend", {
      bubbles: !1,
      cancelable: !0,
      currentTarget: t
    }));
  }
  setContent(t, e = "", i = !0) {
    if (this.isClosing()) return;
    const s = t.el;
    if (!s) return;
    let o = null;
    if (E(e) ? o = e : (o = n(e + ""), E(o) || (o = document.createElement("div"), o.innerHTML = e + "")), ["img", "picture", "iframe", "video", "audio"].includes(o.nodeName.toLowerCase())) {
      const t = document.createElement("div");
      t.appendChild(o), o = t;
    }
    E(o) && t.filter && !t.error && (o = o.querySelector(t.filter)), o && E(o) ? (P(o, "fancybox__content"), t.id && o.setAttribute("id", t.id), "none" !== o.style.display && "none" !== getComputedStyle(o).getPropertyValue("display") || (o.style.display = t.display || this.option("defaultDisplay") || "flex"), s.classList.add(`has-${t.error ? "error" : t.type || "unknown"}`), s.prepend(o), t.contentEl = o, i && this.revealContent(t), this.manageCloseBtn(t), this.manageCaption(t)) : this.setError(t, "{{ELEMENT_NOT_FOUND}}");
  }
  revealContent(t, e) {
    const i = t.el,
      n = t.contentEl;
    i && n && (this.emit("reveal", t), this.hideLoading(t), t.state = lt.Opening, (e = this.isOpeningSlide(t) ? void 0 === e ? this.optionFor(t, "showClass") : e : "f-fadeIn") ? this.animate(n, e, () => {
      this.done(t);
    }) : this.done(t));
  }
  done(t) {
    this.isClosing() || (t.state = lt.Ready, this.emit("done", t), P(t.el, "is-done"), this.isCurrentSlide(t) && this.option("autoFocus") && queueMicrotask(() => {
      var e;
      null === (e = t.panzoom) || void 0 === e || e.updateControls(), this.option("autoFocus") && this.focus();
    }), this.isOpeningSlide(t) && (S(this.container, he), !this.isCompact && this.option("idle") && this.setIdle()));
  }
  isCurrentSlide(t) {
    const e = this.getSlide();
    return !(!t || !e) && e.index === t.index;
  }
  isOpeningSlide(t) {
    var e, i;
    return null === (null === (e = this.carousel) || void 0 === e ? void 0 : e.prevPage) && t && t.index === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index);
  }
  showLoading(t) {
    t.state = lt.Loading;
    const e = t.el;
    if (!e) return;
    P(e, ce), this.emit("loading", t), t.spinnerEl || setTimeout(() => {
      if (!this.isClosing() && !t.spinnerEl && t.state === lt.Loading) {
        let i = n(x);
        P(i, "fancybox-spinner"), t.spinnerEl = i, e.prepend(i), this.animate(i, "f-fadeIn");
      }
    }, 250);
  }
  hideLoading(t) {
    const e = t.el;
    if (!e) return;
    const i = t.spinnerEl;
    this.isClosing() ? null == i || i.remove() : (S(e, ce), i && this.animate(i, "f-fadeOut", () => {
      i.remove();
    }), t.state === lt.Loading && (this.emit("loaded", t), t.state = lt.Ready));
  }
  setError(t, e) {
    if (this.isClosing()) return;
    const i = new Event("error", {
      bubbles: !0,
      cancelable: !0
    });
    if (this.emit("error", i, t), i.defaultPrevented) return;
    t.error = e, this.hideLoading(t), this.clearContent(t);
    const n = document.createElement("div");
    n.classList.add("fancybox-error"), n.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), this.setContent(t, n);
  }
  clearContent(t) {
    if (void 0 === t.state) return;
    this.emit("clearContent", t), t.contentEl && (t.contentEl.remove(), t.contentEl = void 0);
    const e = t.el;
    e && (S(e, "has-error"), S(e, "has-unknown"), S(e, `has-${t.type || "unknown"}`)), t.closeBtnEl && t.closeBtnEl.remove(), t.closeBtnEl = void 0, t.captionEl && t.captionEl.remove(), t.captionEl = void 0, t.spinnerEl && t.spinnerEl.remove(), t.spinnerEl = void 0;
  }
  getSlide() {
    var t;
    const e = this.carousel;
    return (null === (t = null == e ? void 0 : e.pages[null == e ? void 0 : e.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0;
  }
  close(t, e) {
    if (this.isClosing()) return;
    const i = new Event("shouldClose", {
      bubbles: !0,
      cancelable: !0
    });
    if (this.emit("shouldClose", i, t), i.defaultPrevented) return;
    t && t.cancelable && (t.preventDefault(), t.stopPropagation());
    const n = () => {
      this.proceedClose(t, e);
    };
    this.startedFs && ye && ye.isFullscreen() ? Promise.resolve(ye.exit()).then(() => n()) : n();
  }
  clearIdle() {
    this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null;
  }
  setIdle(t = !1) {
    const e = () => {
      this.clearIdle(), this.idle = !0, P(this.container, "is-idle"), this.emit("setIdle");
    };
    if (this.clearIdle(), !this.isClosing()) if (t) e();else {
      const t = this.option("idle");
      t && (this.idleTimer = setTimeout(e, t));
    }
  }
  endIdle() {
    this.clearIdle(), this.idle && !this.isClosing() && (this.idle = !1, S(this.container, "is-idle"), this.emit("endIdle"));
  }
  resetIdle() {
    this.endIdle(), this.setIdle();
  }
  toggleIdle() {
    this.idle ? this.endIdle() : this.setIdle(!0);
  }
  toggleFullscreen() {
    ye && (ye.isFullscreen() ? ye.exit() : ye.request().then(() => {
      this.startedFs = !0;
    }));
  }
  isClosing() {
    return [rt.Closing, rt.CustomClosing, rt.Destroy].includes(this.state);
  }
  proceedClose(t, e) {
    var i, n;
    this.state = rt.Closing, this.clearIdle(), this.detachEvents();
    const s = this.container,
      o = this.carousel,
      a = this.getSlide(),
      r = a && this.option("placeFocusBack") ? a.triggerEl || this.option("triggerEl") : null;
    if (r && (tt(r) ? st(r) : r.focus()), s && (S(s, he), P(s, "is-closing"), s.setAttribute(oe, "true"), this.option("animated") && P(s, re), s.style.pointerEvents = "none"), o) {
      o.clearTransitions(), null === (i = o.panzoom) || void 0 === i || i.destroy(), null === (n = o.plugins.Navigation) || void 0 === n || n.detach();
      for (const t of o.slides) {
        t.state = lt.Closing, this.hideLoading(t);
        const e = t.contentEl;
        e && this.stop(e);
        const i = null == t ? void 0 : t.panzoom;
        i && (i.stop(), i.detachEvents(), i.detachObserver()), this.isCurrentSlide(t) || o.emit("removeSlide", t);
      }
    }
    Pe = window.scrollX, Ce = window.scrollY, window.addEventListener("scroll", this.onScroll), this.emit("close", t), this.state !== rt.CustomClosing ? (void 0 === e && a && (e = this.optionFor(a, "hideClass")), e && a ? (this.animate(a.contentEl, e, () => {
      o && o.emit("removeSlide", a);
    }), setTimeout(() => {
      this.destroy();
    }, 500)) : this.destroy()) : setTimeout(() => {
      this.destroy();
    }, 500);
  }
  destroy() {
    var t;
    if (this.state === rt.Destroy) return;
    window.removeEventListener("scroll", this.onScroll), this.state = rt.Destroy, null === (t = this.carousel) || void 0 === t || t.destroy();
    const e = this.container;
    e && e.remove(), Te.delete(this.id);
    const i = Oe.getInstance();
    i ? i.focus() : (we && (we.remove(), we = null), xe && (xe.remove(), xe = null), S(document.documentElement, ee), (() => {
      if (!et) return;
      const t = document,
        e = t.body;
      e.classList.remove(ie), e.style.setProperty(se, ""), t.documentElement.style.setProperty(ne, "");
    })(), this.emit("destroy"));
  }
  static bind(t, e, i) {
    if (!et) return;
    let n,
      s = "",
      o = {};
    if (void 0 === t ? n = document.body : ve(t) ? (n = document.body, s = t, "object" == typeof e && (o = e || {})) : (n = t, ve(e) && (s = e), "object" == typeof i && (o = i || {})), !n || !E(n)) return;
    s = s || "[data-fancybox]";
    const a = Oe.openers.get(n) || new Map();
    a.set(s, o), Oe.openers.set(n, a), 1 === a.size && n.addEventListener("click", Oe.fromEvent);
  }
  static unbind(t, e) {
    let i,
      n = "";
    if (ve(t) ? (i = document.body, n = t) : (i = t, ve(e) && (n = e)), !i) return;
    const s = Oe.openers.get(i);
    s && n && s.delete(n), n && s || (Oe.openers.delete(i), i.removeEventListener("click", Oe.fromEvent));
  }
  static destroy() {
    let t;
    for (; t = Oe.getInstance();) t.destroy();
    for (const t of Oe.openers.keys()) t.removeEventListener("click", Oe.fromEvent);
    Oe.openers = new Map();
  }
  static fromEvent(t) {
    if (t.defaultPrevented) return;
    if (t.button && 0 !== t.button) return;
    if (t.ctrlKey || t.metaKey || t.shiftKey) return;
    let e = t.composedPath()[0];
    const i = e.closest("[data-fancybox-trigger]");
    if (i) {
      const t = i.dataset.fancyboxTrigger || "",
        n = document.querySelectorAll(`[data-fancybox="${t}"]`),
        s = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
      e = n[s] || e;
    }
    if (!(e && e instanceof Element)) return;
    let n, s, o, a;
    if ([...Oe.openers].reverse().find(([t, i]) => !(!t.contains(e) || ![...i].reverse().find(([i, r]) => {
      let l = e.closest(i);
      return !!l && (n = t, s = i, o = l, a = r, !0);
    }))), !n || !s || !o) return;
    a = a || {}, t.preventDefault(), e = o;
    let r = [],
      l = u({}, at, a);
    l.event = t, l.triggerEl = e, l.delegate = i;
    const c = l.groupAll,
      h = l.groupAttr,
      d = h && e ? e.getAttribute(`${h}`) : "";
    if ((!e || d || c) && (r = [].slice.call(n.querySelectorAll(s))), e && !c && (r = d ? r.filter(t => t.getAttribute(`${h}`) === d) : [e]), !r.length) return;
    const p = Oe.getInstance();
    return p && p.options.triggerEl && r.indexOf(p.options.triggerEl) > -1 ? void 0 : (e && (l.startIndex = r.indexOf(e)), Oe.fromNodes(r, l));
  }
  static fromSelector(t, e, i) {
    let n = null,
      s = "",
      o = {};
    if (ve(t) ? (n = document.body, s = t, "object" == typeof e && (o = e || {})) : t instanceof HTMLElement && ve(e) && (n = t, s = e, "object" == typeof i && (o = i || {})), !n || !s) return !1;
    const a = Oe.openers.get(n);
    return !!a && (o = u({}, a.get(s) || {}, o), !!o && Oe.fromNodes(Array.from(n.querySelectorAll(s)), o));
  }
  static fromNodes(t, e) {
    e = u({}, at, e || {});
    const i = [];
    for (const n of t) {
      const t = n.dataset || {},
        s = t[me] || n.getAttribute(ge) || n.getAttribute("currentSrc") || n.getAttribute(me) || void 0;
      let o;
      const a = e.delegate;
      let r;
      a && i.length === e.startIndex && (o = a instanceof HTMLImageElement ? a : a.querySelector("img:not([aria-hidden])")), o || (o = n instanceof HTMLImageElement ? n : n.querySelector("img:not([aria-hidden])")), o && (r = o.currentSrc || o[me] || void 0, !r && o.dataset && (r = o.dataset.lazySrc || o.dataset[me] || void 0));
      const l = {
        src: s,
        triggerEl: n,
        thumbEl: o,
        thumbElSrc: r,
        thumbSrc: r
      };
      for (const e in t) {
        let i = t[e] + "";
        i = "false" !== i && ("true" === i || i), l[e] = i;
      }
      i.push(l);
    }
    return new Oe(i, e);
  }
  static getInstance(t) {
    if (t) return Te.get(t);
    return Array.from(Te.values()).reverse().find(t => !t.isClosing() && t) || null;
  }
  static getSlide() {
    var t;
    return (null === (t = Oe.getInstance()) || void 0 === t ? void 0 : t.getSlide()) || null;
  }
  static show(t = [], e = {}) {
    return new Oe(t, e);
  }
  static next() {
    const t = Oe.getInstance();
    t && t.next();
  }
  static prev() {
    const t = Oe.getInstance();
    t && t.prev();
  }
  static close(t = !0, ...e) {
    if (t) for (const t of Te.values()) t.close(...e);else {
      const t = Oe.getInstance();
      t && t.close(...e);
    }
  }
}
Object.defineProperty(Oe, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "5.0.35"
}), Object.defineProperty(Oe, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: at
}), Object.defineProperty(Oe, "Plugins", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: te
}), Object.defineProperty(Oe, "openers", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new Map()
});


/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSPlugin: function() { return /* binding */ CSSPlugin; },
/* harmony export */   _createElement: function() { return /* binding */ _createElement; },
/* harmony export */   _getBBox: function() { return /* binding */ _getBBox; },
/* harmony export */   checkPrefix: function() { return /* binding */ _checkPropPrefix; },
/* harmony export */   "default": function() { return /* binding */ CSSPlugin; }
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */

var _win,
  _doc,
  _docElement,
  _pluginInitted,
  _tempDiv,
  _tempDivStyler,
  _recentSetterPlugin,
  _reverting,
  _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
  _transformProps = {},
  _RAD2DEG = 180 / Math.PI,
  _DEG2RAD = Math.PI / 180,
  _atan2 = Math.atan2,
  _bigNum = 1e8,
  _capsExp = /([A-Z])/g,
  _horizontalExp = /(left|right|width|margin|padding|x)/i,
  _complexExp = /[\s,\(]\S/,
  _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
  _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
  _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
  _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
  },
  //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
  _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
  },
  _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  },
  _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  },
  _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
  },
  _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
  },
  _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
  },
  _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  },
  _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  },
  _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  },
  _transformProp = "transform",
  _transformOriginProp = _transformProp + "Origin",
  _saveStyle = function _saveStyle(property, isNotCSS) {
    var _this = this;
    var target = this.target,
      style = target.style,
      cache = target._gsap;
    if (property in _transformProps && style) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function (a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.

        property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
      } else {
        return _propertyAliases.transform.split(",").forEach(function (p) {
          return _saveStyle.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (cache.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  },
  _removeIndependentTransforms = function _removeIndependentTransforms(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  },
  _revertStyle = function _revertStyle() {
    var props = this.props,
      target = this.target,
      style = target.style,
      cache = target._gsap,
      i,
      p;
    for (i = 0; i < props.length; i += 3) {
      // stored like this: property, isNotCSS, value
      props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i = _reverting();
      if ((!i || !i.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        if (cache.zOrigin && style[_transformOriginProp]) {
          style[_transformOriginProp] += " " + cache.zOrigin + "px"; // since we're uncaching, we must put the zOrigin back into the transformOrigin so that we can pull it out accurately when we parse again. Otherwise, we'd lose the z portion of the origin since we extract it to protect from Safari bugs.

          cache.zOrigin = 0;
          cache.renderTransform();
        }
        cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
      }
    }
  },
  _getStyleSaver = function _getStyleSaver(target, properties) {
    var saver = {
      target: target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.

    properties && properties.split(",").forEach(function (p) {
      return saver.save(p);
    });
    return saver;
  },
  _supports3D,
  _createElement = function _createElement(type, ns) {
    var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

    return e && e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://gsap.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
  },
  _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
  },
  _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
  _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv,
      s = e.style,
      i = 5;
    if (property in s && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i-- && !(_prefixes[i] + property in s)) {}
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  },
  _initCore = function _initCore() {
    if (_windowExists() && window.document) {
      _win = window;
      _doc = _win.document;
      _docElement = _doc.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

      _supports3D = !!_checkPropPrefix("perspective");
      _reverting = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.reverting;
      _pluginInitted = 1;
    }
  },
  _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox; //store the original

        this.getBBox = _getBBoxHack;
      } catch (e) {}
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  },
  _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  },
  _getBBox = function _getBBox(target) {
    var bounds;
    try {
      bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  },
  _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  },
  //reports if the element is an SVG on which getBBox() actually works
  _removeProperty = function _removeProperty(target, property) {
    if (property) {
      var style = target.style,
        first2Chars;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        first2Chars = property.substr(0, 2);
        if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
          //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
          property = "-" + property;
        }
        style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
        style.removeAttribute(property);
      }
    }
  },
  _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  },
  _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  },
  _nonStandardLayouts = {
    grid: 1,
    flex: 1
  },
  //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
  _convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
      style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc || !parent.appendChild) {
      parent = _doc.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time && !cache.uncache) {
      return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
    } else {
      if (toPercent && (property === "height" || property === "width")) {
        // if we're dealing with width/height that's inside a container with padding and/or it's a flexbox/grid container, we must apply it to the target itself rather than the _tempDiv in order to ensure complete accuracy, factoring in the parent's padding.
        var v = target.style[property];
        target.style[property] = amount + unit;
        px = target[measureProperty];
        v ? target.style[property] = v : _removeProperty(target, property);
      } else {
        (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
        parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

        parent.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style.position = "absolute";
      }
      if (horizontal && toPercent) {
        cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
        cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  },
  _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  },
  _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    if (!start || start === "none") {
      // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://gsap.com/forums/topic/18310-clippath-doesnt-work-on-ios/
      var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);
      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://gsap.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
      }
    }
    var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
    pt.b = start;
    pt.e = end;
    start += ""; // ensure values are strings

    end += "";
    if (end === "auto") {
      startValue = target.style[prop];
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
    }
    a = [start, end];
    (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().

    start = a[0];
    end = a[1];
    startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
    endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            //if something like "perspective:300" is passed in and we must add a unit to the end
            endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

    return pt;
  },
  _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
  _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      //the user provided them in the wrong order, so flip them
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  },
  _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;
        while (--i > -1) {
          prop = props[i];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.

          cache.uncache = 1;
          _removeIndependentTransforms(style);
        }
      }
    }
  },
  // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
  _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  },
  /*
   * --------------------------------------------------------------------------------------
   * TRANSFORMS
   * --------------------------------------------------------------------------------------
   */
  _identity2DMatrix = [1, 0, 0, 1, 0, 0],
  _rotationalProperties = {},
  _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  },
  _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
  },
  _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
      //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
        addedToDOM = 1; //flag

        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target); //we must add it to the DOM in order to get values properly
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  },
  _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin); // if (!("xOrigin" in cache) && (xOrigin || yOrigin)) { // added in 3.12.3, reverted in 3.12.4; requires more exploration
      // 	xOrigin -= bounds.x;
      // 	yOrigin -= bounds.y;
      // }
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y; // theory: we only had to do this for smoothing and it assumes that the previous one was not originIsAbsolute.
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  },
  _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      cs = getComputedStyle(target),
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      // accommodate independent transforms by combining them into normal ones.
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0]; //a11

      b = matrix[1]; //a21

      c = matrix[2]; //a31

      d = matrix[3]; //a41

      x = a12 = matrix[4];
      y = a22 = matrix[5]; //2D matrix

      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        } //3D matrix
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG; //rotationX

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        } //rotationY

        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        } //rotationZ

        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
        scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
    cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
    cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
    cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
    cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  },
  _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  },
  //for handling transformOrigin values, stripping out the 3rd dimension
  _addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  },
  _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  },
  _zeroDeg = "0deg",
  _zeroPx = "0px",
  _endParenthesis = ") ",
  _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)

    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  },
  _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
      a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
      a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
      a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
      temp = target.getBBox();
      tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
      ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
  },
  _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
    var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  },
  _assign = function _assign(target, source) {
    // Internet Explorer doesn't have Object.assign(), so we recreate it here.
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  },
  _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
    var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
        startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
        endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  }; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
    r = "Right",
    b = "Bottom",
    l = "Left",
    props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
      return index < 2 ? name + side : "border" + side + name;
    });
  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;
    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }
    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});
var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
      style = target.style,
      startAt = tween.vars.startAt,
      startValue,
      endValue,
      endNum,
      startNum,
      type,
      specialProp,
      p,
      startUnit,
      endUnit,
      relative,
      isTransformRelated,
      transformPropTween,
      cache,
      smooth,
      hasPriority,
      inlineProps;
    _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps

    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;
    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }
      endValue = vars[p];
      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }
      type = typeof endValue;
      specialProp = _specialProps[p];
      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }
      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }
      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;
        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }
        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue + "") || startValue === "auto" || (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }
        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);
        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }
            inlineProps.push("visibility", 0, style.visibility);
            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }
          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }
        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          this.styles.save(p);
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }
          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }
            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);
            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endValue) : endValue);
            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);
            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }
        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;
          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else if (p !== "parseTransform") {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);
            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }
        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }
    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  render: function render(ratio, data) {
    if (data.tween._time || !_reverting()) {
      var pt = data._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getStyleSaver = _getStyleSaver;
(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });
  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });
  _propertyAliases[all[13]] = positionAndScale + "," + rotation;
  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/Observer.js":
/*!***************************************!*\
  !*** ./node_modules/gsap/Observer.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observer: function() { return /* binding */ Observer; },
/* harmony export */   _getProxyProp: function() { return /* binding */ _getProxyProp; },
/* harmony export */   _getScrollFunc: function() { return /* binding */ _getScrollFunc; },
/* harmony export */   _getTarget: function() { return /* binding */ _getTarget; },
/* harmony export */   _getVelocityProp: function() { return /* binding */ _getVelocityProp; },
/* harmony export */   _horizontal: function() { return /* binding */ _horizontal; },
/* harmony export */   _isViewport: function() { return /* binding */ _isViewport; },
/* harmony export */   _proxies: function() { return /* binding */ _proxies; },
/* harmony export */   _scrollers: function() { return /* binding */ _scrollers; },
/* harmony export */   _vertical: function() { return /* binding */ _vertical; },
/* harmony export */   "default": function() { return /* binding */ Observer; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap,
  _coreInitted,
  _clamp,
  _win,
  _doc,
  _docEl,
  _body,
  _isTouch,
  _pointerType,
  ScrollTrigger,
  _root,
  _normalizer,
  _eventTypes,
  _context,
  _getGSAP = function _getGSAP() {
    return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
  },
  _startup = 1,
  _observers = [],
  _scrollers = [],
  _proxies = [],
  _getTime = Date.now,
  _bridge = function _bridge(name, value) {
    return value;
  },
  _integrate = function _integrate() {
    var core = ScrollTrigger.core,
      data = core.bridge || {},
      scrollers = core._scrollers,
      proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge(name, value) {
      return data[name](value);
    };
  },
  _getProxyProp = function _getProxyProp(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  },
  _isViewport = function _isViewport(el) {
    return !!~_root.indexOf(el);
  },
  _addListener = function _addListener(element, type, func, passive, capture) {
    return element.addEventListener(type, func, {
      passive: passive !== false,
      capture: !!capture
    });
  },
  _removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  },
  _scrollLeft = "scrollLeft",
  _scrollTop = "scrollTop",
  _onScroll = function _onScroll() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
  },
  _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
    var cachingFunc = function cachingFunc(value) {
      // since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
      if (value || value === 0) {
        _startup && (_win.history.scrollRestoration = "manual"); // otherwise the new position will get overwritten by the browser onload.

        var isNormalizing = _normalizer && _normalizer.isPressed;
        value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0); //TODO: iOS Bug: if you allow it to go to 0, Safari can start to report super strange (wildly inaccurate) touch positions!

        f(value);
        cachingFunc.cacheID = _scrollers.cache;
        isNormalizing && _bridge("ss", value); // set scroll (notify ScrollTrigger so it can dispatch a "scrollStart" event if necessary
      } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
        cachingFunc.cacheID = _scrollers.cache;
        cachingFunc.v = f();
      }
      return cachingFunc.v + cachingFunc.offset;
    };
    cachingFunc.offset = 0;
    return f && cachingFunc;
  },
  _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function (value) {
      return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
    })
  },
  _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function (value) {
      return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
    })
  },
  _getTarget = function _getTarget(t, self) {
    return (self && self._ctx && self._ctx.selector || gsap.utils.toArray)(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
  },
  _getScrollFunc = function _getScrollFunc(element, _ref) {
    var s = _ref.s,
      sc = _ref.sc;
    // we store the scroller functions in an alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
    _isViewport(element) && (element = _doc.scrollingElement || _docEl);
    var i = _scrollers.indexOf(element),
      offset = sc === _vertical.sc ? 1 : 2;
    !~i && (i = _scrollers.push(element) - 1);
    _scrollers[i + offset] || _addListener(element, "scroll", _onScroll); // clear the cache when a scroll occurs

    var prev = _scrollers[i + offset],
      func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function (value) {
        return arguments.length ? element[s] = value : element[s];
      })));
    func.target = element;
    prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth"); // only set it the first time (don't reset every time a scrollFunc is requested because perhaps it happens during a refresh() when it's disabled in ScrollTrigger.

    return func;
  },
  _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
    var v1 = value,
      v2 = value,
      t1 = _getTime(),
      t2 = t1,
      min = minTimeRefresh || 50,
      dropToZeroTime = Math.max(500, min * 3),
      update = function update(value, force) {
        var t = _getTime();
        if (force || t - t1 > min) {
          v2 = v1;
          v1 = value;
          t2 = t1;
          t1 = t;
        } else if (useDelta) {
          v1 += value;
        } else {
          // not totally necessary, but makes it a bit more accurate by adjusting the v1 value according to the new slope. This way we're not just ignoring the incoming data. Removing for now because it doesn't seem to make much practical difference and it's probably not worth the kb.
          v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
        }
      },
      reset = function reset() {
        v2 = v1 = useDelta ? 0 : v1;
        t2 = t1 = 0;
      },
      getVelocity = function getVelocity(latestValue) {
        var tOld = t2,
          vOld = v2,
          t = _getTime();
        (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
        return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
      };
    return {
      update: update,
      reset: reset,
      getVelocity: getVelocity
    };
  },
  _getEvent = function _getEvent(e, preventDefault) {
    preventDefault && !e._gsapAllow && e.preventDefault();
    return e.changedTouches ? e.changedTouches[0] : e;
  },
  _getAbsoluteMax = function _getAbsoluteMax(a) {
    var max = Math.max.apply(Math, a),
      min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
  },
  _setScrollTrigger = function _setScrollTrigger() {
    ScrollTrigger = gsap.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
  },
  _initCore = function _initCore(core) {
    gsap = core || _getGSAP();
    if (!_coreInitted && gsap && typeof document !== "undefined" && document.body) {
      _win = window;
      _doc = document;
      _docEl = _doc.documentElement;
      _body = _doc.body;
      _root = [_win, _doc, _docEl, _body];
      _clamp = gsap.utils.clamp;
      _context = gsap.core.context || function () {};
      _pointerType = "onpointerenter" in _body ? "pointer" : "mouse"; // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

      _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function () {
        return _startup = 0;
      }, 500);
      _setScrollTrigger();
      _coreInitted = 1;
    }
    return _coreInitted;
  };
_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /*#__PURE__*/function () {
  function Observer(vars) {
    this.init(vars);
  }
  var _proto = Observer.prototype;
  _proto.init = function init(vars) {
    _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
    ScrollTrigger || _setScrollTrigger();
    var tolerance = vars.tolerance,
      dragMinimum = vars.dragMinimum,
      type = vars.type,
      target = vars.target,
      lineHeight = vars.lineHeight,
      debounce = vars.debounce,
      preventDefault = vars.preventDefault,
      onStop = vars.onStop,
      onStopDelay = vars.onStopDelay,
      ignore = vars.ignore,
      wheelSpeed = vars.wheelSpeed,
      event = vars.event,
      onDragStart = vars.onDragStart,
      onDragEnd = vars.onDragEnd,
      onDrag = vars.onDrag,
      onPress = vars.onPress,
      onRelease = vars.onRelease,
      onRight = vars.onRight,
      onLeft = vars.onLeft,
      onUp = vars.onUp,
      onDown = vars.onDown,
      onChangeX = vars.onChangeX,
      onChangeY = vars.onChangeY,
      onChange = vars.onChange,
      onToggleX = vars.onToggleX,
      onToggleY = vars.onToggleY,
      onHover = vars.onHover,
      onHoverEnd = vars.onHoverEnd,
      onMove = vars.onMove,
      ignoreCheck = vars.ignoreCheck,
      isNormalizer = vars.isNormalizer,
      onGestureStart = vars.onGestureStart,
      onGestureEnd = vars.onGestureEnd,
      onWheel = vars.onWheel,
      onEnable = vars.onEnable,
      onDisable = vars.onDisable,
      onClick = vars.onClick,
      scrollSpeed = vars.scrollSpeed,
      capture = vars.capture,
      allowClicks = vars.allowClicks,
      lockAxis = vars.lockAxis,
      onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl;
    this.vars = vars;
    ignore && (ignore = gsap.utils.toArray(ignore));
    tolerance = tolerance || 1e-9;
    dragMinimum = dragMinimum || 0;
    wheelSpeed = wheelSpeed || 1;
    scrollSpeed = scrollSpeed || 1;
    type = type || "wheel,touch,pointer";
    debounce = debounce !== false;
    lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22); // note: browser may report "normal", so default to 22.

    var id,
      onStopDelayedCall,
      dragged,
      moved,
      wheeled,
      locked,
      axis,
      self = this,
      prevDeltaX = 0,
      prevDeltaY = 0,
      passive = vars.passive || !preventDefault,
      scrollFuncX = _getScrollFunc(target, _horizontal),
      scrollFuncY = _getScrollFunc(target, _vertical),
      scrollX = scrollFuncX(),
      scrollY = scrollFuncY(),
      limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown",
      // for devices that accommodate mouse events and touch events, we need to distinguish.
      isViewport = _isViewport(target),
      ownerDoc = target.ownerDocument || _doc,
      deltaX = [0, 0, 0],
      // wheel, scroll, pointer/touch
      deltaY = [0, 0, 0],
      onClickTime = 0,
      clickCapture = function clickCapture() {
        return onClickTime = _getTime();
      },
      _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
        return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
      },
      onStopFunc = function onStopFunc() {
        self._vx.reset();
        self._vy.reset();
        onStopDelayedCall.pause();
        onStop && onStop(self);
      },
      update = function update() {
        var dx = self.deltaX = _getAbsoluteMax(deltaX),
          dy = self.deltaY = _getAbsoluteMax(deltaY),
          changedX = Math.abs(dx) >= tolerance,
          changedY = Math.abs(dy) >= tolerance;
        onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY); // in ScrollTrigger.normalizeScroll(), we need to know if it was touch/pointer so we need access to the deltaX/deltaY Arrays before we clear them out.

        if (changedX) {
          onRight && self.deltaX > 0 && onRight(self);
          onLeft && self.deltaX < 0 && onLeft(self);
          onChangeX && onChangeX(self);
          onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
          prevDeltaX = self.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }
        if (changedY) {
          onDown && self.deltaY > 0 && onDown(self);
          onUp && self.deltaY < 0 && onUp(self);
          onChangeY && onChangeY(self);
          onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
          prevDeltaY = self.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }
        if (moved || dragged) {
          onMove && onMove(self);
          if (dragged) {
            onDrag(self);
            dragged = false;
          }
          moved = false;
        }
        locked && !(locked = false) && onLockAxis && onLockAxis(self);
        if (wheeled) {
          onWheel(self);
          wheeled = false;
        }
        id = 0;
      },
      onDelta = function onDelta(x, y, index) {
        deltaX[index] += x;
        deltaY[index] += y;
        self._vx.update(x);
        self._vy.update(y);
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      },
      onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
        if (lockAxis && !axis) {
          self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
          locked = true;
        }
        if (axis !== "y") {
          deltaX[2] += x;
          self._vx.update(x, true); // update the velocity as frequently as possible instead of in the debounced function so that very quick touch-scrolls (flicks) feel natural. If it's the mouse/touch/pointer, force it so that we get snappy/accurate momentum scroll.
        }
        if (axis !== "x") {
          deltaY[2] += y;
          self._vy.update(y, true);
        }
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      },
      _onDrag = function _onDrag(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }
        e = _getEvent(e, preventDefault);
        var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y,
          isDragging = self.isDragging;
        self.x = x;
        self.y = y;
        if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self);
        }
      },
      _onPress = self.onPress = function (e) {
        if (_ignoreCheck(e, 1) || e && e.button) {
          return;
        }
        self.axis = axis = null;
        onStopDelayedCall.pause();
        self.isPressed = true;
        e = _getEvent(e); // note: may need to preventDefault(?) Won't side-scroll on iOS Safari if we do, though.

        prevDeltaX = prevDeltaY = 0;
        self.startX = self.x = e.clientX;
        self.startY = self.y = e.clientY;
        self._vx.reset(); // otherwise the t2 may be stale if the user touches and flicks super fast and releases in less than 2 requestAnimationFrame ticks, causing velocity to be 0.

        self._vy.reset();
        _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
        self.deltaX = self.deltaY = 0;
        onPress && onPress(self);
      },
      _onRelease = self.onRelease = function (e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }
        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        var isTrackingDrag = !isNaN(self.y - self.startY),
          wasDragging = self.isDragging,
          isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3),
          // some touch devices need some wiggle room in terms of sensing clicks - the finger may move a few pixels.
          eventData = _getEvent(e);
        if (!isDragNotClick && isTrackingDrag) {
          self._vx.reset();
          self._vy.reset(); //if (preventDefault && allowClicks && self.isPressed) { // check isPressed because in a rare edge case, the inputObserver in ScrollTrigger may stopPropagation() on the press/drag, so the onRelease may get fired without the onPress/onDrag ever getting called, thus it could trigger a click to occur on a link after scroll-dragging it.

          if (preventDefault && allowClicks) {
            gsap.delayedCall(0.08, function () {
              // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
              if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                if (e.target.click) {
                  //some browsers (like mobile Safari) don't properly trigger the click event
                  e.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }
        self.isDragging = self.isGesturing = self.isPressed = false;
        onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self);
        onRelease && onRelease(self, isDragNotClick);
      },
      _onGestureStart = function _onGestureStart(e) {
        return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
      },
      _onGestureEnd = function _onGestureEnd() {
        return (self.isGesturing = false) || onGestureEnd(self);
      },
      onScroll = function onScroll(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        var x = scrollFuncX(),
          y = scrollFuncY();
        onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
        scrollX = x;
        scrollY = y;
        onStop && onStopDelayedCall.restart(true);
      },
      _onWheel = function _onWheel(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        e = _getEvent(e, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
        onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      },
      _onMove = function _onMove(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y;
        self.x = x;
        self.y = y;
        moved = true;
        onStop && onStopDelayedCall.restart(true);
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      },
      _onHover = function _onHover(e) {
        self.event = e;
        onHover(self);
      },
      _onHoverEnd = function _onHoverEnd(e) {
        self.event = e;
        onHoverEnd(self);
      },
      _onClick = function _onClick(e) {
        return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
      };
    onStopDelayedCall = self._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
    self.deltaX = self.deltaY = 0;
    self._vx = _getVelocityProp(0, 50, true);
    self._vy = _getVelocityProp(0, 50, true);
    self.scrollX = scrollFuncX;
    self.scrollY = scrollFuncY;
    self.isDragging = self.isGesturing = self.isPressed = false;
    _context(this);
    self.enable = function (e) {
      if (!self.isEnabled) {
        _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
        type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
        type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
          _addListener(target, _eventTypes[0], _onPress, passive, capture);
          _addListener(ownerDoc, _eventTypes[2], _onRelease);
          _addListener(ownerDoc, _eventTypes[3], _onRelease);
          allowClicks && _addListener(target, "click", clickCapture, true, true);
          onClick && _addListener(target, "click", _onClick);
          onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
          onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
          onHover && _addListener(target, _pointerType + "enter", _onHover);
          onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
          onMove && _addListener(target, _pointerType + "move", _onMove);
        }
        self.isEnabled = true;
        e && e.type && _onPress(e);
        onEnable && onEnable(self);
      }
      return self;
    };
    self.disable = function () {
      if (self.isEnabled) {
        // only remove the _onScroll listener if there aren't any others that rely on the functionality.
        _observers.filter(function (o) {
          return o !== self && _isViewport(o.target);
        }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
        if (self.isPressed) {
          self._vx.reset();
          self._vy.reset();
          _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        }
        _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
        _removeListener(target, "wheel", _onWheel, capture);
        _removeListener(target, _eventTypes[0], _onPress, capture);
        _removeListener(ownerDoc, _eventTypes[2], _onRelease);
        _removeListener(ownerDoc, _eventTypes[3], _onRelease);
        _removeListener(target, "click", clickCapture, true);
        _removeListener(target, "click", _onClick);
        _removeListener(ownerDoc, "gesturestart", _onGestureStart);
        _removeListener(ownerDoc, "gestureend", _onGestureEnd);
        _removeListener(target, _pointerType + "enter", _onHover);
        _removeListener(target, _pointerType + "leave", _onHoverEnd);
        _removeListener(target, _pointerType + "move", _onMove);
        self.isEnabled = self.isPressed = self.isDragging = false;
        onDisable && onDisable(self);
      }
    };
    self.kill = self.revert = function () {
      self.disable();
      var i = _observers.indexOf(self);
      i >= 0 && _observers.splice(i, 1);
      _normalizer === self && (_normalizer = 0);
    };
    _observers.push(self);
    isNormalizer && _isViewport(target) && (_normalizer = self);
    self.enable(event);
  };
  _createClass(Observer, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]);
  return Observer;
}();
Observer.version = "3.12.5";
Observer.create = function (vars) {
  return new Observer(vars);
};
Observer.register = _initCore;
Observer.getAll = function () {
  return _observers.slice();
};
Observer.getById = function (id) {
  return _observers.filter(function (o) {
    return o.vars.id === id;
  })[0];
};
_getGSAP() && gsap.registerPlugin(Observer);


/***/ }),

/***/ "./node_modules/gsap/ScrollTrigger.js":
/*!********************************************!*\
  !*** ./node_modules/gsap/ScrollTrigger.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollTrigger: function() { return /* binding */ ScrollTrigger; },
/* harmony export */   "default": function() { return /* binding */ ScrollTrigger; }
/* harmony export */ });
/* harmony import */ var _Observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer.js */ "./node_modules/gsap/Observer.js");
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */

var gsap,
  _coreInitted,
  _win,
  _doc,
  _docEl,
  _body,
  _root,
  _resizeDelay,
  _toArray,
  _clamp,
  _time2,
  _syncInterval,
  _refreshing,
  _pointerIsDown,
  _transformProp,
  _i,
  _prevWidth,
  _prevHeight,
  _autoRefresh,
  _sort,
  _suppressOverwrites,
  _ignoreResize,
  _normalizer,
  _ignoreMobileResize,
  _baseScreenHeight,
  _baseScreenWidth,
  _fixIOSBug,
  _context,
  _scrollRestoration,
  _div100vh,
  _100vh,
  _isReverted,
  _clampingMax,
  _limitCallbacks,
  // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
  _startup = 1,
  _getTime = Date.now,
  _time1 = _getTime(),
  _lastScrollTime = 0,
  _enabled = 0,
  _parseClamp = function _parseClamp(value, type, self) {
    var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self["_" + type + "Clamp"] = clamp;
    return clamp ? value.substr(6, value.length - 7) : value;
  },
  _keepClamp = function _keepClamp(value, clamp) {
    return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
  },
  _rafBugFix = function _rafBugFix() {
    return _enabled && requestAnimationFrame(_rafBugFix);
  },
  // in some browsers (like Firefox), screen repaints weren't consistent unless we had SOMETHING queued up in requestAnimationFrame()! So this just creates a super simple loop to keep it alive and smooth out repaints.
  _pointerDownHandler = function _pointerDownHandler() {
    return _pointerIsDown = 1;
  },
  _pointerUpHandler = function _pointerUpHandler() {
    return _pointerIsDown = 0;
  },
  _passThrough = function _passThrough(v) {
    return v;
  },
  _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
  _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
  _getGSAP = function _getGSAP() {
    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
  },
  _isViewport = function _isViewport(e) {
    return !!~_root.indexOf(e);
  },
  _getViewportDimension = function _getViewportDimension(dimensionProperty) {
    return (dimensionProperty === "Height" ? _100vh : _win["inner" + dimensionProperty]) || _docEl["client" + dimensionProperty] || _body["client" + dimensionProperty];
  },
  _getBoundsFunc = function _getBoundsFunc(element) {
    return (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
      _winOffsets.width = _win.innerWidth;
      _winOffsets.height = _100vh;
      return _winOffsets;
    } : function () {
      return _getBounds(element);
    });
  },
  _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
    var d = _ref.d,
      d2 = _ref.d2,
      a = _ref.a;
    return (a = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "getBoundingClientRect")) ? function () {
      return a()[d];
    } : function () {
      return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
    };
  },
  _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
    return !isViewport || ~_Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
      return _winOffsets;
    };
  },
  _maxScroll = function _maxScroll(element, _ref2) {
    var s = _ref2.s,
      d2 = _ref2.d2,
      d = _ref2.d,
      a = _ref2.a;
    return Math.max(0, (s = "scroll" + d2) && (a = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_docEl[s] || _body[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
  },
  _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
    for (var i = 0; i < _autoRefresh.length; i += 3) {
      (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
    }
  },
  _isString = function _isString(value) {
    return typeof value === "string";
  },
  _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
  _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
  _isObject = function _isObject(value) {
    return typeof value === "object";
  },
  _endAnimation = function _endAnimation(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  },
  _callback = function _callback(self, func) {
    if (self.enabled) {
      var result = self._ctx ? self._ctx.add(function () {
        return func(self);
      }) : func(self);
      result && result.totalTime && (self.callbackAnimation = result);
    }
  },
  _abs = Math.abs,
  _left = "left",
  _top = "top",
  _right = "right",
  _bottom = "bottom",
  _width = "width",
  _height = "height",
  _Right = "Right",
  _Left = "Left",
  _Top = "Top",
  _Bottom = "Bottom",
  _padding = "padding",
  _margin = "margin",
  _Width = "Width",
  _Height = "Height",
  _px = "px",
  _getComputedStyle = function _getComputedStyle(element) {
    return _win.getComputedStyle(element);
  },
  _makePositionable = function _makePositionable(element) {
    // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
    var position = _getComputedStyle(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  },
  _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }
    return obj;
  },
  _getBounds = function _getBounds(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
      }).progress(1),
      bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  },
  _getSize = function _getSize(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  },
  _getLabelRatioArray = function _getLabelRatioArray(timeline) {
    var a = [],
      labels = timeline.labels,
      duration = timeline.duration(),
      p;
    for (p in labels) {
      a.push(labels[p] / duration);
    }
    return a;
  },
  _getClosestLabel = function _getClosestLabel(animation) {
    return function (value) {
      return gsap.utils.snap(_getLabelRatioArray(animation), value);
    };
  },
  _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
    var snap = gsap.utils.snap(snapIncrementOrArray),
      a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function (a, b) {
        return a - b;
      });
    return a ? function (value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var i;
      if (!direction) {
        return snap(value);
      }
      if (direction > 0) {
        value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.

        for (i = 0; i < a.length; i++) {
          if (a[i] >= value) {
            return a[i];
          }
        }
        return a[i - 1];
      } else {
        i = a.length;
        value += threshold;
        while (i--) {
          if (a[i] <= value) {
            return a[i];
          }
        }
      }
      return a[0];
    } : function (value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var snapped = snap(value);
      return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  },
  _getLabelAtDirection = function _getLabelAtDirection(timeline) {
    return function (value, st) {
      return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
    };
  },
  _multiListener = function _multiListener(func, element, types, callback) {
    return types.split(",").forEach(function (type) {
      return func(element, type, callback);
    });
  },
  _addListener = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  },
  _removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  },
  _wheelListener = function _wheelListener(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
      func(el, "wheel", scrollFunc);
      func(el, "touchmove", scrollFunc);
    }
  },
  _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
  _defaults = {
    toggleActions: "play",
    anticipatePin: 0
  },
  _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  },
  _offsetToPx = function _offsetToPx(value, size) {
    if (_isString(value)) {
      var eqIndex = value.indexOf("="),
        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }
      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
  },
  _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor,
      endColor = _ref4.endColor,
      fontSize = _ref4.fontSize,
      indent = _ref4.indent,
      fontWeight = _ref4.fontWeight;
    var e = _doc.createElement("div"),
      useFixedPosition = _isViewport(container) || (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(container, "pinType") === "fixed",
      isScroller = type.indexOf("scroller") !== -1,
      parent = useFixedPosition ? _body : container,
      isStart = type.indexOf("start") !== -1,
      color = isStart ? startColor : endColor,
      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];
    _positionMarker(e, 0, direction, isStart);
    return e;
  },
  _positionMarker = function _positionMarker(marker, start, direction, flipped) {
    var vars = {
        display: "block"
      },
      side = direction[flipped ? "os2" : "p2"],
      oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap.set(marker, vars);
  },
  _triggers = [],
  _ids = {},
  _rafID,
  _sync = function _sync() {
    return _getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
  },
  _onScroll = function _onScroll() {
    // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
    if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body.clientWidth) {
      // if the user is dragging the scrollbar, allow it.
      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
      if (_normalizer) {
        _rafID || (_rafID = requestAnimationFrame(_updateAll));
      } else {
        _updateAll(); // Safari in particular (on desktop) NEEDS the immediate update rather than waiting for a requestAnimationFrame() whereas iOS seems to benefit from waiting for the requestAnimationFrame() tick, at least when normalizing. See https://codepen.io/GreenSock/pen/qBYozqO?editors=0110
      }
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime();
    }
  },
  _setBaseDimensions = function _setBaseDimensions() {
    _baseScreenWidth = _win.innerWidth;
    _baseScreenHeight = _win.innerHeight;
  },
  _onResize = function _onResize() {
    _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
    !_refreshing && !_ignoreResize && !_doc.fullscreenElement && !_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * 0.25) && _resizeDelay.restart(true);
  },
  // ignore resizes triggered by refresh()
  _listeners = {},
  _emptyArray = [],
  _softRefresh = function _softRefresh() {
    return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
  },
  _dispatch = function _dispatch(type) {
    return _listeners[type] && _listeners[type].map(function (f) {
      return f();
    }) || _emptyArray;
  },
  _savedStyles = [],
  // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
  _revertRecorded = function _revertRecorded(media) {
    for (var i = 0; i < _savedStyles.length; i += 5) {
      if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
        _savedStyles[i].style.cssText = _savedStyles[i + 1];
        _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
        _savedStyles[i + 3].uncache = 1;
      }
    }
  },
  _revertAll = function _revertAll(kill, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (trigger && (!media || trigger._ctx === media)) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.revert(true, true);
        }
      }
    }
    _isReverted = true;
    media && _revertRecorded(media);
    media || _dispatch("revert");
  },
  _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
    // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
    _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
    (force || !_refreshingAll) && _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
      return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString(scrollRestoration) && (_win.history.scrollRestoration = _scrollRestoration = scrollRestoration);
  },
  _refreshingAll,
  _refreshID = 0,
  _queueRefreshID,
  _queueRefreshAll = function _queueRefreshAll() {
    // we don't want to call _refreshAll() every time we create a new ScrollTrigger (for performance reasons) - it's better to batch them. Some frameworks dynamically load content and we can't rely on the window's "load" or "DOMContentLoaded" events to trigger it.
    if (_queueRefreshID !== _refreshID) {
      var id = _queueRefreshID = _refreshID;
      requestAnimationFrame(function () {
        return id === _refreshID && _refreshAll(true);
      });
    }
  },
  _refresh100vh = function _refresh100vh() {
    _body.appendChild(_div100vh);
    _100vh = !_normalizer && _div100vh.offsetHeight || _win.innerHeight;
    _body.removeChild(_div100vh);
  },
  _hideAllMarkers = function _hideAllMarkers(hide) {
    return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function (el) {
      return el.style.display = hide ? "none" : "block";
    });
  },
  _refreshAll = function _refreshAll(force, skipRevert) {
    if (_lastScrollTime && !force && !_isReverted) {
      _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
      return;
    }
    _refresh100vh();
    _refreshingAll = ScrollTrigger.isRefreshing = true;
    _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
      return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
    }); // force the clearing of the cache because some browsers take a little while to dispatch the "scroll" event and the user may have changed the scroll position and then called ScrollTrigger.refresh() right away

    var refreshInits = _dispatch("refreshInit");
    _sort && ScrollTrigger.sort();
    skipRevert || _revertAll();
    _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
      if (_isFunction(obj)) {
        obj.smooth && (obj.target.style.scrollBehavior = "auto"); // smooth scrolling interferes

        obj(0);
      }
    });
    _triggers.slice(0).forEach(function (t) {
      return t.refresh();
    }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.

    _isReverted = false;
    _triggers.forEach(function (t) {
      // nested pins (pinnedContainer) with pinSpacing may expand the container, so we must accommodate that here.
      if (t._subPinOffset && t.pin) {
        var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
          original = t.pin[prop];
        t.revert(true, 1);
        t.adjustPinSpacing(t.pin[prop] - original);
        t.refresh();
      }
    });
    _clampingMax = 1; // pinSpacing might be propping a page open, thus when we .setPositions() to clamp a ScrollTrigger's end we should leave the pinSpacing alone. That's what this flag is for.

    _hideAllMarkers(true);
    _triggers.forEach(function (t) {
      // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max". Same for anything with a clamped end
      var max = _maxScroll(t.scroller, t._dir),
        endClamp = t.vars.end === "max" || t._endClamp && t.end > max,
        startClamp = t._startClamp && t.start >= max;
      (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
    });
    _hideAllMarkers(false);
    _clampingMax = 0;
    refreshInits.forEach(function (result) {
      return result && result.render && result.render(-1);
    }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.

    _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
      if (_isFunction(obj)) {
        obj.smooth && requestAnimationFrame(function () {
          return obj.target.style.scrollBehavior = "smooth";
        });
        obj.rec && obj(obj.rec);
      }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _refreshingAll = 2;
    _updateAll(2);
    _triggers.forEach(function (t) {
      return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
    });
    _refreshingAll = ScrollTrigger.isRefreshing = false;
    _dispatch("refresh");
  },
  _lastScroll = 0,
  _direction = 1,
  _primary,
  _updateAll = function _updateAll(force) {
    if (force === 2 || !_refreshingAll && !_isReverted) {
      // _isReverted could be true if, for example, a matchMedia() is in the process of executing. We don't want to update during the time everything is reverted.
      ScrollTrigger.isUpdating = true;
      _primary && _primary.update(0); // ScrollSmoother uses refreshPriority -9999 to become the primary that gets updated before all others because it affects the scroll position.

      var l = _triggers.length,
        time = _getTime(),
        recordVelocity = time - _time1 >= 50,
        scroll = l && _triggers[0].scroll();
      _direction = _lastScroll > scroll ? -1 : 1;
      _refreshingAll || (_lastScroll = scroll);
      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;
          _dispatch("scrollEnd");
        }
        _time2 = _time1;
        _time1 = time;
      }
      if (_direction < 0) {
        _i = l;
        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
        _direction = 1;
      } else {
        for (_i = 0; _i < l; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }
      ScrollTrigger.isUpdating = false;
    }
    _rafID = 0;
  },
  _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
  _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
  _swapPinOut = function _swapPinOut(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin._gsap.swappedIn) {
      var parent = spacer.parentNode;
      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }
    pin._gsap.swappedIn = false;
  },
  _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
      var i = _propNamesToCopy.length,
        spacerStyle = spacer.style,
        pinStyle = pin.style,
        p;
      while (i--) {
        p = _propNamesToCopy[i];
        spacerStyle[p] = cs[p];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.flexBasis = cs.flexBasis || "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      if (pin.parentNode !== spacer) {
        pin.parentNode.insertBefore(spacer, pin);
        spacer.appendChild(pin);
      }
      pin._gsap.swappedIn = true;
    }
  },
  _capsExp = /([A-Z])/g,
  _setState = function _setState(state) {
    if (state) {
      var style = state.t.style,
        l = state.length,
        i = 0,
        p,
        value;
      (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off

      for (; i < l; i += 2) {
        value = state[i + 1];
        p = state[i];
        if (value) {
          style[p] = value;
        } else if (style[p]) {
          style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
        }
      }
    }
  },
  _getState = function _getState(element) {
    // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
    var l = _stateProps.length,
      style = element.style,
      state = [],
      i = 0;
    for (; i < l; i++) {
      state.push(_stateProps[i], style[_stateProps[i]]);
    }
    state.t = element;
    return state;
  },
  _copyState = function _copyState(state, override, omitOffsets) {
    var result = [],
      l = state.length,
      i = omitOffsets ? 8 : 0,
      // skip top, left, right, bottom if omitOffsets is true
      p;
    for (; i < l; i += 2) {
      p = state[i];
      result.push(p, p in override ? override[p] : state[i + 1]);
    }
    result.t = state.t;
    return result;
  },
  _winOffsets = {
    left: 0,
    top: 0
  },
  // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
  // _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
  // 	scroller = _getTarget(scroller || _win);
  // 	let direction = horizontal ? _horizontal : _vertical,
  // 		isViewport = _isViewport(scroller);
  // 	_getSizeFunc(scroller, isViewport, direction);
  // 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
  // },
  _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction(value) && (value = value(self));
    if (_isString(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    var time = containerAnimation ? containerAnimation.time() : 0,
      p1,
      p2,
      element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value); // convert a string number like "45" to an actual number

    if (!_isNumber(value)) {
      _isFunction(trigger) && (trigger = trigger(self));
      var offsets = (value || "0").split(" "),
        bounds,
        localOffset,
        globalOffset,
        display;
      element = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(trigger, self) || _body;
      bounds = _getBounds(element) || {};
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
        // if display is "none", it won't report getBoundingClientRect() properly
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
    } else {
      containerAnimation && (value = gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
      markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
      self[clampZeroProp] = value || -0.001;
      value < 0 && (value = 0);
    }
    if (marker) {
      var position = value + scrollerSize,
        isStart = marker._isStart;
      p1 = "scroll" + direction.d2;
      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    if (containerAnimation && element) {
      p1 = _getBounds(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  },
  _prefixExp = /(webkit|moz|length|cssText|inset)/i,
  _reparent = function _reparent(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style = element.style,
        p,
        cs;
      if (parent === _body) {
        element._stOrig = style.cssText; // record original inline styles so we can revert them later

        cs = _getComputedStyle(element);
        for (p in cs) {
          // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
          if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
            style[p] = cs[p];
          }
        }
        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }
      gsap.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  },
  _interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue,
      last2 = last1;
    return function (value) {
      var current = Math.round(getValueFunc()); // round because in some [very uncommon] Windows environments, scroll can get reported with decimals even though it was set without.

      if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
        // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
        value = current;
        onInterrupt && onInterrupt();
      }
      last2 = last1;
      last1 = value;
      return value;
    };
  },
  _shiftMarker = function _shiftMarker(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    gsap.set(marker, vars);
  },
  // _mergeAnimations = animations => {
  // 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
  // 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
  // 	tl.smoothChildTiming = false;
  // 	return tl;
  // },
  // returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
  _getTweenCreator = function _getTweenCreator(scroller, direction) {
    var getScroll = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, direction),
      prop = "_scroll" + direction.p2,
      // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
      getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
        var tween = getTween.tween,
          onComplete = vars.onComplete,
          modifiers = {};
        initialValue = initialValue || getScroll();
        var checkForInterruption = _interruptionTracker(getScroll, initialValue, function () {
          tween.kill();
          getTween.tween = 0;
        });
        change2 = change1 && change2 || 0; // if change1 is 0, we set that to the difference and ignore change2. Otherwise, there would be a compound effect.

        change1 = change1 || scrollTo - initialValue;
        tween && tween.kill();
        vars[prop] = scrollTo;
        vars.inherit = false;
        vars.modifiers = modifiers;
        modifiers[prop] = function () {
          return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
        };
        vars.onUpdate = function () {
          _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
          getTween.tween && _updateAll(); // if it was interrupted/killed, like in a context.revert(), don't force an updateAll()
        };
        vars.onComplete = function () {
          getTween.tween = 0;
          onComplete && onComplete.call(tween);
        };
        tween = getTween.tween = gsap.to(scroller, vars);
        return tween;
      };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function () {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener(scroller, "wheel", getScroll.wheelHandler); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.

    ScrollTrigger.isTouch && _addListener(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
  };
var ScrollTrigger = /*#__PURE__*/function () {
  function ScrollTrigger(vars, animation) {
    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
    _context(this);
    this.init(vars, animation);
  }
  var _proto = ScrollTrigger.prototype;
  _proto.init = function init(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(true, true); // in case it's being initted again

    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }
    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);
    var _vars = vars,
      onUpdate = _vars.onUpdate,
      toggleClass = _vars.toggleClass,
      id = _vars.id,
      onToggle = _vars.onToggle,
      onRefresh = _vars.onRefresh,
      scrub = _vars.scrub,
      trigger = _vars.trigger,
      pin = _vars.pin,
      pinSpacing = _vars.pinSpacing,
      invalidateOnRefresh = _vars.invalidateOnRefresh,
      anticipatePin = _vars.anticipatePin,
      onScrubComplete = _vars.onScrubComplete,
      onSnapComplete = _vars.onSnapComplete,
      once = _vars.once,
      snap = _vars.snap,
      pinReparent = _vars.pinReparent,
      pinSpacer = _vars.pinSpacer,
      containerAnimation = _vars.containerAnimation,
      fastScrollEnd = _vars.fastScrollEnd,
      preventOverlaps = _vars.preventOverlaps,
      direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical,
      isToggle = !scrub && scrub !== 0,
      scroller = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.scroller || _win),
      scrollerCache = gsap.core.getCache(scroller),
      isViewport = _isViewport(scroller),
      useFixedPosition = ("pinType" in vars ? vars.pinType : (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "pinType") || isViewport && "fixed") === "fixed",
      callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
      toggleActions = isToggle && vars.toggleActions.split(" "),
      markers = "markers" in vars ? vars.markers : _defaults.markers,
      borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
      self = this,
      onRefreshInit = vars.onRefreshInit && function () {
        return vars.onRefreshInit(self);
      },
      getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
      getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
      lastSnap = 0,
      lastRefresh = 0,
      prevProgress = 0,
      scrollFunc = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, direction),
      tweenTo,
      pinCache,
      snapFunc,
      scroll1,
      scroll2,
      start,
      end,
      markerStart,
      markerEnd,
      markerStartTrigger,
      markerEndTrigger,
      markerVars,
      executingOnRefresh,
      change,
      pinOriginalState,
      pinActiveState,
      pinState,
      spacer,
      offset,
      pinGetter,
      pinSetter,
      pinStart,
      pinChange,
      spacingStart,
      spacerState,
      markerStartSetter,
      pinMoves,
      markerEndSetter,
      cs,
      snap1,
      snap2,
      scrubTween,
      scrubSmooth,
      snapDurClamp,
      snapDelayedCall,
      prevScroll,
      prevAnimProgress,
      caMarkerSetter,
      customRevertReturn; // for the sake of efficiency, _startClamp/_endClamp serve like a truthy value indicating that clamping was enabled on the start/end, and ALSO store the actual pre-clamped numeric value. We tap into that in ScrollSmoother for speed effects. So for example, if start="clamp(top bottom)" results in a start of -100 naturally, it would get clamped to 0 but -100 would be stored in _startClamp.

    self._startClamp = self._endClamp = false;
    self._dir = direction;
    anticipatePin *= 45;
    self.scroller = scroller;
    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self.vars = vars;
    animation = animation || vars.animation;
    if ("refreshPriority" in vars) {
      _sort = 1;
      vars.refreshPriority === -9999 && (_primary = self); // used by ScrollSmoother
    }
    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical),
      left: _getTweenCreator(scroller, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
    self.scrubDuration = function (value) {
      scrubSmooth = _isNumber(value) && value;
      if (!scrubSmooth) {
        scrubTween && scrubTween.progress(1).kill();
        scrubTween = 0;
      } else {
        scrubTween ? scrubTween.duration(value) : scrubTween = gsap.to(animation, {
          ease: "expo",
          totalProgress: "+=0",
          inherit: false,
          duration: scrubSmooth,
          paused: true,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self);
          }
        });
      }
    };
    if (animation) {
      animation.vars.lazy = false;
      animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true); // special case: if this ScrollTrigger gets re-initted, a from() tween with a stagger could get initted initially and then reverted on the re-init which means it'll need to get rendered again here to properly display things. Otherwise, See https://gsap.com/forums/topic/36777-scrollsmoother-splittext-nextjs/ and https://codepen.io/GreenSock/pen/eYPyPpd?editors=0010

      self.animation = animation.pause();
      animation.scrollTrigger = self;
      self.scrubDuration(scrub);
      snap1 = 0;
      id || (id = animation.vars.id);
    }
    if (snap) {
      // TODO: potential idea: use legitimate CSS scroll snapping by pushing invisible elements into the DOM that serve as snap positions, and toggle the document.scrollingElement.style.scrollSnapType onToggle. See https://codepen.io/GreenSock/pen/JjLrgWM for a quick proof of concept.
      if (!_isObject(snap) || snap.push) {
        snap = {
          snapTo: snap
        };
      }
      "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
        scrollBehavior: "auto"
      }); // smooth scrolling doesn't work with snap.

      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (o) {
        return _isFunction(o) && o.target === (isViewport ? _doc.scrollingElement || _docEl : scroller) && (o.smooth = false);
      }); // note: set smooth to false on both the vertical and horizontal scroll getters/setters

      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function (value, st) {
        return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
      } : gsap.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
        var scroll = scrollFunc(),
          refreshedRecently = _getTime() - lastRefresh < 500,
          tween = tweenTo.tween;
        if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
          var progress = (scroll - start) / change,
            totalProgress = animation && !isToggle ? animation.totalProgress() : progress,
            velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
            change1 = gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185),
            naturalEnd = progress + (snap.inertia === false ? 0 : change1),
            endValue,
            endScroll,
            _snap = snap,
            onStart = _snap.onStart,
            _onInterrupt = _snap.onInterrupt,
            _onComplete = _snap.onComplete;
          endValue = snapFunc(naturalEnd, self);
          _isNumber(endValue) || (endValue = naturalEnd); // in case the function didn't return a number, fall back to using the naturalEnd

          endScroll = Math.round(start + endValue * change);
          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
              return;
            }
            if (snap.inertia === false) {
              change1 = endValue - progress;
            }
            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
              },
              onComplete: function onComplete() {
                self.update();
                lastSnap = scrollFunc();
                if (animation) {
                  // the resolution of the scrollbar is limited, so we should correct the scrubbed animation's playhead at the end to match EXACTLY where it was supposed to snap
                  scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                }
                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _onComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && onStart(self, tweenTo.tween);
          }
        } else if (self.isActive && lastSnap !== scroll) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }
    id && (_ids[id] = self);
    trigger = self.trigger = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(trigger || pin !== true && pin); // if a trigger has some kind of scroll-related effect applied that could contaminate the "y" or "x" position (like a ScrollSmoother effect), we needed a way to temporarily revert it, so we use the stRevert property of the gsCache. It can return another function that we'll call at the end so it can return to its normal state.

    customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
    customRevertReturn && (customRevertReturn = customRevertReturn(self));
    pin = pin === true ? trigger : (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(pin);
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });
    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default. We should check that pin.parentNode is an element (not shadow dom window)

      self.pin = pin;
      pinCache = gsap.core.getCache(pin);
      if (!pinCache.spacer) {
        // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
        if (pinSpacer) {
          pinSpacer = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular

          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }
        pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }
      vars.force3D !== false && gsap.set(pin, {
        force3D: true
      });
      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap.getProperty(pin);
      pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).

      _swapPinIn(pin, spacer, cs);
      pinState = _getState(pin);
    }
    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];
      var content = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)((0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "content") || scroller);
      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = gsap.quickSetter([markerStart, markerEnd], direction.a, _px));
      if (!useFixedPosition && !(_Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.length && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? _body : scroller);
        gsap.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }
    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate,
        oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function () {
        self.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
      });
    }
    self.previous = function () {
      return _triggers[_triggers.indexOf(self) - 1];
    };
    self.next = function () {
      return _triggers[_triggers.indexOf(self) + 1];
    };
    self.revert = function (revert, temp) {
      if (!temp) {
        return self.kill(true);
      } // for compatibility with gsap.context() and gsap.matchMedia() which call revert()

      var r = revert !== false || !self.enabled,
        prevRefreshing = _refreshing;
      if (r !== self.isReverted) {
        if (r) {
          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.

          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.style.display = r ? "none" : "block";
        });
        if (r) {
          _refreshing = self;
          self.update(r); // make sure the pin is back in its original position so that all the measurements are correct. do this BEFORE swapping the pin out
        }
        if (pin && (!pinReparent || !self.isActive)) {
          if (r) {
            _swapPinOut(pin, spacer, pinOriginalState);
          } else {
            _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
          }
        }
        r || self.update(r); // when we're restoring, the update should run AFTER swapping the pin into its pin-spacer.

        _refreshing = prevRefreshing; // restore. We set it to true during the update() so that things fire properly in there.

        self.isReverted = r;
      }
    };
    self.refresh = function (soft, force, position, pinOffset) {
      // position is typically only defined if it's coming from setPositions() - it's a way to skip the normal parsing. pinOffset is also only from setPositions() and is mostly related to fancy stuff we need to do in ScrollSmoother with effects
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }
      if (pin && soft && _lastScrollTime) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
        return;
      }
      !_refreshingAll && onRefreshInit && onRefreshInit(self);
      _refreshing = self;
      if (tweenTo.tween && !position) {
        // we skip this if a position is passed in because typically that's from .setPositions() and it's best to allow in-progress snapping to continue.
        tweenTo.tween.kill();
        tweenTo.tween = 0;
      }
      scrubTween && scrubTween.pause();
      invalidateOnRefresh && animation && animation.revert({
        kill: false
      }).invalidate();
      self.isReverted || self.revert(true, true);
      self._subPinOffset = false; // we'll set this to true in the sub-pins if we find any

      var size = getScrollerSize(),
        scrollerBounds = getScrollerOffsets(),
        max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction),
        isFirstRefresh = change <= 0.01,
        offset = 0,
        otherPinOffset = pinOffset || 0,
        parsedEnd = _isObject(position) ? position.end : vars.end,
        parsedEndTrigger = vars.endTrigger || trigger,
        parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
        pinnedContainer = self.pinnedContainer = vars.pinnedContainer && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.pinnedContainer, self),
        triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
        i = triggerIndex,
        cs,
        bounds,
        scroll,
        isVertical,
        override,
        curTrigger,
        curPin,
        oppositeScroll,
        initted,
        revertedPins,
        forcedOverflow,
        markerStartOffset,
        markerEndOffset;
      if (markers && _isObject(position)) {
        // if we alter the start/end positions with .setPositions(), it generally feeds in absolute NUMBERS which don't convey information about where to line up the markers, so to keep it intuitive, we record how far the trigger positions shift after applying the new numbers and then offset by that much in the opposite direction. We do the same to the associated trigger markers too of course.
        markerStartOffset = gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset = gsap.getProperty(markerEndTrigger, direction.p);
      }
      while (i--) {
        // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.

        curPin = curTrigger.pin;
        if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly

          curTrigger.revert(true, true);
        }
        if (curTrigger !== _triggers[i]) {
          // in case it got removed.
          triggerIndex--;
          i--;
        }
      }
      _isFunction(parsedStart) && (parsedStart = parsedStart(self));
      parsedStart = _parseClamp(parsedStart, "start", self);
      start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -0.001 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.

          parsedEndTrigger = trigger;
        }
      }
      parsedEnd = _parseClamp(parsedEnd, "end", self);
      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -0.001;
      offset = 0;
      i = triggerIndex;
      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;
        if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
          cs = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
          if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
            // numeric start values shouldn't be offset at all - treat them as absolute
            offset += cs * (1 - curTrigger.progress);
          }
          curPin === pin && (otherPinOffset += cs);
        }
      }
      start += offset;
      end += offset;
      self._startClamp && (self._startClamp += offset);
      if (self._endClamp && !_refreshingAll) {
        self._endClamp = end || -0.001;
        end = Math.min(end, _maxScroll(scroller, direction));
      }
      change = end - start || (start -= 0.01) && 0.001;
      if (isFirstRefresh) {
        // on the very first refresh(), the prevProgress couldn't have been accurate yet because the start/end were never calculated, so we set it here. Before 3.11.5, it could lead to an inaccurate scroll position restoration with snapping.
        prevProgress = gsap.utils.clamp(0, 1, gsap.utils.normalize(start, end, prevScroll));
      }
      self._pinPush = otherPinOffset;
      if (markerStart && offset) {
        // offset the markers if necessary
        cs = {};
        cs[direction.a] = "+=" + offset;
        pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
        gsap.set([markerStart, markerEnd], cs);
      }
      if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
        cs = _getComputedStyle(pin);
        isVertical = direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical;
        scroll = scrollFunc(); // recalculate because the triggers can affect the scroll

        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
        if (!max && end > 1) {
          // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://gsap.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/
          forcedOverflow = (isViewport ? _doc.scrollingElement || _docEl : scroller).style;
          forcedOverflow = {
            style: forcedOverflow,
            value: forcedOverflow["overflow" + direction.a.toUpperCase()]
          };
          if (isViewport && _getComputedStyle(_body)["overflow" + direction.a.toUpperCase()] !== "scroll") {
            // avoid an extra scrollbar if BOTH <html> and <body> have overflow set to "scroll"
            forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
          }
        }
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.

        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, isVertical ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical)();
        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
          if (i) {
            spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).

            spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
          }
          _setState(spacerState);
          if (pinnedContainer) {
            // in ScrollTrigger.refresh(), we need to re-evaluate the pinContainer's size because this pinSpacing may stretch it out, but we can't just add the exact distance because depending on layout, it may not push things down or it may only do so partially.
            _triggers.forEach(function (t) {
              if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                t._subPinOffset = true;
              }
            });
          }
          useFixedPosition && scrollFunc(prevScroll);
        } else {
          i = _getSize(pin, direction);
          i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
        }
        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs[_padding];
          override[_padding + _Top] = cs[_padding + _Top];
          override[_padding + _Right] = cs[_padding + _Right];
          override[_padding + _Bottom] = cs[_padding + _Bottom];
          override[_padding + _Left] = cs[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
          _refreshingAll && scrollFunc(0);
        }
        if (animation) {
          // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
          initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.

          _suppressOverwrites(1);
          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          pinMoves = Math.abs(change - pinChange) > 1;
          useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.

          animation.render(0, true, true);
          initted || animation.invalidate(true);
          animation.parent || animation.totalTime(animation.totalTime()); // if, for example, a toggleAction called play() and then refresh() happens and when we render(1) above, it would cause the animation to complete and get removed from its parent, so this makes sure it gets put back in.

          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }
        forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
      } else if (trigger && scrollFunc() && !containerAnimation) {
        // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
        bounds = trigger.parentNode;
        while (bounds && bounds !== _body) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }
          bounds = bounds.parentNode;
        }
      }
      revertedPins && revertedPins.forEach(function (t) {
        return t.revert(false, true);
      });
      self.start = start;
      self.end = end;
      scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc(); // reset velocity

      if (!containerAnimation && !_refreshingAll) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self.scroll.rec = 0;
      }
      self.revert(false, true);
      lastRefresh = _getTime();
      if (snapDelayedCall) {
        lastSnap = -1; // just so snapping gets re-enabled, clear out any recorded last value
        // self.isActive && scrollFunc(start + change * prevProgress); // previously this line was here to ensure that when snapping kicks in, it's from the previous progress but in some cases that's not desirable, like an all-page ScrollTrigger when new content gets added to the page, that'd totally change the progress.

        snapDelayedCall.restart(true);
      }
      _refreshing = 0;
      animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().

      if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh) {
        // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
        animation && !isToggle && animation.totalProgress(containerAnimation && start < -0.001 && !prevProgress ? gsap.utils.normalize(start, end, 0) : prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.

        self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
      }
      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      scrubTween && scrubTween.invalidate();
      if (!isNaN(markerStartOffset)) {
        // numbers were passed in for the position which are absolute, so instead of just putting the markers at the very bottom of the viewport, we figure out how far they shifted down (it's safe to assume they were originally positioned in closer relation to the trigger element with values like "top", "center", a percentage or whatever, so we offset that much in the opposite direction to basically revert them to the relative position thy were at previously.
        markerStartOffset -= gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset -= gsap.getProperty(markerEndTrigger, direction.p);
        _shiftMarker(markerStartTrigger, direction, markerStartOffset);
        _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
        _shiftMarker(markerEndTrigger, direction, markerEndOffset);
        _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
      }
      isFirstRefresh && !_refreshingAll && self.update(); // edge case - when you reload a page when it's already scrolled down, some browsers fire a "scroll" event before DOMContentLoaded, triggering an updateAll(). If we don't update the self.progress as part of refresh(), then when it happens next, it may record prevProgress as 0 when it really shouldn't, potentially causing a callback in an animation to fire again.

      if (onRefresh && !_refreshingAll && !executingOnRefresh) {
        // when refreshing all, we do extra work to correct pinnedContainer sizes and ensure things don't exceed the maxScroll, so we should do all the refreshes at the end after all that work so that the start/end values are corrected.
        executingOnRefresh = true;
        onRefresh(self);
        executingOnRefresh = false;
      }
    };
    self.getVelocity = function () {
      return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1000 || 0;
    };
    self.endAnimation = function () {
      _endAnimation(self.callbackAnimation);
      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
      }
    };
    self.labelToScroll = function (label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };
    self.getTrailing = function (name) {
      var i = _triggers.indexOf(self),
        a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
      return (_isString(name) ? a.filter(function (t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function (t) {
        return self.direction > 0 ? t.end <= start : t.start >= end;
      });
    };
    self.update = function (reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }
      var scroll = _refreshingAll === true ? prevScroll : self.scroll(),
        p = reset ? 0 : (scroll - start) / change,
        clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
        prevProgress = self.progress,
        isActive,
        wasActive,
        toggleState,
        action,
        stateChanged,
        toggled,
        isAtMax,
        isTakingAction;
      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;
        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).

      if (anticipatePin && pin && !_refreshing && !_startup && _lastScrollTime) {
        if (!clipped && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) {
          clipped = 0.0001;
        } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) {
          clipped = 0.9999;
        }
      }
      if (clipped !== prevProgress && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress && prevProgress < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)

        self.direction = clipped > prevProgress ? 1 : -1;
        self.progress = clipped;
        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.

          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)

            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }
        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function (t) {
          return t.endAnimation();
        }));
        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start); // if there's a scrub on both the container animation and this one (or a ScrollSmoother), the update order would cause this one not to have rendered yet, so it wouldn't make any progress before we .restart() it heading toward the new progress so it'd appear stuck thus we force a render here.

            if (scrubTween.resetTo) {
              scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
            } else {
              // legacy support (courtesy), before 3.10.0
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            }
          } else if (animation) {
            animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
          }
        }
        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
          if (!useFixedPosition) {
            pinSetter(_round(pinStart + pinChange * clipped));
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)

            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true),
                  _offset = scroll - start;
                _reparent(pin, _body, bounds.top + (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? _offset : 0) + _px, bounds.left + (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }
            _setState(isActive || isAtMax ? pinActiveState : pinState);
            pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }
        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        }); // classes could affect positioning, so do it even if reset or refreshing is true.

        onUpdate && !isToggle && !reset && onUpdate(self);
        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }
            onUpdate && onUpdate(self);
          }
          if (toggled || !_limitCallbacks) {
            // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
            onToggle && toggled && _callback(self, onToggle);
            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.

            if (!toggled) {
              // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            }
          }
          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self.callbackAnimation);
            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      } // update absolutely-positioned markers (only if the scroller isn't the viewport)

      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }
      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };
    self.enable = function (reset, refresh) {
      if (!self.enabled) {
        self.enabled = true;
        _addListener(scroller, "resize", _onResize);
        isViewport || _addListener(scroller, "scroll", _onScroll);
        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
        if (reset !== false) {
          self.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }
        refresh !== false && self.refresh();
      }
    };
    self.getTween = function (snap) {
      return snap && tweenTo ? tweenTo.tween : scrubTween;
    };
    self.setPositions = function (newStart, newEnd, keepClamp, pinOffset) {
      // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
      if (containerAnimation) {
        // convert ratios into scroll positions. Remember, start/end values on ScrollTriggers that have a containerAnimation refer to the time (in seconds), NOT scroll positions.
        var st = containerAnimation.scrollTrigger,
          duration = containerAnimation.duration(),
          _change = st.end - st.start;
        newStart = st.start + _change * newStart / duration;
        newEnd = st.start + _change * newEnd / duration;
      }
      self.refresh(false, false, {
        start: _keepClamp(newStart, keepClamp && !!self._startClamp),
        end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
      }, pinOffset);
      self.update();
    };
    self.adjustPinSpacing = function (amount) {
      if (spacerState && amount) {
        var i = spacerState.indexOf(direction.d) + 1;
        spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
        spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
        _setState(spacerState);
      }
    };
    self.disable = function (reset, allowAnimation) {
      if (self.enabled) {
        reset !== false && self.revert(true, true);
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);
        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }
        if (!isViewport) {
          var i = _triggers.length;
          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return; //don't remove the listeners if there are still other triggers referencing it.
            }
          }
          _removeListener(scroller, "resize", _onResize);
          isViewport || _removeListener(scroller, "scroll", _onScroll);
        }
      }
    };
    self.kill = function (revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      scrubTween && !allowAnimation && scrubTween.kill();
      id && delete _ids[id];
      var i = _triggers.indexOf(self);
      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
      // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.

      i = 0;
      _triggers.forEach(function (t) {
        return t.scroller === self.scroller && (i = 1);
      });
      i || _refreshingAll || (self.scroll.rec = 0);
      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.revert({
          kill: false
        });
        allowAnimation || animation.kill();
      }
      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });
      _primary === self && (_primary = 0);
      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;
        _triggers.forEach(function (t) {
          return t.pin === pin && i++;
        });
        i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
      }
      vars.onKill && vars.onKill(self);
    };
    _triggers.push(self);
    self.enable(false, false);
    customRevertReturn && customRevertReturn(self);
    if (animation && animation.add && !change) {
      // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
      var updateFunc = self.update; // some browsers may fire a scroll event BEFORE a tick elapses and/or the DOMContentLoaded fires. So there's a chance update() will be called BEFORE a refresh() has happened on a Timeline-attached ScrollTrigger which means the start/end won't be calculated yet. We don't want to add conditional logic inside the update() method (like check to see if end is defined and if not, force a refresh()) because that's a function that gets hit a LOT (performance). So we swap out the real update() method for this one that'll re-attach it the first time it gets called and of course forces a refresh().

      self.update = function () {
        self.update = updateFunc;
        start || end || self.refresh();
      };
      gsap.delayedCall(0.01, self.update);
      change = 0.01;
      start = end = 0;
    } else {
      self.refresh();
    }
    pin && _queueRefreshAll(); // pinning could affect the positions of other things, so make sure we queue a full refresh()
  };
  ScrollTrigger.register = function register(core) {
    if (!_coreInitted) {
      gsap = core || _getGSAP();
      _windowExists() && window.document && ScrollTrigger.enable();
      _coreInitted = _enabled;
    }
    return _coreInitted;
  };
  ScrollTrigger.defaults = function defaults(config) {
    if (config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    }
    return _defaults;
  };
  ScrollTrigger.disable = function disable(reset, kill) {
    _enabled = 0;
    _triggers.forEach(function (trigger) {
      return trigger[kill ? "kill" : "disable"](reset);
    });
    _removeListener(_win, "wheel", _onScroll);
    _removeListener(_doc, "scroll", _onScroll);
    clearInterval(_syncInterval);
    _removeListener(_doc, "touchcancel", _passThrough);
    _removeListener(_body, "touchstart", _passThrough);
    _multiListener(_removeListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
    _multiListener(_removeListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
    _resizeDelay.kill();
    _iterateAutoRefresh(_removeListener);
    for (var i = 0; i < _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.length; i += 3) {
      _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 1]);
      _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 2]);
    }
  };
  ScrollTrigger.enable = function enable() {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;
    if (gsap) {
      _toArray = gsap.utils.toArray;
      _clamp = gsap.utils.clamp;
      _context = gsap.core.context || _passThrough;
      _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
      _scrollRestoration = _win.history.scrollRestoration || "auto";
      _lastScroll = _win.pageYOffset;
      gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.

      if (_body) {
        _enabled = 1;
        _div100vh = document.createElement("div"); // to solve mobile browser address bar show/hide resizing, we shouldn't rely on window.innerHeight. Instead, use a <div> with its height set to 100vh and measure that since that's what the scrolling is based on anyway and it's not affected by address bar showing/hiding.

        _div100vh.style.height = "100vh";
        _div100vh.style.position = "absolute";
        _refresh100vh();
        _rafBugFix();
        _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.register(gsap); // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

        ScrollTrigger.isTouch = _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch;
        _fixIOSBug = _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent); // since 2017, iOS has had a bug that causes event.clientX/Y to be inaccurate when a scroll occurs, thus we must alternate ignoring every other touchmove event to work around it. See https://bugs.webkit.org/show_bug.cgi?id=181954 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503

        _ignoreMobileResize = _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch === 1;
        _addListener(_win, "wheel", _onScroll); // mostly for 3rd party smooth scrolling libraries.

        _root = [_win, _doc, _docEl, _body];
        if (gsap.matchMedia) {
          ScrollTrigger.matchMedia = function (vars) {
            var mm = gsap.matchMedia(),
              p;
            for (p in vars) {
              mm.add(p, vars[p]);
            }
            return mm;
          };
          gsap.addEventListener("matchMediaInit", function () {
            return _revertAll();
          });
          gsap.addEventListener("matchMediaRevert", function () {
            return _revertRecorded();
          });
          gsap.addEventListener("matchMedia", function () {
            _refreshAll(0, 1);
            _dispatch("matchMedia");
          });
          gsap.matchMedia("(orientation: portrait)", function () {
            // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
            _setBaseDimensions();
            return _setBaseDimensions;
          });
        } else {
          console.warn("Requires GSAP 3.11.0 or later");
        }
        _setBaseDimensions();
        _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!

        var bodyStyle = _body.style,
          border = bodyStyle.borderTopStyle,
          AnimationProto = gsap.core.Animation.prototype,
          bounds,
          i;
        AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
          value: function value() {
            return this.time(-0.01, true);
          }
        }); // only for backwards compatibility (Animation.revert() was added after 3.10.4)

        bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.

        bounds = _getBounds(_body);
        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical.m = Math.round(bounds.top + _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical.sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding

        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal.m = Math.round(bounds.left + _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal.sc()) || 0;
        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style"); // TODO: (?) maybe move to leveraging the velocity mechanism in Observer and skip intervals.

        _syncInterval = setInterval(_sync, 250);
        gsap.delayedCall(0.5, function () {
          return _startup = 0;
        });
        _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.

        _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://gsap.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/

        _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
        _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
        _transformProp = gsap.utils.checkPrefix("transform");
        _stateProps.push(_transformProp);
        _coreInitted = _getTime();
        _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
        _autoRefresh = [_doc, "visibilitychange", function () {
          var w = _win.innerWidth,
            h = _win.innerHeight;
          if (_doc.hidden) {
            _prevWidth = w;
            _prevHeight = h;
          } else if (_prevWidth !== w || _prevHeight !== h) {
            _onResize();
          }
        }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", _refreshAll, _win, "resize", _onResize];
        _iterateAutoRefresh(_addListener);
        _triggers.forEach(function (trigger) {
          return trigger.enable(0, 1);
        });
        for (i = 0; i < _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.length; i += 3) {
          _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 1]);
          _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 2]);
        }
      }
    }
  };
  ScrollTrigger.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);
    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };
  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
    var t = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(target),
      i = _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.indexOf(t),
      isViewport = _isViewport(t);
    if (~i) {
      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.splice(i, isViewport ? 6 : 2);
    }
    if (vars) {
      isViewport ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.unshift(t, vars);
    }
  };
  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
    _triggers.forEach(function (t) {
      return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
    });
  };
  ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (_isString(element) ? (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element) : element).getBoundingClientRect(),
      offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
  };
  ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    _isString(element) && (element = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element));
    var bounds = element.getBoundingClientRect(),
      size = bounds[horizontal ? _width : _height],
      offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
  };
  ScrollTrigger.killAll = function killAll(allowListeners) {
    _triggers.slice(0).forEach(function (t) {
      return t.vars.id !== "ScrollSmoother" && t.kill();
    });
    if (allowListeners !== true) {
      var listeners = _listeners.killAll || [];
      _listeners = {};
      listeners.forEach(function (f) {
        return f();
      });
    }
  };
  return ScrollTrigger;
}();
ScrollTrigger.version = "3.12.5";
ScrollTrigger.saveStyles = function (targets) {
  return targets ? _toArray(targets).forEach(function (target) {
    // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);
      i >= 0 && _savedStyles.splice(i, 5);
      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _context());
    }
  }) : _savedStyles;
};
ScrollTrigger.revert = function (soft, media) {
  return _revertAll(!soft, media);
};
ScrollTrigger.create = function (vars, animation) {
  return new ScrollTrigger(vars, animation);
};
ScrollTrigger.refresh = function (safe) {
  return safe ? _onResize() : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};
ScrollTrigger.update = function (force) {
  return ++_Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache && _updateAll(force === true ? 2 : 0);
};
ScrollTrigger.clearScrollMemory = _clearScrollMemory;
ScrollTrigger.maxScroll = function (element, horizontal) {
  return _maxScroll(element, horizontal ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
};
ScrollTrigger.getScrollFunc = function (element, horizontal) {
  return (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)((0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element), horizontal ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
};
ScrollTrigger.getById = function (id) {
  return _ids[id];
};
ScrollTrigger.getAll = function () {
  return _triggers.filter(function (t) {
    return t.vars.id !== "ScrollSmoother";
  });
}; // it's common for people to ScrollTrigger.getAll(t => t.kill()) on page routes, for example, and we don't want it to ruin smooth scrolling by killing the main ScrollSmoother one.

ScrollTrigger.isScrolling = function () {
  return !!_lastScrollTime;
};
ScrollTrigger.snapDirectional = _snapDirectional;
ScrollTrigger.addEventListener = function (type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};
ScrollTrigger.removeEventListener = function (type, callback) {
  var a = _listeners[type],
    i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};
ScrollTrigger.batch = function (targets, vars) {
  var result = [],
    varsCopy = {},
    interval = vars.interval || 0.016,
    batchMax = vars.batchMax || 1e9,
    proxyCallback = function proxyCallback(type, callback) {
      var elements = [],
        triggers = [],
        delay = gsap.delayedCall(interval, function () {
          callback(elements, triggers);
          elements = [];
          triggers = [];
        }).pause();
      return function (self) {
        elements.length || delay.restart(true);
        elements.push(self.trigger);
        triggers.push(self);
        batchMax <= elements.length && delay.progress(1);
      };
    },
    p;
  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }
  if (_isFunction(batchMax)) {
    batchMax = batchMax();
    _addListener(ScrollTrigger, "refresh", function () {
      return batchMax = vars.batchMax();
    });
  }
  _toArray(targets).forEach(function (target) {
    var config = {};
    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }
    config.trigger = target;
    result.push(ScrollTrigger.create(config));
  });
  return result;
}; // to reduce file size. clamps the scroll and also returns a duration multiplier so that if the scroll gets chopped shorter, the duration gets curtailed as well (otherwise if you're very close to the top of the page, for example, and swipe up really fast, it'll suddenly slow down and take a long time to reach the top).

var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  },
  _allowNativePanning = function _allowNativePanning(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (_Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch ? " pinch-zoom" : "") : "none"; // note: Firefox doesn't support it pinch-zoom properly, at least in addition to a pan-x or pan-y.
    }
    target === _docEl && _allowNativePanning(_body, direction);
  },
  _overflow = {
    auto: 1,
    scroll: 1
  },
  _nestedScroll = function _nestedScroll(_ref5) {
    var event = _ref5.event,
      target = _ref5.target,
      axis = _ref5.axis;
    var node = (event.changedTouches ? event.changedTouches[0] : event).target,
      cache = node._gsap || gsap.core.getCache(node),
      time = _getTime(),
      cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2000) {
      // cache for 2 seconds to improve performance.
      while (node && node !== _body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
        node = node.parentNode;
      }
      cache._isScroll = node && node !== target && !_isViewport(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
      event.stopPropagation();
      event._gsapAllow = true;
    }
  },
  // capture events on scrollable elements INSIDE the <body> and allow those by calling stopPropagation() when we find a scrollable ancestor
  _inputObserver = function _inputObserver(target, type, inputs, nested) {
    return _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.create({
      target: target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type: type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener(_doc, _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener(_doc, _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.eventTypes[0], _captureInputs, true);
      }
    });
  },
  _inputExp = /(input|label|select|textarea)/i,
  _inputIsFocused,
  _captureInputs = function _captureInputs(e) {
    var isInput = _inputExp.test(e.target.tagName);
    if (isInput || _inputIsFocused) {
      e._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  },
  _getScrollNormalizer = function _getScrollNormalizer(vars) {
    _isObject(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars,
      normalizeScrollX = _vars2.normalizeScrollX,
      momentum = _vars2.momentum,
      allowNestedScroll = _vars2.allowNestedScroll,
      onRelease = _vars2.onRelease,
      self,
      maxY,
      target = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.target) || _docEl,
      smoother = gsap.core.globals().ScrollSmoother,
      smootherInstance = smoother && smoother.get(),
      content = _fixIOSBug && (vars.content && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()),
      scrollFuncY = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical),
      scrollFuncX = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal),
      scale = 1,
      initialScale = (_Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch && _win.visualViewport ? _win.visualViewport.scale * _win.visualViewport.width : _win.outerWidth) / _win.innerWidth,
      wheelRefresh = 0,
      resolveMomentumDuration = _isFunction(momentum) ? function () {
        return momentum(self);
      } : function () {
        return momentum || 2.8;
      },
      lastRefreshID,
      skipTouchMove,
      inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll),
      resumeTouchMove = function resumeTouchMove() {
        return skipTouchMove = false;
      },
      scrollClampX = _passThrough,
      scrollClampY = _passThrough,
      updateClamps = function updateClamps() {
        maxY = _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
        scrollClampY = _clamp(_fixIOSBug ? 1 : 0, maxY);
        normalizeScrollX && (scrollClampX = _clamp(0, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal)));
        lastRefreshID = _refreshID;
      },
      removeContentOffset = function removeContentOffset() {
        content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
        scrollFuncY.offset = scrollFuncY.cacheID = 0;
      },
      ignoreDrag = function ignoreDrag() {
        if (skipTouchMove) {
          requestAnimationFrame(resumeTouchMove);
          var offset = _round(self.deltaY / 2),
            scroll = scrollClampY(scrollFuncY.v - offset);
          if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
            scrollFuncY.offset = scroll - scrollFuncY.v;
            var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
            content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
            content._gsap.y = y + "px";
            scrollFuncY.cacheID = _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache;
            _updateAll();
          }
          return true;
        }
        scrollFuncY.offset && removeContentOffset();
        skipTouchMove = true;
      },
      tween,
      startScrollX,
      startScrollY,
      onStopDelayedCall,
      onResize = function onResize() {
        // if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
        updateClamps();
        if (tween.isActive() && tween.vars.scrollY > maxY) {
          scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
        }
      };
    content && gsap.set(content, {
      y: "+=0"
    }); // to ensure there's a cache (element._gsap)

    vars.ignoreCheck = function (e) {
      return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
    };
    vars.onPress = function () {
      skipTouchMove = false;
      var prevScale = scale;
      scale = _round((_win.visualViewport && _win.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function (self, wasDragging) {
      scrollFuncY.offset && removeContentOffset();
      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++; // make sure we're pulling the non-cached value
        // alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)

        var dur = resolveMomentumDuration(),
          currentScroll,
          endScroll;
        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227; // the constant .227 is from power4(0.05). velocity is inverted because scrolling goes in the opposite direction.

          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }
        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227; // the constant .227 is from power4(0.05)

        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);
        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          // iOS bug: it'll show the address bar but NOT fire the window "resize" event until the animation is done but we must protect against overshoot so we leverage an onUpdate to do so.
          gsap.to({}, {
            onUpdate: onResize,
            duration: dur
          });
        }
      }
      onRelease && onRelease(self);
    };
    vars.onWheel = function () {
      tween._ts && tween.pause();
      if (_getTime() - wheelRefresh > 1000) {
        // after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
        lastRefreshID = 0;
        wheelRefresh = _getTime();
      }
    };
    vars.onChange = function (self, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1])); // for more precision, we track pointer/touch movement from the start, otherwise it'll drift.

      if (dy) {
        scrollFuncY.offset && removeContentOffset();
        var isTouch = yArray[2] === dy,
          y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1],
          yClamped = scrollClampY(y);
        isTouch && y !== yClamped && (startScrollY += yClamped - y);
        scrollFuncY(yClamped);
      }
      (dy || dx) && _updateAll();
    };
    vars.onEnable = function () {
      _allowNativePanning(target, normalizeScrollX ? false : "x");
      ScrollTrigger.addEventListener("refresh", onResize);
      _addListener(_win, "resize", onResize);
      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }
      inputObserver.enable();
    };
    vars.onDisable = function () {
      _allowNativePanning(target, true);
      _removeListener(_win, "resize", onResize);
      ScrollTrigger.removeEventListener("refresh", onResize);
      inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self = new _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer(vars);
    self.iOS = _fixIOSBug; // used in the Observer getCachedScroll() function to work around an iOS bug that wreaks havoc with TouchEvent.clientY if we allow scroll to go all the way back to 0.

    _fixIOSBug && !scrollFuncY() && scrollFuncY(1); // iOS bug causes event.clientY values to freak out (wildly inaccurate) if the scroll position is exactly 0.

    _fixIOSBug && gsap.ticker.add(_passThrough); // prevent the ticker from sleeping

    onStopDelayedCall = self._dc;
    tween = gsap.to(self, {
      ease: "power4",
      paused: true,
      inherit: false,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function () {
          return tween.pause();
        })
      },
      onUpdate: _updateAll,
      onComplete: onStopDelayedCall.vars.onComplete
    }); // we need the modifier to sense if the scroll position is altered outside of the momentum tween (like with a scrollTo tween) so we can pause() it to prevent conflicts.

    return self;
  };
ScrollTrigger.sort = function (func) {
  return _triggers.sort(func || function (a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
  });
};
ScrollTrigger.observe = function (vars) {
  return new _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer(vars);
};
ScrollTrigger.normalizeScroll = function (vars) {
  if (typeof vars === "undefined") {
    return _normalizer;
  }
  if (vars === true && _normalizer) {
    return _normalizer.enable();
  }
  if (vars === false) {
    _normalizer && _normalizer.kill();
    _normalizer = vars;
    return;
  }
  var normalizer = vars instanceof _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer ? vars : _getScrollNormalizer(vars);
  _normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
  _isViewport(normalizer.target) && (_normalizer = normalizer);
  return normalizer;
};
ScrollTrigger.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._getVelocityProp,
  _inputObserver: _inputObserver,
  _scrollers: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers,
  _proxies: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function ss() {
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime();
    },
    // a way to get the _refreshing value in Observer
    ref: function ref() {
      return _refreshing;
    }
  }
};
_getGSAP() && gsap.registerPlugin(ScrollTrigger);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: function() { return /* binding */ Animation; },
/* harmony export */   Back: function() { return /* binding */ Back; },
/* harmony export */   Bounce: function() { return /* binding */ Bounce; },
/* harmony export */   Circ: function() { return /* binding */ Circ; },
/* harmony export */   Cubic: function() { return /* binding */ Cubic; },
/* harmony export */   Elastic: function() { return /* binding */ Elastic; },
/* harmony export */   Expo: function() { return /* binding */ Expo; },
/* harmony export */   GSCache: function() { return /* binding */ GSCache; },
/* harmony export */   Linear: function() { return /* binding */ Linear; },
/* harmony export */   Power0: function() { return /* binding */ Power0; },
/* harmony export */   Power1: function() { return /* binding */ Power1; },
/* harmony export */   Power2: function() { return /* binding */ Power2; },
/* harmony export */   Power3: function() { return /* binding */ Power3; },
/* harmony export */   Power4: function() { return /* binding */ Power4; },
/* harmony export */   PropTween: function() { return /* binding */ PropTween; },
/* harmony export */   Quad: function() { return /* binding */ Quad; },
/* harmony export */   Quart: function() { return /* binding */ Quart; },
/* harmony export */   Quint: function() { return /* binding */ Quint; },
/* harmony export */   Sine: function() { return /* binding */ Sine; },
/* harmony export */   SteppedEase: function() { return /* binding */ SteppedEase; },
/* harmony export */   Strong: function() { return /* binding */ Strong; },
/* harmony export */   Timeline: function() { return /* binding */ Timeline; },
/* harmony export */   TimelineLite: function() { return /* binding */ Timeline; },
/* harmony export */   TimelineMax: function() { return /* binding */ Timeline; },
/* harmony export */   Tween: function() { return /* binding */ Tween; },
/* harmony export */   TweenLite: function() { return /* binding */ Tween; },
/* harmony export */   TweenMax: function() { return /* binding */ Tween; },
/* harmony export */   _checkPlugin: function() { return /* binding */ _checkPlugin; },
/* harmony export */   _colorExp: function() { return /* binding */ _colorExp; },
/* harmony export */   _colorStringFilter: function() { return /* binding */ _colorStringFilter; },
/* harmony export */   _config: function() { return /* binding */ _config; },
/* harmony export */   _forEachName: function() { return /* binding */ _forEachName; },
/* harmony export */   _getCache: function() { return /* binding */ _getCache; },
/* harmony export */   _getProperty: function() { return /* binding */ _getProperty; },
/* harmony export */   _getSetter: function() { return /* binding */ _getSetter; },
/* harmony export */   _isString: function() { return /* binding */ _isString; },
/* harmony export */   _isUndefined: function() { return /* binding */ _isUndefined; },
/* harmony export */   _missingPlugin: function() { return /* binding */ _missingPlugin; },
/* harmony export */   _numExp: function() { return /* binding */ _numExp; },
/* harmony export */   _numWithUnitExp: function() { return /* binding */ _numWithUnitExp; },
/* harmony export */   _parseRelative: function() { return /* binding */ _parseRelative; },
/* harmony export */   _plugins: function() { return /* binding */ _plugins; },
/* harmony export */   _relExp: function() { return /* binding */ _relExp; },
/* harmony export */   _removeLinkedListItem: function() { return /* binding */ _removeLinkedListItem; },
/* harmony export */   _renderComplexString: function() { return /* binding */ _renderComplexString; },
/* harmony export */   _replaceRandom: function() { return /* binding */ _replaceRandom; },
/* harmony export */   _round: function() { return /* binding */ _round; },
/* harmony export */   _roundModifier: function() { return /* binding */ _roundModifier; },
/* harmony export */   _setDefaults: function() { return /* binding */ _setDefaults; },
/* harmony export */   _sortPropTweensByPriority: function() { return /* binding */ _sortPropTweensByPriority; },
/* harmony export */   _ticker: function() { return /* binding */ _ticker; },
/* harmony export */   clamp: function() { return /* binding */ clamp; },
/* harmony export */   "default": function() { return /* binding */ gsap; },
/* harmony export */   distribute: function() { return /* binding */ distribute; },
/* harmony export */   getUnit: function() { return /* binding */ getUnit; },
/* harmony export */   gsap: function() { return /* binding */ gsap; },
/* harmony export */   interpolate: function() { return /* binding */ interpolate; },
/* harmony export */   mapRange: function() { return /* binding */ mapRange; },
/* harmony export */   normalize: function() { return /* binding */ normalize; },
/* harmony export */   pipe: function() { return /* binding */ pipe; },
/* harmony export */   random: function() { return /* binding */ random; },
/* harmony export */   selector: function() { return /* binding */ selector; },
/* harmony export */   shuffle: function() { return /* binding */ shuffle; },
/* harmony export */   snap: function() { return /* binding */ snap; },
/* harmony export */   splitColor: function() { return /* binding */ splitColor; },
/* harmony export */   toArray: function() { return /* binding */ toArray; },
/* harmony export */   unitize: function() { return /* binding */ unitize; },
/* harmony export */   wrap: function() { return /* binding */ wrap; },
/* harmony export */   wrapYoyo: function() { return /* binding */ wrapYoyo; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
  _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
  },
  _suppressOverwrites,
  _reverting,
  _context,
  _bigNum = 1e8,
  _tinyNum = 1 / _bigNum,
  _2PI = Math.PI * 2,
  _HALF_PI = _2PI / 4,
  _gsID = 0,
  _sqrt = Math.sqrt,
  _cos = Math.cos,
  _sin = Math.sin,
  _isString = function _isString(value) {
    return typeof value === "string";
  },
  _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
  _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
  _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  },
  _isObject = function _isObject(value) {
    return typeof value === "object";
  },
  _isNotFalse = function _isNotFalse(value) {
    return value !== false;
  },
  _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
  _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
  },
  _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
  // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
  _isArray = Array.isArray,
  _strictNumExp = /(?:-?\.?\d|\.)+/gi,
  //only numbers (including negatives and decimals) but NOT relative values.
  _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
  _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
  _relExp = /[+-]=-?[.\d]+/,
  _delimitedValueExp = /[^,'"\[\]\s]+/gi,
  // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
  _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  _globalTimeline,
  _win,
  _coreInitted,
  _doc,
  _globals = {},
  _installScope = {},
  _coreReady,
  _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  },
  _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  },
  _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
  },
  _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  },
  _emptyFunc = function _emptyFunc() {
    return 0;
  },
  _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  },
  _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  },
  _revertConfig = {
    suppressEvents: true
  },
  _reservedProps = {},
  _lazyTweens = [],
  _lazyLookup = {},
  _lastRenderedFrame,
  _plugins = {},
  _effects = {},
  _nextGCFrame = 30,
  _harnessPlugins = [],
  _callbackNames = "",
  _harness = function _harness(targets) {
    var target = targets[0],
      harnessPlugin,
      i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
      i = _harnessPlugins.length;
      while (i-- && !_harnessPlugins[i].targetTest(target)) {}
      harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
  },
  _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  },
  _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  },
  _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  },
  //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
  _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
  _roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
  },
  // increased precision mostly for timing values.
  _parseRelative = function _parseRelative(start, value) {
    var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  },
  _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
    var l = toFind.length,
      i = 0;
    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}
    return i < l;
  },
  _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  },
  _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
  },
  _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  },
  _passThrough = function _passThrough(p) {
    return p;
  },
  _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }
    return obj;
  },
  _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function (obj, defaults) {
      for (var p in defaults) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
      }
    };
  },
  _merge = function _merge(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  },
  _mergeDeep = function _mergeDeep(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  },
  _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {},
      p;
    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }
    return copy;
  },
  _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  },
  _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length,
      match = i === a2.length;
    while (match && i-- && a1[i] === a2[i]) {}
    return i < 0;
  },
  _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp],
      t;
    if (sortBy) {
      t = child[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  },
  _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev,
      next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
  },
  _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  },
  _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  },
  _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  },
  _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  },
  _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
  },
  _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  },
  // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
  _animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  },
  _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  },
  _setEnd = function _setEnd(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  },
  _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
    }
    return animation;
  },
  /*
  _totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
  	let cycleDuration = duration + repeatDelay,
  		time = _round(clampedTotalTime % cycleDuration);
  	if (time > duration) {
  		time = duration;
  	}
  	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
  },
  */
  _postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
      // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
      t = _parentToChildTotalTime(timeline.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.

    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
      //in case any of the ancestors had completed but should now be enabled...
      if (timeline._dur < timeline.duration()) {
        t = timeline;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

          t = t._dp;
        }
      }
      timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
    }
  },
  _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || _postAddChecks(timeline, child);
    timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)

    return timeline;
  },
  _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  },
  _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  },
  _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
  },
  // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
  _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  },
  _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
      repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;
    if (repeatDelay && tween._repeat) {
      // in case there's a zero-duration tween that has a repeat with a repeatDelay
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        // if iteration changed
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

      suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  },
  _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  },
  _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  },
  _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  },
  _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  },
  _parsePosition = function _parsePosition(animation, position, percentAnimation) {
    var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
      i,
      offset,
      isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  },
  _createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;
    if (type) {
      irVars = vars;
      parent = timeline;
      while (parent && !("immediateRender" in irVars)) {
        // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  },
  _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
  },
  _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
  },
  getUnit = function getUnit(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  },
  // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
  clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function (v) {
      return _clamp(min, max, v);
    });
  },
  _slice = [].slice,
  _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  },
  _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function (value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  },
  //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
  toArray = function toArray(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  },
  selector = function selector(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function (v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  },
  shuffle = function shuffle(a) {
    return a.sort(function () {
      return .5 - Math.random();
    });
  },
  // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
  //for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
  distribute = function distribute(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
        each: v
      },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
      ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: .5,
        edges: .5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function (i, target, a) {
      var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}
          wrapAt < l && wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0; //unit

        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }
      l = (distances[i] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
    };
  },
  _roundModifier = function _roundModifier(v) {
    //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

    return function (raw) {
      var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
    };
  },
  snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo),
      radius,
      is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function (raw) {
      var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;
      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  },
  random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  },
  pipe = function pipe() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function (value) {
      return functions.reduce(function (v, f) {
        return f(v);
      }, value);
    };
  },
  unitize = function unitize(func, unit) {
    return function (value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  },
  normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  },
  _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function (index) {
      return a[~~wrapper(index)];
    });
  },
  wrap = function wrap(min, max, value) {
    // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
      return (range + (value - min) % range) % range + min;
    });
  },
  wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min,
      total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
      value = (total + (value - min) % total) % total || 0;
      return min + (value > range ? total - value : value);
    });
  },
  _replaceRandom = function _replaceRandom(value) {
    //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
    var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;
    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
  },
  mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin,
      outRange = outMax - outMin;
    return _conditionalReturn(value, function (value) {
      return outMin + ((value - inMin) / inRange * outRange || 0);
    });
  },
  interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function (p) {
      return (1 - p) * start + p * end;
    };
    if (!func) {
      var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i = 1; i < l; i++) {
          interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
        }
        l--;
        func = function func(p) {
          p *= l;
          var i = Math.min(il, ~~p);
          return interpolators[i](p - i);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func(p) {
          return _renderPropTweens(p, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  },
  _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    //used for nextLabel() and previousLabel()
    var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  },
  _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars,
      callback = v[type],
      prevContext = _context,
      context = animation._ctx,
      params,
      scope,
      result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

    context && (_context = context);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  },
  _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  },
  _quickTween,
  _registerPluginQueue = [],
  _createPlugin = function _createPlugin(config) {
    if (!config) return;
    config = !config.name && config["default"] || config; // UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

    if (_windowExists() || config.headless) {
      // edge case: some build tools may pass in a null/undefined value
      var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
          this._props = [];
        } : config,
        //in case someone passes in an object that's not a plugin, like CustomEase
        instanceDefaults = {
          init: _emptyFunc,
          render: _renderPropTweens,
          add: _addPropTween,
          kill: _killPropTweensOf,
          modifier: _addPluginModifier,
          rawVars: 0
        },
        statics = {
          targetTest: 0,
          get: 0,
          getSetter: _getSetter,
          aliases: {},
          register: 0
        };
      _wake();
      if (config !== Plugin) {
        if (_plugins[name]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods

        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods

        _plugins[Plugin.prop = name] = Plugin;
        if (config.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
      }
      _addGlobal(name, Plugin);
      config.register && config.register(gsap, Plugin, PropTween);
    } else {
      _registerPluginQueue.push(config);
    }
  },
  /*
   * --------------------------------------------------------------------------------------
   * COLORS
   * --------------------------------------------------------------------------------------
   */
  _255 = 255,
  _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  },
  // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
  // let ctx = _doc.createElement("canvas").getContext("2d");
  // _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
  _hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
  },
  splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          //for shorthand like #9F0 or #9F0F (could have alpha)
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          // hex with alpha, like #fd5e53ff
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= .5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1); //cast as number

          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          //if relative values are found, just return the raw strings with the relative prefixes in place.
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + .5);
      a[1] = ~~(s * 100 + .5);
      a[2] = ~~(l * 100 + .5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  },
  _colorOrderData = function _colorOrderData(v) {
    // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
    var values = [],
      c = [],
      i = -1;
    v.split(_colorExp).forEach(function (v) {
      var a = v.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  },
  _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;
    if (!colors) {
      return s;
    }
    colors = colors.map(function (color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }
    return result + shell[l];
  },
  _colorExp = function () {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
      p;
    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
  }(),
  _hslExp = /hsl[a]?\(/,
  _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "),
      toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

      return true;
    }
  },
  /*
   * --------------------------------------------------------------------------------------
   * TICKER
   * --------------------------------------------------------------------------------------
   */
  _tickerActive,
  _ticker = function () {
    var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
        var elapsed = _getTime() - _lastUpdate,
          manual = v === true,
          overlap,
          dispatch,
          time,
          frame;
        (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time = _lastUpdate - _startTime;
        overlap = time - _nextTime;
        if (overlap > 0 || manual) {
          frame = ++_self.frame;
          _delta = time - _self.time * 1000;
          _self.time = time = time / 1000;
          _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
          dispatch = 1;
        }
        manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

        if (dispatch) {
          for (_i = 0; _i < _listeners.length; _i++) {
            // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
            _listeners[_i](time, _delta, frame, v);
          }
        }
      };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1000 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _registerPluginQueue.forEach(_createPlugin);
          }
          _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
          _id && _self.sleep();
          _req = _raf || function (f) {
            return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited

        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1000 / (_fps || 240);
        _nextTime = _self.time * 1000 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function (t, d, f, v) {
          callback(t, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i) {
        ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
      },
      _listeners: _listeners
    };
    return _self;
  }(),
  _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
  },
  //also ensures the core classes are initialized.

  /*
  * -------------------------------------------------
  * EASING
  * -------------------------------------------------
  */
  _easeMap = {},
  _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
  _quotesExp = /["']/g,
  _parseObjectInString = function _parseObjectInString(value) {
    //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
    var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;
    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  },
  _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  },
  _configEaseFromString = function _configEaseFromString(name) {
    //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
    var split = (name + "").split("("),
      ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  },
  _invertEase = function _invertEase(ease) {
    return function (p) {
      return 1 - ease(1 - p);
    };
  },
  // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
  _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first,
      ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  },
  _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  },
  _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut
      },
      lowercaseName;
    _forEachName(names, function (name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  },
  _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function (p) {
      return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
  },
  _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
      p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
      },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
        return 1 - easeOut(1 - p);
      } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2; //precalculate to optimize

    ease.config = function (amplitude, period) {
      return _configElastic(type, amplitude, period);
    };
    return ease;
  },
  _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut(p) {
        return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
      },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
        return 1 - easeOut(1 - p);
      } : _easeInOutFromOut(easeOut);
    ease.config = function (overshoot) {
      return _configBack(type, overshoot);
    };
    return ease;
  }; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };

_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;
  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function (n, c) {
  var n1 = 1 / c,
    n2 = 2 * n1,
    n3 = 2.5 * n1,
    easeOut = function easeOut(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };
  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }
    var p1 = 1 / steps,
      p2 = steps + (immediateStart ? 0 : 1),
      p3 = immediateStart ? 1 : 0,
      max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */

var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;
    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }
    this._ts = 1;
    _setDuration(this, +vars.duration, 1, 1);
    this.data = vars.data;
    if (_context) {
      this._ctx = _context;
      _context.data.push(this);
    }
    _tickerActive || _ticker.wake();
  }
  var _proto = Animation.prototype;
  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }
    return this._delay;
  };
  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };
  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }
    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };
  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();
    if (!arguments.length) {
      return this._tTime;
    }
    var parent = this._dp;
    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);
      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }
        parent = parent.parent;
      }
      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }
    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}
    }
    return this;
  };
  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };
  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  };
  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  };
  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;
  _proto.timeScale = function timeScale(value, suppressEvents) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }
    if (this._rts === value) {
      return this;
    }
    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);
    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.

    return _recacheAncestors(this);
  };
  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }
    if (this._ps !== value) {
      this._ps = value;
      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();
        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }
    return this;
  };
  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }
    return this._start;
  };
  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };
  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };
  _proto.revert = function revert(config) {
    if (config === void 0) {
      config = _revertConfig;
    }
    var prevIsReverting = _reverting;
    _reverting = config;
    if (this._initted || this._startAt) {
      this.timeline && this.timeline.revert(config);
      this.totalTime(-0.01, config.suppressEvents);
    }
    this.data !== "nested" && config.kill !== false && this.kill();
    _reverting = prevIsReverting;
    return this;
  };
  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
      time = arguments.length ? rawTime : animation.rawTime();
    while (animation) {
      time = animation._start + time / (Math.abs(animation._ts) || 1);
      animation = animation._dp;
    }
    return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
  };
  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }
    return this._repeat === -2 ? Infinity : this._repeat;
  };
  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;
      _onUpdateTotalDuration(this);
      return time ? this.time(time) : this;
    }
    return this._rDelay;
  };
  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }
    return this._yoyo;
  };
  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };
  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };
  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };
  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };
  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };
  _proto.resume = function resume() {
    return this.paused(false);
  };
  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }
    return this._rts < 0;
  };
  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };
  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
      start = this._start,
      rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };
  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;
    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }
      return this;
    }
    return vars[type];
  };
  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
        _resolve = function _resolve() {
          var _then = self.then;
          self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };
      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };
  _proto.kill = function kill() {
    _interrupt(this);
  };
  return Animation;
}();
_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */

var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);
  function Timeline(vars, position) {
    var _this;
    if (vars === void 0) {
      vars = {};
    }
    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }
  var _proto2 = Timeline.prototype;
  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);
    return this;
  };
  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);
    return this;
  };
  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);
    return this;
  };
  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };
  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;
  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };
  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };
  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };
  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
      tDur = this._dirty ? this.totalDuration() : this._tDur,
      dur = this._dur,
      tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
      // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
      crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
      time,
      child,
      next,
      iteration,
      cycleDuration,
      prevPaused,
      pauseTween,
      timeScale,
      prevStart,
      prevIteration,
      yoyo,
      isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }
      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;
      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }
      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);
          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }
          time > dur && (time = dur);
        }
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://gsap.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */

        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
            doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.

          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }
          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;
          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }
          this._lock = 0;
          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.

          _propagateYoyoEase(this, isYoyo);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }
      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }
      if (!prevTime && time && !suppressEvents && !iteration) {
        _callback(this, "onStart");
        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }
      if (time >= prevTime && totalTime >= 0) {
        child = this._first;
        while (child) {
          next = child._next;
          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }
          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;
          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }
          child = next;
        }
      }
      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);
          return this.render(totalTime, suppressEvents, force);
        }
      }
      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }
    return this;
  };
  _proto2.add = function add(child, position) {
    var _this2 = this;
    _isNumber(position) || (position = _parsePosition(this, position, child));
    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }
      if (_isString(child)) {
        return this.addLabel(child, position);
      }
      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }
    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };
  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }
    if (tweens === void 0) {
      tweens = true;
    }
    if (timelines === void 0) {
      timelines = true;
    }
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }
    var a = [],
      child = this._first;
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }
      child = child._next;
    }
    return a;
  };
  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
      i = animations.length;
    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };
  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }
    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }
    _removeLinkedListItem(this, child);
    if (child === this._recent) {
      this._recent = this._last;
    }
    return _uncache(this);
  };
  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }
    this._forcing = 1;
    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }
    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
    this._forcing = 0;
    return this;
  };
  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };
  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };
  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };
  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);
    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }
      child = child._next;
    }
  };
  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
      i = tweens.length;
    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }
    return this;
  };
  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
      parsedTargets = toArray(targets),
      child = this._first,
      isGlobalTime = _isNumber(onlyActive),
      // a number is interpreted as a global time. If the animation spans
      children;
    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }
      child = child._next;
    }
    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;
  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};
    var tl = this,
      endTime = _parsePosition(tl, position),
      _vars = vars,
      startAt = _vars.startAt,
      _onStart = _vars.onStart,
      onStartParams = _vars.onStartParams,
      immediateRender = _vars.immediateRender,
      initted,
      tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
        }
      }, vars));
    return immediateRender ? tween.render(0) : tween;
  };
  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };
  _proto2.recent = function recent() {
    return this._recent;
  };
  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };
  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };
  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };
  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }
    var child = this._first,
      labels = this.labels,
      p;
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }
      child = child._next;
    }
    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }
    return _uncache(this);
  };
  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;
    while (child) {
      child.invalidate(soft);
      child = child._next;
    }
    return _Animation.prototype.invalidate.call(this, soft);
  };
  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }
    var child = this._first,
      next;
    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }
    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };
  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
      self = this,
      child = self._last,
      prevStart = _bigNum,
      prev,
      start,
      parent;
    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }
    if (self._dirty) {
      parent = self.parent;
      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;
        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }
        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;
          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }
          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }
        child._end > max && child._ts && (max = child._end);
        child = prev;
      }
      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
      self._dirty = 0;
    }
    return self._tDur;
  };
  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
      _lastRenderedFrame = _ticker.frame;
    }
    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }
        child || _ticker.sleep();
      }
    }
  };
  return Timeline;
}(Animation);
_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings

    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    }
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

    return pt;
  },
  _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          // to avoid isNaN, like if someone passes in a value like "!= whatever"
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        // fun fact: any number multiplied by "" is evaluated as the number 0!
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  },
  //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
  _processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {},
      p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
  },
  _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

        i = plugin._props.length;
        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }
    return plugin;
  },
  _overwritingTween,
  //store a reference temporarily so we can avoid overwriting itself.
  _forceAllPropTweens,
  _initTween = function _initTween(tween, time, tTime) {
    var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

    if (!tl || keyframes && !vars.stagger) {
      //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.

        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
        // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.

        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate && function () {
            return _callback(tween, "onUpdate");
          },
          stagger: 0
        }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);

        tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.

        tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween

        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
            time && (tween._zTime = time);
            return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
          }
        }
      } else if (runBackwards && dur) {
        //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
        if (!prevStartAt) {
          time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender: immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

          _removeFromParent(tween._startAt = Tween.set(targets, p));
          tween._startAt._dp = 0; // don't allow it to get put back into root timeline!

          tween._startAt._sat = tween; // used in globalTime()

          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

        index = fullTargets === targets ? i : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function (name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!

          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

    keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
  },
  _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      rootPT,
      lookup,
      i;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i = tween._targets.length;
      while (i--) {
        pt = lookup[i][property];
        if (pt && pt.d && pt.d._pt) {
          // it's a plugin, so find the nested PropTween
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
            pt = pt._next;
          }
        }
        if (!pt) {
          // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
          // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
          _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return skipRecursion ? _warn(property + " not eligible for reset") : 1; // if someone tries to do a quickTo() on a special property like borderRadius which must get split into 4 different properties, that's not eligible for .resetTo().
        }
        ptCache.push(pt);
      }
    }
    i = ptCache.length;
    while (i--) {
      rootPT = ptCache[i];
      pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.

      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)

      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
    }
  },
  _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }
    return copy;
  },
  // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
  _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;
    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

      obj.forEach(function (value, i) {
        return a.push({
          t: i / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  },
  _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  },
  _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */

var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);
  function Tween(targets, vars, position, skipInherit) {
    var _this3;
    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }
    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
      duration = _this3$vars.duration,
      delay = _this3$vars.delay,
      immediateRender = _this3$vars.immediateRender,
      stagger = _this3$vars.stagger,
      overwrite = _this3$vars.overwrite,
      keyframes = _this3$vars.keyframes,
      defaults = _this3$vars.defaults,
      scrollTrigger = _this3$vars.scrollTrigger,
      yoyoEase = _this3$vars.yoyoEase,
      parent = vars.parent || _globalTimeline,
      parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
      tl,
      i,
      copy,
      l,
      p,
      curTarget,
      staggerFunc,
      staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;
    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.

      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;
      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);
        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }
        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }
          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }
        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));
        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
          a,
          kf,
          v;
        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
        } else {
          copy = {};
          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }
          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;
            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }
          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }
      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }
    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);
      _globalTimeline.killTweensOf(parsedTargets);
      _overwritingTween = 0;
    }
    _addToTimeline(parent, _assertThisInitialized(_this3), position);
    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);
    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay) || 0); //in case delay is negative
    }
    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }
  var _proto3 = Tween.prototype;
  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
      tDur = this._tDur,
      dur = this._dur,
      isNegative = totalTime < 0,
      tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
      time,
      pt,
      iteration,
      cycleDuration,
      prevIteration,
      isYoyo,
      ratio,
      timeline,
      yoyoEase;
    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;
      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);
          if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
            time = dur;
            iteration--;
          }
          time > dur && (time = dur);
        }
        isYoyo = this._yoyo && iteration & 1;
        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        if (time === prevTime && !force && this._initted && iteration === prevIteration) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }
        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
            // this._time will === cycleDuration when we render at EXACTLY the end of an iteration. Without this condition, it'd often do the repeatRefresh render TWICE (again on the very next tick).
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }
      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }
        if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values. But we also don't want to dump if we're doing a repeatRefresh render!
          return this;
        }
        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }
      this._tTime = tTime;
      this._time = time;
      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }
      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }
      if (time && !prevTime && !suppressEvents && !iteration) {
        _callback(this, "onStart");
        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }
      pt = this._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }
      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }
    return this;
  };
  _proto3.targets = function targets() {
    return this._targets;
  };
  _proto3.invalidate = function invalidate(soft) {
    // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };
  _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
      ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
      return this.resetTo(property, value, start, startIsRelative, 1); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}

    _alignPlayhead(this, 0);
    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };
  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }
    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }
    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }
    var parsedTargets = this._targets,
      killingTargets = targets ? toArray(targets) : parsedTargets,
      propTweenLookup = this._ptLookup,
      firstPT = this._pt,
      overwrittenProps,
      curLookup,
      curOverwriteProps,
      props,
      p,
      pt,
      i;
    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }
    overwrittenProps = this._op = this._op || [];
    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};
        _forEachName(vars, function (name) {
          return p[name] = 1;
        });
        vars = p;
      }
      vars = _addAliasesToVars(parsedTargets, vars);
    }
    i = parsedTargets.length;
    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];
        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }
        for (p in props) {
          pt = curLookup && curLookup[p];
          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }
            delete curLookup[p];
          }
          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }
    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };
  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };
  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };
  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
  };
  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };
  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };
  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };
  return Tween;
}(Animation);
_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.

_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
      params = _slice.call(arguments, 0);
    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */

var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
  },
  _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
  },
  _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
  },
  _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
  },
  _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  },
  _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
  },
  _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  },
  _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt,
      s = "";
    if (!ratio && data.b) {
      //b = beginning string
      s = data.b;
    } else if (ratio === 1 && data.e) {
      //e = ending string
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

        pt = pt._next;
      }
      s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
    }
    data.set(data.t, data.p, s, data);
  },
  _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  },
  _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt,
      next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  },
  _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt,
      hasNonDependentRemaining,
      next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  },
  _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  },
  _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  }; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)

var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;
    if (next) {
      next._prev = this;
    }
  }
  var _proto4 = PropTween.prototype;
  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };
  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _media = [],
  _listeners = {},
  _emptyArray = [],
  _lastMediaTime = 0,
  _contextID = 0,
  _dispatch = function _dispatch(type) {
    return (_listeners[type] || _emptyArray).map(function (f) {
      return f();
    });
  },
  _onMediaChange = function _onMediaChange() {
    var time = Date.now(),
      matches = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function (c) {
        var queries = c.queries,
          conditions = c.conditions,
          match,
          p,
          anyMatch,
          toggled;
        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.

          match && (anyMatch = 1);
          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c.revert();
          anyMatch && matches.push(c);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function (c) {
        return c.onMatch(c, function (func) {
          return c.add(null, func);
        });
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
var Context = /*#__PURE__*/function () {
  function Context(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = []; // returned/cleanup functions

    this.isReverted = false;
    this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely

    func && this.add(func);
  }
  var _proto5 = Context.prototype;
  _proto5.add = function add(name, func, scope) {
    // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
    // if (name && _isFunction(name.revert)) {
    // 	this.data.push(name);
    // 	return (name._ctx = this);
    // }
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }
    var self = this,
      f = function f() {
        var prev = _context,
          prevSelector = self.selector,
          result;
        prev && prev !== self && prev.data.push(self);
        scope && (self.selector = selector(scope));
        _context = self;
        result = func.apply(self, arguments);
        _isFunction(result) && self._r.push(result);
        _context = prev;
        self.selector = prevSelector;
        self.isReverted = false;
        return result;
      };
    self.last = f;
    return name === _isFunction ? f(self, function (func) {
      return self.add(null, func);
    }) : name ? self[name] = f : f;
  };
  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };
  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function (e) {
      return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };
  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };
  _proto5.kill = function kill(revert, matchMedia) {
    var _this4 = this;
    if (revert) {
      (function () {
        var tweens = _this4.getTweens(),
          i = _this4.data.length,
          t;
        while (i--) {
          // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
          t = _this4.data[i];
          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function (tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        } // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort

        tweens.map(function (t) {
          return {
            g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
            t: t
          };
        }).sort(function (a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function (o) {
          return o.t.revert(revert);
        }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.

        i = _this4.data.length;
        while (i--) {
          // make sure we loop backwards so that, for example, SplitTexts that were created later on the same element get reverted first
          t = _this4.data[i];
          if (t instanceof Timeline) {
            if (t.data !== "nested") {
              t.scrollTrigger && t.scrollTrigger.revert();
              t.kill(); // don't revert() the timeline because that's duplicating efforts since we already reverted all the tweens
            }
          } else {
            !(t instanceof Tween) && t.revert && t.revert(revert);
          }
        }
        _this4._r.forEach(function (f) {
          return f(revert, _this4);
        });
        _this4.isReverted = true;
      })();
    } else {
      this.data.forEach(function (e) {
        return e.kill && e.kill();
      });
    }
    this.clear();
    if (matchMedia) {
      var i = _media.length;
      while (i--) {
        // previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  };
  _proto5.revert = function revert(config) {
    this.kill(config || {});
  };
  return Context;
}();
var MatchMedia = /*#__PURE__*/function () {
  function MatchMedia(scope) {
    this.contexts = [];
    this.scope = scope;
    _context && _context.data.push(this);
  }
  var _proto6 = MatchMedia.prototype;
  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context = new Context(0, scope || this.scope),
      cond = context.conditions = {},
      mq,
      p,
      active;
    _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()

    this.contexts.push(context);
    func = context.add("onMatch", func);
    context.queries = conditions;
    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);
        if (mq) {
          _media.indexOf(context) < 0 && _media.push(context);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }
    active && func(context, function (f) {
      return context.add(null, f);
    });
    return this;
  } // refresh() {
  // 	let time = _lastMediaTime,
  // 		media = _media;
  // 	_lastMediaTime = -1;
  // 	_media = this.contexts;
  // 	_onMediaChange();
  // 	_lastMediaTime = time;
  // 	_media = media;
  // }
  ;
  _proto6.revert = function revert(config) {
    this.kill(config || {});
  };
  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function (c) {
      return c.kill(revert, true);
    });
  };
  return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */

var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
      format = unit ? _passThrough : _numericIfPossible;
    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);
    if (target.length > 1) {
      var setters = target.map(function (t) {
          return gsap.quickSetter(t, property, unit);
        }),
        l = setters.length;
      return function (value) {
        var i = l;
        while (i--) {
          setters[i](value);
        }
      };
    }
    target = target[0] || {};
    var Plugin = _plugins[property],
      cache = _getCache(target),
      p = cache.harness && (cache.harness.aliases || {})[property] || property,
      // in case it's an alias, like "rotate" for "rotation".
      setter = Plugin ? function (value) {
        var p = new Plugin();
        _quickTween._pt = 0;
        p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p.render(1, p);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _merge2;
    var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
      func = function func(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
      effect = _ref3.effect,
      plugins = _ref3.plugins,
      defaults = _ref3.defaults,
      extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });
    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };
    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }
    var tl = new Timeline(vars),
      child,
      next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
    _globalTimeline.remove(tl);
    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;
    while (child) {
      next = child._next;
      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }
      child = next;
    }
    _addToTimeline(_globalTimeline, tl, 0);
    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function (c) {
      var cond = c.conditions,
        found,
        p;
      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }
      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type],
      i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);
        toAdd._ctx = _context;
      }
      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  },
  _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets,
      p,
      i,
      pt;
    for (p in modifiers) {
      i = targets.length;
      while (i--) {
        pt = tween._ptLookup[i][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            // is a plugin
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  },
  _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
      name: name,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init(target, vars, tween) {
        tween._onInit = function (tween) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function (name) {
              return temp[name] = 1;
            }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.

            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween, vars);
        };
      }
    };
  }; //register core plugins

var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;
    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v; // record the beginning value so we can revert()

      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;
    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)

      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;
    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.12.5";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
  Power1 = _easeMap.Power1,
  Power2 = _easeMap.Power2,
  Power3 = _easeMap.Power3,
  Power4 = _easeMap.Power4,
  Linear = _easeMap.Linear,
  Quad = _easeMap.Quad,
  Cubic = _easeMap.Cubic,
  Quart = _easeMap.Quart,
  Quint = _easeMap.Quint,
  Strong = _easeMap.Strong,
  Elastic = _easeMap.Elastic,
  Back = _easeMap.Back,
  SteppedEase = _easeMap.SteppedEase,
  Bounce = _easeMap.Bounce,
  Sine = _easeMap.Sine,
  Expo = _easeMap.Expo,
  Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Back: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back; },
/* harmony export */   Bounce: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce; },
/* harmony export */   CSSPlugin: function() { return /* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin; },
/* harmony export */   Circ: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ; },
/* harmony export */   Cubic: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic; },
/* harmony export */   Elastic: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic; },
/* harmony export */   Expo: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo; },
/* harmony export */   Linear: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear; },
/* harmony export */   Power0: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0; },
/* harmony export */   Power1: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1; },
/* harmony export */   Power2: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2; },
/* harmony export */   Power3: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3; },
/* harmony export */   Power4: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4; },
/* harmony export */   Quad: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad; },
/* harmony export */   Quart: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart; },
/* harmony export */   Quint: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint; },
/* harmony export */   Sine: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine; },
/* harmony export */   SteppedEase: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase; },
/* harmony export */   Strong: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong; },
/* harmony export */   TimelineLite: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite; },
/* harmony export */   TimelineMax: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax; },
/* harmony export */   TweenLite: function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite; },
/* harmony export */   TweenMax: function() { return /* binding */ TweenMaxWithCSS; },
/* harmony export */   "default": function() { return /* binding */ gsapWithCSS; },
/* harmony export */   gsap: function() { return /* binding */ gsapWithCSS; }
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
  // to protect from tree shaking
  TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./node_modules/@studio-freight/lenis/dist/lenis.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@studio-freight/lenis/dist/lenis.mjs ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Lenis; }
/* harmony export */ });
function t(t,e,i){return Math.max(t,Math.min(e,i))}class Animate{advance(e){if(!this.isRunning)return;let i=!1;if(this.lerp)this.value=(s=this.value,o=this.to,n=60*this.lerp,r=e,function(t,e,i){return(1-i)*t+i*e}(s,o,1-Math.exp(-n*r))),Math.round(this.value)===this.to&&(this.value=this.to,i=!0);else{this.currentTime+=e;const s=t(0,this.currentTime/this.duration,1);i=s>=1;const o=i?1:this.easing(s);this.value=this.from+(this.to-this.from)*o}var s,o,n,r;this.onUpdate?.(this.value,i),i&&this.stop()}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i=.1,duration:s=1,easing:o=(t=>t),onStart:n,onUpdate:r}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,n?.(),this.onUpdate=r}}class Dimensions{constructor({wrapper:t,content:e,autoResize:i=!0,debounce:s=250}={}){this.wrapper=t,this.content=e,i&&(this.debouncedResize=function(t,e){let i;return function(){let s=arguments,o=this;clearTimeout(i),i=setTimeout((function(){t.apply(o,s)}),e)}}(this.resize,s),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class Emitter{constructor(){this.events={}}emit(t,...e){let i=this.events[t]||[];for(let t=0,s=i.length;t<s;t++)i[t](...e)}on(t,e){return this.events[t]?.push(e)||(this.events[t]=[e]),()=>{this.events[t]=this.events[t]?.filter((t=>e!==t))}}off(t,e){this.events[t]=this.events[t]?.filter((t=>e!==t))}destroy(){this.events={}}}const e=100/6;class VirtualScroll{constructor(t,{wheelMultiplier:e=1,touchMultiplier:i=1}){this.element=t,this.wheelMultiplier=e,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new Emitter,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}onTouchStart=t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})};onTouchMove=t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t,s=-(e-this.touchStart.x)*this.touchMultiplier,o=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:s,y:o},this.emitter.emit("scroll",{deltaX:s,deltaY:o,event:t})};onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})};onWheel=t=>{let{deltaX:i,deltaY:s,deltaMode:o}=t;i*=1===o?e:2===o?this.windowWidth:1,s*=1===o?e:2===o?this.windowHeight:1,i*=this.wheelMultiplier,s*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:t})};onWindowResize=()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}}class Lenis{constructor({wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:i=t,eventsTarget:s=i,smoothWheel:o=!0,syncTouch:n=!1,syncTouchLerp:r=.075,touchInertiaMultiplier:l=35,duration:h,easing:a=(t=>Math.min(1,1.001-Math.pow(2,-10*t))),lerp:c=!h&&.1,infinite:d=!1,orientation:p="vertical",gestureOrientation:u="vertical",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:g=!0,__experimental__naiveDimensions:S=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:t,deltaY:e,event:i})=>{if(i.ctrlKey)return;const s=i.type.includes("touch"),o=i.type.includes("wheel");if(this.options.syncTouch&&s&&"touchstart"===i.type&&!this.isStopped&&!this.isLocked)return void this.reset();const n=0===t&&0===e,r="vertical"===this.options.gestureOrientation&&0===e||"horizontal"===this.options.gestureOrientation&&0===t;if(n||r)return;let l=i.composedPath();if(l=l.slice(0,l.indexOf(this.rootElement)),l.find((t=>{var e,i,n,r,l;return(null===(e=t.hasAttribute)||void 0===e?void 0:e.call(t,"data-lenis-prevent"))||s&&(null===(i=t.hasAttribute)||void 0===i?void 0:i.call(t,"data-lenis-prevent-touch"))||o&&(null===(n=t.hasAttribute)||void 0===n?void 0:n.call(t,"data-lenis-prevent-wheel"))||(null===(r=t.classList)||void 0===r?void 0:r.contains("lenis"))&&!(null===(l=t.classList)||void 0===l?void 0:l.contains("lenis-stopped"))})))return;if(this.isStopped||this.isLocked)return void i.preventDefault();if(this.isSmooth=this.options.syncTouch&&s||this.options.smoothWheel&&o,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();i.preventDefault();let h=e;"both"===this.options.gestureOrientation?h=Math.abs(e)>Math.abs(t)?e:t:"horizontal"===this.options.gestureOrientation&&(h=t);const a=s&&this.options.syncTouch,c=s&&"touchend"===i.type&&Math.abs(h)>5;c&&(h=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+h,Object.assign({programmatic:!1},a?{lerp:c?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-t),this.emit()}},window.lenisVersion="1.0.42",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,wheelEventsTarget:i,eventsTarget:s,smoothWheel:o,syncTouch:n,syncTouchLerp:r,touchInertiaMultiplier:l,duration:h,easing:a,lerp:c,infinite:d,gestureOrientation:u,orientation:p,touchMultiplier:m,wheelMultiplier:v,autoResize:g,__experimental__naiveDimensions:S},this.animate=new Animate,this.emitter=new Emitter,this.dimensions=new Dimensions({wrapper:t,content:e,autoResize:g}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=n||o,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new VirtualScroll(s,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(e,{offset:i=0,immediate:s=!1,lock:o=!1,duration:n=this.options.duration,easing:r=this.options.easing,lerp:l=!n&&this.options.lerp,onComplete:h,force:a=!1,programmatic:c=!0}={}){if(!this.isStopped&&!this.isLocked||a){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let t;if("string"==typeof e?t=document.querySelector(e):(null==e?void 0:e.nodeType)&&(t=e),t){if(this.options.wrapper!==window){const t=this.options.wrapper.getBoundingClientRect();i-=this.isHorizontal?t.left:t.top}const s=t.getBoundingClientRect();e=(this.isHorizontal?s.left:s.top)+this.animatedScroll}}if("number"==typeof e){if(e+=i,e=Math.round(e),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):e=t(0,e,this.limit),s)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(null==h||h(this));if(!c){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:n,easing:r,lerp:l,onStart:()=>{o&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(t,e)=>{this.isScrolling=!0,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),c&&(this.targetScroll=t),e||this.emit(),e&&(this.reset(),this.emit(),null==h||h(this),this.__preventNextScrollEvent=!0,requestAnimationFrame((()=>{delete this.__preventNextScrollEvent})))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(t=this.animatedScroll,e=this.limit,(t%e+e)%e):this.animatedScroll;var t,e}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.__isSmooth=t,this.toggleClassName("lenis-smooth",t))}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.toggleClassName("lenis-scrolling",t))}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.toggleClassName("lenis-stopped",t))}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.toggleClassName("lenis-locked",t))}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isSmooth&&(t+=" lenis-smooth"),t}toggleClassName(t,e){this.rootElement.classList.toggle(t,e),this.emitter.emit("className change",this)}}
//# sourceMappingURL=lenis.mjs.map


/***/ }),

/***/ "./node_modules/js-cookie/dist/js.cookie.mjs":
/*!***************************************************!*\
  !*** ./node_modules/js-cookie/dist/js.cookie.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ api; }
/* harmony export */ });
/*! js-cookie v3.0.5 | MIT */
/* eslint-disable no-var */
function assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target
}
/* eslint-enable no-var */

/* eslint-disable no-var */
var defaultConverter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
};
/* eslint-enable no-var */

/* eslint-disable no-var */

function init (converter, defaultAttributes) {
  function set (name, value, attributes) {
    if (typeof document === 'undefined') {
      return
    }

    attributes = assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    name = encodeURIComponent(name)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape);

    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName;

      if (attributes[attributeName] === true) {
        continue
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }

    return (document.cookie =
      name + '=' + converter.write(value, name) + stringifiedAttributes)
  }

  function get (name) {
    if (typeof document === 'undefined' || (arguments.length && !name)) {
      return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');

      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);

        if (name === found) {
          break
        }
      } catch (e) {}
    }

    return name ? jar[name] : jar
  }

  return Object.create(
    {
      set,
      get,
      remove: function (name, attributes) {
        set(
          name,
          '',
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(assign({}, this.converter, converter), this.attributes)
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  )
}

var api = init(defaultConverter, { path: '/' });
/* eslint-enable no-var */




/***/ }),

/***/ "./node_modules/swiper/modules/a11y.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/a11y.mjs ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ A11y; }
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.innerHTML = '';
    notification.innerHTML = message;
  }
  function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return 'x'.repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '0');
    });
  }
  function makeElNotFocusable(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '-1');
    });
  }
  function addElRole(el, role) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('role', role);
    });
  }
  function addElRoleDescription(el, description) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-roledescription', description);
    });
  }
  function addElControls(el, controls) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-controls', controls);
    });
  }
  function addElLabel(el, label) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-label', label);
    });
  }
  function addElId(el, id) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('id', id);
    });
  }
  function addElLive(el, live) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-live', live);
    });
  }
  function disableEl(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', true);
    });
  }
  function enableEl(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }
      if (swiper.isEnd) {
        notify(params.lastSlideMessage);
      } else {
        notify(params.nextSlideMessage);
      }
    }
    if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }
      if (swiper.isBeginning) {
        notify(params.firstSlideMessage);
      } else {
        notify(params.prevSlideMessage);
      }
    }
    if (swiper.pagination && targetEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach(bulletEl => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, 'button');
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(bulletEl) + 1));
        }
      }
      if (bulletEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute('aria-current', 'true');
      } else {
        bulletEl.removeAttribute('aria-current');
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== 'BUTTON') {
      addElRole(el, 'button');
      el.addEventListener('keydown', onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = () => {
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const handleFocus = e => {
    if (swiper.a11y.clicked) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);

    // Container
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }

    // Wrapper
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);

    // Slide
    initSlides();

    // Navigation
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    if (nextEl) {
      nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.addEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('pointerdown', handlePointerDown, true);
    swiper.el.addEventListener('pointerup', handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    if (nextEl) {
      nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.removeEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    swiper.el.removeEventListener('focus', handleFocus, true);
    swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
    swiper.el.removeEventListener('pointerup', handlePointerUp, true);
  }
  on('beforeInit', () => {
    liveRegion = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('span', swiper.params.a11y.notificationClass);
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('aria-atomic', 'true');
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/autoplay.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/autoplay.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Autoplay; }
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


/* eslint no-underscore-dangle: "off" */
/* eslint no-use-before-define: "off" */
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayTimeLeft;
  let autoplayStartTime = new Date().getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
    if (pausedByPointerEnter) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter(slideEl => slideEl.classList.contains('swiper-slide-active'))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return undefined;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
    return currentSlideDelay;
  };
  const run = delayForce => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit('autoplay');
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit('autoplay');
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = new Date().getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }

    // eslint-disable-next-line
    return delay;
  };
  const start = () => {
    autoplayStartTime = new Date().getTime();
    swiper.autoplay.running = true;
    run();
    emit('autoplayStart');
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit('autoplayStop');
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit('autoplayPause');
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = new Date().getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit('autoplayResume');
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (document.visibilityState === 'hidden') {
      pausedByInteraction = true;
      pause(true);
    }
    if (document.visibilityState === 'visible') {
      resume();
    }
  };
  const onPointerEnter = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener('pointerenter', onPointerEnter);
      swiper.el.addEventListener('pointerleave', onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    swiper.el.removeEventListener('pointerenter', onPointerEnter);
    swiper.el.removeEventListener('pointerleave', onPointerLeave);
  };
  const attachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.addEventListener('visibilitychange', onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on('destroy', () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on('_freeModeStaticRelease', () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on('_freeModeNoMomentumRelease', () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on('touchEnd', () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on('slideChange', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/controller.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/controller.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Controller; }
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


/* eslint no-bitwise: ["error", { "allow": [">>"] }] */
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  });

  swiper.controller = {
    control: undefined
  };
  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;

      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(() => {
            c.updateAutoHeight();
          });
        }
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }
  on('beforeInit', () => {
    if (typeof window !== 'undefined' && (
    // eslint-disable-line
    typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElement = document.querySelector(swiper.params.controller.control);
      if (controlElement && controlElement.swiper) {
        swiper.controller.control = controlElement.swiper;
      } else if (controlElement) {
        const onControllerSwiper = e => {
          swiper.controller.control = e.detail[0];
          swiper.update();
          controlElement.removeEventListener('init', onControllerSwiper);
        };
        controlElement.addEventListener('init', onControllerSwiper);
      }
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cards.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards.mjs ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCards; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        // next
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

      /* eslint-disable */
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      /* eslint-enable */

      if (params.slideShadows) {
        // Set shadows
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('cards', slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-coverflow.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-coverflow.mjs ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCoverflow; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      // Allow percentage to make a relative stretch for responsive sliders
      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      if (swiper.browser && swiper.browser.need3dFix) {
        if (Math.abs(rotateY) / 90 % 2 === 1) {
          rotateY += 0.001;
        }
        if (Math.abs(rotateX) / 90 % 2 === 1) {
          rotateX += 0.001;
        }
      }
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBeforeEl) {
          shadowBeforeEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'left' : 'top');
        }
        if (!shadowAfterEl) {
          shadowAfterEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-creative.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-creative.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCreative; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };
  const setTranslate = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      // set translate
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      // set rotates
      r.forEach((value, index) => {
        let val = data.rotate[index] * Math.abs(progress * multiplier);
        if (swiper.browser && swiper.browser.need3dFix && Math.abs(val) / 90 % 2 === 1) {
          val += 0.001;
        }
        r[index] = val;
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

      // Set shadows
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl && data.shadow) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('creative', slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cube.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cube.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCube; }
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // create new ones
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
        if (swiper.browser && swiper.browser.need3dFix && Math.abs(wrapperRotate) / 90 % 2 === 1) {
          wrapperRotate += 0.001;
        }
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
      }
    }
    const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`;
    wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
  };
  const setTransition = duration => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach(slideEl => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector('.swiper-cube-shadow');
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectFade; }
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-flip.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-flip.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectFlip; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // Set shadows
    swiper.params.flipEffect;
    swiper.slides.forEach(slideEl => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      if (swiper.browser && swiper.browser.need3dFix) {
        if (Math.abs(rotateY) / 90 % 2 === 1) {
          rotateY += 0.001;
        }
        if (Math.abs(rotateX) / 90 % 2 === 1) {
          rotateX += 0.001;
        }
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/free-mode.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ freeMode; }
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart() {
    if (swiper.params.cssMode) return;
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)()
    });
  }
  function onTouchEnd(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    // Time diff
    const touchEndTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      emit('_freeModeStaticRelease');
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/grid.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/grid.mjs ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Grid; }
/* harmony export */ });
function Grid(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    grid: {
      rows: 1,
      fill: 'column'
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;
  let wasMultiRow;
  const getSpaceBetween = () => {
    let spaceBetween = swiper.params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    return spaceBetween;
  };
  const initSlides = slides => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    numFullColumns = Math.floor(slidesLength / rows);
    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }
    if (slidesPerView !== 'auto' && fill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
    slidesPerRow = slidesNumberEvenToRows / rows;
  };
  const unsetSlides = () => {
    if (swiper.slides) {
      swiper.slides.forEach(slide => {
        if (slide.swiperSlideGridSet) {
          slide.style.height = '';
          slide.style[swiper.getDirectionLabel('margin-top')] = '';
        }
      });
    }
  };
  const updateSlide = (i, slide, slides) => {
    const {
      slidesPerGroup
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    // Set slides order
    let newSlideOrderIndex;
    let column;
    let row;
    if (fill === 'row' && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.style.order = newSlideOrderIndex;
    } else if (fill === 'column') {
      column = Math.floor(i / rows);
      row = i - column * rows;
      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;
        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }
    slide.row = row;
    slide.column = column;
    slide.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
    slide.style[swiper.getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
    slide.swiperSlideGridSet = true;
  };
  const updateWrapperSize = (slideSize, snapGrid) => {
    const {
      centeredSlides,
      roundLengths
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid.splice(0, snapGrid.length);
      snapGrid.push(...newSlidesGrid);
    }
  };
  const onInit = () => {
    wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
  };
  const onUpdate = () => {
    const {
      params,
      el
    } = swiper;
    const isMultiRow = params.grid && params.grid.rows > 1;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      numFullColumns = 1;
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (params.grid.fill === 'column') {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    wasMultiRow = isMultiRow;
  };
  on('init', onInit);
  on('update', onUpdate);
  swiper.grid = {
    initSlides,
    unsetSlides,
    updateSlide,
    updateWrapperSize
  };
}




/***/ }),

/***/ "./node_modules/swiper/modules/hash-navigation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/hash-navigation.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HashNavigation; }
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref;
  let initialized = false;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.filter(slideEl => slideEl.getAttribute('data-hash') === hash)[0];
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
          return index;
        }
        return swiper.getSlideIndex((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${activeSlideHash}` || '');
      emit('hashSet');
    } else {
      document.location.hash = activeSlideHash || '';
      emit('hashSet');
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window.addEventListener('hashchange', onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window.removeEventListener('hashchange', onHashChange);
    }
  };
  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/history.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/history.mjs ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ History; }
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };
  const getPathValues = urlOverride => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }
    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }
    const slide = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
    let value = slugify(slide.getAttribute('data-history'));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ''}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ''}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides[i];
        const slideHistory = slugify(slide.getAttribute('data-history'));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history) return;
    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };
  const destroy = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };
  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/swiper/modules/index.mjs ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11y: function() { return /* reexport safe */ _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   Autoplay: function() { return /* reexport safe */ _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   Controller: function() { return /* reexport safe */ _controller_mjs__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   EffectCards: function() { return /* reexport safe */ _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__["default"]; },
/* harmony export */   EffectCoverflow: function() { return /* reexport safe */ _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__["default"]; },
/* harmony export */   EffectCreative: function() { return /* reexport safe */ _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__["default"]; },
/* harmony export */   EffectCube: function() { return /* reexport safe */ _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__["default"]; },
/* harmony export */   EffectFade: function() { return /* reexport safe */ _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__["default"]; },
/* harmony export */   EffectFlip: function() { return /* reexport safe */ _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__["default"]; },
/* harmony export */   FreeMode: function() { return /* reexport safe */ _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   Grid: function() { return /* reexport safe */ _grid_mjs__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   HashNavigation: function() { return /* reexport safe */ _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   History: function() { return /* reexport safe */ _history_mjs__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   Keyboard: function() { return /* reexport safe */ _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   Manipulation: function() { return /* reexport safe */ _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__["default"]; },
/* harmony export */   Mousewheel: function() { return /* reexport safe */ _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   Navigation: function() { return /* reexport safe */ _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   Pagination: function() { return /* reexport safe */ _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   Parallax: function() { return /* reexport safe */ _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   Scrollbar: function() { return /* reexport safe */ _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   Thumbs: function() { return /* reexport safe */ _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   Virtual: function() { return /* reexport safe */ _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   Zoom: function() { return /* reexport safe */ _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__["default"]; }
/* harmony export */ });
/* harmony import */ var _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual.mjs */ "./node_modules/swiper/modules/virtual.mjs");
/* harmony import */ var _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard.mjs */ "./node_modules/swiper/modules/keyboard.mjs");
/* harmony import */ var _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mousewheel.mjs */ "./node_modules/swiper/modules/mousewheel.mjs");
/* harmony import */ var _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.mjs */ "./node_modules/swiper/modules/navigation.mjs");
/* harmony import */ var _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination.mjs */ "./node_modules/swiper/modules/pagination.mjs");
/* harmony import */ var _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollbar.mjs */ "./node_modules/swiper/modules/scrollbar.mjs");
/* harmony import */ var _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parallax.mjs */ "./node_modules/swiper/modules/parallax.mjs");
/* harmony import */ var _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zoom.mjs */ "./node_modules/swiper/modules/zoom.mjs");
/* harmony import */ var _controller_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller.mjs */ "./node_modules/swiper/modules/controller.mjs");
/* harmony import */ var _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./a11y.mjs */ "./node_modules/swiper/modules/a11y.mjs");
/* harmony import */ var _history_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history.mjs */ "./node_modules/swiper/modules/history.mjs");
/* harmony import */ var _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hash-navigation.mjs */ "./node_modules/swiper/modules/hash-navigation.mjs");
/* harmony import */ var _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./autoplay.mjs */ "./node_modules/swiper/modules/autoplay.mjs");
/* harmony import */ var _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thumbs.mjs */ "./node_modules/swiper/modules/thumbs.mjs");
/* harmony import */ var _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./free-mode.mjs */ "./node_modules/swiper/modules/free-mode.mjs");
/* harmony import */ var _grid_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grid.mjs */ "./node_modules/swiper/modules/grid.mjs");
/* harmony import */ var _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manipulation.mjs */ "./node_modules/swiper/modules/manipulation.mjs");
/* harmony import */ var _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effect-fade.mjs */ "./node_modules/swiper/modules/effect-fade.mjs");
/* harmony import */ var _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effect-cube.mjs */ "./node_modules/swiper/modules/effect-cube.mjs");
/* harmony import */ var _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effect-flip.mjs */ "./node_modules/swiper/modules/effect-flip.mjs");
/* harmony import */ var _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effect-coverflow.mjs */ "./node_modules/swiper/modules/effect-coverflow.mjs");
/* harmony import */ var _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effect-creative.mjs */ "./node_modules/swiper/modules/effect-creative.mjs");
/* harmony import */ var _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./effect-cards.mjs */ "./node_modules/swiper/modules/effect-cards.mjs");
























/***/ }),

/***/ "./node_modules/swiper/modules/keyboard.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/keyboard.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Keyboard; }
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    // Directions locks
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    emit('keyPress', kc);
    return undefined;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document.addEventListener('keydown', handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document.removeEventListener('keydown', handle);
    swiper.keyboard.enabled = false;
  }
  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/manipulation.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation.mjs ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Manipulation; }
/* harmony export */ });
function appendSlide(slides) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  const appendElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.append(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.append(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) appendElement(slides[i]);
    }
  } else {
    appendElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
}

function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  const prependElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.prepend(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.prepend(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) prependElement(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    prependElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index, slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.recalcSlides();
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides[i];
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) slidesEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    slidesEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    slidesEl.append(slidesBuffer[i]);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

function Manipulation(_ref) {
  let {
    swiper
  } = _ref;
  Object.assign(swiper, {
    appendSlide: appendSlide.bind(swiper),
    prependSlide: prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: removeSlide.bind(swiper),
    removeAllSlides: removeAllSlides.bind(swiper)
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/mousewheel.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/mousewheel.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Mousewheel; }
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: 'swiper-no-mousewheel'
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    }

    // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).
    if (newEvent.delta >= 6 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    }
    // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    }
    // If you got here is because an animation has been triggered so store the current time
    lastScrollTime = new window.Date().getTime();
    // Return false as a default
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }
    return false;
  }
  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;

    // Ignore event if the target or its parents have the swiper-no-mousewheel class
    if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    // Get the scroll positions
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

    // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      };

      // Keep the most recent events
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent);

      // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }

      // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:

      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? 'next' : 'prev',
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        }

        // Emit event
        if (!ignoreWheelEvents) emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
        // Return page scroll on edge positions
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]('mouseenter', handleMouseEnter);
    targetEl[method]('mouseleave', handleMouseLeave);
    targetEl[method]('wheel', handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events('addEventListener');
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events('removeEventListener');
    swiper.mousewheel.enabled = false;
    return true;
  }
  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/navigation.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/navigation.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navigation; }
/* harmony export */ });
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  function getEl(el) {
    let res;
    if (el && typeof el === 'string' && swiper.isElement) {
      res = swiper.el.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === 'string') res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === 'string' && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      }
    }
    if (el && !res) return el;
    // if (Array.isArray(res) && res.length === 1) res = res[0];
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      if (subEl) {
        subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
        if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      }
    });
  }
  function update() {
    // Update Navigation Buttons
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(' '));
      }
    };
    nextEl.forEach(el => initButton(el, 'next'));
    prevEl.forEach(el => initButton(el, 'prev'));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
    };
    nextEl.forEach(el => destroyButton(el, 'next'));
    prevEl.forEach(el => destroyButton(el, 'prev'));
  }
  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    if (swiper.enabled) {
      update();
      return;
    }
    [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
  });
  on('click', (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }
      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
    init();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/pagination.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/pagination.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");




function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      swiper.slideToLoop(index);
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    // Current/Total
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.f)(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
        el.forEach(subEl => {
          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach(bulletEl => {
        const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach(bullet => {
          const bulletIndex = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(' '));
          } else if (swiper.isElement) {
            bullet.setAttribute('part', 'bullet');
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, 'prev');
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, 'next');
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(' '));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
          }
          setSideBullets(firstDisplayedBullet, 'prev');
          setSideBullets(lastDisplayedBullet, 'next');
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.forEach(bullet => {
          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === 'fraction') {
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.currentClass)).forEach(fractionEl => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.totalClass)).forEach(totalEl => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.progressbarFillClass)).forEach(progressEl => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === 'custom' && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0) emit('paginationRender', subEl);
      } else {
        if (subElIndex === 0) emit('paginationRender', subEl);
        emit('paginationUpdate', subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
      }
    });
  }
  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    let paginationHTML = '';
    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          // prettier-ignore
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach(subEl => {
      if (params.type !== 'custom') {
        subEl.innerHTML = paginationHTML || '';
      }
      if (params.type === 'bullets') {
        swiper.pagination.bullets.push(...subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.bulletClass)));
      }
    });
    if (params.type !== 'custom') {
      emit('paginationRender', el[0]);
    }
  }
  function init() {
    swiper.params.pagination = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      // check if it belongs to another nested Swiper
      if (el.length > 1) {
        el = el.filter(subEl => {
          if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(subEl, '.swiper')[0] !== swiper.el) return false;
          return true;
        })[0];
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      if (params.type === 'bullets' && params.clickable) {
        subEl.classList.add(...(params.clickableClass || '').split(' '));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === 'bullets' && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener('click', onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || '').split(' '));
          subEl.removeEventListener('click', onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
  }
  on('changeDirection', () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    update();
  });
  on('snapGridLengthChange', () => {
    render();
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }
      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/parallax.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/parallax.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Parallax; }
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute('data-swiper-parallax') || '0';
    let x = el.getAttribute('data-swiper-parallax-x');
    let y = el.getAttribute('data-swiper-parallax-y');
    const scale = el.getAttribute('data-swiper-parallax-scale');
    const opacity = el.getAttribute('data-swiper-parallax-opacity');
    const rotate = el.getAttribute('data-swiper-parallax-rotate');
    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }
    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== 'undefined' && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate = () => {
    const {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper;
    const elements = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(el, elementsSelector);
    if (swiper.isElement) {
      elements.push(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.hostEl, elementsSelector));
    }
    elements.forEach(subEl => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition = function (duration) {
    if (duration === void 0) {
      duration = swiper.params.speed;
    }
    const {
      el,
      hostEl
    } = swiper;
    const elements = [...el.querySelectorAll(elementsSelector)];
    if (swiper.isElement) {
      elements.push(...hostEl.querySelectorAll(elementsSelector));
    }
    elements.forEach(parallaxEl => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/scrollbar.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Scrollbar; }
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");





function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
  }
  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = '';
    dragEl.style.height = '';
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = '100ms';
    dragEl.style.transitionDuration = '100ms';
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = '0ms';
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = 'none';
    }
    emit('scrollbarDragStart', e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = '0ms';
    el.style.transitionDuration = '0ms';
    dragEl.style.transitionDuration = '0ms';
    emit('scrollbarDragMove', e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = '';
      wrapperEl.style.transitionDuration = '';
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
    emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    target[eventMethod]('pointerdown', onDragStart, activeListener);
    document[eventMethod]('pointermove', onDragMove, activeListener);
    document[eventMethod]('pointerup', onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__.c)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = document.querySelectorAll(params.el);
      if (!el.length) return;
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_3__.c)(swiper.params.scrollbar.dragClass));
      if (!dragEl) {
        dragEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.lockClass));
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
    }
    disableDraggable();
  }
  on('changeDirection', () => {
    if (!swiper.scrollbar || !swiper.scrollbar.el) return;
    const params = swiper.params.scrollbar;
    let {
      el
    } = swiper.scrollbar;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock changeDirection', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.lockClass));
    }
  });
  on('destroy', () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    init();
    updateSize();
    setTranslate();
  };
  const disable = () => {
    swiper.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/thumbs.mjs":
/*!************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs.mjs ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Thumb; }
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`)[0];
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }
  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
      const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const onThumbsSwiper = e => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener('init', onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener('init', onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/virtual.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/virtual.mjs ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Virtual; }
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document.createElement('div');
  function renderSlide(slide, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    // eslint-disable-next-line
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide, index);
      if (typeof slideEl === 'string') {
        tempDOM.innerHTML = slideEl;
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide');
    } else {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.slideClass);
    }
    slideEl.setAttribute('data-swiper-slide-index', index);
    if (!params.renderSlide) {
      slideEl.innerHTML = slide;
    }
    if (params.cache) {
      swiper.virtual.cache[index] = slideEl;
    }
    return slideEl;
  }
  function update(force) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop
    } = swiper.params;
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit('virtualUpdate');
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach(slideEl => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = index => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        // eslint-disable-next-line
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach(index => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach(index => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update(true);
  }
  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
        if (cachedElIndex) {
          cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
          // shift cache indexes
          Object.keys(swiper.virtual.cache).forEach(key => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
        // shift cache indexes
        Object.keys(swiper.virtual.cache).forEach(key => {
          if (key > slidesIndexes) {
            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
            swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
            delete swiper.virtual.cache[key];
          }
        });
      }
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update(true);
    swiper.slideTo(0, 0);
  }
  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === 'undefined') {
      const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute('data-swiper-slide-index', slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    update();
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/zoom.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/zoom.mjs ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Zoom; }
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    zoom: {
      enabled: false,
      limitToOriginalSize: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    imageEl: undefined,
    imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit('zoomChange', value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getMaxRatio() {
    const params = swiper.params.zoom;
    const maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
      const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
      return Math.min(imageMaxRatio, maxRatio);
    }
    return maxRatio;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }

  // Events
  function onGestureStart(e) {
    if (e.pointerType === 'mouse') {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = undefined;
        return;
      }
      gesture.maxRatio = getMaxRatio();
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = '0ms';
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = undefined;
    }
  }
  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event.pageX;
    image.touchesStart.y = event.pageY;
  }
  function onTouchMove(e) {
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !gesture.slideEl) return;
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth;
      image.height = gesture.imageEl.offsetHeight;
      image.startX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(gesture.imageWrapEl, 'x') || 0;
      image.startY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(gesture.imageWrapEl, 'y') || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = '0ms';
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd() {
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = undefined;
      gesture.imageEl = undefined;
      gesture.imageWrapEl = undefined;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const forceZoomRatio = typeof e === 'number' ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = undefined;
      touchY = undefined;
    }
    const maxRatio = getMaxRatio();
    zoom.scale = forceZoomRatio || maxRatio;
    currentScale = forceZoomRatio || maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.slideEl).left + window.scrollX;
      offsetY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.slideEl).top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth;
      imageHeight = gesture.imageEl.offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }
    zoom.scale = 1;
    currentScale = 1;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = undefined;
    gesture.originX = 0;
    gesture.originY = 0;
  }

  // Toggle Zoom
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  // Attach/Detach Events
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd();
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}




/***/ }),

/***/ "./node_modules/swiper/shared/classes-to-selector.mjs":
/*!************************************************************!*\
  !*** ./node_modules/swiper/shared/classes-to-selector.mjs ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ classesToSelector; }
/* harmony export */ });
function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-element-if-not-defined.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/create-element-if-not-defined.mjs ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ createElementIfNotDefined; }
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-shadow.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/create-shadow.mjs ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ createShadow; }
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
  const shadowContainer = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
  if (!shadowEl) {
    shadowEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', shadowClass.split(' '));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-init.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/effect-init.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ effectInit; }
/* harmony export */ });
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      // remove shadows
      swiper.slides.forEach(slideEl => {
        slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
      });
      // create new one
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-target.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/effect-target.mjs ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ effectTarget; }
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectTarget(effectParams, slideEl) {
  const transformEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = 'hidden';
    transformEl.style['-webkit-backface-visibility'] = 'hidden';
  }
  return transformEl;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/effect-virtual-transition-end.mjs ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ effectVirtualTransitionEnd; }
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = el => {
    if (!el.parentElement) {
      // assume shadow root
      const slide = swiper.slides.filter(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter(transformEl => {
        const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach(el => {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}




/***/ }),

/***/ "./node_modules/swiper/shared/ssr-window.esm.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/shared/ssr-window.esm.mjs ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ getWindow; },
/* harmony export */   g: function() { return /* binding */ getDocument; }
/* harmony export */ });
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ''
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}




/***/ }),

/***/ "./node_modules/swiper/shared/swiper-core.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/swiper-core.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ Swiper; },
/* harmony export */   d: function() { return /* binding */ defaults; }
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



let support;
function calcSupport() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support = getSupport();
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}

let browser;
function calcBrowser() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}

function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */

var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler() {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(el, 'padding-left') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(el, 'padding-right') || 0, 10);
  height = height - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(el, 'padding-top') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', '');
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', '');
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide;
    if (slides[i]) slide = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slides);
    }
    if (slides[i] && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(slide, 'display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[swiper.getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'width', true) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'height', true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit('slidesUpdated');
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;

  // Visible Slides
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
  });
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides[i].classList.add(params.slideVisibleClass);
    }
    if (isFullyVisible) {
      slides[i].classList.add(params.slideFullyVisibleClass);
    }
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = selector => {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
  });
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.filter(slideEl => slideEl.column === activeIndex)[0];
      nextSlide = slides.filter(slideEl => slideEl.column === activeIndex + 1)[0];
      prevSlide = slides.filter(slideEl => slideEl.column === activeIndex - 1)[0];
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    // Active classes
    activeSlide.classList.add(params.slideActiveClass);
    if (gridEnabled) {
      if (nextSlide) {
        nextSlide.classList.add(params.slideNextClass);
      }
      if (prevSlide) {
        prevSlide.classList.add(params.slidePrevClass);
      }
    } else {
      // Next Slide
      nextSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }
      if (nextSlide) {
        nextSlide.classList.add(params.slideNextClass);
      }

      // Prev Slide
      prevSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
      if (prevSlide) {
        prevSlide.classList.add(params.slidePrevClass);
      }
    }
  }
  swiper.emitSlidesClasses();
}

const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        // init later
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.filter(slideEl => slideEl.column === activeIndex)[0];
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
  }
  swiper.emit('setTransition', duration, byController);
}

function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial || swiper.destroyed) {
    return false;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // Update Index
  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex)[0].column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex)[0].column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute('data-swiper-slide-index', index);
    });
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = amountOfSlides => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide', [params.slideBlankClass]) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? undefined : 'next'
  });
}

function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo = true,
    direction,
    setTranslate,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === 'auto') {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
  } else if (gridEnabled && params.grid.fill === 'row') {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
  // prepend last slides before start
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i = slides.length - 1; i >= 0; i -= 1) {
          if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
        }
        // slides.forEach((slide, slideIndex) => {
        //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
        // });
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide, slideIndex) => {
          if (slide.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
      });
    }
  }
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)() || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event) {
  const swiper = this;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === 'pointerdown') {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === 'touchstart') {
    // don't proceed touch event
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!swiper.wrapperEl.contains(targetEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === 'pointermove') {
    if (data.touchId !== null) return; // return from pointer if we use touch
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === 'touchmove') {
    targetTouch = [...e.changedTouches].filter(t => t.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  new Date().getTime();
  if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
  if (!isTouchEvent) {
    if (data.touchId !== null) return; // return from pointer if we use touch
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].filter(t => t.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
    const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = 'auto';
  }
}

const events = (swiper, method) => {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;

  // Touch Events
  document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]('touchstart', swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('touchmove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('touchend', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('touchcancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('contextmenu', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}
var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

  // Get breakpoint for window width and update parameters
  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  swiperElementNodeName: 'SWIPER-CONTAINER',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: 'swiper',
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-blank',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideFullyVisibleClass: 'swiper-slide-fully-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({}, params);
    if (el && !params.el) params.el = el;
    const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({}, defaults, allModulesParams);

    // Extend defaults with passed params
    swiper.params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({}, swiper.params);
    swiper.passedParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slides[0]);
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = 'current';
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === 'number') return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(el, 'direction') === 'rtl'),
      wrongRTL: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Attach events
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);

    // Init Flag
    swiper.initialized = true;
    preload(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      el.removeAttribute('style');
      wrapperEl.removeAttribute('style');
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.el.swiper = null;
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);




/***/ }),

/***/ "./node_modules/swiper/shared/utils.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/shared/utils.mjs ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ elementParents; },
/* harmony export */   b: function() { return /* binding */ elementOffset; },
/* harmony export */   c: function() { return /* binding */ createElement; },
/* harmony export */   d: function() { return /* binding */ now; },
/* harmony export */   e: function() { return /* binding */ elementChildren; },
/* harmony export */   f: function() { return /* binding */ elementOuterSize; },
/* harmony export */   g: function() { return /* binding */ getSlideTransformEl; },
/* harmony export */   h: function() { return /* binding */ elementIndex; },
/* harmony export */   i: function() { return /* binding */ classesToTokens; },
/* harmony export */   j: function() { return /* binding */ getTranslate; },
/* harmony export */   k: function() { return /* binding */ elementTransitionEnd; },
/* harmony export */   l: function() { return /* binding */ isObject; },
/* harmony export */   m: function() { return /* binding */ makeElementsArray; },
/* harmony export */   n: function() { return /* binding */ nextTick; },
/* harmony export */   o: function() { return /* binding */ elementStyle; },
/* harmony export */   p: function() { return /* binding */ elementNextAll; },
/* harmony export */   q: function() { return /* binding */ elementPrevAll; },
/* harmony export */   r: function() { return /* binding */ animateCSSModeScroll; },
/* harmony export */   s: function() { return /* binding */ setCSSProperty; },
/* harmony export */   t: function() { return /* binding */ showWarning; },
/* harmony export */   u: function() { return /* binding */ extend; },
/* harmony export */   v: function() { return /* binding */ deleteProps; }
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function classesToTokens(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return classes.trim().split(' ').filter(c => !!c.trim());
}

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle(el);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = '';
  }
  return [...element.children].filter(el => el.matches(selector));
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
    // err
  }
}
function createElement(tag, classes) {
  if (classes === void 0) {
    classes = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
  return el;
}
function elementOffset(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  if (includeMargins) {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
  return el.offsetWidth;
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter(e => !!e);
}




/***/ }),

/***/ "./node_modules/swiper/swiper.mjs":
/*!****************************************!*\
  !*** ./node_modules/swiper/swiper.mjs ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Swiper: function() { return /* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S; },
/* harmony export */   "default": function() { return /* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S; }
/* harmony export */ });
/* harmony import */ var _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/swiper-core.mjs */ "./node_modules/swiper/shared/swiper-core.mjs");
/**
 * Swiper 11.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 27, 2024
 */




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!******************************!*\
  !*** ./dev/script/script.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/base */ "./dev/script/components/base.js");
/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/static */ "./dev/script/components/static.js");
/* harmony import */ var _components_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gsap */ "./dev/script/components/gsap.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/carousel */ "./dev/script/components/carousel.js");
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/map */ "./dev/script/components/map.js");
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_custom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/custom */ "./dev/script/components/custom.js");
/* harmony import */ var _components_custom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_custom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_modules_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modules/variables */ "./dev/script/components/modules/variables.js");
/* harmony import */ var _components_modules_dynamicNavbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modules/dynamicNavbar */ "./dev/script/components/modules/dynamicNavbar.js");
/* harmony import */ var _components_modules_dynamicNavbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_modules_dynamicNavbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_modules_mouseEnterEffectTranslate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modules/mouseEnterEffectTranslate */ "./dev/script/components/modules/mouseEnterEffectTranslate.js");
/* harmony import */ var _components_modules_mouseEnterEffectTranslate__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_modules_mouseEnterEffectTranslate__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_modules_mouseEnterEffectRotate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modules/mouseEnterEffectRotate */ "./dev/script/components/modules/mouseEnterEffectRotate.js");
/* harmony import */ var _components_modules_mouseEnterEffectRotate__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_modules_mouseEnterEffectRotate__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_test__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/test */ "./dev/script/components/test.js");
/* harmony import */ var _components_test__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_test__WEBPACK_IMPORTED_MODULE_10__);








// modules :




}();
/******/ })()
;
//# sourceMappingURL=script.js.map