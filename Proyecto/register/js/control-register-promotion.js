//Centralizar el JSON con la estructura del usado en el profile-company
var productPromotion = {
    product: "",
    branch: "",
    realPrice: "",
    discount: "",
    discountPrice: "",
    start: "",
    end: ""
}

function ShowProduct(){
    //Mostrar los productos y dependiendo del que escoja mostrar las sucursales en las que está disponible el producto
    console.log("Mostrar");
}

function ShowBranch() {
    //Función que mostrará las sucursales al cambiar lo seleccionado en el producto (onchange)
    console.log("Mostrar");
}

function ValidateForm() {
    let product = ValidateProduct();
    let discount = ValidateDiscount();
    let realPrice = getPrice();
    let discountPrice = CalculatePrice();
    let start = ValidateStart();
    let end = ValidateEnd();
    let branch = ValidateBranch();

    if (product == true && discount == true && realPrice == true && discountPrice == true && start == true && end == true && branch == true) {
        productPromotion.product = document.getElementById('product-select-promotion').options[document.getElementById('product-select-promotion').selectedIndex].value;
        productPromotion.discount = `${document.getElementById('discount-product').value}%`;
        productPromotion.realPrice = document.getElementById('real-price-promotion').innerHTML;
        productPromotion.discountPrice = parseFloat(priceDiscount).toFixed(2);
        productPromotion.start = [document.getElementById('date-init-promotion').value, document.getElementById('time-init-promotion').value];
        productPromotion.end = [document.getElementById('date-end-promotion').value, document.getElementById('time-end-promotion').value];
        productPromotion.branch = $("#branch-select-promotion").val();
    }
    console.log(productPromotion);
}

var selectedProduct;
var priceDiscount;

function ValidateProduct() {
    let productSelected = document.getElementById('product-select-promotion');
    selectedProduct = productSelected.options[productSelected.selectedIndex].value;
    if (productSelected.options[productSelected.selectedIndex].value == 'Seleccione un Producto') {
        document.getElementById('select-product-alert').innerHTML = `Seleccione un Producto de los disponibles`;
        return false;
    } else {
        document.getElementById('select-product-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidateDiscount() {
    if (document.getElementById('discount-product').value == '') {
        document.getElementById('discount-product').value = '';
        document.getElementById('discount-product').style.borderColor = 'red';
        document.getElementById('discount-product').placeholder = 'Ingrese un descuento a aplicar';
        return false;
    } else {
        document.getElementById('discount-product').style.borderColor = 'grey';
        return true;
    }
    return false;
}

function getPrice() {
    //Obtener el precio del producto por petición
    return true;
}

function CalculatePrice() {
    let discount = `0.${document.getElementById('discount-product').value}`;
    //Calcular el precio con descuento del precio obtenido anteriormente
    priceDiscount = 900 - (900 * (parseFloat(discount)));
    if (priceDiscount > 1) {
        document.getElementById('discount-price-product').innerHTML = `L ${parseFloat(priceDiscount).toFixed(2)}`;
        return true;
    } else {
        return false;
    }
    return false;
}

function ValidateBranch() {
    if ($("#branch-select-promotion").val() == null) {
        document.getElementById('select-branch-alert').innerHTML = `Seleccione Sucursales de las disponibles`;
        return false;
    } else {
        document.getElementById('select-branch-alert').innerHTML = ``;
        return true;
    }
    return false;
}

// Validar que las fechas no choquen con ninguna otra promoción
function ValidateStart() {
    if (document.getElementById('date-init-promotion').value == '' || document.getElementById('time-init-promotion').value == '') {
        document.getElementById('date-start-alert').innerHTML = `Ingrese la hora y fecha en la que estará disponible la promoción`;
        return false;
    } else {
        document.getElementById('date-start-alert').innerHTML = ``;
        return true;
    }
    return false;
}

function ValidateEnd() {
    let valuesStart = (document.getElementById('date-init-promotion').value).split("-");
    let valuesEnd = (document.getElementById('date-end-promotion').value.split("-"));
    if (document.getElementById('date-end-promotion').value == '' || document.getElementById('time-end-promotion').value == '') {
        document.getElementById('date-end-alert').innerHTML = `Ingrese la hora y fecha hasta la que estará disponible la promoción`;
        return false;
    } else if ((valuesStart[1] > valuesEnd[1]) || (valuesStart[2] > valuesEnd[2] && valuesStart[1] == valuesEnd[1])) {
        document.getElementById('date-end-alert').innerHTML = `Ingrese la hora y fecha hasta la que estará disponible la promoción`;
        return false;
    } else {
        document.getElementById('date-end-alert').innerHTML = ``;
        return true;
    }
    return false;
}