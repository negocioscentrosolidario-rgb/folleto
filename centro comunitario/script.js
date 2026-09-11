/* ============================================================
   CENTRO COMUNITARIO - UNIVERSIDAD LA SALLE BAJÍO
   JavaScript del acordeón
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar todas las estructuras de acordeón de la página
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    const items = accordion.querySelectorAll(".service-item");

    function closeItem(item) {
      const trigger = item.querySelector(".accordion-trigger");
      const panel = item.querySelector(".accordion-panel");

      item.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      panel.hidden = true;
    }

    function openItem(item) {
      const trigger = item.querySelector(".accordion-trigger");
      const panel = item.querySelector(".accordion-panel");

      item.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      panel.hidden = false;
    }

    items.forEach((item) => {
      const trigger = item.querySelector(".accordion-trigger");

      trigger.addEventListener("click", () => {
        const isOpen = trigger.getAttribute("aria-expanded") === "true";

        // Mantiene solo un ítem abierto por cada acordeón individual
        items.forEach((otherItem) => {
          if (otherItem !== item) {
            closeItem(otherItem);
          }
        });

        if (isOpen) {
          closeItem(item);
        } else {
          openItem(item);
        }
      });
    });
  });
});
