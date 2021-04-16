;(function () {

    if(document.querySelector('.swiper-reviews')) {
      const swiperReviews = new Swiper('.swiper-reviews', {
          slidesPerView: 1,
          loopedSlides: 1,
          autoHeight: true,
          grabCursor: true,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next--reviews',
            prevEl: '.swiper-button-prev--reviews',
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              loopedSlides: 1,
              spaceBetween: 5
            },
          }
      });
    }

})();