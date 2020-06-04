// --------------------------------- Barras de Navegacion ---------------------------------
//Logo
document.getElementById('logo').innerHTML = `<img id="Mini-Mall-mainlogo" class="img-responsive" src="img/icon/MiniMall.png">`;
//Dropdown de cliente
document.getElementById('boton').style = 'color:white';
document.getElementById('client-dropdown').innerHTML = `<a class="dropdown-item" href="profiles/profile-client.php">Ver Perfil</a>
<a class="dropdown-item" href="profiles/profile-client.php">Editar Perfil</a>
<a class="dropdown-item" href="#" onclick="logoutClient()">Cerrar Sesión</a>`;
document.getElementById('cart').innerHTML = `<a class="nav-link " href="cart.php">
<h6 class="text-dark"><i class="fas fa-shopping-cart fa-fw"></i>Carrito</h6>
</a>`;

// --------------------------------- Cerrar Sesión ---------------------------------
function logoutClient(){
    axios({
        method: 'GET',
        url: 'backend/axios/clients.php?action=logout',
        responseType: 'json',
    }).then(resAdmin =>{
        window.location.href = 'index.php';
    }).catch(error =>{
        console.log(error);
    });
}

var products =[];
function showProducts(){
    
    axios({
        method: 'GET',
        url: 'backend/axios/products.php?all',
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
                    products.push(product);
                }   
            }
    
            for(let i=0; i<products.length; i++){
                document.getElementById('carousel-product-list').innerHTML+= `
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                            <div class="p-2 rounded bg-transparent border-0">
                                <div class="card-header border-0 rounded bg-transparent">
                                    <a onclick="setProduct(${i})" href="product.php"><img src="${products[i].productImg}"
                                        class="card card-img-top img-fluid mx-auto d-block card-img m-2 rounded-circle" alt="img1"></a>
                                </div>
                                <div class="card-body bg-dark border-0 rounded">
                                    <h3 class="card-title bg-light rounded-pill py-2 px-2 text-center">L ${products[i].productPrice}</h3>
                                    <div class="row">
                                        <div class="col-md-8 mx-auto">
                                            <h6>${products[i].productName}</h6>
                                        </div>
                                    </div>
                                    <div class="card-body p-0 text-center">
                                        <a href="promotions/categories.php" class="text-dark"><h5 class="bg-light rounded-pill">${products[i].productCategory}</h5></a>
                                        <h6>${products[i].productDescription}</h6>
                                        <button type="button" class="btn btn-sm bg-danger rounded-pill text-white px-3">Quitar de Carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                `;
            }
            $(".loader-wrapper").fadeOut("slow");
        }).catch(error =>{
            console.log(error);
        });
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
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