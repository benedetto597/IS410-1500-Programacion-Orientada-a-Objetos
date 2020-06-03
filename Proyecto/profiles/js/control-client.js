//Logo
document.getElementById('logo').innerHTML = `<img id="Mini-Mall-mainlogo" class="img-responsive" src="../img/icon/MiniMall.png">`;

//Dropdown de cliente
if(document.getElementById('client-dropdown')){
    document.getElementById('client-dropdown').innerHTML = `<a class="dropdown-item" href="../profiles/profile-client.php">Ver Perfil</a>
    <a class="dropdown-item" href="../profiles/profile-client.php">Editar Perfil</a>
    <a class="dropdown-item" href="#" onclick="logout()">Cerrar Sesión</a>`;
    document.getElementById('cart').innerHTML = `<a class="nav-link" href="../cart.php">
    <h6 class="text-dark"><i class="fas fa-shopping-cart fa-fw"></i>Carrito</h6>
    </a>`;
    
}

var clientUser = {
    firstName: "",
    lastName: "",
    gen: "",
    country: "",
    currency: "",
    user: "",
    email: "",
    pass: "",
    profileImg: ""
};

//Se debe usar un token o un identificador de que son los favoritos de este usuario trayendolos de la base de datos
var favoriteProducts = [{
    productName: "Jabón liquido",
    productImg: "C:\\fakepath\\lp.jpeg",
    productRealPrice: "120.00",
    productCategory: "Hogar",
    productDescription: "Jabón para manos liquido",
    productSail: 87,
    productPromotion: [{
        productDiscount: "50%",
        productPromoPrice: "60.00",
        productPromoStart: ["2020-03-30", "21:02"],
        productPromoEnd: ["2020-04-12", "21:02"]
    }, {
        productDiscount: "50%",
        productPromoPrice: "60.00",
        productPromoStart: ["2020-05-10", "21:02"],
        productPromoEnd: ["2020-06-12", "21:02"]
    }]
}, {
    productName: "Jabón liquido",
    productImg: "C:\\fakepath\\lp.jpeg",
    productRealPrice: "120.00",
    productCategory: "Hogar",
    productDescription: "Jabón para manos liquido",
    productSail: 87,
    productPromotion: [{
        productDiscount: "50%",
        productPromoPrice: "60.00",
        productPromoStart: ["2020-03-30", "21:02"],
        productPromoEnd: ["2020-04-12", "21:02"]
    }, {
        productDiscount: "50%",
        productPromoPrice: "60.00",
        productPromoStart: ["2020-05-10", "21:02"],
        productPromoEnd: ["2020-06-12", "21:02"]
    }]
}, {
    productName: "Jabón liquido",
    productImg: "C:\\fakepath\\lp.jpeg",
    productRealPrice: "120.00",
    productCategory: "Hogar",
    productDescription: "Jabón para manos liquido",
    productSail: 87,
    productPromotion: [{
        productDiscount: "50%",
        productPromoPrice: "60.00",
        productPromoStart: ["2020-03-30", "21:02"],
        productPromoEnd: ["2020-04-12", "21:02"]
    }, {
        productDiscount: "50%",
        productPromoPrice: "60.00",
        productPromoStart: ["2020-05-10", "21:02"],
        productPromoEnd: ["2020-06-12", "21:02"]
    }]
}];

var favoriteCompanies = [{
    companyName: "La Colonia",
    companyDir: "Colonia Tiloarque",
    country: "Honduras",
    currency: "Lempira",
    companyWha: "22900193",
    email: "example@example.com"
}, {
    companyName: "La Colonia",
    companyDir: "Colonia Tiloarque",
    country: "Honduras",
    currency: "Lempira",
    companyWha: "22900193",
    email: "example@example.com"
}, {
    companyName: "La Colonia",
    companyDir: "Colonia Tiloarque",
    country: "Honduras",
    currency: "Lempira",
    companyWha: "22900193",
    email: "example@example.com"
}];

function logout(){
    $(".loader-wrapper").fadeIn("slow");
    document.getElementById('pp-photo').style="visibility: hidden;";
    axios({
        method: 'GET',
        url: '../backend/axios/clients.php?action=logout',
        responseType: 'json',
    }).then(resAdmin =>{
        window.location.href = '../index.php';
    }).catch(error =>{
        console.log(error);
    });
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function ShowInfo() {
    let key = getCookie('key');
    axios({
        method: 'GET',
        url: '../backend/axios/clients.php?id=' + key,
        responseType: 'json',
    }).then(resClient =>{
        let client = resClient.data;
        clientUser.firstName= client.nombre;
        clientUser.lastName= client.apellido;
        clientUser.gen= client.genero;
        clientUser.country= client.pais;
        clientUser.currency= client.moneda;
        clientUser.user= client.nombreUsuario;
        clientUser.email= client.correo;
        clientUser.pass= client.contraseña;
        clientUser.profileImg= client.fotoCliente;
        //Cargar Imagen
        if(clientUser.profileImg != 'l' || clientUser.profileImg != ''){
            document.getElementById('profile-photo').innerHTML = `<img id="admin-photo-profile" class="fb-image-profile thumbnail" src="${clientUser.profileImg}" alt="Profile image"/>`;
        }
    }).catch(error =>{
        console.log(error);
    });
    let timer = setInterval(show, 4000);

    function show(){
        document.getElementById('btn-update-info').disabled = true;

        //Información debajo de la foto de perfil
        document.getElementById('client-name').innerHTML = `<i class="fas fa-user-circle"></i> ${clientUser.firstName} ${clientUser.lastName}`;
        document.getElementById('client-user').innerHTML = `<i class="fas fa-user fa-fw"></i> ${clientUser.user}`;
        document.getElementById('client-email').innerHTML = `<i class="fas fa-at"></i>${clientUser.email}`;

        //Sección Información
        document.getElementById('info-client-name').innerHTML = `${clientUser.firstName} ${clientUser.lastName}`;
        document.getElementById('info-client-user').innerHTML = clientUser.user;
        document.getElementById('info-client-email').innerHTML = clientUser.email;
        document.getElementById('info-client-country').innerHTML = clientUser.country;
        document.getElementById('info-client-currency').innerHTML = clientUser.currency;
        document.getElementById('info-client-gen').innerHTML = clientUser.gen;

        //Sección de Productos Favoritos y Empresas Favoritos
        FillFavorites();

        //Sección Editar Perfil
        document.getElementById('first-name-client').value = clientUser.firstName;
        document.getElementById('last-name-client').value = clientUser.lastName;
        document.getElementById('user-client').value = clientUser.user;
        document.getElementById('email-client').value = clientUser.email;
        //Seleccionar con jquery
        $(`#country-select option[value='${clientUser.country}']`).attr("selected", true);
        if(clientUser.currency == 'Lempira'){
            $(`#currency-select option[value='${clientUser.currency}']`).attr("selected", true);
        }
        if(clientUser.currency == 'Dolar'){
            $(`#currency-select option[value='${clientUser.currency}']`).attr("selected", true);
        }
        $(`#sex-select-client option[value='${clientUser.gen}']`).attr("selected", true);
        document.getElementById('password-client').value = clientUser.pass;
        document.getElementById('password-client-repeat').value = clientUser.pass;
        clearInterval(timer);
    }
}

function FillFavorites() {
    //Recibir todas los productos que añada a favoritos y quitar lo de las compañias
    //habilitar el quitar de carrito y quitar de favoritos
    for (let i = 0; i < favoriteProducts.length; i++) {
        for (let j = 0; j < favoriteProducts[i].productPromotion.length; j++) {
            document.getElementById('favorite-products').innerHTML += `
            <tr>
                <th scope="row" id="favorite-product-name-${i}">${favoriteProducts[i].productName}</th>
                <td id="favorite-product-categorie-${i}">${favoriteProducts[i].productCategory}</td>
                <td id="favorite-product-real-price-${i}">${favoriteProducts[i].productRealPrice}</td>
                <td id="favorite-product-discount-${i}">${favoriteProducts[i].productPromotion[j].productDiscount}</td>
                <td id="favorite-product-promo-price-${i}">${favoriteProducts[i].productPromotion[j].productPromoPrice}</td>
                <td id="favorite-product-promo-end-${i}">${favoriteProducts[i].productPromotion[j].productPromoEnd[0]}</td>
            </tr>
            `;
        }
    }
    for (let k = 0; k < favoriteCompanies.length; k++) {
        document.getElementById('favorite-companies').innerHTML += `
            <tr>
                <th scope="row" id="favorite-company-name-${k}">${favoriteCompanies[k].companyName}</th>
                <td id="favorite-company-country-${k}">${favoriteCompanies[k].country}</td>
                <td id="favorite-company-currency-${k}">${favoriteCompanies[k].currency}</td>
                <td id="favorite-company-dir-${k}">${favoriteCompanies[k].companyDir}</td>
                <td id="favorite-company-phone-${k}">${favoriteCompanies[k].companyWha}</td>
                <td id="favorite-product-email-${k}">${favoriteCompanies[k].email}</td>
            </tr>
            `;
    }
    $(".loader-wrapper").fadeOut("slow");
}

function EnableChange() {
    document.getElementById('btn-update-info').disabled = false;
    VerifyData();
}

function VerifyData() {
    ValidateFirstName();
    ValidateLastName();
    ValidateUser();
    ValidateEmail();
    ValidateCountry();
    ValidateCurrency();
    ValidateGender();
}

function updateInfo(){
    if(ValidateFirstName() &&
    ValidateLastName() &&
    ValidateUser() &&
    ValidateEmail() &&
    ValidateCountry() &&
    ValidateCurrency() &&
    ValidateGender() ){
        document.getElementById('data-alert').innerHTML = '';
        if(document.querySelector('#pp-photo').value != ''){
            uploadImageProfile();
        }else{
            document.getElementById('pp-url').innerHTML = clientUser.profileImg;
        }
        $(".loader-wrapper").fadeIn("slow");
        let timer = setInterval(update, 3000);
        function update(){
            pp = ValidateProfilePhoto();
            if(
                pp 
            ){
                //console.log(clientUser);
                let key = getCookie('key');
                axios({
                    method: 'PUT',
                    url: '../backend/axios/clients.php?id=' + key ,
                    responseType: 'json',
                    data: clientUser
                }).then(resClient =>{
                    //console.log(resClient.data);
                    clearInterval(timer);
                    window.location.href = '../profiles/profile-client.php';
                }).catch(error =>{
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

function ValidateProfilePhoto() {
    
    if (document.getElementById('pp-url').innerHTML == '') {
        return false;
    } else {
        let logoUrl = document.getElementById('pp-url');
        clientUser.profileImg = logoUrl.innerHTML;
        return true;
    }
}

function ValidateFirstName() {
    let letters = /([A-Za-z])\w+/;
    let nums = /([0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('first-name-client').value == '' || nums.test(document.getElementById('first-name-client').value) == true || letters.test(document.getElementById('first-name-client').value) == false ||  symbols.test(document.getElementById('first-name-client').value) == true) {
        document.getElementById('first-name-client').value = '';
        document.getElementById('first-name-client').style.borderColor = 'red';
        document.getElementById('first-name-client').placeholder = 'No usar simbolos ni números';
        return false;
    } else {
        document.getElementById('first-name-client').placeholder = ``;
        document.getElementById('first-name-client').style.borderColor = 'grey';
        let upperName = document.getElementById('first-name-client').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('first-name-client').value = upperName;
        clientUser.firstName = document.getElementById('first-name-client').value;
        return true;
    }
}

function ValidateLastName() {
    let letters = /([A-Za-z])\w+/;
    let nums = /([0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('last-name-client').value == '' || nums.test(document.getElementById('last-name-client').value) == true || letters.test(document.getElementById('last-name-client').value) == false ||  symbols.test(document.getElementById('last-name-client').value) == true) {
        document.getElementById('last-name-client').value = '';
        document.getElementById('last-name-client').style.borderColor = 'red';
        document.getElementById('last-name-client').placeholder = 'No usar simbolos ni números';
        return false;
    } else {
        document.getElementById('last-name-client').placeholder = ``;
        document.getElementById('last-name-client').style.borderColor = 'grey';
        let upperName = document.getElementById('last-name-client').value.replace(/\b[a-z]/g, upper => upper.toUpperCase());
        document.getElementById('last-name-client').value = upperName;
        clientUser.lastName = document.getElementById('last-name-client').value;
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
        clientUser.country = countrySelected.options[countrySelected.selectedIndex].value;
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
        clientUser.currency = currencySelected.options[currencySelected.selectedIndex].value;
        return true;
    }
}

function ValidateGender() {
    let genderSelected = document.getElementById('sex-select-client');
    if (genderSelected.options[genderSelected.selectedIndex].value == 'Seleccione Genero') {
        document.getElementById('gen-alert').innerHTML = `Seleccione un genero de los disponibles`;
        return false;
    } else {
        document.getElementById('gen-alert').innerHTML = ``;
        clientUser.gen = genderSelected.options[genderSelected.selectedIndex].value;
        return true;
    }
}

function ValidateUser() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('user-client').value == '' || chars.test(document.getElementById('user-client').value) == false || symbols.test(document.getElementById('user-client').value) == true) {
        document.getElementById('user-client').value = '';
        document.getElementById('user-client').style.borderColor = 'red';
        document.getElementById('user-client').placeholder = 'No usar simbolos';
        return false;
    } else {
        document.getElementById('user-client').style.borderColor = 'grey';
        clientUser.user = document.getElementById('user-client').value;
        return true;
    }
}

function ValidateEmail() {
    let email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (email.test(document.getElementById('email-client').value) == false) {
        document.getElementById('email-client').value = '';
        document.getElementById('email-client').style.borderColor = 'red';
        document.getElementById('email-client').placeholder = 'Ingresar un Email Valido';
        return false;
    } else {
        document.getElementById('email-client').style.borderColor = 'grey';
        clientUser.email = document.getElementById('email-client').value;
        return true;
    }
}


function ValidatePassword() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('password-client').value == '' || chars.test(document.getElementById('password-client').value) == false || symbols.test(document.getElementById('password-client').value) == true) {
        document.getElementById('password-client').value = '';
        document.getElementById('password-client').style.borderColor = 'red';
        document.getElementById('password-client').placeholder = 'Solo letras y números';
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
        document.getElementById('password-client-repeat').style.borderColor = 'gray';
        clientUser.pass = document.getElementById('password-client-repeat').value;
        return true;
    }
}