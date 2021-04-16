;(function () {

    if(document.querySelector('.swiper-lisences--small-first')) {
      const swiperLisencesSmallFirst = new Swiper('.swiper-lisences--small-first', {
          slidesPerView: 1,
          loopedSlides: 1,
          grabCursor: true,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next-lisences--small-first',
            prevEl: '.swiper-button-prev-lisences--small-first',
          },
      });
    }

    if(document.querySelector('.swiper-lisences--small-second')) {
      const swiperLisencesSmallSecond = new Swiper('.swiper-lisences--small-second', {
          slidesPerView: 1,
          loopedSlides: 1,
          grabCursor: true,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next-lisences--small-second',
            prevEl: '.swiper-button-prev-lisences--small-second',
          },
      });
    }

})();