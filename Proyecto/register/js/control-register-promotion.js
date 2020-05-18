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
        productPromotion.realPrice = productPrice;
        productPromotion.discountPrice = parseFloat(priceDiscount).toFixed(2);
        productPromotion.start = [document.getElementById('date-init-promotion').value, document.getElementById('time-init-promotion').value];
        productPromotion.end = [document.getElementById('date-end-promotion').value, document.getElementById('time-end-promotion').value];
        productPromotion.branch = $("#branch-select-promotion").val();
        
        console.log(productPromotion);
        axios({
            method: 'POST',
            url: '../backend/axios/promotions.php',
            responseType: 'json',
            data: productPromotion
        }).then(res =>{
            console.log(res.data);
            //window.location.href = '../profiles/profile-company.html';
        }).catch(error =>{
            console.log(error);
        });
    }
    
}

var selectedProduct;
var priceDiscount;
var values;
var productPrice;

function ValidateProduct() {
    let productSelected = document.getElementById('product-select-promotion');
    selectedProduct = productSelected.options[productSelected.selectedIndex].value;
    if (productSelected.options[productSelected.selectedIndex].value == 'Seleccione un Producto') {
        document.getElementById('select-product-alert').innerHTML = `Seleccione un Producto de los disponibles`;
        return false;
    } else {
        document.getElementById('select-product-alert').innerHTML = ``;
        getPrice();
        return true;
    }
    
}

function ValidateDiscount() {
    if (document.getElementById('discount-product').value == '') {
        document.getElementById('discount-product').value = '';
        document.getElementById('discount-product').style.borderColor = 'red';
        document.getElementById('discount-product').placeholder = 'Ingrese un descuento a aplicar';
        return false;
    } else {
        document.getElementById('discount-product').style.borderColor = 'grey';
        CalculatePrice();
        return true;
    }
}

function getPrice() {
    for(let i=0; i<values.length; i++){
        if(values[i].nombreProducto == selectedProduct){
            productPrice = values[i].precioProducto;
            document.getElementById('real-price-promotion').innerHTML = `${companyCurrency() ? "$" : "L"} ${values[i].precioProducto}`;
        }
    }
    return true;
}

function companyCurrency(){
    let key = readCookie('key');
    axios({
        method: 'GET',
        url: `../backend/axios/companies.php?id=${key}`,
        responseType: 'json'
    }).then(resBranch =>{
        let company = resBranch.data;
        if(company.moneda == 'Lempira'){
            return true;
        }else{
            return false;
        }
    }).catch(error =>{
        console.log(error);
    });
}

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

function CalculatePrice() {
    let discount = `0.${document.getElementById('discount-product').value}`;
    //Calcular el precio con descuento del precio obtenido anteriormente
    priceDiscount = productPrice - (productPrice * (parseFloat(discount)));
    if (priceDiscount > 1) {
        document.getElementById('discount-price-product').innerHTML = `${companyCurrency() ? "$" : "L"} ${parseFloat(priceDiscount).toFixed(2)}`;
        return true;
    } else {
        return false;
    }
}

function ValidateBranch() {
    if ($("#branch-select-promotion").val() == null) {
        document.getElementById('select-branch-alert').innerHTML = `Seleccione Sucursales de las disponibles`;
        return false;
    } else {
        document.getElementById('select-branch-alert').innerHTML = ``;
        return true;
    }
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

function showInfo(){

    axios({
        method: 'GET',
        url: '../backend/axios/branch.php',
        responseType: 'json'
    }).then(resBranch =>{

        let branches = resBranch.data;
        for(let i = 0; i<branches.length; i++){
            document.getElementById('branch-select-promotion').innerHTML += `
                <option value="${branches[i].nombreSucursal}">${branches[i].nombreSucursal}</option>
            `;
        }

        fillInfo(branches);
        
    }).catch(error =>{
        console.log(error);
    });
}

function fillInfo(branches){
    axios({
        method: 'GET',
        url: '../backend/axios/products.php',
        responseType: 'json'
    }).then(resProducts =>{

        let products = resProducts.data;
        values = Object.values(products);
        for(let i = 0; i<values.length; i++){
            let count = 0;
            for(let j = 0; j<values[i].sucursalProducto.length; j++){   
                if(count < branches.length){
                    while(count != branches.length){
                        if(values[i].sucursalProducto[j] == branches[count].nombreSucursal){
                            document.getElementById('product-select-promotion').innerHTML +=
                            `<option value="${values[i].nombreProducto}">${values[i].nombreProducto}</option>`;
                        }
                        count++;
                    } 
                }
            }
        }
        getPrice();
    }).catch(error =>{
        console.log(error);
    });
}
