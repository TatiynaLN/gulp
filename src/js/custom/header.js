"use strict";
// ФИКСИРУЕМ HEADER ПРИ СКРОЛЕ
; (function () {

    let menu = document.querySelector('.header__bottom');
    let section = document.querySelectorAll('section')[0];
    let sticky = menu.offsetTop;

    function stickyMenu() {
        if (window.pageYOffset >= sticky) {
            menu.classList.add('sticky-menu');
            section.classList.add('smooth-menu');
        } else {
            menu.classList.remove('sticky-menu');
            section.classList.remove('smooth-menu');
        }
    }

    if (window.innerWidth >= 1320) {
        window.addEventListener('scroll', stickyMenu);
        window.addEventListener('load', stickyMenu);
    } else {
        window.removeEventListener('scroll', stickyMenu);
        window.removeEventListener('load', stickyMenu);
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1320) {
            window.addEventListener('scroll', stickyMenu);
            window.addEventListener('load', stickyMenu);
        } else {
            window.removeEventListener('scroll', stickyMenu);
            window.removeEventListener('load', stickyMenu);
        }
    });

})();

// ЗАПРЕТ СКРОЛА БОДИ ПРИ ОТКРЫТОМ ГАМБУРГЕРЕ
"use strict";
; (function () {
    let panel = document.querySelector('html');
    document.querySelector('.menu__btn').addEventListener('click', e => {
        panel.classList.toggle('no-scroll');
    });

})();
