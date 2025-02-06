const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

function applyTheme() {
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        body.classList.remove("dark-mode");
        toggleBtn.textContent = "🌙 Dark Mode";
    }
}

toggleBtn.addEventListener("click", () => {
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "light" : "dark");
    applyTheme();
});

applyTheme();
