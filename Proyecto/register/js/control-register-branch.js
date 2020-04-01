// --------------------------- Generar Mapa --------------------------- //
var mymap = L.map('map').setView([14.076304, -87.206158],15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYmVuZWRldHRvNTk3IiwiYSI6ImNrODN2ZmdtOTFlbm8zZW80d2didThheGkifQ.YvWl88feDhf7yhQdMLSRwA'
}).addTo(mymap);

var lat;
var long;
var marker;

function onMapClick(e) {
    if (marker != undefined) {
        mymap.removeLayer(marker);
    };

    lat = e.latlng.lat;
    long = e.latlng.lng;  
    marker = L.marker([lat,long]).addTo(mymap);
    
}

mymap.on('click', onMapClick);

// --------------------------- Obtener Información --------------------------- //
var companyBranch = {
    name:"",
    direction:"",
    latitud:"",
    longitud:""
}

function ValidateForm(){
    if(ValidateName() == true && ValidateDir() == true && ValidateLatLong() == true){
        companyBranch.name = document.getElementById('name-branch').value;
        companyBranch.direction = document.getElementById('address-branch').value;
        companyBranch.latitud = lat;
        companyBranch.longitud = long;
    }else{
        ValidateName();
        ValidateDir();
        ValidateLatLong();
    }
}

function ValidateName(){
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
        if(document.getElementById('name-branch').value == '' || chars.test(document.getElementById('name-branch').value) == false || symbols.test(document.getElementById('name-branch').value) == true){
            document.getElementById('name-alert').innerHTML = `Ingrese un nombre de sucursal valido (sin simbolos, sólo letras y números)`;
            return false;   
        }else{
        document.getElementById('name-alert').innerHTML = ``;
        let upperLastName = document.getElementById('name-branch').value.replace(/\b[a-z]/g,upper=>upper.toUpperCase());
        document.getElementById('name-branch').value = upperLastName;
        return true;
    }
    return true;
}

function ValidateDir(){
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
        if(document.getElementById('address-branch').value == '' || chars.test(document.getElementById('address-branch').value) == false || symbols.test(document.getElementById('address-branch').value) == true){
            document.getElementById('address-alert').innerHTML = `Ingrese la dirección completa del sucursal (sin comas ni puntos)`;
            return false;   
        }else{
        document.getElementById('address-alert').innerHTML = ``;
        return true;
    }
    return true;
}

function ValidateLatLong(){
    if(lat == null && long == null){
        document.getElementById('lat-long-alert').innerHTML = `Seleccione en el mapa la ubicación de la sucursal`;
        return false;
    }else{
        document.getElementById('lat-long-alert').innerHTML = ``;
        return true;
    }
}