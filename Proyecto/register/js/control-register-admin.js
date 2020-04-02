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
};


function ValidateForm() {
    if (ValidateFirstName() == true &&
        ValidateLastName() == true &&
        ValidateCountry() == true &&
        ValidateCurrency() == true &&
        ValidateAccess() == true &&
        ValidateUser() == true &&
        ValidateEmail() == true &&
        ValidatePassword() == true &&
        ValidatePasswordRepeat() == true &&
        ValidateGen() == true) {

        adminUser.firstName = document.getElementById('first-name-admin').value;
        adminUser.lastName = document.getElementById('last-name-admin').value;
        adminUser.gen = document.getElementById('sex-select-admin').options[document.getElementById('sex-select-admin').selectedIndex].value;
        adminUser.country = document.getElementById('country-select-admin').options[document.getElementById('country-select-admin').selectedIndex].value;
        adminUser.currency = document.getElementById('currency-select-admin').options[document.getElementById('currency-select-admin').selectedIndex].value.slice(2, document.getElementById('currency-select-admin').options[document.getElementById('currency-select-admin').selectedIndex].value.length);
        adminUser.accessCode = document.getElementById('code-admin').value;
        adminUser.user = document.getElementById('user-admin').value;
        adminUser.email = document.getElementById('email-admin').value;
        adminUser.pass = document.getElementById('password-repeat-admin').value;

    } else {
        ValidateFirstName();
        ValidateLastName();
        ValidateCountry();
        ValidateCurrency();
        ValidateAccess();
        ValidateUser();
        ValidateEmail();
        ValidatePassword();
        ValidatePasswordRepeat();
        ValidateGen();
    }
}



function ValidateFirstName() {
    let letters = /([A-Za-z])\w+/;
    let nums = /([0-9])\w+/;
    if (document.getElementById('first-name-admin').value == '' || nums.test(document.getElementById('first-name-admin').value) == true || letters.test(document.getElementById('first-name-admin').value) == false) {
        document.getElementById('name-alert').innerHTML = `Ingrese nombres que sean valido (sin numeros ni simbolos, sólo letras)`;
        return false;
    } else {
        document.getElementById('name-alert').innerHTML = ``;
        let upperName = document.getElementById('first-name-admin').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('first-name-admin').value = upperName;
        return true;
    }
}

function ValidateLastName() {
    let letters = /([A-Za-z])\w+/;
    let nums = /([0-9])\w+/;
    if (document.getElementById('last-name-admin').value == '' || letters.test(document.getElementById('last-name-admin').value) == false || nums.test(document.getElementById('last-name-admin').value) == true) {
        document.getElementById('last-name-alert').innerHTML = `Ingrese apellidos que sean validos (sin numeros ni simbolos, sólo letras)`;
        return false;
    } else {
        document.getElementById('last-name-alert').innerHTML = ``;
        let upperLastName = document.getElementById('last-name-admin').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('last-name-admin').value = upperLastName;
        return true;
    }
    return false;
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
    if (document.getElementById('code-admin').value == '' || document.getElementById('code-admin').value > 9999) {
        document.getElementById('access-alert').innerHTML = `Ingrese un código de acceso valido (4 digitos máximo)`;
        return false;
    } else {
        document.getElementById('access-alert').innerHTML = ``;
        return true;
    }
    return true;
}

function ValidateUser() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('user-admin').value == '' || chars.test(document.getElementById('user-admin').value) == false || symbols.test(document.getElementById('user-admin').value) == true) {
        document.getElementById('user-alert').innerHTML = `Ingrese un nombre de usario valido (sin simbolos, sólo letras y números)`;
        return false;
    } else {
        document.getElementById('user-alert').innerHTML = ``;
        return true;
    }
    return true;
}

function ValidateEmail() {
    let email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    console.log(email.test(document.getElementById('email-admin').value));
    if (email.test(document.getElementById('email-admin').value) == true) {
        document.getElementById('email-alert').innerHTML = ``;
        return true;
    } else {
        document.getElementById('email-alert').innerHTML = `Ingrese un correo valido`;
        return false;
    }
}

function ValidatePassword() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('password-admin').value == '' || chars.test(document.getElementById('password-admin').value) == false || symbols.test(document.getElementById('password-admin').value) == true) {
        document.getElementById('pass-alert').innerHTML = `Ingrese una contraseña valida (sin simbolos, sólo letras y números)`;
        return false;
    } else {
        document.getElementById('pass-alert').innerHTML = ``;
        return true;
    }
    return true;
}

function ValidatePasswordRepeat() {
    if (document.getElementById('password-admin').value != document.getElementById('password-repeat-admin').value) {
        document.getElementById('pass-repeat-alert').innerHTML = `Contraseñas Distintas`;
        document.getElementById('password-repeat-admin').style.color = 'red';
        return false;
    } else {
        document.getElementById('password-repeat-admin').style.color = 'black';
        document.getElementById('pass-repeat-alert').innerHTML = ``;
        return true;
    }
    return true;
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
    return true;
}