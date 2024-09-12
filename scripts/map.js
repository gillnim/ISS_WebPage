class Map {
    constructor(elementId) {
      this.elementId = elementId;
      this.map = null;
    }
  
    initMap() {
      this.map = L.map(this.elementId).setView([0, 0], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    }
}

const mapElementId = 'map'; 
const map = new Map(mapElementId);

map.initMap();

// Add the ISS marker and update functionality
const issIcon = L.icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg',
  iconSize: [50, 32],
  iconAnchor: [25, 16] // Centers the icon on the ISS's location
});

const issMarker = L.marker([0, 0], { icon: issIcon }).addTo(map.map);

// Function to fetch ISS location
async function fetchISSLocation() {
    const url = 'http://api.open-notify.org/iss-now.json';
    const response = await fetch(url);
    const data = await response.json();
    const { latitude, longitude } = data.iss_position;
    return { lat: latitude, lng: longitude };
}

// Function to update the ISS marker on the map
async function updateISSLocation() {
    const { lat, lng } = await fetchISSLocation();
    issMarker.setLatLng([lat, lng]);
    map.setView([lat, lng], map.getZoom());
}

// Initial call to set the ISS location
updateISSLocation();

// Update the ISS location every 5 seconds
setInterval(updateISSLocation, 5000);