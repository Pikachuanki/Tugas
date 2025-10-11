// Inisialisasi peta
var map = L.map('map').setView([-7.9, 113.8], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var polygonLayer;

// Fungsi pencarian wilayah
document.getElementById("btn").addEventListener("click", async () => {
  var query = document.getElementById("search").value.trim();
  if (!query) return alert("Masukkan nama daerah dulu!");

  const url = `https://nominatim.openstreetmap.org/search?format=json&polygon_geojson=1&q=${encodeURIComponent(query)}`;

  try {
    const res = await fetch(url, { headers: { 'Accept-Language': 'id' } });
    const data = await res.json();

    if (data.length === 0) {
      alert("Wilayah tidak ditemukan.");
      return;
    }

    const place = data[0];

    // Hapus polygon lama kalau ada
    if (polygonLayer) map.removeLayer(polygonLayer);

    // Kalau ada polygon
    if (place.geojson && place.geojson.type) {
      polygonLayer = L.geoJSON(place.geojson, {
        color: "red",
        weight: 2
      }).addTo(map);
      map.fitBounds(polygonLayer.getBounds());
    } else {
      map.setView([place.lat, place.lon], 12);
      alert("Wilayah ditemukan tapi tanpa batas polygon.");
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
    alert("Gagal mengambil data dari Nominatim.");
  }
});
