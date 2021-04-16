; (function () {

  const swiper = new Swiper('.swiper-container', {
    loop: true,


    breakpoints: {
      320: {
        //колличество слайдов для показа

      },
      768: {
        //колличество слайдов для показа
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }

    },
  });

})();



// const slides = document.querySelectorAll('.swiper-slide');
// const sliderArrowPrev = document.querySelector('.swiper-button-prev');
// const sliderArrowNext = document.querySelector('.swiper-button-next');

// slides.forEach(item => {
//   item.addEventListener('mouseover', () => {
//     sliderArrowPrev.classList.add('swiper-button--active');
//     sliderArrowNext.classList.add('swiper-button--active');
//   });

//   item.addEventListener('mouseout', () => {
//     sliderArrowPrev.classList.remove('swiper-button--active');
//     sliderArrowNext.classList.remove('swiper-button--active');
//   });
// });