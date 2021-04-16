;(function () {

  if(document.querySelector('.swiper-first')) {
    
    const swiperFirst = document.querySelector('.swiper-first');
    let mySwiper;

    function mobileSlider() {

      if (window.innerWidth < 1320 && swiperFirst.dataset.mobile == 'false') {
        mySwiper = new Swiper(swiperFirst, {
          spaceBetween: 30,
          slidesPerView: 3,
          loopedSlides: 1,
          autoHeight: true,
          navigation: {
              nextEl: '.swiper-button-next-first',
              prevEl: '.swiper-button-prev-first',
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              loopedSlides: 1,
              spaceBetween: 10
            }
          }
        });

        swiperFirst.dataset.mobile = 'true';
      }

      if (window.innerWidth >= 1320) {
        swiperFirst.dataset.mobile = 'false';

        if (swiperFirst.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
      }
    }

    mobileSlider();

    window.addEventListener('resize', () => {
      mobileSlider();
    });
  }

  if(document.querySelector('.swiper-second')) {
    
    const swiperSecond = document.querySelector('.swiper-second');
    let mySwiper;

    function mobileSlider() {

      if (window.innerWidth < 1320 && swiperSecond.dataset.mobile == 'false') {
        mySwiper = new Swiper(swiperSecond, {
          spaceBetween: 30,
          slidesPerView: 3,
          loopedSlides: 1,
          autoHeight: true,
          navigation: {
              nextEl: '.swiper-button-next-second',
              prevEl: '.swiper-button-prev-second',
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              loopedSlides: 1,
              spaceBetween: 10
            }
          }
        });

        swiperSecond.dataset.mobile = 'true';
      }

      if (window.innerWidth >= 1320) {
        swiperSecond.dataset.mobile = 'false';

        if (swiperSecond.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
      }
    }

    mobileSlider();

    window.addEventListener('resize', () => {
      mobileSlider();
    });
  }

  if(document.querySelector('.swiper-third')) {
    
    const swiperThird = document.querySelector('.swiper-third');
    let mySwiper;

    function mobileSlider() {

      if (window.innerWidth < 1320 && swiperThird.dataset.mobile == 'false') {
        mySwiper = new Swiper(swiperThird, {
          spaceBetween: 30,
          slidesPerView: 3,
          loopedSlides: 1,
          autoHeight: true,
          navigation: {
              nextEl: '.swiper-button-next-third',
              prevEl: '.swiper-button-prev-third',
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              loopedSlides: 1,
              spaceBetween: 10
            }
          }
        });

        swiperThird.dataset.mobile = 'true';
      }

      if (window.innerWidth >= 1320) {
        swiperThird.dataset.mobile = 'false';

        if (swiperThird.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
      }
    }

    mobileSlider();

    window.addEventListener('resize', () => {
      mobileSlider();
    });
  }

  if(document.querySelector('.swiper-fourth')) {
    
    const swiperFourth = document.querySelector('.swiper-fourth');
    let mySwiper;

    function mobileSlider() {

      if (window.innerWidth < 1320 && swiperFourth.dataset.mobile == 'false') {
        mySwiper = new Swiper(swiperFourth, {
          spaceBetween: 30,
          slidesPerView: 3,
          loopedSlides: 1,
          autoHeight: true,
          navigation: {
              nextEl: '.swiper-button-next-fourth',
              prevEl: '.swiper-button-prev-fourth',
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              loopedSlides: 1,
              spaceBetween: 10
            }
          }
        });

        swiperFourth.dataset.mobile = 'true';
      }

      if (window.innerWidth >= 1320) {
        swiperFourth.dataset.mobile = 'false';

        if (swiperFourth.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
      }
    }

    mobileSlider();

    window.addEventListener('resize', () => {
      mobileSlider();
    });
  }

  if(document.querySelector('.swiper-fifth')) {
    
    const swiperFifth = document.querySelector('.swiper-fifth');
    let mySwiper;

    function mobileSlider() {

      if (window.innerWidth < 1320 && swiperFifth.dataset.mobile == 'false') {
        mySwiper = new Swiper(swiperFifth, {
          spaceBetween: 30,
          slidesPerView: 3,
          loopedSlides: 1,
          autoHeight: true,
          navigation: {
              nextEl: '.swiper-button-next-fifth',
              prevEl: '.swiper-button-prev-fifth',
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              loopedSlides: 1,
              spaceBetween: 10
            }
          }
        });

        swiperFifth.dataset.mobile = 'true';
      }

      if (window.innerWidth >= 1320) {
        swiperFifth.dataset.mobile = 'false';

        if (swiperFifth.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
      }
    }

    mobileSlider();

    window.addEventListener('resize', () => {
      mobileSlider();
    });
  }

})();