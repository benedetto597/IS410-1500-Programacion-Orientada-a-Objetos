var product = {
    name: "",
    img: "",
    price:"",
    category: "",
    description: ""
}

function ValidateForm() {
    let name = ValidateName();
    let img = ValidateImg();
    let price = ValidatePrice();
    let category = ValidateCategory();
    let description = ValidateDescription();

    if (name == true && img == true && price == true && category == true && description == true) {
        product.name = document.getElementById('name-product').value;
        product.img = document.getElementById('file-product').value;
        product.price = parseFloat(document.getElementById('price-product').value).toFixed(2);
        product.category = document.getElementById('categories-select-product').options[document.getElementById('categories-select-product').selectedIndex].value;
        product.description = document.getElementById('description-product').value;
    }
}

function ValidateName() {
    let chars = /([A-Za-z0-9])\w+/;
    let symbols = /([!-/:-@{-¿])/;
    if (document.getElementById('name-product').value == '' || chars.test(document.getElementById('name-product').value) == false || symbols.test(document.getElementById('name-product').value) == true) {
        document.getElementById('name-alert').innerHTML = `Ingrese un nombre de producto valido (sin simbolos, sólo letras y números)`;
        return false;
    } else {
        document.getElementById('name-alert').innerHTML = ``;
        let upperLastName = document.getElementById('name-product').value.replace(/\b[a-z]/, upper => upper.toUpperCase());
        document.getElementById('name-product').value = upperLastName;
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
        document.getElementById('name-alert').innerHTML = `Ingrese una Descripción de producto valida`;
        return false;
    } else {
        document.getElementById('name-alert').innerHTML = ``;
        return true;
    }
    return false;
}