// this code will add sticky untill the wrapper element end

//https://frontend.pentayazilim.com/demo/oxylife/views/documents.php

// how to use:
// 1 - coppy the code below to the projects gsap.js
// 2 - add data-sticky:'wrapper' to the start and end object
// 3 - add data-sticky:'object' to the sticky object
// 4 - configure offset value

// All the attributes can be given :

// data-sticky="wrapper" : wrapper element
// data-sticky="object" : sticky element
// data-sticky-offset="30" : custom offset value

// HTML Example

{/* <div>
    <div data-sticky="wrapper" class="width: 1000px; height: 3000px; background: blue;">

    </div>
    <div data-sticky="object" data-sticky-offset="20" class="width: 50px; height: 300px; background: red;">

    </div>
</div> */}

if (devices()[0] == 'Desktop') {
    if (document.querySelector('[data-sticky]')) {
        const stickyElements = document.querySelectorAll('[data-sticky="wrapper"]'); // all the elements exist in the document
        const navbar = document.querySelector('header'); // header element
        const offset = 70; // offset default value
        let navbarRec = navbar.getBoundingClientRect(); //boundery rectangle

        stickyElements.forEach((wrapper, i) => { //for all the sticky elements
            const stickyOffset = parseInt(wrapper.getAttribute('data-sticky-offset')) || offset; // if there is custom offset value
            const object = document.querySelectorAll(`[data-sticky="object"]`)[i]; // current sticky element

            const stickyEl = gsap.timeline({
                scrollTrigger: {
                    trigger: object, // trigger when scrollTrigger is fired
                    start: `top ${stickyOffset}px`, // give it a offset for starting
                    pin: true,
                    pinSpacer: false,
                    endTrigger: wrapper, // wrapper element
                    end: `bottom ${object.clientHeight + stickyOffset}px`, // give the ending line with sticky element height
                    onLeaveBack: (e) => { // reset margin values
                        e.pin.style.marginTop = '0';
                        e.pin.style.marginBottom = '0';
                    },
                    onUpdate: (e) => { // add the navbar diffrences
                        navbarRec = navbar.getBoundingClientRect();
                        const marginTop = navbar.classList.contains('is-hidden') ? '0' : `${navbarRec.height}px`;
                        const marginBottom = navbar.classList.contains('is-hidden') ? '0' : `${-1 * navbarRec.height}px`;
                        e.pin.style.transition = '.3s margin';
                        e.pin.style.marginTop = marginTop;
                        e.pin.style.marginBottom = marginBottom;
                    }
                },
            });
        });
    }
}