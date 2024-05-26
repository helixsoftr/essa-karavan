// ? this code add max-height value as a style parameter

if (document.querySelector('[data-maxHeightCalc]')) {
    document.querySelectorAll('[data-maxHeightCalc]').forEach(e => {
        e.style.maxHeight = `${e.clientHeight}px`;

        if (e.getAttribute('data-maxHeight') === " ") {
            e.classList.add(`group-[&:not(.active)]/maxH:!max-h-0`);
        } else {
            e.classList.add(`group-[&:not(.active)]/maxH${e.getAttribute('data-maxHeightCalc')}:!max-h-0`);
        }
    });
}