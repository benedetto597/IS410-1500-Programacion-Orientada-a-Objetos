//Centralizar los JSON en aspecto con el de prfile-company
var product = {
    name: "",
    img: "",
    price:"",
    category: "",
    description: "",
    branch:"",
    promotions:[{"mensaje": "hola"}]
}

function ValidateForm() {
    let name = ValidateName();
    let img = ValidateImg();
    let price = ValidatePrice();
    let category = ValidateCategory();
    let description = ValidateDescription();
    let branch = ValidateBranch();

    if (name == true && img == true && price == true && category == true && description == true && branch == true) {
        product.name = document.getElementById('name-product').value;
        product.img = document.getElementById('file-product').value;
        product.price = parseFloat(document.getElementById('price-product').value).toFixed(2);
        product.category = document.getElementById('categories-select-product').options[document.getElementById('categories-select-product').selectedIndex].value;
        product.description = document.getElementById('description-product').value;
        product.branch = $("#branch-select-product").val();

        axios({
            method: 'POST',
            url: '../backend/axios/products.php',
            responseType: 'json',
            data: product
        }).then(resBranch =>{
            window.location.href = '../profiles/profile-company.html';
        }).catch(error =>{
            console.log(error);
        });
    }
}

function ValidateName() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('name-product').value == '' || chars.test(document.getElementById('name-product').value) == false || symbols.test(document.getElementById('name-product').value) == true) {
        document.getElementById('name-product').value = '';
        document.getElementById('name-product').style.borderColor = 'red';
        document.getElementById('name-product').placeholder = 'Solo usar letras y números';
        return false;
    } else {
        document.getElementById('name-product').style.borderColor = 'grey';
        return true;
    }
    return false;
}

function ValidateImg() {
    //Restringir la ruta
    if (document.getElementById('file-product').value == '') {
        document.getElementById('img-alert').innerHTML = `Seleccione una imagen `;
        return false;
    } else {
        document.getElementById('img-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidatePrice() {
    if (document.getElementById('price-product').value == '') {
        document.getElementById('price-alert').innerHTML = `Ingrese el precio del Producto`;
        return false;
    } else {
        document.getElementById('price-alert').innerHTML = ``;
        document.getElementById('price-product').value = parseFloat(document.getElementById('price-product').value).toFixed(2);
        return true;
    }
    return false;
}

function ValidateCategory() {
    let catSelected = document.getElementById('categories-select-product');
    if (catSelected.options[catSelected.selectedIndex].value == 'Seleccione una Categoría') {
        document.getElementById('categories-alert').innerHTML = `Seleccione una Categoría de las disponibles`;
        return false;
    } else {
        document.getElementById('categories-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidateDescription() {
    let chars = /([A-Za-z0-9!-/])\w+/;
    if (document.getElementById('description-product').value == '' || chars.test(document.getElementById('description-product').value) == false) {
        document.getElementById('description-product').value = '';
        document.getElementById('description-product').style.borderColor = 'red';
        document.getElementById('description-product').placeholder = 'Escriba una descripción valida';
        return false;
    } else {
        document.getElementById('description-product').style.borderColor = 'grey';
        return true;
    }
    return false;
}

function ValidateBranch() {
    if ($("#branch-select-product").val() == null || $("#branch-select-product").val() == 'Seleccione Sucursal') {
        document.getElementById('branch-alert').innerHTML = `Seleccione Sucursales de las disponibles`;
        return false;
    } else {
        document.getElementById('branch-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function showBranches(){
    axios({
        method: 'GET',
        url: '../backend/axios/branch.php',
        responseType: 'json'
    }).then(resBranch =>{
        let branches = resBranch.data;
        for(let i = 0; i<branches.length; i++){
            document.getElementById('branch-select-product').innerHTML += `
                <option value="${branches[i].nombreSucursal}">${branches[i].nombreSucursal}</option>
            `;
        }
        
    }).catch(error =>{
        console.log(error);
    });

    let key = readCookie('key');

    axios({
        method: 'GET',
        url: `../backend/axios/companies.php?id=${key}`,
        responseType: 'json'
    }).then(resBranch =>{
        let company = resBranch.data;
        if(company.moneda == 'Lempira')
            document.getElementById('currency-company').innerHTML = 'L';
        else
            document.getElementById('currency-company').innerHTML = '$';
    }).catch(error =>{
        console.log(error);
    });

}

//Leer un elemento especifico de las cookies
function readCookie(name) {

    let nameEQ = name + "="; 
    let ca = document.cookie.split(';');
  
    for(let i=0;i < ca.length;i++) {
  
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) {
            return decodeURIComponent( c.substring(nameEQ.length,c.length) );
        }
  
    }
}