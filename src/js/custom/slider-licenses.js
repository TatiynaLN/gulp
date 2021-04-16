;(function () {

  if(document.querySelector('.swiper-licenses')) {
    const swiperLicenses = new Swiper('.swiper-licenses', {
      spaceBetween: 30,
      slidesPerView: 4,
      loopedSlides: 1,
      grabCursor: true,
      loopAdditionalSlides: 4,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next--licenses',
        prevEl: '.swiper-button-prev--licenses',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          loopedSlides: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 2,
          loopedSlides: 1,
          spaceBetween: 20
        },
        1320: {
          slidesPerView: 4,
          loopedSlides: 1,
          spaceBetween: 20
        },
      }
    });
  }

})();
