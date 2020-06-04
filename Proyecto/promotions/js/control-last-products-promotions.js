// --------------------------------- Barras de Navegacion ---------------------------------
//Logo
document.getElementById('logo').innerHTML = `<img id="Mini-Mall-mainlogo" class="img-responsive" src="../img/icon/MiniMall.png">`;

//Dropdown de registro
if(document.getElementById('register-dropdown')){
    document.getElementById('register-dropdown').innerHTML = `<a class="dropdown-item" href="../register/register-client.php">Cliente</a>
    <a class="dropdown-item" href="../register/register-company.php">Empresa</a>
    <a class="dropdown-item" href="../register/register-admin.php">Super Admin</a>`;
}

//Dropdown de cliente
if(document.getElementById('client-dropdown')){
    document.getElementById('client-dropdown').innerHTML = `<a class="dropdown-item" href="../profiles/profile-client.php">Ver Perfil</a>
    <a class="dropdown-item" href="../profiles/profile-client.php">Editar Perfil</a>
    <a class="dropdown-item" href="#" onclick="logoutClient()">Cerrar Sesión</a>`;
    document.getElementById('cart').innerHTML = `<a class="nav-link" href="../cart.php">
    <h6 class="text-dark"><i class="fas fa-shopping-cart fa-fw"></i>Carrito</h6>
    </a>`;
    
}

//Dropdown de Empresa
if(document.getElementById('company-dropdown')){
    document.getElementById('company-dropdown').innerHTML = `<a class="dropdown-item" href="../profiles/profile-company.php">Ver Perfil</a>
    <a class="dropdown-item" href="../profiles/profile-company.php">Editar Perfil</a>
    <a class="dropdown-item" href="#" onclick="logoutCompany()">Cerrar Sesión</a>`;
    document.getElementById('branch').innerHTML = `<a class="nav-link" href="../register/register-branch.php">
    <h6 class="text-dark"><i class="fas fa-plus fa-fw"></i>Sucursal</h6>
    </a>
    `;
}

//Dropdown de Administrador
if(document.getElementById('admin-dropdown')){
    document.getElementById('admin-dropdown').innerHTML = `<a class="dropdown-item" href="../profiles/profile-admin.php">Ver Perfil</a>
    <a class="dropdown-item" href="../profiles/profile-admin.php">Editar Perfil</a>
    <a class="dropdown-item" href="#" onclick="logoutAdmin()">Cerrar Sesión</a>`;
}

// --------------------------------- Cerrar Sesión ---------------------------------

function logoutClient(){
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

function logoutCompany(){
    axios({
        method: 'GET',
        url: '../backend/axios/companies.php?action=logout',
        responseType: 'json',
    }).then(resAdmin =>{
        window.location.href = '../index.php';
    }).catch(error =>{
        console.log(error);
    });
}

function logoutAdmin(){
    axios({
        method: 'GET',
        url: '../backend/axios/admin.php?action=logout',
        responseType: 'json',
    }).then(resAdmin =>{
        window.location.href = '../index.php';
    }).catch(error =>{
        console.log(error);
    });
}

var products =[];
var companies =[];
function showProducts(){
    
    axios({
        method: 'GET',
        url: '../backend/axios/products.php?all',
        responseType: 'json',
    }).then(resProduct =>{
        document.getElementById('carousel-product-list').innerHTML+= ``;
        let keys = Object.keys(resProduct.data);
            let values = Object.values(resProduct.data);
           
            for(let i = 0; i<keys.length; i++){
                let product = {};
                if(values[i].promocionesProducto){
                    //Obtener los comentarios para la seccion final del landing page
                    product['key'] = keys[i];
                    product['productName'] = values[i].nombreProducto;
                    product['productImg'] = values[i].imgProducto;
                    product['productDescription'] = values[i].descripcionProducto;
                    product['productCategory'] = values[i].categoriaProducto;
                    product['productPrice'] = values[i].promocionesProducto[0].precioDescPromocion;
                    
                    /*
                    product['sucursales'] = [];
                    for(let h=0; h<values[i].promocionesProducto.length; h++){
                        for(let l=0; values[i].promocionesProducto[h].sucursalPromocion.length;l++){
                            product['sucursales'].push = values[i].promocionesProducto[h].sucursalPromocion[l];
                        }
                    }*/
                    products.push(product);
                }   
            }
    
            for(let i=0; i<products.length; i++){
                document.getElementById('carousel-product-list').innerHTML+= `
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active py-4">
                                <div class="p-2 rounded bg-transparent border-0">
                                    <div class="card-header border-0 rounded bg-transparent">
                                    <a onclick="setProduct(${i})">
                                        <img src="${products[i].productImg}"
                                            class="card card-img-top img-fluid mx-auto d-block card-img m-2 rounded-circle"
                                            alt="img1">
                                    </a>
                                    </div>
                                    <div class="card-body bg-dark border-0 rounded">
                                        <h3 class="card-title bg-light rounded-pill py-2 px-2 text-center">L ${products[i].productPrice}</h3>
                                        <div class="row ml-auto mr-auto">
                                            
                                            <div class="col-md-12 pl-3">
                                                <h5>${products[i].productName}</h5>
                                            </div>
                                        </div>
                                        <div class="card-body p-0 text-center">
                                            <a href="categories.php" class="text-dark">
                                                <h5 class="bg-light rounded-pill">${products[i].productCategory}</h5>
                                            </a>
                                            <h6>${products[i].productDescription}</h6>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <button type="button" id="toCart-${i}" class="card-text bg-primary ml-auto mr-auto btn-sm shadow mb-0 rounded text-white" onclick="addToCart(${i});" style="height: 40px" ><i class="fas fa-cart-arrow-down"></i></button>
                                                
                                                </div>
                                                <div class="col-md-6">
                                                    <button type="button" id="toFav-${i}" class="card-text bg-danger ml-auto mr-auto btn-sm shadow mb-0 rounded text-white" onclick="addToFav(${i});" style="height: 40px" ><i class="fas fa-heart"></i></button>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                `;
            }
            let timer = setInterval(quit, 2500);
            function quit(){
                let key = getCookie('key');
                if(key){
                    axios({
                        method: 'GET',
                        url: '../backend/axios/clients.php?id=' + key,
                        responseType: 'json',
                    }).then(resClient =>{
                        if(resClient.data == null){
                            for(let i=0; i<products.length; i++){
                                document.getElementById(`toFav-${i}`).disabled = true; 
                                document.getElementById(`toCart-${i}`).disabled = true; 
                            } 
                        }else{
                            for(let i=0; i<products.length; i++){
                                document.getElementById(`toFav-${i}`).disabled = false; 
                                document.getElementById(`toCart-${i}`).disabled = false; 
                            }
                        }
                        $(".loader-wrapper").fadeOut("slow");
                        clearInterval(timer);
                    }).catch(error =>{
                        console.log(error);
                    });
                }else{
                    for(let i=0; i<products.length; i++){
                        document.getElementById(`toFav-${i}`).disabled = true; 
                        document.getElementById(`toCart-${i}`).disabled = true; 
                    }
                        
                    $(".loader-wrapper").fadeOut("slow");
                        clearInterval(timer);
                }
                
            }
        }).catch(error =>{
            console.log(error);
        });
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function addToCart(position){
    let key = getCookie('key');
    var data = {
        product: `${products[position].productName}`,
        branch: "tofill",
        realPrice: key,
        discount: "tofill",
        discountPrice: "tofill",
        start: ["2020-03-30", "21:02"],
        end: ["2020-03-30", "21:02"]
    }

    axios({
        method: 'POST',
        url: '../backend/axios/promotions.php?cart=cart',
        responseType: 'json',
        data: data
    }).then(res =>{
        console.log(res.data);
        document.getElementById(`toCart-${position}`).disabled = true; 
        //window.location.href = '../profiles/profile-company.php';
    }).catch(error =>{
        console.log(error);
    });
}

function addToFav(position){
    let key = getCookie('key');
    var data = {
        product: `${products[position].productName}`,
        branch: "tofill",
        realPrice: key,
        discount: "tofill",
        discountPrice: "tofill",
        start: ["2020-03-30", "21:02"],
        end: ["2020-03-30", "21:02"]
    }

    axios({
        method: 'POST',
        url: '../backend/axios/promotions.php?fav=fav',
        responseType: 'json',
        data: data
    }).then(res =>{
        console.log(res.data);
        document.getElementById(`toFav-${position}`).disabled = true; 
        //window.location.href = '../profiles/profile-company.php';
    }).catch(error =>{
        console.log(error);
    });
}


function setProduct(position){
    setCookie('producto', products[position].key, 1);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}