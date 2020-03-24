var places = [
    ["Torre Morazan",14.101202, -87.182246],
    ["Hospital Escuela",14.096210, -87.190303],
    ["Hotel Marriot",14.089406, -87.190225],
    ["PriceMart",14.086822, -87.184021],
    ["Injupemp",14.083893, -87.189184],
    ["Universidad Politecnica de Honduras", 14.076304, -87.208158],
    ["Tu posición",14.077105, -87.200558]
    ];
    
    for (var i = 0; i < places.length; i++) {
        marker = L.marker([places[i][1],places[i][2]])
            .bindPopup(places[i][0])
            .addTo(mymap);
    }