/* ============================================================
   CENTRO COMUNITARIO - UNIVERSIDAD LA SALLE BAJÍO
   JavaScript del acordeón
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".service-item");

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

      // Solo un apartado permanece abierto a la vez.
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
