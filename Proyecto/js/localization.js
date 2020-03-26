var mymap = L.map('map', {
	center: [14.077105, -87.200558],
	zoom: 15
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYmVuZWRldHRvNTk3IiwiYSI6ImNrODN2ZmdtOTFlbm8zZW80d2didThheGkifQ.YvWl88feDhf7yhQdMLSRwA'
}).addTo(mymap);

var lat_lon
var marker

function onMapClick(e) {
    if (marker != undefined) {
        mymap.removeLayer(marker);
    };

    lat = e.latlng.lat;
    lon = e.latlng.lng;  
    marker = L.marker([lat,lon]).addTo(mymap);
    lat_lon = [lat,lon];

}
mymap.on('click', onMapClick);