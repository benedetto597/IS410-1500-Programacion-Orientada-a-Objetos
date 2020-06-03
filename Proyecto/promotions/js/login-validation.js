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
        axios({
            method: 'POST',
            url: '../backend/axios/clients.php?action=login',
            responseType: 'json',
            data: loginClient
        }).then(resClient =>{
            if(resClient.data.valido == true){
                document.getElementById('login-user-client').style.borderColor = 'grey';
                document.getElementById('login-pass-client').style.borderColor = 'grey';
                document.getElementById('email-login-client').style.borderColor = 'grey';
                document.getElementById('warning-client').innerHTML = '';
                window.location.href = '../profiles/profile-client.php';
            }else{
                document.getElementById('login-user-client').style.borderColor = 'red';
                document.getElementById('login-pass-client').style.borderColor = 'red';
                document.getElementById('email-login-client').style.borderColor = 'red';
                document.getElementById('warning-client').innerHTML = 'Credenciales no validas';

            }
        }).catch(error =>{
            console.log(error);
        });
    }
}

function ValidateCompany() {
    let code = ValidateCodeCompany();
    let email = ValidateEmailCompany();
    let pass = ValidatePassCompany();
    if (code == true && pass == true && email == true) {
        axios({
            method: 'POST',
            url: '../backend/axios/companies.php?action=login',
            responseType: 'json',
            data: loginCompany
        }).then(resCompany =>{
            if(resCompany.data.valido == true){
                document.getElementById('login-code-company').style.borderColor = 'grey';
                document.getElementById('login-pass-company').style.borderColor = 'grey';
                document.getElementById('email-login-company').style.borderColor = 'grey';
                document.getElementById('warning-company').innerHTML = '';
                window.location.href = '../profiles/profile-company.php';
            }else{
                document.getElementById('login-code-company').style.borderColor = 'red';
                document.getElementById('login-pass-company').style.borderColor = 'red';
                document.getElementById('email-login-company').style.borderColor = 'red';
                document.getElementById('warning-company').innerHTML = 'Credenciales no validas';

            }
        }).catch(error =>{
            console.log(error);
        });
    }
}

function ValidateAdmin() {
    let code = ValidateCodeAdmin();
    let user = ValidateUserAdmin();
    let email = ValidateEmailAdmin();
    let pass = ValidatePassAdmin();

    if (code == true && pass == true && user == true && email == true) {
        axios({
            method: 'POST',
            url: '../backend/axios/admin.php?action=login',
            responseType: 'json',
            data: loginAdmin
        }).then(resAdmin =>{
            //console.log(resAdmin.data);
            
            if(resAdmin.data.valido == true){
                document.getElementById('login-user-admin').style.borderColor = 'grey';
                document.getElementById('login-pass-admin').style.borderColor = 'grey';
                document.getElementById('login-code-admin').style.borderColor = 'grey';
                document.getElementById('email-login-admin').style.borderColor = 'grey';
                document.getElementById('warning-admin').innerHTML = '';
                window.location.href = '../profiles/profile-admin.php';
            }else{
                document.getElementById('login-user-admin').style.borderColor = 'red';
                document.getElementById('login-pass-admin').style.borderColor = 'red';
                document.getElementById('login-code-admin').style.borderColor = 'red';
                document.getElementById('email-login-admin').style.borderColor = 'red';
                document.getElementById('warning-admin').innerHTML = 'Credenciales no validas';
            }
        }).catch(error =>{
            console.log(error);
        });
   
    }
}

function ValidateUserClient() {
    if (document.getElementById('login-user-client').value == '' || chars.test(document.getElementById('login-user-client').value) == false || symbols.test(document.getElementById('login-user-client').value) == true) {
        document.getElementById('login-user-client').value = '';
        document.getElementById('login-user-client').style.borderColor = 'red';
        document.getElementById('login-user-client').placeholder = 'Ingrese un usuarío valido';
        return false;
    } else {
        document.getElementById('login-user-client').style.borderColor = 'grey';
        loginClient.user = document.getElementById('login-user-client').value;
        return true;
    }
    return false;
}

function ValidatePassClient() {
    if (document.getElementById('login-pass-client').value == '' || chars.test(document.getElementById('login-pass-client').value) == false || symbols.test(document.getElementById('login-pass-client').value) == true) {
        document.getElementById('login-pass-client').value = '';
        document.getElementById('login-pass-client').style.borderColor = 'red';
        document.getElementById('login-pass-client').placeholder = 'Contraseña incorrecta';
        return false;
    } else {
        document.getElementById('login-pass-client').style.borderColor = 'grey';
        loginClient.pass = document.getElementById('login-pass-client').value;
        return true;
    }
    return false;
}

function ValidateCodeCompany() {
    if (document.getElementById('login-code-company').value == '' || document.getElementById('login-code-company').value < 1000 || document.getElementById('login-code-company').value > 3999 || symbols.test(document.getElementById('login-code-company').value) == true) {
        document.getElementById('login-code-company').value = '';
        document.getElementById('login-code-company').style.borderColor = 'red';
        document.getElementById('login-code-company').placeholder = 'Código incorrecto';
        return false;
    } else {
        document.getElementById('login-code-company').style.borderColor = 'grey';
        loginCompany.code = parseInt(document.getElementById('login-code-company').value);
        return true;
    }
}

function ValidatePassCompany() {
    if (document.getElementById('login-pass-company').value == '' || chars.test(document.getElementById('login-pass-company').value) == false || symbols.test(document.getElementById('login-pass-company').value) == true) {
        document.getElementById('login-pass-company').value = '';
        document.getElementById('login-pass-company').style.borderColor = 'red';
        document.getElementById('login-pass-company').placeholder = 'Contraseña incorrecta';
        return false;
    } else {
        document.getElementById('login-pass-company').style.borderColor = 'grey';
        loginCompany.pass = document.getElementById('login-pass-company').value;
        return true;
    }
    return false;
}

function ValidateCodeAdmin() {
    if (document.getElementById('login-code-admin').value == '' || document.getElementById('login-code-admin').value != 1905) {
        document.getElementById('login-code-admin').value = '';
        document.getElementById('login-code-admin').style.borderColor = 'red';
        document.getElementById('login-code-admin').placeholder = 'Código incorrecto';
        return false;
    } else {
        document.getElementById('login-code-admin').style.borderColor = 'grey';
        loginAdmin.code = parseInt(document.getElementById('login-code-admin').value);
        return true;
    }
    return true;
}

function ValidateUserAdmin() {
    if (document.getElementById('login-user-admin').value == '' || chars.test(document.getElementById('login-user-admin').value) == false || symbols.test(document.getElementById('login-user-admin').value) == true) {
        document.getElementById('login-user-admin').value = '';
        document.getElementById('login-user-admin').style.borderColor = 'red';
        document.getElementById('login-user-admin').placeholder = 'Ingrese un usuarío valido';
        return false;
    } else {
        document.getElementById('login-user-admin').style.borderColor = 'grey';
        loginAdmin.user = document.getElementById('login-user-admin').value;
        return true;
    }
    return false;
}

function ValidatePassAdmin() {
    if (document.getElementById('login-pass-admin').value == '' || chars.test(document.getElementById('login-pass-admin').value) == false || symbols.test(document.getElementById('login-pass-admin').value) == true) {
        document.getElementById('login-pass-admin').value = '';
        document.getElementById('login-pass-admin').style.borderColor = 'red';
        document.getElementById('login-pass-admin').placeholder = 'Contraseña incorrecta';
        return false;
    } else {
        document.getElementById('login-pass-admin').style.borderColor = 'grey';
        loginAdmin.pass = document.getElementById('login-pass-admin').value;
        return true;
    }
    return false;
}

function ValidateEmailClient() {
    if (email.test(document.getElementById('email-login-client').value) == true) {
        document.getElementById('email-login-client').style.borderColor = 'grey';
        loginClient.email = document.getElementById('email-login-client').value;
        return true;
    } else {
        document.getElementById('email-login-client').value = '';
        document.getElementById('email-login-client').style.borderColor = 'red';
        document.getElementById('email-login-client').placeholder = 'Ingrese un correo valido';
        return false;
    }
    return false;
}

function ValidateEmailCompany() {
    if (email.test(document.getElementById('email-login-company').value) == true) {
        document.getElementById('email-login-company').style.borderColor = 'grey';
        loginCompany.email = document.getElementById('email-login-company').value;
        return true;
    } else {
        document.getElementById('email-login-company').value = '';
        document.getElementById('email-login-company').style.borderColor = 'red';
        document.getElementById('email-login-company').placeholder = 'Ingrese un correo valido';
        return false;
    }
    return false;
}

function ValidateEmailAdmin() {
    if (email.test(document.getElementById('email-login-admin').value) == true) {
        document.getElementById('email-login-admin').style.borderColor = 'grey';
        loginAdmin.email = document.getElementById('email-login-admin').value;
        return true;
    } else {
        document.getElementById('email-login-admin').value = '';
        document.getElementById('email-login-admin').style.borderColor = 'red';
        document.getElementById('email-login-admin').placeholder = 'Ingrese un correo valido';
        return false;
    }
    return false;
}
