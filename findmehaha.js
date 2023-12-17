document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    var map = L.map('map').setView([0, 0], 2); // Default view

    // Add a basemap (you can replace this with your preferred basemap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add geolocation control to the map
    L.control.locate().addTo(map);

    // Listen for locationfound event
    map.on('locationfound', onLocationFound);

    // Handle location found
    function onLocationFound(e) {
        var radius = e.accuracy / 2;

        // Add a marker at the found location
        L.marker(e.latlng).addTo(map)
            .bindPopup("You are within " + radius + " meters from this point").openPopup();

        // Add a circle to represent the accuracy of the location
        L.circle(e.latlng, radius).addTo(map);
    }
});
