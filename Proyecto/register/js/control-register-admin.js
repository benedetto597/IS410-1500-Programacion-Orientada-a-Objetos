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
    profileImg: "l",
    coverImg: "l"
};


function ValidateForm() {
    let firstName = ValidateFirstName();
    let lastName = ValidateLastName();
    let country = ValidateCountry();
    let currency = ValidateCurrency();
    let access = ValidateAccess();
    let user = ValidateUser();
    let email = ValidateEmail();
    let pass = ValidatePassword();
    let passRepeat= ValidatePasswordRepeat();
    let gen = ValidateGen();
    if (firstName == true &&
        lastName == true &&
        country == true &&
        currency == true &&
        access == true &&
        user == true &&
        email == true &&
        pass == true &&
        passRepeat == true &&
        gen ==  true) {

        adminUser.firstName = document.getElementById('first-name-admin').value;
        adminUser.lastName = document.getElementById('last-name-admin').value;
        adminUser.gen = document.getElementById('sex-select-admin').options[document.getElementById('sex-select-admin').selectedIndex].value;
        adminUser.country = document.getElementById('country-select-admin').options[document.getElementById('country-select-admin').selectedIndex].value;
        adminUser.currency = document.getElementById('currency-select-admin').options[document.getElementById('currency-select-admin').selectedIndex].value.slice(2, document.getElementById('currency-select-admin').options[document.getElementById('currency-select-admin').selectedIndex].value.length);
        adminUser.accessCode = document.getElementById('code-admin').value;
        adminUser.user = document.getElementById('user-admin').value;
        adminUser.email = document.getElementById('email-admin').value;
        adminUser.pass = document.getElementById('password-admin-repeat').value;
        
        axios({
            method: 'POST',
            url: '../backend/axios/admin.php',
            responseType: 'json',
            data: adminUser
        }).then(resAdmin =>{
            document.getElementById('form-admin').innerHTML =
                    `<div class="form-row align-items-center">
                        <div class="col-auto mr-auto ml-auto">
                            <h4 class="text-white">Administrador</h4>
                            <img id="check" class="img-responsive"
                            src="../img/icon/check.png"><br>
                        </div>
                        <b class="mr-auto ml-auto text-white">Se ha envíado un correo con toda la información para poder iniciar seción</b>  
                    </div>
                    `;
            let timer = setInterval(redirect, 6000);
            function redirect(){
                clearInterval(timer);
                window.location.href = '../index.php';
            }
        }).catch(error =>{
            console.log(error);
        });
        
    }
}



function ValidateFirstName() {
    let chars = /([A-Za-z])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    let nums = /([0-9])\w+/;
    if (symbols.test(document.getElementById('first-name-admin').value) == true || nums.test(document.getElementById('first-name-admin').value) == true) {        
        document.getElementById('first-name-admin').value = '';
        document.getElementById('first-name-admin').style.borderColor = 'red';
        document.getElementById('first-name-admin').placeholder = 'Sólo usar letras';
        return false;
    } else if(document.getElementById('first-name-admin').value == '' || chars.test(document.getElementById('first-name-admin').value) == false ){
        document.getElementById('first-name-admin').value = '';
        document.getElementById('first-name-admin').style.borderColor = 'red';
        document.getElementById('first-name-admin').placeholder = 'Ingrese al menos un nombre';
        return false;
    } else {
        document.getElementById('first-name-admin').style.borderColor = 'grey';
        let upperName = document.getElementById('first-name-admin').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('first-name-admin').value = upperName;
        return true;
    }
}

function ValidateLastName() {
    let chars = /([A-Za-z])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    let nums = /([0-9])\w+/;
    if (symbols.test(document.getElementById('last-name-admin').value) == true || nums.test(document.getElementById('last-name-admin').value) == true) {        
        document.getElementById('last-name-admin').value = '';
        document.getElementById('last-name-admin').style.borderColor = 'red';
        document.getElementById('last-name-admin').placeholder = 'Sólo usar letras';
        return false;
    } else if(document.getElementById('last-name-admin').value == ''){
        document.getElementById('last-name-admin').value = '';
        document.getElementById('last-name-admin').style.borderColor = 'red';
        document.getElementById('last-name-admin').placeholder = 'Ingrese al menos un apellido';
        return false;
    } else {
        document.getElementById('last-name-admin').style.borderColor = 'grey';
        let upperName = document.getElementById('last-name-admin').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('last-name-admin').value = upperName;
        return true;
    }
}

function ValidateCountry() {
    let countrySelected = document.getElementById('country-select-admin');
    if (countrySelected.options[countrySelected.selectedIndex].value == 'Seleccione un País') {
        document.getElementById('country-alert').innerHTML = `Seleccione un País de los disponibles`;
        return false;
    } else {
        document.getElementById('country-alert').innerHTML = ``;
        return true;
    }
    return true;
}

function ValidateCurrency() {
    let countrySelected = document.getElementById('currency-select-admin');
    if (countrySelected.options[countrySelected.selectedIndex].value == 'Seleccione una Moneda') {
        document.getElementById('currency-alert').innerHTML = `Seleccione una Moneda de los disponibles`;
        return false;
    } else {
        document.getElementById('currency-alert').innerHTML = ``;
        return true;
    }
    return true;
}

function ValidateAccess() {
    // Comprobar también que no haya nadíe más registrado como administrador.
    if (document.getElementById('code-admin').value == '' || document.getElementById('code-admin').value != 1905) {
        document.getElementById('code-admin').value = '';
        document.getElementById('code-admin').style.borderColor = 'red';
        document.getElementById('code-admin').placeholder = 'Ingrese código único';
        return false;
    } else {
        document.getElementById('code-admin').style.borderColor = 'grey';
        return true;
    }
    return true;
}

function ValidateUser() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (symbols.test(document.getElementById('user-admin').value) == true) {        
        document.getElementById('user-admin').value = '';
        document.getElementById('user-admin').style.borderColor = 'red';
        document.getElementById('user-admin').placeholder = 'Sólo usar letras y números';
        return false;
    } else if(document.getElementById('user-admin').value == '' || chars.test(document.getElementById('user-admin').value) == false ){
        document.getElementById('user-admin').value = '';
        document.getElementById('user-admin').style.borderColor = 'red';
        document.getElementById('user-admin').placeholder = 'Ingrese un nombre de Usuario';
        return false;
    } else {
        document.getElementById('user-admin').style.borderColor = 'grey';
        return true;
    }
}

function ValidateEmail() {
    let email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (email.test(document.getElementById('email-admin').value) == true) {
        document.getElementById('email-admin').style.borderColor = 'grey';
        return true;
    } else {
        document.getElementById('email-admin').value = '';
        document.getElementById('email-admin').style.borderColor = 'red';
        document.getElementById('email-admin').placeholder = 'Ingrese un correo valido';
        return false;
    }
}

function ValidatePassword() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (symbols.test(document.getElementById('password-admin').value) == true) {
        document.getElementById('password-admin').value = '';
        document.getElementById('password-admin').style.borderColor = 'red';
        document.getElementById('password-admin').placeholder = 'Sólo usar letras y números';
        return false;
    } else if(document.getElementById('password-admin').value == '' || chars.test(document.getElementById('password-admin').value) == false){
        document.getElementById('password-admin').value = '';
        document.getElementById('password-admin').style.borderColor = 'red';
        document.getElementById('password-admin').placeholder = 'Ingrese una contraseña';
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
        document.getElementById('password-admin-repeat').style.borderColor = 'grey';
        return true;
    }
}

function ValidateGen() {
    let genSelected = document.getElementById('sex-select-admin');
    if (genSelected.options[genSelected.selectedIndex].value == 'Seleccione Genero') {
        document.getElementById('gen-alert').innerHTML = `Seleccione un Genero de los disponibles`;
        return false;
    } else {
        document.getElementById('gen-alert').innerHTML = ``;
        return true;
    }
}