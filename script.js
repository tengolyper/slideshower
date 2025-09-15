let images = [];
let currentIndex = 0;
const slide = document.getElementById("slide");
const pageIndicator = document.getElementById("pageIndicator");
const imageUpload = document.getElementById("imageUpload");

// Load uploaded images
imageUpload.addEventListener("change", (event) => {
  const files = Array.from(event.target.files).slice(0, 10); // Limit to 10
  images = files.map(file => URL.createObjectURL(file));
  currentIndex = 0;
  showSlide(currentIndex);
});

// Show image with animation
function showSlide(index, direction = null) {
  if (images.length === 0) {
    slide.src = "";
    pageIndicator.textContent = "Page 0 of 0";
    return;
  }

  // Apply animation class
  if (direction === "left") {
    slide.classList.add("slide-left");
  } else if (direction === "right") {
    slide.classList.add("slide-right");
  }

  // Wait for animation to finish before updating image
  setTimeout(() => {
    slide.src = images[index];
    pageIndicator.textContent = `Page ${index + 1} of ${images.length}`;
    slide.classList.remove("slide-left", "slide-right");
  }, 200); // Match animation duration
}

// Navigation functions
function nextSlide() {
  if (images.length === 0) return;
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex, "left");
}

function prevSlide() {
  if (images.length === 0) return;
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex, "right");
}

// ⌨️ Keyboard support
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") nextSlide();
  if (event.key === "ArrowLeft") prevSlide();
});

// 🖐️ Swipe gesture support
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const distance = touchEndX - touchStartX;

  if (Math.abs(distance) > swipeThreshold) {
    if (distance < 0) {
      nextSlide(); // Swiped left
    } else {
      prevSlide(); // Swiped right
    }
  }
}
