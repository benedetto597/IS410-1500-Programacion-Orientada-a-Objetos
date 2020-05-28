var adminUser = {
    firstName: "",
    lastName: "",
    gen: "",
    country: "",
    currency: "",
    accessCode: "",
    user: "",
    email: "",
    pass: "",
    profileImg: "",
    coverImg: ""
};

var suscribeCompanies = [];

function logout(){
    axios({
        method: 'GET',
        url: '../backend/axios/admin.php?action=logout',
        responseType: 'json',
    }).then(resAdmin =>{
        window.location.href = '../index.html';
    }).catch(error =>{
        console.log(error);
    });
}

function ShowInfo() {
    document.getElementById('btn-update-info-admin').disabled = true;
    let key = getCookie('key');
    axios({
        method: 'GET',
        url: '../backend/axios/admin.php?id=' + key,
        responseType: 'json',
    }).then(resAdmin =>{
        let admin = resAdmin.data;
        adminUser.firstName = admin.nombre;
        adminUser.lastName = admin.apellido;
        adminUser.gen = admin.genero;
        adminUser.country = admin.pais;
        adminUser.currency = admin.moneda;
        adminUser.accessCode = admin.codigoAdmin;
        adminUser.user = admin.nombreUsuario;
        adminUser.email = admin.correo;
        adminUser.pass = admin.contraseña;
        adminUser.profileImg = admin.fotoAdmin;
        adminUser.coverImg = admin.coverAdmin;
        //Cargar Imagenes 
        document.getElementById('profile-photo').innerHTML = `<img id="admin-photo-profile" class="fb-image-profile thumbnail" src="${adminUser.profileImg}" alt="Profile image"/>`;
        document.getElementById('main').style.backgroundImage = `url("${adminUser.coverImg}")`;

    }).catch(error =>{
        console.log(error);
    });
    let timer = setInterval(show, 2000);

    function show(){
        //Información debajo de la foto de perfil
        document.getElementById('admin-name').innerHTML = `<i class="fas fa-user-circle" style="color:white"></i> ${adminUser.firstName} ${adminUser.lastName}`;
        document.getElementById('admin-user').innerHTML = `<i class="fas fa-user fa-fw" style="color:white"></i> ${adminUser.user}`;
        document.getElementById('admin-email').innerHTML = `<i class="fas fa-at" style="color:white"></i>${adminUser.email}`;

        //Sección Información
        document.getElementById('info-admin-name').innerHTML = `${adminUser.firstName} ${adminUser.lastName}`;
        document.getElementById('info-admin-user').innerHTML = adminUser.user;
        document.getElementById('info-admin-email').innerHTML = adminUser.email;
        document.getElementById('info-admin-country').innerHTML = adminUser.country;
        document.getElementById('info-admin-currency').innerHTML = adminUser.currency;
        document.getElementById('info-admin-gen').innerHTML = adminUser.gen;

        //Sección de Empresas inscritas
        FillCompanies();
        //Probando prro
        //Sección Editar Perfil
        document.getElementById('first-name-admin').value = adminUser.firstName;
        document.getElementById('last-name-admin').value = adminUser.lastName;
        document.getElementById('user-admin').value = adminUser.user;
        document.getElementById('email-admin').value = adminUser.email;
        //Seleccionar con jquery
        $(`#country-select option[value='${adminUser.country}']`).attr("selected", true);
        if(adminUser.currency == 'Lempira'){
            $(`#currency-select option[value='${adminUser.currency}']`).attr("selected", true);
        }
        if(adminUser.currency == 'Dolar'){
            $(`#currency-select option[value='${adminUser.currency}']`).attr("selected", true);
        }
        $(`#sex-select-admin-update option[value='${adminUser.gen}']`).attr("selected", true);
        document.getElementById('password-admin').value = adminUser.pass;
        document.getElementById('password-admin-repeat').value = adminUser.pass;
        clearInterval(timer);
    }
    
}

function EnableChange() {
    document.getElementById('btn-update-info-admin').disabled = false;
    VerifyData();
}

function FillCompanies(){
    axios({
        method: 'GET',
        url: '../backend/axios/companies.php?action=all',
        responseType: 'json',
    }).then(resAdmin =>{
        //Quitar loader 
        let keys = Object.keys(resAdmin.data);
        let values = Object.values(resAdmin.data);
       
        for(let i = 0; i<keys.length; i++){
            let company = {};
            company['key'] = keys[i];
            company['companyName'] = values[i].nombreEmpresa;
            company['suscription'] = values[i].plan;
            company['companyDir'] = values[i].dirEmpresa;
            company['country'] = values[i].pais;
            company['currency'] = values[i].moneda;
            company['companyWha'] = values[i].whaEmpresa;
            company['email'] = values[i].correo;
            company['branches'] = values[i].sucursalesEmpresa.length;
            suscribeCompanies.push(company);
        }
        
        for (let k = 0; k < suscribeCompanies.length; k++) {
            document.getElementById('suscribe-companies').innerHTML += `
            <tr>
            <th id="suscribe-company-name-${k}">${suscribeCompanies[k].companyName}</th>
            <th id="suscribe-company-suscription-${k}">${suscribeCompanies[k].suscription}</th>
            <td id="suscribe-company-country-${k}">${suscribeCompanies[k].country}</td>
            <td id="suscribe-company-currency-${k}">${suscribeCompanies[k].currency}</td>
            <td id="suscribe-company-dir-${k}">${suscribeCompanies[k].companyDir}</td>
            <td id="suscribe-company-phone-${k}">${suscribeCompanies[k].companyWha}</td>
            <td id="suscribe-product-branches-${k}">${suscribeCompanies[k].branches}</td>
            <td id="suscribe-product-email-${k}">${suscribeCompanies[k].email}</td>
            <td><button type="button" id="btn-delete-${k}" class="card-text bg-danger ml-auto mr-auto btn-sm shadow mb-0 rounded text-white" onclick="deleteCompany(${k})"><i class="fas fa-trash"></i></button></td>
            </tr>
            `;
        }
        //Ocultar Loader
        $(".loader-wrapper").fadeOut("slow");
    }).catch(error =>{
        console.log(error);
    });
}
//proando 
//probando mas cosas 
function deleteCompany(position){
    let key = suscribeCompanies[position].key;
        axios({
            method: 'DELETE',
            url: '../backend/axios/companies.php?id='+ key,
            responseType: 'json',
        }).then(resAdmin =>{
            console.log(resAdmin.data);
            window.location.href = "../profiles/profile-admin.html";
        }).catch(error =>{
            console.log(error);
        });
}

var pp;
var banner;
var name;
var lastname;
var user;
var email;
var country;
var currency;
var gender;
var pass;
var repPass;

function VerifyData() {
    console.log(document.querySelector('#banner-photo').value); 
    console.log(document.querySelector('#pp-photo').value); 
    name = ValidateFirstName();
    lastname = ValidateLastName();
    user = ValidateUser();
    email = ValidateEmail();
    country = ValidateCountry();
    currency = ValidateCurrency();
    gender = ValidateGender();
    pass = ValidatePassword();
    repPass = ValidatePasswordRepeat();
}

function updateInfo(){
    if(document.querySelector('#banner-photo').value != ''){
        uploadImageBanner();
    }else{
        document.getElementById('banner-url').innerHTML = adminUser.coverImg;
    }
    if(document.querySelector('#pp-photo').value != ''){
        uploadImageProfile();
    }else{
        document.getElementById('pp-url').innerHTML = adminUser.profileImg;
    }
    $(".loader-wrapper").fadeIn("slow");

    let timer = setInterval(update, 3000);
    function update(){
        pp = ValidateProfilePhoto();
        banner = ValidateProfileBanner();
        if(pp == true && banner == true){
            if(
                name == true,
                lastname == true,
                user == true,
                email == true,
                country == true,
                currency == true,
                gender == true,
                pass == true,
                repPass == true
            ){
                //console.log(adminUser);
                let key = getCookie('key');
                axios({
                    method: 'PUT',
                    url: '../backend/axios/admin.php?id=' + key ,
                    responseType: 'json',
                    data: adminUser
                }).then(resAdmin =>{
                    //console.log(resAdmin.data);
                    clearInterval(timer);
                    window.location.href = '../profiles/profile-admin.html';
                }).catch(error =>{
                    console.log(error);
                });
                
            }
        }
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function ValidateProfilePhoto() {
    
    //Restringir la ruta
    if (document.getElementById('pp-url').innerHTML == '') {
        //document.getElementById('logo-alert').innerHTML = `Seleccione una imagen de logo`;
        return false;
    } else {
        //document.getElementById('logo-alert').innerHTML = ``;
        let logoUrl = document.getElementById('pp-url');
        adminUser.profileImg = logoUrl.innerHTML;
        return true;
    }
}

function ValidateProfileBanner() {
    
    //Restringir la ruta
    if (document.getElementById('banner-url').innerHTML == '') {
        //document.getElementById('banner-alert').innerHTML = `Seleccione una imagen de banner`;
        return false;
    } else {
        //document.getElementById('banner-alert').innerHTML = ``;
        let bannerUrl = document.getElementById('banner-url');
        adminUser.coverImg = bannerUrl.innerHTML;
        return true;
    }
}


function ValidateFirstName() {
    let letters = /([A-Za-z])\w+/;
    let nums = /([0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('first-name-admin').value == '' || nums.test(document.getElementById('first-name-admin').value) == true || symbols.test(document.getElementById('first-name-admin').value) == true || letters.test(document.getElementById('first-name-admin').value) == false) {
        document.getElementById('first-name-admin').value = '';
        document.getElementById('first-name-admin').style.borderColor = 'red';
        document.getElementById('first-name-admin').placeholder = 'No usar simbolos ni números';
        return false;
    } else {
        document.getElementById('first-name-admin').placeholder = ``;
        document.getElementById('first-name-admin').style.borderColor = 'grey';
        let upperName = document.getElementById('first-name-admin').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('first-name-admin').value = upperName;
        adminUser.firstName = document.getElementById('first-name-admin').value;
        return true;
    }
}

function ValidateLastName() {
    let letters = /([A-Za-z])\w+/;
    let nums = /([0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('last-name-admin').value == '' || nums.test(document.getElementById('last-name-admin').value) == true || symbols.test(document.getElementById('last-name-admin').value) == true || letters.test(document.getElementById('last-name-admin').value) == false) {
        document.getElementById('last-name-admin').value = '';
        document.getElementById('last-name-admin').style.borderColor = 'red';
        document.getElementById('last-name-admin').placeholder = 'No usar simbolos ni números';
        return false;
    } else {
        document.getElementById('last-name-admin').placeholder = ``;
        document.getElementById('last-name-admin').style.borderColor = 'grey';
        let upperName = document.getElementById('last-name-admin').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('last-name-admin').value = upperName;
        adminUser.lastName = document.getElementById('last-name-admin').value;
        return true;
    }
}

function ValidateCountry() {
    let countrySelected = document.getElementById('country-select');
    if (countrySelected.options[countrySelected.selectedIndex].value == 'Seleccione País') {
        document.getElementById('country-alert').innerHTML = `Seleccione un País de los disponibles`;
        return false;
    } else {
        document.getElementById('country-alert').innerHTML = ``;
        adminUser.country = countrySelected.options[countrySelected.selectedIndex].value;
        return true;
    }
}

function ValidateCurrency() {
    let currencySelected = document.getElementById('currency-select');
    if (currencySelected.options[currencySelected.selectedIndex].value == 'Seleccione Moneda') {
        document.getElementById('currency-alert').innerHTML = `Seleccione una Moneda de los disponibles`;
        return false;
    } else {
        document.getElementById('currency-alert').innerHTML = ``;
        adminUser.currency = currencySelected.options[currencySelected.selectedIndex].value;
        return true;
    }
}

function ValidateGender() {
    let genderSelected = document.getElementById('sex-select-admin-update');
    if (genderSelected.options[genderSelected.selectedIndex].value == 'Seleccione Genero') {
        document.getElementById('gen-alert').innerHTML = `Seleccione un genero de los disponibles`;
        return false;
    } else {
        document.getElementById('gen-alert').innerHTML = ``;
        adminUser.gen = genderSelected.options[genderSelected.selectedIndex].value;
        return true;
    }
}

function ValidateUser() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('user-admin').value == '' || chars.test(document.getElementById('user-admin').value) == false || symbols.test(document.getElementById('user-admin').value) == true) {
        document.getElementById('user-admin').value = '';
        document.getElementById('user-admin').style.borderColor = 'red';
        document.getElementById('user-admin').placeholder = 'No usar simbolos';
        return false;
    } else {
        document.getElementById('user-admin').style.borderColor = 'grey';
        adminUser.user = document.getElementById('user-admin').value;
        return true;
    }
}

function ValidateEmail() {
    let email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (email.test(document.getElementById('email-admin').value) == false) {
        document.getElementById('email-admin').value = '';
        document.getElementById('email-admin').style.borderColor = 'red';
        document.getElementById('email-admin').placeholder = 'Ingresar un Email Valido';
        return true;
    } else {
        document.getElementById('email-admin').style.borderColor = 'grey';
        adminUser.email = document.getElementById('email-admin').value;
        return false;
    }
}


function ValidatePassword() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('password-admin').value == '' || chars.test(document.getElementById('password-admin').value) == false || symbols.test(document.getElementById('password-admin').value) == true) {
        document.getElementById('password-admin').value = '';
        document.getElementById('password-admin').style.borderColor = 'red';
        document.getElementById('password-admin').placeholder = 'Solo letras y números';
        return false;
    } else {
        document.getElementById('password-admin').style.borderColor = 'grey';
        return true;
    }
}

function ValidatePasswordRepeat() {
    if (document.getElementById('password-admin').value != document.getElementById('password-admin-repeat').value) {
        document.getElementById('password-admin-repeat').value = '';
        document.getElementById('password-admin-repeat').style.borderColor = 'red';
        document.getElementById('password-admin-repeat').placeholder = 'Contraseñas Distintas';
        return false;
    } else {
        document.getElementById('password-admin-repeat').style.borderColor = 'gray';
        adminUser.pass = document.getElementById('password-admin').value;
        return true;
    }
    return false;
}