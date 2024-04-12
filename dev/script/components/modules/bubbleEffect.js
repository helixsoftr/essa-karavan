document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('[bubble]')) {
        let bubbles = document.querySelectorAll('[bubble]');

        bubbles.forEach((b, i) => {
            let span = document.createElement('span');

            span.setAttribute('bubbleEffect', '');
            b.appendChild(span);

            b.addEventListener('mouseenter', () => {
                b.addEventListener('mousemove', (e) => {
                    let rect = b.getBoundingClientRect();

                    let x = e.clientX - rect.left;
                    let y = e.clientY - rect.top;

                    b.querySelector('[bubbleEffect]').style.cssText = `
                        top: ${y}px;
                        left: ${x}px;
                    `;
                    b.querySelector('[bubbleEffect]').style.left = x + 'px';
                    b.querySelector('[bubbleEffect]').style.top = y + 'px';
                })
            })
        });
    }
})