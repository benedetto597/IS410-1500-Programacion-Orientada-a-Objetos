var clientUser = {
    firstName: "",
    lastName: "",
    gen: "",
    country: "",
    currency: "",
    user: "",
    email: "",
    pass: "",
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
    if (name == true &&
        lastName == true &&
        country == true &&
        currency == true &&
        user == true &&
        email == true &&
        pass == true &&
        passRepeat == true &&
        gen == true) {

        clientUser.firstName = document.getElementById('first-name-client').value;
        clientUser.lastName = document.getElementById('last-name-client').value;
        clientUser.gen = document.getElementById('sex-select-client').options[document.getElementById('sex-select-client').selectedIndex].value;
        clientUser.country = document.getElementById('country-select').options[document.getElementById('country-select').selectedIndex].value;
        clientUser.currency = document.getElementById('currency-select').options[document.getElementById('currency-select').selectedIndex].value.slice(2, document.getElementById('currency-select').options[document.getElementById('currency-select').selectedIndex].value.length);
        clientUser.user = document.getElementById('user-client').value;
        clientUser.email = document.getElementById('email-client').value;
        clientUser.pass = document.getElementById('password-client-repeat').value;

    }
}


function ValidateFirstName() {
    let letters = /([A-Za-z])\w+/;
    let nums = /([0-9])\w+/;
    if (document.getElementById('first-name-client').value == '' || nums.test(document.getElementById('first-name-client').value) == true || letters.test(document.getElementById('first-name-client').value) == false) {
        document.getElementById('name-alert').innerHTML = `Ingrese nombres que sean valido (sin numeros ni simbolos, sólo letras)`;
        return false;
    } else {
        document.getElementById('name-alert').innerHTML = ``;
        let upperName = document.getElementById('first-name-client').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('first-name-client').value = upperName;
        return true;
    }
}

function ValidateLastName() {
    let letters = /([A-Za-z])\w+/;
    let nums = /([0-9])\w+/;
    if (document.getElementById('last-name-client').value == '' || letters.test(document.getElementById('last-name-client').value) == false || nums.test(document.getElementById('last-name-client').value) == true) {
        document.getElementById('last-name-alert').innerHTML = `Ingrese apellidos que sean validos (sin numeros ni simbolos, sólo letras)`;
        return false;
    } else {
        document.getElementById('last-name-alert').innerHTML = ``;
        let upperLastName = document.getElementById('last-name-client').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('last-name-client').value = upperLastName;
        return true;
    }
    return false;
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
    return false;
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
    return false;
}

function ValidateUser() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('user-client').value == '' || chars.test(document.getElementById('user-client').value) == false || symbols.test(document.getElementById('user-client').value) == true) {
        document.getElementById('user-alert').innerHTML = `Ingrese un nombre de usario valido (sin simbolos, sólo letras y números)`;
        return false;
    } else {
        document.getElementById('user-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidateEmail() {
    let email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    console.log(email.test(document.getElementById('email-client').value));
    if (email.test(document.getElementById('email-client').value) == true) {
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
    if (document.getElementById('password-client').value == '' || chars.test(document.getElementById('password-client').value) == false || symbols.test(document.getElementById('password-client').value) == true) {
        document.getElementById('pass-alert').innerHTML = `Ingrese una contraseña valida (sin simbolos, sólo letras y números)`;
        return false;
    } else {
        document.getElementById('pass-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidatePasswordRepeat() {
    if (document.getElementById('password-client').value != document.getElementById('password-client-repeat').value) {
        document.getElementById('pass-repeat-alert').innerHTML = `Contraseñas Distintas`;
        document.getElementById('password-client-repeat').style.color = 'red';
        return false;
    } else {
        document.getElementById('password-client-repeat').style.color = 'black';
        document.getElementById('pass-repeat-alert').innerHTML = ``;
        return true;
    }
    return false;
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
    return false;
}