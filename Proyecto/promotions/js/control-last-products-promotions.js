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
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                                <div class="p-2 rounded bg-transparent border-0">
                                    <div class="card-header border-0 rounded bg-transparent">
                                        <img src="${products[i].productImg}"
                                            class="card card-img-top img-fluid mx-auto d-block card-img m-2 rounded-circle"
                                            alt="img1">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                `;
            }
    
            /*
            for(let j=1; j<products.length+1; j++){
                document.getElementById(`${j}`).src = `${products[j-1].productuImg}`;
                document.getElementById(`${j}`).style = "border: 2px solid #EEC058;";
            }
            for(let k=products.length+1; k<21;k++){
                document.getElementById(`${k}`).style = "visibility: hidden";
            }
            */
        }).catch(error =>{
            console.log(error);
        });
}