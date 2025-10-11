// Toggle navbar
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("navbar").classList.toggle("active");
});

// Filter berita berdasarkan kategori
const filterButtons = document.querySelectorAll(".filter-btn");
const newsCards = document.querySelectorAll(".news-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    newsCards.forEach(card => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Dummy interaksi share
document.querySelectorAll(".share").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const platform = link.getAttribute("data-platform");
    alert(`Artikel berhasil dibagikan ke ${platform}!`);
  });
});
