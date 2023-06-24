// ====================== Help Center Start =======================

let helpBtn = document.getElementById("help-btn");
let helpCenter = document.getElementById("help-center");
let helpCenterForm = document.querySelector(".help-center-form");

helpBtn.addEventListener("click", function () {
  helpCenter.classList.toggle("show");
  helpCenterForm.classList.toggle("show-top");
});

// ====================== Help Center End =======================

