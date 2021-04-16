
; (function () {
    new Swiper('.staff-swiper-1', {
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        //     // управление клавиатурой
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        //     autoHeight: true,
        //     slidesPerViev: 1,
        //     watchOverflow: true,
        //     spaceBetween: 30, // отступ между слайдов
        //     slidePerGroup: 1,
        //     centeredSlides: false, // активный слайд по центру
        //     initialSlide: 1,
        //     lopp: true, // бесконечный слайд
        //     breakpoints: {
        //         320: {
        //             slidesPerViev: 1,
        //         },
        //         768: {
        //             slidesPerViev: 2,
        //         },
        //     },
        // });
        //колличество пролистываемых слайдов
        slidesPerGroup: 1,
        // активный слайд отсчет с 0
        initialSlide: 0,
        autoHeight: true, // автовысота
        loop: true,
        centeredSlides: false,
        //Отключение функционала, если слайдов меньше чем нужно
        watchOverflow: true,
        //колличество слайдов для показа
        breakpoints: {
            320: {
                //колличество слайдов для показа
                slidesPerView: 1,
            },
            768: {
                //колличество слайдов для показа
                slidesPerView: 2,
            }

        },
    });

})();

"use strict";
;


; (function () {
    new Swiper('.staff-swiper-2', {
        navigation: {
            nextEl: '.nexts',
            prevEl: '.prevs'
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        //колличество пролистываемых слайдов
        slidesPerGroup: 1,
        // активный слайд отсчет с 0
        initialSlide: 0,
        autoHeight: true,
        loop: true,
        centeredSlides: false,
        //Отключение функционала, если слайдов меньше чем нужно
        watchOverflow: true,
        //колличество слайдов для показа
        breakpoints: {
            320: {
                //колличество слайдов для показа
                slidesPerView: 1,
            },
            768: {
                //колличество слайдов для показа
                slidesPerView: 2,
            }

        },
    });

})();

"use strict";
;
