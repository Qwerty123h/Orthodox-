/* Ортодонтическое пособие — интерактив */
(function () {
  "use strict";

  // Мобильное меню
  var body = document.body;
  var burger = document.querySelector("[data-burger]");
  var scrim = document.querySelector(".scrim");
  function closeNav() { body.classList.remove("nav-open"); }
  if (burger) burger.addEventListener("click", function () { body.classList.toggle("nav-open"); });
  if (scrim) scrim.addEventListener("click", closeNav);
  document.querySelectorAll(".sidebar .nav a").forEach(function (a) {
    a.addEventListener("click", closeNav);
  });

  // Появление секций при прокрутке
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }
})();
