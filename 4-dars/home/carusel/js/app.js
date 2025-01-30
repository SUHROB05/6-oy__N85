let index = 0;
const carousel = document.getElementById("carusel1");
// const a1 = document.getElementById("a1");
// const a2 = document.getElementById("a2");
// const a3 = document.getElementById("a3");
// const c1 = document.getElementById("c1");
// const c2 = document.getElementById("c2");

// a1.addEventListener("click", ()=>{
//     c1.style.display = "block";
//     a1.style.backgroundColor = "blue"
//     a2.style.backgroundColor = "black"
//     a3.style.backgroundColor = "black"
//     c2.style.display = "none";
//     // c3.style.display = "none";
// });
// a2.addEventListener("click", ()=>{
//     c2.style.display = "block";
//     a2.style.backgroundColor = "blue"
//     a1.style.backgroundColor = "black"
//     a3.style.backgroundColor = "black"
//     c1.style.display = "none";
//     // c3.style.display = "none";
// })




function showSlide() {
    carousel.style.transform = `translateX(${-index * 700}px)`;
}
function nextSlide() {
    index = (index + 1) % 5;
    showSlide();
}
function prevSlide() {
    index = (index - 1 + 5) % 5;
    showSlide();
}
setInterval(nextSlide, 3000);



// let index2 = 0;
// const carousel2 = document.getElementById("carusel2");

// function showSlide2() {
//     carousel2.style.transform = `translateX(${-index2 * 700}px)`;
// }
// function nextSlide2() {
//     index2 = (index2 + 1) % 5;
//     showSlide2();
// }
// function prevSlide2() {
//     index2 = (index2 - 1 + 5) % 5;
//     showSlide2();
// }




