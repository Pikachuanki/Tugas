// === Foto Slider Auto ===
let photoIndex = 0;
function showPhotos() {
  const wrapper = document.getElementById("photoWrapper");
  const totalPhotos = wrapper.children.length;
  photoIndex++;
  if (photoIndex >= totalPhotos) photoIndex = 0;
  wrapper.style.transform = `translateX(-${photoIndex * 100}%)`;
}
setInterval(showPhotos, 4000); // 4 detik ganti foto

// === Team Slider Manual ===
let currentIndex = 0;
function moveSlide(direction) {
  const wrapper = document.getElementById("teamWrapper");
  const totalCards = wrapper.children.length;
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = totalCards - 1;
  if (currentIndex >= totalCards) currentIndex = 0;
  wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}
