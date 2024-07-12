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


// ============================================================================
// hover control
// ============================================================================
if (
    document.querySelector("[data-hover-control]") &&
    window.innerWidth > 1280
) {
    document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll("[data-hover-control]");

        elements.forEach(function (element) {
            element.addEventListener("mouseover", function () {
                elements.forEach(function (el) {
                    el.classList.remove("active");
                });
                element.classList.add("active");
            });
        });
    });
}
