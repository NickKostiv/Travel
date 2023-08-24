//====================== Navbar Close Start ========================

const navItems = document.querySelectorAll(".nav-item");
const navbarContent = document.querySelector(".navbar-collapse");
const navbarImg = document.querySelector(".navbar-img");

navItems.forEach((el) => {
  el.addEventListener("click", function () {
    navbarContent.classList.remove("show");
    navbarImg.classList.remove("active");
  });
});

const navbarToggler = document.querySelector(".navbar-toggler");

navbarImg.addEventListener("click", function () {
  navbarImg.classList.toggle("active");
});

// ====================== Help Center Start =======================

let helpBtn = document.getElementById("help-btn");
let closeBtn = document.getElementById("close"); // The close button element
let helpCenter = document.getElementById("help-center");
let helpCenterForm = document.querySelector(".help-center-form");

helpBtn.addEventListener("click", function () {
  helpCenter.classList.toggle("show");
  helpCenterForm.classList.toggle("show-top");
});

closeBtn.addEventListener("click", function () {
  helpCenter.classList.remove("show"); // Hide the help center
  helpCenterForm.classList.remove("show-top"); // Slide the form back down
});

// ====================== Help Center End =======================

//===================== Navbar Close End ==========================
