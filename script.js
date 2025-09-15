const images = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png"
];

let currentIndex = 0;
const slide = document.getElementById("slide");

function showSlide(index) {
  slide.src = images[index];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}

// ⌨️ Keyboard arrow support
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextSlide();
  } else if (event.key === "ArrowLeft") {
    prevSlide();
  }
});
