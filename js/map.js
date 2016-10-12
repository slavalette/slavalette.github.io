var map = null;
window.onload = function() {
  if (document.getElementById('map')) {
    initMap()
    locateUser();
  }
};
function initMap() {
    var options = {
        center: new L.LatLng(46.921982, 2.978952),
        zoom: 5
      };
    var osmUrl = 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
        osmAttribution = 'Map data &copy; 2012 OpenStreetMap contributors',
        osm = new L.TileLayer(osmUrl, {
            maxZoom: 8,
            attribution: osmAttribution
        });
    var mapLayer = new L.TileLayer(osmUrl);
    this.map = new L.Map('map', options).addLayer(mapLayer);
}
function locateUser() {
    fetch('http://api-adresse.data.gouv.fr/search/?q=' + document.getElementById('address').innerHTML)
        .then(function(response) {
            if (response.ok) {
                return (response.json());
            }
        })
        .then(function(json) {
            var place = json.features[0];
            var longitude = place.geometry.coordinates[1]
            var latitude = place.geometry.coordinates[0]
            var yellowIcon = L.icon({
                iconUrl: 'map-marker.png',
                iconSize: [50, 50],
            });
            var marker = L.marker([longitude, latitude], {icon: yellowIcon})
              .addTo(this.map);
            this.map.setView(
              [longitude, latitude],
              zoom = 12.5,
              center = new L.LatLng(longitude, latitude)
            );
        })
        .catch(function(error) {
        });
}
