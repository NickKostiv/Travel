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
      const imageUrl = activeSlide.querySelector("img").src;
      document.querySelector(".home").style.backgroundImage = `url(${imageUrl})`;
    },
  },
});

/*==================== First Slider End  ====================*/

// ====================== Help Center Start =======================

let helpBtn = document.getElementById("help-btn");
let helpCenter = document.getElementById("help-center");
let helpCenterForm = document.querySelector(".help-center-form");

helpBtn.addEventListener("click", function () {
  helpCenter.classList.toggle("show");
  helpCenterForm.classList.toggle("show-top");
});

// ====================== Help Center End =======================

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