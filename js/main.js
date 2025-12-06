// Globale JavaScript voor de portfolio van Halid Ordu

document.addEventListener('DOMContentLoaded', function () {
  // Jaar in de footer automatisch updaten
  var yearSpan = document.getElementById('y');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Leaflet-kaart initialiseren als het element aanwezig is
  var mapContainer = document.getElementById('map');
  if (mapContainer && typeof L !== 'undefined') {
    // Coördinaten van regio Antwerpen
    var lat = 51.1902;
    var lng = 4.3786;

    var map = L.map('map').setView([lat, lng], 12);

    // OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap-bijdragers'
    }).addTo(map);

    // Marker met popup
    L.marker([lat, lng]).addTo(map)
      .bindPopup('Antwerpen 2020, Kiel')
      .openPopup();
  }
});
