 var map = L.map('map-basic')
    .setView([38.9, 121.6], 13)
    .addLayer(L.mapbox.tileLayer('examples.map-20v6611k', {
        detectRetina: true
    }));
map.addControl(L.mapbox.geocoderControl('examples.map-y7l23tes'));

var markers = L.markerClusterGroup();
for (var i = 0; i < rooms.length; i++) {
	var a = rooms[i];
	var lat = parseFloat(a.lat);
    var lon = parseFloat(a.lon);
    var title = a.price;
	var marker = L.marker(new L.LatLng(lon, lat), {icon: L.mapbox.marker.icon({'marker-symbol': 'star-stroked', 'marker-color': '#FE9A2E'}), title: title });
	marker.bindPopup(title);
	markers.addLayer(marker);
}
map.addLayer(markers);
