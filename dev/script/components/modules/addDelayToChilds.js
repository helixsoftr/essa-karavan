// ! its only support maximum of 10 child

// * add 'addDelayToChilds' with starter value to the parent element

// ?    <div addDelayToChilds="1">
// ?        <h1 class="animate-bounce">test</h1>
// ?        <h2 class="animate-bounce">test 2</h2>
// ?        <h3 class="animate-bounce">test 3</h2>
// ?        <h1 class="animate-bounce">test 4</h1>
// ?        <h2 class="animate-bounce">test 5</h2>
// ?        <h3 class="animate-bounce">test 6</h2>
// ?        <h1 class="animate-bounce">test 7</h1>
// ?        <h2 class="animate-bounce">test 8</h2>
// ?        <h3 class="animate-bounce">test 9</h2>
// ?    </div >



document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelectorAll('[addDelayToChilds]')) {
        document.querySelectorAll('[addDelayToChilds]').forEach(element => {
            element.querySelectorAll('*').forEach((subElement, i) => {
                subElement.style.transitionDelay = `${(element.getAttribute('addDelayToChilds') + i) / 10}s`;
                subElement.style.animationDelay = `${(element.getAttribute('addDelayToChilds') + i) / 10}s`;
            });
            i = 0;
        });
    }
});