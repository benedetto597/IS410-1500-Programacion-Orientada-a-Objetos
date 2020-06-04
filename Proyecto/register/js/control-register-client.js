var clientUser = {
    firstName: "",
    lastName: "",
    gen: "",
    country: "",
    currency: "",
    user: "",
    email: "",
    pass: "",
    profileImg: "l"
};

function ValidateForm() {
    let name = ValidateFirstName();
    let lastName = ValidateLastName();
    let country = ValidateCountry();
    let currency = ValidateCurrency();
    let user = ValidateUser();
    let email = ValidateEmail();
    let pass = ValidatePassword();
    let passRepeat = ValidatePasswordRepeat();
    let gen = ValidateGen();
    if (name &&
        lastName &&
        country &&
        currency &&
        user &&
        email &&
        pass &&
        passRepeat &&
        gen) {
        $(".loader-wrapper").fadeIn("slow");
        clientUser.firstName = document.getElementById('first-name-client').value;
        clientUser.lastName = document.getElementById('last-name-client').value;
        clientUser.gen = document.getElementById('sex-select-client').options[document.getElementById('sex-select-client').selectedIndex].value;
        clientUser.country = document.getElementById('country-select').options[document.getElementById('country-select').selectedIndex].value;
        clientUser.currency = document.getElementById('currency-select').options[document.getElementById('currency-select').selectedIndex].value.slice(2, document.getElementById('currency-select').options[document.getElementById('currency-select').selectedIndex].value.length);
        clientUser.user = document.getElementById('user-client').value;
        clientUser.email = document.getElementById('email-client').value;
        clientUser.pass = document.getElementById('password-client-repeat').value;
        
        //Crear el usuario en la base de datos
        axios({
            method: 'POST',
            url: '../backend/axios/clients.php',
            responseType: 'json',
            data: clientUser
        }).then(resClient =>{
            document.getElementById('form-client').innerHTML =
                    `<div class="form-row align-items-center">
                        <div class="col-auto mr-auto ml-auto">
                            <h4>Cliente</h4>
                            <img id="check" class="img-responsive"
                            src="../img/icon/check.png"><br>
                        </div>
                        <b class="mr-auto ml-auto">Se ha creado su usario correctamente</b>  
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
    let letters = /([A-Za-z])\w+/;
    let nums = /([0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (nums.test(document.getElementById('first-name-client').value) == true || symbols.test(document.getElementById('first-name-client').value) == true ) {
        document.getElementById('first-name-client').value = '';
        document.getElementById('first-name-client').style.borderColor = 'red';
        document.getElementById('first-name-client').placeholder = 'No usar simbolos ni números';
        return false;
    } else if(document.getElementById('first-name-client').value == ''){
        document.getElementById('first-name-client').value = '';
        document.getElementById('first-name-client').style.borderColor = 'red';
        document.getElementById('first-name-client').placeholder = 'Ingrese al menos un Nombre';
        return false;
    } else{
        document.getElementById('first-name-client').style.borderColor = 'grey';
        let upperName = document.getElementById('first-name-client').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('first-name-client').value = upperName;
        return true;

    }
}

function ValidateLastName() {
    let nums = /([0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (nums.test(document.getElementById('last-name-client').value) == true || symbols.test(document.getElementById('last-name-client').value) == true) {
        document.getElementById('last-name-client').value = '';
        document.getElementById('last-name-client').style.borderColor = 'red';
        document.getElementById('last-name-client').placeholder = 'No usar simbolos ni números';
        return false;
    } else if(document.getElementById('last-name-client').value == ''){
        document.getElementById('last-name-client').value = '';
        document.getElementById('last-name-client').style.borderColor = 'red';
        document.getElementById('last-name-client').placeholder = 'Ingrese al menos un Apellido';
        return false;
    } else {
        document.getElementById('last-name-client').style.borderColor = 'grey';
        let upperLastName = document.getElementById('last-name-client').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('last-name-client').value = upperLastName;
        return true;
    }
}

function ValidateCountry() {
    let countrySelected = document.getElementById('country-select');
    if (countrySelected.options[countrySelected.selectedIndex].value == 'Seleccione un País') {
        document.getElementById('country-alert').innerHTML = `Seleccione un País de los disponibles`;
        return false;
    } else {
        document.getElementById('country-alert').innerHTML = ``;
        return true;
    }
}

function ValidateCurrency() {
    let countrySelected = document.getElementById('currency-select');
    if (countrySelected.options[countrySelected.selectedIndex].value == 'Seleccione una Moneda') {
        document.getElementById('currency-alert').innerHTML = `Seleccione una Moneda de los disponibles`;
        return false;
    } else {
        document.getElementById('currency-alert').innerHTML = ``;
        return true;
    }
}

function ValidateUser() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (symbols.test(document.getElementById('user-client').value) == true) {
        document.getElementById('user-client').value = '';
        document.getElementById('user-client').style.borderColor = 'red';
        document.getElementById('user-client').placeholder = 'Sólo usar letras y números';
        return false;
    } else if(document.getElementById('user-client').value == '' || chars.test(document.getElementById('user-client').value) == false){
        document.getElementById('user-client').value = '';
        document.getElementById('user-client').style.borderColor = 'red';
        document.getElementById('user-client').placeholder = 'Ingrese un nombre de Usuario';
        return false;
    } else {
        document.getElementById('user-client').style.borderColor = 'grey';
        return true;
    }
}

function ValidateEmail() {
    let email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    console.log(email.test(document.getElementById('email-client').value));
    if (email.test(document.getElementById('email-client').value) == true) {
        document.getElementById('email-client').style.borderColor = 'grey';
        return true;
    } else {
        document.getElementById('email-client').value = '';
        document.getElementById('email-client').style.borderColor = 'red';
        document.getElementById('email-client').placeholder = 'Ingrese un correo valido';
        return false;
    }
}

function ValidatePassword() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (symbols.test(document.getElementById('password-client').value) == true) {
        document.getElementById('password-client').value = '';
        document.getElementById('password-client').style.borderColor = 'red';
        document.getElementById('password-client').placeholder = 'Sólo usar letras y números';
        return false;
    } else if(document.getElementById('password-client').value == '' || chars.test(document.getElementById('password-client').value) == false){
        document.getElementById('password-client').value = '';
        document.getElementById('password-client').style.borderColor = 'red';
        document.getElementById('password-client').placeholder = 'Ingrese una contraseña';
        return false;
    } else {
        document.getElementById('password-client').style.borderColor = 'grey';
        return true;
    }
}

function ValidatePasswordRepeat() {
    if (document.getElementById('password-client').value != document.getElementById('password-client-repeat').value) {
        document.getElementById('password-client-repeat').value = '';
        document.getElementById('password-client-repeat').style.borderColor = 'red';
        document.getElementById('password-client-repeat').placeholder = 'Contraseñas Distintas';
        return false;
    } else {
        document.getElementById('password-client-repeat').style.borderColor = 'grey';
        return true;
    }
}

function ValidateGen() {
    let genSelected = document.getElementById('sex-select-client');
    if (genSelected.options[genSelected.selectedIndex].value == 'Seleccione Genero') {
        document.getElementById('gen-alert').innerHTML = `Seleccione un Genero de los disponibles`;
        return false;
    } else {
        document.getElementById('gen-alert').innerHTML = ``;
        return true;
    }
}