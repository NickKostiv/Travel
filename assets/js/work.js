// ====================== Help Center Start =======================

let helpBtn = document.getElementById("help-btn");
let helpCenter = document.getElementById("help-center");
let helpCenterForm = document.querySelector(".help-center-form");

helpBtn.addEventListener("click", function () {
  helpCenter.classList.toggle("show");
  helpCenterForm.classList.toggle("show-top");
});

// ====================== Help Center End =======================

// Ініціалізуємо ScrollReveal
ScrollReveal().reveal('.landing-content', { delay: 200, distance: '50px', origin: 'bottom', duration: 1000 });
ScrollReveal().reveal('.title-section', { delay: 400, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.your-trip-text', { delay: 700, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.daily', { delay: 400, distance: '50px', origin: 'left', duration: 1000 });
ScrollReveal().reveal('.number', { delay: 400, distance: '50px', origin: 'bottom', duration: 1000 });
ScrollReveal().reveal('.daily-fs', { delay: 500, distance: '50px', origin: 'bottom', duration: 1000 });
ScrollReveal().reveal('.daily-sc', { delay: 500, distance: '50px', origin: 'bottom', duration: 1000 });
ScrollReveal().reveal('.daily-fs-images', { delay: 200, distance: '50px', origin: 'bottom', duration: 1000 });
ScrollReveal().reveal('.daily-sc-images', { delay: 200, distance: '50px', origin: 'bottom', duration: 1000 });
ScrollReveal().reveal('.daily-fs-content', { delay: 400, distance: '50px', origin: 'bottom', duration: 1000 });
ScrollReveal().reveal('.daily-sc-content', { delay: 400, distance: '50px', origin: 'bottom', duration: 1000 });

// Інші налаштування ScrollReveal можна додати тут
