const burgerEl = document.querySelector(".inner-burger");
const userlogoEL = document.querySelector(".user-logo-frame");
const ufliplogEL = document.querySelector(".uflip-logo-frame");
const burgerFrameEL = document.querySelector(".burger-frame");
const headerEL = document.querySelector(".header");
const navDropBodyEL = document.querySelector(".nav-drop-body-content");
const navContentEL = document.querySelector(".nav-drop-main-content");
const homeEL = document.querySelectorAll(".home");
const homeTextEL = document.querySelectorAll(".home-text");
const homeBoxEL = document.querySelectorAll(".home-text-box");
const homeIconEL = document.querySelectorAll(".home-icon");
const iconEL = document.querySelectorAll(".icon");

burgerEl.addEventListener("click", function () {
  burgerEl.classList.toggle("active");
  userlogoEL.classList.toggle("active");
  ufliplogEL.classList.toggle("active");
  burgerFrameEL.classList.toggle("active");
  headerEL.classList.toggle("active");
  navDropBodyEL.classList.toggle("active");
  navContentEL.classList.toggle("active");

  if (burgerEl.classList.contains("active")) {
    navDropBodyEL.style.height = "auto";
    navDropBodyEL.style.opacity = "1";
    navContentEL.style.height = "auto";
    navContentEL.style.opacity = "1";

    homeEL.forEach(function (element) {
      element.classList.remove("hidden");
    });
    homeTextEL.forEach(function (element) {
      element.classList.remove("hidden");
    });
    homeBoxEL.forEach(function (element) {
      element.classList.remove("hidden");
    });
    homeIconEL.forEach(function (element) {
      element.classList.remove("hidden");
    });
    iconEL.forEach(function (element) {
      element.classList.remove("hidden");
    });
  } else {
    navDropBodyEL.style.height = "0";
    navDropBodyEL.style.opacity = "0";

    homeEL.forEach(function (element) {
      element.classList.add("hidden");
    });
    homeTextEL.forEach(function (element) {
      element.classList.add("hidden");
    });
    homeBoxEL.forEach(function (element) {
      element.classList.add("hidden");
    });
    homeIconEL.forEach(function (element) {
      element.classList.add("hidden");
    });
    iconEL.forEach(function (element) {
      element.classList.add("hidden");
    });
  }
});
