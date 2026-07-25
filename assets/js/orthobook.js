/* ORTHOBOOK — аккордеоны (колонки хаба и плитки галереи) */
(function () {
  "use strict";
  // Раскрытие по клику: элемент получает .open, соседи в той же группе теряют.
  function bindAccordion(selector) {
    var items = Array.prototype.slice.call(document.querySelectorAll(selector));
    items.forEach(function (el) {
      el.addEventListener("click", function (e) {
        // ссылки/кнопки внутри раскрытого блока работают как обычно
        if (el.classList.contains("open") && e.target.closest("a")) return;
        items.forEach(function (o) { o.classList.remove("open"); });
        el.classList.add("open");
      });
    });
  }
  bindAccordion("[data-col]");
  bindAccordion("[data-tile]");
})();
