const kunTunBtn = document.getElementById("btn");
const kunBtn = document.getElementsByClassName("sun");
const tunBtn = document.getElementsByClassName("moon");


// claslarni chaqirish




let S = 1;

kunTunBtn.addEventListener("click", () => {
    if (S % 2 == 0) {
        Array.from(kunBtn).forEach(el => el.style.display = "block");
        Array.from(tunBtn).forEach(el => el.style.display = "none");
        kungaOzgarish();
    } else {
        Array.from(kunBtn).forEach(el => el.style.display = "none");
        Array.from(tunBtn).forEach(el => el.style.display = "block");
        tungaOzgarish();
    }
    S++;
});


// let isDay = true;
// function kungaOzgarish() {
//     document.querySelectorAll("*").forEach(el => {
//         const bgColor = window.getComputedStyle(el).backgroundColor;
//         const color = window.getComputedStyle(el).color;


//         if (bgColor === "rgb(255, 255, 255)") {
//             el.style.backgroundColor = "#000";
//         }

//         if (bgColor === "rgb(255, 255, 255)") {
//             el.style.backgroundColor = "#000";
//         } 
        

//         if (color === "rgb(255, 255, 255)") {
//             el.style.color = "#000";
//         } else if (color === "rgb(0, 0, 0)") {
//             el.style.color = "#fff";
//         }
//     });

//     isDay = !isDay;
// }
// function tungaOzgarish() {

// }

