// --------------------------- Generar Mapa --------------------------- //
var mymap = L.map('map').setView([14.076304, -87.206158], 15);

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
    marker = L.marker([lat, long]).addTo(mymap);

}

mymap.on('click', onMapClick);

// --------------------------- Obtener Información --------------------------- //
var companyBranch = {
    name: "",
    direction: "",
    latitud: "",
    longitud: "",
    products: []
}

function ValidateForm() {
    if (ValidateName() == true && ValidateDir() == true && ValidateLatLong() == true) {
        companyBranch.name = document.getElementById('name-branch').value;
        companyBranch.direction = document.getElementById('address-branch').value;
        companyBranch.latitud = lat;
        companyBranch.longitud = long;
        axios({
            method: 'POST',
            url: '../backend/axios/branch.php',
            responseType: 'json',
            data: companyBranch
        }).then(resBranch =>{
            window.location.href = '../profiles/profile-company.php';
        }).catch(error =>{
            console.log(error);
        });
    } else {
        ValidateName();
        ValidateDir();
        ValidateLatLong();
    }
}

function ValidateName() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (symbols.test(document.getElementById('name-branch').value) == true) {
        document.getElementById('name-branch').value = '';
        document.getElementById('name-branch').style.borderColor = 'red';
        document.getElementById('name-branch').placeholder = 'Sólo usar letras y números';
        return false;
    } else if(document.getElementById('name-branch').value == '' || chars.test(document.getElementById('name-branch').value) == false ){
        document.getElementById('name-branch').value = '';
        document.getElementById('name-branch').style.borderColor = 'red';
        document.getElementById('name-branch').placeholder = 'Ingrese un Nombre de Sucursal';
        return false;
    } else {
        document.getElementById('name-branch').style.borderColor = 'grey';
        let upperLastName = document.getElementById('name-branch').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('name-branch').value = upperLastName;
        return true;
    }
    return false;
}

function ValidateDir() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (symbols.test(document.getElementById('address-branch').value) == true) {        
        document.getElementById('address-branch').value = '';
        document.getElementById('address-branch').style.borderColor = 'red';
        document.getElementById('address-branch').placeholder = 'Sólo usar letras y números';
        return false;
    } else if(document.getElementById('address-branch').value == '' || chars.test(document.getElementById('address-branch').value) == false ){
        document.getElementById('address-branch').value = '';
        document.getElementById('address-branch').style.borderColor = 'red';
        document.getElementById('address-branch').placeholder = 'Ingrese la dirección de la sucursal';
        return false;
    } else {
        document.getElementById('address-branch').style.borderColor = 'grey';
        return true;
    }
    return true;
}

function ValidateLatLong() {
    if (lat == null && long == null) {
        document.getElementById('lat-long-alert').innerHTML = `Seleccione en el mapa la ubicación de la sucursal`;
        return false;
    } else {
        document.getElementById('lat-long-alert').innerHTML = ``;
        return true;
    }
}