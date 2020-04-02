// ----------------------------------- Validación de ventanas modales ----------------------------------- //
var loginClient = {
    user: "",
    email:"",
    pass: ""
}

var loginCompany = {
    code: "",
    email:"",
    pass: ""
}

var loginAdmin = {
    code: "",
    user: "",
    email:"",
    pass: ""
}

var all = /([A-Za-z!-/:-@{-¿])\w+/;
var chars = /([A-Za-z0-9])\w+/;
var symbols = /([!-/:-@{-¿])/;
var email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

function ValidateClient() {
    let user = ValidateUserClient();
    let email = ValidateEmailClient();
    let pass = ValidatePassClient();

    if (user == true && pass == true && email == true) {
        //aquí la petición asincrona
        console.log(loginClient)
    }
}

function ValidateCompany() {
    let code = ValidateCodeCompany();
    let email = ValidateEmailCompany();
    let pass = ValidatePassCompany();

    if (code == true && pass == true && email == true) {
        //aquí la petición asincrona
        console.log(loginCompany);
    }
}

function ValidateAdmin() {
    let code = ValidateCodeAdmin();
    let user = ValidateUserAdmin();
    let email = ValidateEmailAdmin();
    let pass = ValidatePassAdmin();

    if (code == true && pass == true && user == true && email == true) {
        //aquí la petición asincrona
        console.log(loginAdmin);
    }
}

function ValidateUserClient() {
    if (document.getElementById('login-user-client').value == '' || chars.test(document.getElementById('login-user-client').value) == false || symbols.test(document.getElementById('login-user-client').value) == true) {
        document.getElementById('user-client-alert').innerHTML = `Usuario incorrecto`;
        return false;
    } else {
        document.getElementById('user-client-alert').innerHTML = ``;
        loginClient.user = document.getElementById('login-user-client').value;
        return true;
    }
    return false;
}

function ValidatePassClient() {
    if (document.getElementById('login-pass-client').value == '' || chars.test(document.getElementById('login-pass-client').value) == false || symbols.test(document.getElementById('login-pass-client').value) == true) {
        document.getElementById('pass-client-alert').innerHTML = `Contraseña Incorrecta`;
        return false;
    } else {
        document.getElementById('pass-client-alert').innerHTML = ``;
        loginClient.pass = document.getElementById('login-pass-client').value;
        return true;
    }
    return false;
}

function ValidateCodeCompany() {
    if (document.getElementById('login-code-company').value == '' || document.getElementById('login-code-company').value < 1000 || document.getElementById('login-code-company').value > 3999 || all.test(document.getElementById('login-code-company').value) == true) {
        document.getElementById('code-company-alert').innerHTML = `Código Invalido`;
        return false;
    } else {
        document.getElementById('code-company-alert').innerHTML = ``;
        loginCompany.code = parseInt(document.getElementById('login-code-company').value);
    }
}

function ValidatePassCompany() {
    if (document.getElementById('login-pass-company').value == '' || chars.test(document.getElementById('login-pass-company').value) == false || symbols.test(document.getElementById('login-pass-company').value) == true) {
        document.getElementById('pass-company-alert').innerHTML = `Contraseña Incorrecta`;
        return false;
    } else {
        document.getElementById('pass-company-alert').innerHTML = ``;
        loginCompany.pass = document.getElementById('login-pass-company').value;
        return true;
    }
    return false;
}

function ValidateCodeAdmin() {
    if (document.getElementById('login-code-admin').value == '' || document.getElementById('login-code-admin').value > 9999 || all.test(document.getElementById('login-code-admin').value) == true || document.getElementById('login-code-admin').value < 1000) {
        document.getElementById('code-admin-alert').innerHTML = `Código Invalido`;
        return false;
    } else {
        document.getElementById('code-admin-alert').innerHTML = ``;
        loginAdmin.code = parseInt(document.getElementById('login-code-admin').value);
        return true;
    }
    return true;
}

function ValidateUserAdmin() {
    if (document.getElementById('login-user-admin').value == '' || chars.test(document.getElementById('login-user-admin').value) == false || symbols.test(document.getElementById('login-user-admin').value) == true) {
        document.getElementById('user-admin-alert').innerHTML = `Usuario incorrecto`;
        return false;
    } else {
        document.getElementById('user-admin-alert').innerHTML = ``;
        loginAdmin.user = document.getElementById('login-user-admin').value;
        return true;
    }
    return false;
}

function ValidatePassAdmin() {
    if (document.getElementById('login-pass-admin').value == '' || chars.test(document.getElementById('login-pass-admin').value) == false || symbols.test(document.getElementById('login-pass-admin').value) == true) {
        document.getElementById('pass-admin-alert').innerHTML = `Contraseña Incorrecta`;
        return false;
    } else {
        document.getElementById('pass-admin-alert').innerHTML = ``;
        loginAdmin.pass = document.getElementById('login-pass-admin').value;
        return true;
    }
    return false;
}

function ValidateEmailClient() {
    if (email.test(document.getElementById('email-login-client').value) == true) {
        document.getElementById('email-client-alert').innerHTML = ``;
        loginClient.email = document.getElementById('email-login-client').value;
        return true;
    } else {
        document.getElementById('email-client-alert').innerHTML = `Correo Invalido`;
        return false;
    }
    return false;
}

function ValidateEmailCompany() {
    if (email.test(document.getElementById('email-login-company').value) == true) {
        document.getElementById('email-company-alert').innerHTML = ``;
        loginCompany.email = document.getElementById('email-login-company').value;
        return true;
    } else {
        document.getElementById('email-company-alert').innerHTML = `Correo Invalido`;
        return false;
    }
    return false;
}

function ValidateEmailAdmin() {
    if (email.test(document.getElementById('email-login-admin').value) == true) {
        document.getElementById('email-admin-alert').innerHTML = ``;
        loginAdmin.email = document.getElementById('email-login-admin').value;
        return true;
    } else {
        document.getElementById('email-admin-alert').innerHTML = `Correo Invalido`;
        return false;
    }
    return false;
}