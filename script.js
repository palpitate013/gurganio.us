const toggle = document.getElementById("darkModeToggle");

// Load from localStorage if previously set
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
  toggle.textContent = "☀️ Light Mode";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  toggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("dark-mode", isDark);
});
