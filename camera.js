document.addEventListener("DOMContentLoaded", () => {
    const slots = document.querySelectorAll(".slot");
  
    slots.forEach(slot => {
      const hoverEnabled = slot.getAttribute("data-hover") === "true";
      const imageSlot = slot.querySelector(".image-slot");
  
      if (!hoverEnabled) {
        imageSlot.classList.add("no-hover");
      }
    });
  });
  