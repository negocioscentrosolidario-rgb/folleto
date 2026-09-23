/* ============================================================
   CENTRO COMUNITARIO - UNIVERSIDAD LA SALLE BAJÍO
   JavaScript: Acordeón + Carrusel
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // ---------------- LÓGICA DE ACORDEÓN ----------------
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

  // ---------------- LÓGICA DEL CARRUSEL ----------------
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-dot");
  const prevBtn = document.querySelector(".carousel-btn--prev");
  const nextBtn = document.querySelector(".carousel-btn--next");

  if (slides.length > 0) {
    let currentIndex = 0;
    let autoPlayTimer = null;

    function goToSlide(index) {
      slides[currentIndex].classList.remove("is-active");
      if (dots[currentIndex]) dots[currentIndex].classList.remove("is-active");

      currentIndex = (index + slides.length) % slides.length;

      slides[currentIndex].classList.add("is-active");
      if (dots[currentIndex]) dots[currentIndex].classList.add("is-active");
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(nextSlide, 4000); // Cambia cada 4 segundos
    }

    function stopAutoPlay() {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        nextSlide();
        startAutoPlay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        prevSlide();
        startAutoPlay();
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        goToSlide(idx);
        startAutoPlay();
      });
    });

    // Pausar auto-play cuando el usuario coloca el cursor encima
    const carouselContainer = document.querySelector(".carousel-container");
    if (carouselContainer) {
      carouselContainer.addEventListener("mouseenter", stopAutoPlay);
      carouselContainer.addEventListener("mouseleave", startAutoPlay);
    }

    // Iniciar auto-play
    startAutoPlay();
  }
});
