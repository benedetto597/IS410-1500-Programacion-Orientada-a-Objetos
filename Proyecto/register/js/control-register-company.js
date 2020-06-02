// --------------------------- Generar Mapa --------------------------- //
var lat;
var long;
var marker;

var map = L.map('map');
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
function buscarLocalizacion(e) {
    lat = e.latlng.lat;
    long = e.latlng.lng
   marker = L.marker(e.latlng).addTo(map);
}

function errorLocalizacion(e) {
   alert("No es posible encontrar su ubicación. Es posible que tenga que activar la geolocalización.");
}

map.on('locationerror', errorLocalizacion);
map.on('locationfound', buscarLocalizacion);

map.locate({setView: true, maxZoom:12});


function onMapClick(e) {
    if (marker != undefined) {
        map.removeLayer(marker);
    };

    lat = e.latlng.lat;
    long = e.latlng.lng;
    marker = L.marker([lat, long]).addTo(map);

}

map.on('click', onMapClick);

// --------------------------- Obtener Información --------------------------- //

$(".loader-wrapper").fadeOut("slow");
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
    branches: []
};

var companyBranch = {
    Sucursal: "Principal",
    nombreSucursal: "",
    direccionSucursal: "",
    latitudSucursal: "",
    longitudSucursal: ""
}

var name;
var lastName;
var country;
var currency;
var companyName;
var companyDir;
var companyLatLong;
var companyPlan;
var companyFb;
var companyIg;
var companyWha;
var companyTwit;
var code;
var email;
var pass;
var passRepeat;
var companies;

axios({
    method: 'GET',
    url: '../backend/axios/companies.php?all',
    responseType: 'json',
}).then(resCompany =>{
    companies = resCompany.data;
}).catch(error =>{
    console.log(error);
});

function updateInfo(){
    $(".loader-wrapper").fadeIn("slow");
    name = ValidateFirstName();
    lastName = ValidateLastName();
    country = ValidateCountry();
    currency = ValidateCurrency();
    companyName = ValidateCompanyName();
    companyDir = ValidateCompanyDir();
    companyLatLong = ValidateCompanyLatLong();
    companyPlan = ValidateCompanyPlan();
    companyFb = ValidateCompanyFb();
    companyIg = ValidateCompanyIg();
    companyWha = ValidateCompanyWha();
    companyTwit = ValidateCompanyTwit();
    code = ValidateCode();
    email = ValidateEmail();
    pass = ValidatePassword();
    passRepeat = ValidatePasswordRepeat();
    
    if (name &&
        lastName &&
        country &&
        currency &&
        email &&
        pass &&
        passRepeat &&
        companyName &&
        companyDir &&
        companyLatLong &&
        companyPlan &&
        companyFb &&
        companyIg &&
        companyWha &&
        companyTwit &&
        code 
        ) { 
            uploadImageProfile();
            uploadImageBanner(); 
            
        let timer = setInterval(update, 4000);
        function update(){
            pp = ValidateCompanyLogo();
            banner = ValidateCompanyBanner();   
            if(pp == true &&
                banner == true){

                companyUser.firstName = document.getElementById('first-name-company').value;
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
                companyBranch.nombreSucursal = companyUser.companyName;
                companyBranch.direccionSucursal = companyUser.companyDir;
                companyBranch.latitudSucursal = companyUser.companyLat;
                companyBranch.longitudSucursal = companyUser.companyLong;
                companyUser.branches.push(companyBranch);
                
                axios({
                    method: 'POST',
                    url: '../backend/axios/companies.php',
                    responseType: 'json',
                    data: companyUser
                }).then(resCompany =>{
                    clearInterval(timer);
                    $(".loader-wrapper").fadeOut("slow");
                    document.getElementById('form-company').innerHTML =
                    `<div class="form-row align-items-center">
                        <div class="col-auto mr-auto ml-auto">
                            <h4>Empresa</h4>
                            <img id="check" class="img-responsive"
                            src="../img/icon/check.png"><br>
                        </div>
                        <b class="mr-auto ml-auto">Se ha envíado un correo con toda la información para poder iniciar seción</b>  
                    </div>
                    `;
                }).catch(error =>{
                    clearInterval(timer);
                    console.log(error);
                });
                
                let end = setInterval(endPage, 6000);
                function endPage(){
                    clearInterval(end);
                    window.location.href = '../index.html';
                }
                }
            }    
    }else{
        $(".loader-wrapper").fadeOut("slow");
    }
}


var planSelected;

function ValidateCompanyLogo() {
    if (document.getElementById('pp-url').innerHTML != '') {
        companyUser.logo = document.getElementById('pp-url').innerHTML;
        return true;
    }
    return false;
}

function ValidateCompanyBanner() {
    if (document.getElementById('banner-url').innerHTML != '') {
        companyUser.banner = document.getElementById('banner-url').innerHTML;
        return true;
    }
    return false;
}

function ValidateFirstName() {
    let nums = /([0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
        if (nums.test(document.getElementById('first-name-company').value) == true || symbols.test(document.getElementById('first-name-company').value) == true) {
        document.getElementById('first-name-company').value = '';
        document.getElementById('first-name-company').style.borderColor = 'red';
        document.getElementById('first-name-company').placeholder = 'No usar ni simbolos ni números';
        return false;
    } else if(document.getElementById('first-name-company').value == ''){
        document.getElementById('first-name-company').value = '';
        document.getElementById('first-name-company').style.borderColor = 'red';
        document.getElementById('first-name-company').placeholder = 'Ingrese al menos un nombre';
        return false;
    }else{
        document.getElementById('first-name-company').style.borderColor = 'grey';
        let upperName = document.getElementById('first-name-company').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('first-name-company').value = upperName;
        return true;
        
    }
}

function ValidateLastName() {
    let nums = /([0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if ( nums.test(document.getElementById('last-name-company').value) == true || symbols.test(document.getElementById('last-name-company').value) == true) {
        document.getElementById('last-name-company').value = '';
        document.getElementById('last-name-company').style.borderColor = 'red';
        document.getElementById('last-name-company').placeholder = 'No usar ni simbolos ni números';
        return false;
    } else if(document.getElementById('last-name-company').value == ''){
        document.getElementById('last-name-company').value = '';
        document.getElementById('last-name-company').style.borderColor = 'red';
        document.getElementById('last-name-company').placeholder = 'Ingrese al menos un apellido';
        return false;
    } else{
        document.getElementById('last-name-company').style.borderColor = 'grey';
        let upperLastName = document.getElementById('last-name-company').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('last-name-company').value = upperLastName;
        return true;

    }
}

function ValidateCompanyName() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
        if (symbols.test(document.getElementById('name-company').value) == true) {
        document.getElementById('name-company').value = '';
        document.getElementById('name-company').style.borderColor = 'red';
        document.getElementById('name-company').placeholder = 'Solo usar letras y números';
        return false;
    } else if(document.getElementById('name-company').value == '' || chars.test(document.getElementById('name-company').value) == false){
        document.getElementById('name-company').value = '';
        document.getElementById('name-company').style.borderColor = 'red';
        document.getElementById('name-company').placeholder = 'Ingrese el nombre de la compañia';
        return false;
    } else{
        document.getElementById('name-company').style.borderColor = 'grey';
        let upperLastName = document.getElementById('name-company').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('name-company').value = upperLastName;
        return true;
        
    }
}

function ValidateCompanyDir() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (chars.test(document.getElementById('address-company').value) == false || symbols.test(document.getElementById('address-company').value) == true) {
        document.getElementById('address-company').value = '';
        document.getElementById('address-company').style.borderColor = 'red';
        document.getElementById('address-company').placeholder = 'Solo usar letras y números';
        return false;
    } else if (document.getElementById('address-company').value == '') {
        document.getElementById('address-company').value = '';
        document.getElementById('address-company').style.borderColor = 'red';
        document.getElementById('address-company').placeholder = 'Ingrese una dirección';
        return false;
    } else {
        document.getElementById('address-company').style.borderColor = 'grey';
        return true;

    }
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
}

function ValidateCompanyPlan() {
    planSelected = document.getElementById('plan-select');
    if (planSelected.options[planSelected.selectedIndex].value == 'Seleccione un Plan') {
        document.getElementById('plan-company-alert').innerHTML = `Seleccione un Plan de los disponibles`;
        return false;
    } else {
        //document.getElementById('plan-company-alert').innerHTML = ``;
        return true;
    }
}

function ValidateCompanyFb() {
    if (document.getElementById('facebook-company').value == '') {
        document.getElementById('facebook-company').value = '';
        document.getElementById('facebook-company').style.borderColor = 'red';
        document.getElementById('facebook-company').placeholder = 'Pegue url de su página de Facebook';
        return false;
    } else {
        document.getElementById('facebook-company').style.borderColor = 'grey';
        return true;
    }
}

function ValidateCompanyIg() {
    if (document.getElementById('instagram-company').value == '') {
        document.getElementById('instagram-company').value = '';
        document.getElementById('instagram-company').style.borderColor = 'red';
        document.getElementById('instagram-company').placeholder = 'Pegue url de su página de Instagram';
        return false;
    } else {
        document.getElementById('instagram-company').style.borderColor = 'grey';
        return true;
    }
}

function ValidateCompanyWha() {
    let chars = /([A-Za-z])\w+/;
    let structure = /([0-9]{8})/;
    if (document.getElementById('whatsapp-company').value == '' || structure.test(document.getElementById('whatsapp-company').value) == false || chars.test(document.getElementById('whatsapp-company').value) == true) {
        document.getElementById('whatsapp-company').value = '';
        document.getElementById('whatsapp-company').style.borderColor = 'red';
        document.getElementById('whatsapp-company').placeholder = 'Ingrese WhatsApp: 99839932';
        return false;
    } else {
        document.getElementById('whatsapp-company').style.borderColor = 'grey';
        return true;
    }
}

function ValidateCompanyTwit() {
    if (document.getElementById('twitter-company').value == '') {
        document.getElementById('twitter-company').value = '';
        document.getElementById('twitter-company').style.borderColor = 'red';
        document.getElementById('twitter-company').placeholder = 'Pegue url de su perfil de Twitter';
        return false;
    } else {
        document.getElementById('twitter-company').style.borderColor = 'grey';
        return true;
    }
}

function ValidateCode() {
    planSelected = document.getElementById('plan-select');

    if (planSelected.options[planSelected.selectedIndex].value == 'Seleccione un Plan') {
        document.getElementById('number-employed-company').value = '';
        document.getElementById('number-employed-company').style.borderColor = 'red';
        document.getElementById('number-employed-company').placeholder = 'Seleccione un Plan';
        return false
    } else {
        
            let values = Object.values(companies);
            let regular = 0;
            let premium = 0;
            let platinum = 0;
            for(let i = 0; i<values.length; i++){
                if(values[i].plan == 'Regular'){
                    regular++;
                }
                if(values[i].plan == 'Premium'){
                    premium++;
                }
                if(values[i].plan == 'Platinum'){
                    platinum++;
                }
            }
            if (planSelected.options[planSelected.selectedIndex].value == 'Regular') {
                //Dependiendo de cuantas empresas hayan con plan regular se asignara el código ejem 3001, 3002...
                
                document.getElementById('number-employed-company').value = 3000 + regular +1;
                return true;
            }
            if (planSelected.options[planSelected.selectedIndex].value == 'Premium') {
                //Dependiendo de cuantas empresas hayan con plan regular se asignara el código ejem 3001, 3002...
                document.getElementById('number-employed-company').value = 2000 + premium + 1;
                return true;
            }
            if (planSelected.options[planSelected.selectedIndex].value == 'Platinum') {
                //Dependiendo de cuantas empresas hayan con plan regular se asignara el código ejem 3001, 3002...
                document.getElementById('number-employed-company').value =1000 + platinum  +1 ;
                return true;
            }
            return false;
        
    }
}

function ValidateEmail() {
    let email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (email.test(document.getElementById('email-employed-company').value) == false || email.test(document.getElementById('email-employed-company').value) == '') {
        document.getElementById('email-employed-company').value = '';
        document.getElementById('email-employed-company').style.borderColor = 'red';
        document.getElementById('email-employed-company').placeholder = 'Ingrese un correo Valido';
        return false;
    } else {
        document.getElementById('email-employed-company').style.borderColor = 'grey';
        return true;
    }
}

function ValidatePassword() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('password-company').value == '' || chars.test(document.getElementById('password-company').value) == false || symbols.test(document.getElementById('password-company').value) == true) {
        document.getElementById('password-company').value = '';
        document.getElementById('password-company').style.borderColor = 'red';
        document.getElementById('password-company').placeholder = 'Solo usar letras y números';
        return false;
    } else {
        document.getElementById('password-company').style.borderColor = 'grey';
        return true;
    }
}

function ValidatePasswordRepeat() {
    if (document.getElementById('password-company').value != document.getElementById('password-company-repeat').value) {
        document.getElementById('pass-repeat-company-alert').innerHTML = `Contraseñas Distintas`;
        document.getElementById('password-company-repeat').style.color = 'red';
        return false;
    } else {
        document.getElementById('pass-repeat-company-alert').innerHTML = ``;
        document.getElementById('password-company-repeat').style.color = 'black';
        return true;
    }
    return true;
}

function ValidateCompanyLatLong() {
    if (lat == '' && long == '') {
        document.getElementById('lat-long-company-alert').innerHTML = `Seleccione en el mapa la ubicación de la tienda Principal`;
        return false;
    } else {
        
        document.getElementById('lat-long-company-alert').innerHTML = ``;
        return true;
    }
}