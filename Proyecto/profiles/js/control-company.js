// --------------------------------- Barras de Navegacion ---------------------------------
//Logo
document.getElementById('logo').innerHTML = `<img id="Mini-Mall-mainlogo" class="img-responsive" src="../img/icon/MiniMall.png">`;

//Dropdown de Empresa

document.getElementById('Empresa').innerHTML = `<a class="nav-link" href="../register/register-product.php">
<h6 class="text-dark"><i class="fas fa-plus fa-fw"></i>Producto</h6>
</a>`;
document.getElementById('Promociones').style = 'visibility: hidden';
document.getElementById('branch').innerHTML = `<a class="nav-link" href="../register/register-branch.php">
    <h6 class="text-dark"><i class="fas fa-plus fa-fw"></i>Sucursal</h6>
    </a>
    `;

//Obtener la información por petición en formato JSON fragmentar los JSON dependiendo como gestione la base de datos
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
    branch: []
};

// --------------------------- Estadisticas --------------------------- //
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var week = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
var day = new Date();

new Chart(document.getElementById("bar-chart-horizontal-day"), {
    type: 'horizontalBar',
    data: {
        // Aquí deben ir los productos que tengán más ventas
        labels: ["Mascarilla", "Jabón liquido", "Pasta de Dientes", "Papel Higienico", "Arroz Blanco"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#008f39 ", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9"],
            //Cantidad de los productos vendidos
            data: [4478, 3267, 2734, 3784, 2433]
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: `Productos más vendidos Hoy ${week[day.getDay()] + ", " + day.getDate() + " de " + months[day.getMonth()] + " de " + day.getFullYear()}`
        }
    }
});

new Chart(document.getElementById("bar-chart-horizontal-month"), {
    type: 'horizontalBar',
    data: {
        // Aquí deben ir los productos que tengán más ventas en todo el mes
        labels: ["Mascarilla", "Jabón liquido", "Pasta de Dientes", "Papel Higienico", "Arroz Blanco"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#008f39 ", "#c45850", "#8e5ea2", "#3cba9f", "#e8c3b9"],
            //Cantidad de los productos vendidos
            data: [4478, 3267, 2734, 3784, 2433]
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: `Productos más vendidos del mes ${months[day.getMonth()] + " de " + day.getFullYear()}`
        }
    }
});

// ------------------------- Mapa de sucursales con promoción y de Actualizar Perfil ------------------------- //
var mapPromo = L.map('map-promotions').setView([14.076304, -87.206158], 11);
var mapForm = L.map('map-update').setView([14.076304, -87.206158], 11);
//Aquí las sucursales
var places = [
    ["Torre Morazan", 14.101202, -87.182246],
    ["Hospital Escuela", 14.096210, -87.190303],
    ["Hotel Marriot", 14.089406, -87.190225],
    ["PriceMart", 14.086822, -87.184021],
    ["Injupemp", 14.083893, -87.189184],
    ["Tu posición", 14.076304, -87.208158]
];

for (var i = 0; i < places.length; i++) {
    marker = L.marker([places[i][1], places[i][2]])
        .bindPopup(places[i][0])
        .addTo(mapPromo);
}

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapForm);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapPromo);


var lat = companyUser.companyLat;
var long = companyUser.companyLong;
var marker;

function onMapClick(e) {
    if (marker != undefined) {
        mapForm.removeLayer(marker);
    };

    lat = e.latlng.lat;
    long = e.latlng.lng;
    marker = L.marker([lat, long]).addTo(mapForm);
    document.getElementById('btn-update-info').disabled = false;
}

mapForm.on('click', onMapClick);

// -------------------------------- Validaciones para actualizar perfil -------------------------------- //
//Mostrar los datos Obtenidos
function ShowInfo() {
    let key = getCookie('key');
    axios({
        method: 'GET',
        url: '../backend/axios/companies.php?id=' + key,
        responseType: 'json',
    }).then(resCompany => {

        let company = resCompany.data;
        companyUser.firstName = company.nombre;
        companyUser.lastName = company.apellido;
        companyUser.country = company.pais;
        companyUser.currency = company.moneda;
        companyUser.code = company.codigoEmpresa;
        companyUser.user = company.nombreUsuario;
        companyUser.email = company.correo;
        companyUser.pass = company.contraseña;
        companyUser.logo = company.logoEmpresa;
        companyUser.banner = company.bannerEmpresa;
        companyUser.companyDir = company.dirEmpresa;
        companyUser.companyFb = company.fbEmpresa;
        companyUser.companyIg = company.igEmpresa;
        companyUser.companyTwit = company.twitEmpresa;
        companyUser.companyWha = company.whaEmpresa;
        companyUser.companyPlan = company.plan;
        companyUser.companyName = company.nombreEmpresa;
        companyUser.companyLat = company.latEmpresa;
        companyUser.companyLong = company.longEmpresa;
        lat = companyUser.companyLat;
        long = companyUser.companyLong;
        companyUser.branch = company.sucursalesEmpresa;
        //Cargar Imagenes
        document.getElementById('logo-photo').innerHTML = `<img id="company-photo-logo" class="fb-image-profile thumbnail" src="${companyUser.logo}" alt="Profile image"/>`;
        document.getElementById('main').style.backgroundImage = `url("${companyUser.banner}")`;


    }).catch(error => {
        console.log(error);
    });
    let timer = setInterval(show, 4000);

    function show() {
        //Información debajo del logo
        document.getElementById('company-name').innerHTML = `<i class="fas fa-building fa-fw"></i>${companyUser.companyName}`;
        document.getElementById('employed-name').innerHTML = `<i class="fas fa-user fa-fw"></i>${companyUser.firstName} ${companyUser.lastName}`;
        document.getElementById('company-email').innerHTML = `<i class="fas fa-at"></i>${companyUser.email}`;
        document.getElementById('company-contact').innerHTML = `<i class="fab fa-whatsapp"></i>${CompanyContact(companyUser.country, companyUser.companyWha)}`;

        //Sección Información
        document.getElementById('info-company-name').innerHTML = companyUser.companyName;
        document.getElementById('info-company-country').innerHTML = companyUser.country;
        document.getElementById('info-company-dir').innerHTML = companyUser.companyDir;
        document.getElementById('info-company-currency').innerHTML = companyUser.currency;
        document.getElementById('info-company-employed').innerHTML = `${companyUser.firstName} ${companyUser.lastName}`;
        document.getElementById('info-company-email').innerHTML = companyUser.email;
        document.getElementById('info-company-fb').innerHTML = `<i class="fab fa-facebook"></i> ${companyUser.companyFb}`;
        document.getElementById('info-company-wha').innerHTML = `<i class="fab fa-whatsapp"></i> ${CompanyContact(companyUser.country, companyUser.companyWha)}`;
        document.getElementById('info-company-twit').innerHTML = `<i class="fab fa-twitter"></i> ${companyUser.companyFb}`;
        document.getElementById('info-company-ig').innerHTML = `<i class="fab fa-instagram"></i> ${companyUser.companyFb}`;
        //FillProductList();
        //Sección de Productos

        //Sección Editar Perfil
        document.getElementById('first-name-company').value = companyUser.firstName;
        document.getElementById('last-name-company').value = companyUser.lastName;
        document.getElementById('name-company').value = companyUser.companyName;
        document.getElementById('address-company').value = companyUser.companyDir;
        document.getElementById('plan-company').value = companyUser.companyPlan;
        document.getElementById('facebook-company').value = companyUser.companyFb;
        document.getElementById('whatsapp-company').value = companyUser.companyWha;
        document.getElementById('instagram-company').value = companyUser.companyIg;
        document.getElementById('twitter-company').value = companyUser.companyTwit;
        document.getElementById('email-employed-company').value = companyUser.email;
       
        document.getElementById('btn-update-info').disabled = true;
        marker = L.marker([companyUser.companyLat, companyUser.companyLong]).addTo(mapForm);
        $(".loader-wrapper").fadeOut("slow");
        clearInterval(timer);
    }
}

function FillProductList() {
    for (let i = 0; i < companyUser.branch.length; i++) {
        for (let j = 0; j < companyUser.branch[i].branchProduct.length; j++) {
            for (let k = 0; k < companyUser.branch[i].branchProduct[j].productPromotion.length; k++) {
                document.getElementById('product-list').innerHTML +=
                    `<tr>
                    <th scope="row">${companyUser.branch[i].branchProduct[j].productName}</th>
                    <td>${companyUser.branch[i].branchProduct[j].productCategory}</td>
                    <td>${companyUser.branch[i].branchProduct[j].productRealPrice}</td>
                    <td>${companyUser.branch[i].branchProduct[j].productPromotion[k].productDiscount}</td>
                    <td>${companyUser.branch[i].branchProduct[j].productPromotion[k].productPromoPrice}</td>
                    <td>5 estrellas</td>
                    <td>Muy Bueno</td>
                </tr>`
            }
        }
    }
}

function CompanyContact(country, number) {
    if (country == 'Honduras') {
        return `+504 ${number}`;
    } else {
        return `+1 ${number}`;
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function EnableChange() {
    //Desbloquear el botón de guardar
    document.getElementById('btn-update-info').disabled = false;
    VerifyData();
}


//Verificación de Datos nuevos
function VerifyData() {
    if (ValidateFirstName() &&
        ValidateLastName() &&
        ValidateCompanyName() &&
        ValidateCompanyDir() &&
        ValidateCompanyLatLong() &&
        ValidateCompanyFb() &&
        ValidateCompanyIg() &&
        ValidateCompanyWha() &&
        ValidateCompanyTwit() &&
        ValidateEmail() ) {
        return true;
    } else {
        return false;
    }
}

// --------------------------------- Actualizar la información ---------------------------------
function updateInfo() {
    if (VerifyData()) {
        document.getElementById('data-alert').innerHTML = '';
        if(document.querySelector('#banner-photo').value != ''){
            uploadImageBanner();
        }else{
            document.getElementById('banner-url').innerHTML = companyUser.banner;
        }
        if(document.querySelector('#pp-photo').value != ''){
            uploadImageProfile();
        }else{
            document.getElementById('pp-url').innerHTML = companyUser.logo;
        }
        $(".loader-wrapper").fadeIn("slow");
        let timer = setInterval(update, 4000);

        function update() {
            pp = ValidateCompanyLogo();
            banner = ValidateCompanyBanner();
            if (
                pp  && banner 
            ) {
             let key = getCookie('key');
                axios({
                    method: 'PUT',
                    url: '../backend/axios/companies.php?id=' + key,
                    responseType: 'json',
                    data: companyUser
                }).then(resCompany => {
                    console.log(resCompany.data);
                    clearInterval(timer);
                    window.location.href = '../profiles/profile-company.php';
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }else{
        document.getElementById('data-alert').innerHTML = 'Rellene todos los campos';
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function ValidateFirstName() {
    let letters = /([A-Za-z])\w+/;
    let nums = /([0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('first-name-company').value == '' || nums.test(document.getElementById('first-name-company').value) == true || symbols.test(document.getElementById('first-name-company').value) == true || letters.test(document.getElementById('first-name-company').value) == false) {
        document.getElementById('first-name-company').value = '';
        document.getElementById('first-name-company').style.borderColor = 'red';
        document.getElementById('first-name-company').placeholder = 'No usar simbolos ni números';
        return false;
    } else {
        document.getElementById('first-name-company').placeholder = `Nombre`;
        document.getElementById('first-name-company').style.borderColor = 'grey';
        let upperName = document.getElementById('first-name-company').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('first-name-company').value = upperName;
        companyUser.firstName = document.getElementById('first-name-company').value;
        return true;
    }
}

function ValidateLastName() {
    let letters = /([A-Za-z])\w+/;
    let nums = /([0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('last-name-company').value == '' || nums.test(document.getElementById('last-name-company').value) == true || symbols.test(document.getElementById('last-name-company').value) == true || letters.test(document.getElementById('last-name-company').value) == false) {
        document.getElementById('last-name-company').value = '';
        document.getElementById('last-name-company').style.borderColor = 'red';
        document.getElementById('last-name-company').placeholder = 'No usar simbolos ni números';
        return false;
    } else {
        document.getElementById('last-name-company').placeholder = `Apellido`;
        document.getElementById('last-name-company').style.borderColor = 'grey';
        let upperName = document.getElementById('last-name-company').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('last-name-company').value = upperName;
        companyUser.lastName = document.getElementById('last-name-company').value;
        return true;
    }
}

function ValidateCompanyName() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('name-company').value == '' || chars.test(document.getElementById('name-company').value) == false || symbols.test(document.getElementById('name-company').value) == true) {
        document.getElementById('name-company').value = '';
        document.getElementById('name-company').style.borderColor = 'red';
        document.getElementById('name-company').placeholder = 'No usar simbolos';
        return false;
    } else {
        document.getElementById('name-company').style.borderColor = 'greys';
        let upperLastName = document.getElementById('name-company').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('name-company').value = upperLastName;
        companyUser.companyName = document.getElementById('name-company').value;
        return true;
    }
}

function ValidateCompanyDir() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('address-company').value == '' || chars.test(document.getElementById('address-company').value) == false || symbols.test(document.getElementById('address-company').value) == true) {
        document.getElementById('address-company').value = '';
        document.getElementById('address-company').style.borderColor = 'red';
        document.getElementById('address-company').placeholder = 'No usar simbolos ni números';
        return false;
    } else {
        document.getElementById('address-company').style.borderColor = 'grey';
        document.getElementById('address-company-alert').innerHTML = ``;
        companyUser.companyDir = document.getElementById('address-company').value;
        return true;
    }
    return false;
}

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

function ValidateCompanyFb() {
    if (document.getElementById('facebook-company').value == '') {
        document.getElementById('facebook-company').value = '';
        document.getElementById('facebook-company').style.borderColor = 'red';
        document.getElementById('facebook-company').placeholder = 'Pegue url de su página de Facebook';
        return false;
    } else {
        document.getElementById('facebook-company').style.borderColor = 'grey';
        companyUser.companyFb = document.getElementById('facebook-company').value;
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
        companyUser.companyIg = document.getElementById('instagram-company').value;
        return true;
    }
}

function ValidateCompanyWha() {
    let structure = /([0-9]{8})/;
    if (document.getElementById('whatsapp-company').value == '' || structure.test(document.getElementById('whatsapp-company').value) == false) {
        document.getElementById('whatsapp-company').value = '';
        document.getElementById('whatsapp-company').style.borderColor = 'red';
        document.getElementById('whatsapp-company').placeholder = 'Ingrese WhatsApp: 99839932';
        return false;
    } else {
        document.getElementById('whatsapp-company').style.borderColor = 'grey';
        companyUser.companyWha = document.getElementById('whatsapp-company').value;
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
        companyUser.companyTwit = document.getElementById('twitter-company').value;
        return true;
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
        companyUser.email = document.getElementById('email-employed-company').value;
        return true;
    }
}
/*
function ValidatePassword() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('password-company').value == '' || chars.test(document.getElementById('password-company').value) == false || symbols.test(document.getElementById('password-company').value) == true) {
        document.getElementById('password-company').value = '';
        document.getElementById('password-company').style.borderColor = 'red';
        document.getElementById('password-company').placeholder = 'Solo usar letras y números';
        return false;
    } else {
        document.getElementById('password-company').style.borderColor = 'red';
        return true;
    }
}

function ValidatePasswordRepeat() {
    if (document.getElementById('password-company').value != document.getElementById('password-company-repeat').value) {
        document.getElementById('password-company-repeat').value = '';
        document.getElementById('pass-repeat-company-alert').innerHTML = `Contraseñas Distintas`;
        document.getElementById('password-company-repeat').style.color = 'red';
        return false;
    } else {
        document.getElementById('password-company-repeat').style.color = 'black';
        document.getElementById('pass-repeat-company-alert').innerHTML = ``;
        companyUser.pass =  document.getElementById('password-company-repeat').value;
        return true;
    }
}
*/

function ValidateCompanyLatLong() {
    if (lat != companyUser.companyLat && long != companyUser.companyLong) {
        document.getElementById('lat-long-company-alert').innerHTML = `Seleccione en el mapa la ubicación de la tienda Principal`;
        return false;
    } else {
        document.getElementById('lat-long-company-alert').innerHTML = ``;
        companyUser.companyLat = lat;
        companyUser.companyLong = long;
        return true;
    }
}
/*
function ValidatePlan() {
    let planSelected = document.getElementById('plan-company');
    if (planSelected.options[planSelected.selectedIndex].value == 'Seleccione Plan') {
        document.getElementById('plan-alert').innerHTML = `Seleccione un nuevo plan`;
        return false;
    } else {
        document.getElementById('plan-alert').innerHTML = `Cambio de plan incurre gastos extra`;
        let regular = 0;
        let premium = 0;
        let platinum = 0;
        if (companies != null) {
            let values = Object.values(companies);
            for (let i = 0; i < values.length; i++) {
                if (values[i].plan == 'Regular') {
                    regular++;
                }
                if (values[i].plan == 'Premium') {
                    premium++;
                }
                if (values[i].plan == 'Platinum') {
                    platinum++;
                }
            }
        }
        if (planSelected.options[planSelected.selectedIndex].value == 'Regular') {
            //Dependiendo de cuantas empresas hayan con plan regular se asignara el código ejem 3001, 3002...
            document.getElementById('number-employed-company').value = 3000 + regular + 1;
            if (companyUser.companyPlan = 'Regular')
                document.getElementById('number-employed-company').value = companyUser.code;
            companyUser.code = document.getElementById('number-employed-company').value;
            companyUser.companyPlan = 'Regular';
            return true;
        }
        if (planSelected.options[planSelected.selectedIndex].value == 'Premium') {
            //Dependiendo de cuantas empresas hayan con plan regular se asignara el código ejem 3001, 3002...
            document.getElementById('number-employed-company').value = 2000 + premium + 1;
            if (companyUser.companyPlan = 'Premium')
                document.getElementById('number-employed-company').value = companyUser.code;
            companyUser.code = document.getElementById('number-employed-company').value;
            companyUser.companyPlan = 'Premium';
            return true;
        }
        if (planSelected.options[planSelected.selectedIndex].value == 'Platinum') {
            //Dependiendo de cuantas empresas hayan con plan regular se asignara el código ejem 3001, 3002...
            document.getElementById('number-employed-company').value = 1000 + platinum + 1;
            if (companyUser.companyPlan = 'Platinum')
                document.getElementById('number-employed-company').value = companyUser.code;
            companyUser.code = document.getElementById('number-employed-company').value;
            companyUser.companyPlan = 'Platinum';
            return true;
        }
        return false;
    }
}
*/
// ---------------------------------------- Sesion ---------------------------------------- //

function logout() {
    $(".loader-wrapper").fadeIn("slow");
    axios({
        method: 'GET',
        url: '../backend/axios/companies.php?action=logout',
        responseType: 'json',
    }).then(resCompany => {
        window.location.href = '../index.php';
    }).catch(error => {
        console.log(error);
    });
}