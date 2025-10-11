const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggle.classList.toggle("active");
  menuToggle.innerHTML = navbar.classList.contains("active") ? "✖" : "☰";
});
