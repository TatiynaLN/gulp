"use strict";
;
(function () {
    var cbpAnimatedHeader = (function () {

        var docElem = document.documentElement,
            header = document.querySelector('header'),
            didScroll = false,
            changeHeaderOn = 0.1;

        function init() {
            window.addEventListener('scroll', function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 0);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                header.classList.add('cbp-af-header-shrink');
            }
            else {
                header.classList.remove('cbp-af-header-shrink');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();

    })();
})();

"use strict";
;
"use strict";
;
// (function () {
//     'use strict';

//     function trackScroll() {
//         var scrolled = window.pageYOffset;
//         var coords = document.documentElement.clientHeight;

//         if (scrolled > coords) {
//             goTopBtn.classList.add('back_to_top-show');
//         }
//         if (scrolled < coords) {
//             goTopBtn.classList.remove('back_to_top-show');
//         }
//     }

//     function backToTop() {
//         if (window.pageYOffset > 0) {
//             window.scrollBy(0, -20);
//             setTimeout(backToTop, 0);
//         }
//     }

//     var goTopBtn = document.querySelector('.back_to_top');

//     window.addEventListener('scroll', trackScroll);
//     goTopBtn.addEventListener('click', backToTop);
// })();

// (function () {
// function trackScroll() {
//     var scrolled = window.pageYOffset;
//     var coords = document.documentElement.clientHeight;
//     if (scrolled > coords) {

//         goTopBtn.classList.add('back_to_top-show');
//     }
//     if (scrolled < coords) {
//         goTopBtn.classList.remove('back_to_top-show');
//     }
// }

// function backToTop() {
//     if (window.pageYOffset > 0) {
//         window.scrollBy(0, -80);
//         setTimeout(backToTop, 0);
//     }

// }

// var goTopBtn = document.querySelector('.back_to_top');

// window.addEventListener('scroll', trackScroll);
// goTopBtn.addEventListener('click', backToTop);
// })();
(function () {
    var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
    var rootElement = document.documentElement

    function handleScroll() {
        // Do something on scroll
        var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
        if ((rootElement.scrollTop / scrollTotal) > 0.10) {
            // Show button
            scrollToTopBtn.classList.add("showBtn")
        } else {
            // Hide button
            scrollToTopBtn.classList.remove("showBtn")
        }
    }

    function scrollToTop() {
        // Scroll to top logic
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    scrollToTopBtn.addEventListener("click", scrollToTop)
    document.addEventListener("scroll", handleScroll)
})();