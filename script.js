document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".food-item img");

  images.forEach(img => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.1)";
      img.style.transition = "0.3s";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });
});