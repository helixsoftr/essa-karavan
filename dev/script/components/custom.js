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
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            toggle(
                this,
                this.getAttribute("data-toggle"),
                this.getAttribute("data-target"),
                this.getAttribute("data-only"),
                this.getAttribute("data-devices"),
                this.getAttribute("data-itself"),
                this.getAttribute("data-animate"),
                this.getAttribute("data-close")
            );
        });
    });

    //if one of the toggler set default
    if (document.querySelector("[data-default]") != undefined) {
        document.querySelectorAll("[data-default]").forEach((i) => {
            i.click();
        });
    }
});

// toggle function
// o = object, otcn = object toggler class name, ot = object targets, oo = object only, od = object devices, oi= object itself, oa = object animate, ou = object outside click
function toggle(o, otcn, ot, oo, od, oi, oa, oc) {
    // define devices
    od != null ? (devices = od) : (devices = "all");

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
            otcn != ""
                ? (toggleClassName = otcn)
                : (toggleClassName = "active");

            //define itself:
            oi != undefined ? (isItSelf = oi == "true") : true;

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
                ot.includes("|")
                    ? (toggledElement = ot.split("|"))
                    : (toggledElement = ot);
            }

            if (close && o.classList.contains(toggleClassName)) {
                o.classList.remove(toggleClassName);
                close = false;
                return;
            }

            // fire the toggle action
            if (isOnly) {
                document
                    .querySelectorAll(`${allToggled} , ${allToggler}`)
                    .forEach((i) => {
                        i.classList.remove(toggleClassName);
                    });

                document.querySelectorAll(toggledElement).forEach((k) => {
                    k.classList.toggle(toggleClassName);
                });
            } else {
                document.querySelectorAll(toggledElement).forEach((j) => {
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

                document.querySelectorAll(allToggled).forEach((i) => {
                    i.classList.add(`animate-${animation}`);
                });

                setTimeout(() => {
                    document.querySelectorAll(allToggled).forEach((i) => {
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

document.querySelectorAll("[data-focus]").forEach((element) => {
    element.addEventListener("focusin", function () {
        element.parentElement.classList.add("active");
    });
    element.addEventListener("focusout", function () {
        if (element.value.length > 0) {
        } else {
            element.parentElement.classList.remove("active");
        }
    });

    element.addEventListener("change", function () {
        element.parentElement.classList.add("active");

        if (element.value.length > 0) {
        } else {
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
