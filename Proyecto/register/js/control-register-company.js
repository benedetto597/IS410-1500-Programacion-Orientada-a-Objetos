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
var companyUser = {
    firstName: "",
    lastName: "",
    country: "",
    currency: "",
    companyName: "",
    companyDir: "",
    companyLat: "",
    companyLong: "",
    companyPlan: "",
    companyFb: "",
    companyIg: "",
    companyWha: "",
    companyTwit: "",
    logo: "",
    banner: "",
    code: "",
    email: "",
    pass: "",
};


function ValidateForm() {
    let name = ValidateFirstName();
    let lastName = ValidateLastName();
    let country = ValidateCountry();
    let currency = ValidateCurrency();
    let companyName = ValidateCompanyName();
    let companyDir = ValidateCompanyDir();
    let companyLatLong = ValidateCompanyLatLong();
    let companyPlan = ValidateCompanyPlan();
    let companyFb = ValidateCompanyFb();
    let companyIg = ValidateCompanyIg();
    let companyWha = ValidateCompanyWha();
    let companyTwit = ValidateCompanyTwit();
    let code = ValidateCode();
    let email = ValidateEmail();
    let pass = ValidatePassword();
    let passRepeat = ValidatePasswordRepeat();
    let logo = ValidateCompanyLogo();
    let banner = ValidateCompanyBanner();

    if (name == true &&
        lastName == true &&
        country == true &&
        currency == true &&
        email == true &&
        pass == true &&
        passRepeat == true &&
        companyName == true &&
        companyDir == true &&
        companyLatLong == true &&
        companyPlan == true &&
        companyFb == true &&
        companyIg == true &&
        companyWha == true &&
        companyTwit == true &&
        logo == true &&
        banner == true &&
        code == true) {

        companyUser.firstName = document.getElementById('name-company').value;
        companyUser.lastName = document.getElementById('last-name-company').value;
        companyUser.country = document.getElementById('country-select').options[document.getElementById('country-select').selectedIndex].value;
        companyUser.currency = document.getElementById('currency-select').options[document.getElementById('currency-select').selectedIndex].value.slice(2, document.getElementById('currency-select').options[document.getElementById('currency-select').selectedIndex].value.length);
        companyUser.companyName = document.getElementById('name-company').value;
        companyUser.companyDir = document.getElementById('address-company').value;
        companyUser.companyLat = lat;
        companyUser.companyLong = long;
        companyUser.companyPlan = document.getElementById('plan-select').options[document.getElementById('plan-select').selectedIndex].value;
        companyUser.companyFb = document.getElementById('facebook-company').value;
        companyUser.companyIg = document.getElementById('instagram-company').value;
        companyUser.companyWha = document.getElementById('whatsapp-company').value;
        companyUser.companyTwit = document.getElementById('twitter-company').value;
        companyUser.code = parseInt(document.getElementById('number-employed-company').value);
        companyUser.email = document.getElementById('email-employed-company').value;
        companyUser.pass = document.getElementById('password-company-repeat').value;
        companyUser.logo = document.getElementById('logo-file').value;
        companyUser.banner = document.getElementById('banner-file').value;

        console.log(companyUser);
    }
}

var planSelected;

function ValidateFirstName() {
    let letters = /([A-Za-z])\w+/;
    let nums = /([0-9])\w+/;
    if (document.getElementById('name-company').value == '' || nums.test(document.getElementById('name-company').value) == true || letters.test(document.getElementById('name-company').value) == false) {
        document.getElementById('name-alert').innerHTML = `Ingrese nombres que sean valido (sin numeros ni simbolos, sólo letras)`;
        return false;
    } else {
        document.getElementById('name-alert').innerHTML = ``;
        let upperName = document.getElementById('name-company').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('name-company').value = upperName;
        return true;
    }
}

function ValidateLastName() {
    let letters = /([A-Za-z])\w+/;
    let nums = /([0-9])\w+/;
    if (document.getElementById('last-name-company').value == '' || letters.test(document.getElementById('last-name-company').value) == false || nums.test(document.getElementById('last-name-company').value) == true) {
        document.getElementById('last-name-alert').innerHTML = `Ingrese apellidos que sean validos (sin numeros ni simbolos, sólo letras)`;
        return false;
    } else {
        document.getElementById('last-name-alert').innerHTML = ``;
        let upperLastName = document.getElementById('last-name-company').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('last-name-company').value = upperLastName;
        return true;
    }
    return false;
}

function ValidateCompanyName() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('name-company').value == '' || chars.test(document.getElementById('name-company').value) == false || symbols.test(document.getElementById('name-company').value) == true) {
        document.getElementById('name-company-alert').innerHTML = `Ingrese un nombre de sucursal valido (sin simbolos, sólo letras y números)`;
        return false;
    } else {
        document.getElementById('name-company-alert').innerHTML = ``;
        let upperLastName = document.getElementById('name-company').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('name-company').value = upperLastName;
        return true;
    }
    return false;
}

function ValidateCompanyDir() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('address-company').value == '' || chars.test(document.getElementById('address-company').value) == false || symbols.test(document.getElementById('address-company').value) == true) {
        document.getElementById('address-company-alert').innerHTML = `Ingrese la dirección completa del sucursal (sin comas ni puntos)`;
        return false;
    } else {
        document.getElementById('address-company-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidateCountry() {
    let countrySelected = document.getElementById('country-select');
    if (countrySelected.options[countrySelected.selectedIndex].value == 'Seleccione un País') {
        document.getElementById('country-company-alert').innerHTML = `Seleccione un País de los disponibles`;
        return false;
    } else {
        document.getElementById('country-company-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidateCurrency() {
    let countrySelected = document.getElementById('currency-select');
    if (countrySelected.options[countrySelected.selectedIndex].value == 'Seleccione una Moneda') {
        document.getElementById('currency-company-alert').innerHTML = `Seleccione una Moneda de los disponibles`;
        return false;
    } else {
        document.getElementById('currency-company-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidateCompanyPlan() {
    planSelected = document.getElementById('plan-select');
    if (planSelected.options[planSelected.selectedIndex].value == 'Seleccione un Plan') {
        document.getElementById('plan-company-alert').innerHTML = `Seleccione un Plan de los disponibles`;
        return false;
    } else {
        document.getElementById('plan-company-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidateCompanyLogo() {
    //Restringir la ruta
    if (document.getElementById('logo-file').value == '') {
        document.getElementById('logo-alert').innerHTML = `Seleccione una imagen de logo`;
        return false;
    } else {
        document.getElementById('logo-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidateCompanyBanner() {
    //Restringir la ruta
    if (document.getElementById('banner-file').value == '') {
        document.getElementById('banner-alert').innerHTML = `Seleccione una imagen de banner`;
        return false;
    } else {
        document.getElementById('banner-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidateCompanyFb() {
    if (document.getElementById('facebook-company').value == '') {
        document.getElementById('fb-alert').innerHTML = `Pegue la url de su página de Facebook`;
        return false;
    } else {
        document.getElementById('fb-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidateCompanyIg() {
    if (document.getElementById('instagram-company').value == '') {
        document.getElementById('ig-alert').innerHTML = `Pegue la url de su página de Instagram`;
        return false;
    } else {
        document.getElementById('ig-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidateCompanyWha() {
    let structure = /([0-9]{8})/;
    console.log(structure.test(document.getElementById('whatsapp-company').value));
    if (document.getElementById('whatsapp-company').value == '' || structure.test(document.getElementById('whatsapp-company').value) == false) {
        document.getElementById('wha-alert').innerHTML = `Ingrese su número Whatsapp ejem: 99999999`;
        return false;
    } else {
        document.getElementById('wha-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidateCompanyTwit() {
    if (document.getElementById('twitter-company').value == '') {
        document.getElementById('twit-alert').innerHTML = `Pegue la url de su página de Twitter`;
        return false;
    } else {
        document.getElementById('twit-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidateCode() {

    if (planSelected.options[planSelected.selectedIndex].value == 'Seleccione un Plan') {
        document.getElementById('code-alert').innerHTML = `Debe seleccione un Plan para generar el código de Acceso`;
        return false
    } else {
        if (planSelected.options[planSelected.selectedIndex].value == 'Regular') {
            //Dependiendo de cuantas empresas hayan con plan regular se asignara el código ejem 3001, 3002...
            document.getElementById('number-employed-company').value = 3000;
            document.getElementById('code-alert').innerHTML = ``;
            return true;
        }
        if (planSelected.options[planSelected.selectedIndex].value == 'Premium') {
            //Dependiendo de cuantas empresas hayan con plan regular se asignara el código ejem 3001, 3002...
            document.getElementById('number-employed-company').value = 2000;
            document.getElementById('code-alert').innerHTML = ``;
            return true;
        }
        if (planSelected.options[planSelected.selectedIndex].value == 'Premium') {
            //Dependiendo de cuantas empresas hayan con plan regular se asignara el código ejem 3001, 3002...
            document.getElementById('number-employed-company').value = 2000;
            document.getElementById('code-alert').innerHTML = ``;
            return true;
        }

        document.getElementById('code-alert').innerHTML = `Debe seleccione un Plan para generar el código de Acceso`;
        return false;
    }
}

function ValidateEmail() {
    let email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (email.test(document.getElementById('email-employed-company').value) == true) {
        document.getElementById('email-company-alert').innerHTML = ``;
        return true;
    } else {
        document.getElementById('email-company-alert').innerHTML = `Ingrese un correo valido`;
        return false;
    }
}

function ValidatePassword() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('password-company').value == '' || chars.test(document.getElementById('password-company').value) == false || symbols.test(document.getElementById('password-company').value) == true) {
        document.getElementById('pass-company-alert').innerHTML = `Ingrese una contraseña valida (sin simbolos, sólo letras y números)`;
        return false;
    } else {
        document.getElementById('pass-company-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidatePasswordRepeat() {
    if (document.getElementById('password-company').value != document.getElementById('password-company-repeat').value) {
        document.getElementById('pass-repeat-company-alert').innerHTML = `Contraseñas Distintas`;
        document.getElementById('password-company-repeat').style.color = 'red';
        return false;
    } else {
        document.getElementById('password-company-repeat').style.color = 'black';
        document.getElementById('pass-repeat-company-alert').innerHTML = ``;
        return true;
    }
    return true;
}

function ValidateCompanyLatLong() {
    if (lat == null && long == null) {
        document.getElementById('lat-long-company-alert').innerHTML = `Seleccione en el mapa la ubicación de la tienda Principal`;
        return false;
    } else {
        document.getElementById('lat-long-company-alert').innerHTML = ``;
        return true;
    }
}