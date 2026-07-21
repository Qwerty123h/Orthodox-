/* Ортодонтическое пособие — интерактив */
(function () {
  "use strict";
  var body = document.body;

  // Мобильное меню
  var burger = document.querySelector("[data-burger]");
  if (burger) burger.addEventListener("click", function () { body.classList.toggle("nav-open"); });
  document.querySelectorAll(".nav-menu a").forEach(function (a) {
    a.addEventListener("click", function () { body.classList.remove("nav-open"); });
  });

  // Появление секций при прокрутке
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }
})();
