const html = document.documentElement;
const isSystemInDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

html.classList.toggle(
    "dark",
    localStorage.dark_mode || (!("dark_mode" in localStorage) && isSystemInDarkMode)
);

window.onload = () => {
    const switchDarkModeBtn = document.getElementById("switch_dark_mode");
    
    switchDarkModeBtn.addEventListener("click", () => {
        localStorage.setItem("Dark_mode", !localStorage.theme);
        html.classList.toggle("dark");
    });
};