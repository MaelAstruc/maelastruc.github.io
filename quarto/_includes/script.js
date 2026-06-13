// =====================
// Theme
// =====================

const savedTheme = localStorage.getItem("theme");
const toggle = document.getElementById("theme-toggle");

function setTheme(toggle) {
    const theme = toggle.checked ? "dark" : "light";
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
}

if (savedTheme) {
    toggle.checked = savedTheme === "dark";
} else {
    toggle.checked = window.matchMedia("(prefers-color-scheme: dark)").matches;
}

setTheme(toggle)

toggle.addEventListener("change", () => { setTheme(toggle) });
