/*==================== First Slider Start  ====================*/

let swiper = new Swiper(".slider-1", {
  slidesPerView: 2.6,
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    300: {
      spaceBetween: 10,
      slidesPerView: 1.4,
    },
    400: {
      slidesPerView: 1.4,
      spaceBetween: 40,
    },
    700: {
      slidesPerView: 2.6,
    },
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  on: {
    slideChange: function () {
      const activeSlide = this.slides[this.activeIndex];
      if (activeSlide) {
        const imageUrl = activeSlide.querySelector("img").src;
        document.querySelector(".home").style.backgroundImage = `url(${imageUrl})`;
      }
    },
  },
});

/*==================== First Slider End  ====================*/

/*==================== Second Swiper On Landing Page  ====================*/

let secondLandSwiper = new Swiper(".slider-landing", {
  slidesPerView: 5,
  spaceBetween: 50,
  navigation: {
    nextEl: ".button-next-ln",
    prevEl: ".button-prev-ln",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
    }
    ,
    700: {
      slidesPerView: 3
    },
    1000: {
      slidesPerView: 4,
    }
  }
});

/* ==================== Inspired =====================  */

let secondSwiper = new Swiper(".slider-2", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".button-next-test",
    prevEl: ".button-prev-test",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    renderCustom: function (swiper,currentClass, totalClass) {
      return `0${currentClass}/0${totalClass}`;
    },
  },
});

/* ======================  Get Inspired =============== */

let thirdSwiper = new Swiper(".slider-3", {
  slidesPerView: 2,
  draggable: true,
  spaceBetween: 50,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 2
    },
    300: {
      slidesPerView: 1.2
    },
  },
});

/*==================== DestinationSlider Start  ====================*/

let thSwiper = new Swiper(".slider-3", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".mb-next",
    prevEl: ".mb-prev",
  }
});

/*==================== DestinationSlider End ====================*/

/*==================== Testimonials End  ====================*/

let frSwiper = new Swiper(".slider-4", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    500 : {
      slidesPerView: 2.5
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 4
    }
  },
});

/*==================== Testimonials End  ====================*/

// Close Button Hover Search
const handleCardsHover = () => {
  const toursCards = document.querySelectorAll('.tours-card')

  toursCards.forEach(card => {
    const hoverEl = card.querySelector('.hover-search')
    const defaultEl = card.querySelector('.search-default')
    const closeBtn = card.querySelector('.close-button')
  
    card.addEventListener('mouseenter', () => {
      defaultEl.style.opacity = 0
      defaultEl.style.zIndex = 0
      hoverEl.style.opacity = 1
      hoverEl.style.zIndex = 10
    })
  
    card.addEventListener('mouseleave', () => {
      defaultEl.style.opacity = 1
      defaultEl.style.zIndex = 10
      hoverEl.style.opacity = 0
      hoverEl.style.zIndex = 0
    })
  
    closeBtn.addEventListener('click', () => {
      defaultEl.style.opacity = 1
      defaultEl.style.zIndex = 10
      hoverEl.style.opacity = 0
      hoverEl.style.zIndex = 0
    })
  })
}
handleCardsHover()

// Ініціалізуємо ScrollReveal
ScrollReveal().reveal('.home-title', { delay: 400, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.first-slider', { delay: 400, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.location-map-img', { delay: 400, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.home-timeline-wrapp', { delay: 900, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.mobile-map', { delay: 500, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.map-img', { delay: 500, distance: '50px', origin:'left', duration: 1000 });
ScrollReveal().reveal('.map-item', { delay: 300, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.date-wrapp', { delay: 800, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.map-desc', { delay: 1000, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.explore-content', { delay: 800, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.explore-slider-wrapp', { delay: 1200, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.experience-title', { delay: 800, distance: '50px', origin: 'top', duration: 1000 });
ScrollReveal().reveal('.daily-fs-images', { delay: 800, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.daily-sc-images', { delay: 800, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.daily-fs-content', { delay: 800, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.daily-sc-content', { delay: 800, distance: '50px', origin: 'right', duration: 1000 });
ScrollReveal().reveal('.experience-slider', { delay: 1000, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.ds-carousel', { delay: 500, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.tours-card1', { delay: 700, distance: '50px', origin: 'top', duration: 1000 });
ScrollReveal().reveal('.tours-card2', { delay: 900, distance: '50px', origin: 'top', duration: 1000 });
ScrollReveal().reveal('.tours-card3', { delay: 1100, distance: '50px', origin: 'top', duration: 1000 });
ScrollReveal().reveal('.tours-card4', { delay: 1200, distance: '50px', origin: 'top', duration: 1000 });
ScrollReveal().reveal('.tours-card5', { delay: 1300, distance: '50px', origin: 'top', duration: 1000 });
ScrollReveal().reveal('.tours-card6', { delay: 1400, distance: '50px', origin: 'top', duration: 1000 });
ScrollReveal().reveal('.tours-card7', { delay: 1500, distance: '50px', origin: 'top', duration: 1000 });





// Інші налаштування ScrollReveal можна додати тут