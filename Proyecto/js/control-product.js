// --------------------------------- Barras de Navegacion ---------------------------------
//Logo
document.getElementById('logo').innerHTML = `<img id="Mini-Mall-mainlogo" class="img-responsive" src="img/icon/MiniMall.png">`;
//Dropdown de cliente
document.getElementById('boton').style = 'color:white';
document.getElementById('client-dropdown').innerHTML = `<a class="dropdown-item" href="profiles/profile-client.php">Ver Perfil</a>
<a class="dropdown-item" href="profiles/profile-client.php">Editar Perfil</a>
<a class="dropdown-item" href="#" onclick="logoutClient()">Cerrar Sesión</a>`;
document.getElementById('cart').innerHTML = `<a class="nav-link " href="cart.php">
<h6 class="text-white"><i class="fas fa-shopping-cart fa-fw"></i>Carrito</h6>
</a>`;

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

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

var id = getCookie('producto');
var product;
//Obtener el producto a mostrar
axios({
    method: 'GET',
    url: 'backend/axios/products.php?idp='+id,
    responseType: 'json',
}).then(resProduct =>{
    //console.log(resProduct.data);
    product = resProduct.data;
    document.getElementById('form-product').innerHTML = `
    <div class="form-row ">
                    <div class="form-group col-md-3 ">
                        <div class="card" id="image-product">
                            <img src="${product.imgProducto}" class="card-img-top flex-row " alt="...">
                            <div class="card-header border-0 bg-transparent ml-auto mr-auto">
                                <!-- Calificador Responsive -->
                                <img src="img/icon/staricon.png" alt="" class="img-responsive" style="width: 1rem;">
                                <img src="img/icon/staricon.png" alt="" class="img-responsive" style="width: 1rem;">
                                <img src="img/icon/staricon.png" alt="" class="img-responsive" style="width: 1rem;">
                                <img src="img/icon/staricon.png" alt="" class="img-responsive" style="width: 1rem;">
                                <img src="img/icon/staricon.png" alt="" class="img-responsive" style="width: 1rem;">
                            </div>
                            <div class="card-body p-2 border-0 bg-transparent">
                                <input type="text" name="" id="comentario-nuevo"
                                    class="card-title rounded-pill mx-2 col-lg-11 col-md-10 col-sm-12 col-xs-12"
                                    placeholder="Comentario Aquí">
                                <button type="button" id="btn-comment-product"
                                    class="btn px-4 shadow m-0 rounded-pill col-lg-12 col-md-12 col-sm-12 col-xs-12" onclick="comment()">Publicar
                                    Comentarío</button>
                            </div>
                        </div>
                    </div>

                    <div class="form-group col-md-9 row">
                        <div class="col-lg-8 col-md-6 col-sm-12 col-xs-12 ">
                            <h2 class="px-3">${product.nombreProducto}</h2>
                            <!-- Anclar la empresa a la que pertenece el producto -->
                            <a href="promotions/categories.php" class="text-dark">
                                <h4 class="px-3">${product.categoriaProducto}</h4>
                            </a>
                            <div class="row m-2">
                                <div class="col-md-12 bg-white rounded">
                                    <h5>${product.descripcionProducto}</h5>
                                    <!-- Mostrar en tiempo real el tiempo faltante -->
                                </div>
                                <div class="col-md-12 rounded">
                                    <div id="clock"></div>
                                </div>
                            </div>
                            <div class="row m-2">
                                <div class="col-md-12 rounded">
                                    <h5>Pedido</h5>
                                    <hr>
                                    <!-- Mostrar en tiempo real el tiempo faltante -->
                                </div>
                                <div class="col-md-6 rounded">
                                    <input type="checkbox">
                                    <label for="vehicle1">Efectivo</label>
                                    <input type="checkbox">
                                    <label for="vehicle1"> Tarjeta</label><br>
                                </div>
                                <div class="col-md-6 rounded">
                                    <input type="number" id="cantidad" placeholder="Cantidad" min="1" max="100" class="card-title rounded-pill mx-2 col-lg-11 col-md-10 col-sm-12 col-xs-12">
                                    <small id="warning"></small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                            <div class="col-md-10">
                                <h5 class="bg-secundary text-white py-2 rounded-pill px-2 my-3 text-center">L ${product.promocionesProducto[0].precioDescPromocion}</h5>
                            </div>
                            <button type="button" id="btn-add-fav-product" onclick="addToFav()"
                            class="btn px-3 shadow my-3 text-dark rounded-pill">Añadir a Favoritos</button>
                            <button type="button" id="btn-add-cart-product" onclick="addToCart()"
                            class="btn  px-4 shadow my-3 text-dark rounded-pill">Añadir al Carrito</button>
                            <button type="button" id="btn-buy-product" onclick="comprar()"
                                class="btn  px-5 bg-success text-white  shadow my-3 text-dark  rounded-pill" data-toggle="modal"
                                data-target="#buy-product">Comprar</button>
                        </div>
                        <div class="container" id="comments-show">

                            <div class="col-md-12 text-left">
                                <h4 class="px-3">Comentarios</h4>
                            </div>
                            
                        </div>
                    </div>
                </div>
    
    `;
    if(!product.comentariosProducto){
        document.getElementById('comments-show').innerHTML = `
        <div class="row">
            <div class="col-md-12">
                <h5 class=" bg-white rounded-pill px-3">Sin Comentarios</h5>
            </div>
        </div>
        `;
    }else{
        for(let i=0; i<product.comentariosProducto.length; i++){
            document.getElementById('comments-show').innerHTML += `
            <div class="row">
                <div class="col-md-12">
                    <h5 class=" bg-white rounded-pill px-3">${product.comentariosProducto[i].comentario}</h5>
                </div>
            </div>
            `;
        }
    }
    time();
    $(".loader-wrapper").fadeOut("slow");
}).catch(error =>{
    console.log(error);
});

/*
function validateCheck(){
    $('input[type="checkbox"]').on('change', function(e){
        if (this.checked) {
            let checked = $(e.currentTarget).val();
            if(checked == 'Efectivo'){
                //Verificar si selecciono efectivo o tarjeta
            }
        } else {
            console.log('Checkbox ' + $(e.currentTarget).val() + ' unchecked');
        }
    });
}
*/
function addToFav(){
    let key = getCookie('key');
    var data = {
        product: `${product.nombreProducto}`,
        branch: "tofill",
        realPrice: key,
        discount: "tofill",
        discountPrice: "tofill",
        start: ["2020-03-30", "21:02"],
        end: ["2020-03-30", "21:02"]
    }

    axios({
        method: 'POST',
        url: 'backend/axios/promotions.php?fav=fav',
        responseType: 'json',
        data: data
    }).then(res =>{
        console.log(res.data);
        document.getElementById(`btn-add-fav-product`).disabled = true; 
        //window.location.href = '../profiles/profile-company.php';
    }).catch(error =>{
        console.log(error);
    });
}

function addToCart(){
    let key = getCookie('key');
    var data = {
        product: `${product.nombreProducto}`,
        branch: "tofill",
        realPrice: key,
        discount: "tofill",
        discountPrice: "tofill",
        start: ["2020-03-30", "21:02"],
        end: ["2020-03-30", "21:02"]
    }

    axios({
        method: 'POST',
        url: 'backend/axios/promotions.php?cart=cart',
        responseType: 'json',
        data: data
    }).then(res =>{
        console.log(res.data);
        document.getElementById(`btn-add-cart-product`).disabled = true; 
        //window.location.href = '../profiles/profile-company.php';
    }).catch(error =>{
        console.log(error);
    });
}

function comprar(){
    let key = getCookie('key');
    document.getElementById('warning').innerHTML = '';

    if(document.getElementById('cantidad').value != ''){
        var data = {
            product: `${product.nombreProducto}`,
            branch: "tofill",
            realPrice: key,
            discount: "tofill",
            discountPrice: document.getElementById('cantidad').value,
            start: ["2020-03-30", "21:02"],
            end: ["2020-03-30", "21:02"]
        }
    
        axios({
            method: 'POST',
            url: 'backend/axios/promotions.php?buy=buy',
            responseType: 'json',
            data: data
        }).then(res =>{
            console.log(res.data);
            document.getElementById(`btn-buy-product`).disabled = true; 
            //window.location.href = '../profiles/profile-company.php';
        }).catch(error =>{
            console.log(error);
        });
    }else{
        document.getElementById('warning').innerHTML = 'Ingrese la cantidad a comprar';
    }
    
}

function comment(){
    let key = getCookie('key');
        var data = {
            product: `${product.nombreProducto}`,
            branch: "tofill",
            realPrice: key,
            discount: "tofill",
            discountPrice: document.getElementById('comentario-nuevo').value,
            start: ["2020-03-30", "21:02"],
            end: ["2020-03-30", "21:02"]
        }
    
        axios({
            method: 'POST',
            url: 'backend/axios/promotions.php?comment=comment',
            responseType: 'json',
            data: data
        }).then(res =>{
            //console.log(res.data);
            //document.getElementById(`btn-comment-product`).disabled = true; 
            $(".loader-wrapper").fadeOut("slow");
            window.location.href = 'product.php';
        }).catch(error =>{
            console.log(error);
        });
    
}

function time(){

// Obtener intervalo de tiempo restante para finalización de una promoción
const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

const countdown = (deadline, elem) => {
    const el = document.getElementById(elem);
    const timerUpdate = setInterval(() => {
        let time = getRemainTime(deadline);
        el.innerHTML = `
            <h6 class="text-white bg-danger  py-2 text-center my-2 ">${time.remainDays} Dias | ${time.remainHours} Horas | ${time.remainMinutes} Minutos | ${time.remainSeconds} Segundos</h6>
            `;
        if (time.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = `
                    <h6 class="text-white bg-danger px-2 py-2 text-center mx-2 my-2 ">Promoción Expirada</h6>
                    `;
        }
    }, 1000)
}

countdown('Mon Oct 26 2020 00:16:56 GMT-0500', 'clock');
}