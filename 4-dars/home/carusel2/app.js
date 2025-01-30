let index = 0;
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth;

// Karuselni ko'rsatish funksiyasi
function showSlide() {
    track.style.transform = `translateX(${-index * slideWidth}px)`;
}

// Oldinga o'tish funksiyasi
function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide();
}

// Orqaga o'tish funksiyasi
function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide();
}

// Har 2 soniyada avtomatik o'tish
setInterval(nextSlide, 2000);
