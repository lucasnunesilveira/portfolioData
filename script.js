const slide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-img");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let index = 0;

function updateCarousel() {
  const width = images[0].clientWidth;
  slide.style.transform = `translateX(${-index * width}px)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.textContent = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
