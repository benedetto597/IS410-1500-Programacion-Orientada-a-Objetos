var mapPromo = L.map('map-promotions', {
	center: [14.076304, -87.206158],
	zoom: 15
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYmVuZWRldHRvNTk3IiwiYSI6ImNrODN2ZmdtOTFlbm8zZW80d2didThheGkifQ.YvWl88feDhf7yhQdMLSRwA'
}).addTo(mapPromo);

var lat_lon
var marker

var places = [
    ["Torre Morazan",14.101202, -87.182246],
    ["Hospital Escuela",14.096210, -87.190303],
    ["Hotel Marriot",14.089406, -87.190225],
    ["PriceMart",14.086822, -87.184021],
    ["Injupemp",14.083893, -87.189184],
    ["Tu posición",14.076304, -87.208158]
    ];
    
for (var i = 0; i < places.length; i++) {
    marker = L.marker([places[i][1],places[i][2]])
        .bindPopup(places[i][0])
        .addTo(mapPromo);
}

function onMapClick(e) {
    if (marker != undefined) {
        mapPromo.removeLayer(marker);
    };

    lat = e.latlng.lat;
    lon = e.latlng.lng;  
    marker = L.marker([lat,lon]).addTo(mapPromo);
    return lat_lon = [lat,lon];
}

mapPromo.on('click', onMapClick);

