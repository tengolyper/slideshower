let images = [];
let currentIndex = 0;
const slide = document.getElementById("slide");
const pageIndicator = document.getElementById("pageIndicator");
const imageUpload = document.getElementById("imageUpload");

imageUpload.addEventListener("change", (event) => {
  const files = Array.from(event.target.files).slice(0, 10); // Limit to 10
  images = files.map(file => URL.createObjectURL(file));
  currentIndex = 0;
  showSlide(currentIndex);
});

function showSlide(index) {
  if (images.length === 0) {
    slide.src = "";
    pageIndicator.textContent = "Page 0 of 0";
    return;
  }
  slide.src = images[index];
  pageIndicator.textContent = `Page ${index + 1} of ${images.length}`;
}

function nextSlide() {
  if (images.length === 0) return;
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

function prevSlide() {
  if (images.length === 0) return;
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}

// ⌨️ Keyboard support
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") nextSlide();
  if (event.key === "ArrowLeft") prevSlide();
});
