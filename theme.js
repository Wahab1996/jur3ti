// Apply saved theme on page load
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  const btn = document.getElementById("toggle-mode");
  if (btn) btn.textContent = "🌞";
}

// Toggle theme function
const toggleBtn = document.getElementById("toggle-mode");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      toggleBtn.textContent = "🌞";
      localStorage.setItem("theme", "dark");
    }
  });
}
