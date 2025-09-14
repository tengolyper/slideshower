const images = [
  "slideshower/images/image1.png",
  "slideshower/images/image2.png",
  "slideshower/images/image3.png"
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
