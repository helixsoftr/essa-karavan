if (document.querySelector('[scrollEnd]')) {
    let elements = document.querySelectorAll('[scrollEnd]');

    elements.forEach(e => {
        function iab(e) {
            return e.scrollHeight - e.scrollTop === e.clientHeight;
        }
        function iat(e) {
            return e.scrollTop === 0;
        }
        function bottom() {
            e.classList.add('bottom');
            e.classList.remove('middle');
        }
        function middle() {
            e.classList.add('middle');
            e.classList.remove('top');
            e.classList.remove('bottom');
        }
        function top() {
            e.classList.add('top');
            e.classList.remove('middle');
        }

        e.addEventListener('scroll', function () {
            console.log();
            if (iab(e)) {
                bottom();
            } else if (iat(e)) {
                top();
            }
            else {
                middle();
            }
        });

        e.addEventListener('scroll', function () {
            console.log();
            if (iab(e)) {
                bottom();
            } else if (iat(e)) {
                top();
            }
            else {
                middle();
            }
        });
    });
}