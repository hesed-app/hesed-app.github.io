document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeBtn = document.getElementById("toggle-theme");
    const body = document.body;
    const icon = document.querySelector(".icon");

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        icon.textContent = "☀️";
        toggleThemeBtn.checked = true;
    }

    toggleThemeBtn.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            icon.textContent = "☀️";
            toggleThemeBtn.checked = true;
        } else {
            localStorage.setItem("theme", "dark");
            icon.textContent = "🌙";
            toggleThemeBtn.checked = false;
        }
    });
});
